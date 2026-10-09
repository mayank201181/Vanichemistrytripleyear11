import type { GuideSection } from "../../types";

const PH_SVG = `<svg viewBox="0 0 330 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The pH scale from 0 to 14 with universal indicator colours: red for strong acid, orange and yellow for weak acid, green for neutral pH 7, blue for weak alkali and purple for strong alkali">
<text x="165" y="16" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#0f172a" font-weight="bold">The pH scale and universal indicator</text>
<rect x="15" y="28" width="20" height="34" fill="#dc2626"/>
<rect x="35" y="28" width="20" height="34" fill="#dc2626"/>
<rect x="55" y="28" width="20" height="34" fill="#ef4444"/>
<rect x="75" y="28" width="20" height="34" fill="#f97316"/>
<rect x="95" y="28" width="20" height="34" fill="#fb923c"/>
<rect x="115" y="28" width="20" height="34" fill="#facc15"/>
<rect x="135" y="28" width="20" height="34" fill="#fde047"/>
<rect x="155" y="28" width="20" height="34" fill="#16a34a"/>
<rect x="175" y="28" width="20" height="34" fill="#0d9488"/>
<rect x="195" y="28" width="20" height="34" fill="#0284c7"/>
<rect x="215" y="28" width="20" height="34" fill="#2563eb"/>
<rect x="235" y="28" width="20" height="34" fill="#4f46e5"/>
<rect x="255" y="28" width="20" height="34" fill="#6d28d9"/>
<rect x="275" y="28" width="20" height="34" fill="#7e22ce"/>
<rect x="295" y="28" width="20" height="34" fill="#581c87"/>
<text x="25" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">0</text>
<text x="85" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">3</text>
<text x="125" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">5</text>
<text x="165" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">7</text>
<text x="205" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">9</text>
<text x="245" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">11</text>
<text x="305" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">14</text>
<text x="55" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b91c1c">strong acid</text>
<text x="125" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#c2410c">weak acid</text>
<text x="165" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803d">neutral</text>
<text x="215" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1d4ed8">weak alkali</text>
<text x="285" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6b21a8">strong alkali</text>
<line x1="20" y1="128" x2="150" y2="128" stroke="#b91c1c" stroke-width="2"/>
<text x="85" y="144" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">more H⁺ ions as pH falls</text>
<line x1="180" y1="128" x2="310" y2="128" stroke="#6b21a8" stroke-width="2"/>
<text x="245" y="144" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">more OH⁻ ions as pH rises</text>
</svg>`;

const BURETTE_SVG = `<svg viewBox="0 0 330 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Close-up of a burette scale between 22 and 23 cubic centimetres with the bottom of the meniscus on the 22.65 mark, read with the eye level with the meniscus">
<rect x="130" y="10" width="56" height="240" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M131,136 Q158,152 185,136 L185,249 L131,249 Z" fill="#bfdbfe"/>
<path d="M131,136 Q158,152 185,136" fill="none" stroke="#1d4ed8" stroke-width="2"/>
<line x1="130" y1="40" x2="156" y2="40" stroke="#0f172a" stroke-width="2"/>
<line x1="130" y1="56" x2="142" y2="56" stroke="#0f172a"/>
<line x1="130" y1="72" x2="142" y2="72" stroke="#0f172a"/>
<line x1="130" y1="88" x2="142" y2="88" stroke="#0f172a"/>
<line x1="130" y1="104" x2="142" y2="104" stroke="#0f172a"/>
<line x1="130" y1="120" x2="150" y2="120" stroke="#0f172a" stroke-width="1.5"/>
<line x1="130" y1="136" x2="142" y2="136" stroke="#0f172a"/>
<line x1="130" y1="152" x2="142" y2="152" stroke="#0f172a"/>
<line x1="130" y1="168" x2="142" y2="168" stroke="#0f172a"/>
<line x1="130" y1="184" x2="142" y2="184" stroke="#0f172a"/>
<line x1="130" y1="200" x2="156" y2="200" stroke="#0f172a" stroke-width="2"/>
<text x="160" y="44" font-family="sans-serif" font-size="13" fill="#0f172a">22</text>
<text x="160" y="204" font-family="sans-serif" font-size="13" fill="#0f172a">23</text>
<ellipse cx="38" cy="144" rx="16" ry="9" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
<circle cx="44" cy="144" r="5" fill="#334155"/>
<line x1="56" y1="144" x2="200" y2="144" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="38" y="170" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">eye level</text>
<text x="205" y="130" font-family="sans-serif" font-size="11" fill="#334155">bottom of</text>
<text x="205" y="144" font-family="sans-serif" font-size="11" fill="#334155">meniscus</text>
<text x="205" y="164" font-family="sans-serif" font-size="13" fill="#dc2626" font-weight="bold">22.65 cm³</text>
<text x="205" y="40" font-family="sans-serif" font-size="11" fill="#334155">numbers increase</text>
<text x="205" y="54" font-family="sans-serif" font-size="11" fill="#334155">DOWN a burette</text>
<text x="205" y="210" font-family="sans-serif" font-size="11" fill="#334155">small marks every</text>
<text x="205" y="224" font-family="sans-serif" font-size="11" fill="#334155">0.10 cm³; read to</text>
<text x="205" y="238" font-family="sans-serif" font-size="11" fill="#334155">nearest 0.05 cm³</text>
</svg>`;

