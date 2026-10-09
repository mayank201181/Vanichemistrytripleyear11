import type { FigureKey } from "@/lib/types";

// App-drawn figures reproducing the diagrams on the teacher's consolidation paper.

const INK = "#1e293b";
const SOFT = "#64748b";

/** One burette window showing a scale section and the liquid level. */
function BuretteWindow({ x, from, reading, title }: { x: number; from: number; reading: number; title: string }) {
  const top = 40;
  const pxPerCm = 100; // 1 cm³ = 100 px, so 0.1 cm³ = 10 px
  const span = 2.6;
  const h = span * pxPerCm;
  const yOf = (v: number) => top + (v - from) * pxPerCm;
  const ticks: React.ReactNode[] = [];
  for (let i = 0; i <= Math.round(span * 10); i++) {
    const v = Math.round((from + i / 10) * 100) / 100;
    const y = yOf(v);
    const whole = Math.abs(v - Math.round(v)) < 1e-6;
    const half = Math.abs(v * 2 - Math.round(v * 2)) < 1e-6;
    const len = whole ? 26 : half ? 18 : 10;
    ticks.push(<line key={`t${i}`} x1={x + 60 - len} y1={y} x2={x + 60} y2={y} stroke={INK} strokeWidth={whole ? 1.6 : 1} />);
    if (whole) {
      ticks.push(
        <text key={`n${i}`} x={x + 70} y={y + 5} fontSize="15" fill={INK}>
          {v}
        </text>,
      );
    }
  }
  const level = yOf(reading);
  return (
    <g>
      <text x={x + 30} y={24} fontSize="15" fontWeight="bold" fill={INK} textAnchor="middle">
        {title}
      </text>
      <rect x={x} y={level} width={60} height={top + h - level} fill="#cbd5e1" />
      <path d={`M ${x} ${level} Q ${x + 30} ${level + 6} ${x + 60} ${level}`} fill="#cbd5e1" stroke={INK} strokeWidth="1.2" />
      <line x1={x} y1={top} x2={x} y2={top + h} stroke={INK} strokeWidth="1.5" />
      <line x1={x + 60} y1={top} x2={x + 60} y2={top + h} stroke={INK} strokeWidth="1.5" />
      <path d={`M ${x} ${top} l 10 -5 l 10 5 l 10 -5 l 10 5 l 10 -5 l 10 5`} fill="none" stroke={INK} />
      <path d={`M ${x} ${top + h} l 10 5 l 10 -5 l 10 5 l 10 -5 l 10 5 l 10 -5`} fill="none" stroke={INK} />
      {ticks}
    </g>
  );
}

export function BuretteRough() {
  return (
    <svg viewBox="0 0 330 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two sections of a burette scale for the rough titration. Start: the bottom of the meniscus is between 2.1 and 2.2. End: the bottom of the meniscus is at 23.8." fontFamily="sans-serif">
      <BuretteWindow x={40} from={1.7} reading={2.15} title="Start" />
      <BuretteWindow x={200} from={22.7} reading={23.8} title="End" />
    </svg>
  );
}

export function Distillation() {
  return (
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple distillation: a round-bottomed flask of sodium chloride solution heated by a Bunsen burner, a thermometer at the neck, a Liebig condenser sloping down with cooling water in at the bottom and out at the top, and pure water dripping into a conical flask." fontFamily="sans-serif">
      {/* flask */}
      <circle cx="110" cy="170" r="48" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M 66 185 Q 110 225 154 185 Z" fill="#bfdbfe" />
      <rect x="98" y="80" width="24" height="48" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="94" y="70" width="32" height="12" fill="#475569" />
      <line x1="110" y1="60" x2="110" y2="104" stroke="#ef4444" strokeWidth="3" />
      <text x="20" y="150" fontSize="13" fill={INK}>sodium chloride</text>
      <text x="44" y="166" fontSize="13" fill={INK}>solution</text>
      {/* side arm + condenser */}
      <line x1="122" y1="96" x2="400" y2="190" stroke={INK} strokeWidth="2" />
      <polygon points="200,105 390,170 382,192 192,127" fill="#e0f2fe" stroke={INK} strokeWidth="2" />
      <line x1="370" y1="185" x2="370" y2="215" stroke={INK} strokeWidth="2" />
      <polygon points="365,215 370,225 375,215" fill={INK} />
      <text x="330" y="244" fontSize="13" fill={INK}>water in</text>
      <line x1="232" y1="112" x2="232" y2="78" stroke={INK} strokeWidth="2" />
      <polygon points="227,82 232,72 237,82" fill={INK} />
      <text x="200" y="64" fontSize="13" fill={INK}>water out</text>
      <text x="262" y="102" fontSize="12" fill={SOFT}>condenser</text>
      {/* drips + conical flask */}
      <circle cx="410" cy="206" r="3" fill="#3b82f6" />
      <circle cx="410" cy="220" r="3" fill="#3b82f6" />
      <polygon points="395,232 425,232 455,292 365,292" fill="#fff" stroke={INK} strokeWidth="2" />
      <polygon points="378,268 442,268 455,292 365,292" fill="#bfdbfe" />
      <text x="462" y="250" fontSize="13" fill={INK}>conical flask</text>
      <text x="462" y="282" fontSize="13" fill={INK}>pure water</text>
      {/* heat */}
      <rect x="90" y="236" width="40" height="8" fill="#94a3b8" />
      <path d="M 104 262 Q 110 240 116 262 Z" fill="#60a5fa" />
      <rect x="104" y="262" width="12" height="28" fill="#64748b" />
      <text x="20" y="282" fontSize="12" fill={SOFT}>heat</text>
    </svg>
  );
}

