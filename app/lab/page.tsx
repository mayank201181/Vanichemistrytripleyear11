"use client";

import { useState } from "react";
import { LABS } from "@/components/Labs";

export default function LabPage() {
  const [tab, setTab] = useState(LABS[0].key);
  const lab = LABS.find((l) => l.key === tab) ?? LABS[0];
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">🔬 Interactive labs</h1>
        <p className="mt-1 text-slate-600">Change the conditions and watch what happens — then explain it in exam language.</p>
      </div>
      <div className="nav-scroll flex gap-1.5 overflow-x-auto pb-1">
        {LABS.map((l) => (
          <button
            key={l.key}
            onClick={() => setTab(l.key)}
            className={`shrink-0 rounded-xl px-3.5 py-2 text-sm font-bold ${tab === l.key ? "bg-indigo-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-500">{lab.blurb}</p>
      <lab.el key={lab.key} />
    </div>
  );
}
