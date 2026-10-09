import type { GuideSection } from "../../types";

export const guide: GuideSection[] = [
  {
    id: "calc-formulae",
    topic: "calc",
    lesson: "4CH1 1(e) · 1(f)",
    heading: "Formulae, balanced equations & ionic equations",
    discovery: {
      problem:
        "Mix colourless barium chloride solution with colourless sodium sulfate solution and a thick white solid appears instantly. Now mix barium nitrate solution with potassium sulfate solution — exactly the same white solid, at exactly the same speed. Four different starting chemicals, one identical result. What is really reacting?",
      idea:
        "Only the barium ions and the sulfate ions. The sodium, potassium, chloride and nitrate ions just float around unchanged — they are **spectator ions**. The ionic equation Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) strips away the spectators and shows the chemistry that actually happens, which is why it is the same for every pair of solutions.",
    },
    body: `**Writing formulae from ions.** An ionic compound has no overall charge, so the positive and negative charges must cancel. Find each ion's charge, then use the smallest whole numbers that make the total zero.

| Ion type | Charge | Examples |
|---|---|---|
| Group 1 metals | +1 | Na⁺, K⁺, Li⁺ |
| Group 2 metals | +2 | Mg²⁺, Ca²⁺, Ba²⁺ |
| Group 3 | +3 | Al³⁺ |
| Group 6 / Group 7 | −2 / −1 | O²⁻, S²⁻ / Cl⁻, Br⁻ |
| Transition metals | from the Roman numeral | iron(III) = Fe³⁺, copper(II) = Cu²⁺ |
| Compound ions | learn them | NH₄⁺, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻ |

Quick method: **swap the charge numbers** to become the other ion's subscript, then simplify. Al³⁺ and SO₄²⁻ → Al₂(SO₄)₃. Put **brackets** round a compound ion when you need more than one of it: Ca(OH)₂, Mg(NO₃)₂, (NH₄)₂SO₄. Never write CaOH₂ — that means one O and two H.

**Balancing equations.** Atoms are not created or destroyed, so each element must have the same number of atoms on both sides. You may only change the **big numbers in front** (coefficients) — never the small subscripts, because that changes the substance. Balance elements that appear in only one compound first, leave elements on their own (O₂, H₂, Fe) until last, and treat a compound ion that stays intact (SO₄) as one unit.

Example: Al + O₂ → Al₂O₃. Oxygen: 2 on the left, 3 on the right → lowest common multiple 6: 3O₂ and 2Al₂O₃. Then aluminium: 4Al. So **4Al(s) + 3O₂(g) → 2Al₂O₃(s)**.

**State symbols.** (s) solid, (l) liquid, (g) gas, (aq) aqueous = dissolved in water. Water itself is **(l)**, not (aq). A **precipitate** is (s). Use the solubility rules: all nitrates and all sodium, potassium and ammonium salts are soluble (aq); BaSO₄, AgCl, AgBr, AgI, PbSO₄ and most carbonates and hydroxides are insoluble (s).

**Ionic equations.** They show only the particles that change. Method:
- Write the balanced full equation with state symbols.
- Split every **(aq) ionic compound** into its ions. Do **not** split solids, liquids (water), gases or covalent molecules.
- Cross out ions that appear **unchanged on both sides** — the spectator ions.
- Write what is left. Check that **atoms and charges both balance**.

The three ionic equations you must know:
- **Neutralisation** (any acid + any alkali): H⁺(aq) + OH⁻(aq) → H₂O(l)
- **Precipitation**, e.g. silver halide: Ag⁺(aq) + Cl⁻(aq) → AgCl(s); barium sulfate: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)
- **Metal displacement**: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) — sulfate ions are spectators

In a displacement ionic equation, check charge: left +2, right +2. Balanced.`,
    diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Criss-cross method giving Al2(SO4)3, steps for an ionic equation, and the neutralisation and precipitation ionic equations">
<rect x="0" y="0" width="560" height="250" fill="#faf5ff"/>
<text x="20" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#4c1d95">Criss-cross the charges</text>
<rect x="30" y="40" width="90" height="40" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
<text x="75" y="66" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#1e1b4b">Al³⁺</text>
<rect x="180" y="40" width="90" height="40" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
<text x="225" y="66" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#1e1b4b">SO₄²⁻</text>
<line x1="105" y1="84" x2="230" y2="118" stroke="#7c3aed" stroke-width="2"/>
<line x1="210" y1="84" x2="85" y2="118" stroke="#db2777" stroke-width="2"/>
<text x="160" y="96" font-family="sans-serif" font-size="12" fill="#7c3aed">3</text>
<text x="128" y="96" font-family="sans-serif" font-size="12" fill="#db2777">2</text>
<text x="150" y="146" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e1b4b">Al₂(SO₄)₃</text>
<text x="150" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#334155">2 × (+3) = +6    3 × (−2) = −6</text>
<rect x="315" y="36" width="230" height="140" rx="8" fill="#ffffff" stroke="#a78bfa"/>
<text x="327" y="56" font-family="sans-serif" font-size="13" font-weight="bold" fill="#4c1d95">Ionic equation in 4 steps</text>
<text x="327" y="80" font-family="sans-serif" font-size="12" fill="#1e293b">1. Balanced full equation</text>
<text x="327" y="102" font-family="sans-serif" font-size="12" fill="#1e293b">2. Split (aq) ionic compounds</text>
<text x="327" y="124" font-family="sans-serif" font-size="12" fill="#1e293b">3. Cross out spectator ions</text>
<text x="327" y="146" font-family="sans-serif" font-size="12" fill="#1e293b">4. Check atoms AND charges</text>
<text x="327" y="166" font-family="sans-serif" font-size="11" fill="#64748b">Never split (s), (l), (g)</text>
<rect x="15" y="190" width="530" height="50" rx="8" fill="#ede9fe"/>
<text x="30" y="210" font-family="sans-serif" font-size="12" fill="#1e1b4b">Neutralisation:  H⁺(aq) + OH⁻(aq) → H₂O(l)</text>
<text x="30" y="230" font-family="sans-serif" font-size="12" fill="#1e1b4b">Precipitation:  Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)     spectators: Na⁺, Cl⁻</text>
</svg>`,
    diagramCaption:
      "Swap the charge numbers to get the formula; for an ionic equation, split only the dissolved ionic compounds and cancel the spectators.",
    keyPoints: [
      "Ionic formulae: total positive charge = total negative charge; use brackets for more than one compound ion, e.g. Ca(NO₃)₂, Al₂(SO₄)₃.",
      "Balance with coefficients only — never change a subscript in a formula.",
      "State symbols: (s), (l), (g), (aq). Water is (l); a precipitate is (s).",
      "Neutralisation ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l), the same for every acid + alkali.",
      "Spectator ions are present but unchanged — they appear identically on both sides and are left out of the ionic equation.",
      "An ionic equation must balance in atoms AND in charge.",
    ],
    whyItWorks:
      "In solution an ionic compound is already separated into free ions, so writing 'NaCl(aq)' really means Na⁺(aq) and Cl⁻(aq) moving independently. Only ions that join into a solid, a covalent molecule (like water) or a gas, or that gain or lose electrons, actually change — everything else is a bystander.",
    memoryTrick:
      "For ionic equations: 'Split the soluble, keep the solid' — only (aq) ionic compounds get split into ions.",
    examTip:
      "Mark schemes award a separate mark for correct state symbols in ionic equations, and give no credit if a spectator ion is left in. Also check charge: Ag⁺ + Cl⁻ → AgCl balances (0 = 0), but Cu²⁺ + Zn → Cu + Zn⁺ does not.",
    thinkDeeper:
      "Hydrochloric acid reacting with solid calcium carbonate has ionic equation 2H⁺(aq) + CaCO₃(s) → Ca²⁺(aq) + H₂O(l) + CO₂(g). Why is CaCO₃ not split into Ca²⁺ and CO₃²⁻ here, when CaCl₂ on the right IS split?",
    workedExample: {
      problem:
        "Barium chloride solution is added to sodium sulfate solution and a white precipitate forms. Write (a) the balanced equation with state symbols, (b) the ionic equation, and (c) name the spectator ions.",
      solution: `**(a)** Ions: Ba²⁺ and Cl⁻ → BaCl₂; Na⁺ and SO₄²⁻ → Na₂SO₄. Products swap partners: BaSO₄ (insoluble → s) and NaCl (soluble → aq).

BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)

