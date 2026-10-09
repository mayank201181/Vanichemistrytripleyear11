import type { GuideSection } from "../../types";

const moltenDiagram = `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrolysis of molten lead(II) bromide in a heated crucible with two graphite electrodes connected to a d.c. supply. Lead ions move to the cathode and bromide ions move to the anode.">
<rect x="0" y="0" width="440" height="280" fill="none"/>
<rect x="180" y="12" width="80" height="30" rx="4" fill="#fef3c7" stroke="#92400e" stroke-width="1.5"/>
<text x="220" y="32" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1f2937">d.c. supply</text>
<text x="150" y="22" font-family="sans-serif" font-size="14" text-anchor="end" fill="#1d4ed8">−</text>
<text x="290" y="22" font-family="sans-serif" font-size="14" fill="#b91c1c">+</text>
<polyline points="180,27 160,27 160,70" fill="none" stroke="#1f2937" stroke-width="2"/>
<polyline points="260,27 280,27 280,70" fill="none" stroke="#1f2937" stroke-width="2"/>
<path d="M120,120 L320,120 L300,205 L140,205 Z" fill="#e5e7eb" stroke="#4b5563" stroke-width="2"/>
<path d="M125,138 L315,138 L300,200 L140,200 Z" fill="#fde68a" stroke="none"/>
<rect x="153" y="70" width="14" height="115" fill="#374151"/>
<rect x="273" y="70" width="14" height="115" fill="#374151"/>
<circle cx="200" cy="165" r="13" fill="#bfdbfe" stroke="#1d4ed8"/>
<text x="200" y="169" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1e3a8a">Pb²⁺</text>
<line x1="186" y1="165" x2="172" y2="165" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="170,165 177,161 177,169" fill="#1d4ed8"/>
<circle cx="240" cy="180" r="13" fill="#fecaca" stroke="#b91c1c"/>
<text x="240" y="184" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#7f1d1d">Br⁻</text>
<line x1="254" y1="180" x2="268" y2="180" stroke="#b91c1c" stroke-width="2"/>
<polygon points="270,180 263,176 263,184" fill="#b91c1c"/>
<ellipse cx="160" cy="194" rx="14" ry="4" fill="#9ca3af"/>
<circle cx="288" cy="112" r="5" fill="#b45309" opacity="0.7"/>
<circle cx="296" cy="100" r="6" fill="#b45309" opacity="0.6"/>
<circle cx="292" cy="86" r="5" fill="#b45309" opacity="0.5"/>
<polygon points="200,255 210,225 220,255" fill="#f97316"/>
<polygon points="215,255 225,220 235,255" fill="#f59e0b"/>
<text x="250" y="250" font-family="sans-serif" font-size="12" fill="#9a3412">heat until molten</text>
<text x="20" y="80" font-family="sans-serif" font-size="12" fill="#1d4ed8">cathode (−)</text>
<text x="20" y="96" font-family="sans-serif" font-size="11" fill="#1f2937">graphite</text>
<text x="20" y="215" font-family="sans-serif" font-size="11" fill="#1f2937">grey lead collects</text>
<text x="20" y="229" font-family="sans-serif" font-size="11" fill="#1f2937">at the bottom</text>
<line x1="132" y1="210" x2="148" y2="197" stroke="#6b7280" stroke-width="1"/>
<text x="320" y="80" font-family="sans-serif" font-size="12" fill="#b91c1c">anode (+)</text>
<text x="320" y="96" font-family="sans-serif" font-size="11" fill="#1f2937">red-brown</text>
<text x="320" y="110" font-family="sans-serif" font-size="11" fill="#1f2937">bromine vapour</text>
<text x="330" y="160" font-family="sans-serif" font-size="11" fill="#1f2937">molten PbBr₂</text>
<text x="220" y="275" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#4b5563">Pb²⁺ + 2e⁻ → Pb (cathode) · 2Br⁻ → Br₂ + 2e⁻ (anode)</text>
</svg>`;

