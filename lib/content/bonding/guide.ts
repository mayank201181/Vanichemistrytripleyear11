import type { GuideSection } from "../../types";

const NACL_SVG = `<svg viewBox="0 0 460 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot-and-cross diagram of sodium chloride: a sodium ion with eight crosses in its outer shell inside square brackets with a plus charge, and a chloride ion with seven dots and one cross inside square brackets with a minus charge">
<text x="230" y="20" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#334155">Sodium chloride, NaCl (outer shells only)</text>
<circle cx="115" cy="110" r="48" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="115" y="115" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#7c2d12">Na</text>
<text x="107" y="66" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="123" y="66" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="107" y="162" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="123" y="162" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="67" y="106" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="67" y="122" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="163" y="106" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<text x="163" y="122" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<polyline points="60,52 50,52 50,168 60,168" fill="none" stroke="#334155" stroke-width="2"/>
<polyline points="170,52 180,52 180,168 170,168" fill="none" stroke="#334155" stroke-width="2"/>
<text x="190" y="56" font-family="sans-serif" font-size="16" fill="#334155">+</text>
<circle cx="330" cy="110" r="48" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="330" y="115" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#14532d">Cl</text>
<circle cx="322" cy="62" r="3.5" fill="#15803d"/>
<circle cx="338" cy="62" r="3.5" fill="#15803d"/>
<circle cx="322" cy="158" r="3.5" fill="#15803d"/>
<circle cx="338" cy="158" r="3.5" fill="#15803d"/>
<circle cx="282" cy="102" r="3.5" fill="#15803d"/>
<circle cx="282" cy="118" r="3.5" fill="#15803d"/>
<circle cx="378" cy="102" r="3.5" fill="#15803d"/>
<text x="378" y="122" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#b45309">×</text>
<polyline points="275,52 265,52 265,168 275,168" fill="none" stroke="#334155" stroke-width="2"/>
<polyline points="385,52 395,52 395,168 385,168" fill="none" stroke="#334155" stroke-width="2"/>
<text x="404" y="56" font-family="sans-serif" font-size="18" fill="#334155">−</text>
<text x="115" y="195" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#334155">Na⁺ ion: 2,8</text>
<text x="330" y="195" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#334155">Cl⁻ ion: 2,8,8</text>
<text x="230" y="222" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#334155">× = electron from sodium    • = electron from chlorine</text>
</svg>`;

const CO2_SVG = `<svg viewBox="0 0 400 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot-and-cross diagram of carbon dioxide: three overlapping circles O, C, O. Each overlap contains two dots and two crosses (a double bond). Each oxygen also has two lone pairs of dots">
<circle cx="100" cy="105" r="65" fill="none" stroke="#dc2626" stroke-width="2"/>
<circle cx="200" cy="105" r="65" fill="none" stroke="#334155" stroke-width="2"/>
<circle cx="300" cy="105" r="65" fill="none" stroke="#dc2626" stroke-width="2"/>
<text x="90" y="111" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#991b1b">O</text>
<text x="200" y="111" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#0f172a">C</text>
<text x="310" y="111" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#991b1b">O</text>
<circle cx="143" cy="93" r="3.5" fill="#dc2626"/>
<circle cx="143" cy="117" r="3.5" fill="#dc2626"/>
<text x="157" y="97" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0f172a">×</text>
<text x="157" y="121" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0f172a">×</text>
<text x="243" y="97" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0f172a">×</text>
<text x="243" y="121" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0f172a">×</text>
<circle cx="257" cy="93" r="3.5" fill="#dc2626"/>
<circle cx="257" cy="117" r="3.5" fill="#dc2626"/>
<circle cx="92" cy="40" r="3.5" fill="#dc2626"/>
<circle cx="108" cy="40" r="3.5" fill="#dc2626"/>
<circle cx="92" cy="170" r="3.5" fill="#dc2626"/>
<circle cx="108" cy="170" r="3.5" fill="#dc2626"/>
<circle cx="292" cy="40" r="3.5" fill="#dc2626"/>
<circle cx="308" cy="40" r="3.5" fill="#dc2626"/>
<circle cx="292" cy="170" r="3.5" fill="#dc2626"/>
<circle cx="308" cy="170" r="3.5" fill="#dc2626"/>
<text x="200" y="203" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#334155">• = electron from oxygen    × = electron from carbon</text>
<text x="200" y="222" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#334155">O=C=O: each overlap holds 2 shared pairs (a double bond)</text>
</svg>`;