**(b)** Split the (aq) compounds:
Ba²⁺(aq) + 2Cl⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2Na⁺(aq) + 2Cl⁻(aq)

Cancel what is unchanged on both sides:
**Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)**
Check charge: (+2) + (−2) = 0 on the left; 0 on the right. ✓

**(c)** Spectator ions: **sodium ions, Na⁺, and chloride ions, Cl⁻**.`,
    },
  },
  {
    id: "calc-moles",
    topic: "calc",
    lesson: "4CH1 1(e) · Triple (water of crystallisation)",
    heading: "Moles, Avogadro, reacting masses, % yield & formulae",
    discovery: {
      problem:
        "In Q1 of your teacher's paper, 9.75 g of zinc gives a maximum of about 45 g of hydrated zinc nitrate — the product is over four times heavier than the zinc. Where does all that extra mass come from, and how can you predict it before doing the experiment?",
      idea:
        "Count particles, not grams. 9.75 g of zinc is 0.150 mol of zinc atoms. The equation says 1 Zn gives 1 Zn(NO₃)₂·6H₂O, so you get 0.150 mol of product — and each mole of product weighs 297 g because it also carries nitrate ions from the acid and six water molecules. 0.150 × 297 = 44.55 g. The **mole** turns a balanced equation into a recipe in grams.",
    },
    body: `**Ar and Mr.** The **relative atomic mass, Ar**, is the average mass of an atom of an element compared with 1/12 of the mass of a carbon-12 atom. The **relative formula mass, Mr**, is the sum of the Ar values of all the atoms in the formula. Multiply out brackets, and for a **hydrated salt** the dot means *add* the water:

