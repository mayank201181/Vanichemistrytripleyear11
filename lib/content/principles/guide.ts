import type { GuideSection } from "../../types";

export const guide: GuideSection[] = [
  // ───────────────────────────── 1(a) STATES OF MATTER ─────────────────────────────
  {
    id: "principles-states",
    topic: "principles",
    lesson: "4CH1 1(a) · solubility curves Triple",
    heading: "States of matter, diffusion and solubility",
    discovery: {
      problem:
        "You heat a beaker of crushed ice with a Bunsen burner at a steady rate. For several minutes the thermometer stays at 0 °C even though the flame never stops supplying energy. Where is all that energy going?",
      idea:
        "While the ice is melting, the energy is used to overcome the forces of attraction between the water particles, not to make them move faster. Temperature measures the average kinetic energy of the particles, so it stays constant until all the ice has melted.",
    },
    body: `**The particle model.** All matter is made of tiny particles. The three states differ in the **arrangement**, **movement** and **energy** of those particles:

| State | Arrangement | Movement | Energy |
|---|---|---|---|
| Solid | close together, regular pattern (lattice) | vibrate about fixed positions | lowest |
| Liquid | close together, random arrangement | move around / slide past each other | higher |
| Gas | far apart, random arrangement | move quickly in all directions | highest |

**Changes of state.** Melting (s → l), boiling and evaporating (l → g), condensing (g → l), freezing (l → s) and **sublimation** (s → g directly, e.g. solid carbon dioxide, "dry ice"). Melting, boiling and sublimation need energy to **overcome the forces of attraction** between particles. Condensing and freezing **release** energy as attractions form. Evaporation happens at the surface at any temperature; boiling happens throughout the liquid at the boiling point.

**Heating and cooling curves.** When a solid is heated at a constant rate, the temperature rises, then stays **constant** (a plateau) while it melts, rises again, then stays constant while it boils. On each plateau the energy supplied is used to overcome forces between particles, so the kinetic energy (and temperature) does not increase. The boiling plateau is longer because particles must be separated completely. A cooling curve shows the same thing in reverse: the temperature stays constant while the liquid **freezes** because energy is released as the particles are attracted into a solid lattice. The temperature of a plateau is the melting point or boiling point.

**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration, caused by their **random movement**. Two classic experiments:
- A purple crystal of **potassium manganate(VII)** placed in water: the purple colour slowly spreads through all the water without stirring.
- Cotton wool soaked in concentrated **ammonia** solution at one end of a long glass tube and concentrated **hydrochloric acid** at the other. The gases diffuse along the tube and react where they meet, forming a **white ring of ammonium chloride**: NH₃(g) + HCl(g) → NH₄Cl(s). The ring forms **nearer the HCl end** because NH₃ (Mr 17) has a lower relative formula mass than HCl (Mr 36.5), so ammonia particles move faster and travel further in the same time.

**Dilution.** Dissolve a crystal of potassium manganate(VII) in water, then repeatedly dilute it (e.g. 1 cm³ of solution + 9 cm³ of water). The colour gets paler but is still visible after several dilutions: one crystal must contain an enormous number of very small particles.

**Solutions vocabulary.** The **solute** dissolves in the **solvent** to form a **solution**. A **saturated solution** contains the maximum mass of solute that can dissolve at that temperature. **Solubility** is the mass of solute that dissolves in **100 g of solvent** at a given temperature, in **g per 100 g of water**.

**Solubility curves (Triple).** For most solids, solubility increases with temperature. When a hot saturated solution is cooled, the solvent can hold less solute, so the excess **crystallises out**:

mass of crystals (per 100 g water) = solubility at the higher temperature − solubility at the lower temperature

Then scale to the actual mass of water used.

**Practical: solubility at different temperatures.** Make a saturated solution at a measured temperature (excess solid, stir, keep at constant temperature). Pour some clear solution into a weighed evaporating basin, weigh, evaporate to dryness, and weigh again. Mass of water = mass of solution − mass of solid; solubility = (mass of solid ÷ mass of water) × 100. Repeat at other temperatures and plot the solubility curve.`,
    diagram: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heating curve: temperature against time with a plateau at the melting point and a longer plateau at the boiling point"><line x1="50" y1="220" x2="385" y2="220" stroke="#334155" stroke-width="2"/><line x1="50" y1="220" x2="50" y2="20" stroke="#334155" stroke-width="2"/><polyline points="55,210 100,160 160,160 210,100 310,100 360,40" fill="none" stroke="#4f46e5" stroke-width="3"/><line x1="50" y1="160" x2="100" y2="160" stroke="#94a3b8" stroke-dasharray="4 3"/><line x1="50" y1="100" x2="210" y2="100" stroke="#94a3b8" stroke-dasharray="4 3"/><text x="45" y="164" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">mp</text><text x="45" y="104" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">bp</text><text x="84" y="202" font-size="11" font-family="sans-serif" fill="#334155">solid</text><text x="104" y="178" font-size="11" font-family="sans-serif" fill="#334155">melting (s + l)</text><text x="196" y="142" font-size="11" font-family="sans-serif" fill="#334155">liquid</text><text x="216" y="118" font-size="11" font-family="sans-serif" fill="#334155">boiling (l + g)</text><text x="342" y="82" font-size="11" font-family="sans-serif" fill="#334155">gas</text><text x="215" y="246" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">time (heated at a constant rate)</text><text x="18" y="120" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 18 120)">temperature / °C</text></svg>`,
    diagramCaption:
      "A heating curve. On the two flat sections (plateaus) the substance is changing state: energy is used to overcome forces of attraction between particles, so the temperature does not rise.",
    keyPoints: [
      "Solid: particles close together in a regular arrangement, vibrating about fixed positions. Liquid: close together, random, moving past each other. Gas: far apart, random, moving quickly.",
      "During melting and boiling the temperature stays constant because the energy supplied is used to overcome the forces of attraction between particles.",
      "Diffusion is the net movement of particles from high to low concentration caused by their random movement.",
      "NH₃ + HCl tube: the white ring of ammonium chloride forms nearer the HCl end because NH₃ has a lower Mr (17 v 36.5), so its particles move faster.",
      "Solubility = mass of solute that dissolves in 100 g of solvent at a stated temperature (g per 100 g water); a saturated solution holds the maximum amount at that temperature.",
      "Mass crystallising on cooling = difference between the two solubilities, scaled to the mass of water actually used.",
    ],
    whyItWorks:
      "Temperature is a measure of the average kinetic energy of particles. During a change of state the energy goes into separating particles (overcoming attractions) rather than speeding them up, so the temperature cannot rise until the change is complete.",
    memoryTrick:
      "Light and fast wins the race: the lighter gas (NH₃) covers more of the tube, so the ring ends up nearer the heavier gas (HCl).",
    examTip:
      "In plateau questions write 'energy is used to overcome the forces of attraction between particles' - never 'to break bonds' (that suggests covalent bonds break). In the diffusion tube, you must link lower Mr → faster particles → ring nearer HCl; just saying 'ammonia is lighter' rarely gets both marks.",
    thinkDeeper:
      "If the HCl in the tube were replaced by hydrogen bromide (HBr, Mr 81), would the white ring move closer to or further from the acid end? Explain why.",
    workedExample: {
      problem:
        "The solubility of potassium nitrate is 110 g per 100 g of water at 60 °C and 32 g per 100 g of water at 20 °C. A saturated solution is made at 60 °C using 50 g of water and is then cooled to 20 °C. Calculate the mass of potassium nitrate crystals that form.",
      solution: `**Step 1 – difference per 100 g of water:** 110 − 32 = 78 g would crystallise from 100 g of water.

**Step 2 – scale to 50 g of water:** 78 × 50/100 = **39 g** of crystals.

(Check another way: at 60 °C, 50 g water holds 55 g; at 20 °C it holds 16 g; 55 − 16 = 39 g.)`,
    },
  },

  // ───────────────────────────── 1(b) MIXTURES & SEPARATION ─────────────────────────────
  {
    id: "principles-mixtures",
    topic: "principles",
    lesson: "4CH1 1(b)",
    heading: "Elements, compounds, mixtures and separation",
    discovery: {
      problem:
        "Seawater looks perfectly clear. Filtering it does nothing. How could you get drinkable water out of it, and how would you prove the water you collected is pure?",
      idea:
        "The salt is dissolved, so filtration cannot remove it. Simple distillation boils off the water, condenses the vapour and leaves the salt behind. A physical test proves purity: pure water boils at exactly 100 °C and freezes at exactly 0 °C (at 1 atm).",
    },
    body: `**Definitions.** An **element** contains only one type of atom. A **compound** contains two or more elements **chemically combined** in fixed proportions (e.g. H₂O). A **mixture** contains two or more substances that are **not chemically combined**, so they can be separated by physical methods.

**Pure or impure?** A **pure substance** (a single element or compound) melts and boils at a **sharp, fixed temperature**. A **mixture** melts or boils **over a range of temperatures**. So a sample of aspirin that melts between 128 °C and 133 °C is impure.

**Simple distillation** separates a **solvent from a solution** (e.g. pure water from sodium chloride solution).
- Heat the solution in a flask. The water **boils**; the salt does not (very high boiling point) and stays in the flask.
- The water vapour passes into the **Liebig condenser**, where it is cooled and **condenses** back to liquid. The **distillate** (pure water) drips into the collecting flask.
- **Why must cold water flow continuously through the condenser?** Flowing water carries heat away and keeps the condenser **cold**, so the vapour **condenses**. If the water stood still, it would warm up and vapour would escape without condensing.
- **Why does the water enter at the bottom (lower end)?** So the outer jacket **fills completely** with water, with no air pocket, giving **more efficient cooling**. Water entering at the top would just run straight out of the bottom.
- The **thermometer bulb** is level with the **side arm**: it measures the temperature of the vapour entering the condenser (its boiling point).
- **Anti-bumping granules** make boiling smooth.

**Proving the distillate is pure water.** A **physical test**: it **boils at exactly 100 °C** (or **freezes/melts at exactly 0 °C**) at 1 atm. A chemical test (anhydrous copper(II) sulfate turns from white to blue) only shows that **water is present**; salty water would also turn it blue.

**Fractional distillation** separates **miscible liquids with different boiling points** (e.g. ethanol, bp 78 °C, from water, bp 100 °C; or crude oil). A **fractionating column** (often packed with glass beads, which provide a large surface area) sits above the flask. It is hottest at the bottom and coolest at the top. Vapours repeatedly condense and re-boil; the liquid with the **lower boiling point** reaches the top first. The thermometer stays at 78 °C while ethanol distils, then rises: change the collecting flask.

**Filtration** separates an **insoluble solid** from a liquid. The solid left in the filter paper is the **residue**; the liquid that passes through is the **filtrate**.

**Crystallisation** obtains a **soluble solid** from its solution: heat to evaporate some water until the **crystallisation point** (crystals form on a cold glass rod dipped in and removed), leave to **cool** so crystals form, filter, wash with a little cold distilled water, dry between filter papers.

**Paper chromatography** separates **soluble substances** such as dyes in ink.
- Draw the **baseline in pencil** (pencil does not dissolve in the solvent; ink would run). Put spots on the baseline.
- The **solvent level must be below the baseline**, or the spots would dissolve into the solvent.
- Put a **lid** on the beaker so the atmosphere stays saturated with solvent vapour and the solvent does not evaporate from the paper.
- The paper is the **stationary phase**; the solvent is the **mobile phase**. A substance that is more soluble in the solvent travels further.
- **Rf = distance moved by the spot ÷ distance moved by the solvent** (both measured from the baseline). Rf is always less than 1. A pure substance gives **one spot**; substances are identified by matching Rf values with known samples in the same solvent.

| To separate… | Use |
|---|---|
| insoluble solid + liquid | filtration |
| soluble solid from solution | crystallisation |
| solvent from solution | simple distillation |
| miscible liquids, different bp | fractional distillation |
| dissolved dyes/colours | paper chromatography |`,
    diagram: `<svg viewBox="0 0 460 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple distillation apparatus: flask of sodium chloride solution heated, thermometer bulb at the side arm, Liebig condenser with water in at the lower end and out at the upper end, distillate collected in a conical flask"><circle cx="80" cy="170" r="40" fill="none" stroke="#334155" stroke-width="2"/><path d="M 43 185 A 40 40 0 0 0 117 185 Z" fill="#bfdbfe" stroke="none"/><circle cx="68" cy="200" r="3" fill="#475569"/><circle cx="90" cy="203" r="3" fill="#475569"/><text x="80" y="196" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">NaCl(aq)</text><rect x="72" y="92" width="16" height="42" fill="none" stroke="#334155" stroke-width="2"/><line x1="80" y1="60" x2="80" y2="99" stroke="#dc2626" stroke-width="2"/><circle cx="80" cy="101" r="3" fill="#dc2626"/><text x="92" y="56" font-size="11" font-family="sans-serif" fill="#334155">thermometer bulb level with side arm</text><line x1="88" y1="100" x2="340" y2="173" stroke="#334155" stroke-width="2"/><line x1="340" y1="173" x2="350" y2="196" stroke="#334155" stroke-width="2"/><polygon points="150,106 300,149 300,173 150,130" fill="#e0f2fe" fill-opacity="0.6" stroke="#0369a1" stroke-width="2"/><line x1="285" y1="169" x2="285" y2="196" stroke="#0369a1" stroke-width="2"/><text x="280" y="208" font-size="11" font-family="sans-serif" text-anchor="end" fill="#0369a1">cold water in</text><line x1="165" y1="110" x2="165" y2="82" stroke="#0369a1" stroke-width="2"/><text x="172" y="84" font-size="11" font-family="sans-serif" fill="#0369a1">water out</text><text x="140" y="176" font-size="11" font-family="sans-serif" fill="#334155">Liebig condenser</text><polygon points="345,192 355,192 355,207 380,255 320,255 345,207" fill="none" stroke="#334155" stroke-width="2"/><rect x="326" y="240" width="48" height="13" fill="#bfdbfe"/><text x="350" y="272" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">distillate (pure water)</text><line x1="50" y1="214" x2="110" y2="214" stroke="#334155" stroke-width="2"/><polygon points="70,252 80,222 90,252" fill="#f97316"/><text x="96" y="250" font-size="11" font-family="sans-serif" fill="#334155">heat</text><text x="10" y="150" font-size="11" font-family="sans-serif" fill="#334155">flask</text></svg>`,
    diagramCaption:
      "Simple distillation. Cooling water enters the condenser at the lower end and leaves at the upper end so the jacket stays full; the thermometer bulb sits at the side arm; anti-bumping granules (grey dots) give smooth boiling.",
    keyPoints: [
      "Pure substances melt and boil at a sharp, fixed temperature; mixtures melt and boil over a range.",
      "Continuous flow of cold water keeps the condenser cold so that the vapour condenses.",
      "Water enters the condenser at the bottom so the condenser fills completely with water, giving more efficient cooling.",
      "Physical test for pure water: boils at exactly 100 °C (freezes at exactly 0 °C) at 1 atm.",
      "Rf = distance moved by spot ÷ distance moved by solvent front, both measured from the baseline.",
      "Chromatography: pencil baseline (does not dissolve), solvent level below the baseline, lid on to stop evaporation.",
      "Fractional distillation separates miscible liquids with different boiling points using a fractionating column.",
    ],
    whyItWorks:
      "Every separation exploits a difference in a physical property: particle size/solubility (filtration), boiling point (distillation), or how strongly a substance is attracted to the solvent compared with the paper (chromatography).",
    memoryTrick:
      "Condenser water goes 'in low, out high' - fill it like a bath from the bottom so there is no air at the top.",
    examTip:
      "For the condenser, '(to) cool the vapour' alone is not enough: say it keeps the condenser cold SO THAT the vapour condenses. For 'physical test for pure water' you must give a number: boils at 100 °C or freezes at 0 °C. Testing with anhydrous copper(II) sulfate is a CHEMICAL test and does not show purity.",
    thinkDeeper:
      "A student's distillate boils at 101.5 °C. What does this tell you, and what might have gone wrong in the distillation (think about how vigorously the flask was heated)?",
    workedExample: {
      problem:
        "In a chromatogram the solvent front is 9.0 cm above the baseline. Dye A has moved 6.3 cm and dye B 2.7 cm. Calculate both Rf values. A food colouring gives two spots with Rf values 0.70 and 0.30. Does it contain A and B?",
      solution: `**Rf (A)** = 6.3 ÷ 9.0 = **0.70**

**Rf (B)** = 2.7 ÷ 9.0 = **0.30**

The food colouring's spots match both values (same solvent, same conditions), so it is likely to contain both A and B. Two spots also show it is a **mixture**, not a pure substance.`,
    },
  },

  // ───────────────────────────── 1(c) ATOMIC STRUCTURE ─────────────────────────────
  {
    id: "principles-atoms",
    topic: "principles",
    lesson: "4CH1 1(c)",
    heading: "Atomic structure, isotopes and relative atomic mass",
    discovery: {
      problem:
        "Every chlorine atom has a mass number that is a whole number - either 35 or 37. So why does the Periodic Table give chlorine a relative atomic mass of 35.5?",
      idea:
        "Chlorine is a mixture of isotopes: about 75% chlorine-35 and 25% chlorine-37. The relative atomic mass is the weighted mean: (35 × 75 + 37 × 25) ÷ 100 = 35.5.",
    },
    body: `**Inside the atom.** An atom has a tiny central **nucleus** containing **protons** and **neutrons**, surrounded by **electrons** in shells (energy levels).

| Particle | Relative mass | Relative charge | Where |
|---|---|---|---|
| proton | 1 | +1 | nucleus |
| neutron | 1 | 0 | nucleus |
| electron | 1/1836 (negligible) | −1 | shells |

Atoms are **neutral** because the number of electrons equals the number of protons. Almost all the mass is in the nucleus.

**Atomic number and mass number.**
- **Atomic number (Z)** = number of protons (this defines the element).
- **Mass number (A)** = number of protons + number of neutrons.
- Number of neutrons = mass number − atomic number. For ²⁷₁₃Al: 13 protons, 13 electrons, 27 − 13 = 14 neutrons.
- In an **ion**, only the electrons change: ³⁵Cl⁻ has 17 protons, 18 neutrons and 18 electrons.

**Isotopes** are atoms of the **same element** with the **same number of protons** but **different numbers of neutrons** (so different mass numbers). Isotopes have the **same chemical properties** because they have the same electronic configuration (chemistry depends on electrons), but slightly different physical properties such as density.

**Relative atomic mass, Ar**, is the **weighted mean (average) mass** of the atoms of an element, compared with 1/12 of the mass of an atom of carbon-12. It takes into account the mass and abundance of each isotope:

Ar = Σ(isotopic mass × percentage abundance) ÷ 100

**Working backwards.** If you know Ar and the two isotopes, call one abundance x and the other (100 − x), set up the equation and solve. (See the worked example.)

**Electronic configuration.** Electrons fill shells from the inside out. For the first 20 elements: the 1st shell holds up to **2**, the 2nd up to **8**, the 3rd up to **8** (then the 4th shell starts at potassium).

| Element | Atomic number | Configuration |
|---|---|---|
| carbon | 6 | 2.4 |
| oxygen | 8 | 2.6 |
| sodium | 11 | 2.8.1 |
| chlorine | 17 | 2.8.7 |
| argon | 18 | 2.8.8 |
| potassium | 19 | 2.8.8.1 |
| calcium | 20 | 2.8.8.2 |

Method: fill 2, then 8, then 8, then put the rest in the 4th shell. The total must equal the atomic number. For ions, add or remove electrons: Na⁺ 2.8, Cl⁻ 2.8.8, O²⁻ 2.8.

The **number of outer-shell electrons** decides an element's chemical properties and its group; the **number of occupied shells** gives its period.`,
    diagram: `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium-23 atom: nucleus of 11 protons and 12 neutrons with electrons arranged 2.8.1 in three shells"><circle cx="120" cy="115" r="40" fill="none" stroke="#94a3b8"/><circle cx="120" cy="115" r="65" fill="none" stroke="#94a3b8"/><circle cx="120" cy="115" r="90" fill="none" stroke="#94a3b8"/><circle cx="120" cy="115" r="20" fill="#fde68a" stroke="#b45309"/><text x="120" y="112" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#7c2d12">11p</text><text x="120" y="125" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#7c2d12">12n</text><circle cx="80" cy="115" r="5" fill="#4f46e5"/><circle cx="160" cy="115" r="5" fill="#4f46e5"/><circle cx="185" cy="115" r="5" fill="#4f46e5"/><circle cx="166" cy="161" r="5" fill="#4f46e5"/><circle cx="120" cy="180" r="5" fill="#4f46e5"/><circle cx="74" cy="161" r="5" fill="#4f46e5"/><circle cx="55" cy="115" r="5" fill="#4f46e5"/><circle cx="74" cy="69" r="5" fill="#4f46e5"/><circle cx="120" cy="50" r="5" fill="#4f46e5"/><circle cx="166" cy="69" r="5" fill="#4f46e5"/><circle cx="120" cy="25" r="5" fill="#4f46e5"/><text x="235" y="60" font-size="14" font-family="sans-serif" fill="#0f172a">sodium-23  (²³₁₁Na)</text><text x="235" y="88" font-size="12" font-family="sans-serif" fill="#334155">11 protons</text><text x="235" y="108" font-size="12" font-family="sans-serif" fill="#334155">23 − 11 = 12 neutrons</text><text x="235" y="128" font-size="12" font-family="sans-serif" fill="#334155">11 electrons</text><text x="235" y="148" font-size="12" font-family="sans-serif" fill="#334155">configuration 2.8.1</text><text x="235" y="176" font-size="12" font-family="sans-serif" fill="#334155">1 outer electron → group 1</text><text x="235" y="196" font-size="12" font-family="sans-serif" fill="#334155">3 shells → period 3</text></svg>`,
    diagramCaption:
      "A sodium-23 atom. The nucleus holds 11 protons and 12 neutrons; the 11 electrons are arranged 2.8.1.",
    keyPoints: [
      "Proton: relative mass 1, charge +1. Neutron: relative mass 1, charge 0. Electron: relative mass 1/1836 (negligible), charge −1.",
      "Atomic number = number of protons; mass number = protons + neutrons.",
      "Isotopes: atoms of the same element with the same number of protons but different numbers of neutrons.",
      "Isotopes have the same chemical properties because they have the same electronic configuration.",
      "Ar = Σ(mass × % abundance) ÷ 100 - the weighted mean mass compared with 1/12 of a carbon-12 atom.",
      "Shells fill 2, 8, 8, then the 4th shell: K is 2.8.8.1 and Ca is 2.8.8.2.",
    ],
    whyItWorks:
      "A relative atomic mass is an average over billions of atoms, so the common isotope counts for more: that is why it is a weighted mean, and why it lies closer to the mass of the most abundant isotope.",
    memoryTrick:
      "Isotopes: same Protons, different Neutrons - 'iso-P, not iso-N'. Ar always lies between the lightest and heaviest isotope, nearer the most abundant one: use that to check your answer.",
    examTip:
      "In RAM calculations show the working line (mass × abundance for each isotope, total ÷ 100) - a bare answer risks losing method marks. Give the answer to 1 decimal place unless told otherwise. Isotopes do NOT have different numbers of electrons or protons.",
    thinkDeeper:
      "Magnesium has three isotopes: ²⁴Mg, ²⁵Mg and ²⁶Mg. If you know Ar = 24.3 and that ²⁵Mg is 10%, can you find the other two abundances? Set up two equations (the abundances must add to 100).",
    workedExample: {
      problem:
        "(a) Gallium consists of ⁶⁹Ga (60.0%) and ⁷¹Ga (40.0%). Calculate its relative atomic mass. (b) Copper has Ar = 63.5 and consists of ⁶³Cu and ⁶⁵Cu only. Calculate the percentage abundance of ⁶³Cu.",
      solution: `**(a)** Ar = (69 × 60.0 + 71 × 40.0) ÷ 100

= (4140 + 2840) ÷ 100 = 6980 ÷ 100 = **69.8**

**(b)** Let the abundance of ⁶³Cu = x %, so ⁶⁵Cu = (100 − x) %.

63x + 65(100 − x) = 63.5 × 100

63x + 6500 − 65x = 6350

−2x = −150, so x = **75%** ⁶³Cu (and 25% ⁶⁵Cu).

Check: 63.5 is nearer 63 than 65, so ⁶³Cu must be the more abundant isotope. ✔`,
    },
  },

  // ───────────────────────────── 1(d) THE PERIODIC TABLE ─────────────────────────────
  {
    id: "principles-periodic",
    topic: "principles",
    lesson: "4CH1 1(d)",
    heading: "The Periodic Table",
    discovery: {
      problem:
        "Lithium, sodium and potassium look different, have different masses and different melting points, yet all three fizz in water to make an alkaline solution and hydrogen. What do their atoms have in common that explains this?",
      idea:
        "Each has exactly one electron in its outer shell (Li 2.1, Na 2.8.1, K 2.8.8.1). Chemical reactions involve outer electrons, so elements with the same number of outer electrons - the same group - have similar chemical properties.",
    },
    body: `**How the table is arranged.** The modern Periodic Table arranges the elements in order of increasing **atomic number** (number of protons), not mass.
- A **group** is a vertical column. Elements in the same group have the **same number of electrons in the outer shell**, so they have **similar chemical properties**. For groups 1–7 the group number = the number of outer electrons.
- **Group 0** (the noble gases) have a **full outer shell** (He has 2; the others have 8).
- A **period** is a horizontal row. The period number = the **number of occupied electron shells**.

So you can locate an element from its electronic configuration: **2.8.6** has 3 shells (period 3) and 6 outer electrons (group 6): it is **sulfur**. **2.8.8.2** is period 4, group 2: **calcium**.

**Metals and non-metals.** Metals are on the **left** and in the centre; non-metals are on the **right** (a staircase line runs from boron down towards astatine). Metals typically have 1, 2 or 3 outer electrons and form **positive ions** by losing them; non-metals typically gain or share electrons.

| Property | Metals | Non-metals |
|---|---|---|
| electrical conductivity | good conductors | poor conductors (except graphite) |
| type of oxide | **basic** | **acidic** |
| oxide in water | alkaline solution if soluble (pH > 7) | acidic solution (pH < 7) |
| ions | positive | negative (or covalent bonding) |

**Classifying by oxides.** The acid–base character of an element's oxide is a reliable test. Metal oxides are **bases**: they neutralise acids, and soluble ones dissolve to give alkalis, e.g. Na₂O(s) + H₂O(l) → 2NaOH(aq). Non-metal oxides are **acidic**: CO₂ and SO₂ dissolve to give acidic solutions, e.g. SO₂(g) + H₂O(l) → H₂SO₃(aq). **Electrical conductivity** is the other main test: if a solid element conducts, it is a metal (the exception being graphite).

**Group 0: the noble gases** (helium, neon, argon…). They are **unreactive (inert)** because they have a **full outer shell**, a stable electronic configuration, so they do not need to lose, gain or share electrons. They exist as **single atoms** (monatomic) and are colourless gases. Their lack of reactivity makes them useful: argon fills filament lamps and provides an inert atmosphere for welding; helium (very low density, non-flammable) fills balloons; neon glows in advertising signs.

**Patterns to expect.** Elements in the same group show trends down the group (e.g. group 1 reactivity increases, group 7 reactivity decreases), which you study in the Inorganic topic. Here, focus on the link: **configuration → group and period → metal or non-metal → type of oxide.**`,
    diagram: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The first 20 elements of the Periodic Table arranged in groups 1 to 7 and 0 and periods 1 to 4, with metals shaded differently from non-metals"><text x="10" y="24" font-size="11" font-family="sans-serif" fill="#334155">Group</text><text x="91" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><text x="133" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><text x="175" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><text x="217" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">4</text><text x="259" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">5</text><text x="301" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">6</text><text x="343" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">7</text><text x="385" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">0</text><text x="10" y="55" font-size="11" font-family="sans-serif" fill="#334155">Period 1</text><rect x="70" y="34" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="90" y="55" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">H</text><rect x="364" y="34" width="40" height="32" rx="3" fill="#bbf7d0" stroke="#475569"/><text x="384" y="55" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">He</text><text x="10" y="89" font-size="11" font-family="sans-serif" fill="#334155">Period 2</text><rect x="70" y="68" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="90" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Li</text><rect x="112" y="68" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="132" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Be</text><rect x="154" y="68" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="174" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">B</text><rect x="196" y="68" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="216" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">C</text><rect x="238" y="68" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="258" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">N</text><rect x="280" y="68" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="300" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">O</text><rect x="322" y="68" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="342" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">F</text><rect x="364" y="68" width="40" height="32" rx="3" fill="#bbf7d0" stroke="#475569"/><text x="384" y="89" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Ne</text><text x="10" y="123" font-size="11" font-family="sans-serif" fill="#334155">Period 3</text><rect x="70" y="102" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="90" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Na</text><rect x="112" y="102" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="132" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Mg</text><rect x="154" y="102" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="174" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Al</text><rect x="196" y="102" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="216" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Si</text><rect x="238" y="102" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="258" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">P</text><rect x="280" y="102" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="300" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">S</text><rect x="322" y="102" width="40" height="32" rx="3" fill="#fde68a" stroke="#475569"/><text x="342" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Cl</text><rect x="364" y="102" width="40" height="32" rx="3" fill="#bbf7d0" stroke="#475569"/><text x="384" y="123" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Ar</text><text x="10" y="157" font-size="11" font-family="sans-serif" fill="#334155">Period 4</text><rect x="70" y="136" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="90" y="157" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">K</text><rect x="112" y="136" width="40" height="32" rx="3" fill="#c7d2fe" stroke="#475569"/><text x="132" y="157" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Ca</text><rect x="70" y="190" width="14" height="14" fill="#c7d2fe" stroke="#475569"/><text x="90" y="202" font-size="11" font-family="sans-serif" fill="#334155">metals</text><rect x="160" y="190" width="14" height="14" fill="#fde68a" stroke="#475569"/><text x="180" y="202" font-size="11" font-family="sans-serif" fill="#334155">non-metals</text><rect x="270" y="190" width="14" height="14" fill="#bbf7d0" stroke="#475569"/><text x="290" y="202" font-size="11" font-family="sans-serif" fill="#334155">noble gases</text><text x="20" y="232" font-size="11" font-family="sans-serif" fill="#334155">Group number = outer electrons; period number = occupied shells</text></svg>`,
    diagramCaption:
      "The first 20 elements. Group number = number of outer electrons (group 0 has a full outer shell); period number = number of occupied shells. Metals on the left, non-metals on the right.",
    keyPoints: [
      "Elements are arranged in order of increasing atomic number.",
      "Groups are columns: same number of outer electrons, so similar chemical properties.",
      "Periods are rows: the period number equals the number of occupied electron shells.",
      "Metals are on the left, non-metals on the right; metals conduct electricity, most non-metals do not.",
      "Metal oxides are basic (soluble ones give alkaline solutions); non-metal oxides are acidic.",
      "Group 0 noble gases are unreactive because they have a full outer shell of electrons.",
    ],
    whyItWorks:
      "Chemical reactions involve only outer-shell electrons, so atoms with the same outer-shell arrangement react in the same kinds of ways. The table is literally a map of electronic configurations.",
    memoryTrick:
      "Group = how many outer electrons; Period = how many shells. 'G for Grab-able electrons, P for Plates (layers).'",
    examTip:
      "When asked to explain why an element is in a particular group or period, refer to ELECTRONS: 'it has 6 electrons in its outer shell' (group) and 'it has 3 occupied shells' (period). For noble gases write 'full outer shell (of electrons)', not 'full shells' alone or 'they have 8 electrons' (helium has 2).",
    thinkDeeper:
      "Silicon dioxide does not dissolve in water, yet it is classified as an acidic oxide. What experiment could show it is acidic rather than basic? (Hint: what does it react with?)",
    workedExample: {
      problem:
        "Element X has 3 occupied shells and 2 electrons in its outer shell. (a) Give its group, period and electronic configuration. (b) Predict the pH of the solution formed when its oxide is shaken with water, and the type of oxide.",
      solution: `**(a)** 2 outer electrons → **group 2**; 3 shells → **period 3**; configuration **2.8.2** (magnesium).

**(b)** X is a metal, so its oxide is **basic**. Magnesium oxide is slightly soluble in water and gives an **alkaline** solution (pH above 7).`,
    },
  },
];