const aqueousDiagram = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrolysis of dilute sulfuric acid. Two inverted test tubes filled with solution sit over graphite electrodes. The tube over the cathode holds twice the volume of gas (hydrogen) as the tube over the anode (oxygen).">
<rect x="110" y="110" width="220" height="140" fill="none" stroke="#4b5563" stroke-width="2"/>
<rect x="112" y="135" width="216" height="113" fill="#dbeafe"/>
<rect x="150" y="50" width="34" height="160" rx="10" fill="#dbeafe" stroke="#4b5563" stroke-width="1.5"/>
<rect x="151" y="51" width="32" height="80" rx="9" fill="#ffffff"/>
<rect x="256" y="50" width="34" height="160" rx="10" fill="#dbeafe" stroke="#4b5563" stroke-width="1.5"/>
<rect x="257" y="51" width="32" height="40" rx="9" fill="#ffffff"/>
<rect x="161" y="150" width="12" height="98" fill="#374151"/>
<rect x="267" y="150" width="12" height="98" fill="#374151"/>
<circle cx="167" cy="140" r="3" fill="none" stroke="#1d4ed8"/>
<circle cx="163" cy="125" r="3" fill="none" stroke="#1d4ed8"/>
<circle cx="272" cy="140" r="3" fill="none" stroke="#b91c1c"/>
<polyline points="167,248 167,272 190,272" fill="none" stroke="#1f2937" stroke-width="2"/>
<polyline points="273,248 273,272 250,272" fill="none" stroke="#1f2937" stroke-width="2"/>
<rect x="190" y="260" width="60" height="26" rx="4" fill="#fef3c7" stroke="#92400e" stroke-width="1.5"/>
<text x="220" y="278" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#1f2937">d.c. 6 V</text>
<text x="184" y="294" font-family="sans-serif" font-size="12" fill="#1d4ed8">−</text>
<text x="252" y="294" font-family="sans-serif" font-size="12" fill="#b91c1c">+</text>
<text x="20" y="62" font-family="sans-serif" font-size="12" fill="#1d4ed8">hydrogen, H₂</text>
<text x="20" y="77" font-family="sans-serif" font-size="11" fill="#1f2937">2 volumes</text>
<line x1="90" y1="70" x2="150" y2="90" stroke="#6b7280" stroke-width="1"/>
<text x="20" y="200" font-family="sans-serif" font-size="12" fill="#1d4ed8">cathode (−)</text>
<line x1="90" y1="196" x2="160" y2="196" stroke="#6b7280" stroke-width="1"/>
<text x="305" y="62" font-family="sans-serif" font-size="12" fill="#b91c1c">oxygen, O₂</text>
<text x="305" y="77" font-family="sans-serif" font-size="11" fill="#1f2937">1 volume</text>
<line x1="303" y1="70" x2="290" y2="72" stroke="#6b7280" stroke-width="1"/>
<text x="345" y="200" font-family="sans-serif" font-size="12" fill="#b91c1c">anode (+)</text>
<line x1="343" y1="196" x2="280" y2="196" stroke="#6b7280" stroke-width="1"/>
<text x="336" y="150" font-family="sans-serif" font-size="11" fill="#1f2937">dilute H₂SO₄</text>
<text x="220" y="20" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#4b5563">test tubes filled with solution, then inverted</text>
<text x="220" y="34" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#4b5563">over each inert electrode</text>
</svg>`;

export const guide: GuideSection[] = [
  {
    id: "electro-principles",
    topic: "electro",
    lesson: "4CH1 1(i) · Triple",
    heading: "How electrolysis works",
    discovery: {
      problem:
        "Solid lead(II) bromide is an insulator: connect it to a battery and the bulb stays dark. Heat the same powder until it melts and the bulb lights — and a silvery metal starts collecting at the bottom of the crucible. Nothing has been added. What changed, and where did the metal come from?",
      idea:
        "Lead(II) bromide is made of **ions**. In the solid they are locked in a lattice; once molten they are **free to move**. Positive Pb²⁺ ions drift to the negative electrode, pick up electrons and become lead atoms. The current is carried by moving ions, and the compound is *decomposed* by it. That is electrolysis.",
    },
    body: `**Electrolysis** is the decomposition (breaking down) of an ionic compound, when **molten or in aqueous solution**, by passing an electric current through it.

The key vocabulary:
- **Electrolyte** — the ionic compound, molten or dissolved, that conducts electricity and is decomposed by it.
- **Electrodes** — the solid conductors that carry the current into and out of the electrolyte. They are usually **inert** (unreactive) — **graphite** (carbon) or **platinum** — so they do not take part in the reaction.
- **Anode** — the **positive** electrode. Negative ions (**anions**) are attracted to it.
- **Cathode** — the **negative** electrode. Positive ions (**cations**) are attracted to it.

