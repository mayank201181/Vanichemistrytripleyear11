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
          keywords: ["ions are fixed", "ions are held", "ions held", "fixed position", "fixed in place", "held in place", "held in position", "ions cannot move", "ions cant move", "ions are unable to move", "ions are not free", "ions not free", "ions only vibrate", "can only vibrate", "locked in", "fixed lattice", "they cannot move", "they cant move", "and cannot move", "so cannot move"],
          feedback:
            "Say what is wrong in the solid: the ions are held in fixed positions in the lattice by strong electrostatic forces, so they cannot move.",
        },
        {
          point: "When molten, the ions are free to move",
          keywords: ["ions are free", "ions become free", "ions are now free", "ions free to move", "ions can move", "ions move", "ions are mobile", "mobile ions", "ions become mobile", "ions are able to move", "free ions", "they become mobile", "they are free to move", "they become free", "they can move"],
          feedback:
            "The key change on melting is that the ions become free to move. Use the word 'ions' — never 'electrons' for an ionic compound.",
        },
        {
          point: "The moving ions carry the charge / current",
          keywords: ["ions carry", "ions can carry", "ions to carry", "ions which carry", "ions that carry", "ions flow", "ions conduct", "ions move to", "charged ions", "they can carry", "they carry", "ions can move+carry", "ions move+carry", "ions are free+carry", "ions free to move+carry", "mobile ions+carry", "ions+charge carrier", "ions+flow of charge"],
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
          keywords: ["zinc at cathode", "zn at cathode", "zinc form at cathode", "zinc produc at cathode", "zinc made at cathode", "zinc collect at cathode", "zinc give off at cathode", "zinc releas at cathode", "zinc evolv at cathode", "zinc deposit at cathode", "zinc metal at cathode", "zinc deposit on cathode", "zinc on cathode", "zinc form on cathode", "zn form on cathode", "zinc at negative", "zn at negative", "zinc form at negative", "zinc produc at negative", "zinc made at negative", "zinc collect at negative", "zinc give off at negative", "zinc releas at negative", "zinc evolv at negative", "zinc deposit at negative", "zinc metal at negative", "zinc deposit on negative", "zinc on negative", "cathode yields zinc", "cathode produc zinc", "cathode give zinc", "cathode form zinc", "cathode zinc metal", "cathode zinc form", "cathode zinc produc", "cathode zinc made", "cathode zinc collect", "cathode zinc give", "cathode zinc releas", "cathode zinc deposit"],
          feedback:
            "Positive Zn²⁺ ions are attracted to the negative cathode, so zinc metal forms there. Always link the product to the named electrode.",
        },
        {
          point: "Chlorine at the anode (positive electrode)",
          keywords: ["chlorine at anode", "cl2 at anode", "chlorine form at anode", "chlorine produc at anode", "chlorine made at anode", "chlorine collect at anode", "chlorine give off at anode", "chlorine releas at anode", "chlorine evolv at anode", "chlorine gas at anode", "chlorine gas form at anode", "chlorine gas give off at anode", "chlorine gas produc at anode", "chlorine at positive", "cl2 at positive", "chlorine form at positive", "chlorine produc at positive", "chlorine made at positive", "chlorine collect at positive", "chlorine give off at positive", "chlorine releas at positive", "chlorine evolv at positive", "chlorine gas at positive", "chlorine gas form at positive", "chlorine gas give off at positive", "chlorine gas produc at positive", "anode yields chlorine", "anode produc chlorine", "anode give chlorine", "anode form chlorine", "anode chlorine gas", "anode chlorine form", "anode chlorine produc", "anode chlorine made", "anode chlorine collect", "anode chlorine give", "anode chlorine releas"],
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
          keywords: ["pink", "brown", "copper at cathode", "copper form on cathode", "copper form at cathode", "copper deposit on cathode", "copper deposit at cathode", "copper on cathode", "copper coat", "coated in copper", "coating of copper", "layer of copper", "cathode copper", "copper at negative", "copper plat"],
          feedback:
            "At the cathode you see a pink-brown coating of copper forming on the electrode, because copper is less reactive than hydrogen.",
        },
        {
          point: "Bubbles (of a colourless gas / oxygen) at the anode",
          keywords: ["bubbl at anode", "bubbl at positive", "gas at anode", "gas at positive", "anode bubbl", "anode gas", "anode fizz", "fizz at anode", "effervesc at anode", "oxygen at anode", "oxygen form at anode", "oxygen produc at anode", "anode oxygen", "bubbl of oxygen", "bubbl of colourless", "oxygen bubbl", "oxygen gas", "colourless gas"],
          feedback:
            "At the anode, hydroxide ions are discharged (no halide present), so you see bubbles of oxygen gas.",
        },
        {
          point: "Cu²⁺ ions gain electrons / are discharged / reduced at the cathode (so are removed from solution)",
          keywords: ["cu2", "copper ions gain", "copper ii ions gain", "copper ions reduc", "copper ii ions reduc", "copper ions discharg", "copper ii ions discharg", "copper ions remov", "copper ii ions remov", "copper ions used", "copper ii ions used", "copper ions turn into", "ions gain electrons", "copper ions are reduc"],
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
          keywords: ["hydrogen at cathode+chlorine", "hydrogen at negative+chlorine", "hydrogen form at cathode+chlorine", "hydrogen produc at cathode+chlorine", "hydrogen collect at cathode+chlorine", "cathode yields hydrogen+chlorine", "cathode produc hydrogen+chlorine", "cathode hydrogen form+chlorine", "chlorine at anode+hydrogen", "chlorine at positive+hydrogen", "chlorine form at anode+hydrogen", "chlorine produc at anode+hydrogen", "chlorine collect at anode+hydrogen", "anode yields chlorine+hydrogen", "anode produc chlorine+hydrogen", "anode chlorine form+hydrogen"],
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
          keywords: ["copper at cathode", "cu at cathode", "copper form at cathode", "copper produc at cathode", "copper made at cathode", "copper collect at cathode", "copper give off at cathode", "copper releas at cathode", "copper evolv at cathode", "copper deposit at cathode", "copper metal at cathode", "copper deposit on cathode", "copper on cathode", "copper form on cathode", "copper at negative", "cu at negative", "copper form at negative", "copper produc at negative", "copper made at negative", "copper collect at negative", "copper give off at negative", "copper releas at negative", "copper evolv at negative", "copper deposit at negative", "copper metal at negative", "copper deposit on negative", "copper on negative", "cathode yields copper", "cathode produc copper", "cathode give copper", "cathode form copper", "cathode copper metal", "cathode copper form", "cathode copper produc", "cathode copper made", "cathode copper collect", "cathode copper give", "cathode copper releas", "cathode copper deposit"],
          feedback:
            "In copper(II) chloride solution copper is deposited at the cathode, because copper is less reactive than hydrogen.",
        },
        {
          point: "Copper(II) chloride: chlorine at the anode",
          keywords: ["chlorine at anode", "cl2 at anode", "chlorine form at anode", "chlorine produc at anode", "chlorine made at anode", "chlorine collect at anode", "chlorine give off at anode", "chlorine releas at anode", "chlorine evolv at anode", "chlorine gas at anode", "chlorine gas form at anode", "chlorine gas give off at anode", "chlorine gas produc at anode", "chlorine at positive", "cl2 at positive", "chlorine form at positive", "chlorine produc at positive", "chlorine made at positive", "chlorine collect at positive", "chlorine give off at positive", "chlorine releas at positive", "chlorine evolv at positive", "chlorine gas at positive", "chlorine gas form at positive", "chlorine gas give off at positive", "chlorine gas produc at positive", "anode yields chlorine", "anode produc chlorine", "anode give chlorine", "anode form chlorine", "anode chlorine gas", "anode chlorine form", "anode chlorine produc", "anode chlorine made", "anode chlorine collect", "anode chlorine give", "anode chlorine releas"],
          feedback:
            "Chloride is a halide, so chlorine gas (Cl₂) forms at the anode of the copper(II) chloride cell.",
        },
        {
          point: "Sodium sulfate: hydrogen at the cathode",
          keywords: ["hydrogen at cathode", "h2 at cathode", "hydrogen form at cathode", "hydrogen produc at cathode", "hydrogen made at cathode", "hydrogen collect at cathode", "hydrogen give off at cathode", "hydrogen releas at cathode", "hydrogen evolv at cathode", "hydrogen gas at cathode", "hydrogen gas form at cathode", "hydrogen gas give off at cathode", "hydrogen gas produc at cathode", "hydrogen at negative", "h2 at negative", "hydrogen form at negative", "hydrogen produc at negative", "hydrogen made at negative", "hydrogen collect at negative", "hydrogen give off at negative", "hydrogen releas at negative", "hydrogen evolv at negative", "hydrogen gas at negative", "hydrogen gas form at negative", "hydrogen gas give off at negative", "hydrogen gas produc at negative", "cathode yields hydrogen", "cathode produc hydrogen", "cathode give hydrogen", "cathode form hydrogen", "cathode hydrogen gas", "cathode hydrogen form", "cathode hydrogen produc", "cathode hydrogen made", "cathode hydrogen collect", "cathode hydrogen give", "cathode hydrogen releas"],
          feedback:
            "Sodium is more reactive than hydrogen, so hydrogen gas forms at the cathode in sodium sulfate solution — not sodium.",
        },
        {
          point: "Sodium sulfate: oxygen at the anode",
          keywords: ["oxygen at anode", "o2 at anode", "oxygen form at anode", "oxygen produc at anode", "oxygen made at anode", "oxygen collect at anode", "oxygen give off at anode", "oxygen releas at anode", "oxygen evolv at anode", "oxygen gas at anode", "oxygen gas form at anode", "oxygen gas give off at anode", "oxygen gas produc at anode", "oxygen at positive", "o2 at positive", "oxygen form at positive", "oxygen produc at positive", "oxygen made at positive", "oxygen collect at positive", "oxygen give off at positive", "oxygen releas at positive", "oxygen evolv at positive", "oxygen gas at positive", "oxygen gas form at positive", "oxygen gas give off at positive", "oxygen gas produc at positive", "anode yields oxygen", "anode produc oxygen", "anode give oxygen", "anode form oxygen", "anode oxygen gas", "anode oxygen form", "anode oxygen produc", "anode oxygen made", "anode oxygen collect", "anode oxygen give", "anode oxygen releas"],
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