export function MarbleFlask() {
  return (
    <svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A conical flask containing marble chips and dilute hydrochloric acid, with a cotton wool plug in the neck, standing on a balance reading 220.25 g." fontFamily="sans-serif">
      <ellipse cx="150" cy="38" rx="20" ry="14" fill="#f8fafc" stroke={SOFT} />
      <ellipse cx="140" cy="34" rx="10" ry="8" fill="#f8fafc" stroke={SOFT} />
      <ellipse cx="160" cy="32" rx="10" ry="8" fill="#f8fafc" stroke={SOFT} />
      <polygon points="134,48 166,48 166,80 226,200 74,200 134,80" fill="#fff" stroke={INK} strokeWidth="2" />
      <polygon points="98,152 202,152 226,200 74,200" fill="#dbeafe" />
      {[100, 116, 130, 146, 160, 176, 192].map((x, i) => (
        <ellipse key={x} cx={x} cy={192 - (i % 2) * 4} rx="8" ry="5" fill="#e2e8f0" stroke={SOFT} />
      ))}
      <rect x="40" y="200" width="220" height="10" fill="#cbd5e1" stroke={INK} />
      <rect x="60" y="210" width="180" height="56" rx="8" fill="#f1f5f9" stroke={INK} strokeWidth="2" />
      <rect x="100" y="224" width="100" height="28" rx="4" fill="#fff" stroke={INK} />
      <text x="150" y="244" fontSize="16" fontWeight="bold" fill={INK} textAnchor="middle">220.25 g</text>
      <line x1="172" y1="36" x2="280" y2="36" stroke={SOFT} />
      <text x="286" y="40" fontSize="13" fill={INK}>cotton wool</text>
      <line x1="200" y1="176" x2="280" y2="150" stroke={SOFT} />
      <text x="286" y="154" fontSize="13" fill={INK}>dilute hydrochloric acid</text>
      <line x1="110" y1="190" x2="40" y2="140" stroke={SOFT} />
      <text x="10" y="134" fontSize="13" fill={INK}>marble chips</text>
      <line x1="240" y1="238" x2="286" y2="238" stroke={SOFT} />
      <text x="292" y="242" fontSize="13" fill={INK}>balance</text>
    </svg>
  );
}

export function RateGraph() {
  // decrease in mass rises steeply then levels off at 0.55 g at 12 min (≈0.40 g at 4 min), as on the paper
  const X0 = 60,
    Y0 = 250,
    W = 420,
    H = 210;
  const xOf = (t: number) => X0 + (t / 14) * W;
  const yOf = (m: number) => Y0 - (m / 0.7) * H;
  const pts: string[] = [];
  for (let t = 0; t <= 12; t += 0.25) {
    const m = (0.55 * (1 - Math.exp(-t / 3.1))) / (1 - Math.exp(-12 / 3.1));
    pts.push(`${xOf(t).toFixed(1)},${yOf(m).toFixed(1)}`);
  }
  return (
    <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of decrease in mass in grams against time in minutes. The curve rises steeply from 0, then less steeply, and levels off at 0.55 g at about 12 minutes." fontFamily="sans-serif">
      {Array.from({ length: 15 }, (_, i) => (
        <line key={`v${i}`} x1={xOf(i)} y1={Y0} x2={xOf(i)} y2={Y0 - H} stroke={i % 2 ? "#e2e8f0" : "#cbd5e1"} />
      ))}
      {Array.from({ length: 15 }, (_, i) => (
        <line key={`h${i}`} x1={X0} y1={yOf(i * 0.05)} x2={X0 + W} y2={yOf(i * 0.05)} stroke={i % 2 ? "#e2e8f0" : "#cbd5e1"} />
      ))}
      <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} stroke={INK} strokeWidth="1.5" />
      <line x1={X0} y1={Y0} x2={X0} y2={Y0 - H} stroke={INK} strokeWidth="1.5" />
      {[0, 2, 4, 6, 8, 10, 12, 14].map((t) => (
        <text key={t} x={xOf(t)} y={Y0 + 18} fontSize="12" textAnchor="middle" fill={INK}>
          {t}
        </text>
      ))}
      {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7].map((m) => (
        <text key={m} x={X0 - 8} y={yOf(m) + 4} fontSize="12" textAnchor="end" fill={INK}>
          {m.toFixed(1)}
        </text>
      ))}
      <polyline points={pts.join(" ")} fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
      <text x={X0 + W / 2} y={Y0 + 40} fontSize="13" textAnchor="middle" fill={INK}>
        Time in minutes
      </text>
      <text x="16" y={Y0 - H / 2} fontSize="13" fill={INK} textAnchor="middle" transform={`rotate(-90 16 ${Y0 - H / 2})`}>
        Decrease in mass in g
      </text>
    </svg>
  );
}

