import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-calc",
  title: "Written answers · Formulae, Equations & Moles",
  subtitle: "Multi-step calculations with method marks, ionic equations, 'show that', water of crystallisation and titration calculations.",
  topic: "calc",
  questions: [
    {
      id: "ca-w01",
      topic: "calc",
      section: "calc-formulae",
      difficulty: "warmup",
      question:
        "A student adds silver nitrate solution to sodium chloride solution. A white precipitate forms.\n(a) Write the ionic equation, including state symbols, for the formation of the precipitate. (2)\n(b) Identify the spectator ions in this reaction. (1)",
      marks: 3,
      hints: [
        "The precipitate is silver chloride. Which two ions join to make it?",
        "Spectator ions stay dissolved and unchanged — which ions end up in the sodium nitrate solution?",
      ],
      modelAnswer:
        "(a) Ag⁺(aq) + Cl⁻(aq) → AgCl(s)\n(b) The spectator ions are Na⁺ and NO₃⁻ (sodium ions and nitrate ions).",
      markScheme: [
        {
          point: "Correct species and balanced: Ag⁺ + Cl⁻ → AgCl",
          keywords: ["ag+cl+yields agcl", "ag+cl+agcl", "silver ion+chloride ion+agcl"],
          feedback:
            "The ionic equation shows only the ions that combine: Ag⁺ + Cl⁻ → AgCl. Don't include NaCl or AgNO₃ — they are split into ions in solution.",
        },
        {
          point: "Correct state symbols: (aq), (aq) → (s)",
          keywords: ["ag aq+agcl s", "ag aq+cl aq+s", "aq+agcl s"],
          feedback: "The ions are dissolved, (aq); the precipitate is a solid, (s). Mark schemes give a separate mark for state symbols.",
        },
        {
          point: "Spectator ions: Na⁺ and NO₃⁻",
          keywords: ["na+no3", "sodium ion+nitrate ion", "sodium ions+nitrate ions", "na+nitrate ion", "sodium ion+no3", "sodium and nitrate", "nitrate and sodium"],
          feedback:
            "Spectator ions are present but unchanged: Na⁺ and NO₃⁻ are dissolved at the start and still dissolved (as sodium nitrate solution) at the end.",
        },
      ],
      commonError:
        "Writing AgCl as (aq), or leaving NaNO₃ in the 'ionic' equation instead of splitting it into spectator ions.",
      strategy: "Think about particles",
    },
    {
      id: "ca-w02",
      topic: "calc",
      section: "calc-formulae",
      difficulty: "core",
      question:
        "Dilute sulfuric acid neutralises potassium hydroxide solution.\n(a) Write the balanced equation for this reaction, including state symbols. (2)\n(b) Write the ionic equation for the reaction. (1)\n(c) Explain why the ionic equation for the reaction of any acid with any alkali is the same. (1)",
      marks: 4,
      hints: [
        "Potassium is K⁺ and sulfate is SO₄²⁻, so the salt is K₂SO₄.",
        "Sulfuric acid gives two H⁺ ions, so you need two KOH.",
        "Which ions actually change in every neutralisation?",
      ],
      modelAnswer:
        "(a) H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l)\n(b) H⁺(aq) + OH⁻(aq) → H₂O(l)\n(c) All acids release H⁺ ions and all alkalis release OH⁻ ions in solution. The other ions (here K⁺ and SO₄²⁻) are spectator ions that are unchanged, so the only reaction is H⁺ joining OH⁻ to form water.",
      markScheme: [
        {
          point: "Correct formulae, balanced: H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O",
          keywords: ["2koh+k2so4+2h2o", "2 koh+k2so4+2 h2o"],
          feedback:
            "K⁺ and SO₄²⁻ combine as K₂SO₄. One H₂SO₄ releases two H⁺, so it needs 2KOH and makes 2H₂O.",
        },
        {
          point: "Correct state symbols: (aq) for acid, alkali and salt; (l) for water",
          keywords: ["2koh aq+2h2o l", "koh aq+h2o l", "2koh aq+h2o l", "koh aq+2h2o l", "2 koh aq+2 h2o l"],
          feedback: "Acid, alkali and the soluble salt are all dissolved, (aq); water is a liquid, (l) — never (aq).",
        },
        {
          point: "Ionic equation H⁺ + OH⁻ → H₂O",
          keywords: ["h+oh+yields h2o", "h aq+oh aq+h2o l", "hydrogen ion+hydroxide ion+yields h2o"],
          feedback: "The ionic equation for neutralisation is always H⁺(aq) + OH⁻(aq) → H₂O(l).",
        },
        {
          point: "Other ions are spectators / acids always give H⁺ and alkalis OH⁻, so only these react",
          keywords: ["spectator", "unchanged", "dont take part", "do not take part", "not involved", "don't react", "do not react", "only h+oh"],
          feedback:
            "Every acid supplies H⁺(aq) and every alkali supplies OH⁻(aq); the metal ions and the acid's anion are spectator ions, so the change is always the same.",
        },
      ],
      commonError: "Writing KSO₄ or K(SO₄)₂ for potassium sulfate, or forgetting to balance the water to 2H₂O.",
      strategy: "Balance the equation",
    },
    {
      id: "ca-w03",
      topic: "calc",
      section: "calc-moles",
      difficulty: "core",
      question:
        "Blue copper(II) sulfate crystals have the formula CuSO₄·5H₂O.\nCalculate the percentage by mass of water in the crystals.\n(Ar: H = 1, O = 16, S = 32, Cu = 63.5) (3)",
      marks: 3,
      hints: ["Find the Mr of the whole hydrated salt, remembering to add the water.", "What mass of that Mr is water?"],
      modelAnswer:
        "Mr of CuSO₄·5H₂O = 63.5 + 32 + (4 × 16) + 5 × 18 = 159.5 + 90 = 249.5\nMass of water in one formula = 5 × 18 = 90\n% water = 90 ÷ 249.5 × 100 = 36.1%",
      markScheme: [
        {
          point: "Mr of the hydrated salt = 249.5",
          keywords: ["249.5"],
          feedback: "Mr = CuSO₄ (159.5) + 5 × H₂O (5 × 18 = 90) = 249.5. The dot means add.",
        },
        {
          point: "Mass of water = 5 × 18 = 90",
          keywords: ["90"],
          feedback: "Five water molecules: 5 × (2 + 16) = 90.",
        },
        {
          point: "Answer 36.1% (accept 36%)",
          keywords: ["36.1", "36", "36.07", "36.0"],
          feedback: "% water = mass of water ÷ Mr × 100 = 90 ÷ 249.5 × 100 = 36.1%.",
        },
      ],
      commonError: "Using 159.5 as the Mr (forgetting the water) and getting 56.4% — water's share must be out of the total hydrated mass.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ca-w04",
      topic: "calc",
      section: "calc-moles",
      difficulty: "core",
      question:
        "Hydrated magnesium sulfate is made by this reaction:\nMg(s) + H₂SO₄(aq) + 7H₂O(l) → MgSO₄·7H₂O(aq) + H₂(g)\n(a) 4.80 g of magnesium completely reacts. Show that the maximum mass of hydrated magnesium sulfate that can be made is approximately 49 g. [Ar Mg = 24; Mr MgSO₄·7H₂O = 246] (2)\n(b) The actual yield of dry crystals is 40.6 g. Calculate the percentage yield. (1)\n(c) Give one reason why the percentage yield is less than 100%. (1)",
      marks: 4,
      hints: [
        "Moles of Mg = mass ÷ Ar.",
        "The ratio Mg : MgSO₄·7H₂O is 1 : 1 — so multiply those moles by 246.",
        "Think about what happens to the product during crystallisation and filtration.",
      ],
      modelAnswer:
        "(a) Moles of Mg = 4.80 ÷ 24 = 0.200 mol. Ratio 1 : 1, so 0.200 mol of MgSO₄·7H₂O. Mass = 0.200 × 246 = 49.2 g (approximately 49 g).\n(b) % yield = 40.6 ÷ 49.2 × 100 = 82.5%\n(c) Some of the magnesium sulfate stays dissolved in the solution and does not crystallise (some is also lost on the filter paper when transferring).",
      markScheme: [
        {
          point: "Moles of Mg = 4.80 ÷ 24 = 0.200",
          keywords: ["0.2", "4.80 24", "4.8 24"],
          feedback: "Start with moles of the reactant you know: 4.80 ÷ 24 = 0.200 mol of Mg.",
        },
        {
          point: "× 246 (1 : 1 ratio) = 49.2 g",
          keywords: ["49.2"],
          feedback: "In a 'show that' you must show the more precise value: 0.200 × 246 = 49.2 g.",
        },
        {
          point: "% yield = 40.6 ÷ 49.2 × 100 = 82.5%",
          keywords: ["82.5", "82.52", "83", "82.9", "82.86"],
          feedback: "% yield = actual ÷ theoretical × 100 = 40.6 ÷ 49.2 × 100 = 82.5% (82.9% if you used 49 g).",
        },
        {
          point: "Valid reason, e.g. some product stays dissolved / does not all crystallise; lost on filter paper or when transferring",
          keywords: [
            "stays dissolved",
            "remains dissolved",
            "left in solution",
            "remain in solution",
            "still dissolved",
            "not all crystallis",
            "lost+filter",
            "lost+transfer",
            "left on+filter",
            "spill",
            "stuck to",
            "left in the beaker",
            "lost+crystallis",
            "side reaction",
          ],
          feedback:
            "Good reasons: not all of the salt crystallises — some stays dissolved in the solution; some is lost on the filter paper, when transferring, or when washing the crystals.",
        },
      ],
      commonError:
        "Writing only '≈ 49 g' in the show-that (no credit without working), or inverting the % yield to get 121%.",
      strategy: "Use the mole ratio",
    },
    {
      id: "ca-w05",
      topic: "calc",
      section: "calc-moles",
      difficulty: "challenge",
      question:
        "A student heats 6.15 g of hydrated magnesium sulfate, MgSO₄·xH₂O, in a crucible. She reweighs and reheats until two readings are the same. The anhydrous magnesium sulfate left has a mass of 3.00 g.\n(a) Explain why she heats until two readings are the same. (1)\n(b) Calculate the value of x. (Mr: MgSO₄ = 120, H₂O = 18) (4)",
      marks: 5,
      hints: [
        "(a) What would be left in the solid if she stopped too early?",
        "(b) Mass of water = mass before − mass after.",
        "Convert both masses to moles, then divide the moles of water by the moles of MgSO₄.",
      ],
      modelAnswer:
        "(a) Heating to constant mass makes sure all the water of crystallisation has been removed.\n(b) Mass of water lost = 6.15 − 3.00 = 3.15 g\nMoles of MgSO₄ = 3.00 ÷ 120 = 0.0250 mol\nMoles of H₂O = 3.15 ÷ 18 = 0.175 mol\nx = 0.175 ÷ 0.0250 = 7, so the formula is MgSO₄·7H₂O.",
      markScheme: [
        {
          point: "To make sure all the water (of crystallisation) has been removed",
          keywords: ["all+water+removed", "all the water", "all water", "all+water+lost", "all+water+evaporat", "completely dehydrated", "fully dehydrated", "anhydrous+all"],
          feedback:
            "Heating to constant mass shows that all the water of crystallisation has gone — if water is left, the mass lost (and x) will be too small.",
        },
        {
          point: "Mass of water = 3.15 g",
          keywords: ["3.15"],
          feedback: "Mass of water = 6.15 − 3.00 = 3.15 g.",
        },
        {
          point: "Moles of MgSO₄ = 3.00 ÷ 120 = 0.0250",
          keywords: ["0.025"],
          feedback: "Moles of anhydrous salt = 3.00 ÷ 120 = 0.0250 mol.",
        },
        {
          point: "Moles of H₂O = 3.15 ÷ 18 = 0.175",
          keywords: ["0.175"],
          feedback: "Moles of water = 3.15 ÷ 18 = 0.175 mol.",
        },
        {
          point: "x = 0.175 ÷ 0.0250 = 7",
          keywords: ["7h2o", "x is 7", "x+7", "equals 7", "x equals 7", "ratio 1 to 7", "x 7"],
          feedback: "x = moles of water ÷ moles of MgSO₄ = 0.175 ÷ 0.0250 = 7.",
        },
      ],
      commonError:
        "Dividing the masses (3.15 ÷ 3.00) instead of the moles, or using the hydrated mass (6.15 g) for the moles of MgSO₄.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ca-w06",
      topic: "calc",
      section: "calc-moles",
      difficulty: "core",
      question:
        "A student heats 2.86 g of a red oxide of copper in a stream of hydrogen until only copper remains. The copper has a mass of 2.54 g.\nDetermine the empirical formula of the oxide. Show your working. (Ar: O = 16, Cu = 63.5) (3)",
      marks: 3,
      hints: ["What mass of oxygen was removed?", "Divide each mass by its Ar, then find the simplest whole-number ratio."],
      modelAnswer:
        "Mass of oxygen = 2.86 − 2.54 = 0.32 g\nMoles Cu = 2.54 ÷ 63.5 = 0.040; moles O = 0.32 ÷ 16 = 0.020\nRatio Cu : O = 0.040 : 0.020 = 2 : 1\nEmpirical formula = Cu₂O",
      markScheme: [
        {
          point: "Mass of oxygen = 0.32 g",
          keywords: ["0.32"],
          feedback: "The hydrogen removes the oxygen, so mass of oxygen = 2.86 − 2.54 = 0.32 g.",
        },
        {
          point: "Moles: Cu 0.040 and O 0.020 (divide by Ar)",
          keywords: ["0.04+0.02"],
          feedback: "Divide each mass by its Ar: Cu 2.54 ÷ 63.5 = 0.040 mol; O 0.32 ÷ 16 = 0.020 mol.",
        },
        {
          point: "Empirical formula Cu₂O",
          keywords: ["cu2o"],
          feedback: "0.040 : 0.020 = 2 : 1, so the empirical formula is Cu₂O (copper(I) oxide).",
        },
      ],
      commonError: "Dividing the mass of oxygen by 32 (the Mr of O₂) — in a formula you count O atoms, so use Ar = 16.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ca-w07",
      topic: "calc",
      section: "calc-moles",
      difficulty: "challenge",
      question:
        "A compound contains 24.24% carbon, 4.04% hydrogen and 71.72% chlorine by mass. Its relative formula mass (Mr) is 99.\nDetermine the empirical formula and the molecular formula of the compound. (Ar: H = 1, C = 12, Cl = 35.5) (4)",
      marks: 4,
      hints: [
        "Assume 100 g, so the percentages are masses. Divide each by its Ar.",
        "Divide all three answers by the smallest.",
        "Work out the empirical formula mass. How many times does it go into 99?",
      ],
      modelAnswer:
        "C: 24.24 ÷ 12 = 2.02; H: 4.04 ÷ 1 = 4.04; Cl: 71.72 ÷ 35.5 = 2.02\nDivide by 2.02: C 1, H 2, Cl 1 → empirical formula CH₂Cl\nEmpirical formula mass = 12 + 2 + 35.5 = 49.5\n99 ÷ 49.5 = 2, so molecular formula = C₂H₄Cl₂",
      markScheme: [
        {
          point: "Divides each % by Ar: C 2.02, H 4.04, Cl 2.02",
          keywords: ["2.02", "2.020"],
          feedback: "Treat the percentages as grams in 100 g and divide by Ar: C 2.02, H 4.04, Cl 2.02.",
        },
        {
          point: "Empirical formula CH₂Cl",
          keywords: ["ch2cl"],
          feedback: "Dividing by the smallest (2.02) gives 1 : 2 : 1, so the empirical formula is CH₂Cl.",
        },
        {
          point: "Empirical formula mass 49.5 and 99 ÷ 49.5 = 2",
          keywords: ["49.5"],
          feedback: "CH₂Cl = 12 + 2 + 35.5 = 49.5; 99 ÷ 49.5 = 2.",
        },
        {
          point: "Molecular formula C₂H₄Cl₂",
          keywords: ["c2h4cl2"],
          feedback: "Multiply every subscript by 2: C₂H₄Cl₂.",
        },
      ],
      commonError: "Using 35 or 71 for chlorine, or stopping at the empirical formula without using the Mr.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ca-w08",
      topic: "calc",
      section: "calc-volumes",
      difficulty: "core",
      question:
        "2.50 g of calcium carbonate reacts with excess dilute hydrochloric acid:\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n(a) Calculate the volume, in cm³, of carbon dioxide produced at rtp. (2)\n(b) Calculate the mass of calcium chloride formed. (2)\n(Ar: C = 12, O = 16, Cl = 35.5, Ca = 40; molar gas volume = 24 000 cm³ at rtp)",
      marks: 4,
      hints: [
        "Mr of CaCO₃ = 40 + 12 + 48.",
        "CaCO₃ : CO₂ and CaCO₃ : CaCl₂ are both 1 : 1.",
        "Volume = moles × 24 000 cm³; mass = moles × Mr.",
      ],
      modelAnswer:
        "(a) Mr CaCO₃ = 100, so moles CaCO₃ = 2.50 ÷ 100 = 0.0250 mol. Ratio 1 : 1 → 0.0250 mol CO₂. Volume = 0.0250 × 24 000 = 600 cm³.\n(b) Ratio 1 : 1 → 0.0250 mol CaCl₂. Mr CaCl₂ = 40 + 2 × 35.5 = 111. Mass = 0.0250 × 111 = 2.78 g.",
      markScheme: [
        {
          point: "Moles of CaCO₃ = 2.50 ÷ 100 = 0.0250",
          keywords: ["0.025"],
          feedback: "Mr CaCO₃ = 100, so moles = 2.50 ÷ 100 = 0.0250 mol.",
        },
        {
          point: "Volume of CO₂ = 600 cm³",
          keywords: ["600", "0.6 dm", "0.600 dm"],
          feedback: "1 : 1 ratio → 0.0250 mol CO₂; × 24 000 cm³ = 600 cm³.",
        },
        {
          point: "Mr of CaCl₂ = 111",
          keywords: ["111"],
          feedback: "CaCl₂ = 40 + (2 × 35.5) = 111.",
        },
        {
          point: "Mass of CaCl₂ = 2.78 g (accept 2.775, 2.8)",
          keywords: ["2.78", "2.775", "2.8", "2.77"],
          feedback: "0.0250 mol × 111 = 2.78 g.",
        },
      ],
      commonError: "Using 24 instead of 24 000 when the answer is asked for in cm³ (giving 0.6), or using the 2HCl coefficient for the CO₂ ratio.",
      strategy: "Use the mole ratio",
    },
    {
      id: "ca-w09",
      topic: "calc",
      section: "calc-volumes",
      difficulty: "challenge",
      question:
        "A student titrates 25.0 cm³ of potassium hydroxide solution with 0.120 mol/dm³ hydrochloric acid, using methyl orange. KOH + HCl → KCl + H₂O. Her titres are shown in the table. Concordant results are within 0.20 cm³ of each other.\n(a) Calculate the mean titre using concordant results only. (1)\n(b) Calculate the concentration of the potassium hydroxide in mol/dm³. (2)\n(c) Calculate the concentration of the potassium hydroxide in g/dm³. (Ar: H = 1, O = 16, K = 39) (2)",
      table: {
        caption: "Titration results",
        headers: ["", "Rough", "Titration 1", "Titration 2", "Titration 3"],
        rows: [["Volume of acid added (cm³)", "23.10", "22.45", "22.80", "22.55"]],
      },
      marks: 5,
      hints: [
        "Ignore the rough titre. Which two accurate titres are within 0.20 cm³ of each other?",
        "Moles HCl = concentration × titre ÷ 1000; the ratio is 1 : 1.",
        "Divide the moles of KOH by 0.0250 dm³; then multiply by the Mr of KOH for g/dm³.",
      ],
      modelAnswer:
        "(a) Titrations 1 and 3 are concordant: (22.45 + 22.55) ÷ 2 = 22.50 cm³\n(b) Moles HCl = 0.120 × 22.50 ÷ 1000 = 0.00270 mol. Ratio 1 : 1 → moles KOH = 0.00270 mol. Concentration = 0.00270 ÷ 0.0250 = 0.108 mol/dm³\n(c) Mr KOH = 39 + 16 + 1 = 56. Concentration = 0.108 × 56 = 6.05 g/dm³",
      markScheme: [
        {
          point: "Mean titre = 22.50 cm³ (titrations 1 and 3)",
          keywords: ["22.5"],
          feedback:
            "Only 22.45 and 22.55 are within 0.20 cm³ of each other (22.80 is 0.25 away). Mean = (22.45 + 22.55) ÷ 2 = 22.50 cm³.",
        },
        {
          point: "Moles HCl = 0.120 × 22.50 ÷ 1000 = 0.00270",
          keywords: ["0.0027", "2.7 10 3", "2.70 10 3", "2.7 x 10 3", "2.70 x 10 3"],
          feedback: "Moles of acid = concentration × volume in dm³ = 0.120 × 0.02250 = 0.00270 mol.",
        },
        {
          point: "Concentration KOH = 0.00270 ÷ 0.0250 = 0.108 mol/dm³",
          keywords: ["0.108"],
          feedback: "1 : 1 ratio → 0.00270 mol KOH in 25.0 cm³; 0.00270 ÷ 0.0250 dm³ = 0.108 mol/dm³.",
        },
        {
          point: "Mr KOH = 56",
          keywords: ["56"],
          feedback: "Mr KOH = 39 + 16 + 1 = 56.",
        },
        {
          point: "Concentration = 6.05 g/dm³ (accept 6.0 to 6.05)",
          keywords: ["6.05", "6.048", "6.0", "6.04"],
          feedback: "g/dm³ = mol/dm³ × Mr = 0.108 × 56 = 6.05 g/dm³.",
        },
      ],
      commonError:
        "Including the rough or the 22.80 titre in the mean, or forgetting to divide the titre by 1000 before multiplying by the concentration.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ca-w10",
      topic: "calc",
      section: "calc-volumes",
      difficulty: "challenge",
      question:
        "25.0 cm³ of sodium hydroxide solution is exactly neutralised by 18.60 cm³ of 0.0500 mol/dm³ sulfuric acid.\nH₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)\n(a) Calculate the concentration of the sodium hydroxide solution in mol/dm³. (3)\n(b) Convert your answer to g/dm³. (Ar: H = 1, O = 16, Na = 23) (1)",
      marks: 4,
      hints: [
        "Moles of H₂SO₄ = concentration × (volume ÷ 1000).",
        "How many NaOH react with each H₂SO₄?",
        "Divide by 0.0250 dm³; multiply by Mr (40) for g/dm³.",
      ],
      modelAnswer:
        "(a) Moles H₂SO₄ = 0.0500 × 18.60 ÷ 1000 = 0.000930 mol\nRatio 1 : 2 → moles NaOH = 2 × 0.000930 = 0.00186 mol\nConcentration NaOH = 0.00186 ÷ 0.0250 = 0.0744 mol/dm³\n(b) Mr NaOH = 40, so 0.0744 × 40 = 2.98 g/dm³",
      markScheme: [
        {
          point: "Moles H₂SO₄ = 0.000930",
          keywords: ["0.00093", "9.3 10 4", "9.30 10 4", "9.3 x 10 4", "9.30 x 10 4"],
          feedback: "0.0500 × (18.60 ÷ 1000) = 0.000930 mol of sulfuric acid.",
        },
        {
          point: "Uses the 1 : 2 ratio: moles NaOH = 0.00186",
          keywords: ["0.00186", "1.86 10 3", "1.86 x 10 3"],
          feedback: "Each H₂SO₄ neutralises two NaOH, so moles NaOH = 2 × 0.000930 = 0.00186 mol.",
        },
        {
          point: "Concentration = 0.0744 mol/dm³",
          keywords: ["0.0744"],
          feedback: "0.00186 ÷ (25.0 ÷ 1000) = 0.0744 mol/dm³.",
        },
        {
          point: "2.98 g/dm³ (accept 2.976, 3.0)",
          keywords: ["2.98", "2.976", "2.97"],
          feedback: "g/dm³ = 0.0744 × 40 = 2.98 g/dm³.",
        },
      ],
      commonError:
        "Using a 1 : 1 ratio (answer 0.0372) or halving instead of doubling — sulfuric acid releases two H⁺ per formula, so it neutralises twice as much NaOH.",
      strategy: "Use the mole ratio",
    },
    {
      id: "ca-w11",
      topic: "calc",
      section: "calc-moles",
      difficulty: "core",
      question:
        "Iron ore contains iron(III) oxide, Fe₂O₃.\n(a) Calculate the percentage by mass of iron in iron(III) oxide. (2)\n(b) Calculate the number of iron atoms in 11.2 g of iron. (2)\n(Ar: O = 16, Fe = 56; Avogadro's constant = 6.02 × 10²³ per mol)",
      marks: 4,
      hints: [
        "Work out the Mr of Fe₂O₃, then the total mass of the iron atoms in it.",
        "For (b), change grams into moles first.",
        "Moles × Avogadro's constant gives the number of atoms.",
      ],
      modelAnswer:
        "(a) Mr of Fe₂O₃ = (2 × 56) + (3 × 16) = 160. Mass of iron = 2 × 56 = 112.\n% Fe = 112 ÷ 160 × 100 = 70.0%\n(b) Moles of Fe = 11.2 ÷ 56 = 0.200 mol\nNumber of atoms = 0.200 × 6.02 × 10²³ = 1.204 × 10²³ (1.20 × 10²³) atoms",
      markScheme: [
        {
          point: "Mr of Fe₂O₃ = 160 and/or mass of iron = 112",
          keywords: ["160", "112"],
          feedback: "Mr of Fe₂O₃ = 2 × 56 + 3 × 16 = 160, of which 2 × 56 = 112 is iron. Remember there are TWO iron atoms.",
        },
        {
          point: "% iron = 70(.0)%",
          keywords: ["70", "70.0"],
          feedback: "% by mass = mass of iron ÷ Mr × 100 = 112 ÷ 160 × 100 = 70.0%.",
        },
        {
          point: "Moles of Fe = 11.2 ÷ 56 = 0.200",
          keywords: ["0.2", "0.200"],
          feedback: "Convert the mass to moles first: 11.2 ÷ 56 = 0.200 mol of iron atoms.",
        },
        {
          point: "Number of atoms = 0.200 × 6.02 × 10²³ = 1.20 × 10²³",
          keywords: ["1.204", "1.20", "1.2"],
          feedback: "Number of particles = moles × Avogadro's constant = 0.200 × 6.02 × 10²³ = 1.20 × 10²³ atoms.",
        },
      ],
      commonError: "Using only one iron atom in (a) (56 ÷ 160 = 35%), or in (b) dividing by Avogadro's constant instead of multiplying.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ca-w12",
      topic: "calc",
      section: "calc-moles",
      difficulty: "challenge",
      question:
        "A student finds the empirical formula of magnesium oxide by burning magnesium ribbon in a crucible.\n(a) Describe how she should carry out the experiment to get reliable results. (3)\n(b) Her results are in the table. Use them to find the empirical formula of magnesium oxide. (2)\n(Ar: O = 16, Mg = 24)",
      table: {
        caption: "Results",
        headers: ["Measurement", "Mass / g"],
        rows: [
          ["empty crucible + lid", "25.12"],
          ["crucible + lid + magnesium", "25.60"],
          ["crucible + lid + magnesium oxide (at the end)", "25.92"],
        ],
      },
      marks: 5,
      hints: [
        "Magnesium needs oxygen to react, but magnesium oxide is a fine white smoke that can escape.",
        "How does she know when all the magnesium has reacted?",
        "Find the mass of magnesium and the mass of oxygen, then convert each to moles.",
      ],
      modelAnswer:
        "(a) Weigh the empty crucible and lid, then weigh again with the coiled magnesium ribbon. Heat strongly, lifting the lid occasionally to let air (oxygen) in while keeping the white oxide smoke inside. When it stops glowing, let it cool and reweigh; reheat and reweigh until the mass is constant, so all the magnesium has reacted.\n(b) Mass of Mg = 25.60 − 25.12 = 0.48 g → 0.48 ÷ 24 = 0.020 mol. Mass of O = 25.92 − 25.60 = 0.32 g → 0.32 ÷ 16 = 0.020 mol. Ratio Mg : O = 1 : 1, so the empirical formula is MgO.",
      markScheme: [
        {
          point: "Weigh the crucible (and lid) empty and with the magnesium",
          keywords: ["weigh", "balance", "record+mass+before", "measure+mass+before"],
          feedback: "Start by weighing the empty crucible and lid, then with the magnesium in it, so you know the mass of magnesium used.",
        },
        {
          point: "Lift the lid occasionally to let air/oxygen in (but keep the oxide smoke in)",
          keywords: ["lift+lid", "lifting+lid", "raise+lid", "open+lid", "lid+let air", "lid+oxygen in", "lid+air in"],
          feedback: "The lid keeps the magnesium oxide smoke in; lifting it briefly from time to time lets in the oxygen the magnesium needs.",
        },
        {
          point: "Heat (and reweigh) until the mass is constant",
          keywords: ["constant mass", "mass is constant", "mass+constant", "until+no change", "no further change", "reheat", "heat again+reweigh", "mass+stops changing", "doesnt change", "does not change", "mass+no longer change", "until+same mass", "until+mass+same"],
          feedback: "Heat, cool and reweigh repeatedly until two readings are the same — constant mass shows all the magnesium has reacted.",
        },
        {
          point: "Moles: Mg = 0.48 ÷ 24 = 0.020 and O = 0.32 ÷ 16 = 0.020",
          keywords: ["0.32+0.02", "0.32+0.020"],
          feedback: "Mass Mg = 25.60 − 25.12 = 0.48 g; mass O = 25.92 − 25.60 = 0.32 g. Divide each by its Ar: both are 0.020 mol.",
        },
        {
          point: "Ratio 1 : 1, so empirical formula MgO",
          keywords: ["mgo", "1:1", "1 : 1"],
          feedback: "Equal moles of Mg and O atoms → the simplest ratio is 1 : 1 → MgO.",
        },
      ],
      commonError: "Using the total mass of oxide (0.80 g) as the mass of oxygen, or comparing the masses 0.48 : 0.32 directly instead of converting to moles.",
      strategy: "Follow the method step by step",
    },
  ],
};