const METAL_SVG = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metallic bonding in copper: a regular lattice of positive copper ions in rows (layers) surrounded by a sea of delocalised electrons">
<rect x="20" y="20" width="290" height="210" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
<circle cx="65" cy="60" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="135" cy="60" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="205" cy="60" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="275" cy="60" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="65" cy="125" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="135" cy="125" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="205" cy="125" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="275" cy="125" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="65" cy="190" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="135" cy="190" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="205" cy="190" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<circle cx="275" cy="190" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<text x="65" y="65" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="135" y="65" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="205" y="65" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="275" y="65" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="65" y="130" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="135" y="130" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="205" y="130" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="275" y="130" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="65" y="195" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="135" y="195" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="205" y="195" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<text x="275" y="195" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#7c2d12">Cu²⁺</text>
<circle cx="100" cy="92" r="4" fill="#1d4ed8"/>
<circle cx="170" cy="92" r="4" fill="#1d4ed8"/>
<circle cx="240" cy="92" r="4" fill="#1d4ed8"/>
<circle cx="300" cy="92" r="4" fill="#1d4ed8"/>
<circle cx="35" cy="92" r="4" fill="#1d4ed8"/>
<circle cx="100" cy="157" r="4" fill="#1d4ed8"/>
<circle cx="170" cy="157" r="4" fill="#1d4ed8"/>
<circle cx="240" cy="157" r="4" fill="#1d4ed8"/>
<circle cx="35" cy="160" r="4" fill="#1d4ed8"/>
<circle cx="300" cy="160" r="4" fill="#1d4ed8"/>
<circle cx="100" cy="35" r="4" fill="#1d4ed8"/>
<circle cx="240" cy="35" r="4" fill="#1d4ed8"/>
<circle cx="170" cy="218" r="4" fill="#1d4ed8"/>
<circle cx="100" cy="218" r="4" fill="#1d4ed8"/>
<line x1="299" y1="60" x2="320" y2="60" stroke="#334155" stroke-width="1.2"/>
<text x="324" y="56" font-family="sans-serif" font-size="12" fill="#334155">positive metal</text>
<text x="324" y="71" font-family="sans-serif" font-size="12" fill="#334155">ion (cation)</text>
<line x1="304" y1="94" x2="320" y2="106" stroke="#334155" stroke-width="1.2"/>
<text x="324" y="110" font-family="sans-serif" font-size="12" fill="#334155">delocalised</text>
<text x="324" y="125" font-family="sans-serif" font-size="12" fill="#334155">electron (free</text>
<text x="324" y="140" font-family="sans-serif" font-size="12" fill="#334155">to move)</text>
<text x="324" y="180" font-family="sans-serif" font-size="12" fill="#334155">strong electrostatic</text>
<text x="324" y="195" font-family="sans-serif" font-size="12" fill="#334155">attraction between</text>
<text x="324" y="210" font-family="sans-serif" font-size="12" fill="#334155">ions and electrons</text>
</svg>`;

export const guide: GuideSection[] = [
  {
    id: "bonding-ionic",
    topic: "bonding",
    lesson: "4CH1 1(f)",
    heading: "Ionic bonding: electron transfer and giant ionic lattices",
    discovery: {
      problem:
        "Table salt melts at 801 °C, yet a pinch of it dissolved in water lets a circuit light a bulb, while a solid salt crystal will not. Same particles, same compound — so what changes when it dissolves or melts?",
      idea:
        "Salt is made of charged particles — ions — locked in a lattice by strong electrostatic forces. In the solid they are stuck in place; once melted or dissolved they are free to move, and moving charges are an electric current.",
    },
    body: `An **ionic bond** forms when a **metal** reacts with a **non-metal**. The metal atom **loses** its outer-shell electron(s) and the non-metal atom **gains** them, so **electrons are transferred**. Both particles end up with a **full outer shell** (the electronic configuration of a noble gas) but now carry a charge: metals form **positive ions (cations)**, non-metals form **negative ions (anions)**.