| Substance | Working | Mr |
|---|---|---|
| Ca(OH)₂ | 40 + 2 × (16 + 1) | 74 |
| CuSO₄·5H₂O | 63.5 + 32 + 4 × 16 + 5 × 18 | 249.5 |
| Zn(NO₃)₂·6H₂O | 65 + 2 × (14 + 48) + 6 × 18 | 297 |
| MgSO₄·7H₂O | 24 + 32 + 64 + 7 × 18 | 246 |

**The mole.** One mole of a substance is its Mr in grams. So **moles = mass ÷ Mr** (and mass = moles × Mr).

**Avogadro's constant.** One mole of any substance contains **6.02 × 10²³ particles** (atoms, molecules or ions — whichever the formula is made of). This number is **Avogadro's constant**, and it is how the mole is defined. So **number of particles = moles × 6.02 × 10²³**. Read carefully *which* particle is asked for:
- 1 mol of H₂O contains 6.02 × 10²³ **molecules** but 3 × 6.02 × 10²³ = 1.806 × 10²⁴ **atoms** (2 H + 1 O in each molecule).
- 1 mol of oxygen gas, O₂, is 6.02 × 10²³ molecules but 1.204 × 10²⁴ oxygen **atoms**.
- 0.5 mol of CaCl₂ contains 0.5 × 6.02 × 10²³ = 3.01 × 10²³ formula units, so 3.01 × 10²³ Ca²⁺ ions and 6.02 × 10²³ Cl⁻ ions.

Going backwards: moles = number of particles ÷ 6.02 × 10²³. Because the mole is a *count*, equal numbers of moles of any two substances contain equal numbers of particles — 12 g of carbon and 24 g of magnesium both contain 6.02 × 10²³ atoms.

**Percentage by mass of an element in a compound** = (Ar × number of atoms of that element in the formula) ÷ Mr × 100. Example: % N in ammonium nitrate, NH₄NO₃ (Mr 80): (2 × 14) ÷ 80 × 100 = **35%**. Don't forget to multiply by the number of atoms — NH₄NO₃ has *two* nitrogens. The same idea gives the % by mass of water in a hydrated salt.

**Reacting masses — always three steps:**
- Moles of what you know: mass ÷ Mr.
- **Use the mole ratio** from the balanced equation.
- Convert moles of what you want back to mass: moles × Mr.

**"Show that" questions** give you the answer, so the marks are for the **working**. Show every step and give your answer to **more significant figures** than the value quoted (44.55 g, not "45 g").

**Limiting reactant.** The reactant that is completely used up limits how much product forms; the other is **in excess**. Work out the moles of each, divide by its number in the equation, and the smaller one is limiting. Always calculate product from the **limiting** reactant.