**Why must the compound be molten or dissolved?** In a solid ionic lattice the ions are held in fixed positions by strong electrostatic forces, so they **cannot move** and cannot carry charge. When the compound melts or dissolves, the ions become **free to move** and can carry charge through the liquid. Note: in the electrolyte the current is carried by **ions**, not electrons. Electrons only flow in the external wires and electrodes.

**Conductors vs electrolytes vs non-electrolytes**

| Type | Example | How charge is carried | Decomposed? |
|---|---|---|---|
| Conductor | copper, graphite | delocalised electrons | no |
| Electrolyte | molten NaCl, CuSO₄(aq) | moving ions | yes |
| Non-electrolyte | ethanol, sugar solution, molten sulfur | no ions — cannot conduct | — |

**Molten binary compounds** (two elements) always give the **metal at the cathode** and the **non-metal at the anode**:

| Electrolyte | Cathode (−) | Anode (+) |
|---|---|---|
| lead(II) bromide, PbBr₂(l) | lead (grey/silvery liquid) | bromine (red-brown vapour) |
| sodium chloride, NaCl(l) | sodium | chlorine (pale green gas) |
| aluminium oxide, Al₂O₃ in molten cryolite | aluminium | oxygen (burns the carbon anodes) |

**Half-equations** show what happens at each electrode. For molten lead(II) bromide:
- Cathode: **Pb²⁺ + 2e⁻ → Pb** — the lead ions **gain** electrons: **reduction**.
- Anode: **2Br⁻ → Br₂ + 2e⁻** — the bromide ions **lose** electrons: **oxidation**.
- Overall: PbBr₂(l) → Pb(l) + Br₂(g)

Other half-equations you should be able to write: Na⁺ + e⁻ → Na; 2Cl⁻ → Cl₂ + 2e⁻; Al³⁺ + 3e⁻ → Al; 2O²⁻ → O₂ + 4e⁻.

Remember **OIL RIG** — **O**xidation **I**s **L**oss (of electrons), **R**eduction **I**s **G**ain. In electrolysis, **reduction always happens at the cathode** and **oxidation always at the anode**. Electrons are pulled off anions at the anode, travel through the external circuit to the cathode and are handed to cations.

Practical points: molten PbBr₂ must be electrolysed in a **fume cupboard** because bromine vapour is toxic; the lead is denser than the molten salt, so it collects as a bead at the bottom of the crucible. In industry, aluminium oxide is dissolved in molten **cryolite** to lower the operating temperature; the oxygen made at the anode reacts with the hot carbon anodes, which burn away and must be replaced.`,
    diagram: moltenDiagram,
    diagramCaption:
      "Electrolysis of molten lead(II) bromide. Pb²⁺ ions move to the cathode and are reduced to lead; Br⁻ ions move to the anode and are oxidised to bromine.",
    keyPoints: [
      "Electrolysis = decomposition of an ionic compound, molten or in aqueous solution, by an electric current.",
      "Anode is positive (oxidation, anions go there); cathode is negative (reduction, cations go there).",
      "Solid ionic compounds do not conduct: ions are in fixed positions in the lattice and cannot move. Molten or dissolved, the ions are free to move and carry the charge.",
      "Molten binary compound: metal forms at the cathode, non-metal at the anode.",
      "Pb²⁺ + 2e⁻ → Pb (reduction, cathode); 2Br⁻ → Br₂ + 2e⁻ (oxidation, anode).",
      "Inert electrodes (graphite or platinum) conduct but do not react.",
    ],
    whyItWorks:
      "Opposite charges attract: the power supply pumps electrons onto the cathode, making it negative, and pulls them off the anode, making it positive. Cations take electrons at the cathode (reduced to atoms); anions give electrons up at the anode (oxidised to atoms, which pair up into molecules such as Br₂).",
    memoryTrick:
      "**PANCake**: **P**ositive **A**node, **N**egative is **C**athode. **OIL RIG**: Oxidation Is Loss, Reduction Is Gain. And **An Ox, Red Cat**: oxidation at the anode, reduction at the cathode.",
    examTip:
      "For 'why does molten/aqueous X conduct?' the mark is for **ions** that are **free to move** (and carry charge). Writing 'electrons move' or 'free electrons' scores zero for an ionic compound. In half-equations, check that charges balance: 2Br⁻ → Br₂ + 2e⁻ has −2 on both sides.",
    thinkDeeper:
      "Molten aluminium oxide gives oxygen at the anode, yet the industrial anodes must be replaced regularly. Write the equation for what happens to the anodes, and explain why using platinum anodes instead is not done in practice even though platinum would not react.",
    workedExample: {
      problem:
        "Molten potassium iodide, KI, is electrolysed using graphite electrodes. (a) Name the product at each electrode. (b) Write the half-equations. (c) Which ion is oxidised?",
      solution: `**Step 1 — ions present:** K⁺ and I⁻ only (molten, so no water).