**Ion charge from the group number**

| Group | 1 | 2 | 3 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Electrons lost/gained | lose 1 | lose 2 | lose 3 | gain 3 | gain 2 | gain 1 |
| Ion | Na⁺, K⁺ | Mg²⁺, Ca²⁺ | Al³⁺ | N³⁻ | O²⁻, S²⁻ | Cl⁻, Br⁻ |

Non-metal ions take the ending **-ide** (oxide, chloride, nitride). Transition metal charges are given by Roman numerals: iron(II) = Fe²⁺, iron(III) = Fe³⁺. Learn also Cu²⁺, Zn²⁺, Ag⁺ and Pb²⁺.

**Compound ions** (groups of atoms carrying an overall charge) must be learnt:

| Ion | Formula |
|---|---|
| ammonium | NH₄⁺ |
| hydroxide | OH⁻ |
| nitrate | NO₃⁻ |
| sulfate | SO₄²⁻ |
| carbonate | CO₃²⁻ |

**Deducing formulae.** A compound has no overall charge, so the total positive charge must cancel the total negative charge. Calcium (Ca²⁺) and chloride (Cl⁻) need two chlorides: **CaCl₂**. Aluminium (Al³⁺) and oxide (O²⁻): lowest common multiple 6, so **Al₂O₃**. When you need more than one compound ion, put it in **brackets**: Ca(OH)₂, Mg(NO₃)₂, (NH₄)₂SO₄, Al₂(SO₄)₃.

**Dot-and-cross diagrams.** Show only the outer shells (unless asked for all). Use crosses for electrons that came from the metal and dots for the non-metal's own electrons, put each ion in **square brackets** and write the **charge at the top right**. The metal ion is drawn with an empty or full (2,8) outer shell; the non-metal ion has 8 outer electrons, one or more of them a cross. For magnesium oxide: Mg (2,8,2) → Mg²⁺ (2,8); O (2,6) → O²⁻ (2,8) with two crosses.

**Giant ionic lattice.** In the solid the ions are arranged in a regular, repeating three-dimensional pattern of alternating positive and negative ions. In sodium chloride each Na⁺ is surrounded by six Cl⁻ ions and vice versa. The **ionic bond** is the **strong electrostatic attraction between oppositely charged ions**, and it acts **in all directions** throughout the lattice.

