import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-physical",
  title: "Written answers · Physical Chemistry",
  subtitle: "Rates practicals and graphs, collision theory, calorimetry, bond energies and equilibria",
  topic: "physical",
  questions: [
    {
      id: "ph-w01",
      topic: "physical",
      section: "physical-rates",
      difficulty: "warmup",
      question:
        "A student investigates the reaction between calcium carbonate powder and dilute nitric acid in a conical flask on a top-pan balance. The neck of the flask is loosely plugged with cotton wool.\n(a) State why the mass of the flask and its contents decreases.\n(b) State the purpose of the cotton wool.",
      marks: 2,
      hints: [
        "Write the word equation — which product can leave the flask?",
        "The cotton wool lets one thing through but stops something else. What else might fly out of a fizzing flask?",
      ],
      modelAnswer:
        "(a) Carbon dioxide gas is produced and escapes from the flask.\n(b) The cotton wool lets the carbon dioxide out but stops acid spray (droplets of acid) escaping, so the only mass lost is carbon dioxide.",
      markScheme: [
        {
          point: "Carbon dioxide (gas) is given off / escapes from the flask",
          keywords: [
            "carbon dioxide+escap",
            "co2+escap",
            "gas+escap",
            "carbon dioxide+leav",
            "co2+leav",
            "gas+leav",
            "carbon dioxide+given off",
            "co2+given off",
            "gas+given off",
            "carbon dioxide+released",
            "co2+released",
            "gas+lost",
            "carbon dioxide+lost",
          ],
          feedback:
            "Mass is only lost if something leaves the flask: CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂, and the carbon dioxide gas escapes.",
        },
        {
          point: "Cotton wool lets gas out but stops acid spray / droplets / liquid escaping",
          keywords: ["spray", "droplet", "splash", "spit", "acid+lost", "liquid+escap", "liquid+leav", "acid+escap", "acid+leav"],
          feedback:
            "The fizzing throws out tiny droplets of acid. The cotton wool traps this spray (while letting the CO₂ through), so the mass lost is only carbon dioxide.",
        },
      ],
      commonError:
        "Saying the cotton wool 'stops gas escaping' — if the CO₂ couldn't escape, the mass wouldn't change and the method wouldn't work.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ph-w02",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "A student wants to measure the rate of reaction between calcium carbonate powder and an acid. She suggests using dilute sulfuric acid instead of dilute hydrochloric acid. Explain why sulfuric acid is not a suitable acid for this investigation.",
      marks: 2,
      hints: [
        "Name the salt formed when calcium carbonate reacts with sulfuric acid.",
        "Use the solubility rules for sulfates. What happens to an insoluble product formed on the surface of a solid?",
      ],
      modelAnswer:
        "Calcium sulfate is formed, which is insoluble (only slightly soluble). It forms a layer on the surface of the calcium carbonate, which stops the acid reaching the carbonate, so the reaction stops before the acid is used up.",
      markScheme: [
        {
          point: "Calcium sulfate (formed) is insoluble / only slightly soluble",
          keywords: [
            "calcium sulfate+insoluble",
            "caso4+insoluble",
            "calcium sulfate+slightly soluble",
            "caso4+slightly soluble",
            "insoluble+salt",
            "insoluble+calcium",
            "slightly soluble",
            "sparingly soluble",
            "insoluble layer",
            "precipitate",
          ],
          feedback:
            "The key fact: calcium sulfate is insoluble (only slightly soluble). Common sulfates are soluble EXCEPT barium, calcium and lead(II) sulfate.",
        },
        {
          point: "It forms a layer/coating on the solid, so the acid cannot reach the carbonate / the reaction stops",
          keywords: [
            "layer",
            "coat",
            "covers",
            "barrier",
            "cannot reach",
            "cant reach",
            "unable to reach",
            "stop+reach",
            "prevent+reach",
            "reaction+stop",
            "stops reacting",
          ],
          feedback:
            "Explain the consequence: the insoluble calcium sulfate forms a layer on the surface of the solid, so the acid can't reach the calcium carbonate and the reaction stops early.",
        },
      ],
      commonError:
        "Saying 'sulfuric acid doesn't react with carbonates' or 'it makes sulfur dioxide'. It does react and gives CO₂ — the problem is the insoluble calcium sulfate coating the solid.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "ph-w03",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "Marble chips (in excess) react with 50 cm³ of dilute hydrochloric acid. The carbon dioxide is collected in a gas syringe. The results are shown in the table. Explain the shape of a graph of volume of gas against time for these results.",
      table: {
        caption: "Volume of carbon dioxide collected",
        headers: ["Time / s", "0", "20", "40", "60", "80", "100", "120"],
        rows: [["Volume / cm³", "0", "28", "46", "56", "60", "60", "60"]],
      },
      marks: 4,
      hints: [
        "Split the graph into three parts: the start, the middle, the end.",
        "Which reactant is being used up? What happens to its concentration?",
        "Link concentration to collisions per second, and explain why the line goes flat.",
      ],
      modelAnswer:
        "The graph is steepest at the start because the rate is fastest when the acid concentration is highest. As the reaction goes on, the acid is used up so its concentration decreases and the gradient becomes less steep. There are fewer acid particles, so there are fewer collisions per second. The line becomes horizontal at 60 cm³ because all the acid has been used up (it is the limiting reactant) and the reaction stops.",
      markScheme: [
        {
          point: "Steepest / fastest rate at the start because the acid concentration is highest",
          keywords: [
            "steep+start",
            "steepest",
            "fastest+start",
            "fastest+beginning",
            "fastest at first",
            "quickest+start",
            "rate+highest",
            "highest+concentration",
            "concentration+highest",
            "greatest+gradient",
            "most+acid particles",
            "lots of acid",
            "most acid",
            "fast+start",
          ],
          feedback:
            "Start with the beginning of the graph: it is steepest (fastest rate) because the acid is at its highest concentration.",
        },
        {
          point: "Gradient decreases / rate slows as the acid is used up and its concentration falls",
          keywords: [
            "concentration+decreas",
            "concentration+falls",
            "concentration+lower",
            "fewer+acid particles",
            "fewer particles",
            "acid+used up",
            "acid+being used",
            "gradient+decreas",
            "less steep",
            "rate+decreas",
            "slows",
          ],
          feedback:
            "Describe the middle: the gradient decreases because the acid is being used up, so its concentration falls.",
        },
        {
          point: "Fewer collisions per second / less frequent collisions",
          keywords: [
            "less frequent",
            "fewer+per second",
            "less+per second",
            "fewer+per unit time",
            "fewer+per minute",
            "frequency+decreas",
            "frequency+lower",
            "less often",
            "collide less often",
          ],
          feedback:
            "Use collision theory with a time element: fewer acid particles means fewer collisions per second (less frequent collisions). 'Fewer collisions' needs 'per second' or 'less frequent' for the mark.",
        },
        {
          point: "Levels off when all the acid (limiting reactant) is used up / the reaction stops",
          keywords: [
            "acid+all used",
            "all+acid+used",
            "acid runs out",
            "acid ran out",
            "acid has run out",
            "run out of acid",
            "ran out of acid",
            "reaction+stop",
            "reaction+finish",
            "reaction+complete",
            "no more acid",
            "limiting",
            "all+acid+react",
            "acid+completely",
          ],
          feedback:
            "Explain the flat part: the reaction has stopped because all the acid (the limiting reactant) has been used up — the marble was in excess, so it is NOT the marble running out.",
        },
      ],
      commonError:
        "Saying the line levels off because the marble chips are used up — they are in excess. It is the acid (limiting reactant) that runs out.",
      strategy: "Read the graph",
    },
    {
      id: "ph-w04",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "Excess zinc granules react with 50 cm³ of dilute hydrochloric acid at 20 °C, and the hydrogen given off is collected in a gas syringe. The experiment is then repeated at 40 °C with all other conditions unchanged. Describe how the graph of gas volume against time at 40 °C compares with the graph at 20 °C, and explain the final reading.",
      marks: 4,
      hints: [
        "Think about the start of the curve and how soon it levels off.",
        "What decides how much gas is made in total? Has that changed?",
      ],
      modelAnswer:
        "At 40 °C the curve is steeper at the start because the rate is higher. It levels off sooner (in less time). It levels off at the same final volume of hydrogen, because the same number of moles of acid is used — the acid is the limiting reactant, so the same amount of gas is made.",
      markScheme: [
        {
          point: "Steeper at the start / greater initial gradient",
          keywords: ["steeper", "more steep", "greater gradient", "gradient+greater", "gradient+higher", "faster+start", "rate+higher", "higher rate", "faster rate"],
          feedback: "A higher temperature increases the rate, so the curve is steeper at the start.",
        },
        {
          point: "Levels off sooner / reaction finishes in less time",
          keywords: ["sooner", "earlier", "less time", "shorter time", "quicker+level", "level+off+faster", "finish+faster", "finish+quicker", "levels off before"],
          feedback: "Because the reaction is faster, it finishes — and the line goes flat — sooner.",
        },
        {
          point: "Levels off at the same final volume of gas",
          keywords: ["same+final", "same+volume", "same+height", "same+level", "same+plateau", "same+total", "same+hydrogen", "same+maximum"],
          feedback:
            "Temperature changes how fast, not how much: the curve levels off at the same final volume.",
        },
        {
          point: "Because the same number of moles of acid (the limiting reactant) is used",
          keywords: ["same+moles", "same amount of acid", "same+quantity+acid", "limiting", "same number of acid", "same+mol+acid", "amount of acid+same", "moles of acid+same"],
          feedback:
            "Explain the plateau: the zinc is in excess, so the moles of acid (the limiting reactant) decide how much hydrogen forms — and that hasn't changed.",
        },
      ],
      commonError:
        "Drawing the hotter curve levelling off higher. A higher temperature makes the reaction faster but cannot make more product — the amount of limiting reactant is unchanged.",
      strategy: "Compare and contrast",
    },
    {
      id: "ph-w05",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "The marble chip and hydrochloric acid experiment is repeated using the same mass of powdered marble instead of chips. The marble is still in excess. Using collision theory, explain why the reaction is faster but the final mass lost is unchanged.",
      marks: 3,
      hints: [
        "What is different about a powder compared with a lump of the same mass?",
        "Link that to how often acid particles hit the marble — with a time element.",
        "What decides the total mass of carbon dioxide made?",
      ],
      modelAnswer:
        "The powder has a much larger surface area, so more marble particles are exposed to the acid. This means there are more frequent collisions (more collisions per second) between acid particles and the marble, so the rate is higher. The final mass lost is unchanged because the same amount of acid is used: the acid is the limiting reactant, so the same mass of carbon dioxide is made.",
      markScheme: [
        {
          point: "Powder has a larger surface area / more particles exposed",
          keywords: ["surface area", "more surface", "larger+area", "bigger+area", "greater+area", "exposed"],
          feedback: "Start with the cause: a powder has a much larger surface area (more particles exposed to the acid) than chips of the same mass.",
        },
        {
          point: "More frequent collisions / more collisions per unit time",
          keywords: [
            "more frequent",
            "frequency+increas",
            "collisions per",
            "collisions+per second",
            "collisions+per unit time",
            "collide more often",
            "more often",
            "collide more frequently",
          ],
          feedback:
            "Collision theory needs a time element: 'more frequent collisions' or 'more collisions per second' — not just 'more collisions'.",
        },
        {
          point: "Same amount of acid (limiting reactant), so the same mass of CO₂ is formed",
          keywords: ["same+moles+acid", "same amount of acid", "same+quantity+acid", "limiting", "same number+acid", "same+volume+concentration", "acid+used up+same"],
          feedback:
            "The total CO₂ depends on the moles of the limiting reactant — the acid — which hasn't changed, so the final mass lost is the same.",
        },
      ],
      commonError:
        "Writing 'more collisions' with no time element, or thinking a bigger surface area makes more product.",
      strategy: "Think about particles",
    },
    {
      id: "ph-w06",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "Describe an experiment to show that manganese(IV) oxide speeds up the decomposition of hydrogen peroxide solution and is not used up in the reaction. 2H₂O₂(aq) → 2H₂O(l) + O₂(g)",
      marks: 4,
      hints: [
        "How will you measure the rate? What will you collect and with what apparatus?",
        "What do you compare the result with, and what must be kept the same?",
        "How can you prove the solid is still all there at the end?",
      ],
      modelAnswer:
        "Add a known mass of manganese(IV) oxide to a measured volume of hydrogen peroxide and collect the oxygen in a gas syringe, recording the volume every 10 seconds. Repeat with the same volume and concentration of hydrogen peroxide without the catalyst. The oxygen is produced faster (more gas in the same time) with manganese(IV) oxide. At the end, filter off the manganese(IV) oxide, dry it and reweigh it — the mass is unchanged, so it is not used up.",
      markScheme: [
        {
          point: "Measure the volume of oxygen at regular time intervals (e.g. gas syringe)",
          keywords: ["gas syringe", "syringe", "measuring cylinder", "upturned", "volume+oxygen", "volume+gas", "measure+volume", "collect+oxygen", "collect+gas"],
          feedback: "Say how the rate is measured: collect the oxygen in a gas syringe (or upturned measuring cylinder) and record the volume at regular time intervals.",
        },
        {
          point: "Compare with the same volume and concentration of hydrogen peroxide without the catalyst",
          keywords: ["without catalyst", "without mno2", "without manganese", "no catalyst", "no mno2", "same volume", "same concentration", "control", "repeat+without"],
          feedback: "A fair comparison is needed: repeat with the same volume and concentration of hydrogen peroxide but no manganese(IV) oxide.",
        },
        {
          point: "Oxygen is produced faster / more gas in the same time with MnO₂",
          keywords: ["faster", "quicker", "more quickly", "slower", "shorter time", "greater rate", "higher rate", "more+gas+same time", "more oxygen+per"],
          feedback: "State the result that shows the speeding up: oxygen is given off faster (more gas in the same time) with the catalyst.",
        },
        {
          point: "Filter, dry and reweigh the MnO₂ — mass unchanged",
          keywords: ["reweigh", "re weigh", "weigh+again", "filter+weigh", "weigh+before+after", "mass+unchanged", "same mass", "mass+same", "mass+stays"],
          feedback: "To show it is not used up: filter off the manganese(IV) oxide, dry it and reweigh — its mass is the same as at the start.",
        },
      ],
      commonError:
        "Forgetting the comparison without a catalyst, or forgetting to dry the MnO₂ before reweighing (wet solid weighs more).",
      strategy: "Follow the method step by step",
    },
    {
      id: "ph-w07",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "core",
      question:
        "Use the bond energies in the table to calculate the enthalpy change, ΔH, for the reaction N₂ + 3H₂ → 2NH₃. Deduce whether the reaction is exothermic or endothermic, giving a reason.",
      table: {
        caption: "Bond energies",
        headers: ["Bond", "N≡N", "H–H", "N–H"],
        rows: [["Bond energy in kJ/mol", "945", "436", "391"]],
      },
      marks: 4,
      hints: [
        "Count the bonds: how many N–H bonds are in one NH₃? How many NH₃ molecules?",
        "Energy in = bonds broken; energy out = bonds made.",
        "ΔH = bonds broken − bonds made. What does the sign tell you?",
      ],
      modelAnswer:
        "Bonds broken: 1 × N≡N + 3 × H–H = 945 + (3 × 436) = 945 + 1308 = 2253 kJ.\nBonds made: 6 × N–H = 6 × 391 = 2346 kJ.\nΔH = 2253 − 2346 = −93 kJ/mol.\nThe reaction is exothermic because more energy is released making the new bonds than is taken in breaking the old bonds (ΔH is negative).",
      markScheme: [
        {
          point: "Energy to break bonds = 945 + 3(436) = 2253 kJ",
          keywords: ["2253"],
          feedback: "Bonds broken: one N≡N (945) and THREE H–H (3 × 436 = 1308) → 2253 kJ.",
        },
        {
          point: "Energy released making bonds = 6(391) = 2346 kJ",
          keywords: ["2346"],
          feedback: "Each NH₃ has 3 N–H bonds and there are 2 NH₃, so 6 N–H bonds are made: 6 × 391 = 2346 kJ.",
        },
        {
          point: "ΔH = 2253 − 2346 = −93 kJ/mol",
          keywords: ["93"],
          feedback: "ΔH = bonds broken − bonds made = 2253 − 2346 = −93 kJ/mol. Check your sign yourself (the auto-marker cannot see minus signs): ΔH must be NEGATIVE here, because bonds made (2346) > bonds broken (2253). Writing +93 (made − broken) loses this mark in the exam.",
        },
        {
          point: "Exothermic, because more energy is released making bonds than taken in breaking bonds / ΔH negative",
          keywords: [
            "exotherm+more+released",
            "exotherm+more energy",
            "exotherm+negative",
            "exotherm+making+more",
            "exotherm+forming+more",
            "exotherm+greater",
            "exotherm+bigger",
          ],
          feedback: "Give the reason: exothermic because the energy released making bonds is greater than the energy needed to break bonds, so ΔH is negative.",
        },
      ],
      commonError:
        "Counting only 3 N–H bonds (one NH₃) or one H–H bond — always multiply by the balancing numbers.",
      strategy: "Follow the method step by step",
    },
    {
      id: "ph-w08",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "challenge",
      question:
        "A student burns propan-1-ol (Mr = 60) in a spirit burner to heat 200 g of water in a copper can. The burner's mass falls from 85.42 g to 84.82 g, and the water temperature rises from 19.0 °C to 38.5 °C.\n(a) Calculate the molar enthalpy change of combustion of propan-1-ol in kJ/mol. (c = 4.2 J/g/°C)\n(b) The data-book value is −2021 kJ/mol. Give one reason why the student's value is less negative, and suggest one improvement to the apparatus.",
      marks: 5,
      hints: [
        "Q = m × c × ΔT, using the mass of WATER.",
        "Moles of fuel = mass burned ÷ Mr.",
        "ΔH = −Q ÷ n in kJ/mol. Then think: where did the 'missing' energy go?",
      ],
      modelAnswer:
        "(a) ΔT = 38.5 − 19.0 = 19.5 °C. Q = 200 × 4.2 × 19.5 = 16 380 J = 16.38 kJ.\nMass burned = 85.42 − 84.82 = 0.60 g, so n = 0.60 ÷ 60 = 0.0100 mol.\nΔH = −16.38 ÷ 0.0100 = −1638 kJ/mol ≈ −1640 kJ/mol.\n(b) Heat is lost to the surroundings (the air), so the water temperature rise is smaller than it should be. Improvement: use a draught shield and insulate the copper can (or put a lid on it).",
      markScheme: [
        {
          point: "Q = 200 × 4.2 × 19.5 = 16 380 J (16.38 kJ)",
          keywords: ["16380", "16.38", "16.4", "16400"],
          feedback: "Use Q = mcΔT with the mass of water: 200 × 4.2 × (38.5 − 19.0) = 16 380 J.",
        },
        {
          point: "n = 0.60 ÷ 60 = 0.0100 mol",
          keywords: ["0.01", "0.010"],
          feedback: "Mass of fuel burned = 85.42 − 84.82 = 0.60 g; moles = 0.60 ÷ 60 = 0.0100 mol.",
        },
        {
          point: "ΔH = −16.38 ÷ 0.0100 = −1640 kJ/mol (negative sign)",
          keywords: ["1638", "1640", "1600"],
          feedback: "ΔH = −Q ÷ n = −16.38 kJ ÷ 0.0100 mol = −1640 kJ/mol (3 s.f.). The answer MUST be negative — the water got hotter, so combustion is exothermic. The auto-marker cannot see minus signs, so check yours: +1640 or 1640 with no sign loses the mark in the exam.",
        },
        {
          point: "Reason: heat lost to the surroundings (or incomplete combustion)",
          keywords: ["heat+lost", "heat loss", "energy+lost", "heat+escap", "surroundings", "heat+air", "incomplete", "soot"],
          feedback: "The main reason is heat lost to the surroundings (air, clamp, can), so the temperature rise is too small. Incomplete combustion is also accepted.",
        },
        {
          point: "Improvement: draught shield / insulate the can / lid / flame closer to the can",
          keywords: ["draught", "draft", "shield", "insulat", "lid", "closer", "nearer", "lagging", "lag the"],
          feedback: "Suggest a practical fix: a draught shield around the burner and can, insulating the can, a lid, or keeping the flame close to the can.",
        },
      ],
      commonError:
        "Using the mass of fuel (0.60 g) as m in Q = mcΔT, or forgetting to convert J to kJ before dividing by moles.",
      strategy: "Check the units",
    },
    {
      id: "ph-w09",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "challenge",
      question:
        "Methanol is made industrially by the reversible reaction CO(g) + 2H₂(g) ⇌ CH₃OH(g) ΔH = −91 kJ/mol. Predict and explain the effect on the equilibrium yield of methanol of (i) increasing the pressure and (ii) increasing the temperature.",
      marks: 4,
      hints: [
        "Count the moles of gas on each side of the equation.",
        "Is the forward reaction exothermic or endothermic? Which direction does a higher temperature favour?",
      ],
      modelAnswer:
        "(i) The yield increases: the equilibrium shifts to the right because there are fewer moles of gas on the right (1 mole) than on the left (3 moles), and increasing the pressure favours the side with fewer moles of gas.\n(ii) The yield decreases: the equilibrium shifts to the left. The forward reaction is exothermic, so the backward reaction is endothermic, and increasing the temperature shifts the equilibrium in the endothermic direction.",
      markScheme: [
        {
          point: "(i) Yield increases / equilibrium shifts to the right",
          keywords: ["shift+right", "moves+right", "to the right", "towards+methanol", "more methanol", "yield+higher", "higher yield", "greater yield", "yield+rises", "yield increases"],
          feedback: "State the direction first: higher pressure shifts the equilibrium to the right, so the yield of methanol increases.",
        },
        {
          point: "Because there are fewer moles of gas on the right (1) than the left (3)",
          keywords: ["fewer moles", "fewer molecules", "3 moles", "three moles", "fewer+gas", "less moles", "less+gas molecules", "smaller number"],
          feedback: "Give the reason with numbers: 3 moles of gas on the left, 1 on the right — higher pressure favours the side with fewer moles of gas.",
        },
        {
          point: "(ii) Yield decreases / equilibrium shifts to the left",
          keywords: ["shift+left", "moves+left", "to the left", "less methanol", "lower yield", "yield+decreas", "yield+lower", "yield+falls", "smaller yield", "yield+reduc"],
          feedback: "A higher temperature shifts the equilibrium to the left, so the yield of methanol decreases.",
        },
        {
          point: "Because the forward reaction is exothermic / higher temperature favours the endothermic (backward) direction",
          keywords: ["exotherm", "backward+endotherm", "reverse+endotherm", "endothermic direction", "favours+endothermic direction"],
          feedback: "ΔH is negative, so the forward reaction is exothermic and the backward reaction endothermic; increasing temperature favours the endothermic direction.",
        },
      ],
      commonError:
        "Saying a higher temperature increases the yield because 'reactions go faster when hot' — that is rate, not equilibrium position.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "ph-w10",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "challenge",
      question:
        "In the Haber process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92 kJ/mol, a temperature of about 450 °C is used. Explain why this temperature is chosen rather than a much lower one.",
      marks: 4,
      hints: [
        "Use the sign of ΔH to decide which direction is exothermic.",
        "A lower temperature helps one thing but harms another. What are they?",
      ],
      modelAnswer:
        "The forward reaction is exothermic, so a lower temperature would shift the equilibrium to the right and give a higher yield of ammonia. However, at a low temperature the rate is too slow, because fewer particles have energy equal to or greater than the activation energy. So 450 °C is a compromise between a reasonable yield and a fast enough rate.",
      markScheme: [
        {
          point: "The forward reaction is exothermic",
          keywords: ["exotherm", "gives out heat", "releases heat", "heat+given out", "heat+released"],
          feedback: "ΔH is negative, so the forward reaction (making ammonia) is exothermic.",
        },
        {
          point: "A lower temperature would give a higher yield / shift equilibrium to the right",
          keywords: ["lower+higher yield", "lower+greater yield", "lower+more ammonia", "low+higher yield", "lower+right", "low+right", "lower+favours+forward", "favours+exotherm", "higher temperature+lower yield", "higher temperature+less ammonia", "shift+left"],
          feedback: "A lower temperature favours the exothermic forward reaction, so it would give a HIGHER yield of ammonia.",
        },
        {
          point: "But at a low temperature the rate is too slow",
          keywords: ["too slow", "slow+rate", "rate+slow", "rate+low", "slower rate", "reaction+slower", "takes too long", "fewer successful", "less frequent", "reaction+slow"],
          feedback: "The catch: at a low temperature the rate is too slow (fewer successful collisions per second), so equilibrium takes too long to reach.",
        },
        {
          point: "450 °C is a compromise between yield and rate",
          keywords: ["compromise", "balance", "reasonable+yield+rate", "acceptable", "trade off", "tradeoff"],
          feedback: "Name the idea: 450 °C is a compromise — a reasonable yield at a fast enough rate.",
        },
      ],
      commonError:
        "Saying 450 °C is used 'to increase the yield' — a higher temperature actually lowers the yield of this exothermic reaction; it is used for rate.",
      strategy: "Compare and contrast",
    },
    {
      id: "ph-w11",
      topic: "physical",
      section: "physical-rates",
      difficulty: "challenge",
      question:
        "Hydrogen peroxide decomposes exothermically: 2H₂O₂(aq) → 2H₂O(l) + O₂(g). Manganese(IV) oxide is a catalyst for this reaction.\nDescribe the reaction profile diagram you would draw for this reaction, with and without the catalyst. Your description should say how ΔH and the activation energy are shown. (4)",
      marks: 4,
      hints: [
        "Exothermic: are the products above or below the reactants?",
        "Where does each arrow start and finish?",
        "What does a catalyst change on the diagram, and what stays the same?",
      ],
      modelAnswer:
        "Energy on the y-axis against progress of reaction. The products (2H₂O + O₂) are drawn at a lower energy level than the reactants (2H₂O₂), because the reaction is exothermic, joined by a curve with a hump. ΔH is a downward arrow from the reactants level to the products level. The activation energy is an arrow from the reactants level up to the top of the hump. With the catalyst, the hump is lower (smaller activation energy, an alternative pathway), but the reactants and products levels stay the same, so ΔH is unchanged.",
      markScheme: [
        {
          point: "Products drawn lower than reactants (energy given out / exothermic)",
          keywords: ["products are lower", "products lower", "products at a lower", "products below", "products are below", "lower than the reactants", "lower energy than the reactants", "reactants are higher", "reactants higher", "reactants above", "higher than the products"],
          feedback: "For an exothermic reaction the products are at a LOWER energy than the reactants — the difference is given out to the surroundings.",
        },
        {
          point: "ΔH shown as the difference/arrow between the reactants and products levels",
          keywords: ["from reactants to products", "from the reactants to the products", "reactants level to the products", "reactants down to the products", "between the reactants and products", "between reactants and products", "difference between reactants", "difference between the reactants", "down to the products"],
          feedback: "ΔH is the vertical arrow from the reactants level to the products level (pointing down for exothermic).",
        },
        {
          point: "Activation energy shown from the reactants level up to the top of the hump/peak",
          keywords: ["reactants up to", "reactants level up", "from reactants to the top", "from the reactants to the top", "reactants to the peak", "reactants to the top", "reactants to the hump", "reactants to the highest", "reactants to the maximum"],
          feedback: "Activation energy starts at the REACTANTS level and goes up to the top of the hump — not from the products or from zero.",
        },
        {
          point: "Catalysed hump is lower (lower activation energy) but ΔH unchanged",
          keywords: ["lower+same", "lower+unchanged", "lower+does not change", "lower+doesnt change", "lower+not change", "smaller+same", "smaller+unchanged", "smaller+does not change", "smaller+doesnt change"],
          feedback: "With a catalyst the hump is lower (alternative pathway with lower activation energy), but the reactant and product levels — and so ΔH — do not change.",
        },
      ],
      commonError: "Drawing the activation energy from the products level, or showing the catalyst changing the products level (ΔH) as well as the hump.",
      strategy: "Read the graph",
    },
    {
      id: "ph-w12",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "Nitrogen monoxide and oxygen react in the gas phase: 2NO(g) + O₂(g) → 2NO₂(g).\nExplain, using collision theory, why increasing the pressure of the gas mixture increases the rate of this reaction. (3)",
      marks: 3,
      hints: [
        "Pressure for gases acts like concentration for solutions.",
        "What happens to the number of particles in each unit of volume?",
        "Remember the time element — 'per second'.",
      ],
      modelAnswer:
        "At higher pressure the same number of gas particles are in a smaller volume, so there are more particles per unit volume (they are closer together). The particles therefore collide more frequently, giving more successful collisions per unit time, so the rate increases.",
      markScheme: [
        {
          point: "More particles per unit volume / particles closer together",
          keywords: ["per unit volume", "same volume", "smaller volume", "closer together", "more crowded", "more particles in", "particles+closer", "more concentrated"],
          feedback: "Higher pressure means more gas particles in the same volume (they are closer together) — just like a higher concentration.",
        },
        {
          point: "More frequent collisions / more collisions per second",
          keywords: ["more frequent", "frequency", "per second", "per unit time", "collide more often", "more often"],
          feedback: "Say the particles collide MORE FREQUENTLY (more collisions per second) — 'more collisions' alone does not score.",
        },
        {
          point: "More successful collisions per unit time (so faster rate)",
          keywords: ["successful collision", "effective collision", "successful+per second", "successful+unit time"],
          feedback: "Finish the chain: more successful collisions per unit time, so the reaction is faster.",
        },
      ],
      commonError: "Saying the particles have more energy or move faster — that is temperature. Pressure only changes how close together the particles are.",
      strategy: "Think about particles",
    },
  ],
};
