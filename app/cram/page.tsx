"use client";

import { GUIDES } from "@/lib/content";
import { TOPICS, TOPIC_ORDER } from "@/lib/sections";

function Box({ title, children, tone = "slate" }: { title: string; children: React.ReactNode; tone?: "rose" | "emerald" | "slate" | "amber" }) {
  const cls = {
    rose: "border-rose-200 bg-rose-50/50",
    emerald: "border-emerald-200 bg-emerald-50/50",
    slate: "border-slate-200 bg-white",
    amber: "border-amber-300 bg-amber-50",
  }[tone];
  return (
    <section className={`break-inside-avoid rounded-2xl border p-4 ${cls}`}>
      <h3 className="mb-2 font-extrabold text-slate-900">{title}</h3>
      <div className="space-y-1.5 text-sm leading-relaxed text-slate-800">{children}</div>
    </section>
  );
}

function T({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="border border-slate-300 bg-slate-100 px-2 py-1 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className="border border-slate-300 bg-white px-2 py-1 align-top">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CramPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">⚡ Cram sheet</h1>
          <p className="text-slate-600">The must-know facts and the mark-losing traps — the night before, or on the bus.</p>
        </div>
        <button onClick={() => window.print()} className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 print:hidden">
          🖨️ Print
        </button>
      </div>

      <h2 className="text-xl font-extrabold text-indigo-700">🎯 The big tables</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Box title="🔎 Tests for gases" tone="emerald">
          <T
            head={["Gas", "Test", "Result"]}
            rows={[
              ["H₂", "lighted splint", "squeaky pop"],
              ["O₂", "glowing splint", "relights"],
              ["CO₂", "bubble through limewater", "turns milky / cloudy"],
              ["NH₃", "damp red litmus", "turns blue"],
              ["Cl₂", "damp (blue) litmus", "bleached (red then white)"],
            ]}
          />
        </Box>
        <Box title="🔎 Tests for ions" tone="emerald">
          <T
            head={["Ion", "Test", "Result"]}
            rows={[
              ["Li⁺ / Na⁺ / K⁺", "flame test", "red / yellow / lilac"],
              ["Ca²⁺ / Cu²⁺", "flame test", "orange-red / blue-green"],
              ["NH₄⁺", "NaOH(aq), warm", "NH₃ turns damp red litmus blue"],
              ["Cu²⁺ / Fe²⁺ / Fe³⁺", "NaOH(aq)", "blue / green / brown ppt"],
              ["Cl⁻ / Br⁻ / I⁻", "dil. HNO₃ + AgNO₃(aq)", "white / cream / yellow ppt"],
              ["SO₄²⁻", "dil. HCl + BaCl₂(aq)", "white ppt"],
              ["CO₃²⁻", "dilute acid", "fizzes; CO₂ turns limewater milky"],
              ["water", "anhydrous CuSO₄ / bp", "white → blue / pure: boils at 100 °C"],
            ]}
          />
        </Box>
        <Box title="🌈 Indicators">
          <T
            head={["Indicator", "Acid", "Alkali"]}
            rows={[
              ["litmus", "red", "blue"],
              ["methyl orange", "red", "yellow (orange at end point)"],
              ["phenolphthalein", "colourless", "pink"],
            ]}
          />
          <p>Not universal indicator in a titration — gradual colour change, <strong>no sharp end point</strong>.</p>
        </Box>
        <Box title="🧂 Solubility rules">
          <p>✅ Soluble: all <strong>sodium, potassium, ammonium</strong> salts; all <strong>nitrates</strong>; most chlorides (not Ag, Pb); most sulfates (not Ba, Ca, Pb).</p>
          <p>❌ Insoluble: most <strong>carbonates</strong> and <strong>hydroxides</strong> (except Na, K, NH₄; Ca(OH)₂ slightly).</p>
          <p>Soluble salt: excess insoluble base → filter → heat to <strong>crystallisation point</strong> → cool → filter → dry. Alkali + acid: titrate, then repeat <strong>without indicator</strong>. Insoluble salt: mix two solutions → filter → wash → dry.</p>
        </Box>
        <Box title="🧮 Equations to know by heart" tone="amber">
          <p>moles = mass ÷ M<sub>r</sub> · gas volume (dm³) = moles × 24 · moles = conc (mol/dm³) × vol (dm³)</p>
          <p>cm³ → dm³: ÷ 1000 · % yield = actual ÷ theoretical × 100</p>
          <p>Q = m × c × ΔT (c = 4.2 J/g/°C) · ΔH = −Q ÷ n · ΔH = bonds broken − bonds made</p>
          <p>R<sub>f</sub> = distance moved by spot ÷ distance moved by solvent</p>
        </Box>
        <Box title="⏱️ Collision theory (4-mark answer)" tone="amber">
          <p>Temperature ↑ → particles have more <strong>kinetic energy</strong> → collide <strong>more frequently</strong> AND a greater proportion have energy ≥ <strong>activation energy</strong> → more <strong>successful collisions per unit time</strong>.</p>
          <p>Concentration / pressure ↑ → more particles per unit volume → more frequent collisions. Surface area ↑ → more particles exposed. Catalyst → alternative pathway with <strong>lower activation energy</strong>.</p>
        </Box>
      </div>

      {TOPIC_ORDER.map((t) =>
        GUIDES[t].length ? (
          <div key={t} className="space-y-3">
            <h2 className="text-xl font-extrabold" style={{ color: TOPICS[t].color }}>
              {TOPICS[t].emoji} {TOPICS[t].title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {GUIDES[t].map((s) => (
                <Box key={s.id} title={s.heading}>
                  <ul className="list-disc space-y-1 pl-4">
                    {s.keyPoints.map((k, i) => (
                      <li key={i}>{k}</li>
                    ))}
                  </ul>
                  <p className="mt-2 rounded-lg bg-amber-50 px-2 py-1.5 text-[13px] text-amber-900">
                    <strong>⚠️ </strong>
                    {s.examTip.replace(/\*\*/g, "")}
                  </p>
                </Box>
              ))}
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
}
