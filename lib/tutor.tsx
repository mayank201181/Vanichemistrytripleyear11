"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

// The AI tutor ("Professor Mole") lives in one floating panel. Any page can open it
// with context (the guide section or question she's looking at) and an optional first message.

export type TutorMsg = { role: "user" | "assistant"; content: string };

type OpenArgs = { topic: string; context?: string; label?: string; prompt?: string };

interface Tutor {
  open: boolean;
  busy: boolean;
  error: string;
  topic: string;
  label: string;
  messages: TutorMsg[];
  openWith: (a: OpenArgs) => void;
  show: () => void;
  hide: () => void;
  send: (text: string) => void;
  reset: () => void;
}

const Ctx = createContext<Tutor | null>(null);

export function TutorProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [topic, setTopic] = useState("IGCSE Chemistry");
  const [label, setLabel] = useState("");
  const [messages, setMessages] = useState<TutorMsg[]>([]);
  const contextRef = useRef("");
  const topicRef = useRef("IGCSE Chemistry");
  const busyRef = useRef(false);
  const msgsRef = useRef<TutorMsg[]>([]);

  const send = useCallback(async (text: string) => {
    const t = text.trim();
    if (!t || busyRef.current) return;
    const next = [...msgsRef.current, { role: "user" as const, content: t }];
    msgsRef.current = next;
    setMessages(next);
    busyRef.current = true;
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "tutor", topic: topicRef.current, context: contextRef.current, messages: next }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.text) {
        setError(j.error || "Something went wrong — try again.");
      } else {
        const withReply = [...msgsRef.current, { role: "assistant" as const, content: j.text as string }];
        msgsRef.current = withReply;
        setMessages(withReply);
      }
    } catch {
      setError("Couldn't reach the tutor. Check your internet connection.");
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }, []);

  const openWith = useCallback(
    ({ topic: tp, context = "", label: lb = "", prompt }: OpenArgs) => {
      const changed = context !== contextRef.current || tp !== topicRef.current;
      contextRef.current = context;
      topicRef.current = tp;
      setTopic(tp);
      setLabel(lb);
      if (changed) {
        msgsRef.current = [];
        setMessages([]);
        setError("");
      }
      setOpen(true);
      if (prompt) void send(prompt);
    },
    [send],
  );

  const value = useMemo<Tutor>(
    () => ({
      open,
      busy,
      error,
      topic,
      label,
      messages,
      openWith,
      show: () => setOpen(true),
      hide: () => setOpen(false),
      send: (t) => void send(t),
      reset: () => {
        msgsRef.current = [];
        setMessages([]);
        setError("");
      },
    }),
    [open, busy, error, topic, label, messages, openWith, send],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTutor(): Tutor {
  const t = useContext(Ctx);
  if (!t) throw new Error("useTutor must be used inside <TutorProvider>");
  return t;
}
