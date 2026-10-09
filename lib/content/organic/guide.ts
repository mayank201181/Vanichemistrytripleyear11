import type { GuideSection } from "../../types";

export const guide: GuideSection[] = [
  {
    id: "organic-intro",
    topic: "organic",
    lesson: "4CH1 4(a)",
    heading: "Organic basics: formulae, homologous series, naming and isomers",
    discovery: {
      problem:
        "Two bottles are both labelled C₄H₁₀. One gas boils at −0.5 °C, the other at −12 °C. Same atoms, same numbers of each atom — how can they be different substances?",
      idea:
        "The atoms are joined up in a different order. Butane is a straight chain; methylpropane is branched. Same **molecular formula**, different **structural formula** — they are **structural isomers**. In organic chemistry the arrangement of atoms matters as much as which atoms are present.",
    },
    body: `Organic chemistry is the chemistry of carbon compounds. A **hydrocarbon** is a compound that contains **hydrogen and carbon only** — the word "only" is the mark.

**Five kinds of formula** (learn them for butane, C₄H₁₀):
- **Molecular formula** — the actual number of atoms of each element in one molecule: C₄H₁₀.
- **Empirical formula** — the simplest whole-number ratio of atoms: C₂H₅.
- **General formula** — the algebraic formula for a whole series: alkanes CₙH₂ₙ₊₂.
- **Structural formula** — shows how the atoms are arranged, group by group, without drawing every bond: CH₃CH₂CH₂CH₃.
- **Displayed formula** — shows **every atom and every bond** as a line (C–H, C–C, C=C, O–H all drawn).

**Homologous series.** A family of compounds that:
- have the **same general formula**;
- have the **same functional group**, so **similar chemical properties**;
- show a **gradual change (trend) in physical properties**, e.g. boiling point rises as the chain gets longer;
- each member differs from the next by **CH₂**.

A **functional group** is the atom or group of atoms that determines how the molecule reacts.

| Series | Functional group | General formula | First member |
|---|---|---|---|
| alkanes | (C–C single bonds only) | CₙH₂ₙ₊₂ | methane CH₄ |
| alkenes | C=C | CₙH₂ₙ | ethene C₂H₄ |
| alcohols | –OH | CₙH₂ₙ₊₁OH | methanol CH₃OH |
| carboxylic acids | –COOH | CₙH₂ₙ₊₁COOH | methanoic acid HCOOH |
| esters | –COO– | — | e.g. ethyl ethanoate |

**Naming (C1–C5).** The stem gives the number of carbons: **meth** 1, **eth** 2, **prop** 3, **but** 4, **pent** 5. The ending gives the series: **-ane**, **-ene**, **-anol**, **-anoic acid**. For alkenes with 4+ carbons and alcohols with 3+ carbons a number shows where the group is: **but-1-ene** CH₂=CHCH₂CH₃ has the C=C starting at carbon 1; **but-2-ene** CH₃CH=CHCH₃ has it at carbon 2. **Propan-1-ol** CH₃CH₂CH₂OH has –OH on an end carbon; **propan-2-ol** CH₃CH(OH)CH₃ has it on the middle carbon. Number from the end that gives the **lowest** number (so never "but-3-ene"). In a carboxylic acid the C of –COOH counts as carbon 1: propanoic acid is CH₃CH₂COOH. **Esters** are named alcohol-part first then acid-part: **ethyl ethanoate** CH₃COOC₂H₅ (from ethanol + ethanoic acid), **methyl propanoate** CH₃CH₂COOCH₃ (from methanol + propanoic acid).

**Structural isomers** are compounds with the **same molecular formula but different structural formulae**. C₄H₁₀ has two (butane, methylpropane); C₅H₁₂ has three (pentane, 2-methylbutane, 2,2-dimethylpropane); C₄H₈ alkenes include but-1-ene, but-2-ene and methylpropene. Check your drawings: a molecule that is just bent or flipped is the **same** compound, not an isomer.

**Reaction types** you must recognise:
- **Substitution** — one atom is swapped for another (alkane + bromine in UV light).
- **Addition** — two molecules join to make one product; a C=C opens up (alkene + bromine, + steam, + hydrogen; addition polymerisation).
- **Combustion** — burning in oxygen (complete → CO₂ + H₂O).`,
    diagram: `<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structural formulae of butane and methylpropane (both C4H10) and of but-1-ene and but-2-ene (both C4H8)"><text x="280" y="18" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a" font-weight="bold">Structural isomers: same molecular formula, different structural formula</text><rect x="10" y="30" width="265" height="95" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.4"/><rect x="285" y="30" width="265" height="95" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.4"/><rect x="10" y="140" width="265" height="95" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.4"/><rect x="285" y="140" width="265" height="95" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.4"/><text x="142" y="52" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold">butane, C₄H₁₀</text><text x="142" y="98" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH₃–CH₂–CH₂–CH₃</text><text x="417" y="52" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold">methylpropane, C₄H₁₀</text><text x="362" y="110" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH₃</text><text x="417" y="110" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH</text><text x="472" y="110" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH₃</text><text x="417" y="76" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH₃</text><line x1="381" y1="105" x2="404" y2="105" stroke="#334155" stroke-width="1.6"/><line x1="431" y1="105" x2="453" y2="105" stroke="#334155" stroke-width="1.6"/><line x1="412" y1="80" x2="412" y2="94" stroke="#334155" stroke-width="1.6"/><text x="142" y="162" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">but-1-ene, C₄H₈</text><text x="142" y="200" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH₂=CH–CH₂–CH₃</text><text x="142" y="224" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">C=C starts at carbon 1</text><text x="417" y="162" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">but-2-ene, C₄H₈</text><text x="417" y="200" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">CH₃–CH=CH–CH₃</text><text x="417" y="224" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">C=C starts at carbon 2</text></svg>`,
    diagramCaption: "Isomers have the same molecular formula but the atoms are arranged differently.",
    keyPoints: [
      "Hydrocarbon: a compound of hydrogen and carbon only.",
      "Homologous series: same general formula, same functional group, similar chemical properties, gradual trend in physical properties, successive members differ by CH₂.",
      "Functional group: the atom/group of atoms that determines the chemical reactions of the compound.",
      "Stems meth-, eth-, prop-, but-, pent- = 1–5 carbons; endings -ane, -ene, -anol, -anoic acid; esters named alkyl (from alcohol) + -oate (from acid).",
      "Structural isomers: same molecular formula, different structural (displayed) formula.",
      "Empirical formula = simplest whole-number ratio (butane C₄H₁₀ → C₂H₅; all alkenes → CH₂).",
      "Substitution (alkane + halogen, UV); addition (alkene + Br₂ / H₂O / H₂); combustion.",
    ],
    whyItWorks:
      "Members of a series react alike because the reactions happen at the functional group, and every member has the same one. The chain just changes the size of the molecule, so physical properties such as boiling point change gradually: longer chains have stronger intermolecular forces.",
    memoryTrick: "Meth-Eth-Prop-But-Pent: \"Monkeys Eat Peanut Butter Pancakes\" — 1, 2, 3, 4, 5 carbons.",
    examTip:
      "\"Same molecular formula, different structural formula\" is the isomer definition — \"different structure\" alone or \"same formula\" alone often loses the mark. In a displayed formula, every bond must be drawn, including the O–H bond.",
    thinkDeeper:
      "Propan-1-ol and propan-2-ol are isomers, but so are propan-1-ol and methoxyethane (CH₃OCH₂CH₃). Why would methoxyethane NOT show the typical reactions of an alcohol?",
    workedExample: {
      problem:
        "A hydrocarbon contains 85.7% carbon by mass. Its relative formula mass is 56. Find its empirical and molecular formulae, and name two structural isomers that are alkenes.",
      solution: `**Step 1 — moles ratio.** C: 85.7 ÷ 12 = 7.14; H: 14.3 ÷ 1 = 14.3.

**Step 2 — simplest ratio.** Divide by 7.14 → C 1 : H 2. Empirical formula **CH₂** (Mr = 14).

**Step 3 — molecular formula.** 56 ÷ 14 = 4, so **C₄H₈**.

**Step 4 — isomers.** C₄H₈ fits CₙH₂ₙ, so it can be an alkene: **but-1-ene** CH₂=CHCH₂CH₃ and **but-2-ene** CH₃CH=CHCH₃ (methylpropene is a third).`,
    },
  },
  {
    id: "organic-crude",
    topic: "organic",
    lesson: "4CH1 4(b)",
    heading: "Crude oil, fractional distillation, combustion and cracking",
    discovery: {
      problem:
        "A refinery makes far more fuel oil than anyone wants to buy, yet petrol is always in short supply. It cannot simply 'make more petrol' by distilling harder. What can it do?",
      idea:
        "**Crack** the long molecules: heat them over a catalyst so they break into shorter alkanes (useful as petrol) **plus alkenes** (raw material for plastics). Cracking matches supply to demand and makes something distillation never can — alkenes.",
    },
    body: `**Crude oil** is a **mixture** of hydrocarbons (mainly alkanes) of many different chain lengths. Because it is a mixture of substances with different boiling points, it can be separated by **fractional distillation**.

**Fractional distillation of crude oil**
1. Crude oil is heated in a furnace until it is mostly **vapour** and fed into the bottom of a tall **fractionating column**.
2. The column has a **temperature gradient**: **hot at the bottom, cool at the top**.
3. Vapours rise. Each hydrocarbon **condenses** when it reaches a level where the temperature is below its boiling point, and is collected on a tray there.
4. Short molecules (low boiling points) rise to the top; long molecules condense low down; **bitumen** never vaporises and drains from the bottom.

A **fraction** is a mixture of hydrocarbons with similar chain lengths and **similar boiling points**.

| Fraction (top → bottom) | Use |
|---|---|
| refinery gases | bottled gas for heating and cooking |
| gasoline | fuel (petrol) for cars |
| kerosene | fuel for aircraft |
| diesel | fuel for some cars, lorries and trains |
| fuel oil | fuel for large ships and some power stations |
| bitumen | surfacing roads and roofs |

**Trends going down the column** (longer chains): **boiling point increases**, **viscosity increases** (thicker, flows less easily), **colour gets darker**, and they become **harder to ignite** (less flammable). The reason: longer molecules have **stronger intermolecular forces**, so more energy is needed to separate them.

**Combustion.** **Complete combustion** (plenty of oxygen) gives **carbon dioxide and water**: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). In a **limited supply of oxygen**, **incomplete combustion** gives **carbon monoxide** (and/or **carbon**, soot) and water: e.g. 2CH₄ + 3O₂ → 2CO + 4H₂O, or CH₄ + O₂ → C + 2H₂O.
- **Carbon monoxide is toxic**: it **combines with haemoglobin** in red blood cells, **reducing the amount of oxygen the blood can carry** around the body. It is colourless and odourless, so it is hard to detect — hence CO alarms.
- **Soot** (carbon particles) blackens buildings and causes breathing problems.

**Pollutants from engines.** Fossil fuels contain **sulfur** impurities, which burn to **sulfur dioxide**, SO₂. In the very high temperature of an engine, **nitrogen and oxygen from the air** react to form **oxides of nitrogen** (NOₓ). Both dissolve in rainwater to form **acid rain**, which damages limestone buildings, kills fish in lakes and damages trees.

**Cracking.** Long-chain alkanes are broken into shorter, more useful alkanes and alkenes. **Catalytic cracking**: vaporised alkane passed over a **silica or alumina catalyst** at about **600–700 °C**. Two reasons:
- **Supply and demand** — crude oil contains more long-chain fractions than are needed, and fewer short-chain (petrol) fractions than are needed.
- **Alkenes** are produced — needed to make **polymers** and other chemicals (e.g. ethanol).

Cracking equations must balance atoms, and at least one product is an alkene: C₁₀H₂₂ → C₈H₁₈ + C₂H₄; C₁₂H₂₆ → C₈H₁₈ + 2C₂H₄.`,
    diagram: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fractionating column: crude oil vapour enters at the bottom; the column is hot at the bottom and cool at the top; fractions from refinery gases at the top to bitumen at the bottom with their uses"><rect x="200" y="28" width="90" height="262" rx="6" fill="#f1f5f9" stroke="#334155" stroke-width="1.8"/><line x1="200" y1="62" x2="290" y2="62" stroke="#94a3b8" stroke-dasharray="5 3"/><line x1="200" y1="107" x2="290" y2="107" stroke="#94a3b8" stroke-dasharray="5 3"/><line x1="200" y1="152" x2="290" y2="152" stroke="#94a3b8" stroke-dasharray="5 3"/><line x1="200" y1="197" x2="290" y2="197" stroke="#94a3b8" stroke-dasharray="5 3"/><line x1="200" y1="245" x2="290" y2="245" stroke="#94a3b8" stroke-dasharray="5 3"/><line x1="290" y1="42" x2="323.0" y2="42.0" stroke="#334155" stroke-width="1.6"/><polygon points="332,42 323.0,46.5 323.0,37.5" fill="#334155"/><text x="338" y="43" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">refinery gases</text><text x="338" y="57" text-anchor="start" font-size="11" font-family="sans-serif" fill="#334155">bottled gas for heating, cooking</text><line x1="290" y1="85" x2="323.0" y2="85.0" stroke="#334155" stroke-width="1.6"/><polygon points="332,85 323.0,89.5 323.0,80.5" fill="#334155"/><text x="338" y="86" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">gasoline</text><text x="338" y="100" text-anchor="start" font-size="11" font-family="sans-serif" fill="#334155">petrol for cars</text><line x1="290" y1="130" x2="323.0" y2="130.0" stroke="#334155" stroke-width="1.6"/><polygon points="332,130 323.0,134.5 323.0,125.5" fill="#334155"/><text x="338" y="131" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">kerosene</text><text x="338" y="145" text-anchor="start" font-size="11" font-family="sans-serif" fill="#334155">fuel for aircraft</text><line x1="290" y1="175" x2="323.0" y2="175.0" stroke="#334155" stroke-width="1.6"/><polygon points="332,175 323.0,179.5 323.0,170.5" fill="#334155"/><text x="338" y="176" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">diesel</text><text x="338" y="190" text-anchor="start" font-size="11" font-family="sans-serif" fill="#334155">fuel for some cars, lorries, trains</text><line x1="290" y1="220" x2="323.0" y2="220.0" stroke="#334155" stroke-width="1.6"/><polygon points="332,220 323.0,224.5 323.0,215.5" fill="#334155"/><text x="338" y="221" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">fuel oil</text><text x="338" y="235" text-anchor="start" font-size="11" font-family="sans-serif" fill="#334155">fuel for ships, power stations</text><line x1="290" y1="272" x2="323.0" y2="272.0" stroke="#334155" stroke-width="1.6"/><polygon points="332,272 323.0,276.5 323.0,267.5" fill="#334155"/><text x="338" y="273" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">bitumen</text><text x="338" y="287" text-anchor="start" font-size="11" font-family="sans-serif" fill="#334155">surfacing roads and roofs</text><rect x="70" y="245" width="70" height="40" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/><text x="105" y="269" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#991b1b">furnace</text><text x="40" y="236" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a">crude oil</text><line x1="18" y1="265" x2="59.0" y2="265.0" stroke="#334155" stroke-width="1.6"/><polygon points="68,265 59.0,269.5 59.0,260.5" fill="#334155"/><line x1="140" y1="265" x2="189.0" y2="265.0" stroke="#334155" stroke-width="1.6"/><polygon points="198,265 189.0,269.5 189.0,260.5" fill="#334155"/><text x="170" y="257" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">vapour</text><line x1="170" y1="215" x2="170.0" y2="49.0" stroke="#334155" stroke-width="1.6"/><polygon points="170,40 174.5,49.0 165.5,49.0" fill="#334155"/><text x="160" y="48" text-anchor="end" font-size="11" font-family="sans-serif" fill="#334155">top: cooler</text><text x="160" y="62" text-anchor="end" font-size="11" font-family="sans-serif" fill="#334155">(about 25 °C)</text><text x="160" y="125" text-anchor="end" font-size="11" font-family="sans-serif" fill="#334155">temperature</text><text x="160" y="139" text-anchor="end" font-size="11" font-family="sans-serif" fill="#334155">falls going up</text><text x="160" y="200" text-anchor="end" font-size="11" font-family="sans-serif" fill="#334155">bottom: hottest</text><text x="160" y="214" text-anchor="end" font-size="11" font-family="sans-serif" fill="#334155">(about 350 °C)</text><text x="280" y="316" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#0f172a" font-weight="bold">Lower down: longer chains, higher boiling point, more viscous, darker, harder to ignite</text></svg>`,
    diagramCaption: "The column is hottest at the bottom. Each fraction condenses where the temperature falls below its boiling point.",
    keyPoints: [
      "Crude oil is a mixture of hydrocarbons, separated by fractional distillation using a temperature gradient (hot at bottom, cool at top).",
      "Fractions in order: refinery gases, gasoline, kerosene, diesel, fuel oil, bitumen.",
      "Longer chains: higher boiling point, more viscous, darker, harder to ignite.",
      "Incomplete combustion makes CO (toxic: combines with haemoglobin, so blood carries less oxygen) and soot.",
      "SO₂ (from sulfur impurities) and NOₓ (N₂ + O₂ at high engine temperatures) cause acid rain.",
      "Catalytic cracking: silica/alumina catalyst, 600–700 °C; makes shorter alkanes + alkenes to meet demand.",
    ],
    whyItWorks:
      "Bigger molecules have more surface contact with their neighbours, so the intermolecular forces between them are stronger. More energy is needed to overcome them, so they boil at higher temperatures and flow less easily.",
    memoryTrick: "Top to bottom: \"Real Girls Keep Diamonds For Best\" — Refinery gases, Gasoline, Kerosene, Diesel, Fuel oil, Bitumen.",
    examTip:
      "For CO, the mark is for haemoglobin AND less oxygen carried. \"CO is poisonous\" alone scores nothing. For NOₓ, say the nitrogen comes from the AIR, not from the fuel. When balancing a cracking equation, check C and H separately — the H count is where marks go.",
    thinkDeeper:
      "Why does cracking a single alkane always give at least one product with fewer H atoms per C than an alkane? (Hint: count H in CₙH₂ₙ₊₂ when it splits into two molecules.)",
    workedExample: {
      problem: "Dodecane, C₁₂H₂₆, is cracked to make octane and one other hydrocarbon only. Write the balanced equation and explain why the refinery cracks dodecane.",
      solution: `**Step 1.** Octane is C₈H₁₈ (alkane, CₙH₂ₙ₊₂).

**Step 2.** Atoms left over: C 12 − 8 = 4; H 26 − 18 = 8 → **C₄H₈** (an alkene — butene).

**Equation:** C₁₂H₂₆ → C₈H₁₈ + C₄H₈

**Why:** there is a greater demand for short-chain fractions such as petrol (octane) than crude oil supplies, while long-chain fractions are in surplus; cracking also produces alkenes (butene) used to make polymers.`,
    },
  },
  {
    id: "organic-hydrocarbons",
    topic: "organic",
    lesson: "4CH1 4(c)–(d)",
    heading: "Alkanes and alkenes",
    discovery: {
      problem:
        "Hexane and hexene are both colourless liquids. You shake each with orange bromine water. One stays orange; the other goes colourless in seconds. Which is which — and why does one not react at all?",
      idea:
        "Hexene has a **C=C double bond**. The bromine **adds across it**, so the orange bromine is used up. Hexane is **saturated** — it has no double bond to add to, and it only reacts with bromine by substitution in **UV light**.",
    },
    body: `**Alkanes** — general formula **CₙH₂ₙ₊₂**. They contain **only single C–C bonds**, so they are **saturated** (no more atoms can be added). Methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀, pentane C₅H₁₂.

Alkanes are fairly unreactive, but they **burn** (they are good fuels):
- complete: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
- incomplete (limited oxygen): carbon monoxide and/or soot form instead.

**Substitution with bromine.** In **ultraviolet (UV) light**, an alkane reacts with bromine. A hydrogen atom is **replaced (substituted)** by a bromine atom, and **hydrogen bromide** is the other product:

CH₄ + Br₂ → CH₃Br + HBr   (UV light)

The organic product is **bromomethane**. Similarly C₂H₆ + Br₂ → C₂H₅Br + HBr (bromoethane). The UV light provides the energy to break the Br–Br bond. With excess bromine, more H atoms can be substituted (CH₂Br₂ and so on), so a mixture can form. In the dark, an alkane does **not** decolourise bromine water.

**Alkenes** — general formula **CₙH₂ₙ**. They contain a **C=C double bond**, their functional group, so they are **unsaturated**. Ethene C₂H₄, propene C₃H₆, butene C₄H₈ (but-1-ene and but-2-ene). There is no alkene with one carbon. All alkenes have the empirical formula **CH₂**.

**Addition reactions.** The C=C opens up and atoms add on to each carbon. Two molecules form **one** product — no other product.
- **Bromine**: C₂H₄ + Br₂ → C₂H₄Br₂ (**1,2-dibromoethane**: one Br on each carbon). Propene + bromine → **1,2-dibromopropane**, CH₃CHBrCH₂Br.
- **Steam** (hydration): C₂H₄ + H₂O ⇌ C₂H₅OH — the industrial route to ethanol (see Alcohols).
- **Hydrogen** (with a catalyst): C₂H₄ + H₂ → C₂H₆ — the alkene becomes an alkane.

**The test for an alkene (the C=C bond)**
- Add **bromine water** and **shake**.
- Alkene: bromine water changes from **orange to colourless** (it is **decolourised**).
- Alkane: **stays orange** (no reaction in normal light).

Say "colourless", **never "clear"** — clear means transparent and orange bromine water is already clear.

| | Alkanes | Alkenes |
|---|---|---|
| General formula | CₙH₂ₙ₊₂ | CₙH₂ₙ |
| Bonds | single C–C only — saturated | contain C=C — unsaturated |
| Typical reaction | substitution (UV), combustion | addition, combustion |
| Bromine water | stays orange | orange → colourless |

Alkenes burn too, but with a smokier flame because there is a higher proportion of carbon, so incomplete combustion is more likely.`,
    diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ethene reacting with bromine by addition to form 1,2-dibromoethane, and bromine water staying orange with an alkane but turning colourless with an alkene"><text x="280" y="18" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a" font-weight="bold">Addition of bromine to ethene</text><line x1="89.0" y1="67.5" x2="121.0" y2="67.5" stroke="#334155" stroke-width="1.6"/><line x1="89.0" y1="72.5" x2="121.0" y2="72.5" stroke="#334155" stroke-width="1.6"/><line x1="73.6" y1="63.6" x2="61.4" y2="51.4" stroke="#334155" stroke-width="1.6"/><line x1="73.6" y1="76.4" x2="61.4" y2="88.6" stroke="#334155" stroke-width="1.6"/><line x1="136.4" y1="63.6" x2="148.6" y2="51.4" stroke="#334155" stroke-width="1.6"/><line x1="136.4" y1="76.4" x2="148.6" y2="88.6" stroke="#334155" stroke-width="1.6"/><text x="80" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="130" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="55" y="45" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="55" y="95" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="155" y="45" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="155" y="95" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="192" y="75" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#334155">+</text><line x1="237.0" y1="70.0" x2="263.0" y2="70.0" stroke="#334155" stroke-width="1.6"/><text x="225" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#b45309">Br</text><text x="275" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#b45309">Br</text><line x1="305" y1="70" x2="342" y2="70" stroke="#334155" stroke-width="1.8"/><polygon points="350,70 340,65 340,75" fill="#334155"/><line x1="420.0" y1="70.0" x2="450.0" y2="70.0" stroke="#334155" stroke-width="1.6"/><line x1="400.0" y1="70.0" x2="382.0" y2="70.0" stroke="#334155" stroke-width="1.6"/><line x1="470.0" y1="70.0" x2="488.0" y2="70.0" stroke="#334155" stroke-width="1.6"/><line x1="410.0" y1="60.0" x2="410.0" y2="45.0" stroke="#334155" stroke-width="1.6"/><line x1="410.0" y1="80.0" x2="410.0" y2="95.0" stroke="#334155" stroke-width="1.6"/><line x1="460.0" y1="60.0" x2="460.0" y2="45.0" stroke="#334155" stroke-width="1.6"/><line x1="460.0" y1="80.0" x2="460.0" y2="95.0" stroke="#334155" stroke-width="1.6"/><text x="410" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="460" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="372" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#b45309">Br</text><text x="498" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#b45309">Br</text><text x="410" y="35" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="410" y="105" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="460" y="35" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="460" y="105" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="105" y="132" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">ethene</text><text x="250" y="132" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">bromine</text><text x="435" y="132" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">1,2-dibromoethane</text><line x1="20" y1="148" x2="540" y2="148" stroke="#cbd5e1" stroke-width="1"/><rect x="90" y="160" width="26" height="78" rx="12" fill="#ffffff" stroke="#334155" stroke-width="1.6"/><rect x="93" y="195" width="20" height="40" rx="10" fill="#f59e0b"/><text x="130" y="192" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a">alkane + bromine water</text><text x="130" y="212" text-anchor="start" font-size="12" font-family="sans-serif" fill="#b45309" font-weight="bold">stays orange (no reaction)</text><rect x="330" y="160" width="26" height="78" rx="12" fill="#ffffff" stroke="#334155" stroke-width="1.6"/><rect x="333" y="195" width="20" height="40" rx="10" fill="#f8fafc"/><text x="370" y="192" text-anchor="start" font-size="12" font-family="sans-serif" fill="#0f172a">alkene + bromine water</text><text x="370" y="212" text-anchor="start" font-size="12" font-family="sans-serif" fill="#047857" font-weight="bold">orange → colourless</text></svg>`,
    diagramCaption: "Bromine adds across the C=C bond, so an alkene decolourises bromine water; an alkane does not react in normal light.",
    keyPoints: [
      "Alkanes CₙH₂ₙ₊₂: saturated (C–C single bonds only).",
      "Alkenes CₙH₂ₙ: unsaturated, contain a C=C double bond.",
      "Alkane + bromine in UV light: substitution, e.g. CH₄ + Br₂ → CH₃Br + HBr.",
      "Alkene + bromine: addition, e.g. C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane).",
      "Test for alkenes: shake with bromine water — orange to colourless.",
      "Alkenes also add steam (→ alcohol) and hydrogen (→ alkane).",
    ],
    whyItWorks:
      "One of the two bonds in C=C is relatively easy to break, so it opens and each carbon can form a new bond to an incoming atom. Alkanes have no spare bond to open, so bromine must replace a hydrogen instead — which needs the extra energy of UV light.",
    memoryTrick: "AlkANEs are sANE and saturated (single bonds); alkENEs have the ENErgetic double bond.",
    examTip:
      "\"Orange to colourless\" — both colours are needed. \"Goes clear\" scores zero. In substitution, don't forget the HBr product; in addition there is only ONE product.",
    thinkDeeper:
      "Cyclohexane, C₆H₁₂, fits the alkene general formula CₙH₂ₙ, yet it does not decolourise bromine water. Explain how this is possible.",
    workedExample: {
      problem:
        "Propene reacts with bromine. (a) Name the type of reaction. (b) Give the structural formula of the product. (c) 4.2 g of propene reacts with excess bromine. Calculate the maximum mass of product.",
      solution: `**(a)** Addition (the C=C bond opens).

**(b)** CH₃CHBrCH₂Br — 1,2-dibromopropane (one Br on each carbon of the former C=C).

**(c)** Mr C₃H₆ = 3 × 12 + 6 × 1 = 42, so moles = 4.2 ÷ 42 = **0.10 mol**.
Ratio C₃H₆ : C₃H₆Br₂ = 1 : 1, so 0.10 mol product.
Mr C₃H₆Br₂ = 42 + 160 = 202 → mass = 0.10 × 202 = **20.2 g**.`,
    },
  },
  {
    id: "organic-alcohols",
    topic: "organic",
    lesson: "4CH1 4(e) · Triple",
    heading: "Alcohols: making ethanol and its reactions",
    discovery: {
      problem:
        "Brazil makes most of its fuel ethanol from sugar cane, while the UK chemical industry makes ethanol from ethene. Each country thinks its method is best. Who is right?",
      idea:
        "Both — for their circumstances. **Fermentation** uses a **renewable** crop and low temperatures but is slow, batch and gives impure ethanol. **Hydration of ethene** is fast, continuous and gives pure ethanol, but uses **non-renewable** crude oil and lots of energy. Evaluating means weighing up exactly these points.",
    },
    body: `**Alcohols** contain the **–OH** functional group (general formula CₙH₂ₙ₊₁OH): methanol CH₃OH, **ethanol C₂H₅OH**, propanol C₃H₇OH, butanol C₄H₉OH.

**Method 1 — Fermentation**

C₆H₁₂O₆(aq) → 2C₂H₅OH(aq) + 2CO₂(g)

- Glucose solution plus **yeast** (its **enzymes** catalyse the reaction).
- About **30 °C** (30–40 °C): too cold and the reaction is too slow; too hot and the enzymes are **denatured**.
- **Anaerobic** (no air): with oxygen the yeast respires aerobically, and the ethanol would be **oxidised to ethanoic acid** (vinegar).
- Fermentation stops at about 15% ethanol (the ethanol kills the yeast). The ethanol is then separated by **fractional distillation**.

**Method 2 — Hydration of ethene**

C₂H₄(g) + H₂O(g) ⇌ C₂H₅OH(g)

- Ethene (from cracking crude oil) + **steam**.
- **300 °C**, **60–70 atm**, **phosphoric acid catalyst**.
- Unreacted ethene is recycled; the product is almost pure ethanol.

| | Fermentation | Hydration of ethene |
|---|---|---|
| Raw material | sugar from crops — **renewable** | ethene from crude oil — **non-renewable** |
| Conditions | 30 °C, normal pressure — low energy | 300 °C, 60–70 atm — high energy cost |
| Rate | **slow** (days) | **fast** |
| Process | **batch** | **continuous** |
| Purity | impure (~15%) — must be distilled | **pure** ethanol |
| Other | CO₂ by-product; needs land for crops | only product is ethanol (addition) |

**Reactions of ethanol**

- **Combustion** — ethanol is a fuel: C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l).
- **Dehydration** — pass ethanol vapour over **hot aluminium oxide** (Al₂O₃, the catalyst). Water is removed: C₂H₅OH → C₂H₄ + H₂O. This makes ethene from a renewable source (e.g. for bio-poly(ethene)).
- **Oxidation to ethanoic acid**:
  - heat with **acidified potassium dichromate(VI)** (K₂Cr₂O₇ with dilute sulfuric acid): the solution turns **orange → green** as the dichromate is reduced. Overall: C₂H₅OH + 2[O] → CH₃COOH + H₂O, where [O] stands for oxygen from the oxidising agent;
  - or **microbial oxidation**: bacteria in air oxidise ethanol in wine to ethanoic acid — wine left open turns to **vinegar**: C₂H₅OH + O₂ → CH₃COOH + H₂O.

Note the two colour changes: dichromate goes **orange → green**; bromine water goes **orange → colourless**. Do not mix them up.`,
    diagram: `<svg viewBox="0 0 560 286" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two ways to make ethanol, fermentation and hydration of ethene, and three reactions of ethanol: dehydration to ethene, combustion and oxidation to ethanoic acid"><rect x="12" y="12" width="256" height="86" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.4"/><rect x="292" y="12" width="256" height="86" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.4"/><text x="140" y="32" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#854d0e" font-weight="bold">Fermentation (renewable)</text><text x="140" y="52" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a">C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂</text><text x="140" y="70" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">yeast, about 30 °C, no oxygen</text><text x="140" y="87" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">batch, slow, impure (needs distilling)</text><text x="420" y="32" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#075985" font-weight="bold">Hydration of ethene</text><text x="420" y="52" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a">C₂H₄ + H₂O ⇌ C₂H₅OH</text><text x="420" y="70" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">steam, 300 °C, 60–70 atm, H₃PO₄</text><text x="420" y="87" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">continuous, fast, pure product</text><rect x="205" y="122" width="150" height="38" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.4"/><text x="280" y="146" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#14532d" font-weight="bold">ethanol, C₂H₅OH</text><line x1="140" y1="98" x2="211.3" y2="117.6" stroke="#334155" stroke-width="1.6"/><polygon points="220,120 210.1,122.0 212.5,113.3" fill="#334155"/><line x1="420" y1="98" x2="348.7" y2="117.6" stroke="#334155" stroke-width="1.6"/><polygon points="340,120 347.5,113.3 349.9,122.0" fill="#334155"/><line x1="240" y1="160" x2="118.6" y2="199.2" stroke="#334155" stroke-width="1.6"/><polygon points="110,202 117.2,195.0 119.9,203.5" fill="#334155"/><line x1="280" y1="160" x2="280.0" y2="193.0" stroke="#334155" stroke-width="1.6"/><polygon points="280,202 275.5,193.0 284.5,193.0" fill="#334155"/><line x1="320" y1="160" x2="441.4" y2="199.2" stroke="#334155" stroke-width="1.6"/><polygon points="450,202 440.1,203.5 442.8,195.0" fill="#334155"/><rect x="12" y="204" width="176" height="74" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.4"/><rect x="196" y="204" width="168" height="74" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.4"/><rect x="372" y="204" width="176" height="74" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.4"/><text x="100" y="224" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">Dehydration</text><text x="100" y="242" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">C₂H₅OH → C₂H₄ + H₂O</text><text x="100" y="259" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">over hot aluminium oxide</text><text x="280" y="224" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">Combustion</text><text x="280" y="242" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O</text><text x="280" y="259" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">burns in air (a fuel)</text><text x="460" y="224" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">Oxidation</text><text x="460" y="242" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">→ ethanoic acid, CH₃COOH</text><text x="460" y="258" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">K₂Cr₂O₇/H⁺: orange → green</text><text x="460" y="273" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">or microbes (wine → vinegar)</text></svg>`,
    diagramCaption: "Two routes to ethanol, and the three reactions of ethanol you need.",
    keyPoints: [
      "Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; yeast, about 30 °C, anaerobic.",
      "Hydration: C₂H₄ + H₂O ⇌ C₂H₅OH; steam, 300 °C, 60–70 atm, phosphoric acid catalyst.",
      "Fermentation: renewable, low energy, but slow, batch, impure. Hydration: fast, continuous, pure, but non-renewable and high energy.",
      "Dehydration: ethanol over hot aluminium oxide → ethene + water.",
      "Oxidation: acidified potassium dichromate(VI), orange → green, gives ethanoic acid; or microbial oxidation (wine → vinegar).",
      "Ethanol burns: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.",
    ],
    whyItWorks:
      "Yeast enzymes are proteins with an optimum temperature: below it the molecules collide too rarely, above it the active site changes shape (denatures). Without oxygen, yeast gets energy by converting glucose to ethanol; with oxygen present, ethanol is oxidised further, to ethanoic acid.",
    memoryTrick: "Hydration numbers: \"3-6-P\" — 300 °C, 60–70 atm, Phosphoric acid.",
    examTip:
      "In \"evaluate\" questions, give points for BOTH methods and then a conclusion that uses the context (e.g. a country with lots of sugar cane and no oil). \"Fermentation is better for the environment\" is too vague — say \"uses a renewable raw material\". For the anaerobic condition explain WHY: oxygen would oxidise the ethanol to ethanoic acid.",
    thinkDeeper:
      "Ethanol from fermentation is often called \"carbon neutral\". Using the equations for photosynthesis, fermentation and combustion, explain the claim, and suggest why it is not completely true.",
    workedExample: {
      problem:
        "A brewer ferments 90 g of glucose. Calculate (a) the maximum mass of ethanol and (b) the volume of carbon dioxide at rtp. (Mr glucose = 180)",
      solution: `**Moles of glucose** = 90 ÷ 180 = **0.50 mol**.

**(a)** Ratio glucose : ethanol = 1 : 2 → 1.0 mol ethanol.
Mr C₂H₅OH = 2 × 12 + 6 × 1 + 16 = 46 → mass = 1.0 × 46 = **46 g**.

**(b)** Ratio glucose : CO₂ = 1 : 2 → 1.0 mol CO₂.
Volume = 1.0 × 24 = **24 dm³** at rtp.`,
    },
  },
  {
    id: "organic-acids-esters",
    topic: "organic",
    lesson: "4CH1 4(f)–(g) · Triple",
    heading: "Carboxylic acids and esters",
    discovery: {
      problem:
        "Vinegar smells sharp and sour; nail-varnish remover and pear drops smell sweet. Yet you can make a pear-drop-smelling liquid from vinegar's acid in about ten minutes. How?",
      idea:
        "React ethanoic acid with an alcohol (ethanol), with a few drops of concentrated sulfuric acid as a catalyst. The product, **ethyl ethanoate**, is an **ester** — esters have the sweet, fruity smells used in **flavourings and perfumes**.",
    },
    body: `**Carboxylic acids** contain the **–COOH** functional group (displayed: a carbon double-bonded to one O and single-bonded to an O–H).

| Name | Formula | Carbons |
|---|---|---|
| methanoic acid | HCOOH | 1 |
| ethanoic acid | CH₃COOH | 2 |
| propanoic acid | CH₃CH₂COOH | 3 |
| butanoic acid | CH₃CH₂CH₂COOH | 4 |

The carbon in –COOH is counted in the name. **Vinegar** is a dilute solution of **ethanoic acid**.

Carboxylic acids are **weak acids**: in water they are only **partially ionised** (CH₃COOH ⇌ CH₃COO⁻ + H⁺), so a solution has a higher pH (about 3) than a strong acid of the same concentration. They still show typical acid reactions, just more slowly:
- with **reactive metals** → salt + **hydrogen**: 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂ (magnesium ethanoate; fizzing, magnesium disappears);
- with **carbonates** → salt + water + **carbon dioxide**: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂ (sodium ethanoate; fizzing; gas turns limewater milky);
- with alkalis → salt + water (neutralisation).

The salts are named **-anoates**: ethanoate, propanoate.

**Esters** contain the **–COO–** functional group. An **esterification** reaction is:

**carboxylic acid + alcohol ⇌ ester + water**   (catalyst: a few drops of **concentrated sulfuric acid**; heat/warm)

CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O
ethanoic acid + ethanol ⇌ **ethyl ethanoate** + water

**Naming esters**: alcohol part first (methyl, ethyl, propyl…), acid part second (…anoate).
- methanol + propanoic acid → **methyl propanoate** CH₃CH₂COOCH₃
- propanol + ethanoic acid → **propyl ethanoate** CH₃COOC₃H₇
- ethanol + methanoic acid → **ethyl methanoate** HCOOC₂H₅

Watch the order: in the formula CH₃COOC₂H₅ the acid part is written first, but in the name the alcohol part comes first.

**Uses**: esters are volatile and have sweet, fruity smells — used as **food flavourings** and in **perfumes** (also as solvents, e.g. ethyl ethanoate in nail-varnish remover).

**Core practical — preparing an ester**
1. Put about 1 cm³ of ethanol and 1 cm³ of ethanoic acid into a test tube.
2. Add a **few drops of concentrated sulfuric acid** (catalyst) — wear goggles and gloves; it is corrosive.
3. **Warm** the tube in a **water bath** of hot water for a few minutes (no naked flame — ethanol and the ester are **flammable**).
4. **Pour** the mixture into a beaker of **sodium carbonate solution**. This **neutralises** the leftover ethanoic acid and sulfuric acid (fizzing, CO₂). The ester does not dissolve and forms a **layer on top**.
5. **Smell** it carefully by **wafting** — a sweet, fruity (pear-drop) smell shows an ester has formed.`,
    diagram: `<svg viewBox="0 0 560 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Displayed formula of ethyl ethanoate with the ester link highlighted, showing the ethyl part comes from ethanol and the ethanoate part from ethanoic acid"><rect x="116" y="44" width="82" height="74" rx="8" fill="#fef3c7" stroke="#d97706" stroke-dasharray="4 3"/><line x1="81.0" y1="100.0" x2="64.0" y2="100.0" stroke="#334155" stroke-width="1.6"/><line x1="90.0" y1="91.0" x2="90.0" y2="74.0" stroke="#334155" stroke-width="1.6"/><line x1="90.0" y1="109.0" x2="90.0" y2="126.0" stroke="#334155" stroke-width="1.6"/><line x1="99.0" y1="100.0" x2="126.0" y2="100.0" stroke="#334155" stroke-width="1.6"/><line x1="132.5" y1="91.0" x2="132.5" y2="67.0" stroke="#334155" stroke-width="1.6"/><line x1="137.5" y1="91.0" x2="137.5" y2="67.0" stroke="#334155" stroke-width="1.6"/><line x1="144.0" y1="100.0" x2="171.0" y2="100.0" stroke="#334155" stroke-width="1.6"/><line x1="189.0" y1="100.0" x2="216.0" y2="100.0" stroke="#334155" stroke-width="1.6"/><line x1="225.0" y1="91.0" x2="225.0" y2="74.0" stroke="#334155" stroke-width="1.6"/><line x1="225.0" y1="109.0" x2="225.0" y2="126.0" stroke="#334155" stroke-width="1.6"/><line x1="234.0" y1="100.0" x2="261.0" y2="100.0" stroke="#334155" stroke-width="1.6"/><line x1="270.0" y1="91.0" x2="270.0" y2="74.0" stroke="#334155" stroke-width="1.6"/><line x1="270.0" y1="109.0" x2="270.0" y2="126.0" stroke="#334155" stroke-width="1.6"/><line x1="279.0" y1="100.0" x2="296.0" y2="100.0" stroke="#334155" stroke-width="1.6"/><text x="90" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="55" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="90" y="65" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="90" y="135" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="135" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="135" y="58" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#dc2626">O</text><text x="180" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#dc2626">O</text><text x="225" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="225" y="65" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="225" y="135" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="270" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="270" y="65" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="270" y="135" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="305" y="100" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="280" y="20" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a" font-weight="bold">Ethyl ethanoate, CH₃COOC₂H₅</text><line x1="372" y1="52" x2="200" y2="52" stroke="#d97706" stroke-width="1.4"/><text x="378" y="56" text-anchor="start" font-size="12" font-family="sans-serif" fill="#b45309" font-weight="bold">ester link –COO–</text><path d="M50,152 v6 h92 v-6" fill="none" stroke="#475569"/><path d="M200,152 v6 h112 v-6" fill="none" stroke="#475569"/><text x="96" y="176" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">from the acid:</text><text x="96" y="192" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">…ethanoate</text><text x="256" y="176" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">from the alcohol:</text><text x="256" y="192" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a" font-weight="bold">ethyl…</text><text x="372" y="100" text-anchor="start" font-size="12" font-family="sans-serif" fill="#334155">Name = alcohol part first,</text><text x="372" y="118" text-anchor="start" font-size="12" font-family="sans-serif" fill="#334155">then acid part (-oate)</text><text x="280" y="222" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#0f172a">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O   (conc. H₂SO₄, warm)</text></svg>`,
    diagramCaption: "The –COO– ester link joins the acid part and the alcohol part.",
    keyPoints: [
      "Carboxylic acids: –COOH; weak acids (partially ionised); vinegar is ethanoic acid.",
      "Acid + metal → salt + hydrogen; acid + carbonate → salt + water + carbon dioxide (salts are ethanoates etc.).",
      "Esterification: acid + alcohol ⇌ ester + water, concentrated sulfuric acid catalyst, warm.",
      "Ester names: alcohol part (-yl) first, acid part (-oate) second — ethyl ethanoate, methyl propanoate.",
      "Esters smell sweet/fruity: used in food flavourings and perfumes.",
      "Practical: warm in a water bath, pour into sodium carbonate solution (neutralises acid), smell by wafting.",
    ],
    whyItWorks:
      "In esterification the –OH from the acid and the H from the alcohol's –OH leave as water, and the remaining oxygen joins the two parts. Sodium carbonate removes the sharp-smelling acids so the ester's smell can be detected.",
    memoryTrick: "Ester names: \"Alcohol says hELLO first — ethYL; the acid ends it — ethanOATE\".",
    examTip:
      "Name the catalyst fully: \"concentrated sulfuric acid\" (not just \"acid\" or \"H₂SO₄\" without concentrated). In the practical, the reason for sodium carbonate is \"to neutralise the (excess) acid\". Remember water is a product of esterification.",
    thinkDeeper:
      "Why is the yield of ester never 100%, even with excess ethanol? What does the ⇌ sign tell you, and how might removing water from the mixture help?",
    workedExample: {
      problem:
        "6.0 g of ethanoic acid reacts with excess ethanol. 4.4 g of ethyl ethanoate is collected. Calculate the percentage yield. (Mr CH₃COOH = 60, Mr CH₃COOC₂H₅ = 88)",
      solution: `**Moles of acid** = 6.0 ÷ 60 = **0.10 mol**.

**Ratio** acid : ester = 1 : 1 → 0.10 mol ester.

**Theoretical mass** = 0.10 × 88 = **8.8 g**.

**Percentage yield** = 4.4 ÷ 8.8 × 100 = **50%**.`,
    },
  },
  {
    id: "organic-polymers",
    topic: "organic",
    lesson: "4CH1 4(h)",
    heading: "Synthetic polymers: addition and condensation",
    discovery: {
      problem:
        "A plastic bag can last hundreds of years in landfill, yet some polyesters made from plants can be broken down in an industrial compost heap within months. Both are long-chain polymers. What makes the difference?",
      idea:
        "Poly(ethene) is a chain of strong C–C and C–H bonds that microorganisms cannot break: it is **non-biodegradable** (inert). Polyesters contain **ester links** that can be broken down by hydrolysis, and **biopolyesters** are **biodegradable**.",
    },
    body: `A **polymer** is a very large molecule made by joining many small molecules (**monomers**) together.

**Addition polymerisation**
Monomers that contain a **C=C double bond** (alkenes) join together. The double bond **opens**, and the monomers link into a long chain. The polymer is the **only product**.

n CH₂=CH₂ → –[CH₂–CH₂]ₙ–   (ethene → poly(ethene))

| Monomer | Polymer | Uses |
|---|---|---|
| ethene CH₂=CH₂ | poly(ethene) | plastic bags, bottles |
| propene CH₂=CHCH₃ | poly(propene) | crates, ropes |
| chloroethene CH₂=CHCl | poly(chloroethene), PVC | window frames, water pipes, cable insulation |
| tetrafluoroethene CF₂=CF₂ | PTFE, poly(tetrafluoroethene) | non-stick coatings for pans |

**Drawing a repeat unit from a monomer**
1. Draw the two carbons of the C=C with a **single** bond between them.
2. Keep every other group (H, CH₃, Cl, F) in the same place, above and below.
3. Draw a bond sticking out from each carbon, through square **brackets**, and write **n** after the bracket.

**Monomer from a repeat unit**: take the two carbons inside the brackets, remove the extension bonds, and put a **C=C** between them. E.g. –[CH₂–CHCl]– comes from chloroethene, CH₂=CHCl. Repeat units always contain **two carbons in the main chain** for these polymers.

**Disposal problems.** Addition polymers are **inert** — the C–C bonds are strong and unreactive — so they are **non-biodegradable**: they stay in landfill sites for a very long time and litter harms wildlife. **Burning** them releases heat but produces **toxic gases** (e.g. **hydrogen chloride** from PVC, and carbon monoxide from incomplete combustion) as well as CO₂. Recycling saves crude oil but needs sorting.

**Condensation polymerisation (Triple)**
Two **different** monomers, each with **two functional groups**, join. Every time a link forms, a **small molecule — water — is eliminated**.
- **Polyester** = **dicarboxylic acid** (HOOC–X–COOH) + **diol** (HO–Y–OH).
- The –COOH of one monomer reacts with the –OH of the other to form an **ester link** (–COO–) and water.

n HOOC–X–COOH + n HO–Y–OH → –[OC–X–COO–Y–O]ₙ– + 2n H₂O

| | Addition | Condensation |
|---|---|---|
| Monomers | one type, with C=C | usually two types, each with two functional groups |
| Products | polymer only | polymer + water (small molecule) |
| Link | C–C backbone | ester link (polyester) |

**Biopolyesters** are polyesters made from plant (renewable) materials, and they are **biodegradable**: microorganisms can break the ester links, so they decompose. (A well-known example, PLA — poly(lactic acid) — is made from a single monomer, lactic acid, which has an –OH group and a –COOH group on the same molecule, rather than from a diacid + diol; it still has ester links and still eliminates water.)`,
    diagram: `<svg viewBox="0 0 560 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Propene monomer forming the poly(propene) repeat unit in brackets with n, and a dicarboxylic acid and a diol forming a polyester and water"><text x="280" y="18" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a" font-weight="bold">Addition polymerisation of propene</text><text x="38" y="75" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">n</text><line x1="80.0" y1="67.5" x2="105.0" y2="67.5" stroke="#334155" stroke-width="1.6"/><line x1="80.0" y1="72.5" x2="105.0" y2="72.5" stroke="#334155" stroke-width="1.6"/><line x1="70.0" y1="60.0" x2="70.0" y2="45.0" stroke="#334155" stroke-width="1.6"/><line x1="70.0" y1="80.0" x2="70.0" y2="95.0" stroke="#334155" stroke-width="1.6"/><line x1="115.0" y1="60.0" x2="115.0" y2="45.0" stroke="#334155" stroke-width="1.6"/><line x1="115.0" y1="80.0" x2="115.0" y2="95.0" stroke="#334155" stroke-width="1.6"/><text x="70" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="115" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="70" y="35" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="70" y="105" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="115" y="35" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="115" y="105" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">CH₃</text><line x1="165" y1="70" x2="227" y2="70" stroke="#334155" stroke-width="1.8"/><polygon points="235,70 225,65 225,75" fill="#334155"/><text x="200" y="60" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#334155">catalyst</text><line x1="256" y1="70" x2="296" y2="70" stroke="#334155" stroke-width="1.6"/><line x1="354" y1="70" x2="394" y2="70" stroke="#334155" stroke-width="1.6"/><line x1="315.0" y1="70.0" x2="335.0" y2="70.0" stroke="#334155" stroke-width="1.6"/><line x1="305.0" y1="60.0" x2="305.0" y2="45.0" stroke="#334155" stroke-width="1.6"/><line x1="305.0" y1="80.0" x2="305.0" y2="95.0" stroke="#334155" stroke-width="1.6"/><line x1="345.0" y1="60.0" x2="345.0" y2="45.0" stroke="#334155" stroke-width="1.6"/><line x1="345.0" y1="80.0" x2="345.0" y2="95.0" stroke="#334155" stroke-width="1.6"/><text x="305" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="345" y="70" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">C</text><text x="305" y="35" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="305" y="105" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="345" y="35" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">H</text><text x="345" y="105" text-anchor="middle" dominant-baseline="central" font-size="14" font-family="sans-serif" fill="#0f172a">CH₃</text><path d="M276,26 h-8 v90 h8" fill="none" stroke="#0f172a" stroke-width="1.8"/><path d="M374,26 h8 v90 h-8" fill="none" stroke="#0f172a" stroke-width="1.8"/><text x="392" y="122" text-anchor="middle" font-size="15" font-family="sans-serif" fill="#0f172a">n</text><text x="92" y="140" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">propene (monomer)</text><text x="325" y="140" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">poly(propene) repeat unit</text><text x="470" y="64" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">C=C opens;</text><text x="470" y="82" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#334155">no other product</text><line x1="20" y1="158" x2="540" y2="158" stroke="#cbd5e1" stroke-width="1"/><text x="280" y="182" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a" font-weight="bold">Condensation polymerisation (Triple): polyester</text><text x="280" y="208" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a">n HOOC–X–COOH  +  n HO–Y–OH</text><text x="280" y="232" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#0f172a">→  –[OC–X–COO–Y–O]n–  +  2n H₂O</text></svg>`,
    diagramCaption: "Addition: the C=C opens and only the polymer forms. Condensation: water is lost each time an ester link forms. (X and Y stand for the carbon chains.)",
    keyPoints: [
      "Addition polymers form from alkene monomers; the C=C opens; the polymer is the only product.",
      "Poly(ethene), poly(propene), poly(chloroethene) (PVC) and PTFE are addition polymers.",
      "Repeat unit: two carbons joined by a single bond, extension bonds through brackets, n.",
      "Addition polymers are inert and non-biodegradable; burning releases toxic gases (e.g. HCl from PVC).",
      "Condensation polymer (polyester): dicarboxylic acid + diol → polyester + water.",
      "Biopolyesters are biodegradable.",
    ],
    whyItWorks:
      "Microorganisms' enzymes can attack polar links such as the ester link, but not the long chain of non-polar C–C and C–H bonds in poly(ethene). That is why polyesters, especially biopolyesters, can break down and addition polymers cannot.",
    memoryTrick: "CONdensation = CONcedes water. ADDition = everything ADDs up into one product.",
    examTip:
      "In a repeat unit the carbons are joined by a SINGLE bond and the bonds must go through the brackets. Leaving the C=C in the repeat unit, or drawing the CH₃ in the main chain of poly(propene), loses the mark.",
    thinkDeeper:
      "Why can a dicarboxylic acid and a diol make a long chain, but ethanoic acid and ethanol can only make one small ester molecule?",
  },
];
