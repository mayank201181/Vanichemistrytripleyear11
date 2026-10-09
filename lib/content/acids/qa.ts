import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-acids",
  title: "Written answers · Acids, Salts & Chemical Tests",
  subtitle: "Exam-style practice for the teacher's Q1, Q2(b)(ii) and Q5: salt preparations, titration method and results, and ion tests.",
  topic: "acids",
  questions: [
    {
      id: "ac-w01",
      topic: "acids",
      section: "acids-acids",
      difficulty: "warmup",
      question:
        "Dilute nitric acid is neutralised by potassium hydroxide solution.\n(a) Name the ion present in all acids and the ion present in all alkalis. (2)\n(b) Write the ionic equation for this neutralisation, including state symbols. (2)",
      marks: 4,
      hints: [
        "Acids and alkalis are defined by the ions they release in water.",
        "In the ionic equation, leave out the spectator ions K⁺ and NO₃⁻.",
        "Water is a liquid — what is its state symbol?",
      ],
      modelAnswer:
        "(a) Acids contain hydrogen ions, H⁺(aq). Alkalis contain hydroxide ions, OH⁻(aq).\n(b) H⁺(aq) + OH⁻(aq) → H₂O(l)",
      markScheme: [
        {
          point: "Acids: hydrogen ions, H⁺",
          keywords: ["hydrogen ion", "h ion", "proton", "h aq"],
          feedback: "All acids release hydrogen ions, H⁺(aq), in water — that is what makes them acidic.",
        },
        {
          point: "Alkalis: hydroxide ions, OH⁻",
          keywords: ["hydroxide ion", "oh ion", "oh"],
          feedback: "All alkalis release hydroxide ions, OH⁻(aq), in water.",
        },
        {
          point: "Ionic equation H⁺ + OH⁻ → H₂O",
          keywords: ["oh yields h2o", "oh aq yields h2o", "oh h yields h2o", "oh h aq yields h2o", "oh aq h aq yields h2o", "oh yields water", "oh aq yields water", "oh+h2o", "h oh yields water", "hydrogen ion+hydroxide ion+water"],
          feedback: "The ionic equation for every acid–alkali neutralisation is H⁺ + OH⁻ → H₂O; the K⁺ and NO₃⁻ ions are spectators.",
        },
        {
          point: "Correct state symbols: (aq), (aq) → (l)",
          keywords: ["oh aq yields h2o l", "h aq yields h2o l", "oh aq yields water l", "h aq yields water l"],
          feedback: "Include state symbols: H⁺(aq) + OH⁻(aq) → H₂O(l). Water is a liquid, (l), not (aq).",
        },
      ],
      commonError:
        "Writing the full equation (HNO₃ + KOH → KNO₃ + H₂O) when the ionic equation is asked for, or giving water the state symbol (aq).",
      strategy: "Think about particles",
    },
    {
      id: "ac-w02",
      topic: "acids",
      section: "acids-titration",
      difficulty: "warmup",
      question:
        "A student titrates 25.0 cm³ of sodium hydroxide solution with dilute hydrochloric acid, using phenolphthalein in the conical flask.\n(a) State the colour of the solution in the flask at the start, and its colour at the end point. (2)\n(b) Explain why universal indicator is not suitable for this titration. (1)",
      marks: 3,
      hints: [
        "Phenolphthalein has only two colours: one in acid, one in alkali.",
        "What is in the flask at the start — acid or alkali?",
        "Think about how universal indicator's colour changes as the pH changes slowly.",
      ],
      modelAnswer:
        "(a) At the start the solution is pink (alkali). At the end point it turns colourless.\n(b) Universal indicator changes colour gradually through many colours, so there is no sharp end point.",
      markScheme: [
        {
          point: "Start: pink",
          keywords: ["pink to", "pink at", "starts pink", "start+pink", "pink+beginning", "pink then", "pink yields", "from pink", "pink initially", "is pink", "magenta"],
          feedback: "Phenolphthalein is pink in alkali, and the flask starts off containing the sodium hydroxide.",
        },
        {
          point: "End point: colourless",
          keywords: ["to colourless", "yields colourless", "turns colourless", "becomes colourless", "goes colourless", "colourless+end", "then colourless", "no colour", "to clear", "turns clear"],
          feedback: "Phenolphthalein turns colourless as soon as all the alkali has been neutralised. Note: 'clear' means transparent — 'colourless' is the safer word.",
        },
        {
          point: "Universal indicator: gradual colour change / many colours, so no sharp (distinct) end point",
          keywords: ["gradual", "no sharp", "not sharp", "no clear", "no distinct", "no definite", "many colours", "range of colours", "several colours", "lots of colours", "different colours", "hard to see when"],
          feedback: "Universal indicator changes gradually through many colours, so there is no sharp (distinct) end point — you cannot tell exactly which drop neutralised the alkali.",
        },
      ],
      commonError:
        "Saying universal indicator 'is not accurate' — the mark needs the reason: gradual colour change / no sharp end point.",
      strategy: "Recall the definition",
    },
    {
      id: "ac-w03",
      topic: "acids",
      section: "acids-titration",
      difficulty: "core",
      question:
        "Describe how a student could carry out a titration to find the exact volume of dilute hydrochloric acid needed to neutralise 25.0 cm³ of potassium hydroxide solution. Name the apparatus used. (5)",
      marks: 5,
      hints: [
        "Two pieces of precise glassware are needed: one for the alkali and one for the acid.",
        "How do you know when the alkali has just been neutralised?",
        "How do you make sure your final answer is reliable?",
      ],
      modelAnswer:
        "Use a pipette and pipette filler to transfer 25.0 cm³ of potassium hydroxide solution into a conical flask, and add a few drops of methyl orange indicator. Fill a burette with the hydrochloric acid and record the initial reading. Put the flask on a white tile and add the acid from the burette while swirling the flask. Near the end point add the acid drop by drop until the indicator changes colour from yellow to orange, then record the final reading; the titre is final minus initial reading. Do a rough titration first, then repeat accurately until you get concordant results (within 0.20 cm³) and calculate the mean of the concordant titres.",
      markScheme: [
        {
          point: "Use a pipette (and filler) to measure the 25.0 cm³ of alkali into a conical flask",
          keywords: ["pipette"],
          feedback: "The alkali must be measured with a (volumetric) pipette and pipette filler — a measuring cylinder is not precise enough.",
        },
        {
          point: "Add a few drops of a suitable indicator, e.g. methyl orange or phenolphthalein",
          keywords: ["methyl orange", "phenolphthalein", "drops of indicator", "drops+indicator", "suitable indicator"],
          feedback: "Add 2–3 drops of an indicator such as methyl orange (or phenolphthalein) to the alkali so you can see the end point.",
        },
        {
          point: "Add the acid from a burette (while swirling the flask)",
          keywords: ["burette", "burrete", "burrette"],
          feedback: "The acid is added from a burette, which lets you add a measured, variable volume — swirl the flask as you add it.",
        },
        {
          point: "Add dropwise near the end point until the indicator just changes colour (e.g. yellow → orange)",
          keywords: ["dropwise", "drop by drop", "drop wise", "drops at a time", "colour change", "changes colour", "change colour", "yellow+orange", "pink+colourless", "end point", "to orange", "turns orange", "yields orange", "to colourless", "turns colourless"],
          feedback: "Stop at the end point — when the indicator just changes colour (methyl orange: yellow → orange). Add the acid drop by drop near the end so you do not overshoot.",
        },
        {
          point: "Record the volume added and repeat until concordant results are obtained; calculate the mean",
          keywords: ["concordant", "repeat", "mean", "average", "within 0.2", "within 0.1"],
          feedback: "Do a rough titration then repeat accurately until results are concordant (within 0.20 cm³), and calculate the mean of the concordant titres.",
        },
      ],
      commonError:
        "Saying 'add acid until it is neutral' without naming the indicator or the colour change, or forgetting to repeat to concordant results.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ac-w04",
      topic: "acids",
      section: "acids-titration",
      difficulty: "core",
      question:
        "In a titration, the rough titration started at a burette reading of 1.25 cm³ and finished at 24.10 cm³. The four accurate titrations are shown in the table. Concordant results are within 0.20 cm³ of each other.\n(a) Calculate the volume of acid added in the rough titration. (1)\n(b) Identify the concordant results and use them to calculate the mean volume of acid. (2)\n(c) Explain why the rough titration is not used when calculating the mean. (1)",
      table: {
        caption: "Accurate titrations",
        headers: ["", "Titration 1", "Titration 2", "Titration 3", "Titration 4"],
        rows: [
          ["final reading (cm³)", "22.60", "23.40", "22.40", "23.05"],
          ["initial reading (cm³)", "0.20", "0.45", "0.10", "0.35"],
          ["volume added (cm³)", "22.40", "22.95", "22.30", "22.70"],
        ],
      },
      marks: 4,
      hints: [
        "Volume added = final reading − initial reading. Give it to 2 decimal places.",
        "Look for the two accurate titres closest together — the difference must be 0.20 cm³ or less.",
        "How was the acid added during the rough titration?",
      ],
      modelAnswer:
        "(a) 24.10 − 1.25 = 22.85 cm³\n(b) Titrations 1 and 3 are concordant (22.40 and 22.30 cm³, 0.10 cm³ apart). Mean = (22.40 + 22.30) ÷ 2 = 22.35 cm³\n(c) In the rough titration the acid is added quickly to find the approximate end point, so it usually overshoots and is less accurate.",
      markScheme: [
        {
          point: "Rough titre = 22.85 cm³",
          keywords: ["22.85"],
          feedback: "Rough titre = final − initial = 24.10 − 1.25 = 22.85 cm³ (always 2 decimal places).",
        },
        {
          point: "Selects titrations 1 and 3 (22.40 and 22.30 cm³) as concordant",
          keywords: ["1 and 3", "one and three", "first and third", "22.40 and 22.30", "22.4 and 22.3", "22.30 and 22.40", "22.35"],
          feedback: "Only titrations 1 and 3 (22.40 and 22.30 cm³) are within 0.20 cm³ of each other; titration 4 is 0.30 cm³ from titration 1 and 0.40 cm³ from titration 3.",
        },
        {
          point: "Mean = 22.35 cm³",
          keywords: ["22.35"],
          feedback: "Mean = (22.40 + 22.30) ÷ 2 = 22.35 cm³. Do not include titrations 2 or 4 or the rough.",
        },
        {
          point: "Rough titration: acid added quickly / only approximate, so the end point is overshot (less accurate)",
          keywords: ["approximat", "overshoot", "overshot", "went past", "quickly", "fast", "estimate", "less accurate", "not accurate", "less precise", "guide"],
          feedback: "The rough titration is done quickly just to find the approximate end point, so it usually overshoots — it is less accurate and is never included in the mean.",
        },
      ],
      commonError:
        "Averaging all four accurate titres (or including the rough), or choosing titrations 1 and 4 because they are 'nearly' within 0.20 cm³.",
      strategy: "Read the data carefully",
    },
    {
      id: "ac-w05",
      topic: "acids",
      section: "acids-salts",
      difficulty: "core",
      question:
        "Describe how you could prepare a pure, dry sample of hydrated magnesium sulfate crystals, MgSO₄·7H₂O, starting from magnesium oxide powder and dilute sulfuric acid. (5)",
      marks: 5,
      hints: [
        "Magnesium oxide is insoluble — how much of it should you add, and why?",
        "How do you remove what is left over?",
        "Hydrated crystals must not be heated to dryness. What do you do instead?",
      ],
      modelAnswer:
        "Warm the dilute sulfuric acid in a beaker and add magnesium oxide a spatula at a time, stirring, until it is in excess and no more dissolves, so that all the acid has reacted. Filter the mixture to remove the excess magnesium oxide. Heat the filtrate in an evaporating basin to the crystallisation point (until crystals form on a glass rod dipped in it). Leave the solution to cool so that crystals form. Filter off the crystals, wash them with a little cold distilled water and dry them between filter papers.",
      markScheme: [
        {
          point: "Add magnesium oxide to the acid until in excess / no more dissolves (so all the acid reacts)",
          keywords: ["excess", "no more dissolves", "stops dissolving", "until some remains", "no longer dissolves", "left over", "until no more reacts", "some solid remains"],
          feedback: "Add the magnesium oxide until it is in excess (some stays undissolved) — this makes sure all the acid has been used up.",
        },
        {
          point: "Filter to remove the excess (unreacted) magnesium oxide",
          keywords: ["filter+excess", "filter+unreacted", "filter+undissolved", "filter+leftover", "filter+left over", "filter+remove", "filter+residue", "filter+mixture"],
          feedback: "Filter the mixture to remove the excess (unreacted) magnesium oxide; keep the filtrate.",
        },
        {
          point: "Heat the filtrate to the crystallisation point / evaporate some of the water",
          keywords: ["crystallisation point", "point of crystallisation", "glass rod", "evaporate some", "evaporate+half", "crystals start", "crystals form on", "saturated", "heat+evaporating basin"],
          feedback: "Heat the filtrate to evaporate some of the water until it reaches the crystallisation point (test: crystals form on a glass rod). Do not heat to dryness.",
        },
        {
          point: "Leave to cool so that crystals form",
          keywords: ["cool", "room temperature"],
          feedback: "Leave the hot, concentrated solution to cool — the salt is less soluble when cold, so crystals form.",
        },
        {
          point: "Filter off the crystals, wash with a little cold distilled water and dry between filter papers / in a warm oven",
          keywords: ["filter paper", "oven", "desiccator", "blot", "paper towel", "cold distilled", "cold water", "wash"],
          feedback: "Filter off the crystals, wash with a little cold distilled water, then dry them between filter papers or in a warm oven/desiccator.",
        },
      ],
      commonError:
        "Writing 'heat until all the water has evaporated' — this removes the water of crystallisation and loses the crystallisation-point mark.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ac-w06",
      topic: "acids",
      section: "acids-salts",
      difficulty: "core",
      question:
        "Barium sulfate is insoluble in water. Describe how a pure, dry sample of barium sulfate could be prepared in the laboratory. Name two suitable solutions in your answer. (4)",
      marks: 4,
      hints: [
        "An insoluble salt is made by mixing two soluble substances.",
        "One solution must contain barium ions and the other sulfate ions — which barium compounds are soluble?",
        "After mixing, how do you separate, clean and dry the solid?",
      ],
      modelAnswer:
        "Mix barium chloride solution with sodium sulfate solution in a beaker; a white precipitate of barium sulfate forms. Filter the mixture to collect the precipitate on the filter paper. Wash the precipitate with distilled water to remove soluble impurities such as sodium chloride. Dry it in a warm oven.",
      markScheme: [
        {
          point: "Mix two suitable solutions, e.g. barium chloride/barium nitrate and sodium sulfate/potassium sulfate/sulfuric acid",
          keywords: ["barium chloride+sodium sulfate", "barium chloride+potassium sulfate", "barium chloride+sulfuric", "barium nitrate+sodium sulfate", "barium nitrate+potassium sulfate", "barium nitrate+sulfuric", "barium chloride+magnesium sulfate", "barium chloride+copper", "bacl2+na2so4", "bacl2+h2so4", "bacl2+k2so4"],
          feedback: "Choose a soluble barium compound (barium chloride or barium nitrate) and a soluble sulfate (sodium or potassium sulfate, or dilute sulfuric acid), and mix the solutions.",
        },
        {
          point: "Filter to collect the precipitate",
          keywords: ["filter"],
          feedback: "Filter the mixture — the barium sulfate precipitate is left as the residue in the filter paper.",
        },
        {
          point: "Wash the precipitate with distilled water",
          keywords: ["wash", "rinse", "distilled water", "deionised"],
          feedback: "Wash the residue with distilled water to remove the soluble ions (e.g. Na⁺ and Cl⁻) left on it.",
        },
        {
          point: "Dry in a warm oven / between filter papers",
          keywords: ["oven", "desiccator", "between filter paper", "dry+filter paper", "dried", "drying", "dry it", "leave+dry", "warm place", "dry the"],
          feedback: "Finally dry the solid — in a warm oven or by pressing between filter papers.",
        },
      ],
      commonError:
        "Trying to make an insoluble salt by the excess-solid method or by crystallising — insoluble salts are made by precipitation, then filtering, washing and drying.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "ac-w07",
      topic: "acids",
      section: "acids-tests",
      difficulty: "core",
      question:
        "A fertiliser is thought to be ammonium sulfate, (NH₄)₂SO₄. Describe tests, with their positive results, to show that it contains ammonium ions and sulfate ions. Explain why an acid is added before the second reagent in the test for the anion. (5)",
      marks: 5,
      hints: [
        "Ammonium ions release a gas when warmed with an alkali — which gas, and how do you test for it?",
        "The anion test uses a barium compound.",
        "Which ion could also give a white precipitate with barium ions?",
      ],
      modelAnswer:
        "Ammonium ions: dissolve some fertiliser in water, add sodium hydroxide solution and warm gently. Ammonia gas is given off, which turns damp red litmus paper blue.\nSulfate ions: add dilute hydrochloric acid, then barium chloride solution. A white precipitate (of barium sulfate) forms.\nThe dilute hydrochloric acid is added first to remove any carbonate ions, which would also give a white precipitate with barium ions.",
      markScheme: [
        {
          point: "Add sodium hydroxide solution and warm",
          keywords: ["sodium hydroxide+warm", "sodium hydroxide+heat", "naoh+warm", "naoh+heat", "alkali+warm", "alkali+heat"],
          feedback: "Warm the sample with sodium hydroxide solution: NH₄⁺ + OH⁻ → NH₃ + H₂O.",
        },
        {
          point: "Gas (ammonia) turns damp red litmus paper blue",
          keywords: ["litmus+blue", "indicator paper+blue", "universal indicator+blue"],
          feedback: "Test the gas with damp red litmus paper — ammonia turns it blue.",
        },
        {
          point: "Add dilute hydrochloric acid then barium chloride solution",
          keywords: ["barium chloride", "bacl2", "barium nitrate"],
          feedback: "For sulfate, add dilute hydrochloric acid followed by barium chloride solution.",
        },
        {
          point: "White precipitate forms",
          keywords: ["white precipitate", "white solid", "white+precipitate"],
          feedback: "A white precipitate of barium sulfate shows sulfate ions: Ba²⁺ + SO₄²⁻ → BaSO₄.",
        },
        {
          point: "Acid removes carbonate ions, which would also form a white precipitate",
          keywords: ["carbonate"],
          feedback: "The dilute acid reacts with and removes carbonate ions, which would otherwise also form a white precipitate (barium carbonate) and give a false positive.",
        },
      ],
      commonError:
        "Using dilute sulfuric acid in the sulfate test (it adds sulfate ions), or testing ammonia with blue litmus / dry litmus.",
      strategy: "Recall the definition",
    },
    {
      id: "ac-w08",
      topic: "acids",
      section: "acids-salts",
      difficulty: "challenge",
      question:
        "A student found that 23.60 cm³ of dilute hydrochloric acid exactly neutralises 25.0 cm³ of potassium hydroxide solution, using a few drops of methyl orange.\nHCl + KOH → KCl + H₂O\nDescribe how the student could use this result to obtain pure, dry crystals of potassium chloride. (5)",
      marks: 5,
      hints: [
        "The methyl orange is now an impurity. How can you make the salt solution without it?",
        "After that, the steps are the same as for any soluble salt.",
        "Think: crystallisation point → cool → filter → wash → dry.",
      ],
      modelAnswer:
        "Repeat the titration using exactly the same volumes — pipette 25.0 cm³ of potassium hydroxide into a flask and add 23.60 cm³ of hydrochloric acid from the burette — but without the indicator. Pour the solution into an evaporating basin and heat it to evaporate some of the water until the crystallisation point is reached (crystals form on a glass rod). Leave the solution to cool so that crystals form. Filter off the crystals, wash them with a little cold distilled water and dry them between filter papers.",
      markScheme: [
        {
          point: "Repeat / mix the same volumes (25.0 cm³ alkali + 23.60 cm³ acid)",
          keywords: ["same volume", "same amount", "same quantit", "repeat", "exact volume", "again"],
          feedback: "Mix exactly the same volumes again (25.0 cm³ of alkali and 23.60 cm³ of acid) so that neither reactant is left over.",
        },
        {
          point: "Without indicator (or remove it with activated charcoal and filter)",
          keywords: ["without indicator", "no indicator", "without methyl orange", "charcoal", "omit+indicator", "leave out+indicator", "not add indicator", "dont add indicator", "not use indicator", "dont use indicator", "remove+indicator"],
          feedback: "The indicator would contaminate the salt, so repeat the titration WITHOUT it (or remove it with activated charcoal and filter).",
        },
        {
          point: "Heat / evaporate some of the water to the crystallisation point",
          keywords: ["crystallisation point", "point of crystallisation", "glass rod", "evaporate", "saturated", "crystals start", "crystals form on"],
          feedback: "Heat the solution to evaporate some of the water until the crystallisation point (crystals form on a glass rod).",
        },
        {
          point: "Leave to cool and crystallise; filter off the crystals",
          keywords: ["cool"],
          feedback: "Leave to cool so crystals form, then filter them off.",
        },
        {
          point: "Wash with a little cold distilled water and dry between filter papers / in a warm oven",
          keywords: ["filter paper", "oven", "desiccator", "blot", "paper towel", "cold distilled", "cold water", "wash"],
          feedback: "Wash the crystals with a little cold distilled water and dry between filter papers or in a warm oven.",
        },
      ],
      commonError:
        "Leaving the indicator in (the crystals are contaminated), or adding potassium hydroxide 'in excess' and filtering — the excess alkali is soluble and cannot be filtered off.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ac-w09",
      topic: "acids",
      section: "acids-salts",
      difficulty: "challenge",
      question:
        "A student made copper(II) sulfate solution from copper(II) oxide and dilute sulfuric acid. Instead of heating the solution only to its crystallisation point, she kept heating until no liquid was left. Explain why she would not obtain pure, blue, hydrated copper(II) sulfate crystals. (3)",
      marks: 3,
      hints: [
        "What does 'hydrated' mean in CuSO₄·5H₂O?",
        "What colour is copper(II) sulfate without its water?",
        "When crystals form from a cooling solution, where do soluble impurities end up?",
      ],
      modelAnswer:
        "Heating to dryness drives off the water of crystallisation, so white anhydrous copper(II) sulfate powder forms instead of blue crystals. Also, any soluble impurities would stay in the solid; when you crystallise by cooling, the impurities stay dissolved in the remaining solution and are filtered away.",
      markScheme: [
        {
          point: "The water of crystallisation is lost / driven off",
          keywords: ["water of crystallisation", "lose+water", "loses water", "lost+water", "remove+water+crystal", "drive off+water", "driven off"],
          feedback: "Strong heating drives off the water of crystallisation — the H₂O molecules that are part of the hydrated crystal (CuSO₄·5H₂O).",
        },
        {
          point: "Anhydrous (white) copper(II) sulfate / white powder forms instead",
          keywords: ["anhydrous", "white"],
          feedback: "Without its water of crystallisation the product is white anhydrous copper(II) sulfate, not blue crystals.",
        },
        {
          point: "Soluble impurities stay in the solid instead of remaining in solution",
          keywords: ["impurit", "impure", "contaminat"],
          feedback: "Evaporating to dryness keeps every dissolved substance, including impurities, in the solid. Crystallising leaves soluble impurities in the leftover solution.",
        },
      ],
      commonError:
        "Saying 'the crystals would burn' or 'the copper sulfate would evaporate' — the key idea is loss of water of crystallisation, forming white anhydrous copper(II) sulfate.",
      strategy: "Think about particles",
    },
    {
      id: "ac-w10",
      topic: "acids",
      section: "acids-tests",
      difficulty: "challenge",
      question:
        "Two solid salts, Y and Z, are tested.\nY: a solution of Y gives a green precipitate with sodium hydroxide solution. A solution of Y gives a white precipitate when dilute hydrochloric acid and then barium chloride solution are added.\nZ: Z gives a lilac flame in a flame test. A solution of Z gives a yellow precipitate when dilute nitric acid and then silver nitrate solution are added.\nIdentify the ions present in Y and in Z, and write the ionic equation, with state symbols, for the formation of the yellow precipitate. (5)",
      marks: 5,
      hints: [
        "Which metal hydroxide precipitate is green?",
        "Acidified barium chloride is the test for which anion? Lilac flame belongs to which metal?",
        "Silver halides: white chloride, cream bromide, yellow ...?",
      ],
      modelAnswer:
        "Y: the green precipitate shows iron(II) ions, Fe²⁺; the white precipitate with acidified barium chloride shows sulfate ions, SO₄²⁻. Y is iron(II) sulfate.\nZ: the lilac flame shows potassium ions, K⁺; the yellow precipitate with acidified silver nitrate shows iodide ions, I⁻. Z is potassium iodide.\nAg⁺(aq) + I⁻(aq) → AgI(s)",
      markScheme: [
        {
          point: "Y contains iron(II) ions, Fe²⁺ (green precipitate)",
          keywords: ["iron ii", "iron 2", "fe2", "ferrous"],
          feedback: "A green precipitate with NaOH(aq) is iron(II) hydroxide, so Y contains Fe²⁺ (iron(III) would give a brown precipitate).",
        },
        {
          point: "Y contains sulfate ions, SO₄²⁻",
          keywords: ["sulfate", "so4"],
          feedback: "A white precipitate with dilute HCl then BaCl₂ is barium sulfate, so Y contains sulfate ions.",
        },
        {
          point: "Z contains potassium ions, K⁺ (lilac flame)",
          keywords: ["potassium"],
          feedback: "A lilac flame shows potassium ions, K⁺.",
        },
        {
          point: "Z contains iodide ions, I⁻ (yellow precipitate)",
          keywords: ["iodide"],
          feedback: "With dilute nitric acid and silver nitrate, iodide gives a yellow precipitate (chloride white, bromide cream).",
        },
        {
          point: "Ag⁺(aq) + I⁻(aq) → AgI(s)",
          keywords: ["agi", "ag i yields"],
          feedback: "The ionic equation is Ag⁺(aq) + I⁻(aq) → AgI(s) — the nitrate and potassium ions are spectators.",
        },
      ],
      commonError:
        "Confusing iron(II) (green) with iron(III) (brown), or bromide (cream) with iodide (yellow); writing 'iodine' instead of 'iodide' for the ion.",
      strategy: "Read the data carefully",
    },
    {
      id: "ac-w11",
      topic: "acids",
      section: "acids-acids",
      difficulty: "core",
      question:
        "A student measures the pH of two acids with a pH meter. Acid P has pH 1. Acid Q has pH 3.\n(a) Classify each acid using the pH scale. (1)\n(b) State which acid has the higher concentration of hydrogen ions, and how many times higher it is. (2)",
      marks: 3,
      hints: [
        "Strongly acidic is pH 0–3 and weakly acidic is pH 4–6 — check where each value falls.",
        "Lower pH means more H⁺ ions.",
        "Each pH unit is a factor of 10.",
      ],
      modelAnswer:
        "(a) Both P (pH 1) and Q (pH 3) are strongly acidic, since both are in the range pH 0–3.\n(b) P has the higher concentration of H⁺ ions. They differ by 2 pH units, and each unit is a factor of 10, so P has 10 × 10 = 100 times the H⁺ concentration of Q.",
      markScheme: [
        {
          point: "Both are strongly acidic (pH 1 and pH 3 are both in the range 0–3)",
          keywords: ["both strongly", "q is strong", "q is also strong", "q is a strong", "they are strong", "both are strong"],
          feedback: "Strongly acidic is pH 0–3, so BOTH are strongly acidic — pH 3 is not weakly acidic (that starts at pH 4).",
        },
        {
          point: "P has the higher H⁺ concentration",
          keywords: ["p has more", "p has a higher", "p has the higher", "p has higher", "p is higher", "p contains more", "p is more acidic", "p has the most", "acid p has more"],
          feedback: "The lower the pH, the higher the H⁺ concentration — so acid P.",
        },
        {
          point: "100 times higher (factor of 10 per pH unit)",
          keywords: ["100", "100x", "hundred", "10 x 10", "10 × 10"],
          feedback: "Two pH units apart = 10 × 10 = 100 times the H⁺ concentration — not 2 or 3 times.",
        },
      ],
      commonError: "Saying P has '2 times' or '3 times' as many H⁺ ions — the pH scale goes up in factors of 10, so 2 units is 100 times.",
      strategy: "Read the data carefully",
    },
  ],
};