**Percentage yield** = (actual yield ÷ theoretical yield) × 100. Yields are below 100% because: the reaction may be **reversible** or incomplete; product is **lost** when filtering, transferring or washing; some product **stays dissolved** in the solution (crystals never all come out); or there are **side reactions**.

**Empirical formula** = the simplest whole-number ratio of atoms. Method: mass (or %) of each element → divide by Ar → divide all by the smallest → round to whole numbers (if you get 1.5, double everything). Two practicals give you the masses for a **metal oxide**:
- **By combustion** (e.g. magnesium oxide): heat a weighed piece of magnesium in a lidded crucible, lifting the lid occasionally to let air in (but not let MgO smoke escape), until the mass is constant. Mass of oxygen = mass gained.
- **By reduction** (e.g. copper(II) oxide): heat a weighed sample of copper(II) oxide in a tube in a stream of a reducing gas (hydrogen or methane), burning off the excess gas at the end, until the mass is constant; let it cool in the gas so the copper is not re-oxidised. Mass of oxygen = mass **lost**; what is left is copper.

**Molecular formula** = the actual number of atoms in one molecule. Divide Mr by the empirical formula mass and multiply the empirical formula by that whole number. CH₂ (14) with Mr 56 → ×4 → C₄H₈.

**Water of crystallisation (Triple).** Heat a weighed hydrated salt in a crucible **to constant mass** (so that all the water has been driven off). Then: mass of water = mass before − mass after. Find moles of anhydrous salt and moles of water; **x = moles of water ÷ moles of anhydrous salt**.`,
    diagram: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reacting-mass road map from mass of A to moles of A to moles of B to mass of B, plus the mass, moles and Mr triangle">
<rect x="0" y="0" width="560" height="260" fill="#faf5ff"/>
<rect x="15" y="35" width="130" height="46" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
<text x="80" y="63" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#1e1b4b">Mass of A (g)</text>
<rect x="215" y="35" width="130" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="280" y="63" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e1b4b">Moles of A</text>
<rect x="415" y="35" width="130" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
<text x="480" y="63" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e1b4b">Moles of B</text>
<rect x="415" y="140" width="130" height="46" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
<text x="480" y="168" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#1e1b4b">Mass of B (g)</text>
<line x1="147" y1="58" x2="207" y2="58" stroke="#4c1d95" stroke-width="2"/>
<polygon points="213,58 205,53 205,63" fill="#4c1d95"/>
<text x="180" y="26" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#4c1d95">÷ Mr of A</text>
<line x1="347" y1="58" x2="407" y2="58" stroke="#4c1d95" stroke-width="2"/>
<polygon points="413,58 405,53 405,63" fill="#4c1d95"/>
<text x="380" y="26" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#4c1d95">× mole ratio</text>
<line x1="480" y1="83" x2="480" y2="132" stroke="#4c1d95" stroke-width="2"/>
<polygon points="480,138 475,130 485,130" fill="#4c1d95"/>
<text x="472" y="114" font-family="sans-serif" font-size="12" text-anchor="end" fill="#4c1d95">× Mr of B</text>
<polygon points="95,110 30,235 160,235" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
<line x1="56" y1="185" x2="134" y2="185" stroke="#7c3aed" stroke-width="2"/>
<line x1="95" y1="185" x2="95" y2="235" stroke="#7c3aed" stroke-width="2"/>
<text x="95" y="172" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e1b4b">mass</text>
<text x="72" y="220" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1e1b4b">moles</text>
<text x="120" y="220" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1e1b4b">Mr</text>
<rect x="190" y="200" width="355" height="44" rx="8" fill="#ede9fe"/>
<text x="367" y="219" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1e1b4b">% yield = actual ÷ theoretical × 100</text>
<text x="367" y="236" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1e1b4b">x (water) = moles H₂O ÷ moles anhydrous salt</text>
</svg>`,
    diagramCaption:
      "Every reacting-mass problem is the same road: grams → moles → (mole ratio) → moles → grams. Cover the quantity you want in the triangle.",
    keyPoints: [
      "Mr = sum of Ar values; for a hydrated salt add the water, e.g. CuSO₄·5H₂O = 159.5 + 90 = 249.5.",
      "moles = mass ÷ Mr; mass = moles × Mr.",
      "One mole contains 6.02 × 10²³ particles (Avogadro's constant): number of particles = moles × 6.02 × 10²³ — multiply again by the atoms per molecule if atoms are asked for.",
      "% by mass of an element = (Ar × number of those atoms) ÷ Mr × 100.",
      "Reacting masses: moles of known → mole ratio from the equation → mass of unknown.",
      "The limiting reactant is completely used up and decides the amount of product; the other reactant is in excess.",
      "% yield = actual ÷ theoretical × 100; it is below 100% because of incomplete/reversible reactions, losses on transfer or filtration, product left in solution, side reactions.",
      "Empirical formula: divide mass or % by Ar, divide by the smallest, make whole numbers. Molecular formula: multiply by Mr ÷ empirical formula mass. Metal oxide practicals: combustion of Mg (mass gained = O) or reduction of CuO (mass lost = O).",
      "Water of crystallisation: heat to constant mass; x = moles of water ÷ moles of anhydrous salt.",
    ],
    whyItWorks:
      "A balanced equation counts particles, and equal numbers of moles contain equal numbers of particles. Grams cannot be compared directly because different atoms have different masses — converting to moles puts everything on the same 'counting' scale.",
    memoryTrick:
      "'Mass to moles, ratio, moles to mass' — MRM. And for % yield: 'what you GOT over what you SHOULD have got' (small over big, so never above 100%).",
    examTip:
      "Examiners give method marks for moles and for the ratio even if the final answer is wrong — so write every step with labels ('moles of Zn = 9.75 ÷ 65 = 0.150'). In a 'show that', a bare final number scores nothing. Never round in the middle of a calculation; round only the final answer (usually 3 significant figures).",
    thinkDeeper:
      "A student heats hydrated copper(II) sulfate but stops before the mass is constant. Will her value of x be too high or too low? Explain by following the effect through each step of the calculation.",
    workedExample: {
      problem:
        "Mg(s) + H₂SO₄(aq) + 7H₂O(l) → MgSO₄·7H₂O(s) + H₂(g). (a) 2.40 g of magnesium reacts completely. Show that the maximum mass of hydrated magnesium sulfate is about 25 g. [Mr of MgSO₄·7H₂O = 246] (b) The student obtains 19.7 g of crystals. Calculate the percentage yield. (c) In another experiment, 4.92 g of MgSO₄·xH₂O is heated to constant mass, leaving 2.40 g of MgSO₄. Find x. (d) How many magnesium atoms are in 2.40 g of magnesium, and what is the percentage by mass of magnesium in MgSO₄? [Avogadro's constant = 6.02 × 10²³ /mol]",
      solution: `**(a)** Moles of Mg = 2.40 ÷ 24 = **0.100 mol**
Mole ratio Mg : MgSO₄·7H₂O = 1 : 1 → 0.100 mol of product
Mass = 0.100 × 246 = **24.6 g** (≈ 25 g) ✓

**(b)** % yield = 19.7 ÷ 24.6 × 100 = **80.1%**

**(c)** Mass of water = 4.92 − 2.40 = 2.52 g
Moles of MgSO₄ (Mr 120) = 2.40 ÷ 120 = 0.0200 mol
Moles of H₂O (Mr 18) = 2.52 ÷ 18 = 0.140 mol
x = 0.140 ÷ 0.0200 = **7**, so the formula is MgSO₄·7H₂O.

**(d)** Atoms of Mg = 0.100 × 6.02 × 10²³ = **6.02 × 10²²**
% Mg in MgSO₄ = 24 ÷ 120 × 100 = **20%**`,
    },
  },
  {
    id: "calc-volumes",
    topic: "calc",
    lesson: "4CH1 1(e) · Triple (titration calculations)",
    heading: "Gas volumes, concentrations & titration calculations",
    discovery: {
      problem:
        "A balloon holding 2 g of hydrogen and a balloon holding 44 g of carbon dioxide, both at room temperature and pressure, are blown up to exactly the same size. How can 22 times more mass take up the same space?",
      idea:
        "Both contain **1 mole** of gas. In a gas the molecules are so far apart that their own size hardly matters — the volume depends only on how many particles there are. At room temperature and pressure (rtp), **one mole of any gas occupies 24 dm³**.",
    },
    body: `**Molar gas volume.** At rtp, 1 mol of any gas = **24 dm³ = 24 000 cm³**.
- volume of gas (dm³) = moles × 24
- moles = volume (dm³) ÷ 24, or volume (cm³) ÷ 24 000

Because volume is proportional to moles, for reacting **gases** the **volume ratio = mole ratio**. In 2H₂(g) + O₂(g) → 2H₂O(l), 50 cm³ of hydrogen needs exactly 25 cm³ of oxygen.

**Gas volume from a mass (and back).** Combine the reacting-mass road with the 24: mass → moles (÷ Mr) → mole ratio → moles of gas → × 24. Example: 1.20 g Mg with excess acid. Mg + 2HCl → MgCl₂ + H₂. Moles Mg = 1.20 ÷ 24 = 0.0500; ratio 1 : 1 → 0.0500 mol H₂; volume = 0.0500 × 24 = **1.20 dm³ (1200 cm³)**.

**Units: cm³ → dm³.** 1 dm³ = 1000 cm³, so **divide cm³ by 1000**. 25.0 cm³ = 0.0250 dm³. Forgetting this is the most common error in the whole topic — your answer comes out 1000 times too big or too small.

**Concentration** is the amount of solute in 1 dm³ of solution:
- concentration (mol/dm³) = moles ÷ volume (dm³)
- concentration (g/dm³) = mass (g) ÷ volume (dm³)
- **g/dm³ = mol/dm³ × Mr** (and mol/dm³ = g/dm³ ÷ Mr)

Example: 2.00 g of NaOH dissolved to make 250 cm³ of solution → 2.00 ÷ 0.250 = 8.00 g/dm³; moles = 2.00 ÷ 40 = 0.0500 mol, so 0.0500 ÷ 0.250 = **0.200 mol/dm³**.

**Titration calculations (Triple).** You know the volume and concentration of one solution (usually the acid in the burette), and the volume of the other (the 25.0 cm³ from the pipette). Use the **mean of the concordant titres** (those within 0.20 cm³ of each other — ignore the rough and any anomalous ones). Then:
- moles of known = concentration × (volume ÷ 1000)
- **use the mole ratio** from the equation
- concentration of unknown = moles ÷ (its volume ÷ 1000)

| Reaction | Ratio acid : alkali |
|---|---|
| HCl + NaOH → NaCl + H₂O | 1 : 1 |
| HNO₃ + KOH → KNO₃ + H₂O | 1 : 1 |
| H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O | 1 : 2 |

Sulfuric acid is **diprotic** — each H₂SO₄ releases two H⁺ ions, so it neutralises **two** OH⁻. Get the ratio the wrong way round and the answer is out by a factor of 4.

Give answers to **3 significant figures** (the data are usually to 3 s.f.) with units.`,
    diagram: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moles hub: mass connected by Mr, gas volume connected by 24, solution connected by concentration times volume in dm3, and cm3 divided by 1000 to give dm3">
<rect x="0" y="0" width="560" height="280" fill="#faf5ff"/>
<circle cx="280" cy="135" r="48" fill="#7c3aed"/>
<text x="280" y="140" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#ffffff">MOLES</text>
<rect x="15" y="110" width="130" height="50" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
<text x="80" y="140" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#1e1b4b">Mass (g)</text>
<line x1="147" y1="125" x2="228" y2="125" stroke="#4c1d95" stroke-width="2"/>
<polygon points="232,125 224,120 224,130" fill="#4c1d95"/>
<text x="188" y="117" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#4c1d95">÷ Mr</text>
<line x1="228" y1="147" x2="151" y2="147" stroke="#db2777" stroke-width="2"/>
<polygon points="147,147 155,142 155,152" fill="#db2777"/>
<text x="188" y="166" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#db2777">× Mr</text>
<rect x="415" y="110" width="130" height="50" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
<text x="480" y="132" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#1e1b4b">Gas volume</text>
<text x="480" y="150" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1e1b4b">(dm³ at rtp)</text>
<line x1="413" y1="125" x2="332" y2="125" stroke="#4c1d95" stroke-width="2"/>
<polygon points="328,125 336,120 336,130" fill="#4c1d95"/>
<text x="372" y="117" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#4c1d95">÷ 24</text>
<line x1="332" y1="147" x2="409" y2="147" stroke="#db2777" stroke-width="2"/>
<polygon points="413,147 405,142 405,152" fill="#db2777"/>
<text x="372" y="166" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#db2777">× 24</text>
<rect x="150" y="212" width="260" height="56" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
<text x="280" y="236" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#1e1b4b">Solution</text>
<text x="280" y="256" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#1e1b4b">moles = conc (mol/dm³) × vol (dm³)</text>
<line x1="280" y1="185" x2="280" y2="210" stroke="#4c1d95" stroke-width="2"/>
<rect x="170" y="18" width="220" height="46" rx="8" fill="#fef3c7" stroke="#d97706"/>
<text x="280" y="38" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#78350f">cm³ ÷ 1000 = dm³</text>
<text x="280" y="56" font-family="sans-serif" font-size="11" text-anchor="middle" fill="#78350f">24 dm³ = 24 000 cm³</text>
<text x="430" y="230" font-family="sans-serif" font-size="12" fill="#334155">g/dm³ =</text>
<text x="430" y="248" font-family="sans-serif" font-size="12" fill="#334155">mol/dm³ × Mr</text>
</svg>`,
    diagramCaption:
      "Moles is the hub: get there from a mass (÷ Mr), a gas volume (÷ 24) or a solution (conc × volume in dm³), then use the mole ratio.",
    keyPoints: [
      "At rtp, 1 mol of any gas occupies 24 dm³ (24 000 cm³): volume = moles × 24.",
      "For reacting gases, volume ratio = mole ratio from the equation.",
      "Divide cm³ by 1000 to get dm³ before using concentration.",
      "Concentration (mol/dm³) = moles ÷ volume (dm³); g/dm³ = mol/dm³ × Mr.",
      "Titration: moles of known = conc × titre/1000 → mole ratio → conc of unknown = moles ÷ (25.0/1000).",
      "Use only concordant titres (within 0.20 cm³) for the mean titre.",
      "H₂SO₄ + 2NaOH: moles of NaOH = 2 × moles of H₂SO₄.",
    ],
    whyItWorks:
      "Gas particles are tiny compared with the spaces between them, so a mole of any gas fills the same volume at the same temperature and pressure. A concentration is just 'moles per dm³', so multiplying it by a volume in dm³ gives back moles — the same counting unit the equation uses.",
    memoryTrick:
      "'cm³ to dm³? Divide by a thousand, then you're sound.' For titrations: 'C × V, ratio, ÷ V'.",
    examTip:
      "In titration calculations Edexcel gives one mark each for moles of the known solution, using the ratio, and the final concentration. Write units on every line and show the ÷ 1000 explicitly (21.40 ÷ 1000 = 0.02140 dm³). Use the mean titre you calculated — not the rough titre.",
    thinkDeeper:
      "A student uses 0.100 mol/dm³ sulfuric acid instead of 0.100 mol/dm³ nitric acid to neutralise the same 25.0 cm³ of sodium hydroxide. Predict the new titre without doing a full calculation, and explain your reasoning in terms of H⁺ ions.",
    workedExample: {
      problem:
        "(a) 25.0 cm³ of sodium hydroxide solution is neutralised by a mean titre of 21.40 cm³ of 0.100 mol/dm³ nitric acid. HNO₃ + NaOH → NaNO₃ + H₂O. Calculate the concentration of the sodium hydroxide in mol/dm³ and in g/dm³. (b) In a second titration, 25.0 cm³ of a different NaOH solution needs 18.60 cm³ of 0.0500 mol/dm³ sulfuric acid. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate its concentration.",
      solution: `**(a)** Moles HNO₃ = 0.100 × (21.40 ÷ 1000) = **0.00214 mol**
Ratio HNO₃ : NaOH = 1 : 1 → moles NaOH = 0.00214 mol
Concentration NaOH = 0.00214 ÷ (25.0 ÷ 1000) = 0.00214 ÷ 0.0250 = **0.0856 mol/dm³**
In g/dm³: Mr NaOH = 23 + 16 + 1 = 40 → 0.0856 × 40 = **3.42 g/dm³**

**(b)** Moles H₂SO₄ = 0.0500 × (18.60 ÷ 1000) = 0.000930 mol
Ratio H₂SO₄ : NaOH = 1 : 2 → moles NaOH = 2 × 0.000930 = **0.00186 mol**
Concentration NaOH = 0.00186 ÷ 0.0250 = **0.0744 mol/dm³**

Check: if you had used a 1 : 1 ratio you would get 0.0372 — half the true value.`,
    },
  },
];