const SALTS_SVG = `<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart for choosing a salt preparation method. If the salt is insoluble use precipitation. If it is soluble and one reactant is an insoluble metal, oxide, hydroxide or carbonate, add it in excess to the acid then filter. If it is a sodium, potassium or ammonium salt use titration">
<rect x="100" y="8" width="140" height="32" rx="6" fill="#e0e7ff" stroke="#4f46e5"/>
<text x="170" y="29" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a">Is the salt soluble?</text>
<line x1="130" y1="40" x2="70" y2="70" stroke="#334155" stroke-width="1.5"/>
<line x1="210" y1="40" x2="250" y2="70" stroke="#334155" stroke-width="1.5"/>
<text x="84" y="58" font-family="sans-serif" font-size="11" fill="#b91c1c">no</text>
<text x="240" y="54" font-family="sans-serif" font-size="11" fill="#15803d">yes</text>
<rect x="8" y="70" width="124" height="70" rx="6" fill="#fee2e2" stroke="#dc2626"/>
<text x="70" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">PRECIPITATION</text>
<text x="70" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">mix two solutions,</text>
<text x="70" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">filter, wash, dry</text>
<text x="70" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">e.g. BaSO₄, PbSO₄, AgCl</text>
<rect x="160" y="70" width="172" height="44" rx="6" fill="#dcfce7" stroke="#16a34a"/>
<text x="246" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">Is it a Na⁺, K⁺ or NH₄⁺</text>
<text x="246" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">salt (soluble base)?</text>
<line x1="200" y1="114" x2="170" y2="150" stroke="#334155" stroke-width="1.5"/>
<line x1="290" y1="114" x2="300" y2="150" stroke="#334155" stroke-width="1.5"/>
<text x="172" y="136" font-family="sans-serif" font-size="11" fill="#15803d">yes</text>
<text x="300" y="136" font-family="sans-serif" font-size="11" fill="#b91c1c">no</text>
<rect x="104" y="150" width="112" height="92" rx="6" fill="#fef9c3" stroke="#ca8a04"/>
<text x="160" y="168" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">TITRATION</text>
<text x="160" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">acid + alkali,</text>
<text x="160" y="200" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">repeat without</text>
<text x="160" y="214" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">indicator, then</text>
<text x="160" y="228" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">crystallise</text>
<rect x="224" y="150" width="112" height="92" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
<text x="280" y="168" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">EXCESS SOLID</text>
<text x="280" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">metal, oxide or</text>
<text x="280" y="200" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">carbonate in excess,</text>
<text x="280" y="214" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">filter, then</text>
<text x="280" y="228" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">crystallise</text>
</svg>`;

const TESTS_SVG = `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four test tubes showing anion test results: silver chloride white precipitate, silver bromide cream precipitate, silver iodide yellow precipitate, all after dilute nitric acid and silver nitrate; and barium sulfate white precipitate after dilute hydrochloric acid and barium chloride">
<text x="120" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a" font-weight="bold">dilute HNO₃ then AgNO₃(aq)</text>
<text x="290" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a" font-weight="bold">dilute HCl then</text>
<text x="290" y="31" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a" font-weight="bold">BaCl₂(aq)</text>
<path d="M40,40 L40,140 Q55,158 70,140 L70,40" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M41,95 L41,140 Q55,156 69,140 L69,95 Z" fill="#f8fafc" stroke="#94a3b8"/>
<path d="M105,40 L105,140 Q120,158 135,140 L135,40" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M106,95 L106,140 Q120,156 134,140 L134,95 Z" fill="#fef3c7" stroke="#d6b45a"/>
<path d="M170,40 L170,140 Q185,158 200,140 L200,40" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M171,95 L171,140 Q185,156 199,140 L199,95 Z" fill="#facc15" stroke="#ca8a04"/>
<line x1="235" y1="40" x2="235" y2="160" stroke="#cbd5e1" stroke-dasharray="4,3"/>
<path d="M275,40 L275,140 Q290,158 305,140 L305,40" fill="none" stroke="#334155" stroke-width="2"/>
<path d="M276,95 L276,140 Q290,156 304,140 L304,95 Z" fill="#f8fafc" stroke="#94a3b8"/>
<text x="55" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a">Cl⁻</text>
<text x="55" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">white AgCl</text>
<text x="120" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a">Br⁻</text>
<text x="120" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">cream AgBr</text>
<text x="185" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a">I⁻</text>
<text x="185" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">yellow AgI</text>
<text x="290" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0f172a">SO₄²⁻</text>
<text x="290" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">white BaSO₄</text>
</svg>`;

