"use client";

import { useState } from "react";
import type { QA } from "@/lib/types";
import { MarkdownLite } from "./MarkdownLite";

type Result = { points: { awarded: boolean; note: string }[]; overall: string; improvedAnswer: string };

/**
 * "Second opinion" marking by Claude, acting as an Edexcel examiner. The instant keyword
 * marker is fast but literal; the AI examiner reads the answer like a person would.
 */
export function AiExaminer({
  qa,
  answer,
  current,
  onApply,
}: {
  qa: QA;
  answer: string;
  current: boolean[];
  onApply: (awarded: boolean[]) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [res, setRes] = useState<Result | null>(null);
  const [applied, setApplied] = useState(false);

  async function run() {
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "mark",
          question: qa.question + (qa.table ? `\n\nData: ${qa.table.headers.join(" | ")} / ${qa.table.rows.map((row) => row.join(" | ")).join(" / ")}` : ""),
          points: qa.markScheme.map((m) => m.point),
          modelAnswer: qa.modelAnswer,
          answer,
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) setError(j.error || "The AI examiner couldn't mark this right now.");
      else setRes(j as Result);
    } catch {
      setError("Couldn't reach the AI examiner. Check your connection.");
    } finally {
      setBusy(false);
    }
  }

  if (!res) {
    return (
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-violet-800">✨ Want a second opinion?</p>
            <p className="text-sm text-violet-900/80">The AI examiner reads your answer like a real Edexcel examiner and explains every mark.</p>
          </div>
          <button onClick={run} disabled={busy} className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-bold text-white hover:bg-violet-700 disabled:opacity-60">
            {busy ? "Marking…" : "✨ Mark with AI examiner"}
          </button>
        </div>
        {busy && <p className="mt-2 animate-pulse text-sm text-violet-600">Reading your answer carefully… (about 10–20 seconds)</p>}
        {error && <p className="mt-2 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
      </div>
    );
  }

  const aiScore = res.points.filter((p) => p.awarded).length;
  const differs = res.points.some((p, i) => p.awarded !== current[i]);

  return (
    <div className="rounded-xl border-2 border-violet-300 bg-white p-4">
      <p className="text-sm font-extrabold uppercase tracking-wide text-violet-700">✨ AI examiner&apos;s marking</p>
      <p className="mt-1 text-lg font-extrabold text-slate-900">
        {aiScore} / {qa.marks} marks
      </p>
      <ul className="mt-2 space-y-2">
        {res.points.map((p, i) => (
          <li key={i} className={`rounded-lg border p-2.5 text-sm ${p.awarded ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}>
            <span className="mr-1">{p.awarded ? "✅" : "❌"}</span>
            <span className="font-semibold text-slate-800">{qa.markScheme[i]?.point}</span>
            <p className="mt-0.5 text-slate-700">{p.note}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-lg bg-violet-50 p-3 text-sm text-violet-950">
        <MarkdownLite text={res.overall} className="text-violet-950" />
      </div>
      {res.improvedAnswer.trim().length > 20 && (
        <details className="mt-3 rounded-lg border border-slate-200 p-3 text-sm">
          <summary className="cursor-pointer font-semibold text-slate-700">Your answer, upgraded to full marks</summary>
          <MarkdownLite text={res.improvedAnswer} className="mt-2 text-slate-800" />
        </details>
      )}
      {differs && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              onApply(res.points.map((p) => p.awarded));
              setApplied(true);
            }}
            disabled={applied}
            className="rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-bold text-white hover:bg-violet-700 disabled:opacity-60"
          >
            {applied ? "✓ Using the AI examiner's marks" : "Use the AI examiner's marks"}
          </button>
          <span className="text-xs text-slate-500">The instant marker and the AI disagree on some points — you choose.</span>
        </div>
      )}
      <p className="mt-2 text-[11px] text-slate-400">AI can make mistakes — if something looks wrong, check the mark scheme above or ask your teacher.</p>
    </div>
  );
}