**Properties**
- **High melting and boiling points** — there are very many strong electrostatic forces between oppositely charged ions, so a lot of energy is needed to overcome them. Ions with bigger charges attract more strongly: MgO (2+/2−) melts at about 2850 °C, NaCl (1+/1−) at 801 °C.
- **Electrical conductivity** — solids do **not** conduct because the ions are held in fixed positions and cannot move. When **molten** or **dissolved in water (aqueous)** the **ions are free to move** and carry the charge. (No electrons move through an ionic compound — that is metals and graphite.)
- Many ionic compounds are soluble in water, and they are hard but brittle.`,
    diagram: NACL_SVG,
    diagramCaption:
      "Dot-and-cross diagram for NaCl. Sodium's single outer electron (×) has been transferred to chlorine. Both ions now have full outer shells; brackets and charges are essential for the mark.",
    keyPoints: [
      "Ionic bonding: electrons are transferred from metal atoms to non-metal atoms, forming positive and negative ions with full outer shells.",
      "An ionic bond is the strong electrostatic attraction between oppositely charged ions.",
      "Group 1 → 1+, group 2 → 2+, group 3 → 3+, group 5 → 3−, group 6 → 2−, group 7 → 1−.",
      "Compound ions: NH₄⁺, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻ — balance charges and use brackets, e.g. (NH₄)₂SO₄.",
      "Giant ionic lattice → high melting point because many strong electrostatic forces in all directions need a lot of energy to overcome.",
      "Ionic compounds conduct only when molten or in aqueous solution, because then the ions are free to move and carry charge.",
    ],
    whyItWorks:
      "Opposite charges attract, and in a lattice every ion is surrounded by ions of the opposite charge, so the attraction acts in every direction. Breaking the lattice apart means overcoming millions of these attractions — hence the high melting point. Conduction needs mobile charged particles, and in an ionic compound those particles are the ions themselves.",
    memoryTrick:
      "\"Metals Lose, Non-metals Gain\" (MLNG). And for conduction: Solid = Stuck; Molten or Mixed with water = Mobile.",
    examTip:
      "Edexcel mark schemes reward \"strong electrostatic attraction between oppositely charged ions\" — writing \"strong ionic bonds\" alone usually scores less, and any mention of \"intermolecular forces\" or \"molecules\" in an ionic compound loses the mark. For conductivity, say the IONS are free to move; \"electrons move\" scores zero.",
    thinkDeeper:
      "Magnesium oxide and sodium fluoride have the same lattice arrangement and similar-sized ions, yet MgO melts about 1800 °C higher. Use the charges on the ions to explain why. Then predict which conducts better when molten, and justify it.",
    workedExample: {
      problem:
        "Deduce the formulae of (a) aluminium sulfate, (b) ammonium carbonate, (c) magnesium nitride.",
      solution: `**(a)** Al³⁺ and SO₄²⁻. Lowest common multiple of 3 and 2 is 6 → 2 × Al³⁺ (+6) and 3 × SO₄²⁻ (−6) → **Al₂(SO₄)₃**.

**(b)** NH₄⁺ and CO₃²⁻ → 2 × NH₄⁺ (+2) and 1 × CO₃²⁻ (−2) → **(NH₄)₂CO₃**.

**(c)** Magnesium is in group 2 → Mg²⁺. Nitrogen is in group 5 → gains 3 → N³⁻. LCM 6 → 3 × Mg²⁺ and 2 × N³⁻ → **Mg₃N₂**.

Check: the total positive charge always equals the total negative charge.`,
    },
  },
  {
    id: "bonding-covalent",
    topic: "bonding",
    lesson: "4CH1 1(g) · includes Triple (C₆₀)",
    heading: "Covalent bonding: molecules and giant covalent structures",
    discovery: {
      problem:
        "Diamond and graphite are both pure carbon, joined by the same kind of covalent bond. Yet diamond is the hardest natural substance and an insulator, while graphite is soft enough to write with and conducts electricity. How can the same atoms behave so differently?",
      idea:
        "It is all about how many bonds each carbon atom makes. In diamond every outer electron is locked in one of four strong bonds; in graphite each atom uses only three, leaving one electron per atom delocalised, and the layers are held together only weakly.",
    },
    body: `A **covalent bond** is a **shared pair of electrons** between two non-metal atoms. The bond is the **strong electrostatic attraction between the bonding (shared) pair of electrons and the nuclei** of the two atoms. Each atom usually shares enough electrons to fill its outer shell (2 for hydrogen, 8 for the others).

**How many bonds?** H makes 1, group 7 makes 1, group 6 makes 2, group 5 makes 3, group 4 (carbon) makes 4.

**Dot-and-cross diagrams** — draw overlapping outer shells; put the shared pairs in the overlap; show the **lone (non-bonding) pairs**. Check every atom ends with a full outer shell.

