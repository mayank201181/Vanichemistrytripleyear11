import type { GuideSection } from "../../types";

export const guide: GuideSection[] = [
  // ───────────────────────────── GROUP 1 ─────────────────────────────
  {
    id: "inorganic-group1",
    topic: "inorganic",
    lesson: "4CH1 2(a)",
    heading: "Group 1 — the alkali metals",
    discovery: {
      problem:
        "Lithium, sodium and potassium all have just ONE electron in their outer shell, and they all react with water to make the same kind of products. So why does lithium fizz gently while potassium bursts into a lilac flame? What is different about that single outer electron?",
      idea:
        "It is the same electron, but it sits in a shell that is further and further from the nucleus as you go down the group, with more inner shells shielding it. The attraction holding it gets weaker, so it is lost more easily — and losing that electron IS the reaction.",
    },
    body: `The **alkali metals** are lithium, sodium, potassium, rubidium and caesium. They are soft (you can cut them with a knife), have low densities (Li, Na and K float on water) and low melting points for metals. A freshly cut surface is shiny but quickly **tarnishes** as it reacts with oxygen in the air. They are stored **under oil** to stop them reacting with oxygen and water vapour in the air.

**Reaction with water** — every alkali metal reacts to form a **metal hydroxide** (which dissolves to give an **alkaline** solution) and **hydrogen** gas:

- 2Li(s) + 2H₂O(l) → 2LiOH(aq) + H₂(g)
- 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)
- 2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)

| Metal | Observations when added to water |
|---|---|
| Lithium | floats; fizzes steadily; moves slowly on the surface; gradually gets smaller and disappears |
| Sodium | floats; **melts into a silvery ball** (reaction is exothermic and Na has a low melting point); fizzes rapidly; darts around the surface; disappears quickly |
| Potassium | as sodium but more vigorous; the hydrogen **ignites with a lilac flame**; may spark or spit; disappears very quickly |

If universal indicator is added to the water, it turns **purple/blue** because the hydroxide solution is alkaline (pH about 13–14). Each metal atom loses one electron to form a 1+ ion, e.g. Na → Na⁺ + e⁻, so the metals are **oxidised**.

**Evidence that they are a family.** The **similarities** in these reactions — every one floats, fizzes, gives off **hydrogen**, forms a soluble **metal hydroxide** with formula MOH and makes the water **alkaline** — show that lithium, sodium and potassium are a **family** of elements. They behave alike because each atom has **one electron in its outer shell**. The **differences** (how vigorous the reaction is) follow a smooth trend down the group.

**Trend with air.** All three tarnish in air to form the oxide (e.g. 4Na(s) + O₂(g) → 2Na₂O(s)), and the freshly cut surface tarnishes **faster** going down the group — lithium dulls slowly, potassium almost instantly.

**Explaining the trend in reactivity** (a classic 3–4 mark question). Reactivity **increases down the group** because:

- the atoms get **bigger** — the outer electron is in a shell **further from the nucleus**;
- there are **more inner shells**, which **shield** the outer electron from the positive nucleus;
- so the **attraction** between the nucleus and the outer electron is **weaker** (even though the nuclear charge is greater);
- so the outer electron is **lost more easily**.

**Predicting rubidium and caesium.** Following the trend, Rb and Cs react even more violently — they react **explosively** with water (and both sink, as they are denser than water). The products follow the same pattern: 2Rb + 2H₂O → 2RbOH + H₂. Melting point **decreases** down the group (Cs melts at about 29 °C), while density generally increases.

In an exam you may be given data for an unfamiliar Group 1 element and asked to predict its properties: use the trend, state the direction, and give the products by analogy (metal hydroxide + hydrogen).`,
    diagram: `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lithium, sodium and potassium atoms drawn with increasing numbers of shells; the outer electron is further from the nucleus going down the group">
<text x="10" y="20" font-family="sans-serif" font-size="13" font-weight="bold">Down Group 1: outer electron further away and more shielded</text>
<circle cx="80" cy="130" r="8" fill="#e11d48"/><text x="80" y="134" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#fff">+</text>
<circle cx="80" cy="130" r="22" fill="none" stroke="#64748b"/>
<circle cx="80" cy="130" r="36" fill="none" stroke="#64748b"/>
<circle cx="116" cy="130" r="5" fill="#2563eb"/>
<text x="80" y="200" font-family="sans-serif" font-size="13" text-anchor="middle">Li  2,1</text>
<circle cx="250" cy="130" r="8" fill="#e11d48"/><text x="250" y="134" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#fff">+</text>
<circle cx="250" cy="130" r="20" fill="none" stroke="#64748b"/>
<circle cx="250" cy="130" r="32" fill="none" stroke="#64748b"/>
<circle cx="250" cy="130" r="46" fill="none" stroke="#64748b"/>
<circle cx="296" cy="130" r="5" fill="#2563eb"/>
<text x="250" y="200" font-family="sans-serif" font-size="13" text-anchor="middle">Na  2,8,1</text>
<circle cx="420" cy="130" r="8" fill="#e11d48"/><text x="420" y="134" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#fff">+</text>
<circle cx="420" cy="130" r="18" fill="none" stroke="#64748b"/>
<circle cx="420" cy="130" r="29" fill="none" stroke="#64748b"/>
<circle cx="420" cy="130" r="41" fill="none" stroke="#64748b"/>
<circle cx="420" cy="130" r="56" fill="none" stroke="#64748b"/>
<circle cx="476" cy="130" r="5" fill="#2563eb"/>
<text x="420" y="210" font-family="sans-serif" font-size="13" text-anchor="middle">K  2,8,8,1</text>
<line x1="40" y1="235" x2="480" y2="235" stroke="#0f172a" stroke-width="2"/>
<polygon points="480,230 492,235 480,240" fill="#0f172a"/>
<text x="260" y="228" font-family="sans-serif" font-size="12" text-anchor="middle">weaker attraction → electron lost more easily → more reactive</text>
</svg>`,
    diagramCaption:
      "Each atom has one outer electron (blue). Going down the group it is in a shell further from the nucleus with more inner shells shielding it, so it is lost more easily.",
    keyPoints: [
      "Alkali metal + water → metal hydroxide + hydrogen, e.g. 2Na + 2H₂O → 2NaOH + H₂.",
      "Observations: floats, fizzes, moves on the surface, disappears; Na melts into a ball; K's hydrogen burns with a lilac flame.",
      "The solution formed is alkaline (universal indicator turns blue/purple).",
      "The similar reactions (all give hydrogen and an alkaline MOH solution) show Li, Na and K are a family — each has one outer electron. They tarnish in air faster down the group.",
      "Reactivity increases down the group: outer electron further from the nucleus, more shielding, weaker attraction, lost more easily.",
      "Rb and Cs react explosively; products are RbOH/CsOH and hydrogen.",
      "Stored under oil to prevent reaction with oxygen and water vapour in air.",
    ],
    whyItWorks:
      "Every alkali metal reacts by losing its single outer electron to form an M⁺ ion. The easier that electron is to remove, the faster and more violent the reaction — and distance plus shielding beat the extra nuclear charge.",
    memoryTrick:
      "\"Further, shielded, weaker, easier\" — the four steps of the Group 1 trend explanation, in order.",
    examTip:
      "Do not write \"the outer electron is further away so it is more reactive\" and stop. Mark schemes award separate marks for (1) further from nucleus / more shells, (2) more shielding, (3) weaker attraction, (4) electron lost more easily. Also say \"fizzes\" or \"bubbles\" — \"hydrogen is produced\" is a conclusion, not an observation.",
    thinkDeeper:
      "Nuclear charge increases from +3 (Li) to +19 (K). Why doesn't this larger positive charge hold the outer electron MORE tightly? (Think about how many inner electrons sit between the nucleus and the outer electron.)",
    workedExample: {
      problem:
        "A teacher drops a small piece of rubidium into a trough of water. Predict two observations, and write a balanced equation with state symbols.",
      solution: `- Rubidium is below potassium, so it is **more reactive** than potassium.
- Observations: it reacts **explosively / very violently**; rapid fizzing; it disappears almost instantly (a flame may be seen).
- Equation: **2Rb(s) + 2H₂O(l) → 2RbOH(aq) + H₂(g)**
- The resulting solution is alkaline because RbOH is a soluble hydroxide.`,
    },
  },

  // ───────────────────────────── GROUP 7 ─────────────────────────────
  {
    id: "inorganic-group7",
    topic: "inorganic",
    lesson: "4CH1 2(b)",
    heading: "Group 7 — the halogens",
    discovery: {
      problem:
        "Chlorine water is added to colourless potassium bromide solution and it turns orange. Bromine water is added to potassium chloride solution and nothing happens. Why does the reaction only go one way?",
      idea:
        "A more reactive halogen takes the electron from a less reactive halide ion. Chlorine attracts an electron more strongly than bromine, so chlorine can grab electrons from bromide ions — but bromine cannot grab them from chloride ions.",
    },
    body: `The **halogens** exist as **diatomic molecules** (F₂, Cl₂, Br₂, I₂). Their melting and boiling points **increase down the group** because the molecules get larger and the **intermolecular forces get stronger**, so the colour gets darker and the state changes from gas to liquid to solid.

| Halogen | Colour and state at room temperature |
|---|---|
| Fluorine F₂ | pale yellow gas |
| Chlorine Cl₂ | yellow-green (pale green) gas |
| Bromine Br₂ | red-brown liquid (gives off orange-brown vapour; **orange** in aqueous solution) |
| Iodine I₂ | grey-black solid, sublimes to a **purple vapour** (**brown** in aqueous solution) |

You can predict astatine: a **black solid**, even less reactive than iodine.

**Trend in reactivity** — reactivity **decreases** down the group. Halogens react by **gaining one electron** to complete their outer shell. Going down:

- the outer shell is **further from the nucleus**;
- there is **more shielding** by inner shells;
- so the attraction for an **incoming electron is weaker**;
- so an electron is **gained less easily**.

(Notice this is the reverse of the Group 1 trend, because halogens *gain* electrons whereas alkali metals *lose* them.)

**Displacement reactions.** A more reactive halogen displaces a less reactive halogen from a solution of its **halide** salt.

| Halogen added → | KCl(aq) | KBr(aq) | KI(aq) |
|---|---|---|---|
| Cl₂(aq) | — | turns **orange** (Br₂ formed) | turns **brown** (I₂ formed) |
| Br₂(aq) | no reaction | — | turns **brown** (I₂ formed) |
| I₂(aq) | no reaction | no reaction | — |

Equations, e.g. Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq). The **ionic equation** leaves out the spectator K⁺ ions: **Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂**. Similarly Br₂ + 2I⁻ → 2Br⁻ + I₂.

**Displacement is redox.** In Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂: chlorine **gains** electrons (Cl₂ + 2e⁻ → 2Cl⁻) so it is **reduced** and acts as the **oxidising agent**; bromide ions **lose** electrons (2Br⁻ → Br₂ + 2e⁻) so they are **oxidised** and act as the reducing agent.

**Hydrogen chloride in water vs methylbenzene.** HCl is a covalent gas.
- In **water** it **ionises** (dissociates) to form H⁺(aq) and Cl⁻(aq) ions, so the solution is **acidic**: it turns blue litmus **red**, has a low pH, and reacts with magnesium/carbonates.
- In **methylbenzene** (an organic solvent) HCl stays as **molecules** and does not ionise, so there are **no H⁺ ions**: the solution has **no effect on blue litmus** and is not acidic.
The lesson: an acid only behaves as an acid when **water** is present to release H⁺ ions.`,
    diagram: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three test tubes: chlorine water added to potassium bromide turns orange, chlorine water added to potassium iodide turns brown, bromine water added to potassium chloride shows no change">
<text x="10" y="20" font-family="sans-serif" font-size="13" font-weight="bold">Halogen displacement — look for the colour change</text>
<rect x="60" y="50" width="50" height="130" rx="10" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="62" y="110" width="46" height="68" rx="8" fill="#f97316"/>
<text x="85" y="200" font-family="sans-serif" font-size="12" text-anchor="middle">Cl₂ + KBr</text>
<text x="85" y="216" font-family="sans-serif" font-size="12" text-anchor="middle">orange (Br₂)</text>
<rect x="235" y="50" width="50" height="130" rx="10" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="237" y="110" width="46" height="68" rx="8" fill="#92400e"/>
<text x="260" y="200" font-family="sans-serif" font-size="12" text-anchor="middle">Cl₂ + KI</text>
<text x="260" y="216" font-family="sans-serif" font-size="12" text-anchor="middle">brown (I₂)</text>
<rect x="410" y="50" width="50" height="130" rx="10" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="412" y="110" width="46" height="68" rx="8" fill="#fdba74"/>
<text x="435" y="200" font-family="sans-serif" font-size="12" text-anchor="middle">Br₂ + KCl</text>
<text x="435" y="216" font-family="sans-serif" font-size="12" text-anchor="middle">no reaction</text>
<text x="120" y="80" font-family="sans-serif" font-size="11">Cl₂ more reactive</text>
<text x="295" y="80" font-family="sans-serif" font-size="11">Cl₂ more reactive</text>
<text x="312" y="105" font-family="sans-serif" font-size="11">Br₂ less reactive</text>
</svg>`,
    diagramCaption:
      "Only a more reactive halogen can displace a less reactive one. The bromine water in the third tube keeps its own pale orange colour because nothing happens.",
    keyPoints: [
      "Colours/states: F₂ pale yellow gas; Cl₂ yellow-green gas; Br₂ red-brown liquid; I₂ grey-black solid (purple vapour).",
      "Reactivity decreases down the group: outer shell further from the nucleus, more shielding, weaker attraction for an extra electron.",
      "A more reactive halogen displaces a less reactive halide: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂.",
      "Bromine forms in solution: orange; iodine forms in solution: brown.",
      "Displacement is redox: the halogen gains electrons (reduced, oxidising agent); the halide ion loses electrons (oxidised).",
      "HCl in water ionises to H⁺ ions (acidic, turns blue litmus red); in methylbenzene it stays as molecules (no H⁺, not acidic).",
    ],
    whyItWorks:
      "Halogen atoms react by pulling in one extra electron. The closer the outer shell is to the nucleus and the less it is shielded, the stronger that pull — so fluorine is the most reactive and iodine the least.",
    memoryTrick:
      "\"Group 1 goes UP the reactivity going DOWN; Group 7 goes DOWN going DOWN\" — losing electrons gets easier down a group, gaining electrons gets harder.",
    examTip:
      "In a displacement question, describe the colour of the SOLUTION (\"turns from colourless to orange\"), not \"a precipitate forms\". When asked for an ionic equation, leave out K⁺/Na⁺ and make sure charges balance: Cl₂ + 2I⁻ → 2Cl⁻ + I₂.",
    thinkDeeper:
      "Fluorine is so reactive it even reacts with water. Using the displacement idea, predict whether fluorine would displace chlorine from sodium chloride solution — and explain why that experiment might not give the result you expect.",
    workedExample: {
      problem:
        "Bromine water is added to sodium iodide solution. (a) State what is seen. (b) Write the ionic equation. (c) Identify the species oxidised.",
      solution: `- (a) The solution changes from **orange (or colourless) to brown** — iodine is formed.
- (b) Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq)  (Na⁺ is a spectator ion)
- (c) **Iodide ions** are oxidised: 2I⁻ → I₂ + 2e⁻ (they **lose** electrons). Bromine is reduced and is the oxidising agent.`,
    },
  },

  // ───────────────────────────── AIR ─────────────────────────────
  {
    id: "inorganic-air",
    topic: "inorganic",
    lesson: "4CH1 2(c)",
    heading: "Gases in the atmosphere",
    discovery: {
      problem:
        "You push 100 cm³ of air backwards and forwards over hot copper using two gas syringes. When everything has cooled, only 79 cm³ of gas is left. Where did the other 21 cm³ go — and why must you let the apparatus cool before reading the syringe?",
      idea:
        "The oxygen reacted with the copper to form solid copper(II) oxide, so it left the gas. Hot gas expands, so reading while warm would give a volume that is too large and an oxygen percentage that is too small.",
    },
    body: `**Composition of dry air** (by volume): about **78% nitrogen**, **21% oxygen**, **0.9% argon** (≈1%) and **0.04% carbon dioxide**, plus traces of other noble gases and variable water vapour.

**Practical: finding the percentage of oxygen in air.** The idea is always the same — a substance removes the oxygen, and you measure how much the gas volume goes down.

- **Copper method**: a known volume of air (e.g. 100 cm³) is passed repeatedly over **heated copper** between two **gas syringes**. The pink-brown copper turns **black** (2Cu(s) + O₂(g) → 2CuO(s)). Keep going until the volume stops decreasing, then **allow to cool** to room temperature and read the volume.
- **Iron method**: **damp iron filings** (iron wool) are put at the top of a measuring cylinder (or burette) which is inverted in water. Over about a week the iron **rusts**, using up the oxygen, and the **water rises** up the tube until it stops changing.
- **Phosphorus method**: phosphorus burns in a trapped volume of air over water; the water level rises.

Calculation:

**% oxygen = (decrease in volume ÷ original volume) × 100**

**Burning elements in oxygen.** Elements burn more brightly in pure oxygen than in air.

| Element | Observation | Product | Nature of oxide |
|---|---|---|---|
| Magnesium | bright **white** flame, **white** powder | 2Mg + O₂ → 2MgO | **basic** (metal oxide) — slightly alkaline in water |
| Hydrogen | burns with a (pale blue) flame | 2H₂ + O₂ → 2H₂O | **neutral** |
| Sulfur | **blue** flame, colourless pungent gas | S + O₂ → SO₂ | **acidic** (non-metal oxide) — SO₂ dissolves to give an acidic solution |

The general rule: **metal oxides are basic**; **non-metal oxides are usually acidic** (water is a neutral exception).

**Thermal decomposition of metal carbonates.** Heating breaks a carbonate down into a metal oxide and carbon dioxide. Copper(II) carbonate is the classic: the **green** powder turns **black** and the gas given off turns **limewater milky**:

CuCO₃(s) → CuO(s) + CO₂(g)

**Carbon dioxide, the greenhouse effect and climate change.** The Sun's radiation warms the Earth's surface, which then emits **infrared (heat) radiation**. Greenhouse gases such as **carbon dioxide**, methane and water vapour **absorb** some of this infrared radiation and re-emit it, keeping the lower atmosphere warmer than it would otherwise be. Burning **fossil fuels** (and deforestation) has increased the concentration of CO₂ in the atmosphere, enhancing the greenhouse effect. This causes an increase in global temperatures — **climate change** — with consequences such as melting ice caps, rising sea levels and more extreme weather.`,
    diagram: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two gas syringes connected by a silica tube containing copper, heated by a Bunsen burner">
<text x="10" y="20" font-family="sans-serif" font-size="13" font-weight="bold">Finding % oxygen: air pushed over hot copper</text>
<rect x="20" y="70" width="140" height="40" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>
<rect x="160" y="80" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<line x1="0" y1="90" x2="20" y2="90" stroke="#0f172a" stroke-width="3"/>
<text x="90" y="60" font-family="sans-serif" font-size="12" text-anchor="middle">gas syringe (100 cm³ air)</text>
<rect x="180" y="80" width="160" height="20" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
<rect x="210" y="84" width="100" height="12" fill="#b45309"/>
<text x="260" y="125" font-family="sans-serif" font-size="12" text-anchor="middle">copper turnings in silica tube</text>
<rect x="340" y="80" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="360" y="70" width="140" height="40" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>
<line x1="500" y1="90" x2="520" y2="90" stroke="#0f172a" stroke-width="3"/>
<text x="430" y="60" font-family="sans-serif" font-size="12" text-anchor="middle">gas syringe</text>
<rect x="245" y="150" width="30" height="40" fill="#94a3b8" stroke="#0f172a"/>
<polygon points="250,148 260,128 270,148" fill="#3b82f6"/>
<text x="290" y="175" font-family="sans-serif" font-size="12">heat</text>
<text x="20" y="150" font-family="sans-serif" font-size="11">2Cu + O₂ → 2CuO (pink-brown → black)</text>
<text x="330" y="150" font-family="sans-serif" font-size="11">cool, then read volume</text>
</svg>`,
    diagramCaption:
      "Air is pushed back and forth over heated copper until the volume stops falling. After cooling, the decrease in volume is the volume of oxygen that was present.",
    keyPoints: [
      "Air: about 78% N₂, 21% O₂, 0.9% Ar, 0.04% CO₂.",
      "% oxygen = decrease in volume ÷ original volume × 100 (read volumes at room temperature).",
      "Mg burns with a bright white flame → MgO (basic); S burns with a blue flame → SO₂ (acidic); H₂ → H₂O (neutral).",
      "Metal oxides are basic; non-metal oxides are acidic.",
      "CuCO₃ → CuO + CO₂: green solid turns black; gas turns limewater milky.",
      "CO₂ absorbs infrared radiation emitted from the Earth's surface; more CO₂ from burning fossil fuels → enhanced greenhouse effect → climate change.",
    ],
    whyItWorks:
      "Oxygen is the only reactive component of air towards copper, iron or phosphorus at these conditions — nitrogen and argon are left behind. Because the oxide formed is a solid (or dissolves in the water), the fall in gas volume equals the oxygen used.",
    memoryTrick:
      "\"MetAL oxides make ALkalis\" — metal oxides are basic, non-metal oxides are acidic.",
    examTip:
      "In the %O₂ calculation, divide by the ORIGINAL volume, not the final volume. If asked why a result is too low, give a specific reason: not heated for long enough / not enough copper / volume read before the apparatus cooled.",
    thinkDeeper:
      "In the iron-filings experiment a student's water level rose to only 17% of the tube. Suggest two different reasons why the value is lower than 21%, and how you could check which one was the cause.",
    workedExample: {
      problem:
        "A measuring cylinder containing 85.0 cm³ of air is inverted over water with damp iron wool at the top. After a week the volume of air is 67.5 cm³. Calculate the percentage of oxygen in this sample of air.",
      solution: `- Decrease in volume = 85.0 − 67.5 = **17.5 cm³** (= volume of oxygen used)
- % oxygen = 17.5 ÷ 85.0 × 100 = **20.6%** (3 s.f.)
- Divide by the **original** 85.0 cm³, not by 67.5 cm³ (that would give 25.9%, a common slip).`,
    },
  },

  // ───────────────────────────── REACTIVITY ─────────────────────────────
  {
    id: "inorganic-reactivity",
    topic: "inorganic",
    lesson: "4CH1 2(d)",
    heading: "The reactivity series, redox and rusting",
    discovery: {
      problem:
        "Steel ships have blocks of zinc bolted to their hulls. The zinc slowly disappears, but the steel stays rust-free even where the paint has been scratched. Why would anyone deliberately attach a metal that corrodes?",
      idea:
        "Zinc is more reactive than iron, so it loses electrons in preference to iron. The zinc is oxidised instead of the iron — it is sacrificed to protect the steel.",
    },
    body: `**The reactivity series** (most reactive at the top):

**potassium > sodium > lithium > calcium > magnesium > aluminium > (carbon) > zinc > iron > (hydrogen) > copper > silver > gold**

Carbon and hydrogen are non-metals included as reference points.

**Reactions with water, steam and dilute acids**

| Metal | Cold water | Steam | Dilute HCl / H₂SO₄ |
|---|---|---|---|
| K, Na, Li | vigorous: hydroxide + H₂ | (too dangerous) | violent (not done) |
| Ca | steady fizzing: Ca + 2H₂O → Ca(OH)₂ + H₂ | — | vigorous |
| Mg | very slow | burns: Mg + H₂O → MgO + H₂ | rapid fizzing: Mg + 2HCl → MgCl₂ + H₂ |
| Zn | no reaction | Zn + H₂O → ZnO + H₂ | steady fizzing |
| Fe | rusts very slowly | 3Fe + 4H₂O ⇌ Fe₃O₄ + 4H₂ | slow fizzing |
| Cu, Ag, Au | no reaction | no reaction | **no reaction** (below hydrogen) |

Metal + acid → salt + hydrogen. Metal + steam → metal oxide + hydrogen. Aluminium often appears less reactive than it is, because a thin, tough **oxide layer** protects it.

**Displacement reactions.** A more reactive metal displaces a less reactive metal from a solution of its compound (or from its oxide when heated). Example: zinc in copper(II) sulfate solution.

Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)   ionic: **Zn + Cu²⁺ → Zn²⁺ + Cu**

Observations: the **blue** solution fades (becomes **colourless**), a **pink-brown/red-brown solid** coats the zinc, and the **temperature rises** (exothermic). With iron, the solution turns from blue to **pale green** (Fe²⁺). If the metal is less reactive (e.g. copper in zinc sulfate), there is **no reaction**.

**Oxidation and reduction**
- In terms of **oxygen**: oxidation = **gain of oxygen**; reduction = **loss of oxygen**.
- In terms of **electrons**: **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain (OILRIG).
- **Redox** = both happen together. In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is oxidised (Zn → Zn²⁺ + 2e⁻) and copper(II) ions are reduced (Cu²⁺ + 2e⁻ → Cu).
- An **oxidising agent** causes oxidation and is itself **reduced** (it gains electrons) — here Cu²⁺. A **reducing agent** causes reduction and is itself **oxidised** — here Zn.

**Rusting.** Rust is **hydrated iron(III) oxide**. Iron rusts only when **both water and oxygen** are present. The classic experiment uses three tubes, each with an iron nail:

1. **Water + air** (control): nail rusts.
2. **Boiled water with a layer of oil** on top: boiling removes dissolved air, oil stops air dissolving back in — **no oxygen**, no rust.
3. **Anhydrous calcium chloride** (drying agent) with a **stopper** — **no water**, no rust.

**Preventing rusting**
- **Barrier methods**: paint, oil/grease, plastic coating — keep out water and oxygen. Fail once scratched.
- **Galvanising**: coating iron with **zinc**. The zinc acts as a barrier, and if scratched it still protects because zinc is more reactive.
- **Sacrificial protection**: attaching a **more reactive** metal (zinc or magnesium) to the iron. The more reactive metal **loses electrons more readily** and is **oxidised instead of iron**, so iron does not rust. The block must be replaced as it corrodes away.`,
    diagram: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three test tubes with iron nails: tube A water and air, rusts; tube B boiled water under oil, no rust; tube C anhydrous calcium chloride with a stopper, no rust">
<text x="10" y="20" font-family="sans-serif" font-size="13" font-weight="bold">Rusting needs BOTH water and oxygen</text>
<rect x="60" y="45" width="50" height="140" rx="10" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="62" y="110" width="46" height="73" rx="8" fill="#bfdbfe"/>
<line x1="85" y1="60" x2="85" y2="170" stroke="#b45309" stroke-width="5"/>
<text x="85" y="205" font-family="sans-serif" font-size="12" text-anchor="middle">A: water + air</text>
<text x="85" y="222" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#b45309">rusts</text>
<rect x="235" y="45" width="50" height="140" rx="10" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="237" y="100" width="46" height="83" rx="8" fill="#bfdbfe"/>
<rect x="237" y="92" width="46" height="10" fill="#facc15"/>
<line x1="260" y1="110" x2="260" y2="170" stroke="#64748b" stroke-width="5"/>
<text x="295" y="98" font-family="sans-serif" font-size="11">oil layer</text>
<text x="260" y="205" font-family="sans-serif" font-size="12" text-anchor="middle">B: boiled water</text>
<text x="260" y="222" font-family="sans-serif" font-size="12" text-anchor="middle">no rust (no O₂)</text>
<rect x="410" y="45" width="50" height="140" rx="10" fill="none" stroke="#0f172a" stroke-width="2"/>
<rect x="405" y="35" width="60" height="14" fill="#475569"/>
<rect x="412" y="150" width="46" height="33" rx="8" fill="#e5e7eb"/>
<line x1="435" y1="60" x2="435" y2="140" stroke="#64748b" stroke-width="5"/>
<text x="435" y="205" font-family="sans-serif" font-size="12" text-anchor="middle">C: drying agent</text>
<text x="435" y="222" font-family="sans-serif" font-size="12" text-anchor="middle">no rust (no water)</text>
<text x="470" y="170" font-family="sans-serif" font-size="10">CaCl₂</text>
</svg>`,
    diagramCaption:
      "Tube A is the control. Tube B removes oxygen (boiled water, oil layer); tube C removes water (anhydrous calcium chloride, stoppered). Only A rusts.",
    keyPoints: [
      "Series: K, Na, Li, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au.",
      "Metal + dilute acid → salt + hydrogen (only metals above hydrogen); metal + steam → metal oxide + hydrogen.",
      "A more reactive metal displaces a less reactive one: Zn + Cu²⁺ → Zn²⁺ + Cu (blue fades, brown solid, gets warm).",
      "Oxidation is gain of oxygen or loss of electrons; reduction is loss of oxygen or gain of electrons.",
      "An oxidising agent is reduced (gains electrons); a reducing agent is oxidised (loses electrons).",
      "Rusting needs water AND oxygen; rust is hydrated iron(III) oxide.",
      "Galvanising (zinc coat) and sacrificial protection work because the more reactive metal is oxidised instead of iron.",
    ],
    whyItWorks:
      "Reactivity is really a ranking of how easily a metal atom loses electrons to form a positive ion. Whenever two metals compete for electrons, the more reactive one ends up as the ion and the less reactive one ends up as the metal.",
    memoryTrick:
      "OILRIG — Oxidation Is Loss, Reduction Is Gain (of electrons). For the series: \"Please Send Lions Cats Monkeys And Cute Zebras Into Hot Countries Signed Gordon\".",
    examTip:
      "For sacrificial protection, the mark is for \"zinc/magnesium is MORE REACTIVE than iron, so it is oxidised / loses electrons instead of iron\". Saying \"zinc forms a protective layer\" only explains the barrier effect and loses the mark. In the rusting experiment, give the PURPOSE of each step (boiling removes dissolved oxygen; oil stops oxygen re-dissolving; calcium chloride absorbs water).",
    thinkDeeper:
      "Tin-plated steel cans rust very quickly once the tin is scratched — faster than unprotected steel. Use the reactivity series to explain why tin is worse than zinc once the coating is broken.",
    workedExample: {
      problem:
        "Iron filings are added to silver nitrate solution. Predict whether a reaction occurs, give the ionic equation, and identify the reducing agent.",
      solution: `- Iron is **above** silver in the reactivity series, so iron **displaces** silver.
- Fe(s) + 2Ag⁺(aq) → Fe²⁺(aq) + 2Ag(s) — note the 2 so that charges balance (2+ on each side).
- Seen: grey/silver crystals of silver form; the colourless solution turns pale green.
- Iron loses electrons (Fe → Fe²⁺ + 2e⁻) so iron is **oxidised** and is the **reducing agent**.`,
    },
  },

  // ───────────────────────────── METALS (TRIPLE) ─────────────────────────────
  {
    id: "inorganic-metals",
    topic: "inorganic",
    lesson: "4CH1 2(e) · Triple",
    heading: "Extraction and uses of metals",
    discovery: {
      problem:
        "Iron has been made for 3000 years by heating its ore with charcoal. Aluminium is the most abundant metal in the Earth's crust, yet it was so hard to obtain that Napoleon III served guests with aluminium cutlery as a luxury. Why couldn't people just heat aluminium ore with carbon?",
      idea:
        "Aluminium is more reactive than carbon, so carbon cannot take the oxygen away from aluminium oxide. Only electrolysis — invented later — is powerful enough to reduce it.",
    },
    body: `Most metals are found in the Earth's crust as compounds in **ores** (rocks containing enough metal compound to make extraction worthwhile). Very unreactive metals such as **gold** are found **uncombined** (native). Extraction is **reduction** — removing oxygen from the metal oxide — and the method depends on the metal's **position in the reactivity series**:

| Position | Method | Examples |
|---|---|---|
| Above carbon | **electrolysis** of the molten compound | K, Na, Ca, Mg, **Al** |
| Below carbon | **reduction by carbon** (or carbon monoxide) | Zn, **Fe**, Cu |
| Very unreactive | found native | Au (Ag) |

Electrolysis uses large amounts of electricity, so it is more **expensive** — it is only used when carbon cannot do the job.

**Iron: the blast furnace.** Raw materials: **iron ore** (haematite, Fe₂O₃), **coke** (carbon), **limestone** (CaCO₃) and **hot air** blown in at the bottom.

1. Coke burns in the hot air — very exothermic, heats the furnace: **C + O₂ → CO₂**
2. Carbon dioxide reacts with more coke to make carbon monoxide: **CO₂ + C → 2CO**
3. Carbon monoxide **reduces** iron(III) oxide: **Fe₂O₃ + 3CO → 2Fe + 3CO₂** (CO is the reducing agent; iron(III) oxide loses oxygen). Molten iron runs to the bottom.
4. Limestone decomposes in the heat: **CaCO₃ → CaO + CO₂**
5. Calcium oxide (basic) reacts with the acidic impurity silica (sand) to form **slag**: **CaO + SiO₂ → CaSiO₃**. Molten slag floats on the iron and is tapped off separately.

**Aluminium: electrolysis.** The ore **bauxite** is purified to aluminium oxide, Al₂O₃.
- Al₂O₃ has a very **high melting point** (over 2000 °C). It is **dissolved in molten cryolite**, which **lowers the operating temperature** (to about 950 °C), saving **energy and cost**; the molten mixture conducts because its **ions are free to move**.
- **Cathode** (negative, carbon lining): **Al³⁺ + 3e⁻ → Al** — reduction; molten aluminium collects at the bottom.
- **Anode** (positive, carbon blocks): **2O²⁻ → O₂ + 4e⁻** — oxidation.
- At the high temperature the oxygen reacts with the **carbon anodes** to form carbon dioxide (C + O₂ → CO₂), so the anodes **burn away** and must be **replaced regularly**.
- Overall: 2Al₂O₃ → 4Al + 3O₂.

**Uses linked to properties**

| Metal | Use | Property |
|---|---|---|
| Aluminium | aircraft bodies (as alloys) | **low density**, strong when alloyed, resists corrosion |
| Aluminium | overhead power cables | good **electrical conductor** and **low density** (with a steel core for strength) |
| Aluminium | food cans, foil | resists corrosion (protective oxide layer), non-toxic, malleable |
| Copper | electrical wiring | very good **electrical conductor**, **ductile** |
| Copper | water pipes | **unreactive** (does not corrode), malleable |
| Mild (low-carbon) steel | car bodies, ships, bridges | strong, **malleable**, cheap |
| High-carbon steel | cutting tools | **hard** |
| Stainless steel (Fe + Cr, Ni) | cutlery, sinks | **resists corrosion** |

**Alloys.** An alloy is a **mixture of a metal with at least one other element**. Pure metals are soft because the **layers of ions slide** easily. In an alloy the **different-sized atoms distort the regular layers**, so they **cannot slide** over each other so easily — the alloy is **harder and stronger**. Pure iron is too soft for most uses; adding carbon (and other metals) makes steel.`,
    diagram: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrolysis cell for aluminium: carbon anodes dipping into molten aluminium oxide in cryolite, carbon-lined steel case as cathode, molten aluminium at the bottom">
<text x="10" y="20" font-family="sans-serif" font-size="13" font-weight="bold">Extracting aluminium by electrolysis</text>
<rect x="100" y="80" width="300" height="140" fill="#fde68a" stroke="#0f172a" stroke-width="3"/>
<rect x="103" y="190" width="294" height="27" fill="#cbd5e1"/>
<text x="250" y="208" font-family="sans-serif" font-size="12" text-anchor="middle">molten aluminium</text>
<text x="250" y="160" font-family="sans-serif" font-size="12" text-anchor="middle">Al₂O₃ dissolved in molten cryolite (~950 °C)</text>
<rect x="150" y="45" width="40" height="90" fill="#334155"/>
<rect x="230" y="45" width="40" height="90" fill="#334155"/>
<rect x="310" y="45" width="40" height="90" fill="#334155"/>
<text x="250" y="38" font-family="sans-serif" font-size="12" text-anchor="middle">carbon anodes (+): 2O²⁻ → O₂ + 4e⁻</text>
<text x="410" y="100" font-family="sans-serif" font-size="11">anodes burn away:</text>
<text x="410" y="115" font-family="sans-serif" font-size="11">C + O₂ → CO₂</text>
<text x="250" y="240" font-family="sans-serif" font-size="12" text-anchor="middle">carbon lining = cathode (−): Al³⁺ + 3e⁻ → Al</text>
<line x1="100" y1="220" x2="400" y2="220" stroke="#0f172a" stroke-width="5"/>
</svg>`,
    diagramCaption:
      "Aluminium forms at the cathode lining; oxygen forms at the carbon anodes, which react with it and must be replaced.",
    keyPoints: [
      "Metals above carbon are extracted by electrolysis; metals below carbon by reduction with carbon; gold is found native.",
      "Blast furnace: C + O₂ → CO₂; CO₂ + C → 2CO; Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
      "Limestone removes silica: CaCO₃ → CaO + CO₂, then CaO + SiO₂ → CaSiO₃ (slag).",
      "Al₂O₃ is dissolved in molten cryolite to lower the operating temperature and save energy.",
      "Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻. Carbon anodes react with oxygen to form CO₂ and are replaced.",
      "Uses: Al (low density, resists corrosion), Cu (conductor, ductile, unreactive), steel (strong; stainless resists corrosion).",
      "Alloys are harder because different-sized atoms distort the layers so they cannot slide easily.",
    ],
    whyItWorks:
      "Extraction is a competition for oxygen. Carbon (or CO) can only pull oxygen away from metals less reactive than carbon. For more reactive metals, electrons must be forced onto the metal ions at the cathode by an electrical supply.",
    memoryTrick:
      "Blast furnace in order: \"Burn, Boost, Reduce, Break, Slag\" — C burns, CO₂ is boosted to CO, CO reduces ore, limestone breaks down, CaO makes slag.",
    examTip:
      "Say cryolite \"lowers the melting point / operating temperature, so less energy is needed\" — not that it is a catalyst. For anodes: \"oxygen produced at the anode reacts with the carbon to form carbon dioxide\" — the mark needs BOTH oxygen and carbon. In the blast furnace the main reducing agent is carbon MONoxide, not carbon dioxide.",
    thinkDeeper:
      "Recycling aluminium uses only about 5% of the energy needed to extract it from bauxite. Using what you know about the electrolysis cell, explain where most of that energy goes in extraction.",
    workedExample: {
      problem:
        "Write the half-equations at each electrode in the extraction of aluminium, and use them to explain why 4 Al atoms are made for every 3 O₂ molecules.",
      solution: `- Cathode: **Al³⁺ + 3e⁻ → Al**  (reduction)
- Anode: **2O²⁻ → O₂ + 4e⁻**  (oxidation)
- Electrons must balance: lowest common multiple of 3 and 4 is **12**.
- 4Al³⁺ + 12e⁻ → 4Al and 6O²⁻ → 3O₂ + 12e⁻
- So 4 Al are made for every 3 O₂: overall **2Al₂O₃ → 4Al + 3O₂**.`,
    },
  },
];