export function CopperLattice() {
  const ions: [number, number][] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) ions.push([90 + c * 52 + (r % 2) * 26, 60 + r * 48]);
  const electrons: [number, number][] = [
    [116, 84], [168, 84], [220, 84], [272, 84], [324, 84], [142, 132], [194, 132], [246, 132], [298, 132], [90, 108], [350, 108], [116, 40], [272, 176], [170, 178],
  ];
  return (
    <svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metallic bonding in copper: a regular lattice of positive copper ions surrounded by a sea of delocalised electrons." fontFamily="sans-serif">
      <rect x="62" y="30" width="320" height="160" rx="18" fill="#fef3c7" stroke="#f59e0b" strokeDasharray="5 4" />
      {ions.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="20" fill="#fdba74" stroke={INK} />
          <text x={x} y={y + 6} fontSize="18" textAnchor="middle" fill={INK}>+</text>
        </g>
      ))}
      {electrons.map(([x, y], i) => (
        <g key={`e${i}`}>
          <circle cx={x} cy={y} r="5" fill="#2563eb" />
        </g>
      ))}
      <text x="396" y="70" fontSize="13" fill={INK}>positive metal</text>
      <text x="396" y="86" fontSize="13" fill={INK}>ions (cations)</text>
      <circle cx="404" cy="132" r="5" fill="#2563eb" />
      <text x="414" y="137" fontSize="13" fill={INK}>delocalised</text>
      <text x="414" y="153" fontSize="13" fill={INK}>electrons</text>
    </svg>
  );
}

export function ApparatusQ2() {
  return (
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apparatus A: a graduated syringe with a scale from 0 to 100 and a plunger. Apparatus B: a digital top-pan balance showing 00.0." fontFamily="sans-serif">
      <text x="20" y="24" fontSize="15" fontWeight="bold" fill={INK}>A</text>
      <rect x="40" y="50" width="220" height="40" rx="4" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="20" y="64" width="20" height="12" fill="#fff" stroke={INK} />
      <rect x="140" y="54" width="8" height="32" fill="#94a3b8" />
      <line x1="148" y1="70" x2="300" y2="70" stroke={INK} strokeWidth="3" />
      <rect x="300" y="56" width="8" height="28" fill="#94a3b8" />
      {Array.from({ length: 21 }, (_, i) => (
        <line key={i} x1={48 + i * 10} y1="50" x2={48 + i * 10} y2={i % 4 === 0 ? 62 : 56} stroke={INK} />
      ))}
      {[0, 20, 40, 60, 80, 100].map((v, i) => (
        <text key={v} x={48 + i * 40} y="44" fontSize="11" textAnchor="middle" fill={INK}>
          {v}
        </text>
      ))}
      <text x="300" y="24" fontSize="15" fontWeight="bold" fill={INK}>B</text>
      <rect x="320" y="100" width="180" height="60" rx="8" fill="#f1f5f9" stroke={INK} strokeWidth="2" />
      <rect x="340" y="88" width="140" height="12" fill="#cbd5e1" stroke={INK} />
      <rect x="420" y="116" width="64" height="28" rx="3" fill="#fff" stroke={INK} />
      <text x="452" y="136" fontSize="16" fontWeight="bold" fill={INK} textAnchor="middle">00.0</text>
    </svg>
  );
}

export function Figure({ figure }: { figure: FigureKey; className?: string }) {
  switch (figure) {
    case "burette-rough":
      return <BuretteRough />;
    case "distillation":
      return <Distillation />;
    case "marble-flask":
      return <MarbleFlask />;
    case "rate-graph":
      return <RateGraph />;
    case "copper-lattice":
      return <CopperLattice />;
    case "apparatus-q2":
      return <ApparatusQ2 />;
  }
}