**Step 2 — cathode (−):** K⁺ ions are attracted and gain electrons → **potassium**.
K⁺ + e⁻ → K

**Step 3 — anode (+):** I⁻ ions are attracted and lose electrons → **iodine** (purple vapour / grey solid on cooling).
2I⁻ → I₂ + 2e⁻

**Step 4 — oxidation:** the **iodide ion** loses electrons, so it is oxidised (OIL). Potassium ions are reduced.

Check: charge on each side of every half-equation balances (−2 = −2 for iodide).`,
    },
  },
  {
    id: "electro-solutions",
    topic: "electro",
    lesson: "4CH1 1(i) · Triple",
    heading: "Electrolysis of solutions & half-equations",
    discovery: {
      problem:
        "Electrolyse **molten** sodium chloride and you get sodium metal at the cathode. Electrolyse sodium chloride **solution** with the same electrodes and you get bubbles of a gas that pops with a lighted splint — no sodium at all. Where did the hydrogen come from?",
      idea:
        "Water itself contains a few ions: H₂O ⇌ H⁺ + OH⁻. So an aqueous solution has **two** kinds of cation competing at the cathode and **two** kinds of anion competing at the anode. Only one of each pair is discharged — the one that is easier to discharge wins.",
    },
    body: `In an **aqueous solution** there are ions from the dissolved compound **and** H⁺ and OH⁻ ions from water. At each electrode the ions compete, and only one is discharged.

**At the cathode (−) — which positive ion wins?**
- If the metal is **more reactive than hydrogen** (K, Na, Ca, Mg, Al, Zn…), **hydrogen gas** is produced: **2H⁺ + 2e⁻ → H₂**
- If the metal is **less reactive than hydrogen** (copper, silver, gold), the **metal** is deposited: **Cu²⁺ + 2e⁻ → Cu**

**At the anode (+) — which negative ion wins?**
- If a **halide** ion is present (Cl⁻, Br⁻, I⁻), the **halogen** forms: **2Cl⁻ → Cl₂ + 2e⁻**
- Otherwise (sulfate, nitrate), the OH⁻ ions are discharged and **oxygen** forms: **4OH⁻ → O₂ + 2H₂O + 4e⁻**

**Key examples (inert electrodes)**

| Solution | Cathode (−) | Anode (+) | Left in solution |
|---|---|---|---|
| NaCl(aq) (concentrated) | hydrogen | chlorine | sodium hydroxide, NaOH |
| CuSO₄(aq) | copper (pink-brown coating) | oxygen | sulfuric acid; blue colour fades |
| dilute H₂SO₄ | hydrogen | oxygen | more concentrated H₂SO₄ |
| CuCl₂(aq) | copper | chlorine | blue colour fades |

**Copper(II) sulfate:** the blue colour is caused by Cu²⁺ ions. These are reduced at the cathode and plate out as copper, so the **concentration of Cu²⁺ falls** and the blue colour **fades**. H⁺ and SO₄²⁻ ions are left behind, so the solution becomes acidic.

**Dilute sulfuric acid:** the products are hydrogen and oxygen, so effectively **water is decomposed**: 2H₂O → 2H₂ + O₂. The volume of hydrogen is **twice** the volume of oxygen. Why? The same number of electrons flows through each electrode. Making one O₂ releases **4** electrons; those 4 electrons make **two** H₂ molecules (each needs 2). Twice the moles of gas means twice the volume (at the same temperature and pressure).

**Sodium chloride solution:** H⁺ and Cl⁻ are removed, leaving Na⁺ and OH⁻ — the solution becomes **sodium hydroxide** (alkaline). In practice slightly less chlorine than hydrogen is collected because chlorine is a little soluble in water.

