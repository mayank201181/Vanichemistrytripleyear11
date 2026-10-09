import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod/v4";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MODEL = process.env.AI_MODEL || "claude-opus-5-5";

// ---------------------------------------------------------------------------
// Light abuse protection — the app has no login, so cap sizes and requests per IP.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 60;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // same-origin fetches from some browsers omit it
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

const clip = (s: unknown, n: number) => String(s ?? "").slice(0, n);

// ---------------------------------------------------------------------------

const TUTOR_SYSTEM = `You are "Professor Mole", a warm, sharp chemistry tutor for a Year 11 student (age 15–16) at a British international school in Singapore, studying Pearson Edexcel International GCSE Chemistry 4CH1 (Triple award, so the triple-only content is included).

How you teach (Art of Problem Solving style):
- If she asks for help with a question she is trying, do NOT hand over the full answer. Ask one guiding question or give the single next hint, then let her try. Only give a full worked solution if she explicitly says she has given up or asks to see the full answer.
- If she asks to understand a concept, explain it clearly and precisely, the way an Edexcel examiner would credit it, and say WHY it works (particles, electrons, energy).
- Analogies help her a lot: when explaining a concept, include one short analogy from a Singapore teenager's everyday life (e.g. concerts and ticket queues, bubble tea, hawker centres, the MRT at rush hour, group chats, playlists, phone charging, skincare, baking, netball/dance, Diwali lights, making chai — vegetarian food only). Map each part of the analogy to the chemistry, then add one line on where the analogy breaks down. Vary the analogies; never be patronising.
- Use exam-board wording and key terms (e.g. "delocalised electrons free to move and carry charge", "more frequent successful collisions per unit time", "heat to the point of crystallisation"). Point out the phrase that earns the mark and common mark-losing slips.
- For calculations, show clear steps with units (moles = mass ÷ Mr; cm³ ÷ 1000 → dm³; 24 dm³/mol at rtp) and use Edexcel relative atomic masses (Cl = 35.5, Cu = 63.5).
- Use British spelling (sulfur, aluminium, neutralise, colour) and proper notation (H₂O, CO₂, Cu²⁺, →, ⇌, ΔH).
- Be encouraging and specific in praise when her reasoning is good. Stay accurate — if unsure, say so.
- Keep replies short: usually 3–8 sentences or a few bullet points. Plain text only (no markdown headings); simple "- " bullets and **bold** for key terms are fine.
- Stay on chemistry, science and study skills. Politely steer anything off-topic, unsafe (e.g. making dangerous substances at home) or inappropriate back to revision.`;

const MARK_SYSTEM = `You are a fair, experienced Pearson Edexcel International GCSE Chemistry (4CH1) examiner marking a Year 11 student's typed answer against the mark scheme provided.

Rules:
- Award each mark point independently. Credit the chemistry idea, not exact wording: accept equivalent correct phrasing, correct synonyms, minor spelling errors and correct numerical answers with sensible rounding (follow Edexcel "allow ecf" (error carried forward) conventions for calculations where the method is right but uses an earlier wrong value).
- Do NOT credit vague answers where Edexcel would not (e.g. "more collisions" without "per second / more frequent" for a rate point; "electrons move" for ionic compounds; "it boils at 100" for an unrelated point). Do not credit contradictions: if she states the right idea and a wrong one for the same point, withhold that mark.
- Never award more marks than the scheme allows. Be strict but not pedantic — like a real senior examiner.
- Feedback is written to the student ("you"), warm and specific: what earned marks, exactly what would have earned the missing marks, and one tip to phrase it like the mark scheme. British spelling. Keep "overall" to 2–4 sentences and each point's note to one sentence.`;

const MarkResult = z.object({
  points: z.array(
    z.object({
      awarded: z.boolean(),
      note: z.string(),
    }),
  ),
  overall: z.string(),
  improvedAnswer: z.string(),
});

type ChatMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: "Not allowed." }, { status: 403 });
  const ip = (req.headers.get("x-forwarded-for") ?? "local").split(",")[0].trim();
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Lots of questions! Take a short break and try again in a few minutes." }, { status: 429 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "The AI tutor isn't switched on yet — ask a parent to add the API key." }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Bad request." }, { status: 400 });

  const client = new Anthropic();

  try {
    if (body.mode === "mark") {
      const question = clip(body.question, 3000);
      const answer = clip(body.answer, 4000);
      const points: string[] = Array.isArray(body.points) ? body.points.slice(0, 12).map((p: unknown) => clip(p, 400)) : [];
      const model = clip(body.modelAnswer, 3000);
      if (!question || !answer.trim() || !points.length) return NextResponse.json({ error: "Nothing to mark." }, { status: 400 });

      const prompt = `QUESTION (${points.length} marks):
"""${question}"""

MARK SCHEME — one mark per point, in this order:
${points.map((p, i) => `${i + 1}. ${p}`).join("\n")}

MODEL ANSWER (for reference only — other correct answers are fine):
"""${model}"""

STUDENT'S ANSWER:
"""${answer}"""

Mark the student's answer. Return exactly ${points.length} entries in "points", in mark-scheme order. "improvedAnswer" is a full-marks version written in the student's own style, fixing only what was missing or wrong — or an empty string if she already has full marks.`;

      const res = await client.messages.parse({
        model: MODEL,
        max_tokens: 4000,
        system: MARK_SYSTEM,
        output_config: { effort: "medium", format: zodOutputFormat(MarkResult) },
        messages: [{ role: "user", content: prompt }],
      });
      if (res.stop_reason === "refusal") return NextResponse.json({ error: "The examiner couldn't mark that one." }, { status: 422 });
      const out = res.parsed_output;
      if (!out || out.points.length !== points.length) {
        return NextResponse.json({ error: "The examiner got muddled — try again." }, { status: 502 });
      }
      return NextResponse.json(out);
    }

    // Tutor chat
    const topic = clip(body.topic, 200) || "IGCSE Chemistry";
    const context = clip(body.context, 6000);
    const history: ChatMsg[] = Array.isArray(body.messages)
      ? body.messages
          .filter((m: ChatMsg) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
          .slice(-12)
          .map((m: ChatMsg) => ({ role: m.role, content: clip(m.content, 3000) }))
      : [];
    if (!history.length || history[history.length - 1].role !== "user") {
      return NextResponse.json({ error: "Ask me something!" }, { status: 400 });
    }
    while (history.length && history[0].role !== "user") history.shift();

    const ctx = `Current topic: ${topic}${context ? `\n\nWhat she is looking at right now (use it to understand her question):\n"""${context}"""` : ""}`;
    const messages: Anthropic.Beta.BetaMessageParam[] = history.map((m, i) =>
      i === 0 ? { role: "user", content: `${ctx}\n\n---\n\n${m.content}` } : m,
    );

    // Server-side fallback: if a safety classifier over-triggers on an innocent
    // chemistry question, the same request is re-run on the fallback model.
    const res = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: TUTOR_SYSTEM,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-06-01"],
      fallbacks: [{ model: "claude-opus-4-8" }],
      messages,
    });
    if (res.stop_reason === "refusal") {
      return NextResponse.json({ text: "Let's keep to chemistry revision — what topic shall we look at?" });
    }
    const text = res.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ text: text || "Hmm, try asking that another way?" });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "The tutor is busy right now — try again in a moment." }, { status: 429 });
    }
    if (e instanceof Anthropic.AuthenticationError) {
      return NextResponse.json({ error: "The AI key isn't working — ask a parent to check it." }, { status: 503 });
    }
    if (e instanceof Anthropic.APIError) {
      return NextResponse.json({ error: "Sorry, the tutor couldn't answer just now." }, { status: 502 });
    }
    return NextResponse.json({ error: "Sorry, something went wrong." }, { status: 500 });
  }
}
