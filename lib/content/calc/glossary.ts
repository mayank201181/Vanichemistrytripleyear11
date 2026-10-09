import type { GlossaryCard } from "../../types";

export const glossary: GlossaryCard[] = [
  {
    topic: "calc",
    term: "Relative atomic mass (Ar)",
    definition: "The average mass of an atom of an element compared with 1/12 of the mass of an atom of carbon-12.",
    example: "Ar of Cl = 35.5 because of the mixture of ³⁵Cl and ³⁷Cl isotopes.",
  },
  {
    topic: "calc",
    term: "Relative formula mass (Mr)",
    definition: "The sum of the relative atomic masses of all the atoms shown in the formula.",
    example: "Mr of Ca(OH)₂ = 40 + 2 × (16 + 1) = 74",
  },
  {
    topic: "calc",
    term: "Mole",
    definition: "The unit for amount of substance. One mole of a substance has a mass in grams equal to its Ar or Mr.",
    example: "1 mol of H₂O = 18 g; 1 mol of NaCl = 58.5 g",
  },
  {
    topic: "calc",
    term: "Moles from mass",
    definition: "Number of moles = mass in grams ÷ Mr (or Ar for atoms).",
    example: "9.75 g Zn ÷ 65 = 0.150 mol",
  },
  {
    topic: "calc",
    term: "Mole ratio",
    definition: "The ratio of the numbers of moles of substances that react or are produced, given by the coefficients in the balanced equation.",
    example: "H₂SO₄ + 2NaOH → … : ratio H₂SO₄ : NaOH = 1 : 2",
  },
  {
    topic: "calc",
    term: "Limiting reactant",
    definition: "The reactant that is completely used up in a reaction; it determines the maximum amount of product. Any other reactant is in excess.",
    example: "0.10 mol Mg + 0.10 mol HCl: HCl is limiting because 0.10 mol Mg needs 0.20 mol HCl.",
  },
  {
    topic: "calc",
    term: "Theoretical yield",
    definition: "The maximum mass of product that could be made, calculated from the mass of the limiting reactant using the balanced equation.",
  },
  {
    topic: "calc",
    term: "Percentage yield",
    definition: "Percentage yield = (actual yield ÷ theoretical yield) × 100. It is less than 100% because of incomplete or reversible reactions, losses during transfer/filtration, product left in solution, or side reactions.",
    example: "36.4 g obtained ÷ 44.55 g possible × 100 = 81.7%",
  },
  {
    topic: "calc",
    term: "Empirical formula",
    definition: "The simplest whole-number ratio of atoms of each element in a compound.",
    example: "Glucose C₆H₁₂O₆ has empirical formula CH₂O.",
  },
  {
    topic: "calc",
    term: "Molecular formula",
    definition: "The actual number of atoms of each element in one molecule of a compound. It is a whole-number multiple of the empirical formula (multiple = Mr ÷ empirical formula mass).",
    example: "CH₂ (14), Mr 56 → 56 ÷ 14 = 4 → C₄H₈",
  },
  {
    topic: "calc",
    term: "Water of crystallisation",
    definition: "Water molecules chemically bonded within the crystal structure of a hydrated salt, shown after a dot in the formula.",
    example: "CuSO₄·5H₂O (blue) → heated → CuSO₄ (white) + 5H₂O",
  },
  {
    topic: "calc",
    term: "Hydrated / anhydrous",
    definition: "A hydrated salt contains water of crystallisation; an anhydrous salt has had all its water of crystallisation removed.",
  },
  {
    topic: "calc",
    term: "Heating to constant mass",
    definition: "Heating, cooling and reweighing repeatedly until two consecutive masses are the same, to make sure the reaction is complete (e.g. all water of crystallisation has been removed).",
  },
  {
    topic: "calc",
    term: "Molar gas volume",
    definition: "The volume occupied by one mole of any gas at room temperature and pressure (rtp): 24 dm³ (24 000 cm³).",
    example: "0.0500 mol of H₂ = 0.0500 × 24 = 1.20 dm³",
  },
  {
    topic: "calc",
    term: "Concentration (mol/dm³)",
    definition: "The amount of solute, in moles, dissolved in 1 dm³ of solution: concentration = moles ÷ volume in dm³.",
    example: "0.10 mol in 250 cm³ → 0.10 ÷ 0.250 = 0.40 mol/dm³",
  },
  {
    topic: "calc",
    term: "Concentration (g/dm³)",
    definition: "The mass of solute, in grams, dissolved in 1 dm³ of solution. g/dm³ = mol/dm³ × Mr.",
    example: "0.0856 mol/dm³ NaOH × 40 = 3.42 g/dm³",
  },
  {
    topic: "calc",
    term: "cm³ to dm³",
    definition: "1 dm³ = 1000 cm³, so divide a volume in cm³ by 1000 to convert it to dm³ before using it in a concentration calculation.",
    example: "25.0 cm³ = 0.0250 dm³",
  },
  {
    topic: "calc",
    term: "Mean titre",
    definition: "The average volume of solution added from the burette, calculated using only concordant accurate titres (not the rough titration).",
    example: "Concordant 21.30 and 21.50 cm³ → mean 21.40 cm³",
  },
  {
    topic: "calc",
    term: "Concordant results",
    definition: "Titres that agree closely with each other — for Edexcel, usually within 0.20 cm³ (sometimes 0.10 cm³).",
  },
  {
    topic: "calc",
    term: "State symbols",
    definition: "Letters in brackets after a formula showing its physical state: (s) solid, (l) liquid, (g) gas, (aq) aqueous — dissolved in water.",
    example: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
  },
  {
    topic: "calc",
    term: "Ionic equation",
    definition: "An equation showing only the ions and other particles that take part in a reaction, with the spectator ions left out. It must balance in atoms and in charge.",
    example: "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)",
  },
  {
    topic: "calc",
    term: "Spectator ions",
    definition: "Ions that are present in the reaction mixture but are unchanged by the reaction; they appear identically on both sides of the full ionic equation.",
    example: "In HCl + NaOH, Na⁺ and Cl⁻ are spectator ions.",
  },
  {
    topic: "calc",
    term: "Neutralisation (ionic equation)",
    definition: "The reaction of H⁺ ions from an acid with OH⁻ ions from an alkali to form water: H⁺(aq) + OH⁻(aq) → H₂O(l).",
  },
  {
    topic: "calc",
    term: "Precipitate",
    definition: "An insoluble solid formed when two solutions are mixed; it has the state symbol (s).",
    example: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s), a white precipitate",
  },
];
