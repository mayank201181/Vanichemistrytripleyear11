"use client";

import Link from "next/link";
import { useState } from "react";
import type { GuideSection, TopicId } from "@/lib/types";
import { GUIDES, questionsForSection } from "@/lib/content";
import { STATUS_META, TOPICS, TOPIC_ORDER, sectionMeta } from "@/lib/sections";
import { useStore } from "@/lib/store";
import { MarkdownLite } from "./MarkdownLite";
import { Figure } from "./Figures";
import { ListenButton } from "./ListenButton";
import { AskTutorButton } from "./TutorDock";
import { analogiesFor } from "@/lib/extras";
import type { Analogy } from "@/lib/types";

function plain(md: string) {
  return md.replace(/\*\*|\*|`/g, "").replace(/^\s*\|.*\|\s*$/gm, "").replace(/^- /gm, "");
}

export function GuideView({ topic }: { topic: TopicId }) {
  const sections = GUIDES[topic];
  const t = TOPICS[topic];
  const idx = TOPIC_ORDER.indexOf(topic);
  const prev: TopicId | undefined = TOPIC_ORDER[idx - 1];
  const next: TopicId | undefined = TOPIC_ORDER[idx + 1];
  const { p, ready } = useStore();
  const readCount = sections.filter((s) => p.guidesRead[s.id]).length;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-bold uppercase tracking-wide" style={{ color: t.color }}>
          Revision guide · {t.spec}
        </p>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {t.emoji} {t.title}
        </h1>
        <p className="mt-1 text-slate-600">
          Try each <strong>puzzle</strong> before reading, work through the examples, then tick the section when you&apos;ve got it. Stuck? Tap <strong>Ask the tutor</strong> on any section.
          {ready && (
            <span className="ml-1 font-semibold text-slate-800">
              {readCount}/{sections.length} sections done.
            </span>
          )}
        </p>
        <nav className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-slate-50">
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${p.guidesRead[s.id] ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"}`}>
                {p.guidesRead[s.id] ? "✓" : i + 1}
              </span>
              <span className="text-slate-700">{s.heading}</span>
              <StatusPill id={s.id} />
            </a>
          ))}
        </nav>
      </div>

      {sections.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">This guide is being written — check back soon.</div>
      )}
      {sections.map((s, i) => (
        <SectionCard key={s.id} s={s} n={i + 1} topicTitle={t.title} />
      ))}

      <div className="flex flex-wrap justify-between gap-3">
        {prev ? (
          <Link href={`/guide/${prev}`} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700">
            ← {TOPICS[prev].emoji} {TOPICS[prev].short}
          </Link>
        ) : (
          <span />
        )}
        <Link href={`/bank#${topic}`} className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white">
          📝 Test yourself on {t.short}
        </Link>
        {next && (
          <Link href={`/guide/${next}`} className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700">
            {TOPICS[next].emoji} {TOPICS[next].short} →
          </Link>
        )}
      </div>
    </div>
  );
}

