import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-inorganic",
  title: "Written answers · Inorganic Chemistry",
  subtitle: "Explain trends, write ionic equations, calculate % oxygen, plan the rusting experiment, extract iron and aluminium",
  topic: "inorganic",
  questions: [
    {
      id: "in-w01",
      topic: "inorganic",
      section: "inorganic-group1",
      difficulty: "warmup",
      question:
        "A teacher adds a small piece of potassium to a large trough of water. Describe THREE things the class would see.",
      marks: 3,
      hints: [
        "Think about where the metal ends up, what comes off it, and anything special about potassium compared with sodium.",
        "Potassium's reaction is hot enough to set the gas alight — what colour is the flame?",
      ],
      modelAnswer:
        "The potassium floats and moves rapidly around on the surface of the water. It fizzes vigorously as bubbles of gas are given off. The gas catches fire and burns with a lilac flame, and the potassium quickly disappears.",
      markScheme: [
        {
          point: "Floats / moves (darts) around on the surface",
          keywords: ["float", "moves around", "darts", "whizz", "skates", "on the surface", "moves on", "zooms"],
          feedback: "Potassium is less dense than water so it floats, and the gas pushes it around the surface — say \"floats\" or \"moves around on the surface\".",
        },
        {
          point: "Fizzes / bubbles / effervescence",
          keywords: ["fizz", "bubbl", "effervesc"],
          feedback: "Hydrogen is produced, but the OBSERVATION is fizzing or bubbles. \"Hydrogen is given off\" is a conclusion, not something you see.",
        },
        {
          point: "Lilac (purple) flame",
          keywords: ["lilac", "purple flame", "violet", "lilac flame", "mauve"],
          feedback: "The reaction is so exothermic that the hydrogen ignites with a lilac flame — the flame-test colour of potassium ions.",
        },
      ],
      commonError:
        "Writing \"hydrogen is produced\" or \"potassium hydroxide forms\" — these are not observations. Also don't say it sinks: Li, Na and K all float.",
      strategy: "Recall the definition",
    },
    {
      id: "in-w02",
      topic: "inorganic",
      section: "inorganic-group1",
      difficulty: "core",
      question: "Explain why rubidium is more reactive than sodium.",
      marks: 4,
      hints: [
        "Both atoms react by losing one electron. Which atom loses it more easily, and why?",
        "Use four links: distance from nucleus → shielding → attraction → how easily the electron is lost.",
      ],
      modelAnswer:
        "Rubidium atoms are larger: the outer electron is in a shell further from the nucleus (more occupied shells). There is more shielding by the inner shells of electrons. So there is a weaker attraction between the nucleus and the outer electron. Therefore the outer electron is lost more easily, so rubidium reacts more vigorously.",
      markScheme: [
        {
          point: "Outer electron is further from the nucleus / more shells / larger atom",
          keywords: ["further from+nucleus", "further away", "more shells", "larger atom", "bigger atom", "larger radius", "more electron shells", "extra shells", "atoms are larger", "atoms are bigger", "further out"],
          feedback: "Start with the size: rubidium has more occupied shells, so its outer electron is further from the nucleus.",
        },
        {
          point: "More shielding (by inner electrons)",
          keywords: ["shield", "screen"],
          feedback: "Mention shielding — the extra inner shells of electrons shield the outer electron from the nucleus's positive charge.",
        },
        {
          point: "Weaker attraction between nucleus and outer electron",
          keywords: ["weaker attraction", "less attraction", "attraction+weaker", "attracted+less", "less strongly", "weaker force", "weaker pull", "less attracted", "held less", "weakly attracted", "attraction is weaker", "attract+less", "attracts it less", "weaker nuclear attraction"],
          feedback: "Link it to force: the nucleus attracts the outer electron less strongly — say \"weaker (electrostatic) attraction\".",
        },
        {
          point: "Outer electron lost more easily",
          keywords: ["lost more easily", "loses+more easily", "lose+more easily", "easier to lose", "easier to remove", "removed more easily", "lost easily", "lost easier", "loses its electron", "more easily lost", "given away more easily"],
          feedback: "Finish the chain: the outer electron is LOST more easily — losing an electron is what an alkali metal does when it reacts.",
        },
      ],
      commonError:
        "Saying rubidium has \"more outer electrons\" (all Group 1 atoms have one) or that its greater nuclear charge makes it more reactive. Another common slip is stopping after \"further from the nucleus\" without linking to attraction and losing the electron.",
      strategy: "Think about electrons",
    },
    {
      id: "in-w03",
      topic: "inorganic",
      section: "inorganic-group7",
      difficulty: "core",
      question:
        "Chlorine water is added to a colourless solution of sodium bromide.\n(a) State what would be seen, and explain why the reaction happens. (2)\n(b) Write the ionic equation for the reaction. (2)\n(c) Identify the species that is oxidised, explaining your answer in terms of electrons. (1)",
      marks: 5,
      hints: [
        "Which halogen is more reactive? Which halogen is formed, and what colour is it in solution?",
        "Leave out the spectator Na⁺ ions. Two bromide ions are needed to make one Br₂ molecule.",
        "Oxidation is loss of electrons — which reactant loses them?",
      ],
      modelAnswer:
        "(a) The solution turns from colourless to orange (yellow-orange) because bromine is formed. Chlorine is more reactive than bromine, so it displaces bromine from the bromide.\n(b) Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂\n(c) The bromide ions (Br⁻) are oxidised because they lose electrons: 2Br⁻ → Br₂ + 2e⁻.",
      markScheme: [
        {
          point: "Solution turns orange / yellow-orange (bromine formed)",
          keywords: ["orange", "yellow", "brown"],
          feedback: "Bromine in aqueous solution is orange (accept yellow/orange-brown). Describe the colour of the solution — no precipitate forms.",
        },
        {
          point: "Chlorine is more reactive than bromine (so displaces it)",
          keywords: ["chlorine is more reactive", "chlorine more reactive", "more reactive than bromine", "bromine is less reactive", "chlorine+displaces", "chlorine displaces", "displaces bromine"],
          feedback: "Explain the reaction: chlorine is more reactive than bromine, so it displaces bromine from its compound.",
        },
        {
          point: "Correct reactants: Cl₂ + 2Br⁻",
          keywords: ["cl2 2br", "2br cl2", "cl2+2br yields", "cl2 2 br", "cl2 aq 2br", "2br aq cl2"],
          feedback: "The reactants of the ionic equation are Cl₂ and 2Br⁻ — leave out Na⁺, which is a spectator ion.",
        },
        {
          point: "Correct products: 2Cl⁻ + Br₂ (balanced)",
          keywords: ["yields 2cl br2", "yields br2 2cl", "2cl br2", "br2 2cl", "2 cl br2", "yields 2cl aq br2", "yields br2 aq 2cl"],
          feedback: "Products: 2Cl⁻ + Br₂. Check the balance — two bromide ions make one Br₂ molecule, and charge is 2− on both sides.",
        },
        {
          point: "Bromide ions oxidised because they lose electrons",
          keywords: ["bromide+lose", "bromide+loses", "br ions lose", "br loses", "br lose", "bromide+lost", "br2 2e", "bromide ions are oxidised+electron"],
          feedback: "Bromide ions lose electrons (2Br⁻ → Br₂ + 2e⁻), so bromide is oxidised. Chlorine gains electrons and is reduced.",
        },
      ],
      commonError:
        "Writing the full equation with Na⁺ when an IONIC equation is asked for, writing Br instead of Br₂, or saying \"chlorine is oxidised\" (it gains electrons, so it is reduced).",
      strategy: "Think about electrons",
    },
    {
      id: "in-w04",
      topic: "inorganic",
      section: "inorganic-group7",
      difficulty: "core",
      question: "Explain, in terms of atomic structure, why chlorine is more reactive than iodine.",
      marks: 4,
      hints: [
        "Halogens react by GAINING an electron. Which atom attracts an extra electron more strongly?",
        "Think about distance from the nucleus, shielding, and the size of the attraction — the reverse logic of Group 1.",
      ],
      modelAnswer:
        "A chlorine atom is smaller: its outer shell is closer to the nucleus than in iodine, which has more shells. Chlorine has less shielding from inner electrons. So there is a stronger attraction between the nucleus and an incoming electron. Therefore chlorine gains an electron more easily than iodine.",
      markScheme: [
        {
          point: "Chlorine's outer shell is closer to the nucleus / iodine has more shells (larger atom)",
          keywords: ["closer to+nucleus", "nearer+nucleus", "further from+nucleus", "more shells", "fewer shells", "smaller atom", "larger atom", "bigger atom", "less shells", "further away", "smaller radius"],
          feedback: "Compare size: chlorine's outer shell is closer to the nucleus (iodine has more shells, so its outer shell is further away).",
        },
        {
          point: "Less shielding in chlorine / more shielding in iodine",
          keywords: ["shield", "screen"],
          feedback: "Mention shielding: iodine has more inner shells shielding the nucleus, chlorine has fewer.",
        },
        {
          point: "Stronger attraction (of nucleus) for an incoming electron in chlorine",
          keywords: ["stronger attraction", "greater attraction", "more attraction", "weaker attraction", "less attraction", "attraction+stronger", "attraction+weaker", "attracts+more strongly", "attracted+more strongly", "stronger pull", "weaker pull", "attract+less strongly", "pull+more strongly", "pull+stronger", "attract+more strongly"],
          feedback: "State the force: the nucleus has a stronger attraction for an incoming electron in chlorine than in iodine.",
        },
        {
          point: "Chlorine gains an electron more easily",
          keywords: ["gain", "gains", "gained", "accept+electron", "accepts", "easier to attract", "take an electron", "attract an electron more easily"],
          feedback: "Halogens react by GAINING an electron — finish with \"so chlorine gains an electron more easily\". Don't say \"loses\": that's Group 1.",
        },
      ],
      commonError:
        "Copying the Group 1 answer and saying chlorine \"loses its outer electron more easily\". Halogens gain electrons, so the trend runs the other way: smaller atoms are more reactive.",
      strategy: "Compare and contrast",
    },
    {
      id: "in-w05",
      topic: "inorganic",
      section: "inorganic-group7",
      difficulty: "challenge",
      question:
        "Hydrogen chloride gas is dissolved in water in one beaker and in methylbenzene in another. A piece of blue litmus paper is dipped into each solution. Describe and explain the results.",
      marks: 3,
      hints: [
        "What must be present for a solution to behave as an acid?",
        "Does HCl form ions in an organic solvent with no water present?",
      ],
      modelAnswer:
        "In water, the hydrogen chloride ionises (dissociates) to form H⁺ ions and Cl⁻ ions, so the solution is acidic. The blue litmus turns red. In methylbenzene the HCl does not ionise — it stays as molecules, so there are no H⁺ ions and the litmus stays blue.",
      markScheme: [
        {
          point: "In water HCl ionises / dissociates to form H⁺ ions",
          keywords: ["ionis", "dissociat", "h ions", "hydrogen ions", "forms ions", "splits into ions", "h3o", "breaks into ions", "releases h"],
          feedback: "Explain the water result: HCl ionises in water to release H⁺(aq) ions — it is the H⁺ ions that make a solution acidic.",
        },
        {
          point: "Litmus turns red in the water solution",
          keywords: ["turns red", "goes red", "turn red", "becomes red", "changes to red", "changes red", "red in water"],
          feedback: "Describe the result in water: the blue litmus turns red, because the solution is acidic.",
        },
        {
          point: "In methylbenzene HCl stays as molecules / no H⁺ ions, so litmus stays blue",
          keywords: ["stays blue", "remains blue", "stay blue", "no change", "does not change", "not ionis", "does not ionise", "doesnt ionise", "no h ions", "no hydrogen ions", "molecules", "not acidic", "no ions"],
          feedback: "In methylbenzene the HCl stays as covalent molecules — no H⁺ ions form, so it is not acidic and the litmus stays blue.",
        },
      ],
      commonError:
        "Saying methylbenzene \"neutralises\" the acid, or that HCl is always acidic. An acid only shows acidic properties when water is present to let it release H⁺ ions.",
      strategy: "Think about particles",
    },
    {
      id: "in-w06",
      topic: "inorganic",
      section: "inorganic-air",
      difficulty: "core",
      question:
        "A student traps 50.0 cm³ of air in a measuring cylinder inverted in a trough of water, with damp iron filings at the top. After one week the volume of gas is 39.8 cm³ and the water level has stopped rising.\n(a) Calculate the percentage of oxygen in the air. Show your working. (2)\n(b) Explain why the water level stopped rising. (1)",
      marks: 3,
      hints: [
        "The decrease in gas volume is the volume of oxygen that reacted.",
        "Percentage = decrease ÷ ORIGINAL volume × 100.",
        "Why can the iron not react any further?",
      ],
      modelAnswer:
        "(a) Decrease in volume = 50.0 − 39.8 = 10.2 cm³ of oxygen.\nPercentage of oxygen = 10.2 ÷ 50.0 × 100 = 20.4%\n(b) All of the oxygen had been used up by the iron as it rusted, so no more gas was removed.",
      markScheme: [
        {
          point: "Decrease in volume = 10.2 cm³",
          keywords: ["10.2"],
          feedback: "First find the volume of oxygen used: 50.0 − 39.8 = 10.2 cm³.",
        },
        {
          point: "Percentage = 10.2 ÷ 50.0 × 100 = 20.4%",
          keywords: ["20.4", "20.40", "20"],
          feedback: "Divide by the ORIGINAL volume: 10.2 ÷ 50.0 × 100 = 20.4%. (Dividing by 39.8 gives 25.6%, a common slip.)",
        },
        {
          point: "All the oxygen had been used up / reacted",
          keywords: ["all+oxygen", "no oxygen left", "no more oxygen", "oxygen+used up", "oxygen+run out", "oxygen+ran out", "oxygen+used", "oxygen+reacted", "oxygen+gone", "oxygen+removed", "no oxygen remaining", "oxygen had been used"],
          feedback: "The iron can only remove oxygen — once all the oxygen has reacted, the gas volume (nitrogen, argon etc.) cannot fall any further.",
        },
      ],
      commonError:
        "Dividing the decrease by the final volume (39.8 cm³) instead of the original 50.0 cm³, or giving 79.6% (the percentage of gas left).",
      strategy: "Follow the method step by step",
    },
    {
      id: "in-w07",
      topic: "inorganic",
      section: "inorganic-reactivity",
      difficulty: "core",
      question:
        "Describe an experiment, using three test tubes and three iron nails, to show that both water and oxygen are needed for iron to rust. Include the expected results.",
      marks: 5,
      hints: [
        "One tube is a control with everything present. Each of the other two tubes removes ONE factor.",
        "How do you remove dissolved air from water, and stop it dissolving back in?",
        "What chemical absorbs water vapour from the air in a sealed tube?",
      ],
      modelAnswer:
        "Tube 1 (control): a nail in tap water, open to the air.\nTube 2: a nail in water that has been boiled to remove dissolved air (oxygen), with a layer of oil on top to stop air dissolving back in.\nTube 3: a nail with anhydrous calcium chloride (a drying agent) to absorb water vapour, sealed with a stopper (bung).\nLeave for a few days. Only the nail in tube 1 rusts; the nails in tubes 2 and 3 do not rust, which shows both water and oxygen are needed.",
      markScheme: [
        {
          point: "Control tube: nail in (tap) water open to air",
          keywords: ["tap water", "control", "open to+air", "water and air", "water+open", "normal water", "air and water", "unboiled", "nail in water", "tube of water", "ordinary water", "just water"],
          feedback: "Include a control: a nail in ordinary water with air present, so you can see that rusting does happen when both are present.",
        },
        {
          point: "Boiled water to remove dissolved oxygen / air",
          keywords: ["boiled", "boil the water", "boiling"],
          feedback: "To remove oxygen, use water that has been boiled — boiling drives out the dissolved air.",
        },
        {
          point: "Layer of oil on top to stop air (oxygen) dissolving back in",
          keywords: ["oil", "layer of oil"],
          feedback: "After boiling, add a layer of oil on the water's surface so oxygen from the air cannot dissolve back in.",
        },
        {
          point: "Anhydrous calcium chloride / drying agent in a stoppered tube to remove water",
          keywords: ["calcium chloride", "drying agent", "silica gel", "desiccant", "anhydrous", "cacl2", "dry air"],
          feedback: "To remove water, use a drying agent such as anhydrous calcium chloride in a tube sealed with a stopper.",
        },
        {
          point: "Result: only the nail with both water and air rusts",
          keywords: ["only+rust", "just+tube 1", "only the first", "tube 1 rusts", "first tube rusts", "control+rusts", "others+not rust", "do not rust", "dont rust"],
          feedback: "State the results: only the nail with both water and air rusts; the other two do not — so both are needed.",
        },
      ],
      commonError:
        "Forgetting the oil layer (oxygen re-dissolves in boiled water as it cools) or forgetting to seal the calcium chloride tube (moist air gets in). Also giving no results.",
      strategy: "Follow the method step by step",
    },
    {
      id: "in-w08",
      topic: "inorganic",
      section: "inorganic-reactivity",
      difficulty: "challenge",
      question:
        "A student adds:\n- magnesium powder to zinc sulfate solution\n- copper powder to colourless silver nitrate solution\n- zinc powder to magnesium sulfate solution\nFor each mixture, predict whether a reaction occurs. Where a reaction occurs, write the ionic equation. Give one observation for the copper and silver nitrate mixture.",
      marks: 5,
      hints: [
        "Compare each metal with the metal in the solution using the reactivity series.",
        "In ionic equations the sulfate and nitrate ions are spectators. Check charges balance.",
        "Silver ions are Ag⁺ but copper ions are Cu²⁺ — how many silver ions does one copper atom reduce?",
      ],
      modelAnswer:
        "Magnesium and zinc sulfate: reacts, because magnesium is more reactive than zinc.\nMg(s) + Zn²⁺(aq) → Mg²⁺(aq) + Zn(s)\nCopper and silver nitrate: reacts, because copper is more reactive than silver.\nCu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s)\nObservation: the colourless solution turns blue (and grey/silver crystals form on the copper).\nZinc and magnesium sulfate: no reaction, because zinc is less reactive than magnesium.",
      markScheme: [
        {
          point: "Mg + Zn²⁺ → Mg²⁺ + Zn",
          keywords: ["mg zn2 yields mg2 zn", "mg zn2+mg2 zn", "mg s zn2 aq yields mg2 aq zn", "mg zn2 aq yields mg2 aq zn", "zn2 mg yields mg2 zn", "zn2 mg yields zn mg2", "mg zn2 yields zn mg2"],
          feedback: "Magnesium is above zinc, so it displaces it: Mg(s) + Zn²⁺(aq) → Mg²⁺(aq) + Zn(s). Sulfate is a spectator ion.",
        },
        {
          point: "Copper + silver nitrate reacts (copper more reactive than silver)",
          keywords: ["copper is more reactive", "copper more reactive", "more reactive than silver", "silver is less reactive", "copper displaces", "cu 2ag", "cu s 2ag", "2ag yields", "yields cu2 2ag", "yields cu2 aq 2ag", "cu+cu2"],
          feedback: "Copper is above silver in the reactivity series, so copper displaces silver.",
        },
        {
          point: "Cu + 2Ag⁺ → Cu²⁺ + 2Ag (balanced)",
          keywords: ["cu 2ag yields cu2 2ag", "cu 2ag+cu2 2ag", "cu+2ag+cu2", "2ag cu yields cu2 2ag", "cu 2ag yields 2ag cu2", "cu s 2ag aq yields cu2 aq 2ag", "cu 2ag aq yields cu2 aq 2ag"],
          feedback: "Balance the charge: one Cu atom gives 2 electrons, enough for 2 Ag⁺ ions — Cu + 2Ag⁺ → Cu²⁺ + 2Ag.",
        },
        {
          point: "Observation: solution turns blue (or grey/silver crystals form)",
          keywords: ["blue", "silver crystals", "grey solid", "silver solid", "shiny crystals", "grey crystals", "silver-grey"],
          feedback: "Cu²⁺ ions are blue, so the colourless solution turns blue; silvery-grey crystals of silver grow on the copper.",
        },
        {
          point: "Zinc + magnesium sulfate: no reaction because zinc is less reactive than magnesium",
          keywords: ["zinc+no reaction", "zinc is less reactive", "zinc less reactive", "less reactive than magnesium", "zinc does not react", "zinc doesnt react", "zinc wont react", "zinc will not react", "magnesium is more reactive than zinc", "no reaction+zinc is"],
          feedback: "A less reactive metal cannot displace a more reactive one: zinc is below magnesium, so there is no reaction.",
        },
      ],
      commonError:
        "Writing Cu + Ag⁺ → Cu²⁺ + Ag (charges don't balance) or putting sulfate/nitrate ions into an ionic equation.",
      strategy: "Balance the equation",
    },
    {
      id: "in-w09",
      topic: "inorganic",
      section: "inorganic-metals",
      difficulty: "core",
      question:
        "Iron is extracted from haematite in the blast furnace. Write balanced equations for:\n(a) coke burning in the hot air (1)\n(b) the product of (a) reacting with more coke to form carbon monoxide (1)\n(c) the reduction of iron(III) oxide by carbon monoxide (1)\n(d) the thermal decomposition of limestone (1)\n(e) the formation of slag from silicon dioxide (1)",
      marks: 5,
      hints: [
        "Coke is carbon, C. Limestone is calcium carbonate, CaCO₃. Silicon dioxide is SiO₂.",
        "In (c) each CO picks up one O atom — Fe₂O₃ has three O atoms to remove.",
        "Slag is calcium silicate, CaSiO₃.",
      ],
      modelAnswer:
        "(a) C + O₂ → CO₂\n(b) CO₂ + C → 2CO\n(c) Fe₂O₃ + 3CO → 2Fe + 3CO₂\n(d) CaCO₃ → CaO + CO₂\n(e) CaO + SiO₂ → CaSiO₃",
      markScheme: [
        {
          point: "C + O₂ → CO₂",
          keywords: ["c o2 yields co2", "o2 c yields co2", "c s o2 g yields co2"],
          feedback: "Coke is carbon burning in oxygen: C + O₂ → CO₂ (very exothermic — it heats the furnace).",
        },
        {
          point: "CO₂ + C → 2CO",
          keywords: ["co2 c yields 2co", "c co2 yields 2co", "co2 c yields 2 co", "c co2 yields 2 co", "co2 g c s yields 2co", "c s co2 g yields 2co"],
          feedback: "Carbon dioxide is reduced by more coke: CO₂ + C → 2CO. Check the balance — 2 O on each side.",
        },
        {
          point: "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
          keywords: ["fe2o3 3co yields 2fe 3co2", "fe2o3 3co+2fe 3co2", "3co fe2o3 yields 2fe 3co2", "fe2o3 3 co yields 2 fe 3 co2", "fe2o3 s 3co g yields 2fe l 3co2"],
          feedback: "Fe₂O₃ + 3CO → 2Fe + 3CO₂: each CO removes one oxygen atom, so three are needed; carbon monoxide is the reducing agent.",
        },
        {
          point: "CaCO₃ → CaO + CO₂",
          keywords: ["caco3 yields cao co2", "caco3+yields cao co2", "caco3 yields co2 cao", "caco3 s yields cao s co2"],
          feedback: "Limestone decomposes in the heat: CaCO₃ → CaO + CO₂.",
        },
        {
          point: "CaO + SiO₂ → CaSiO₃",
          keywords: ["cao sio2 yields casio3", "sio2 cao yields casio3", "cao s sio2 s yields casio3", "cao sio2+yields casio3"],
          feedback: "Basic calcium oxide neutralises acidic silica to form slag: CaO + SiO₂ → CaSiO₃.",
        },
      ],
      commonError:
        "Writing Fe₂O₃ + CO → Fe + CO₂ (unbalanced) or treating CO₂ as the reducing agent. Also forgetting that limestone must first decompose to CaO before it can remove silica.",
      strategy: "Balance the equation",
    },
    {
      id: "in-w10",
      topic: "inorganic",
      section: "inorganic-metals",
      difficulty: "challenge",
      question:
        "Aluminium is extracted by electrolysis of aluminium oxide dissolved in molten cryolite, using carbon electrodes.\nExplain why aluminium cannot be extracted by heating its oxide with carbon, why cryolite is used, and why the positive electrodes must be replaced regularly. Include the half-equations at each electrode.",
      marks: 6,
      hints: [
        "Compare the positions of aluminium and carbon in the reactivity series.",
        "Aluminium oxide melts above 2000 °C — what does cryolite do to the working temperature, and why does that matter?",
        "Which ions go to each electrode? What forms at the positive electrode, and what does it do to hot carbon?",
      ],
      modelAnswer:
        "Aluminium is more reactive than carbon (above carbon in the reactivity series), so carbon cannot remove the oxygen from aluminium oxide.\nAluminium oxide has a very high melting point. Dissolving it in molten cryolite lowers the operating temperature (to about 950 °C), so less energy is needed and costs are lower.\nAt the cathode (negative electrode): Al³⁺ + 3e⁻ → Al\nAt the anode (positive electrode): 2O²⁻ → O₂ + 4e⁻\nThe oxygen produced reacts with the hot carbon anodes to form carbon dioxide (C + O₂ → CO₂), so the anodes burn away and must be replaced.",
      markScheme: [
        {
          point: "Aluminium is more reactive than carbon",
          keywords: ["more reactive than carbon", "above carbon", "carbon is less reactive", "less reactive than aluminium", "higher than carbon", "above c", "aluminium is more reactive", "aluminium more reactive", "al is more reactive"],
          feedback: "Only metals below carbon can be reduced by carbon. Aluminium is above carbon in the reactivity series.",
        },
        {
          point: "Cryolite lowers the melting point / operating temperature",
          keywords: ["lower+temperature", "lowers+melting point", "reduce+temperature", "lower melting point", "lower temperature", "reduces+melting point", "lower operating", "950"],
          feedback: "Cryolite lowers the operating temperature — the mixture is molten at about 950 °C instead of over 2000 °C.",
        },
        {
          point: "So less energy is needed / lower cost",
          keywords: ["less energy", "save+energy", "saves energy", "saving energy", "cheaper", "lower cost", "less expensive", "reduce+cost", "saves money", "less electricity", "energy costs"],
          feedback: "Link the lower temperature to the benefit: less energy is needed to keep it molten, so it is cheaper.",
        },
        {
          point: "Cathode: Al³⁺ + 3e⁻ → Al",
          keywords: ["al3 3e yields al", "al3 3e+yields al", "al3 3 e yields al", "al3+3e+yields al"],
          feedback: "At the negative electrode aluminium ions are reduced: Al³⁺ + 3e⁻ → Al.",
        },
        {
          point: "Anode: 2O²⁻ → O₂ + 4e⁻",
          keywords: ["2o2 yields o2 4e", "2o2 4e yields o2", "2o2 yields 4e o2", "2 o2 yields o2 4e", "2o2+yields o2+4e"],
          feedback: "At the positive electrode oxide ions are oxidised: 2O²⁻ → O₂ + 4e⁻.",
        },
        {
          point: "Oxygen reacts with the carbon anodes to form CO₂ (they burn away)",
          keywords: ["oxygen+reacts+carbon", "oxygen+carbon dioxide", "c o2 yields co2", "burn away", "burns away", "oxygen+co2", "oxidised+co2", "react with+oxygen"],
          feedback: "The anodes are replaced because the oxygen formed reacts with the hot carbon to form carbon dioxide — the anodes burn away.",
        },
      ],
      commonError:
        "Calling cryolite a catalyst, or saying the anodes \"dissolve\" or are coated in aluminium. Aluminium forms at the cathode; it is oxygen at the anode that burns the carbon away.",
      strategy: "Think about electrons",
    },
    {
      id: "in-w11",
      topic: "inorganic",
      section: "inorganic-group1",
      difficulty: "core",
      question:
        "A teacher adds small pieces of lithium, sodium and potassium in turn to water containing universal indicator.\n(a) Give TWO observations that are the same for all three metals, and explain how they show that the metals belong to the same family. (3)\n(b) Write a balanced equation, with state symbols, for the reaction of lithium with water. (2)",
      marks: 5,
      hints: [
        "What do you see coming off every metal, and what happens to the indicator colour each time?",
        "Why do elements in the same group react in the same way?",
        "The products are a metal hydroxide and hydrogen; lithium forms Li⁺ ions.",
      ],
      modelAnswer:
        "(a) Each metal fizzes / gives off bubbles of gas (hydrogen), and each turns the universal indicator blue/purple because an alkaline hydroxide forms. (Each also floats and moves around.) The same reactions and products show they are a family — they all have one electron in their outer shell, so they react in the same way.\n(b) 2Li(s) + 2H₂O(l) → 2LiOH(aq) + H₂(g)",
      markScheme: [
        {
          point: "Fizzing / bubbles / effervescence (of hydrogen) with all three",
          keywords: ["fizz", "bubble", "effervesc", "gas given off", "hydrogen given off", "gas produced", "floats"],
          feedback: "Every alkali metal gives off hydrogen — you see fizzing/bubbles (they also all float).",
        },
        {
          point: "Indicator turns blue/purple — alkaline solution formed",
          keywords: ["blue", "purple", "alkaline", "ph above 7", "ph of 8"],
          feedback: "All three make a metal hydroxide that dissolves to give an alkaline solution, so universal indicator turns blue/purple.",
        },
        {
          point: "Same reaction/products because they all have one outer electron (same group)",
          keywords: ["one outer electron", "1 outer electron", "one electron in", "1 electron in", "same number of outer", "same number of electrons in", "single outer electron", "one electron in the outer"],
          feedback: "They are a family because each atom has ONE electron in its outer shell, so they all react in the same way (lose that one electron).",
        },
        {
          point: "Correct formulae: Li + H₂O → LiOH + H₂",
          keywords: ["lioh+h2", "2lioh+h2", "lithium hydroxide+hydrogen"],
          feedback: "Lithium + water → lithium hydroxide (LiOH) + hydrogen (H₂).",
        },
        {
          point: "Balanced with state symbols: 2Li(s) + 2H₂O(l) → 2LiOH(aq) + H₂(g)",
          keywords: ["2li s+2h2o l+2lioh aq+h2 g", "2li s+2lioh aq+h2 g"],
          feedback: "Balance it: 2Li(s) + 2H₂O(l) → 2LiOH(aq) + H₂(g) — water is (l), the hydroxide dissolves (aq), hydrogen is (g).",
        },
      ],
      commonError: "Describing differences (potassium is more violent, sodium melts) when the question asks for similarities, or writing Li₂O/LiH as the product.",
      strategy: "Compare and contrast",
    },
  ],
};
