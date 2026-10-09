"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore, rankFor, streak, type Progress } from "@/lib/store";
import { ALL_QUESTIONS, CONTENT, GUIDES, PAPER } from "@/lib/content";
import { STATUS_META, TOPICS, TOPIC_ORDER, topicStatus } from "@/lib/sections";
import { openMistakes, sectionMastery } from "@/lib/share";
import { ShareButton } from "@/components/ShareButton";
import { useTutor } from "@/lib/tutor";
import type { TopicId } from "@/lib/types";

type Task = { key: string; label: string; href: string; done?: (p: Progress) => boolean };

const guideDone = (topic: TopicId) => (p: Progress) => GUIDES[topic].length > 0 && GUIDES[topic].every((s) => p.guidesRead[s.id]);
const setDone = (id: string) => (p: Progress) => !!p.best[id];

// Roadmap: the teacher's paper first, then the topics it leans on, then everything else.
const ROADMAP: { title: string; blurb: string; tasks: Task[] }[] = [
  {
    title: "1 · The teacher's paper",
    blurb: "Do JFB's consolidation paper here — marked instantly, with model answers.",
    tasks: [
      { key: "paper", label: "Teacher's paper — all 5 questions (49 marks)", href: "/set/paper-jfb", done: setDone("paper-jfb") },
      { key: "fix-paper", label: "Fix every mistake from it", href: "/review" },
    ],
  },
  {
    title: "2 · What the paper tests",
    blurb: "Salts, titration, rates, metallic bonding, moles and practical skills.",
    tasks: [
      { key: "g-acids", label: "Guide: Acids, Salts & Chemical Tests", href: "/guide/acids", done: guideDone("acids") },
      { key: "s-acids", label: "Questions: Acids, Salts & Tests", href: "/set/mcq-acids", done: setDone("mcq-acids") },
      { key: "g-physical", label: "Guide: Physical Chemistry (rates!)", href: "/guide/physical", done: guideDone("physical") },
      { key: "s-calc", label: "Questions: Moles & calculations", href: "/set/written-calc", done: setDone("written-calc") },
      { key: "g-bonding", label: "Guide: Bonding (metallic bonding)", href: "/guide/bonding", done: guideDone("bonding") },
      { key: "s-practical", label: "Questions: Practical skills", href: "/set/mcq-practical", done: setDone("mcq-practical") },
    ],
  },
  {
    title: "3 · Everything taught so far",
    blurb: "The rest of what your class has covered, then mixed tests.",
    tasks: [
      { key: "g-principles", label: "Guide: Principles (atoms, Periodic Table, separation)", href: "/guide/principles", done: guideDone("principles") },
      { key: "g-calc", label: "Guide: Formulae, Equations & Moles", href: "/guide/calc", done: guideDone("calc") },
      { key: "g-inorganic", label: "Guide: Groups 1 & 7, gases in the air", href: "/guide/inorganic" },
      { key: "g-organic", label: "Guide: Organic (crude oil → polymers)", href: "/guide/organic" },
      { key: "focus", label: "🎯 Taught-so-far test (do it weekly)", href: "/focus" },
      { key: "cram", label: "Print the cram sheet", href: "/cram" },
    ],
  },
];