| Molecule | Bonds | Lone pairs |
|---|---|---|
| H₂, Cl₂, HCl | 1 single bond | Cl has 3 lone pairs |
| H₂O | 2 O–H single bonds | 2 on O |
| NH₃ | 3 N–H single bonds | 1 on N |
| CH₄ | 4 C–H single bonds | none |
| O₂ | O=O **double** bond (2 shared pairs) | 2 on each O |
| N₂ | N≡N **triple** bond (3 shared pairs) | 1 on each N |
| CO₂ | two C=O double bonds | 2 on each O |
| C₂H₄ (ethene) | C=C double bond + 4 C–H | none |

**Simple molecular substances** (H₂O, CO₂, CH₄, I₂, HCl…) are made of small molecules. **Within** each molecule the covalent bonds are strong, but **between** molecules there are only **weak intermolecular forces**. Melting or boiling only overcomes these weak intermolecular forces — **the covalent bonds do not break** — so little energy is needed and **melting and boiling points are low** (most are gases or liquids at room temperature). As **relative molecular mass (Mr) increases**, the intermolecular forces get **stronger**, so boiling point rises: F₂ and Cl₂ are gases, Br₂ a liquid, I₂ a solid; methane boils at −162 °C but octane at 126 °C.

**Giant covalent structures** contain a huge network of atoms all joined by strong covalent bonds. To melt them you must break very many strong covalent bonds, so melting points are **very high**.
- **Diamond** — each carbon is covalently bonded to **four** others in a rigid 3D tetrahedral network. Very hard (cutting tools, drill tips); very high melting point; **does not conduct** because all four outer electrons are used in bonding, so there are no delocalised electrons.
- **Graphite** — each carbon is bonded to **three** others in flat **hexagonal layers**. The fourth outer electron of each atom is **delocalised** and free to move along the layers, so graphite **conducts electricity** (used for electrodes). The layers are held together by **weak forces**, so they can **slide over each other** — graphite is soft and slippery and used as a **lubricant** and in pencils. It still has a very high melting point because the covalent bonds within the layers must be broken.
- **C₆₀ fullerene (Triple)** — a **simple molecular** form of carbon: molecules of 60 carbon atoms in a hollow sphere of hexagons and pentagons. Between the molecules there are only weak intermolecular forces, so it is **soft/slippery with a much lower melting (sublimation) point** than diamond or graphite. It is a **poor conductor**: each atom bonds to three others and there are delocalised electrons, but they cannot move **from one molecule to the next**.

