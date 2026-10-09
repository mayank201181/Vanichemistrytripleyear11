import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-electro",
  title: "Written answers · Electrolysis",
  subtitle: "Explain conduction, predict products, write half-equations and plan the practical",
  topic: "electro",
  questions: [
    {
      id: "el-w01",
      topic: "electro",
      section: "electro-principles",
      difficulty: "core",
      question:
        "Explain why solid potassium bromide does not conduct electricity, but molten potassium bromide does.",
      marks: 3,
      hints: [
        "What kind of particles is potassium bromide made of?",
        "Compare what those particles can do in the solid and in the liquid.",
        "What do the particles carry as they move?",
      ],
      modelAnswer:
        "Potassium bromide is made of K⁺ and Br⁻ ions. In the solid, the ions are held in fixed positions in a giant ionic lattice, so they cannot move. When it is molten, the ions are free to move, so they can carry charge (the current) through the liquid.",
      markScheme: [
        {
          point: "In the solid, the ions are in fixed positions (in a lattice) / cannot move",
          keywords: ["ions+fixed", "ions+lattice", "ions+cannot move", "ions+cant move", "ions+unable to move", "ions+not free", "ions+held in place", "ions+held in position", "ions+only vibrate"],
          feedback:
            "Say what is wrong in the solid: the ions are held in fixed positions in the lattice by strong electrostatic forces, so they cannot move.",
        },
        {
          point: "When molten, the ions are free to move",
          keywords: ["free to move", "ions+move freely", "ions can move", "able to move", "mobile", "move around", "free ions", "move about"],
          feedback:
            "The key change on melting is that the ions become free to move. Use the word 'ions' — never 'electrons' for an ionic compound.",
        },
        {
          point: "The moving ions carry the charge / current",
          keywords: ["ions+carry+charge", "ions+carry+current", "ions+carries", "ions+flow of charge", "ions+charge carrier", "charged ions+move", "ions+transfer charge", "ions+carry electric"],
          feedback:
            "Finish the explanation: the mobile ions carry charge through the liquid. A current is a flow of charge, and here the ions are the charge carriers.",
        },
      ],
      commonError:
        "Writing that 'electrons are free to move' or 'there are delocalised electrons' in molten potassium bromide. Ionic compounds conduct by moving ions; delocalised electrons belong to metals and graphite.",
      strategy: "Think about particles",
    },
    {
      id: "el-w02",
      topic: "electro",
      section: "electro-principles",
      difficulty: "core",
      question:
        "Molten zinc chloride, ZnCl₂, is electrolysed using graphite electrodes. Name the product formed at each electrode and write a half-equation for the reaction at each electrode.",
      marks: 4,
      hints: [
        "Molten means there is no water: the only ions are Zn²⁺ and Cl⁻.",
        "Which ion goes to the negative electrode, and which to the positive?",
        "In half-equations, balance the charge with electrons. Chlorine is diatomic.",
      ],
      modelAnswer:
        "Zinc forms at the cathode (negative electrode): Zn²⁺ + 2e⁻ → Zn. Chlorine gas forms at the anode (positive electrode): 2Cl⁻ → Cl₂ + 2e⁻.",
      markScheme: [
        {
          point: "Zinc at the cathode (negative electrode)",
          keywords: ["zinc+cathode", "zinc+negative", "zn+cathode", "zn+negative"],
          feedback:
            "Positive Zn²⁺ ions are attracted to the negative cathode, so zinc metal forms there. Always link the product to the named electrode.",
        },
        {
          point: "Chlorine at the anode (positive electrode)",
          keywords: ["chlorine+anode", "chlorine+positive", "cl2+anode", "cl2+positive"],
          feedback:
            "Negative Cl⁻ ions are attracted to the positive anode and form chlorine gas (Cl₂). Note: the product is chlorine, not 'chloride'.",
        },
        {
          point: "Zn²⁺ + 2e⁻ → Zn",
          keywords: ["zn2 2e yields zn", "zn 2 2e yields zn", "2e yields zn"],
          feedback:
            "Each Zn²⁺ ion gains two electrons at the cathode: Zn²⁺ + 2e⁻ → Zn. Electrons go on the LEFT because they are gained (reduction).",
        },
        {
          point: "2Cl⁻ → Cl₂ + 2e⁻",
          keywords: ["2cl yields cl2", "2 cl yields cl2"],
          feedback:
            "Two chloride ions each lose one electron and join as Cl₂: 2Cl⁻ → Cl₂ + 2e⁻ (oxidation). Check the charge: −2 on each side.",
        },
      ],
      commonError:
        "Writing 'Cl⁻ → Cl + e⁻' (chlorine is diatomic) or putting the electrons on the wrong side of the zinc equation (Zn²⁺ → Zn + 2e⁻), which does not balance for charge.",
      strategy: "Balance the equation",
    },
    {
      id: "el-w03",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "core",
      question:
        "A student electrolyses copper(II) sulfate solution using graphite electrodes. Describe what the student would observe at each electrode, and explain why the blue colour of the solution fades.",
      marks: 4,
      hints: [
        "Copper is less reactive than hydrogen; sulfate is not a halide.",
        "Describe what you would SEE — a coating, bubbles…",
        "Which ion makes the solution blue, and what happens to it at the cathode?",
      ],
      modelAnswer:
        "At the cathode a pink-brown solid (copper) is deposited on the electrode. At the anode, bubbles of a colourless gas (oxygen) are seen. The blue colour is caused by Cu²⁺ ions. These ions are attracted to the cathode, where they gain electrons (Cu²⁺ + 2e⁻ → Cu) and are removed from the solution as copper. So the concentration of Cu²⁺ ions decreases and the blue colour fades.",
      markScheme: [
        {
          point: "Pink / brown solid (copper) forms on the cathode",
          keywords: ["pink", "brown", "copper+cathode", "copper+negative", "copper+coat", "copper+deposit", "copper+plate"],
          feedback:
            "At the cathode you see a pink-brown coating of copper forming on the electrode, because copper is less reactive than hydrogen.",
        },
        {
          point: "Bubbles (of a colourless gas / oxygen) at the anode",
          keywords: ["bubbl", "fizz", "effervesc", "oxygen", "gas+anode", "gas+positive"],
          feedback:
            "At the anode, hydroxide ions are discharged (no halide present), so you see bubbles of oxygen gas.",
        },
        {
          point: "Cu²⁺ ions gain electrons / are discharged / reduced at the cathode (so are removed from solution)",
          keywords: ["cu2", "copper ions+gain", "copper ii ions+gain", "copper ions+reduc", "copper ions+discharg", "copper ions+removed", "copper ions+used", "ions+gain electrons", "ions+removed", "ions+discharged"],
          feedback:
            "Explain the cause: the blue Cu²⁺ ions gain electrons at the cathode (Cu²⁺ + 2e⁻ → Cu) and so are removed from the solution.",
        },
        {
          point: "So the concentration of Cu²⁺ ions in solution decreases",
          keywords: ["concentration+decreas", "concentration+falls", "concentration+lower", "concentration+reduc", "concentration+goes down", "less concentrated", "fewer+ions", "fewer copper", "less copper ions"],
          feedback:
            "Link it to the colour: as Cu²⁺ ions are removed, their concentration decreases, so the solution becomes paler. 'The copper is used up' is too vague for the mark.",
        },
      ],
      commonError:
        "Saying 'the copper sulfate is used up' or 'the sulfate ions are removed'. The sulfate ions stay in solution; the colour fades because the concentration of blue Cu²⁺ ions falls.",
      strategy: "Think about particles",
    },
    {
      id: "el-w04",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "challenge",
      question:
        "Dilute sulfuric acid is electrolysed using inert electrodes. Hydrogen forms at the cathode and oxygen forms at the anode. Write a half-equation for the reaction at each electrode, and use them to explain why the volume of hydrogen collected is twice the volume of oxygen.",
      marks: 5,
      hints: [
        "Hydrogen comes from H⁺ ions; oxygen comes from OH⁻ ions.",
        "How many electrons are involved in making one H₂? One O₂?",
        "The same number of electrons flows through both electrodes. Equal moles of gas have equal volumes at the same temperature and pressure.",
      ],
      modelAnswer:
        "Cathode: 2H⁺ + 2e⁻ → H₂. Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Each O₂ molecule releases 4 electrons, but each H₂ molecule needs only 2 electrons. The same number of electrons flows through each electrode, so for every 4 electrons, 2 molecules of H₂ form but only 1 molecule of O₂ (4H⁺ + 4e⁻ → 2H₂). Twice as many moles of hydrogen are made, and equal moles of gas occupy equal volumes at the same temperature and pressure, so the volume of hydrogen is twice that of oxygen.",
      markScheme: [
        {
          point: "Cathode: 2H⁺ + 2e⁻ → H₂",
          keywords: ["2h 2e yields h2", "4h 4e yields 2h2", "h 2e yields h2"],
          feedback:
            "At the cathode hydrogen ions gain electrons: 2H⁺ + 2e⁻ → H₂ (reduction). Electrons go on the left.",
        },
        {
          point: "Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻",
          keywords: ["4oh yields o2", "4oh yields 2h2o o2", "4 oh yields o2"],
          feedback:
            "At the anode hydroxide ions lose electrons: 4OH⁻ → O₂ + 2H₂O + 4e⁻ (oxidation). Check: 4 O, 4 H and a charge of −4 on each side.",
        },
        {
          point: "Making one O₂ involves 4 electrons but one H₂ only 2 electrons",
          keywords: ["4 electrons", "four electrons", "2 electrons", "two electrons", "electrons per", "4 e+2 e"],
          feedback:
            "Compare the electrons: forming one O₂ releases 4 electrons, but forming one H₂ uses only 2.",
        },
        {
          point: "The same number of electrons passes through each electrode (same charge/current)",
          keywords: ["same number of electrons", "same number+electrons", "equal number+electrons", "same amount+electrons", "same charge", "same current", "electrons+same", "electrons+equal"],
          feedback:
            "The key link: electrons released at the anode are the same electrons used at the cathode, so the same number pass through each electrode.",
        },
        {
          point: "So twice as many moles/molecules of H₂ form; equal moles of gas occupy equal volumes",
          keywords: ["twice as many+mol", "twice as many+molecules", "double+mol", "2 mol", "2 moles", "two moles", "2 molecules", "two molecules", "moles+volume", "mol+volume", "molecules+volume", "2h2"],
          feedback:
            "Finish the argument: per 4 electrons you get 2 mol H₂ but 1 mol O₂, and equal moles of gas occupy equal volumes at the same temperature and pressure, giving a 2 : 1 volume ratio.",
        },
      ],
      commonError:
        "Saying 'because water is H₂O, which has two hydrogens and one oxygen'. The formula is a hint, but it confuses atoms with molecules; the full mark scheme wants the electron argument from the half-equations.",
      strategy: "Use the mole ratio",
    },
    {
      id: "el-w05",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "core",
      question:
        "Describe how you could electrolyse sodium chloride solution in the laboratory, collect the gas formed at each electrode and identify each gas.",
      marks: 6,
      hints: [
        "Which electrodes would you use, and what provides the current?",
        "How can you collect a gas over an electrode that is under the liquid?",
        "Which gas forms at each electrode, and what is the test for each?",
      ],
      modelAnswer:
        "Pour sodium chloride solution into a beaker and place two inert graphite electrodes in it. Fill two small test tubes with the solution and invert one over each electrode. Connect the electrodes to a low-voltage d.c. power supply and switch on. The gases collect in the test tubes by displacing the solution: hydrogen at the cathode (negative) and chlorine at the anode (positive). Test the hydrogen by holding a lighted splint at the mouth of the tube: it burns with a squeaky pop. Test the chlorine with damp blue litmus paper: it is bleached (turns white). Do this in a well-ventilated room as chlorine is toxic.",
      markScheme: [
        {
          point: "Use inert (graphite / carbon / platinum) electrodes in the solution",
          keywords: ["graphite", "carbon electrode", "carbon rod", "platinum", "inert"],
          feedback:
            "Name the electrodes: inert electrodes such as graphite (carbon) or platinum, so they do not react.",
        },
        {
          point: "Connect to a (low-voltage) d.c. power supply / battery",
          keywords: ["power supply", "power pack", "battery", "dc supply", "d c", "power source", "direct current"],
          feedback:
            "You need a source of direct current: connect the electrodes to a low-voltage d.c. power supply or battery.",
        },
        {
          point: "Fill test tubes with the solution and invert them over the electrodes",
          keywords: ["invert", "upside down", "test tube+over", "test tube+filled", "test tube+full", "test tubes+above"],
          feedback:
            "To collect each gas, fill a test tube with the solution and turn it upside down over each electrode; the gas displaces the liquid.",
        },
        {
          point: "Hydrogen forms at the cathode and chlorine at the anode",
          keywords: ["hydrogen+chlorine", "h2+cl2"],
          feedback:
            "State the products: hydrogen at the cathode (sodium is more reactive than hydrogen) and chlorine at the anode (a halide is present).",
        },
        {
          point: "Hydrogen: lighted splint gives a squeaky pop",
          keywords: ["squeaky pop", "pop", "lit splint", "lighted splint", "burning splint"],
          feedback:
            "Test for hydrogen: hold a lighted splint at the mouth of the tube — it burns with a squeaky pop.",
        },
        {
          point: "Chlorine: bleaches damp (blue) litmus paper",
          keywords: ["bleach", "turns white", "litmus+white", "decolouris"],
          feedback:
            "Test for chlorine: damp litmus paper is bleached (turns white; blue litmus may go red first). The paper must be damp.",
        },
      ],
      commonError:
        "Testing chlorine with a glowing splint or saying it 'turns litmus red' only. Chlorine BLEACHES damp litmus paper. Also, many students forget to say how the gases are collected.",
      strategy: "Follow the method step by step",
    },
    {
      id: "el-w06",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "challenge",
      question:
        "Copper(II) chloride solution and sodium sulfate solution are each electrolysed using inert electrodes. Predict the product at each electrode for each solution. Explain your predictions.",
      marks: 6,
      hints: [
        "Remember each solution also contains H⁺ and OH⁻ from water.",
        "Cathode: compare the metal with hydrogen in the reactivity series.",
        "Anode: is a halide ion present? If not, which ion is discharged?",
      ],
      modelAnswer:
        "Copper(II) chloride solution: copper forms at the cathode and chlorine at the anode. Sodium sulfate solution: hydrogen forms at the cathode and oxygen at the anode. At the cathode, copper is less reactive than hydrogen, so Cu²⁺ ions are discharged; sodium is more reactive than hydrogen, so H⁺ ions are discharged instead and hydrogen forms. At the anode, chloride is a halide, so chloride ions are discharged in preference to hydroxide ions; sulfate ions are not discharged, so hydroxide ions are discharged to give oxygen (4OH⁻ → O₂ + 2H₂O + 4e⁻).",
      markScheme: [
        {
          point: "Copper(II) chloride: copper at the cathode",
          keywords: ["copper+cathode", "copper+negative", "cu+cathode"],
          feedback:
            "In copper(II) chloride solution copper is deposited at the cathode, because copper is less reactive than hydrogen.",
        },
        {
          point: "Copper(II) chloride: chlorine at the anode",
          keywords: ["chlorine+anode", "chlorine+positive", "cl2+anode", "cl2+positive"],
          feedback:
            "Chloride is a halide, so chlorine gas (Cl₂) forms at the anode of the copper(II) chloride cell.",
        },
        {
          point: "Sodium sulfate: hydrogen at the cathode",
          keywords: ["hydrogen+cathode", "hydrogen+negative", "h2+cathode"],
          feedback:
            "Sodium is more reactive than hydrogen, so hydrogen gas forms at the cathode in sodium sulfate solution — not sodium.",
        },
        {
          point: "Sodium sulfate: oxygen at the anode",
          keywords: ["oxygen+anode", "oxygen+positive", "o2+anode"],
          feedback:
            "No halide is present in sodium sulfate solution, so oxygen forms at the anode (from hydroxide ions).",
        },
        {
          point: "Cathode explanation: copper is less reactive than hydrogen (so Cu²⁺ discharged); sodium is more reactive than hydrogen (so H⁺ discharged)",
          keywords: ["less reactive than hydrogen", "more reactive than hydrogen", "less reactive+hydrogen", "more reactive+hydrogen", "below hydrogen", "above hydrogen", "lower than hydrogen", "higher than hydrogen"],
          feedback:
            "Explain the cathode using the reactivity series: a metal less reactive than hydrogen (copper) is deposited; for a metal more reactive than hydrogen (sodium), hydrogen forms instead.",
        },
        {
          point: "Anode explanation: halide (chloride) ions discharged in preference; sulfate not discharged so hydroxide ions give oxygen",
          keywords: ["halide", "halogen", "chloride+preference", "chloride ions+discharg", "not discharged", "hydroxide+discharg", "hydroxide ions+oxygen", "oh+discharg", "4oh"],
          feedback:
            "Explain the anode: when a halide ion is present the halogen forms; sulfate ions are not discharged, so hydroxide ions from water lose electrons to form oxygen.",
        },
      ],
      commonError:
        "Predicting sodium at the cathode (that only happens with MOLTEN salts) or sulfur/sulfur dioxide at the anode. In aqueous solution sodium is never deposited and sulfate ions are not discharged.",
      strategy: "Apply it to a new situation",
    },
  ],
};
