"use client";

import { useEffect, useRef, useState } from "react";
import { useTutor } from "@/lib/tutor";
import { MarkdownLite } from "./MarkdownLite";

const STARTERS = [
  "Explain this more simply",
  "Give me an analogy from my life",
  "Give me a hint, not the answer",
  "What wording gets the marks here?",
  "Quiz me with one quick question",
];

/** Floating "Ask Professor Mole" button + chat panel, available on every page. */
export function TutorDock() {
  const t = useTutor();
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [t.messages.length, t.busy, t.open]);

  if (!t.open) {
    return (
      <button
        onClick={t.show}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 font-bold text-white shadow-lg ring-4 ring-white/70 transition hover:scale-105 print:hidden"
        aria-label="Ask the AI tutor"
      >
        <span className="text-xl">🧑‍🔬</span>
        <span className="hidden sm:inline">Ask Professor Mole</span>
        <span className="sm:hidden">Tutor</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-x-2 bottom-2 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-3xl border-2 border-violet-200 bg-white shadow-2xl sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[26rem] print:hidden">
      <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-white">
        <div className="min-w-0">
          <p className="font-extrabold">🧑‍🔬 Professor Mole · AI tutor</p>
          <p className="truncate text-xs text-white/80">{t.label || t.topic}</p>
        </div>
        <div className="flex shrink-0 gap-1">
          {t.messages.length > 0 && (
            <button onClick={t.reset} className="rounded-lg px-2 py-1 text-xs font-semibold text-white/90 hover:bg-white/15" title="Start a new chat">
              New chat
            </button>
          )}
          <button onClick={t.hide} className="rounded-lg px-2 py-1 text-lg leading-none hover:bg-white/15" aria-label="Close tutor">
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-violet-50/40 p-3">
        {t.messages.length === 0 && (
          <div className="space-y-2">
            <p className="rounded-2xl bg-white p-3 text-sm text-slate-700 shadow-sm">
              Hi! Ask me anything about IGCSE Chemistry — a concept, a calculation, or why your answer lost marks. If you&apos;re stuck on a question I&apos;ll nudge you with hints so you crack it yourself. 💡
            </p>
            <div className="flex flex-wrap gap-1.5">
              {STARTERS.map((s) => (
                <button key={s} onClick={() => t.send(s)} disabled={t.busy} className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-semibold text-violet-700 hover:bg-violet-100">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {t.messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="ml-8 rounded-2xl rounded-br-md bg-indigo-600 px-3 py-2 text-sm text-white">
              {m.content}
            </div>
          ) : (
            <div key={i} className="mr-4 rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm shadow-sm">
              <MarkdownLite text={m.content} className="text-[0.92rem] text-slate-800" />
            </div>
          ),
        )}
        {t.busy && <p className="animate-pulse text-sm text-violet-600">Professor Mole is thinking… 💭</p>}
        {t.error && <p className="rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700">{t.error}</p>}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!draft.trim()) return;
          t.send(draft);
          setDraft("");
        }}
        className="flex gap-2 border-t border-violet-100 p-2.5"
      >
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (draft.trim()) {
                t.send(draft);
                setDraft("");
              }
            }
          }}
          rows={1}
          placeholder="Type your question…"
          className="max-h-28 min-h-[2.6rem] flex-1 resize-none rounded-xl border border-violet-200 px-3 py-2 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
        />
        <button type="submit" disabled={t.busy || !draft.trim()} className="rounded-xl bg-violet-600 px-4 text-sm font-bold text-white hover:bg-violet-700 disabled:opacity-50">
          Send
        </button>
      </form>
      <p className="bg-white px-3 pb-2 text-[10px] text-slate-400">AI can make mistakes — check against your guide and your teacher.</p>
    </div>
  );
}

/** A small inline button that opens the tutor with this page's context. */
export function AskTutorButton({
  topic,
  context,
  label,
  prompt,
  children = "🧑‍🔬 Ask the tutor",
  className = "",
}: {
  topic: string;
  context: string;
  label?: string;
  prompt?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const t = useTutor();
  return (
    <button
      onClick={() => t.openWith({ topic, context, label, prompt })}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-semibold text-violet-700 hover:bg-violet-100 ${className}`}
    >
      {children}
    </button>
  );
}
