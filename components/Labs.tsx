"use client";

import { useMemo, useState, type ReactElement, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Shared helpers

function Frame({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
      <p className="mt-1 text-slate-600">{intro}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Btn({
  onClick,
  children,
  tone = "indigo",
  disabled,
}: {
  onClick: () => void;
  children: ReactNode;
  tone?: "indigo" | "slate" | "emerald" | "rose";
  disabled?: boolean;
}) {
  const cls = {
    indigo: "bg-indigo-600 text-white hover:bg-indigo-700",
    slate: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    emerald: "bg-emerald-600 text-white hover:bg-emerald-700",
    rose: "bg-rose-600 text-white hover:bg-rose-700",
  }[tone];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl px-3.5 py-2 text-sm font-bold transition disabled:opacity-40 ${cls}`}
    >
      {children}
    </button>
  );
}

function Seg<T extends string | number>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { v: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button
            type="button"
            key={String(o.v)}
            onClick={() => onChange(o.v)}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              o.v === value ? "bg-indigo-600 text-white" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-2 text-sm">
        <span className="font-bold text-slate-700">{label}</span>
        <span className="font-mono font-bold text-indigo-700">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-indigo-600"
        aria-label={label}
      />
    </label>
  );
}

function Note({ children, tone = "slate" }: { children: ReactNode; tone?: "slate" | "amber" | "emerald" | "indigo" | "rose" }) {
  const cls = {
    slate: "bg-slate-50 text-slate-700",
    amber: "bg-amber-50 text-amber-900",
    emerald: "bg-emerald-50 text-emerald-900",
    indigo: "bg-indigo-50 text-indigo-900",
    rose: "bg-rose-50 text-rose-900",
  }[tone];
  return <div className={`rounded-xl p-3 text-sm leading-relaxed ${cls}`}>{children}</div>;
}

const SUP: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };

/** Ion charge as superscript, e.g. 2 → "²⁺", -1 → "⁻". */
function chargeSup(q: number) {
  if (q === 0) return "";
  const n = Math.abs(q);
  const digits = n === 1 ? "" : String(n).split("").map((d) => SUP[d]).join("");
  return digits + (q > 0 ? "⁺" : "⁻");
}

/** Round to s significant figures, returned as a string without exponent for normal school values. */
function sf(x: number, s = 3) {
  if (!Number.isFinite(x)) return "—";
  if (x === 0) return "0";
  return x.toPrecision(s).replace(/e\+?(-?\d+)$/, " × 10^$1");
}

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-600 text-xs font-bold text-white">{n}</span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}

// ---------------------------------------------------------------------------
// 1) Atom builder

const ELEMENTS: { sym: string; name: string; n: number; anion?: string }[] = [
  { sym: "H", name: "hydrogen", n: 0, anion: "hydride" },
  { sym: "He", name: "helium", n: 2 },
  { sym: "Li", name: "lithium", n: 4 },
  { sym: "Be", name: "beryllium", n: 5 },
  { sym: "B", name: "boron", n: 6 },
  { sym: "C", name: "carbon", n: 6 },
  { sym: "N", name: "nitrogen", n: 7, anion: "nitride" },
  { sym: "O", name: "oxygen", n: 8, anion: "oxide" },
  { sym: "F", name: "fluorine", n: 10, anion: "fluoride" },
  { sym: "Ne", name: "neon", n: 10 },
  { sym: "Na", name: "sodium", n: 12 },
  { sym: "Mg", name: "magnesium", n: 12 },
  { sym: "Al", name: "aluminium", n: 14 },
  { sym: "Si", name: "silicon", n: 14 },
  { sym: "P", name: "phosphorus", n: 16, anion: "phosphide" },
  { sym: "S", name: "sulfur", n: 16, anion: "sulfide" },
  { sym: "Cl", name: "chlorine", n: 18, anion: "chloride" },
  { sym: "Ar", name: "argon", n: 22 },
  { sym: "K", name: "potassium", n: 20 },
  { sym: "Ca", name: "calcium", n: 20 },
];

const NOBLE: Record<string, string> = { "2": "helium", "2,8": "neon", "2,8,8": "argon" };

function shells(electrons: number): number[] {
  const caps = [2, 8, 8, 2];
  const out: number[] = [];
  let left = electrons;
  for (const cap of caps) {
    if (left <= 0) break;
    const k = Math.min(cap, left);
    out.push(k);
    left -= k;
  }
  return out;
}

function Stepper({ label, value, min, max, onChange, colour }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; colour: string }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 p-2">
      <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <span className="inline-block h-3 w-3 rounded-full" style={{ background: colour }} />
        {label}
      </span>
      <span className="flex items-center gap-1.5">
        <button type="button" aria-label={`fewer ${label}`} onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} className="h-9 w-9 rounded-lg border border-slate-300 text-lg font-bold text-slate-700 disabled:opacity-30">
          −
        </button>
        <span className="w-8 text-center font-mono text-lg font-extrabold text-slate-900">{value}</span>
        <button type="button" aria-label={`more ${label}`} onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} className="h-9 w-9 rounded-lg border border-slate-300 text-lg font-bold text-slate-700 disabled:opacity-30">
          +
        </button>
      </span>
    </div>
  );
}

function BohrModel({ protons, neutrons, electrons }: { protons: number; neutrons: number; electrons: number }) {
  const cfg = shells(electrons);
  const radii = [36, 58, 80, 102];
  return (
    <svg viewBox="0 0 240 240" width="100%" className="mx-auto max-w-[280px]" role="img" aria-label="Bohr model of the atom">
      {radii.map((r, i) => (
        <circle key={r} cx={120} cy={120} r={r} fill="none" stroke={i < cfg.length ? "#94a3b8" : "#e2e8f0"} strokeDasharray={i < cfg.length ? undefined : "3 4"} />
      ))}
      <circle cx={120} cy={120} r={22} fill="#fde68a" stroke="#d97706" />
      <text x={120} y={117} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b91c1c">
        {protons} p
      </text>
      <text x={120} y={130} textAnchor="middle" fontSize={10} fontWeight={700} fill="#475569">
        {neutrons} n
      </text>
      {cfg.map((count, i) =>
        Array.from({ length: count }, (_, j) => {
          const a = -Math.PI / 2 + (2 * Math.PI * j) / count;
          return <circle key={`${i}-${j}`} cx={120 + radii[i] * Math.cos(a)} cy={120 + radii[i] * Math.sin(a)} r={5} fill="#2563eb" stroke="white" strokeWidth={1.5} />;
        }),
      )}
    </svg>
  );
}

export function AtomBuilder() {
  const [p, setP] = useState(11);
  const [n, setN] = useState(12);
  const [e, setE] = useState(11);
  const el = ELEMENTS[p - 1];
  const mass = p + n;
  const charge = p - e;
  const ionCfg = shells(e);
  const atomCfg = shells(p);
  const period = atomCfg.length;
  const outer = atomCfg[atomCfg.length - 1];
  let group: string;
  if (p === 1) group = "hydrogen is usually placed on its own (1 outer electron)";
  else if (p === 2) group = "group 0 (full outer shell of 2)";
  else if (outer === 8) group = "group 0 (full outer shell of 8)";
  else group = `group ${outer} (${outer} outer electron${outer === 1 ? "" : "s"})`;

  // Usual ion for this element
  let usual: string | null = null;
  if (p > 2 && outer !== 8) {
    if (outer <= 3) usual = `${el.sym}${chargeSup(outer)} (loses ${outer} electron${outer === 1 ? "" : "s"})`;
    else if (outer >= 5) usual = `${el.sym}${chargeSup(outer - 8)} (gains ${8 - outer} electron${8 - outer === 1 ? "" : "s"})`;
    else usual = "none — group 4 elements do not usually form simple ions";
  }
  const ionKey = ionCfg.join(",");
  const nobleLike = e === 0 ? "no electrons at all (just a proton)" : NOBLE[ionKey] ? `the same as ${NOBLE[ionKey]}` : null;
  const ionName = charge > 0 ? `${el.name} ion` : charge < 0 ? `${el.anion ?? el.name} ion` : "";

  function setProtons(v: number) {
    setP(v);
    setN(ELEMENTS[v - 1].n);
    setE(v);
  }

  return (
    <Frame title="⚛️ Atom builder" intro="Add or remove protons, neutrons and electrons. The number of protons decides which element it is; electrons decide whether it is an atom or an ion.">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Stepper label="Protons" value={p} min={1} max={20} onChange={setProtons} colour="#dc2626" />
          <Stepper label="Neutrons" value={n} min={0} max={30} onChange={setN} colour="#64748b" />
          <Stepper label="Electrons" value={e} min={0} max={20} onChange={setE} colour="#2563eb" />
          <div className="flex flex-wrap gap-2 pt-1">
            <Btn tone="slate" onClick={() => setE(p)}>Make it neutral</Btn>
            <Btn tone="slate" onClick={() => setN(el.n)}>Most common isotope</Btn>
          </div>
          <BohrModel protons={p} neutrons={n} electrons={e} />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 rounded-2xl bg-indigo-50 p-4">
            <div className="flex items-center font-extrabold text-slate-900" aria-label={`isotope notation: mass number ${mass}, atomic number ${p}, symbol ${el.sym}`}>
              <span className="mr-0.5 flex flex-col items-end text-sm leading-tight">
                <span>{mass}</span>
                <span>{p}</span>
              </span>
              <span className="text-5xl">{el.sym}</span>
              {charge !== 0 && <span className="self-start text-2xl text-rose-600">{chargeSup(charge)}</span>}
            </div>
            <div>
              <p className="text-lg font-extrabold capitalize text-slate-900">{charge === 0 ? el.name : ionName}</p>
              <p className="text-sm text-slate-600">
                {el.name}-{mass}
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-2 text-sm">
            {[
              ["Atomic number", `${p}`],
              ["Mass number", `${mass}`],
              ["Overall charge", charge === 0 ? "0 — neutral atom" : `${charge > 0 ? "+" : "−"}${Math.abs(charge)} — ion ${el.sym}${chargeSup(charge)}`],
              ["Electronic configuration", e === 0 ? "none (0 electrons)" : ionCfg.join(",")],
              ["Period (neutral atom)", `period ${period} (${period} occupied shell${period === 1 ? "" : "s"})`],
              ["Group (neutral atom)", group],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-slate-200 p-2">
                <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{k}</dt>
                <dd className="font-semibold text-slate-900">{v}</dd>
              </div>
            ))}
          </dl>
          <Note>
            <strong>How to work it out:</strong> atomic number = number of protons ({p}); mass number = protons + neutrons ({p} + {n} = {mass}); number of
            neutrons = mass number − atomic number. In a neutral atom, electrons = protons. {charge !== 0 && (
              <>
                Here there are {Math.abs(charge)} {charge > 0 ? "fewer" : "more"} electrons than protons, so the particle is a{" "}
                <strong>{charge > 0 ? "positive" : "negative"} ion</strong> with charge {charge > 0 ? "+" : "−"}
                {Math.abs(charge)}.
              </>
            )}
          </Note>
          {charge !== 0 && (
            <Note tone={nobleLike ? "emerald" : "amber"}>
              {nobleLike ? (
                <>
                  ✅ {el.sym}
                  {chargeSup(charge)} has {nobleLike === "no electrons at all (just a proton)" ? nobleLike : <>a full outer shell — electronic configuration {ionKey}, {nobleLike}</>}. This is a stable ion.
                </>
              ) : (
                <>⚠️ This ion does not have a full outer shell, so it is not one you would normally meet.</>
              )}{" "}
              {usual && <>The usual ion of {el.name} is {usual}.</>}
            </Note>
          )}
          {charge === 0 && usual && <Note tone="indigo">Metals (left of the table) lose electrons to form positive ions; non-metals gain electrons to form negative ions. {el.name[0].toUpperCase() + el.name.slice(1)} forms {usual}.</Note>}
          <Note>
            <strong>Isotopes</strong> are atoms of the same element with the same number of protons but different numbers of neutrons. Change the neutrons:
            the element stays {el.name}, only the mass number changes. Isotopes have the same chemical properties because they have the same electronic configuration.
          </Note>
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 2) Titration lab

type Row = { start: number; end: number }; // hundredths of a cm³

const hund = (x: number) => (x / 100).toFixed(2);

function flaskColour(ind: "mo" | "pp", v: number, veq: number) {
  if (ind === "mo") {
    if (v < veq) return { fill: "#facc15", text: "yellow — still alkaline (excess NaOH)" };
    if (v - veq < 0.1) return { fill: "#fb923c", text: "orange — end point! Stop and record the reading." };
    return { fill: "#ef4444", text: "red — overshot: there is now excess acid" };
  }
  if (v < veq) return { fill: veq - v < 0.3 ? "#f9a8d4" : "#ec4899", text: "pink — still alkaline (excess NaOH)" };
  return { fill: "#f1f5f9", text: "colourless — the end point has been reached (or passed)" };
}

function findConcordant(rows: Row[]): number[] {
  const acc = rows.map((r, i) => ({ i, t: r.end - r.start })).filter((x) => x.i > 0);
  let best: number[] = [];
  let bestSpread = Infinity;
  for (const a of acc) {
    const group = acc.filter((b) => b.t >= a.t && b.t - a.t <= 20);
    const spread = Math.max(...group.map((g) => g.t)) - a.t;
    if (group.length > best.length || (group.length === best.length && spread < bestSpread)) {
      best = group.map((g) => g.i);
      bestSpread = spread;
    }
  }
  return best.length >= 2 ? best : [];
}

export function TitrationLab() {
  const [cBase, setCBase] = useState(0.1);
  const [cAcid, setCAcid] = useState(0.12);
  const [ind, setInd] = useState<"mo" | "pp">("mo");
  const [mystery, setMystery] = useState(false);
  const [start, setStart] = useState(0); // hundredths
  const [added, setAdded] = useState(0); // hundredths
  const [rows, setRows] = useState<Row[]>([]);
  const [showCalc, setShowCalc] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const veq = (cBase * 25.0) / cAcid;
  const v = added / 100;
  const reading = start + added;
  const col = flaskColour(ind, v, veq);
  const concordant = findConcordant(rows);
  const mean = concordant.length ? concordant.reduce((s, i) => s + (rows[i].end - rows[i].start), 0) / concordant.length / 100 : null;

  function newStart() {
    // random start reading 0.00–1.00 in 0.05 steps, only if there is room in the burette
    const s = Math.round(Math.random() * 20) * 5;
    return (s + veq * 100 + 300 <= 5000 ? s : 0);
  }
  function resetAll(msgText: string) {
    setRows([]);
    setAdded(0);
    setStart(0);
    setShowCalc(false);
    setMsg(msgText);
  }
  function add(h: number) {
    if (reading + h > 5000) {
      setMsg("The burette is empty (50.00 cm³). Refill it — and next time use more concentrated acid or less concentrated alkali.");
      return;
    }
    setAdded(added + h);
    setMsg(null);
  }
  function record() {
    if (added === 0) {
      setMsg("Add some acid first!");
      return;
    }
    const row = { start, end: reading };
    const next = [...rows, row];
    setRows(next);
    const s = newStart();
    setStart(s);
    setAdded(0);
    setMsg(
      `Recorded ${next.length === 1 ? "the rough titration" : `titration ${next.length - 1}`}: titre ${hund(row.end - row.start)} cm³. Fresh 25.0 cm³ of NaOH pipetted into a clean flask; burette refilled to ${hund(s)} cm³.`,
    );
  }
  function randomMystery() {
    const c = (12 + Math.round(Math.random() * 24)) * 0.005; // 0.060–0.180
    setCBase(Math.round(c * 1000) / 1000);
    setMystery(true);
    resetAll("A new mystery NaOH solution is in the flask. Find its concentration!");
  }

  // ----- SVG geometry
  const burY = (vol: number) => 14 + vol * 4.6; // 0 → 14, 50 → 244
  const zoomMid = 160;
  const zy = (vol: number) => zoomMid + (vol - reading / 100) * 100;
  const ticks: number[] = [];
  for (let k = Math.ceil((reading / 100 - 1.3) * 10); k <= Math.floor((reading / 100 + 1.3) * 10); k++) if (k >= 0 && k <= 500) ticks.push(k);
  const liquidTop = 342 - Math.min(1, v / 50) * 16; // rises a little as acid is added
  const flaskX = (y: number) => 58 - (40 * (y - 300)) / 80; // left side x at height y (y from 300 to 380)

  return (
    <Frame title="🧪 Titration lab" intro="25.0 cm³ of sodium hydroxide solution is pipetted into a conical flask with indicator. Dilute nitric acid is added from a burette until the indicator just changes colour.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="NaOH concentration (in flask)"
            value={cBase}
            min={0.05}
            max={0.2}
            step={0.005}
            display={mystery ? "??? mol/dm³" : `${cBase.toFixed(3)} mol/dm³`}
            onChange={(x) => {
              setCBase(x);
              setMystery(false);
              resetAll("New solution — results table cleared.");
            }}
          />
          <Slider
            label="HNO₃ concentration (in burette)"
            value={cAcid}
            min={0.1}
            max={0.2}
            step={0.005}
            display={`${cAcid.toFixed(3)} mol/dm³`}
            onChange={(x) => {
              setCAcid(x);
              resetAll("New acid — results table cleared.");
            }}
          />
          <div className="flex flex-wrap items-end gap-3">
            <Seg
              label="Indicator"
              value={ind}
              onChange={(x) => {
                setInd(x);
                setAdded(0);
                setMsg("New flask with the other indicator.");
              }}
              options={[
                { v: "mo", label: "methyl orange" },
                { v: "pp", label: "phenolphthalein" },
              ]}
            />
            <Btn tone="slate" onClick={randomMystery}>🎲 Mystery NaOH</Btn>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Add acid from the burette (swirl after each addition)</p>
          <div className="flex flex-wrap gap-2">
            <Btn onClick={() => add(100)}>+1.00 cm³</Btn>
            <Btn onClick={() => add(10)}>+0.10 cm³</Btn>
            <Btn onClick={() => add(5)}>+1 drop (0.05)</Btn>
          </div>
          <div className="flex flex-wrap gap-2">
            <Btn tone="emerald" onClick={record}>📝 Record this titration</Btn>
            <Btn
              tone="slate"
              onClick={() => {
                setAdded(0);
                setMsg("Flask emptied and refilled with 25.0 cm³ NaOH; burette topped back up to the same start reading.");
              }}
            >
              ↺ Start this one again
            </Btn>
          </div>
          <p className="rounded-xl bg-slate-50 p-2 text-sm text-slate-700">
            Flask: <strong>{col.text}</strong>
          </p>
          {ind === "mo" && v < veq && veq - v < 1.5 && <p className="text-sm text-amber-700">The colour is flashing orange where the acid lands — slow down and add drop by drop.</p>}
          {msg && <p className="text-sm text-indigo-800">{msg}</p>}
        </div>
      </div>

      <svg viewBox="0 0 320 400" width="100%" className="mx-auto mt-3 max-w-[420px]" role="img" aria-label={`Burette reading ${hund(reading)} cubic centimetres`}>
        {/* burette */}
        <rect x={60} y={10} width={20} height={240} rx={3} fill="#f8fafc" stroke="#64748b" />
        <rect x={61} y={burY(reading / 100)} width={18} height={Math.max(0, 250 - burY(reading / 100))} fill="#bae6fd" />
        {Array.from({ length: 51 }, (_, k) => (
          <line key={k} x1={60} x2={k % 10 === 0 ? 72 : k % 5 === 0 ? 68 : 65} y1={burY(k)} y2={burY(k)} stroke="#475569" strokeWidth={0.7} />
        ))}
        {[0, 10, 20, 30, 40, 50].map((k) => (
          <text key={k} x={56} y={burY(k) + 3} fontSize={8} textAnchor="end" fill="#475569">
            {k}
          </text>
        ))}
        <rect x={64} y={250} width={12} height={10} fill="#bae6fd" stroke="#64748b" />
        <rect x={52} y={256} width={36} height={6} rx={2} fill="#334155" />
        <path d="M66 260 L74 260 L71 284 L69 284 Z" fill="#bae6fd" stroke="#64748b" />
        {/* zoom window link */}
        <line x1={80} y1={burY(reading / 100)} x2={180} y2={50} stroke="#a5b4fc" strokeDasharray="3 3" />
        <line x1={80} y1={burY(reading / 100)} x2={180} y2={270} stroke="#a5b4fc" strokeDasharray="3 3" />
        {/* flask */}
        <path d="M58 286 L58 300 L18 380 L122 380 L82 300 L82 286 Z" fill="#f8fafc" stroke="#64748b" strokeWidth={1.5} />
        <path d={`M${flaskX(liquidTop)} ${liquidTop} L${140 - flaskX(liquidTop)} ${liquidTop} L121 379 L19 379 Z`} fill={col.fill} opacity={0.85} />
        <text x={70} y={396} textAnchor="middle" fontSize={9} fill="#475569">
          25.0 cm³ NaOH + {ind === "mo" ? "methyl orange" : "phenolphthalein"}
        </text>
        {/* zoom */}
        <defs>
          <clipPath id="tz-clip">
            <rect x={180} y={50} width={120} height={220} rx={10} />
          </clipPath>
        </defs>
        <g clipPath="url(#tz-clip)">
          <rect x={180} y={50} width={120} height={220} fill="#f8fafc" />
          <path d={`M200 ${zoomMid - 7} Q240 ${zoomMid + 7} 280 ${zoomMid - 7} L280 280 L200 280 Z`} fill="#bae6fd" />
          <path d={`M200 ${zoomMid - 7} Q240 ${zoomMid + 7} 280 ${zoomMid - 7}`} fill="none" stroke="#0369a1" strokeWidth={1.5} />
          <line x1={200} x2={200} y1={40} y2={280} stroke="#64748b" />
          <line x1={280} x2={280} y1={40} y2={280} stroke="#64748b" />
          {ticks.map((k) => {
            const y = zy(k / 10);
            const major = k % 10 === 0;
            const half = k % 5 === 0;
            return (
              <g key={k}>
                <line x1={200} x2={major ? 240 : half ? 228 : 216} y1={y} y2={y} stroke="#1e293b" strokeWidth={major ? 1.4 : 0.8} />
                {major && (
                  <text x={244} y={y + 4} fontSize={12} fontWeight={700} fill="#1e293b">
                    {k / 10}
                  </text>
                )}
              </g>
            );
          })}
          <line x1={182} x2={298} y1={zoomMid} y2={zoomMid} stroke="#dc2626" strokeDasharray="4 3" />
        </g>
        <rect x={180} y={50} width={120} height={220} rx={10} fill="none" stroke="#6366f1" strokeWidth={1.5} />
        <text x={240} y={42} textAnchor="middle" fontSize={10} fontWeight={700} fill="#4338ca">
          eye level: read the bottom
        </text>
        <text x={240} y={288} textAnchor="middle" fontSize={11} fontWeight={700} fill="#dc2626">
          reading = {hund(reading)} cm³
        </text>
        <text x={240} y={302} textAnchor="middle" fontSize={9} fill="#475569">
          start {hund(start)} · added {hund(added)} cm³
        </text>
      </svg>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-500">
              <th className="p-1.5">Titration</th>
              <th className="p-1.5">Final reading / cm³</th>
              <th className="p-1.5">Initial reading / cm³</th>
              <th className="p-1.5">Titre / cm³</th>
              <th className="p-1.5">Concordant?</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="p-2 text-slate-500">
                  No results yet. Do a quick <strong>rough</strong> titration first (1.00 cm³ at a time) to find roughly where the end point is.
                </td>
              </tr>
            )}
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-slate-100 ${concordant.includes(i) ? "bg-emerald-50" : ""}`}>
                <td className="p-1.5 font-semibold">{i === 0 ? "Rough" : i}</td>
                <td className="p-1.5 font-mono">{hund(r.end)}</td>
                <td className="p-1.5 font-mono">{hund(r.start)}</td>
                <td className="p-1.5 font-mono font-bold">{hund(r.end - r.start)}</td>
                <td className="p-1.5">{i === 0 ? "not used" : concordant.includes(i) ? "✅" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 space-y-2">
        {rows.length > 1 && !mean && <Note tone="amber">No concordant results yet — you need at least two accurate titres within 0.20 cm³ of each other. Repeat the titration, adding dropwise near the end point.</Note>}
        {mean !== null && (
          <Note tone="emerald">
            Concordant titres: {concordant.map((i) => hund(rows[i].end - rows[i].start)).join(", ")} (all within 0.20 cm³). Mean titre = ({concordant.map((i) => hund(rows[i].end - rows[i].start)).join(" + ")}) ÷ {concordant.length} ={" "}
            <strong>{mean.toFixed(2)} cm³</strong>. The rough titre is never included.
          </Note>
        )}
        <div className="flex flex-wrap gap-2">
          {mean !== null && (
            <Btn tone={showCalc ? "slate" : "indigo"} onClick={() => setShowCalc(!showCalc)}>
              {showCalc ? "Hide calculation" : "🧮 Show calculation (try it first!)"}
            </Btn>
          )}
          {rows.length > 0 && (
            <Btn tone="slate" onClick={() => resetAll("Results table cleared.")}>
              Clear table
            </Btn>
          )}
        </div>
        {showCalc && mean !== null && (
          <div className="rounded-xl border border-indigo-200 p-3 text-sm">
            <p className="mb-2 font-mono text-slate-800">HNO₃ + NaOH → NaNO₃ + H₂O</p>
            <ol className="space-y-1.5">
              <Step n={1}>
                Moles of HNO₃ = c × V ÷ 1000 = {cAcid.toFixed(3)} × {mean.toFixed(2)} ÷ 1000 = <strong>{sf((cAcid * mean) / 1000)} mol</strong>
              </Step>
              <Step n={2}>Mole ratio HNO₃ : NaOH = 1 : 1, so moles of NaOH in 25.0 cm³ = {sf((cAcid * mean) / 1000)} mol</Step>
              <Step n={3}>
                Concentration of NaOH = moles ÷ volume in dm³ = {sf((cAcid * mean) / 1000)} ÷ 0.0250 = <strong>{sf((cAcid * mean) / 1000 / 0.025)} mol/dm³</strong>
              </Step>
            </ol>
            <p className="mt-2 text-slate-600">
              True value: {cBase.toFixed(3)} mol/dm³. {Math.abs((cAcid * mean) / 25 - cBase) / cBase < 0.01 ? "Excellent — within 1%." : (cAcid * mean) / 25 > cBase ? "Your answer is a little high: overshooting the end point makes the titre too big." : "Your answer is a little low: you stopped before the end point, so the titre was too small."}
            </p>
          </div>
        )}
        <Note>
          <strong>Exam tips:</strong> read the burette at eye level to the bottom of the meniscus, to the nearest 0.05 cm³. Burette scales read <em>downwards</em> from 0.00.
          Titre = final reading − initial reading. Swirl the flask, place it on a white tile so the colour change is easy to see, and add the acid dropwise near the end point.
          Methyl orange is yellow in alkali and red in acid (orange at the end point); phenolphthalein is pink in alkali and colourless in acid.
        </Note>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 3) Rate lab — marble chips + acid on a balance

type Size = "large" | "small" | "powder";
type RateParams = { acid: "HCl" | "H2SO4"; c: number; T: number; size: Size };

const SIZE_K: Record<Size, number> = { large: 1, small: 2.5, powder: 12 };
const SIZE_LABEL: Record<Size, string> = { large: "large chips", small: "small chips", powder: "powder" };

function rateModel(p: RateParams) {
  const k = 0.22 * SIZE_K[p.size] * Math.pow(2, (p.T - 20) / 10);
  if (p.acid === "HCl") {
    const final = ((p.c * 0.05) / 2) * 44; // CaCO3 + 2HCl → CaCl2 + H2O + CO2
    return { final, k, theory: final };
  }
  const theory = p.c * 0.05 * 44; // CaCO3 + H2SO4 → CaSO4 + H2O + CO2
  const frac = p.size === "powder" ? 0.4 : p.size === "small" ? 0.18 : 0.1;
  return { final: theory * frac, k: k * 1.5 + 0.8, theory };
}
const lossAt = (m: { final: number; k: number }, t: number) => m.final * (1 - Math.exp(-m.k * t));

function rateCaption(prev: RateParams | null, cur: RateParams): ReactNode {
  if (!prev) return <>Change one variable at a time (a fair test) and compare with the faint grey curve of the previous run.</>;
  if (prev.acid !== cur.acid) {
    return cur.acid === "H2SO4" ? (
      <>
        With <strong>sulfuric acid</strong> the reaction starts but soon <strong>stops early</strong>: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. Calcium sulfate is{" "}
        <strong>insoluble</strong>, so it forms a layer on the surface of the marble. This stops the acid particles colliding with the calcium carbonate, so the mass
        loss levels off far below the expected value (even though the acid is not used up).
      </>
    ) : (
      <>Back to hydrochloric acid: calcium chloride is soluble, so no layer forms and the reaction continues until the acid is used up.</>
    );
  }
  if (prev.c !== cur.c) {
    const up = cur.c > prev.c;
    return (
      <>
        {up ? "Increasing" : "Decreasing"} the concentration means there are {up ? "more" : "fewer"} acid particles in the same volume, so there are {up ? "more" : "fewer"}{" "}
        <strong>collisions per unit time</strong> (a {up ? "higher" : "lower"} frequency of collisions) and the rate is {up ? "faster" : "slower"} — the curve is{" "}
        {up ? "steeper" : "less steep"} at the start. The final mass loss is {up ? "bigger" : "smaller"} too, because there are {up ? "more" : "fewer"} moles of acid
        (the acid is the limiting reactant), so {up ? "more" : "less"} CO₂ is made.
      </>
    );
  }
  if (prev.T !== cur.T) {
    const up = cur.T > prev.T;
    return (
      <>
        At a {up ? "higher" : "lower"} temperature the particles have {up ? "more" : "less"} kinetic energy and move {up ? "faster" : "more slowly"}, so they collide{" "}
        {up ? "more" : "less"} frequently. More importantly, a {up ? "greater" : "smaller"} proportion of collisions have energy equal to or greater than the{" "}
        <strong>activation energy</strong>, so there are {up ? "more" : "fewer"} successful collisions per unit time. The final mass loss is the{" "}
        <strong>same</strong> — the same amount of acid makes the same mass of CO₂.
      </>
    );
  }
  if (prev.size !== cur.size) {
    const smaller = SIZE_K[cur.size] > SIZE_K[prev.size];
    return (
      <>
        {smaller ? "Smaller pieces" : "Bigger pieces"} have a {smaller ? "larger" : "smaller"} <strong>surface area to volume ratio</strong>, so {smaller ? "more" : "fewer"}{" "}
        calcium carbonate particles are exposed to the acid. This gives {smaller ? "more" : "fewer"} collisions per unit time and a {smaller ? "faster" : "slower"} rate.
        The final mass loss does not change because the amount of acid is the same.
      </>
    );
  }
  return <>Nothing changed — same curve.</>;
}

export function RateLab() {
  const [cur, setCur] = useState<RateParams>({ acid: "HCl", c: 1, T: 20, size: "large" });
  const [prev, setPrev] = useState<RateParams | null>(null);
  const [t, setT] = useState(14);
  const m = rateModel(cur);
  const pm = prev ? rateModel(prev) : null;
  const change = (patch: Partial<RateParams>) => {
    const next = { ...cur, ...patch };
    if (JSON.stringify(next) === JSON.stringify(cur)) return;
    setPrev(cur);
    setCur(next);
  };

  const X0 = 46, X1 = 346, Y0 = 200, Y1 = 14, YMAX = 2.5;
  const px = (tm: number) => X0 + (tm / 14) * (X1 - X0);
  const py = (g: number) => Y0 - (g / YMAX) * (Y0 - Y1);
  const path = (mm: { final: number; k: number }) =>
    Array.from({ length: 141 }, (_, i) => i / 10)
      .map((tm, i) => `${i ? "L" : "M"}${px(tm).toFixed(1)} ${py(lossAt(mm, tm)).toFixed(1)}`)
      .join(" ");
  const lossNow = lossAt(m, t);
  const t95 = Math.log(20) / m.k;
  const startMass = 165.0;

  return (
    <Frame title="⏱️ Rates lab: marble chips + acid" intro="Marble chips (calcium carbonate, in excess) react with 50 cm³ of acid in a conical flask on a balance. Cotton wool lets CO₂ escape but stops acid spray. The mass falls as CO₂ is lost.">
      <p className="mb-3 rounded-xl bg-slate-50 p-2 text-center font-mono text-sm text-slate-800">
        {cur.acid === "HCl" ? "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)" : "CaCO₃(s) + H₂SO₄(aq) → CaSO₄(s) + H₂O(l) + CO₂(g)"}
      </p>
      <div className="grid gap-4 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          <Seg label="Acid concentration (mol/dm³)" value={cur.c} onChange={(c) => change({ c })} options={[0.5, 1, 2].map((c) => ({ v: c, label: c.toFixed(1) }))} />
          <Slider label="Temperature" value={cur.T} min={20} max={60} step={5} display={`${cur.T} °C`} onChange={(T) => change({ T })} />
          <Seg label="Marble" value={cur.size} onChange={(size) => change({ size })} options={(["large", "small", "powder"] as Size[]).map((s) => ({ v: s, label: SIZE_LABEL[s] }))} />
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <input type="checkbox" checked={cur.acid === "H2SO4"} onChange={(e) => change({ acid: e.target.checked ? "H2SO4" : "HCl" })} className="h-4 w-4 accent-indigo-600" />
            Use sulfuric acid instead
          </label>
          <div className="rounded-2xl bg-slate-900 p-3 text-center text-white">
            <p className="text-xs uppercase tracking-wide text-slate-400">Balance at {t.toFixed(1)} min</p>
            <p className="font-mono text-3xl font-bold text-emerald-300">{(startMass - lossNow).toFixed(2)} g</p>
          </div>
          <Slider label="Time" value={t} min={0} max={14} step={0.5} display={`${t.toFixed(1)} min`} onChange={setT} />
        </div>
        <div>
          <svg viewBox="0 0 360 240" width="100%" role="img" aria-label="Graph of decrease in mass against time">
            {Array.from({ length: 15 }, (_, i) => (
              <line key={`v${i}`} x1={px(i)} x2={px(i)} y1={Y1} y2={Y0} stroke="#e2e8f0" />
            ))}
            {Array.from({ length: 11 }, (_, i) => (
              <line key={`h${i}`} x1={X0} x2={X1} y1={py(i * 0.25)} y2={py(i * 0.25)} stroke="#e2e8f0" />
            ))}
            <line x1={X0} x2={X1} y1={Y0} y2={Y0} stroke="#334155" />
            <line x1={X0} x2={X0} y1={Y0} y2={Y1} stroke="#334155" />
            {[0, 2, 4, 6, 8, 10, 12, 14].map((i) => (
              <text key={i} x={px(i)} y={Y0 + 12} fontSize={9} textAnchor="middle" fill="#475569">
                {i}
              </text>
            ))}
            {[0, 0.5, 1, 1.5, 2, 2.5].map((g) => (
              <text key={g} x={X0 - 4} y={py(g) + 3} fontSize={9} textAnchor="end" fill="#475569">
                {g.toFixed(1)}
              </text>
            ))}
            <text x={(X0 + X1) / 2} y={232} fontSize={10} textAnchor="middle" fill="#334155" fontWeight={700}>
              time / min
            </text>
            <text x={11} y={(Y0 + Y1) / 2} fontSize={10} textAnchor="middle" fill="#334155" fontWeight={700} transform={`rotate(-90 11 ${(Y0 + Y1) / 2})`}>
              decrease in mass / g
            </text>
            {pm && <path d={path(pm)} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 4" />}
            {m.theory !== m.final && m.theory <= YMAX && <line x1={X0} x2={X1} y1={py(Math.min(YMAX, m.theory))} y2={py(Math.min(YMAX, m.theory))} stroke="#f59e0b" strokeDasharray="2 3" />}
            <path d={path(m)} fill="none" stroke="#4f46e5" strokeWidth={2.5} />
            <circle cx={px(t)} cy={py(lossNow)} r={4.5} fill="#dc2626" />
          </svg>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
            <span>
              <span className="mr-1 inline-block h-0.5 w-5 bg-indigo-600 align-middle" />
              this run
            </span>
            {prev && (
              <span>
                <span className="mr-1 inline-block w-5 border-t-2 border-dashed border-slate-400 align-middle" />
                previous run ({prev.acid === "HCl" ? "HCl" : "H₂SO₄"}, {prev.c.toFixed(1)} mol/dm³, {prev.T} °C, {SIZE_LABEL[prev.size]})
              </span>
            )}
            {m.theory !== m.final && (
              <span>
                <span className="mr-1 inline-block w-5 border-t-2 border-dotted border-amber-500 align-middle" />
                expected if it had not stopped
              </span>
            )}
          </div>
          <dl className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="rounded-xl border border-slate-200 p-2">
              <dt className="text-xs text-slate-500">Initial rate</dt>
              <dd className="font-bold">{(m.final * m.k).toFixed(2)} g/min</dd>
            </div>
            <div className="rounded-xl border border-slate-200 p-2">
              <dt className="text-xs text-slate-500">Final mass loss</dt>
              <dd className="font-bold">{m.final.toFixed(2)} g</dd>
            </div>
            <div className="rounded-xl border border-slate-200 p-2">
              <dt className="text-xs text-slate-500">≈ finished by</dt>
              <dd className="font-bold">{t95 > 14 ? "> 14 min" : `${t95.toFixed(1)} min`}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <Note tone="indigo">{rateCaption(prev, cur)}</Note>
        {cur.acid === "HCl" ? (
          <Note>
            <strong>Why the curve flattens:</strong> the gradient (rate) is steepest at the start, when the acid is most concentrated. As acid particles are used up there are fewer
            collisions per unit time, so the curve gets less steep. It becomes horizontal when all the acid has reacted — the marble is in excess, so some is left over.{" "}
            <strong>Final mass loss</strong> = mass of CO₂ = (c × 0.050 ÷ 2) × 44 = ({cur.c.toFixed(1)} × 0.050 ÷ 2) × 44 = {m.final.toFixed(2)} g. It depends only on the amount
            of acid, so changing temperature or chip size changes how fast you get there, not how high the curve finishes.
          </Note>
        ) : (
          <Note tone="amber">
            <strong>Why it stops early:</strong> expected CO₂ = c × 0.050 × 44 = {m.theory.toFixed(2)} g (H₂SO₄ : CO₂ is 1 : 1), but only about {m.final.toFixed(2)} g is lost. The insoluble
            calcium sulfate coats the marble and prevents further collisions between acid particles and calcium carbonate. Powder gets further because more surface reacts before it is covered.
          </Note>
        )}
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 4) Moles calculator

type Substance = { f: string; name: string; mr: number; working: string; gas?: boolean };

const SUBSTANCES: Substance[] = [
  { f: "CaCO₃", name: "calcium carbonate", mr: 100, working: "40 + 12 + (3 × 16)" },
  { f: "NaOH", name: "sodium hydroxide", mr: 40, working: "23 + 16 + 1" },
  { f: "HNO₃", name: "nitric acid", mr: 63, working: "1 + 14 + (3 × 16)" },
  { f: "H₂SO₄", name: "sulfuric acid", mr: 98, working: "(2 × 1) + 32 + (4 × 16)" },
  { f: "H₂O", name: "water", mr: 18, working: "(2 × 1) + 16" },
  { f: "NaCl", name: "sodium chloride", mr: 58.5, working: "23 + 35.5" },
  { f: "NaNO₃", name: "sodium nitrate", mr: 85, working: "23 + 14 + (3 × 16)" },
  { f: "MgO", name: "magnesium oxide", mr: 40, working: "24 + 16" },
  { f: "CuO", name: "copper(II) oxide", mr: 79.5, working: "63.5 + 16" },
  { f: "Al₂O₃", name: "aluminium oxide", mr: 102, working: "(2 × 27) + (3 × 16)" },
  { f: "Fe₂O₃", name: "iron(III) oxide", mr: 160, working: "(2 × 56) + (3 × 16)" },
  { f: "KBr", name: "potassium bromide", mr: 119, working: "39 + 80" },
  { f: "Zn", name: "zinc", mr: 65, working: "Ar of Zn = 65" },
  { f: "Zn(NO₃)₂·6H₂O", name: "hydrated zinc nitrate", mr: 297, working: "65 + 2 × (14 + 3 × 16) + 6 × (2 × 1 + 16)" },
  { f: "CuSO₄·5H₂O", name: "hydrated copper(II) sulfate", mr: 249.5, working: "63.5 + 32 + (4 × 16) + 5 × (2 × 1 + 16)" },
  { f: "CO₂", name: "carbon dioxide", mr: 44, working: "12 + (2 × 16)", gas: true },
  { f: "O₂", name: "oxygen", mr: 32, working: "2 × 16", gas: true },
  { f: "H₂", name: "hydrogen", mr: 2, working: "2 × 1", gas: true },
  { f: "N₂", name: "nitrogen", mr: 28, working: "2 × 14", gas: true },
  { f: "Cl₂", name: "chlorine", mr: 71, working: "2 × 35.5", gas: true },
  { f: "NH₃", name: "ammonia", mr: 17, working: "14 + (3 × 1)", gas: true },
  { f: "HCl", name: "hydrogen chloride", mr: 36.5, working: "1 + 35.5", gas: true },
];

type Mode = "mass" | "moles" | "volume";

export function MolesCalculator() {
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<Mode>("mass");
  const [input, setInput] = useState("10");
  const [zn, setZn] = useState("9.75");
  const [actual, setActual] = useState("36.4");
  const s = SUBSTANCES[idx];
  const x = parseFloat(input);
  const ok = Number.isFinite(x) && x >= 0;
  const moles = !ok ? NaN : mode === "mass" ? x / s.mr : mode === "moles" ? x : x / 24;
  const mass = moles * s.mr;
  const vol = moles * 24;

  const znMass = parseFloat(zn);
  const act = parseFloat(actual);
  const nZn = znMass / 65;
  const theo = nZn * 297;
  const pct = (act / theo) * 100;
  const yOk = Number.isFinite(nZn) && znMass > 0 && Number.isFinite(act) && act >= 0;

  return (
    <Frame title="🧮 Moles calculator" intro="Pick a substance, then type in a mass, a number of moles or (for gases) a volume at room temperature and pressure. Everything else updates.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-700">
            Substance
            <select
              value={idx}
              onChange={(e) => {
                const i = Number(e.target.value);
                setIdx(i);
                if (!SUBSTANCES[i].gas && mode === "volume") setMode("mass");
              }}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white p-2 font-normal"
            >
              {SUBSTANCES.map((sub, i) => (
                <option key={sub.f} value={i}>
                  {sub.f} — {sub.name}
                  {sub.gas ? " (gas)" : ""}
                </option>
              ))}
            </select>
          </label>
          <p className="rounded-xl bg-slate-50 p-2 text-sm">
            M<sub>r</sub> of {s.f} = {s.working} = <strong>{s.mr}</strong>
          </p>
          <Seg
            label="I know the…"
            value={mode}
            onChange={setMode}
            options={[
              { v: "mass" as Mode, label: "mass (g)" },
              { v: "moles" as Mode, label: "moles (mol)" },
              ...(s.gas ? [{ v: "volume" as Mode, label: "gas volume (dm³)" }] : []),
            ]}
          />
          <label className="block text-sm font-bold text-slate-700">
            {mode === "mass" ? "Mass / g" : mode === "moles" ? "Amount / mol" : "Volume at rtp / dm³"}
            <input inputMode="decimal" value={input} onChange={(e) => setInput(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-2 font-mono text-lg" />
          </label>
        </div>
        <div className="space-y-2">
          {!ok ? (
            <Note tone="amber">Type a positive number.</Note>
          ) : (
            <>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-xl border border-slate-200 p-2">
                  <dt className="text-xs text-slate-500">Mass</dt>
                  <dd className="text-lg font-bold">{sf(mass)} g</dd>
                </div>
                <div className="rounded-xl border border-slate-200 p-2">
                  <dt className="text-xs text-slate-500">Amount</dt>
                  <dd className="text-lg font-bold">{sf(moles)} mol</dd>
                </div>
                {s.gas && (
                  <div className="col-span-2 rounded-xl border border-slate-200 p-2">
                    <dt className="text-xs text-slate-500">Gas volume at rtp</dt>
                    <dd className="text-lg font-bold">
                      {sf(vol)} dm³ = {sf(vol * 1000)} cm³
                    </dd>
                  </div>
                )}
              </dl>
              <ol className="space-y-1.5 text-sm">
                {mode === "mass" && (
                  <Step n={1}>
                    moles = mass ÷ M<sub>r</sub> = {x} ÷ {s.mr} = <strong>{sf(moles)} mol</strong>
                  </Step>
                )}
                {mode === "moles" && (
                  <Step n={1}>
                    mass = moles × M<sub>r</sub> = {x} × {s.mr} = <strong>{sf(mass)} g</strong>
                  </Step>
                )}
                {mode === "volume" && (
                  <Step n={1}>
                    moles = volume (dm³) ÷ 24 = {x} ÷ 24 = <strong>{sf(moles)} mol</strong>
                  </Step>
                )}
                {mode === "volume" && (
                  <Step n={2}>
                    mass = moles × M<sub>r</sub> = {sf(moles)} × {s.mr} = <strong>{sf(mass)} g</strong>
                  </Step>
                )}
                {s.gas && mode !== "volume" && (
                  <Step n={2}>
                    volume = moles × 24 = {sf(moles)} × 24 = <strong>{sf(vol)} dm³</strong> (× 1000 for cm³)
                  </Step>
                )}
              </ol>
            </>
          )}
          <Note>
            One mole of <em>any</em> gas occupies 24 dm³ (24 000 cm³) at room temperature and pressure (rtp). This only works for gases — never use 24 for a solid, liquid or solution.
          </Note>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-indigo-200 p-4">
        <h3 className="font-extrabold text-slate-900">📈 Percentage yield: hydrated zinc nitrate</h3>
        <p className="text-sm text-slate-600">Zinc reacts with excess dilute nitric acid; the zinc nitrate solution is crystallised as Zn(NO₃)₂·6H₂O (M<sub>r</sub> 297).</p>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <label className="block text-sm font-bold text-slate-700">
            Mass of zinc / g
            <input inputMode="decimal" value={zn} onChange={(e) => setZn(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-2 font-mono" />
          </label>
          <label className="block text-sm font-bold text-slate-700">
            Actual mass of crystals / g
            <input inputMode="decimal" value={actual} onChange={(e) => setActual(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-2 font-mono" />
          </label>
        </div>
        {yOk ? (
          <ol className="mt-3 space-y-1.5 text-sm">
            <Step n={1}>
              moles of Zn = mass ÷ A<sub>r</sub> = {znMass} ÷ 65 = <strong>{sf(nZn)} mol</strong>
            </Step>
            <Step n={2}>Zn + 2HNO₃ → Zn(NO₃)₂ + H₂, so 1 mol Zn → 1 mol Zn(NO₃)₂·6H₂O: moles of crystals = {sf(nZn)} mol</Step>
            <Step n={3}>
              theoretical (maximum) mass = moles × M<sub>r</sub> = {sf(nZn)} × 297 = <strong>{theo.toFixed(2)} g</strong>
            </Step>
            <Step n={4}>
              % yield = actual mass ÷ theoretical mass × 100 = {act} ÷ {theo.toFixed(2)} × 100 = <strong>{pct.toFixed(1)} %</strong>
            </Step>
          </ol>
        ) : (
          <Note tone="amber">Type positive numbers in both boxes.</Note>
        )}
        {yOk && pct > 100 && <Note tone="rose">Over 100%? The crystals were probably still wet or impure — that cannot be a real yield.</Note>}
        <p className="mt-2 text-sm text-slate-600">
          Yield is less than 100% because some product stays dissolved in the solution after crystallisation, some is lost when filtering and transferring, and some crystals may be lost when drying.
        </p>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 5) Electrolysis lab

type Electrode = { product: string; eq: string; obs: string; colour: string; kind: "metal" | "gas" | "solution" | "vapour"; rule: string };
type Electrolyte = {
  key: string;
  name: string;
  state: "molten" | "aqueous";
  cations: string[];
  anions: string[];
  liquid: string;
  cathode: Electrode;
  anode: Electrode;
  extra: string;
};

const RULE_CATHODE_AQ_H = "The metal is more reactive than hydrogen, so hydrogen ions (from water) are discharged instead — hydrogen gas forms.";
const RULE_CATHODE_AQ_M = "The metal is less reactive than hydrogen, so the metal ions are discharged — the metal is deposited.";
const RULE_ANODE_HAL = "A halide ion is present, so the halogen is formed.";
const RULE_ANODE_OH = "No halide ion is present, so hydroxide ions (from water) are discharged — oxygen gas forms (sulfate ions stay in solution).";

const ELECTROLYTES: Electrolyte[] = [
  {
    key: "pbbr2",
    name: "molten lead(II) bromide",
    state: "molten",
    cations: ["Pb²⁺"],
    anions: ["Br⁻"],
    liquid: "#fef3c7",
    cathode: { product: "lead", eq: "Pb²⁺ + 2e⁻ → Pb", obs: "shiny grey liquid lead collects at the bottom", colour: "#64748b", kind: "metal", rule: "In a molten compound there is only one cation, so the metal is formed at the cathode." },
    anode: { product: "bromine", eq: "2Br⁻ → Br₂ + 2e⁻", obs: "red-brown bromine vapour is given off", colour: "#b45309", kind: "vapour", rule: "In a molten compound there is only one anion, so the non-metal is formed at the anode." },
    extra: "Solid lead(II) bromide does not conduct: its ions are held in fixed positions in the lattice. When molten, the ions are free to move. Do this in a fume cupboard — bromine is toxic.",
  },
  {
    key: "naclm",
    name: "molten sodium chloride",
    state: "molten",
    cations: ["Na⁺"],
    anions: ["Cl⁻"],
    liquid: "#f1f5f9",
    cathode: { product: "sodium", eq: "Na⁺ + e⁻ → Na", obs: "silvery liquid sodium forms", colour: "#94a3b8", kind: "metal", rule: "In a molten compound there is only one cation, so the metal is formed at the cathode." },
    anode: { product: "chlorine", eq: "2Cl⁻ → Cl₂ + 2e⁻", obs: "bubbles of pale green chlorine gas (bleaches damp litmus paper)", colour: "#bef264", kind: "gas", rule: "In a molten compound there is only one anion, so the non-metal is formed at the anode." },
    extra: "Compare this with aqueous sodium chloride — the products at the cathode are different because water provides H⁺ ions.",
  },
  {
    key: "al2o3",
    name: "molten aluminium oxide (in cryolite)",
    state: "molten",
    cations: ["Al³⁺"],
    anions: ["O²⁻"],
    liquid: "#e2e8f0",
    cathode: { product: "aluminium", eq: "Al³⁺ + 3e⁻ → Al", obs: "molten aluminium collects at the bottom of the cell (the carbon lining is the cathode)", colour: "#cbd5e1", kind: "metal", rule: "Aluminium is above carbon in the reactivity series, so it must be extracted by electrolysis." },
    anode: { product: "oxygen", eq: "2O²⁻ → O₂ + 4e⁻", obs: "oxygen forms; it reacts with the hot carbon anodes (C + O₂ → CO₂), so the anodes burn away and must be replaced regularly", colour: "#f8fafc", kind: "gas", rule: "Oxide ions are the only anions, so oxygen is formed." },
    extra: "Aluminium oxide is dissolved in molten cryolite to lower the operating temperature (it would otherwise need over 2000 °C), which saves energy and money.",
  },
  {
    key: "naclaq",
    name: "aqueous sodium chloride (concentrated)",
    state: "aqueous",
    cations: ["Na⁺", "H⁺"],
    anions: ["Cl⁻", "OH⁻"],
    liquid: "#e0f2fe",
    cathode: { product: "hydrogen", eq: "2H⁺ + 2e⁻ → H₂", obs: "bubbles of colourless gas — hydrogen (lit splint gives a squeaky pop)", colour: "#ffffff", kind: "gas", rule: RULE_CATHODE_AQ_H },
    anode: { product: "chlorine", eq: "2Cl⁻ → Cl₂ + 2e⁻", obs: "bubbles of pale green chlorine gas (bleaches damp litmus paper)", colour: "#bef264", kind: "gas", rule: RULE_ANODE_HAL },
    extra: "Na⁺ and OH⁻ ions are left behind, so the solution becomes sodium hydroxide (alkaline).",
  },
  {
    key: "cuso4",
    name: "aqueous copper(II) sulfate (inert electrodes)",
    state: "aqueous",
    cations: ["Cu²⁺", "H⁺"],
    anions: ["SO₄²⁻", "OH⁻"],
    liquid: "#7dd3fc",
    cathode: { product: "copper", eq: "Cu²⁺ + 2e⁻ → Cu", obs: "a pink-brown coating of copper forms on the cathode", colour: "#c2410c", kind: "metal", rule: RULE_CATHODE_AQ_M },
    anode: { product: "oxygen", eq: "4OH⁻ → O₂ + 2H₂O + 4e⁻", obs: "bubbles of colourless gas — oxygen (relights a glowing splint)", colour: "#ffffff", kind: "gas", rule: RULE_ANODE_OH },
    extra: "The blue colour fades as Cu²⁺ ions are removed. H⁺ and SO₄²⁻ ions are left, so the solution becomes acidic (sulfuric acid).",
  },
  {
    key: "cucl2",
    name: "aqueous copper(II) chloride",
    state: "aqueous",
    cations: ["Cu²⁺", "H⁺"],
    anions: ["Cl⁻", "OH⁻"],
    liquid: "#5eead4",
    cathode: { product: "copper", eq: "Cu²⁺ + 2e⁻ → Cu", obs: "a pink-brown coating of copper forms on the cathode", colour: "#c2410c", kind: "metal", rule: RULE_CATHODE_AQ_M },
    anode: { product: "chlorine", eq: "2Cl⁻ → Cl₂ + 2e⁻", obs: "bubbles of pale green chlorine gas (bleaches damp litmus paper)", colour: "#bef264", kind: "gas", rule: RULE_ANODE_HAL },
    extra: "The blue-green colour fades as copper(II) chloride is used up.",
  },
  {
    key: "h2so4",
    name: "dilute sulfuric acid",
    state: "aqueous",
    cations: ["H⁺"],
    anions: ["SO₄²⁻", "OH⁻"],
    liquid: "#f0f9ff",
    cathode: { product: "hydrogen", eq: "2H⁺ + 2e⁻ → H₂", obs: "bubbles of colourless gas — hydrogen (lit splint gives a squeaky pop)", colour: "#ffffff", kind: "gas", rule: "Hydrogen ions are the only cations, so hydrogen gas forms." },
    anode: { product: "oxygen", eq: "4OH⁻ → O₂ + 2H₂O + 4e⁻", obs: "bubbles of colourless gas — oxygen (relights a glowing splint)", colour: "#ffffff", kind: "gas", rule: RULE_ANODE_OH },
    extra: "The volume of hydrogen is twice the volume of oxygen (2 : 1). In effect water is being electrolysed, so the acid slowly becomes more concentrated.",
  },
  {
    key: "ki",
    name: "aqueous potassium iodide",
    state: "aqueous",
    cations: ["K⁺", "H⁺"],
    anions: ["I⁻", "OH⁻"],
    liquid: "#f8fafc",
    cathode: { product: "hydrogen", eq: "2H⁺ + 2e⁻ → H₂", obs: "bubbles of colourless gas — hydrogen (lit splint gives a squeaky pop)", colour: "#ffffff", kind: "gas", rule: RULE_CATHODE_AQ_H },
    anode: { product: "iodine", eq: "2I⁻ → I₂ + 2e⁻", obs: "the solution around the anode turns brown as iodine forms", colour: "#92400e", kind: "solution", rule: RULE_ANODE_HAL },
    extra: "K⁺ and OH⁻ ions are left, so the solution becomes potassium hydroxide (alkaline).",
  },
];

const SLOTS: [number, number][] = [
  [130, 120],
  [190, 135],
  [150, 160],
  [175, 190],
  [140, 200],
  [200, 170],
  [160, 125],
  [125, 175],
];

export function ElectrolysisLab() {
  const [key, setKey] = useState("cuso4");
  const [on, setOn] = useState(true);
  const el = ELECTROLYTES.find((x) => x.key === key) ?? ELECTROLYTES[0];
  const ions = useMemo(() => {
    const list: { label: string; pos: boolean }[] = [];
    for (let r = 0; r < 2; r++) {
      el.cations.forEach((c) => list.push({ label: c, pos: true }));
      el.anions.forEach((a) => list.push({ label: a, pos: false }));
    }
    return list.slice(0, SLOTS.length);
  }, [el]);
  const CATH_X = 102;
  const AN_X = 218;
  const bubbles = (x: number, colour: string, keyPrefix: string) =>
    [0, 1, 2, 3, 4].map((i) => (
      <circle key={`${keyPrefix}${i}`} cx={x + (i % 2 ? 4 : -4)} cy={200} r={3.5} fill={colour} stroke="#64748b" strokeWidth={0.6}>
        <animate attributeName="cy" values="205;94" dur="2.2s" begin={`${i * 0.44}s`} repeatCount="indefinite" />
      </circle>
    ));

  return (
    <Frame title="⚡ Electrolysis lab" intro="Choose an electrolyte. Positive ions (cations) move to the negative electrode (cathode); negative ions (anions) move to the positive electrode (anode). Electrodes are inert (graphite or platinum).">
      <label className="block text-sm font-bold text-slate-700">
        Electrolyte
        <select value={key} onChange={(e) => setKey(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 bg-white p-2 font-normal">
          {ELECTROLYTES.map((x) => (
            <option key={x.key} value={x.key}>
              {x.name}
            </option>
          ))}
        </select>
      </label>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Btn tone={on ? "rose" : "emerald"} onClick={() => setOn(!on)}>
          {on ? "⏻ Switch off" : "⏻ Switch on"}
        </Btn>
        <span className="text-sm text-slate-600">
          Ions present: <strong>{[...el.cations, ...el.anions].join(", ")}</strong>
          {el.state === "aqueous" && " (H⁺ and OH⁻ come from water)"}
        </span>
      </div>

      <svg viewBox="0 0 320 250" width="100%" className="mx-auto mt-2 max-w-[460px]" role="img" aria-label={`Electrolysis cell for ${el.name}`}>
        {/* circuit */}
        <polyline points={`${CATH_X - 7},40 ${CATH_X - 7},18 150,18`} fill="none" stroke="#334155" strokeWidth={2} />
        <polyline points={`${AN_X + 7},40 ${AN_X + 7},18 170,18`} fill="none" stroke="#334155" strokeWidth={2} />
        <line x1={150} x2={150} y1={10} y2={26} stroke="#334155" strokeWidth={2} />
        <line x1={170} x2={170} y1={4} y2={32} stroke="#334155" strokeWidth={3} />
        <text x={146} y={42} fontSize={11} fontWeight={700} textAnchor="end" fill="#2563eb">−</text>
        <text x={174} y={42} fontSize={11} fontWeight={700} fill="#dc2626">+</text>
        {on && (
          <>
            <text x={110} y={13} fontSize={8} fill="#2563eb">e⁻ →</text>
            <text x={186} y={13} fontSize={8} fill="#2563eb">← e⁻</text>
          </>
        )}
        {/* beaker / crucible */}
        <path d="M40 70 L40 225 Q40 232 48 232 L272 232 Q280 232 280 225 L280 70" fill="none" stroke="#475569" strokeWidth={2} />
        <rect x={42} y={92} width={236} height={138} fill={el.liquid} opacity={0.8} />
        {el.state === "molten" && (
          <text x={160} y={247} textAnchor="middle" fontSize={10} fill="#b45309" fontWeight={700}>
            🔥 heated until molten
          </text>
        )}
        {/* iodine shading */}
        {on && el.anode.kind === "solution" && <ellipse cx={AN_X} cy={170} rx={26} ry={55} fill={el.anode.colour} opacity={0.35} />}
        {/* electrodes */}
        <rect x={CATH_X - 14} y={40} width={14} height={160} fill="#334155" />
        <rect x={AN_X} y={40} width={14} height={160} fill="#334155" />
        {on && el.cathode.kind === "metal" && (el.state === "molten" ? <ellipse cx={160} cy={226} rx={110} ry={5} fill={el.cathode.colour} /> : <rect x={CATH_X - 16} y={92} width={18} height={108} fill={el.cathode.colour} opacity={0.9} />)}
        {on && el.cathode.kind === "gas" && bubbles(CATH_X - 7, el.cathode.colour, "c")}
        {on && el.anode.kind === "gas" && bubbles(AN_X + 7, el.anode.colour, "a")}
        {on && el.anode.kind === "vapour" && (
          <g>
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={AN_X + 7} cy={80} r={8} fill={el.anode.colour} opacity={0.5}>
                <animate attributeName="cy" values="95;35" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        )}
        <text x={CATH_X - 18} y={64} fontSize={9} textAnchor="end" fill="#2563eb" fontWeight={700}>
          cathode (−)
        </text>
        <text x={AN_X + 26} y={64} fontSize={9} fill="#dc2626" fontWeight={700}>
          anode (+)
        </text>
        {/* ions */}
        {ions.map((ion, i) => {
          const [x, y] = SLOTS[i];
          const dx = (ion.pos ? CATH_X + 10 : AN_X - 10) - x;
          return (
            <g key={`${el.key}-${i}`}>
              {on && <animateTransform attributeName="transform" type="translate" values={`0 0; ${dx} 0; ${dx} 0`} keyTimes="0;0.85;1" dur={`${2.6 + (i % 3) * 0.5}s`} repeatCount="indefinite" />}
              <circle cx={x} cy={y} r={12} fill={ion.pos ? "#dbeafe" : "#fee2e2"} stroke={ion.pos ? "#2563eb" : "#dc2626"} />
              <text x={x} y={y + 3} fontSize={ion.label.length > 3 ? 7 : 8.5} textAnchor="middle" fontWeight={700} fill="#0f172a">
                {ion.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        {[
          { side: "Cathode (−)", d: el.cathode, tone: "border-blue-200 bg-blue-50", what: "Reduction — gain of electrons", ionsTo: el.cations },
          { side: "Anode (+)", d: el.anode, tone: "border-rose-200 bg-rose-50", what: "Oxidation — loss of electrons", ionsTo: el.anions },
        ].map(({ side, d, tone, what, ionsTo }) => (
          <div key={side} className={`rounded-2xl border p-3 text-sm ${tone}`}>
            <p className="font-extrabold text-slate-900">{side}</p>
            <p className="text-slate-600">Attracts: {ionsTo.join(", ")}</p>
            <p className="mt-1">
              Product: <strong className="capitalize">{d.product}</strong>
            </p>
            <p className="mt-1 rounded-lg bg-white p-2 text-center font-mono font-bold text-slate-900">{d.eq}</p>
            <p className="mt-1 font-semibold text-slate-800">{what}</p>
            <p className="mt-1 text-slate-700">Observation: {d.obs}.</p>
            <p className="mt-1 text-slate-600">Why: {d.rule}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <Note tone="indigo">{el.extra}</Note>
        <Note>
          <strong>Rules for aqueous solutions (4CH1):</strong> at the cathode, the metal is deposited only if it is <em>less</em> reactive than hydrogen (e.g. copper, silver);
          otherwise hydrogen is given off. At the anode, a halide (Cl⁻, Br⁻, I⁻) gives the halogen; otherwise (sulfate, nitrate) oxygen is given off from hydroxide ions. Remember{" "}
          <strong>OIL RIG</strong>: oxidation is loss, reduction is gain of electrons. Electrons flow through the wires; ions carry the current through the electrolyte.
        </Note>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 6) Equilibrium lab — Haber process

/** Approximate equilibrium mole % of NH3 for a 1:3 N2:H2 feed (ideal-gas model, label "approximate"). */
function nh3Percent(tempC: number, pAtm: number) {
  const T = tempC + 273;
  const K = 4.2e-5 * Math.exp((100000 / 8.314) * (1 / T - 1 / 723)); // atm^-2
  const q = Math.sqrt((K * pAtm * pAtm * 27) / 256);
  const a = (2 * q + 1 - Math.sqrt(4 * q + 1)) / (2 * q);
  return a * 100;
}
function relRate(tempC: number, pAtm: number, cat: boolean) {
  const T = tempC + 273;
  return 100 * Math.exp(-(50000 / 8.314) * (1 / T - 1 / 723)) * (pAtm / 200) * (cat ? 1 : 0.03);
}

export function EquilibriumLab() {
  const [T, setT] = useState(450);
  const [P, setP] = useState(200);
  const [cat, setCat] = useState(true);
  const y = nh3Percent(T, P);
  const r = relRate(T, P, cat);
  const rateBar = Math.max(2, Math.min(100, (Math.log10(Math.max(r, 0.1)) + 1) * 25)); // 0.1→0, 1000→100

  const X0 = 44, X1 = 344, Y0 = 196, Y1 = 12, YMAX = 80;
  const gx = (t: number) => X0 + ((t - 300) / 400) * (X1 - X0);
  const gy = (pc: number) => Y0 - (pc / YMAX) * (Y0 - Y1);
  const curve = (p: number) =>
    Array.from({ length: 41 }, (_, i) => 300 + i * 10)
      .map((t, i) => `${i ? "L" : "M"}${gx(t).toFixed(1)} ${gy(nh3Percent(t, p)).toFixed(1)}`)
      .join(" ");
  const refP = [50, 100, 200, 400];

  const verdict: string[] = [];
  if (T < 400) verdict.push("Low temperature: good yield, but the rate is too slow — ammonia is produced too slowly to be economic.");
  else if (T > 500) verdict.push("High temperature: fast, but the equilibrium yield of ammonia is too low.");
  else verdict.push("Temperature is in the compromise range: a reasonable yield at a reasonable rate.");
  if (P > 250) verdict.push("Very high pressure: higher yield, but compressors, thick pipes and energy are very expensive, and there is a greater safety risk.");
  else if (P < 120) verdict.push("Low pressure: cheaper and safer, but the yield and rate are lower.");
  else verdict.push("Pressure is a compromise between yield and the cost and safety of high pressure.");
  if (!cat) verdict.push("No catalyst: the yield at equilibrium is the same, but equilibrium is reached far too slowly.");

  return (
    <Frame title="🔁 Equilibrium lab: the Haber process" intro="N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ/mol. Change the conditions and see what happens to the equilibrium yield of ammonia and to the rate.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <Slider label="Temperature" value={T} min={300} max={700} step={10} display={`${T} °C`} onChange={setT} />
          <Slider label="Pressure" value={P} min={50} max={400} step={10} display={`${P} atm`} onChange={setP} />
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <input type="checkbox" checked={cat} onChange={(e) => setCat(e.target.checked)} className="h-4 w-4 accent-indigo-600" />
            Iron catalyst
          </label>
          <Btn
            tone="slate"
            onClick={() => {
              setT(450);
              setP(200);
              setCat(true);
            }}
          >
            Industrial conditions (450 °C, 200 atm, iron)
          </Btn>
          <div className="rounded-2xl border border-slate-200 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Equilibrium yield of NH₃ (approximate)</p>
            <div className="mt-1 h-4 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${Math.min(100, y)}%` }} />
            </div>
            <p className="mt-1 font-mono text-lg font-bold text-emerald-700">≈ {y.toFixed(0)} %</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-500">Rate (relative; 450 °C, 200 atm, catalyst = 100)</p>
            <div className="mt-1 h-4 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-amber-500" style={{ width: `${rateBar}%` }} />
            </div>
            <p className="mt-1 font-mono text-lg font-bold text-amber-700">≈ {r < 10 ? r.toFixed(1) : r.toFixed(0)}</p>
            <p className="text-xs text-slate-500">Rate bar uses a log scale (each quarter is 10× faster).</p>
          </div>
        </div>
        <div>
          <svg viewBox="0 0 360 230" width="100%" role="img" aria-label="Graph of percentage yield of ammonia against temperature at different pressures">
            {[0, 20, 40, 60, 80].map((v) => (
              <g key={v}>
                <line x1={X0} x2={X1} y1={gy(v)} y2={gy(v)} stroke="#e2e8f0" />
                <text x={X0 - 4} y={gy(v) + 3} fontSize={9} textAnchor="end" fill="#475569">
                  {v}
                </text>
              </g>
            ))}
            {[300, 400, 500, 600, 700].map((t) => (
              <g key={t}>
                <line x1={gx(t)} x2={gx(t)} y1={Y1} y2={Y0} stroke="#e2e8f0" />
                <text x={gx(t)} y={Y0 + 12} fontSize={9} textAnchor="middle" fill="#475569">
                  {t}
                </text>
              </g>
            ))}
            <line x1={X0} x2={X1} y1={Y0} y2={Y0} stroke="#334155" />
            <line x1={X0} x2={X0} y1={Y0} y2={Y1} stroke="#334155" />
            {refP.map((p) => (
              <g key={p}>
                <path d={curve(p)} fill="none" stroke="#cbd5e1" strokeWidth={1.5} />
                <text x={gx(300) + 4} y={gy(nh3Percent(300, p)) - 3} fontSize={8} fill="#94a3b8">
                  {p} atm
                </text>
              </g>
            ))}
            <path d={curve(P)} fill="none" stroke="#059669" strokeWidth={2.5} />
            <circle cx={gx(T)} cy={gy(y)} r={5} fill="#dc2626" />
            <text x={(X0 + X1) / 2} y={224} fontSize={10} textAnchor="middle" fontWeight={700} fill="#334155">
              temperature / °C
            </text>
            <text x={11} y={(Y0 + Y1) / 2} fontSize={10} textAnchor="middle" fontWeight={700} fill="#334155" transform={`rotate(-90 11 ${(Y0 + Y1) / 2})`}>
              % NH₃ at equilibrium
            </text>
          </svg>
          <p className="text-xs text-slate-500">Green curve: your pressure ({P} atm). Grey curves: other pressures. Values are approximate.</p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <Note tone="amber">
          <strong>Verdict:</strong> {verdict.join(" ")}
        </Note>
        <Note>
          <strong>Temperature:</strong> the forward reaction is exothermic. Increasing the temperature shifts the position of equilibrium to the <strong>left</strong> (in the
          endothermic direction, which absorbs the extra heat), so the yield of ammonia <strong>decreases</strong>. But a higher temperature increases the rate, because particles have
          more energy, so more collisions have energy ≥ the activation energy.
        </Note>
        <Note>
          <strong>Pressure:</strong> there are 4 molecules of gas on the left (1 N₂ + 3 H₂) and only 2 on the right (2 NH₃). Increasing the pressure shifts the position of equilibrium to
          the <strong>right</strong>, the side with fewer gas molecules, so the yield <strong>increases</strong>. Higher pressure also increases the rate (particles closer together, more
          frequent collisions) — but high pressure is expensive to produce and dangerous.
        </Note>
        <Note tone="emerald">
          <strong>Catalyst:</strong> iron provides an alternative pathway with a lower activation energy. It speeds up the forward and backward reactions <strong>equally</strong>, so
          equilibrium is reached faster, but the position of equilibrium — and so the yield — is <strong>unchanged</strong>. Toggle it: the yield bar does not move.
        </Note>
        <Note tone="indigo">
          <strong>Why 450 °C, 200 atm, iron catalyst?</strong> 450 °C is a compromise: a lower temperature would give a higher yield but an uneconomically slow rate. 200 atm is a compromise
          between a high yield and the cost and safety of very high pressure. In a real plant, ammonia is removed by cooling it until it liquefies, and unreacted nitrogen and hydrogen are
          recycled. At dynamic equilibrium (in a closed system) the forward and backward rates are equal and the concentrations stay constant.
        </Note>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// Registry

export const LABS: { key: string; label: string; blurb: string; el: () => ReactElement }[] = [
  { key: "atom", label: "⚛️ Atom builder", blurb: "Build atoms and ions: isotope notation, charge and electronic configuration.", el: () => <AtomBuilder /> },
  { key: "titration", label: "🧪 Titration lab", blurb: "Titrate NaOH with nitric acid, record concordant titres and calculate the concentration.", el: () => <TitrationLab /> },
  { key: "rate", label: "⏱️ Rates lab", blurb: "Marble chips + acid on a balance: concentration, temperature and surface area.", el: () => <RateLab /> },
  { key: "moles", label: "🧮 Moles calculator", blurb: "Convert between mass, moles and gas volume; work out percentage yield.", el: () => <MolesCalculator /> },
  { key: "electrolysis", label: "⚡ Electrolysis lab", blurb: "See which ions go where and predict products and half-equations.", el: () => <ElectrolysisLab /> },
  { key: "equilibrium", label: "🔁 Equilibrium lab", blurb: "Haber process: how temperature, pressure and a catalyst affect yield and rate.", el: () => <EquilibriumLab /> },
];