**Tests for the products**
- **Hydrogen**: lighted splint → **squeaky pop**.
- **Oxygen**: **relights a glowing splint**.
- **Chlorine**: **bleaches damp (blue) litmus paper** (it may turn red first).
- **Copper**: pink-brown solid on the cathode; the cathode **gains mass**.

**Practical: electrolysis of an aqueous solution**
1. Pour the solution into a beaker or electrolysis cell fitted with two **inert (graphite) electrodes**.
2. Fill two small test tubes with the solution and **invert** one over each electrode (no air bubbles).
3. Connect the electrodes to a **low-voltage d.c. supply** (e.g. 6 V); note which is the cathode (−) and anode (+).
4. Switch on; observe bubbles or deposits at each electrode and **collect the gases** by displacing the solution.
5. Switch off, remove each tube (keeping it upside down for hydrogen) and **test** the gas.
6. For a metal deposit, weigh the dry cathode before and after; rinse it with distilled water and dry before reweighing.
Chlorine is toxic: work in a well-ventilated room or fume cupboard and only run small-scale.`,
    diagram: aqueousDiagram,
    diagramCaption:
      "Electrolysing dilute sulfuric acid: hydrogen collects over the cathode and oxygen over the anode, in a 2 : 1 volume ratio.",
    keyPoints: [
      "Aqueous solutions also contain H⁺ and OH⁻ from water.",
      "Cathode: hydrogen forms unless the metal is less reactive than hydrogen (then the metal, e.g. copper, forms).",
      "Anode: a halogen forms if a halide is present; otherwise oxygen: 4OH⁻ → O₂ + 2H₂O + 4e⁻.",
      "NaCl(aq) → H₂ (cathode) + Cl₂ (anode), leaving NaOH(aq).",
      "CuSO₄(aq), inert electrodes → Cu (cathode) + O₂ (anode); blue fades as Cu²⁺ ions are removed.",
      "Dilute H₂SO₄ → H₂ and O₂ in a 2 : 1 volume ratio because 4 electrons make 2H₂ but only 1O₂.",
      "Tests: H₂ squeaky pop; O₂ relights glowing splint; Cl₂ bleaches damp litmus paper.",
    ],
    whyItWorks:
      "The ion that is discharged is the one that most easily gains (cathode) or loses (anode) electrons. Ions of reactive metals hold on to being ions, so H⁺ is reduced instead; ions of unreactive metals like Cu²⁺ readily accept electrons. Halide ions give up electrons more readily than OH⁻; sulfate and nitrate ions effectively never do.",
    memoryTrick:
      "Cathode: 'Is the metal **below** hydrogen in the reactivity series? Then you get the metal; otherwise H₂.' Anode: 'Halide? Halogen. No halide? Oxygen.'",
    examTip:
      "Examiners want the reason as well as the product: 'hydrogen is produced because sodium is **more reactive than hydrogen**'. For the colour change in CuSO₄(aq) you must say **Cu²⁺ ions are removed/discharged** so their **concentration decreases** — 'the copper is used up' is too vague. Balance the oxygen half-equation: 4OH⁻ → O₂ + 2H₂O + 4e⁻.",
    thinkDeeper:
      "If copper(II) sulfate solution is electrolysed with **copper** electrodes instead of graphite, the copper anode itself loses mass (Cu → Cu²⁺ + 2e⁻) and no oxygen is given off. Predict what happens to the colour of the solution, and explain why using the half-equations at both electrodes.",
    workedExample: {
      problem:
        "Dilute sulfuric acid is electrolysed with inert electrodes. After 10 minutes, 36 cm³ of hydrogen has been collected at the cathode. (a) Write both half-equations. (b) Predict the volume of oxygen collected at the anode. (c) Suggest why slightly less than this is usually measured.",
      solution: `**(a)** Cathode: 2H⁺ + 2e⁻ → H₂ (reduction)
Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻ (oxidation)

**(b)** Make the electrons equal: double the cathode equation.
4H⁺ + 4e⁻ → 2H₂ and 4OH⁻ → O₂ + 2H₂O + 4e⁻
So 4 electrons → **2 mol H₂ : 1 mol O₂**.
Equal moles of gas occupy equal volumes at the same temperature and pressure, so
volume of O₂ = 36 ÷ 2 = **18 cm³**

**(c)** Oxygen is slightly more soluble in water than hydrogen, so a little dissolves in the solution instead of being collected.`,
    },
  },
];