export const guide: GuideSection[] = [
  {
    id: "acids-acids",
    topic: "acids",
    lesson: "4CH1 2(f), 2(g) · proton donors Triple",
    heading: "Acids, alkalis, indicators and neutralisation",
    discovery: {
      problem:
        "Hydrochloric acid, sulfuric acid and nitric acid have completely different formulae, yet all three turn litmus red, fizz with magnesium and react with sodium hydroxide in exactly the same way. Sodium hydroxide and potassium hydroxide behave identically too. What do all the acids have in common — and what do all the alkalis share?",
      idea:
        "In water every acid releases **hydrogen ions, H⁺(aq)**, and every alkali releases **hydroxide ions, OH⁻(aq)**. The 'acid behaviour' is really the behaviour of H⁺; the other ion (Cl⁻, SO₄²⁻, NO₃⁻) is just a spectator. That is why one ionic equation, H⁺ + OH⁻ → H₂O, describes every acid–alkali neutralisation.",
    },
    body: `An **acid** is a substance that releases **hydrogen ions, H⁺(aq)**, when it dissolves in water. An **alkali** is a soluble base that releases **hydroxide ions, OH⁻(aq)**, in water. A **base** is any substance that neutralises an acid to form a salt and water — metal oxides and metal hydroxides are bases; the soluble ones (e.g. NaOH, KOH, Ca(OH)₂) are called alkalis.

**Triple (C):** a more general definition — an **acid is a proton donor** and a **base is a proton acceptor**. A hydrogen ion H⁺ *is* a proton (a hydrogen atom that has lost its only electron). In HCl + NH₃ → NH₄Cl, the HCl donates a proton and the ammonia accepts it, so NH₃ is acting as a base even though no hydroxide ions are involved.

**Indicators** change colour depending on whether the solution is acidic or alkaline:

| Indicator | In acid | In alkali |
|---|---|---|
| litmus | red | blue |
| phenolphthalein | colourless | pink |
| methyl orange | red | yellow |

At the end point of a titration methyl orange is **orange** (a mixture of red and yellow).

**The pH scale** runs from 0 to 14. pH 7 is **neutral**; below 7 is acidic; above 7 is alkaline. The **lower** the pH, the **higher the concentration of H⁺ ions**; the higher the pH, the higher the concentration of OH⁻ ions. **Universal indicator** is a mixture of indicators that gives a range of colours, so it can estimate the **approximate pH**:

| pH | 0–3 | 4–6 | 7 | 8–10 | 11–14 |
|---|---|---|---|---|---|
| Classification | strongly acidic | weakly acidic | neutral | weakly alkaline | strongly alkaline |
| Universal indicator | red | orange/yellow | green | blue | purple |

A pH meter gives a more precise value.

**Extension — the factor of 10.** The pH scale is not a 'normal' scale: each **1 unit** of pH is a **factor of 10** in hydrogen ion concentration. A solution of pH 2 has **10 times** the H⁺ concentration of one at pH 3, and **100 times** (10 × 10) that of one at pH 4. So diluting an acid tenfold with water raises its pH by only about 1.

**Neutralisation** is the reaction between an acid and a base to form a salt and water. For any acid + alkali the ionic equation is:

**H⁺(aq) + OH⁻(aq) → H₂O(l)**

The salt's name comes from the acid: hydrochloric acid → **chlorides**, sulfuric acid → **sulfates**, nitric acid → **nitrates**.

**General reactions of acids** (learn these as word patterns — they let you predict any product):

- acid + metal → salt + hydrogen   e.g. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)  (learn this for hydrochloric and sulfuric acids; nitric acid + metals is not required — it does not give hydrogen cleanly)
- acid + metal oxide → salt + water   e.g. CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)
- acid + metal hydroxide → salt + water   e.g. NaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l)
- acid + metal carbonate → salt + water + carbon dioxide   e.g. CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)
- acid + ammonia → ammonium salt   e.g. NH₃(aq) + HCl(aq) → NH₄Cl(aq)

Observations matter in exams: with metals and carbonates you see **effervescence (fizzing/bubbles)** and the solid disappears; with copper(II) oxide the black solid disappears and the solution turns **blue**. Metals below hydrogen in the reactivity series (e.g. copper, silver) do **not** react with dilute acids.`,
    diagram: PH_SVG,
    diagramCaption: "Universal indicator colours across the pH scale. Lower pH means a higher concentration of H⁺ ions.",
    keyPoints: [
      "Acids release H⁺(aq) ions in water; alkalis release OH⁻(aq) ions. Triple: acid = proton donor, base = proton acceptor.",
      "Litmus: red in acid, blue in alkali. Phenolphthalein: colourless in acid, pink in alkali. Methyl orange: red in acid, yellow in alkali (orange at the end point).",
      "pH 0–3 strongly acidic, 4–6 weakly acidic, 7 neutral, 8–10 weakly alkaline, 11–14 strongly alkaline; the lower the pH, the higher the concentration of H⁺ ions.",
      "Extension: each pH unit is a factor of 10 in H⁺ concentration — pH 2 has 10× the H⁺ concentration of pH 3 and 100× that of pH 4.",
      "Neutralisation ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l).",
      "Acid + metal → salt + hydrogen; acid + base → salt + water; acid + carbonate → salt + water + carbon dioxide.",
      "Hydrochloric acid makes chlorides, sulfuric acid makes sulfates, nitric acid makes nitrates.",
    ],
    whyItWorks:
      "The Na⁺ and Cl⁻ ions in NaOH + HCl are spectator ions — they are in solution before and after. The only real change is H⁺ and OH⁻ combining to form water molecules, which is why every strong acid + alkali neutralisation releases almost the same energy per mole of water formed.",
    memoryTrick:
      "Methyl orange: 'Red for acid, Yellow for alkali' — think of a traffic light stopping at red (acid) and the end point is the orange in between. Phenolphthalein: 'Pink means alkali is winning.'",
    examTip:
      "Write 'effervescence' or 'bubbles/fizzing', not 'gas is produced' — you cannot see a gas being produced, and observation marks need what you SEE. In ionic equations include state symbols: H⁺(aq) + OH⁻(aq) → H₂O(l).",
    thinkDeeper:
      "Ammonia solution turns red litmus blue even though NH₃ contains no hydroxide. Use the proton-acceptor idea to explain where the OH⁻ ions in ammonia solution come from (hint: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻).",
    workedExample: {
      problem:
        "Write a balanced equation, with state symbols, for the reaction of zinc carbonate with dilute nitric acid, and state two observations.",
      solution: `**Step 1 — pattern:** acid + carbonate → salt + water + carbon dioxide. Nitric acid gives a **nitrate**.

**Step 2 — formulae:** zinc carbonate ZnCO₃; zinc ion Zn²⁺ and nitrate NO₃⁻ give Zn(NO₃)₂.

**Step 3 — balance:** two nitrate ions are needed, so 2HNO₃:

ZnCO₃(s) + 2HNO₃(aq) → Zn(NO₃)₂(aq) + H₂O(l) + CO₂(g)

**Observations:** effervescence / bubbles; the white solid disappears (dissolves) to give a colourless solution.`,
    },
  },
  {
    id: "acids-titration",
    topic: "acids",
    lesson: "4CH1 2(f) · practical: acid–alkali titration",
    heading: "Titration: the practical method and the results table",
    discovery: {
      problem:
        "A student adds acid from a burette into 25.0 cm³ of sodium hydroxide and gets 21.65 cm³ the first time, 21.30 cm³, 22.70 cm³, 21.50 cm³ and 24.00 cm³ after that. Which number should she report as 'the' volume of acid needed — and why is averaging all five the wrong answer?",
      idea:
        "The first run is a **rough** titration (acid added quickly — it overshoots), and 22.70 and 24.00 are clearly not consistent. Only **concordant** results (within 0.20 cm³ of each other) are averaged: (21.30 + 21.50) ÷ 2 = **21.40 cm³**. Titration is all about precision and knowing which results to trust.",
    },
    body: `A **titration** finds the exact volume of one solution that reacts with a known volume of another. In the Edexcel practical you find the volume of acid needed to neutralise **25.0 cm³** of an alkali.

**Method (learn this sequence — it is worth 4–6 marks):**

- Rinse a **pipette** with the alkali, then use the pipette **with a pipette filler** to transfer **25.0 cm³** of the alkali into a **conical flask**.
- Add a few drops (2–3) of **indicator** — methyl orange or phenolphthalein.
- Rinse a **burette** with the acid, then fill it (using a funnel, which is then removed) and run a little out so the jet below the tap is full. Record the **initial burette reading**.
- Stand the flask on a **white tile** (so the colour change is easy to see).
- Add the acid from the burette while **swirling** the flask. Near the end point add the acid **drop by drop**.
- Stop when the indicator **just changes colour** — methyl orange goes from **yellow to orange** (acid added to alkali). Record the **final burette reading**.
- **Titre = final reading − initial reading.**
- Do a **rough** titration first to find the approximate end point, then **repeat accurately** until you have **concordant results** — titres within **0.20 cm³** of each other (some questions say 0.10 cm³; use the value given).
- Calculate the **mean titre** using **only the concordant results** — never include the rough titration or any anomalous titre.

**Reading a burette.** The scale reads **downwards** (0.00 at the top). Read the **bottom of the meniscus** with your **eye level** with it, and record to the **nearest 0.05 cm³** — always to **2 decimal places** (e.g. 22.65, 0.00, 13.10). A reading such as "22.6" loses the mark.

**Why not universal indicator?** It changes colour **gradually** through many colours, so there is **no sharp (distinct) end point**. A titration indicator such as methyl orange or phenolphthalein changes colour suddenly at the end point with a single drop.

**Why each step matters:**

| Step | Reason |
|---|---|
| rinse burette with the acid | water left inside would dilute the acid |
| rinse pipette with the alkali | so the alkali is not diluted |
| conical flask (not beaker) | can be swirled without splashing |
| swirl | mixes the reactants so the colour change is not premature |
| dropwise near the end point | so you do not overshoot |
| remove funnel before reading | drips from the funnel change the reading |
| fill the jet below the tap | an air bubble there makes the titre wrong |

**Sources of error** include overshooting the end point (titre too high), an air bubble in the jet that empties during the titration (titre too high), reading the top of the meniscus or not at eye level (parallax), and not rinsing equipment with the correct solution. Using a pipette and burette, which are precise to ±0.05 cm³ or better, and repeating to concordant results reduces random error.

**Triple calculation link:** once you know the mean titre you can calculate an unknown concentration: moles = concentration × volume (in dm³), then use the **mole ratio** from the balanced equation.`,
    diagram: BURETTE_SVG,
    diagramCaption: "Read the bottom of the meniscus at eye level. This burette reads 22.65 cm³ (not 23.35 — the numbers increase downwards).",
    keyPoints: [
      "Pipette (with filler) measures 25.0 cm³ of alkali into a conical flask; the acid goes in the burette.",
      "White tile under the flask; swirl; add acid dropwise near the end point.",
      "Methyl orange changes from yellow to orange at the end point when acid is added to alkali.",
      "Universal indicator is not used: gradual colour change, so no sharp end point.",
      "Read the bottom of the meniscus at eye level; record to the nearest 0.05 cm³ (2 decimal places).",
      "Concordant results are within 0.20 cm³; the mean titre uses concordant results only — exclude the rough and any outliers.",
    ],
    whyItWorks:
      "Pipettes and burettes are calibrated to deliver very precise volumes, and repeating until two or more titres agree closely shows the random errors are small. Averaging only concordant titres stops a one-off overshoot from dragging the mean away from the true value.",
    memoryTrick:
      "'Pipette for the Precise portion (25.0 cm³), Burette for the Bit-by-bit addition.' And 'Rough first, Repeat to concordant, Report the mean of the matching ones.'",
    examTip:
      "In a results table every burette reading must have 2 decimal places ending in 0 or 5 (e.g. 2.15, 23.80). When asked for the mean, show which titres you used — Edexcel gives a mark for selecting the concordant titres and another for the mean, e.g. (21.30 + 21.50) ÷ 2 = 21.40 cm³.",
    thinkDeeper:
      "A student leaves a few drops of water in the conical flask before pipetting in the alkali. Does this change the titre? (Think: does the water change the number of moles of OH⁻ in the flask?)",
    workedExample: {
      problem: `A student's titration results are shown.

| | Rough | 1 | 2 | 3 |
|---|---|---|---|---|
| final reading (cm³) | 24.60 | 23.85 | 47.30 | 23.70 |
| initial reading (cm³) | 0.30 | 0.10 | 23.85 | 0.00 |

Calculate each titre and the mean titre (concordant = within 0.20 cm³).`,
      solution: `**Titres** (final − initial):
- Rough: 24.60 − 0.30 = **24.30 cm³**
- 1: 23.85 − 0.10 = **23.75 cm³**
- 2: 47.30 − 23.85 = **23.45 cm³**
- 3: 23.70 − 0.00 = **23.70 cm³**

**Concordant:** titres 1 and 3 differ by 0.05 cm³ ✓. Titre 2 is 0.30 cm³ below titre 1 — not concordant. The rough is never used.

**Mean** = (23.75 + 23.70) ÷ 2 = 47.45 ÷ 2 = **23.725 ≈ 23.73 cm³** (accept 23.725 cm³).`,
    },
  },
  {
    id: "acids-salts",
    topic: "acids",
    lesson: "4CH1 2(g) · practical: CuSO₄·5H₂O and lead(II) sulfate",
    heading: "Making salts: solubility rules and the three methods",
    discovery: {
      problem:
        "You want crystals of sodium chloride and crystals of copper(II) sulfate. For copper(II) sulfate you can just tip excess copper(II) oxide into sulfuric acid and filter off what's left over. Why can't you make sodium chloride by adding excess sodium hydroxide to hydrochloric acid and filtering?",
      idea:
        "Filtering only removes an excess **solid**. Copper(II) oxide is insoluble, so any extra just sits there and can be filtered off. Sodium hydroxide is **soluble** — the excess would stay dissolved and contaminate the salt. So salts of sodium, potassium and ammonium must be made by **titration**, using exactly the right amounts.",
    },
    body: `**Solubility rules** (learn them — they decide the method):

| Compounds | Soluble? |
|---|---|
| all sodium, potassium and ammonium salts | soluble |
| all nitrates | soluble |
| common chlorides | soluble **except silver chloride and lead(II) chloride** |
| common sulfates | soluble **except barium, calcium and lead(II) sulfate** |
| common carbonates | **insoluble** except sodium, potassium and ammonium carbonate |
| common hydroxides | **insoluble** except sodium, potassium (and calcium, slightly) |

**Method 1 — soluble salt from an insoluble base, metal or carbonate (excess method)**
e.g. copper(II) sulfate from copper(II) oxide; magnesium sulfate from magnesium oxide; zinc nitrate from zinc.

- Warm the dilute acid in a beaker (speeds up the reaction).
- Add the solid a spatula at a time, stirring, **until it is in excess** (no more dissolves / fizzing stops). The excess makes sure **all the acid has reacted**, so no acid is left in the salt.
- **Filter** to remove the **excess (unreacted) solid**; collect the filtrate (the salt solution).
- **Heat the filtrate to evaporate some of the water** until it reaches the **crystallisation point** — check by dipping in a glass rod: crystals form on the rod as it cools.
- **Leave to cool** so crystals form.
- **Filter** off the crystals, **wash with a little cold distilled water** and **dry between filter papers** (or in a warm oven / desiccator).

**Why not evaporate to dryness?** Hydrated salts such as CuSO₄·5H₂O would **lose their water of crystallisation** (blue crystals → white anhydrous powder), and some salts — e.g. **sodium nitrate** — **decompose** when heated strongly. Crystallising also leaves soluble impurities behind in the solution.

**Method 2 — soluble salt from an acid and an alkali (titration method)**
Used for sodium, potassium and ammonium salts, because both reactants are soluble.

- Titrate as usual with an indicator to find the exact volume of acid that neutralises 25.0 cm³ of alkali.
- **Repeat using the same volumes without the indicator** (or remove the indicator with activated charcoal and filter), so the salt is not contaminated.
- Heat to the crystallisation point, leave to cool, filter, wash with a little cold distilled water, dry.

**Method 3 — insoluble salt by precipitation**
e.g. barium sulfate, lead(II) sulfate, silver chloride.

- **Mix two solutions**: one containing the metal ion (usually its **nitrate**, since all nitrates are soluble), the other the anion (a sodium or potassium salt, or the acid).
- **Filter** to collect the precipitate as the residue.
- **Wash** it with **distilled water** to remove the soluble impurities (spectator ions).
- **Dry** in a warm oven or between filter papers.

e.g. Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s) + 2NaNO₃(aq);  ionic: Pb²⁺(aq) + SO₄²⁻(aq) → PbSO₄(s)

You cannot make lead(II) sulfate from lead carbonate + sulfuric acid: a layer of insoluble lead(II) sulfate coats the solid and stops the reaction.`,
    diagram: SALTS_SVG,
    diagramCaption: "Choosing a method: solubility of the salt first, then whether the reactant you'd add in excess is a soluble alkali or an insoluble solid.",
    keyPoints: [
      "All sodium, potassium, ammonium salts and all nitrates are soluble; AgCl and PbCl₂ insoluble; BaSO₄, CaSO₄, PbSO₄ insoluble; most carbonates and hydroxides insoluble.",
      "Excess method: add the insoluble solid until in excess so all the acid reacts → filter off the excess → heat to crystallisation point → cool → filter → wash with a little cold distilled water → dry.",
      "Do not heat to dryness: hydrated salts lose water of crystallisation; some salts (e.g. sodium nitrate) decompose.",
      "Titration method for Na⁺, K⁺ and NH₄⁺ salts: find the volumes with indicator, repeat with the same volumes without indicator, then crystallise.",
      "Precipitation for insoluble salts: mix two solutions → filter → wash with distilled water → dry.",
      "Test for the crystallisation point: dip a glass rod in and see whether crystals form on it as it cools.",
    ],
    whyItWorks:
      "Every step removes one thing you don't want: excess solid (filtering), excess acid (adding solid in excess), excess water (evaporating), soluble impurities (they stay in the cooled solution and are washed off). Solubility decreases as the solution cools, so crystals form slowly and pure.",
    memoryTrick:
      "Excess method: 'Excess, Filter, Heat, Cool, Filter, Wash, Dry' — 'Every Fine Hairdresser Can Fix Wet Damage.'",
    examTip:
      "For 'describe how to obtain pure, dry crystals from the filtrate' (4 marks) the marks are: heat/evaporate to the crystallisation point (or 'until crystals form on a glass rod'); leave to cool/crystallise; filter off the crystals; wash with a little cold distilled water and/or dry between filter papers. 'Heat until all the water has gone' loses the first mark.",
    thinkDeeper:
      "Why is the wash water cold, and why only a little? (Think about what happens to the solubility of the salt crystals in warm water, and how much of your product would dissolve.)",
    workedExample: {
      problem:
        "Describe how to prepare pure, dry crystals of hydrated copper(II) sulfate, CuSO₄·5H₂O, from copper(II) oxide and dilute sulfuric acid. Include the equation.",
      solution: `**Equation:** CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)

1. Warm about 50 cm³ of dilute sulfuric acid in a beaker.
2. Add copper(II) oxide a spatula at a time, stirring, until some black solid remains — the oxide is **in excess**, so all the acid has reacted.
3. **Filter** to remove the excess copper(II) oxide; the filtrate is blue copper(II) sulfate solution.
4. **Heat** the filtrate in an evaporating basin to the **crystallisation point** (crystals appear on a glass rod dipped in and removed).
5. **Leave to cool** — blue crystals form.
6. **Filter** off the crystals, **wash** with a little cold distilled water and **dry between filter papers**.`,
    },
  },
  {
    id: "acids-tests",
    topic: "acids",
    lesson: "4CH1 2(h) · chemical tests",
    heading: "Chemical tests for gases, cations, anions and water",
    discovery: {
      problem:
        "A student adds silver nitrate to tap water and gets a white precipitate, so concludes the water contains chloride ions. Her friend points out that carbonate ions in tap water would also form an insoluble silver carbonate precipitate. How can the test be changed so a white precipitate can ONLY mean chloride?",
      idea:
        "Add **dilute nitric acid first**. The acid reacts with any carbonate ions (2H⁺ + CO₃²⁻ → H₂O + CO₂), removing them, so they can't form a precipitate with Ag⁺. Nitric acid is used — not hydrochloric acid, which would add Cl⁻ ions itself and always give a white precipitate.",
    },
    body: `**Tests for gases**

| Gas | Test | Positive result |
|---|---|---|
| hydrogen, H₂ | lighted splint | burns with a **squeaky pop** |
| oxygen, O₂ | glowing splint | **relights** |
| carbon dioxide, CO₂ | bubble through **limewater** | limewater turns **milky / cloudy** |
| ammonia, NH₃ | **damp red litmus** paper | turns **blue** |
| chlorine, Cl₂ | **damp litmus** paper | **bleached** (turns white; blue litmus may turn red first) |

**Flame tests (cations)** — dip a clean nichrome or platinum wire (cleaned in concentrated hydrochloric acid) into the solid and hold it in a blue Bunsen flame:

| Ion | Flame colour |
|---|---|
| Li⁺ | red |
| Na⁺ | yellow |
| K⁺ | lilac |
| Ca²⁺ | orange-red |
| Cu²⁺ | blue-green |

**Sodium hydroxide solution test (cations)** — add a few drops of NaOH(aq):

| Ion | Observation |
|---|---|
| Cu²⁺ | **blue** precipitate of Cu(OH)₂ |
| Fe²⁺ | **green** precipitate of Fe(OH)₂ |
| Fe³⁺ | **brown** (orange-brown) precipitate of Fe(OH)₃ |
| NH₄⁺ | no precipitate; on **warming**, **ammonia** is given off — turns **damp red litmus blue** |

e.g. Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s);  NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l)

**Tests for anions**

- **Halides (Cl⁻, Br⁻, I⁻):** add **dilute nitric acid**, then **silver nitrate solution**. Chloride → **white** precipitate (AgCl); bromide → **cream** (AgBr); iodide → **yellow** (AgI). Ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s).
- **Sulfate (SO₄²⁻):** add **dilute hydrochloric acid**, then **barium chloride solution** → **white** precipitate of barium sulfate. Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).
- **Carbonate (CO₃²⁻):** add **dilute acid** → **effervescence**; the gas turns **limewater milky** (it is CO₂).

**Why add the acid first?** The dilute acid **removes carbonate ions** that would **also form a white precipitate** with Ag⁺ or Ba²⁺ and give a false positive. Choose the acid that adds nothing confusing: **nitric** for halides (HCl would add Cl⁻), **hydrochloric** for sulfate (H₂SO₄ would add SO₄²⁻).

**Test for water:** add the liquid to **anhydrous copper(II) sulfate** — it turns from **white to blue**. (Or anhydrous cobalt(II) chloride: blue → pink.) This shows water is *present*, not that it is pure.

**Physical test for purity of water:** pure water **boils at exactly 100 °C** (and freezes/melts at 0 °C) at atmospheric pressure. Impurities raise the boiling point and make it boil over a range.

**Identifying an unknown salt:** do one cation test and one anion test, then combine — e.g. lilac flame + cream precipitate with acidified silver nitrate → **potassium bromide**.`,
    diagram: TESTS_SVG,
    diagramCaption: "Anion tests: silver halide precipitates (after dilute nitric acid) and barium sulfate (after dilute hydrochloric acid).",
    keyPoints: [
      "H₂ squeaky pop with a lighted splint; O₂ relights a glowing splint; CO₂ turns limewater milky; NH₃ turns damp red litmus blue; Cl₂ bleaches damp litmus.",
      "Flames: Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ blue-green.",
      "NaOH(aq): Cu²⁺ blue ppt, Fe²⁺ green ppt, Fe³⁺ brown ppt; NH₄⁺ gives ammonia on warming.",
      "Halides: dilute HNO₃ then AgNO₃ → Cl⁻ white, Br⁻ cream, I⁻ yellow precipitate.",
      "Sulfate: dilute HCl then BaCl₂ → white precipitate. Acid first removes carbonate ions that would also give a precipitate.",
      "Water: anhydrous copper(II) sulfate white → blue. Pure water boils at exactly 100 °C.",
    ],
    whyItWorks:
      "Each test relies on a product you can see: an insoluble precipitate of a characteristic colour, a gas with a distinctive reaction, or electrons in metal ions emitting light of a characteristic colour when they drop back to lower energy levels in a flame.",
    memoryTrick:
      "Silver halides get darker down the group: Chloride white, Bromide cream, Iodide yellow — 'White, Cream, Yellow: like milk, butter, cheese'. And 'Nitric for Silver, Hydrochloric for Barium' — never add the ion you are testing for.",
    examTip:
      "Name the reagents fully: 'dilute nitric acid and silver nitrate solution', not just 'silver nitrate'. The result must be a colour AND 'precipitate' — 'turns white' alone or 'cloudy' for a halide test usually loses the mark. For ammonia, it must be DAMP RED litmus turning blue.",
    thinkDeeper:
      "A solution gives a white precipitate with acidified barium chloride AND a white precipitate with acidified silver nitrate. Could it contain only one compound? Suggest two different compounds that could be present.",
    workedExample: {
      problem:
        "Solid Q gives a blue-green flame. A solution of Q gives a blue precipitate with sodium hydroxide solution, and a white precipitate with dilute hydrochloric acid followed by barium chloride solution. Identify Q and write ionic equations for both precipitates.",
      solution: `**Cation:** blue-green flame and a **blue** precipitate with NaOH(aq) → **Cu²⁺**.
**Anion:** white precipitate with acidified BaCl₂ → **SO₄²⁻**.

**Q = copper(II) sulfate, CuSO₄.**

Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)
Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)`,
    },
  },
];