function SectionCard({ s, n, topicTitle }: { s: GuideSection; n: number; topicTitle: string }) {
  const { p, markGuideRead } = useStore();
  const [reveal, setReveal] = useState(false);
  const read = !!p.guidesRead[s.id];
  const count = questionsForSection(s.id).length;
  return (
    <section id={s.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
            Section {n} · {s.lesson} <StatusPill id={s.id} />
          </p>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{s.heading}</h2>
        </div>
        <ListenButton getText={() => `${s.heading}. ${plain(s.body)} Key points. ${s.keyPoints.join(". ")}`} />
      </div>

      {sectionMeta(s.id)?.note && (
        <p className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-900">📌 {sectionMeta(s.id)?.note}</p>
      )}
      {sectionMeta(s.id)?.status === "later" && (
        <p className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700">
          📌 Your class hasn&apos;t reached this yet — read it later in the year, or get ahead now.
        </p>
      )}

      {/* discovery puzzle */}
      <div className="mt-4 rounded-2xl border border-violet-200 bg-violet-50 p-4">
        <p className="text-sm font-extrabold text-violet-800">🧩 Puzzle first</p>
        <p className="mt-1 text-violet-950">{s.discovery.problem}</p>
        {reveal ? (
          <p className="mt-2 rounded-xl bg-white/70 p-3 text-violet-950">
            <span className="font-bold">💡 </span>
            {s.discovery.idea}
          </p>
        ) : (
          <button onClick={() => setReveal(true)} className="mt-2 rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-semibold text-white">
            I&apos;ve had a think — show me
          </button>
        )}
      </div>

      <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div className="min-w-0">
          <MarkdownLite text={s.body} />
        </div>
        <div className="min-w-0 space-y-3">
          {s.figure && (
            <figure className="rounded-2xl border border-slate-100 bg-slate-50 p-2">
              <div className="diagram">
                <Figure figure={s.figure} />
              </div>
              {s.diagramCaption && !s.diagram && <figcaption className="mt-1 px-1 text-center text-xs text-slate-500">{s.diagramCaption}</figcaption>}
            </figure>
          )}
          {s.diagram && (
            <figure className="rounded-2xl border border-slate-100 bg-slate-50 p-2">
              <div className="diagram" dangerouslySetInnerHTML={{ __html: s.diagram }} />
              {s.diagramCaption && <figcaption className="mt-1 px-1 text-center text-xs text-slate-500">{s.diagramCaption}</figcaption>}
            </figure>
          )}
        </div>
      </div>

      <Analogies list={analogiesFor(s.id)} />

      {s.workedExample && <WorkedExample ex={s.workedExample} />}

      <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-extrabold text-emerald-800">✅ Key points</p>
        <ul className="mt-1.5 space-y-1">
          {s.keyPoints.map((k, i) => (
            <li key={i} className="flex gap-2 text-emerald-950">
              <span>•</span>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <Callout tone="sky" title="🤔 Why does this work?" text={s.whyItWorks} />
        {s.memoryTrick && <Callout tone="fuchsia" title="🧠 Memory trick" text={s.memoryTrick} />}
        <Callout tone="amber" title="⚠️ Exam tip" text={s.examTip} />
        <Callout tone="slate" title="🚀 Think deeper" text={s.thinkDeeper} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={() => markGuideRead(s.id, !read)}
          className={`rounded-xl px-4 py-2 font-semibold ${read ? "bg-emerald-600 text-white" : "border border-emerald-300 bg-white text-emerald-700 hover:bg-emerald-50"}`}
        >
          {read ? "✓ Got it" : "Tick when you've got it"}
        </button>
        {count > 0 && (
          <Link href={`/practice/${s.id}`} className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
            Practise this section ({count} questions) →
          </Link>
        )}
        <AskTutorButton
          topic={`${topicTitle} — ${s.heading}`}
          label={s.heading}
          context={`She is reading the revision-guide section "${s.heading}" (${s.lesson}).\n\n${plain(s.body).slice(0, 4000)}\n\nKey points: ${s.keyPoints.join(" | ")}`}
        >
          🧑‍🔬 Ask the tutor
        </AskTutorButton>
        <AskTutorButton
          topic={`${topicTitle} — ${s.heading}`}
          label={s.heading}
          context={`She is reading the revision-guide section "${s.heading}" (${s.lesson}).\n\n${plain(s.body).slice(0, 4000)}`}
          prompt="Explain this section with a new analogy from my everyday life, then tell me where the analogy breaks down."
        >
          💡 Another analogy
        </AskTutorButton>
      </div>
    </section>
  );
}

function Callout({ tone, title, text }: { tone: "sky" | "fuchsia" | "amber" | "slate"; title: string; text: string }) {
  const cls = {
    sky: "border-sky-200 bg-sky-50 text-sky-950",
    fuchsia: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    slate: "border-slate-200 bg-slate-50 text-slate-800",
  }[tone];
  return (
    <div className={`rounded-2xl border p-4 ${cls}`}>
      <p className="text-sm font-extrabold">{title}</p>
      <MarkdownLite text={text} className="mt-1 text-[0.95rem] !text-inherit" />
    </div>
  );
}

function WorkedExample({ ex }: { ex: { problem: string; solution: string } }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-4 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4">
      <p className="text-sm font-extrabold text-indigo-800">✏️ Worked example — try it first</p>
      <MarkdownLite text={ex.problem} className="mt-1 text-indigo-950" />
      {show ? (
        <div className="mt-2 rounded-xl bg-white/80 p-3">
          <MarkdownLite text={ex.solution} className="text-slate-800" />
        </div>
      ) : (
        <button onClick={() => setShow(true)} className="mt-2 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white">
          I&apos;ve tried — show the solution
        </button>
      )}
    </div>
  );
}

function Analogies({ list }: { list: Analogy[] }) {
  const [open, setOpen] = useState<number | null>(null);
  if (!list.length) return null;
  return (
    <div className="mt-4 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-amber-50 p-4">
      <p className="text-sm font-extrabold text-pink-800">💡 Think of it like…</p>
      <div className="mt-2 grid gap-3 md:grid-cols-2">
        {list.map((a, i) => (
          <div key={i} className="rounded-xl bg-white/80 p-3 shadow-sm">
            <p className="font-bold text-slate-900">{a.title}</p>
            <MarkdownLite text={a.text} className="mt-1 text-[0.95rem] text-slate-800" />
            {open === i ? (
              <p className="mt-2 rounded-lg bg-amber-50 px-2.5 py-1.5 text-sm text-amber-900">
                <span className="font-semibold">⚠️ Where it breaks down: </span>
                {a.breaksDown}
              </p>
            ) : (
              <button onClick={() => setOpen(i)} className="mt-2 text-xs font-semibold text-pink-700 underline underline-offset-2">
                Where does this analogy break down?
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusPill({ id }: { id: string }) {
  const st = sectionMeta(id)?.status;
  if (!st) return null;
  const m = STATUS_META[st];
  return <span className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold normal-case tracking-normal ${m.className}`}>{m.label}</span>;
}