export default function Home() {
  const { p, ready, setName, togglePlan } = useStore();
  const tutor = useTutor();
  const [nameDraft, setNameDraft] = useState("");

  const answered = ALL_QUESTIONS.filter((x) => p.stats[x.q.id]).length;
  const scored = ALL_QUESTIONS.map((x) => p.stats[x.q.id]).filter(Boolean);
  const accuracy = scored.length ? Math.round((scored.reduce((s, x) => s + (x?.lastScore ?? 0), 0) / scored.length) * 100) : null;
  const mistakes = openMistakes(p).length;
  const rank = rankFor(p.stars);
  const mastery = sectionMastery(p);
  const days = streak(p.days);
  const paperBest = p.best[PAPER.id];

  return (
    <div className="space-y-6">
      {/* hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-violet-600 to-emerald-600 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Year 11 · Edexcel International GCSE Chemistry 4CH1 · Triple</p>
        <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">{ready && p.name ? `Hi ${p.name}! 👋` : "Your chemistry lab 👋"}</h1>
        <p className="mt-2 max-w-2xl text-white/90">
          {`Revision guides for every topic, ${ALL_QUESTIONS.length} exam-style questions`} marked instantly (with an AI examiner for second opinions), your teacher&apos;s October consolidation paper, flashcards, interactive labs — and Professor Mole, your AI tutor, on every page.
        </p>
        {ready && !p.name && (
          <form
            className="mt-5 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (nameDraft.trim()) setName(nameDraft.trim());
            }}
          >
            <input
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              placeholder="What's your first name?"
              className="min-w-0 flex-1 rounded-xl border-0 bg-white px-3 py-2 text-slate-900 outline-none ring-2 ring-white/40 placeholder:text-slate-400 focus:ring-white"
            />
            <button className="rounded-xl bg-white px-4 py-2 font-bold text-indigo-700">Save</button>
          </form>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/set/paper-jfb" className="rounded-xl bg-white px-4 py-2.5 font-bold text-indigo-700 shadow hover:bg-indigo-50">
            📄 {paperBest ? `Teacher's paper — best ${paperBest.pct}%` : "Start with the teacher's paper"}
          </Link>
          <Link href="/focus" className="rounded-xl bg-white/15 px-4 py-2.5 font-semibold text-white ring-1 ring-white/40 hover:bg-white/25">
            🎯 Taught-so-far test
          </Link>
          <Link href="/guide/principles" className="rounded-xl bg-white/15 px-4 py-2.5 font-semibold text-white ring-1 ring-white/40 hover:bg-white/25">
            📖 Revision guides
          </Link>
          <button
            onClick={() => tutor.openWith({ topic: "IGCSE Chemistry", label: "General help" })}
            className="rounded-xl bg-white/15 px-4 py-2.5 font-semibold text-white ring-1 ring-white/40 hover:bg-white/25"
          >
            🧑‍🔬 Ask the AI tutor
          </button>
        </div>
      </section>

      {/* stats */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Questions done" value={`${answered}/${ALL_QUESTIONS.length}`} />
        <Stat label={days ? `Accuracy · 🔥 ${days}-day streak` : "Accuracy"} value={accuracy === null ? "—" : `${accuracy}%`} />
        <Link href="/review" className="block">
          <Stat label="Mistakes to fix" value={String(mistakes)} tone={mistakes ? "rose" : "emerald"} />
        </Link>
        <Stat label={rank.next ? `${rank.next.min - p.stars} ⭐ to ${rank.next.title}` : "Top rank!"} value={`${rank.emoji} ${p.stars}⭐`} />
      </section>

      {/* roadmap */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold text-slate-900">🗺️ Your roadmap</h2>
          <span className="text-xs text-slate-500">Ticks itself as you finish things — or tap to tick.</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ROADMAP.map((stage) => (
            <div key={stage.title} className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-extrabold text-slate-800">{stage.title}</p>
              <p className="mb-2 text-xs text-slate-500">{stage.blurb}</p>
              <ul className="space-y-1.5">
                {stage.tasks.map((t) => {
                  const auto = ready && t.done ? t.done(p) : false;
                  const done = auto || !!p.plan[t.key];
                  return (
                    <li key={t.key} className="flex items-start gap-2">
                      <button
                        onClick={() => togglePlan(t.key)}
                        disabled={auto}
                        aria-label={done ? "Mark not done" : "Mark done"}
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border text-xs ${done ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white"}`}
                      >
                        {done ? "✓" : ""}
                      </button>
                      <Link href={t.href} className={`text-sm hover:text-indigo-700 hover:underline ${done ? "text-slate-400 line-through" : "text-slate-700"}`}>
                        {t.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* topics */}
      <section>
        <h2 className="mb-3 text-lg font-extrabold text-slate-900">🧭 Topics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[...TOPIC_ORDER]
            .sort((a, b) => ["taught", "partial", "later"].indexOf(topicStatus(a)) - ["taught", "partial", "later"].indexOf(topicStatus(b)))
            .map((t) => {
            const topic = TOPICS[t];
            const st = STATUS_META[topicStatus(t)];
            const c = CONTENT[t];
            const nq = c.mcq.questions.length + c.qa.questions.length;
            return (
              <div key={t} id={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl" style={{ background: `${topic.color}18` }}>
                    {topic.emoji}
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex flex-wrap items-center gap-2 text-lg font-extrabold text-slate-900">
                      {topic.title}
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${st.className}`}>{st.label}</span>
                    </h3>
                    <p className="text-sm text-slate-500">
                      {topic.spec} · {GUIDES[t].length} sections · {nq} questions
                    </p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {mastery
                    .filter((m) => m.topic === t)
                    .map((m) => (
                      <li key={m.id}>
                        <Link href={`/practice/${m.id}`} className="flex items-center gap-2 rounded-lg px-1 py-0.5 hover:bg-slate-50">
                          <span className="w-40 shrink-0 truncate text-sm text-slate-700 sm:w-52">{m.label}</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                            {m.answered > 0 && (
                              <div
                                className={`h-full rounded-full ${m.score >= 0.8 ? "bg-emerald-500" : m.score >= 0.5 ? "bg-amber-400" : "bg-rose-500"}`}
                                style={{ width: `${Math.max(6, m.score * 100)}%` }}
                              />
                            )}
                          </div>
                          <span className="w-14 text-right text-xs text-slate-500">{m.answered ? `${Math.round(m.score * 100)}%` : `0/${m.total}`}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={`/guide/${t}`} className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white">
                    📖 Guide
                  </Link>
                  {c.mcq.questions.length > 0 && (
                    <Link href={`/set/${c.mcq.id}`} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      Multiple choice{p.best[c.mcq.id] ? ` · ${p.best[c.mcq.id].pct}%` : ""}
                    </Link>
                  )}
                  {c.qa.questions.length > 0 && (
                    <Link href={`/set/${c.qa.id}`} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      Written{p.best[c.qa.id] ? ` · ${p.best[c.qa.id].pct}%` : ""}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div>
          <h2 className="font-extrabold text-emerald-900">Show a parent how you&apos;re doing</h2>
          <p className="text-sm text-emerald-800">Sends your best score for every set, your weakest topics and how many mistakes are left.</p>
        </div>
        <ShareButton progress={p} />
      </section>
    </div>
  );
}

function Stat({ label, value, tone = "slate" }: { label: string; value: string; tone?: "slate" | "rose" | "emerald" }) {
  const color = tone === "rose" ? "text-rose-600" : tone === "emerald" ? "text-emerald-600" : "text-slate-900";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className={`text-2xl font-extrabold ${color}`}>{value}</div>
      <div className="text-xs font-semibold text-slate-500">{label}</div>
    </div>
  );
}
