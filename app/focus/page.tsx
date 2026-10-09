"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { emptyAttempt, useStore } from "@/lib/store";
import { ALL_QUESTIONS, lookup } from "@/lib/content";
import { SECTIONS, TOPICS, TOPIC_ORDER } from "@/lib/sections";
import { Runner, type RunItem } from "@/components/Runner";
import type { TopicId } from "@/lib/types";

const RUN = "focus";

const TAUGHT = new Set<string>(SECTIONS.filter((s) => s.status === "taught").map((s) => s.id));

type Mix = { key: string; label: string; blurb: string; mcq: number; qa: number };
const MIXES: Mix[] = [
  { key: "quick", label: "⚡ Quick 15", blurb: "15 multiple-choice — a 10-minute check", mcq: 15, qa: 0 },
  { key: "mock", label: "📝 Mini mock", blurb: "20 multiple-choice + 5 written — about 45 minutes", mcq: 20, qa: 5 },
  { key: "written", label: "✍️ Written only", blurb: "8 written answers — practise the long explanations", mcq: 0, qa: 8 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FocusPage() {
  const { p, ready, saveAttempt, resetAttempt } = useStore();
  const [running, setRunning] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const [topics, setTopics] = useState<Set<TopicId>>(new Set());

  const taughtTopics = TOPIC_ORDER.filter((t) => SECTIONS.some((s) => s.topic === t && s.status === "taught"));
  const pool = useMemo(
    () =>
      ALL_QUESTIONS.filter((x) => TAUGHT.has(x.q.section) && x.setId !== "paper-jfb" && (topics.size === 0 || topics.has(x.q.topic))),
    [topics],
  );

  const saved = p.attempts[RUN];
  const savedIds = (saved?.ids ?? []).filter((id) => lookup(id));
  const savedDone = saved ? savedIds.filter((id) => saved.answers[id] !== undefined).length : 0;
  const canResume = !!saved && savedIds.length > 0 && !saved.completed && savedDone < savedIds.length;

  /** Pick questions, preferring ones she hasn't answered or got wrong last time. */
  const pick = (kind: "mcq" | "qa", n: number) => {
    const list = pool.filter((x) => x.kind === kind);
    const fresh = shuffle(list.filter((x) => !p.stats[x.q.id] || !p.stats[x.q.id]?.lastCorrect));
    const rest = shuffle(list.filter((x) => p.stats[x.q.id]?.lastCorrect));
    return [...fresh, ...rest].slice(0, n).map((x) => x.q.id);
  };

  const start = (m: Mix) => {
    const ids = [...pick("mcq", m.mcq), ...pick("qa", m.qa)];
    if (!ids.length) return;
    resetAttempt(RUN);
    saveAttempt(RUN, emptyAttempt(ids));
    setRunKey((k) => k + 1);
    setRunning(true);
  };

  if (running && saved?.ids?.length) {
    const items: RunItem[] = savedIds
      .map((id) => lookup(id)!)
      .map((x) => (x.kind === "mcq" ? { kind: "mcq" as const, q: x.q as never } : { kind: "qa" as const, q: x.q as never }));
    return (
      <div className="space-y-3">
        <button onClick={() => setRunning(false)} className="text-sm font-semibold text-indigo-600 hover:underline">
          ← Back to test options
        </button>
        <Runner
          key={runKey}
          mode="practice"
          runId={RUN}
          title="🎯 Taught-so-far test"
          subtitle="Only questions on what you've been taught in class. Saved as you go."
          items={items}
          backHref="/focus"
          backLabel="🎯 New test"
        />
      </div>
    );
  }

  if (!ready) return <div className="h-64 animate-pulse rounded-2xl bg-white" />;

  const later = SECTIONS.filter((s) => s.status !== "taught");

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">🎯 Taught-so-far test</h1>
        <p className="mt-1 text-slate-600">
          A fresh mix every time, drawn only from what your class has covered (from your JFB cover sheets). Questions you haven&apos;t done yet — or got wrong — come up first.
        </p>
      </div>

      {canResume && (
        <button
          onClick={() => setRunning(true)}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border-2 border-indigo-300 bg-indigo-50 px-5 py-4 text-left hover:bg-indigo-100"
        >
          <span>
            <span className="block text-lg font-extrabold text-indigo-900">Continue your test →</span>
            <span className="text-sm text-indigo-800">
              {savedDone} of {savedIds.length} done — your answers are saved.
            </span>
          </span>
          <span className="text-3xl">▶️</span>
        </button>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="mb-2 text-sm font-bold text-slate-700">Topics (leave all off for everything taught):</p>
        <div className="flex flex-wrap gap-1.5">
          {taughtTopics.map((t) => {
            const on = topics.has(t);
            return (
              <button
                key={t}
                onClick={() =>
                  setTopics((prev) => {
                    const next = new Set(prev);
                    if (next.has(t)) next.delete(t);
                    else next.add(t);
                    return next;
                  })
                }
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${on ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              >
                {TOPICS[t].emoji} {TOPICS[t].short}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-slate-500">
          {pool.filter((x) => x.kind === "mcq").length} multiple-choice and {pool.filter((x) => x.kind === "qa").length} written questions in this pool.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {MIXES.map((m) => (
          <button
            key={m.key}
            onClick={() => start(m)}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
          >
            <div className="text-lg font-extrabold text-slate-900">{m.label}</div>
            <div className="mt-1 text-sm text-slate-600">{m.blurb}</div>
            <div className="mt-3 font-bold text-indigo-600">Start →</div>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
        <p className="font-bold text-slate-800">Not in this test (not taught yet)</p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {later.map((s) => (
            <li key={s.id} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {s.emoji} {s.label}
              {s.status === "partial" ? " (partly taught)" : ""}
            </li>
          ))}
        </ul>
        <p className="mt-2">
          Those topics are still in the <Link href="/guide/electro" className="font-semibold text-indigo-600 hover:underline">guides</Link> and <Link href="/bank" className="font-semibold text-indigo-600 hover:underline">question bank</Link> for when you get to them.
        </p>
      </div>
    </div>
  );
}