**Why most covalent substances don't conduct:** molecules are neutral, and there are **no ions and no delocalised electrons** free to move and carry charge. Graphite is the key exception.`,
    diagram: CO2_SVG,
    diagramCaption:
      "Dot-and-cross diagram of CO₂. Carbon shares two pairs with each oxygen (two double bonds). Each oxygen keeps two lone pairs; every atom has 8 outer electrons.",
    keyPoints: [
      "A covalent bond is a shared pair of electrons; the bond is the electrostatic attraction between the shared pair and the nuclei of the bonded atoms.",
      "Double bond = 2 shared pairs (O₂, CO₂, C₂H₄); triple bond = 3 shared pairs (N₂).",
      "Simple molecular substances have low melting and boiling points because only weak intermolecular forces are overcome — the covalent bonds are not broken.",
      "Boiling point increases with Mr because larger molecules have stronger intermolecular forces.",
      "Diamond: each C bonded to 4 others — very hard, very high melting point, does not conduct (no delocalised electrons).",
      "Graphite: each C bonded to 3 others in layers; one delocalised electron per atom → conducts; weak forces between layers → layers slide → lubricant.",
      "C₆₀ (Triple): simple molecular — weak intermolecular forces → low sublimation point and soft; poor conductor because electrons cannot pass between molecules.",
    ],
    whyItWorks:
      "Physical properties depend on what you have to overcome. Boiling water separates whole H₂O molecules from each other (weak forces), but melting diamond means breaking strong covalent bonds throughout the structure. Conduction needs charged particles that can move: graphite has them (delocalised electrons), diamond and simple molecules do not.",
    memoryTrick:
      "Diamond = 4 bonds = \"4-ever hard\". Graphite = 3 bonds + 1 free electron = \"3 bonds and a spare to share the current\".",
    examTip:
      "The most common lost mark in the whole topic: saying covalent bonds break when a simple molecular substance melts or boils. Always write \"weak intermolecular forces between molecules need little energy to overcome\". For graphite, write \"delocalised electrons\" (not just \"free electrons\") and \"layers slide over each other because the forces between layers are weak\".",
    thinkDeeper:
      "Silicon dioxide (sand) and carbon dioxide are both oxides of group 4 elements, yet SiO₂ melts at about 1700 °C and CO₂ is a gas. What does this tell you about their structures? Explain the difference using the idea of which forces or bonds are broken.",
    workedExample: {
      problem:
        "Explain why chlorine (Mr 71) is a gas at room temperature but iodine (Mr 254) is a solid. (3 marks)",
      solution: `- Both are **simple molecular** substances made of diatomic molecules (Cl₂, I₂).
- Only the **weak intermolecular forces** between molecules are overcome on melting/boiling — the Cl–Cl and I–I covalent bonds are not broken.
- I₂ has a **larger Mr**, so its **intermolecular forces are stronger** and more energy is needed to overcome them, so its melting and boiling points are higher.

Notice the structure of the answer: name the structure → say which forces are overcome → link the size of the forces to Mr and energy.`,
    },
  },
  {
    id: "bonding-metallic",
    topic: "bonding",
    lesson: "4CH1 1(h) · Triple",
    heading: "Metallic bonding: why copper makes perfect wires",
    discovery: {
      problem:
        "Hit a crystal of salt with a hammer and it shatters. Hit a lump of copper and it just flattens — and you can pull copper out into a wire thinner than a hair that still carries a current. What is special about the bonding in a metal?",
      idea:
        "In a metal the electrons are not owned by any one atom. Positive ions sit in layers in a sea of delocalised electrons. The layers can slide without the bonding breaking, and the mobile electrons carry charge.",
    },
    body: `**Structure.** A metal is a **giant lattice of positive metal ions (cations)** arranged in regular **layers**, surrounded by a **"sea" of delocalised electrons**. Each atom has released its outer-shell electron(s) into the structure; they are no longer attached to any one ion. Copper atoms each release electrons to form Cu²⁺ ions in the diagram.

**Metallic bonding** is the **strong electrostatic attraction between the positive metal ions and the delocalised electrons**. Learn this sentence word for word.

**Properties explained**

| Property | Explanation (mark-scheme wording) |
|---|---|
| Good **electrical** conductor | The **delocalised electrons are free to move** through the structure **and carry charge** (current). |
| Good **thermal** conductor | Delocalised electrons move and transfer energy through the structure. |
| **Malleable** (hammered into shape) and **ductile** (drawn into wires) | The **layers of positive ions can slide over each other**; the delocalised electrons move with them, so the **metallic bonding is maintained** and the metal does not break. |
| **High melting point** (most metals) | Strong electrostatic attraction between the positive ions and delocalised electrons needs **a lot of energy** to overcome. |

**Alloys** are mixtures of a metal with other elements (usually other metals, or carbon in steel). The added atoms are a **different size**, so they **disrupt (distort) the regular layers**; the layers **cannot slide over each other as easily**, so an alloy is **harder and stronger** than the pure metal. Steel (iron + carbon) is harder than pure iron; brass (copper + zinc) is harder than copper.

**How to answer "Explain three properties that make copper suitable for electrical wiring" (5 marks)**

An "explain" question wants a **property** plus a **reason linked to structure**. Plan four or five creditable points, one per line:
1. Copper is a **good electrical conductor** …
2. … because its **delocalised electrons are free to move** through the structure and **carry charge**.
3. Copper is **ductile** (can be drawn into wires) / malleable …
4. … because the **layers of positive ions can slide over each other** without the metallic bonding breaking.
5. Copper has a **high melting point** — strong electrostatic attraction between the positive ions and delocalised electrons — so it does not melt if the wire warms up; **and/or** copper is **unreactive**, so it **does not corrode** and keeps conducting.

**Choosing a metal for a job** (compare with these variants)
- **Aluminium for overhead power cables**: good conductor, **low density** (light, so pylons can be further apart) and resists corrosion (protective oxide layer). A steel core adds strength.
- **Gold in electronics**: good conductor and **very unreactive — does not corrode**, so contacts stay reliable (despite cost).
- **Iron vs steel**: pure iron is soft because its layers slide easily; steel is harder because carbon atoms disrupt the layers.

Do not confuse metals with ionic compounds: in a metal the **electrons** move; in a molten ionic compound the **ions** move.`,
    diagram: METAL_SVG,
    diagramCaption:
      "Copper: layers of Cu²⁺ ions in a sea of delocalised electrons. The ion–electron attraction is the metallic bond; the mobile electrons carry charge; the layers can slide.",
    keyPoints: [
      "Metals: a giant lattice of positive ions in layers surrounded by a sea of delocalised electrons.",
      "Metallic bonding = strong electrostatic attraction between positive metal ions and delocalised electrons.",
      "Electrical conductivity: delocalised electrons are free to move through the structure and carry charge.",
      "Malleable and ductile: layers of positive ions can slide over each other while the metallic bonding is maintained.",
      "High melting point: a lot of energy is needed to overcome the strong attraction between ions and delocalised electrons.",
      "Alloys are harder: different-sized atoms disrupt the regular layers so they cannot slide over each other as easily.",
    ],
    whyItWorks:
      "Because the bonding electrons are shared by the whole lattice rather than fixed between two particular atoms, the bond is non-directional. Ions can shift to new positions and still be surrounded by electrons — so the metal bends instead of snapping — and the same mobile electrons drift when a voltage is applied, giving a current.",
    memoryTrick:
      "For every property, say PROPERTY + BECAUSE + PARTICLE: \"conducts BECAUSE delocalised ELECTRONS move\"; \"ductile BECAUSE LAYERS OF IONS slide\"; \"high mp BECAUSE strong ATTRACTION ions–electrons\".",
    examTip:
      "In a 5-mark \"explain three properties\" question, a list of three properties alone earns at most 2–3 marks: each property needs its reason. Use \"layers of ions slide over each other\", never \"atoms slide\" or \"electrons slide\"; and say delocalised electrons \"carry charge\" or \"flow\", not just \"are present\". Don't write \"copper is a good conductor because it has free ions\" — that is the ionic idea.",
    thinkDeeper:
      "Sodium melts at 98 °C but magnesium melts at 650 °C. Both are in period 3. Using the charge on each ion and the number of delocalised electrons per atom, explain the difference. Would you expect aluminium to melt higher or lower than magnesium?",
    workedExample: {
      problem:
        "A cable company uses copper for household wiring. Explain three properties of copper that make it suitable for this use. (5 marks)",
      solution: `**Model answer (one creditable point per line):**
- Copper is a **good conductor of electricity** (1)
- because it has **delocalised electrons that are free to move** through the lattice and **carry charge** (1).
- Copper is **ductile**, so it can be drawn into thin wires (1)
- because the **layers of positive copper ions can slide over each other** without the metallic bonding breaking (1).
- Copper has a **high melting point** because there is strong electrostatic attraction between the positive ions and the delocalised electrons, so the wire won't melt when it gets warm **— or —** copper is **unreactive and does not corrode** (1).

Examiner's note: "good conductor" with no reason = 1 mark only; "layers slide" with no mention of ions loses precision.`,
    },
  },
];
