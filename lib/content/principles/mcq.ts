import type { MCQ, QuestionSet } from "../../types";

export const mcq: QuestionSet<MCQ> = {
  id: "mcq-principles",
  title: "Multiple choice · Principles of Chemistry",
  subtitle: "States, diffusion, solubility, separation, atoms, isotopes and the Periodic Table",
  topic: "principles",
  questions: [
    // ───────────── WARM-UP ─────────────
    {
      id: "pc-m01",
      topic: "principles",
      section: "principles-states",
      difficulty: "warmup",
      question: "Which row describes the particles in a liquid?",
      options: [
        "Close together, random arrangement, moving around each other",
        "Far apart, random arrangement, moving quickly in all directions",
        "Close together, regular arrangement, vibrating about fixed positions",
        "Close together, regular arrangement, moving around each other",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Liquid particles are still touching (close together) but have no fixed pattern and can slide past one another, which is why liquids flow.",
        "This describes a gas. Gas particles are far apart, which is why gases can be compressed and liquids cannot.",
        "This describes a solid: a regular lattice of particles that only vibrate about fixed positions.",
        "A liquid has no regular arrangement. If the particles were in a regular pattern the substance would be a solid and could not flow.",
      ],
      explanation:
        "Learn the three descriptions as a set: arrangement, movement, closeness. Solid: close, regular, vibrate about fixed positions. Liquid: close, random, move around each other. Gas: far apart, random, move quickly in all directions. Liquids keep a fixed volume (particles touching) but take the shape of the container (particles can move past each other).",
      hints: ["Liquids flow but cannot be squashed - what does each of those facts tell you about the particles?"],
      strategy: "Think about particles",
    },
    {
      id: "pc-m02",
      topic: "principles",
      section: "principles-states",
      difficulty: "warmup",
      question: "Solid carbon dioxide (dry ice) turns directly into a gas without melting. What is this change of state called?",
      options: ["Evaporation", "Sublimation", "Condensation", "Boiling"],
      answerIndex: 1,
      optionFeedback: [
        "Evaporation is liquid → gas at the surface of a liquid. Dry ice never becomes a liquid at atmospheric pressure.",
        "Sublimation is the direct change from solid to gas, skipping the liquid state.",
        "Condensation is the reverse direction, gas → liquid, and releases energy.",
        "Boiling is liquid → gas throughout the liquid at its boiling point; there is no liquid here.",
      ],
      explanation:
        "The changes of state are melting (s → l), freezing (l → s), boiling/evaporating (l → g), condensing (g → l) and sublimation (s → g directly). Sublimation, like melting and boiling, needs energy to overcome the forces of attraction between particles.",
      hints: ["Which change of state goes straight from solid to gas, missing out the liquid?"],
      strategy: "Recall the definition",
    },
    {
      id: "pc-m03",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "warmup",
      question: "Which of these is a compound?",
      options: ["Air", "Sea water", "Carbon dioxide", "Oxygen"],
      answerIndex: 2,
      optionFeedback: [
        "Air is a mixture of gases (mainly nitrogen and oxygen) that are not chemically combined; it can be separated by fractional distillation of liquid air.",
        "Sea water is a mixture: salts dissolved in water, not chemically combined. Distillation separates them.",
        "Carbon dioxide, CO₂, contains two elements (carbon and oxygen) chemically combined in a fixed ratio.",
        "Oxygen, O₂, is an element: its molecules contain only one type of atom.",
      ],
      explanation:
        "A compound contains two or more different elements chemically combined in fixed proportions. An element contains only one type of atom (O₂ is still an element, even though it is made of molecules). A mixture contains substances that are not chemically combined and can be separated by physical methods.",
      hints: ["Look for two different elements joined by chemical bonds in a fixed ratio."],
      strategy: "Recall the definition",
    },
    {
      id: "pc-m04",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "warmup",
      question: "What are the relative mass and the relative charge of a neutron?",
      options: [
        "Relative mass 1, relative charge +1",
        "Relative mass 1/1836, relative charge −1",
        "Relative mass 0, relative charge 0",
        "Relative mass 1, relative charge 0",
      ],
      answerIndex: 3,
      optionFeedback: [
        "These are the values for a proton. Protons and neutrons have the same relative mass, but only the proton is charged.",
        "These are the values for an electron, which has a negligible mass.",
        "A neutron has no charge, but it does have mass: about the same as a proton. Neutrons contribute to the mass number.",
        "A neutron has the same relative mass as a proton (1) and no charge (neutral).",
      ],
      explanation:
        "Proton: mass 1, charge +1. Neutron: mass 1, charge 0. Electron: mass 1/1836 (almost zero), charge −1. Protons and neutrons are in the nucleus, which is why almost all of an atom's mass is concentrated there.",
      hints: ["The name 'neutron' tells you about its charge; it sits in the nucleus alongside protons."],
      strategy: "Recall the definition",
    },
    {
      id: "pc-m05",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "warmup",
      question: "An atom of aluminium has atomic number 13 and mass number 27. How many neutrons does it contain?",
      options: ["13", "14", "27", "40"],
      answerIndex: 1,
      optionFeedback: [
        "13 is the number of protons (and of electrons) - the atomic number.",
        "Neutrons = mass number − atomic number = 27 − 13 = 14.",
        "27 is the mass number: the total of protons AND neutrons.",
        "This is what you get if you add the two numbers instead of subtracting.",
      ],
      explanation:
        "Mass number = protons + neutrons, and atomic number = protons. So neutrons = mass number − atomic number:\n27 − 13 = 14 neutrons.\nA neutral aluminium atom also has 13 electrons.",
      hints: ["Mass number counts the particles in the nucleus; atomic number counts only one kind of them."],
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-m06",
      topic: "principles",
      section: "principles-periodic",
      difficulty: "warmup",
      question: "In the modern Periodic Table, the elements are arranged in order of increasing…",
      options: ["atomic number", "relative atomic mass", "number of neutrons", "number of outer electrons"],
      answerIndex: 0,
      optionFeedback: [
        "Elements are arranged by atomic number (number of protons). That is why argon (Z = 18) comes before potassium (Z = 19) even though argon has the larger Ar.",
        "Tempting, because early tables used atomic mass - but ordering by mass puts some pairs (e.g. Ar and K) in the wrong place.",
        "Neutron numbers vary between isotopes of the same element, so they cannot be used to order elements.",
        "The number of outer electrons repeats (1, 2, … 8, then 1 again), so it decides the group, not the order.",
      ],
      explanation:
        "The modern Periodic Table lists elements by increasing atomic number. Elements with the same number of outer electrons fall into the same vertical group, and each new period starts when a new electron shell begins to fill.",
      hints: ["Which number is unique to each element and never changes between isotopes?"],
      strategy: "Recall the definition",
    },

    // ───────────── CORE ─────────────
    {
      id: "pc-m07",
      topic: "principles",
      section: "principles-states",
      difficulty: "core",
      question:
        "A pure solid is heated at a constant rate. Its temperature rises to 80 °C, stays at 80 °C for 4 minutes while it melts, and then rises again. Why does the temperature stay constant?",
      options: [
        "The particles stop moving while the solid changes into a liquid",
        "The Bunsen burner stops transferring energy at the melting point",
        "Covalent bonds inside the molecules are broken during melting",
        "Energy is used to overcome forces of attraction between particles",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Particles never stop moving. In fact they gain freedom to move as the solid melts.",
        "Energy is still being supplied at a constant rate - that is the whole point of the puzzle. It is just not raising the temperature.",
        "Melting a molecular solid overcomes the weak forces BETWEEN molecules; the covalent bonds inside the molecules do not break.",
        "During melting the energy supplied overcomes the attractions between particles instead of increasing their kinetic energy, so the temperature stays constant.",
      ],
      explanation:
        "Temperature reflects the average kinetic energy of the particles. During a change of state (the plateau on a heating curve) the energy supplied is used to overcome the forces of attraction between particles, so their kinetic energy, and therefore the temperature, does not increase. The plateau temperature (80 °C) is the melting point. A sharp, single melting point also tells you the solid is pure.",
      hints: [
        "Energy is still going in. If it isn't making particles move faster, what else could it be doing?",
        "Think about what holds particles together in a solid and what must happen to it for the solid to become a liquid.",
      ],
      strategy: "Think about particles",
    },
    {
      id: "pc-m08",
      topic: "principles",
      section: "principles-states",
      difficulty: "core",
      question:
        "Cotton wool soaked in concentrated ammonia solution is placed at one end of a long glass tube, and cotton wool soaked in concentrated hydrochloric acid at the other end. After a few minutes a white ring of ammonium chloride forms. Where does the ring form, and why?",
      options: [
        "Exactly in the middle, because all gas particles diffuse at the same speed",
        "Nearer the ammonia end, because NH₃ particles have a lower mass and move faster",
        "Nearer the acid end, because NH₃ particles have a lower mass and move faster",
        "Nearer the acid end, because HCl particles have a higher mass and move faster",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Gas particles at the same temperature do not all move at the same speed: lighter particles move faster on average.",
        "The reason is right but the conclusion is backwards. If NH₃ moves faster it travels further, so the gases meet nearer the HCl end.",
        "NH₃ (Mr 17) is lighter than HCl (Mr 36.5), so its particles move faster and travel further in the same time; the gases meet closer to the HCl end.",
        "The position is right but the reason is wrong: heavier particles move more slowly, not faster.",
      ],
      explanation:
        "Both gases diffuse along the tube by random movement of their particles. Where they meet, they react: NH₃(g) + HCl(g) → NH₄Cl(s), the white solid. Ammonia has the lower relative formula mass (17 compared with 36.5), so its particles move faster and cover more of the tube before meeting the hydrogen chloride. The ring is therefore nearer the hydrochloric acid end.",
      hints: [
        "Work out the Mr of NH₃ and HCl. Which particles move faster?",
        "The faster gas travels further in the same time, so where do the two gases meet?",
      ],
      strategy: "Think about particles",
    },
    {
      id: "pc-m09",
      topic: "principles",
      section: "principles-states",
      difficulty: "core",
      question:
        "A solution contains 40 g of potassium chloride dissolved in 100 g of water at 60 °C. The solution is cooled slowly. Using the table, at which temperature does the solution first become saturated?",
      table: {
        caption: "Solubility of potassium chloride",
        headers: ["Temperature (°C)", "0", "20", "40", "60", "80"],
        rows: [["Solubility (g per 100 g water)", "28", "34", "40", "46", "51"]],
      },
      options: ["20 °C", "40 °C", "60 °C", "80 °C"],
      answerIndex: 1,
      optionFeedback: [
        "At 20 °C only 34 g dissolves, so crystals would already have formed by then. The solution becomes saturated earlier, at a higher temperature.",
        "40 g per 100 g water is exactly the solubility at 40 °C, so this is where the solution becomes saturated. Below 40 °C crystals form.",
        "At 60 °C, 46 g could dissolve but only 40 g is present, so the solution is not yet saturated.",
        "The solution starts at 60 °C and is being cooled, so it never reaches 80 °C.",
      ],
      explanation:
        "A saturated solution holds the maximum mass of solute that can dissolve at that temperature. Solubility falls as the temperature falls, so read across from 40 g on the solubility scale: the solubility equals 40 g per 100 g water at 40 °C. Above 40 °C the solution is unsaturated; below 40 °C the excess potassium chloride crystallises out.",
      hints: [
        "A solution is saturated when the mass dissolved equals the solubility.",
        "Find 40 g in the solubility row and read off the temperature.",
      ],
      strategy: "Read the data carefully",
    },
    {
      id: "pc-m10",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question:
        "In the simple distillation of salt solution, why must cold water flow continuously through the Liebig condenser?",
      options: [
        "To keep the condenser cold so that the vapour condenses",
        "To stop the solution in the flask boiling too quickly",
        "To heat the vapour so it reaches the collecting flask",
        "To dissolve any salt carried over with the vapour",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Flowing water carries heat away, so the condenser stays cold and the water vapour condenses to liquid water (the distillate).",
        "The condenser is not in contact with the flask; the rate of boiling is controlled by the heating.",
        "The condenser cools the vapour - it does not heat it. Vapour reaches the collecting flask because it condenses to liquid and runs down the tube.",
        "Salt does not evaporate at 100 °C, so none is carried over. The cooling water never touches the distillate - it flows in a separate jacket.",
      ],
      explanation:
        "The vapour gives out energy to the condenser as it condenses. If the cooling water stood still, it would warm up and vapour would escape uncondensed. A continuous flow keeps replacing warmed water with cold water, keeping the condenser cold so all the vapour condenses. The water enters at the bottom so the jacket fills completely, giving more efficient cooling.",
      hints: [
        "What happens to the cooling water as hot vapour passes through the inner tube?",
        "What must happen to the vapour for pure water to be collected?",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "pc-m11",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question:
        "In a paper chromatography experiment the baseline is drawn 1.5 cm above the bottom edge of the paper. Measured from the bottom edge, the solvent front is 9.0 cm and the centre of a dye spot is 4.5 cm. What is the Rf value of the dye?",
      options: ["0.50", "0.60", "2.5", "0.40"],
      answerIndex: 3,
      optionFeedback: [
        "This is 4.5 ÷ 9.0: you measured from the bottom edge of the paper instead of from the baseline.",
        "This is 4.5 ÷ 7.5: you corrected the solvent distance but not the spot distance.",
        "This is 7.5 ÷ 3.0: the fraction is upside down. Rf can never be greater than 1.",
        "Spot: 4.5 − 1.5 = 3.0 cm; solvent: 9.0 − 1.5 = 7.5 cm; Rf = 3.0 ÷ 7.5 = 0.40.",
      ],
      explanation:
        "Rf = distance moved by spot ÷ distance moved by solvent, both measured from the baseline (where the spots started).\nSpot: 4.5 − 1.5 = 3.0 cm\nSolvent: 9.0 − 1.5 = 7.5 cm\nRf = 3.0 ÷ 7.5 = 0.40\nRf is always less than 1 because the spot cannot travel further than the solvent.",
      hints: [
        "Both distances must be measured from the same starting line - where did the spot start?",
        "Subtract 1.5 cm from both readings before dividing; Rf is less than 1.",
      ],
      strategy: "Check the units",
    },
    {
      id: "pc-m12",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question:
        "Which is the best method to obtain ethanol (boiling point 78 °C) from a mixture of ethanol and water (boiling point 100 °C)?",
      options: ["Filtration", "Crystallisation", "Simple distillation", "Fractional distillation"],
      answerIndex: 3,
      optionFeedback: [
        "Filtration separates an insoluble solid from a liquid. Ethanol and water are miscible liquids, so both pass through the filter paper.",
        "Crystallisation obtains a dissolved solid from a solution. Ethanol is a liquid.",
        "Simple distillation separates a solvent from a dissolved solid. With two liquids whose boiling points are only 22 °C apart, a lot of water vapour would distil over with the ethanol.",
        "A fractionating column separates miscible liquids with different boiling points: ethanol (lower bp) reaches the top and distils over first at 78 °C.",
      ],
      explanation:
        "Fractional distillation separates miscible liquids with different boiling points. In the fractionating column the vapours repeatedly condense and re-evaporate; the column is hottest at the bottom and coolest at the top, so the liquid with the lower boiling point (ethanol) reaches the top first. While the thermometer reads 78 °C, ethanol is being collected; when the temperature rises, change the receiver.",
      hints: [
        "Are you separating a solid from a liquid, or two liquids?",
        "The two liquids mix completely and their boiling points are fairly close. Which method uses a column?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "pc-m13",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question: "Which result shows that a colourless liquid collected by distillation is pure water?",
      options: [
        "It turns anhydrous copper(II) sulfate from white to blue",
        "It gives a green colour with universal indicator (pH 7)",
        "It boils at exactly 100 °C at atmospheric pressure",
        "It leaves no residue when a drop is evaporated",
      ],
      answerIndex: 2,
      optionFeedback: [
        "This is a chemical test showing that water is PRESENT. Salty water or any aqueous solution would also turn it blue, so it does not prove purity.",
        "Many solutions are neutral (e.g. sodium chloride solution), so pH 7 does not prove the water is pure.",
        "A pure substance has a fixed boiling point; pure water boils at exactly 100 °C (and freezes at 0 °C) at 1 atm. Impurities change this.",
        "This rules out dissolved solids, but a dissolved liquid such as ethanol would also evaporate and leave no residue.",
      ],
      explanation:
        "Purity is shown by a physical test: a pure substance melts and boils at a sharp, fixed temperature. Pure water boils at exactly 100 °C and freezes at exactly 0 °C at 1 atm. Dissolved impurities raise the boiling point and lower the freezing point (and make the change happen over a range). The anhydrous copper(II) sulfate test only shows that water is present.",
      hints: [
        "Pure substances have one property that is fixed and sharp - what is it?",
        "Which tests would ALSO give a positive result with salty water?",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "pc-m14",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "core",
      question: "Which statement about the isotopes chlorine-35 and chlorine-37 is correct?",
      options: [
        "They react in the same way because they have the same electron arrangement",
        "Chlorine-37 has two more protons in its nucleus than chlorine-35",
        "Chlorine-37 has two more electrons in its outer shell than chlorine-35",
        "They have the same number of neutrons but different numbers of protons",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Both have 17 protons and 17 electrons (2.8.7). Chemistry depends on electrons, so isotopes have the same chemical properties.",
        "The number of protons defines the element: both isotopes have 17. A chlorine atom with 19 protons would be potassium.",
        "Both atoms have 17 electrons (2.8.7). Only the number of neutrons differs.",
        "This is the wrong way round: isotopes have the same number of protons but different numbers of neutrons (18 and 20).",
      ],
      explanation:
        "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. Chlorine-35 has 17 p, 18 n, 17 e; chlorine-37 has 17 p, 20 n, 17 e. Because the electronic configuration is identical (2.8.7), the chemical properties are the same; only mass-related physical properties (such as density) differ.",
      hints: [
        "Write down protons, neutrons and electrons for each isotope (Z = 17).",
        "Which particles decide how an atom reacts?",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "pc-m15",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "core",
      question: "Use the data in the table to calculate the relative atomic mass of magnesium.",
      table: {
        caption: "Isotopes of magnesium",
        headers: ["Isotope", "²⁴Mg", "²⁵Mg", "²⁶Mg"],
        rows: [["Abundance (%)", "79.0", "10.0", "11.0"]],
      },
      options: ["24.0", "24.3", "25.0", "2432"],
      answerIndex: 1,
      optionFeedback: [
        "This just takes the mass of the most abundant isotope and ignores the other two.",
        "(24 × 79.0 + 25 × 10.0 + 26 × 11.0) ÷ 100 = 2432 ÷ 100 = 24.3.",
        "This is the simple mean of 24, 25 and 26. It ignores the abundances - Ar is a WEIGHTED mean.",
        "This is the total of mass × abundance: you forgot to divide by 100.",
      ],
      explanation:
        "Ar = Σ(isotopic mass × % abundance) ÷ 100\n= (24 × 79.0 + 25 × 10.0 + 26 × 11.0) ÷ 100\n= (1896 + 250 + 286) ÷ 100\n= 2432 ÷ 100 = 24.3\nSense-check: the answer lies close to 24 because ²⁴Mg is by far the most abundant isotope.",
      hints: [
        "Ar is a weighted mean: each isotope's mass counts in proportion to its abundance.",
        "Multiply each mass by its percentage, add them up, then divide by the total percentage.",
      ],
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-m16",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "core",
      question: "Which particle has the electronic configuration 2.8.8?",
      options: ["Na⁺", "Mg", "Ca²⁺", "O²⁻"],
      answerIndex: 2,
      optionFeedback: [
        "Sodium has 11 electrons; Na⁺ has 10, arranged 2.8.",
        "A magnesium atom has 12 electrons: 2.8.2.",
        "Calcium has 20 electrons (2.8.8.2); the Ca²⁺ ion has lost its 2 outer electrons, leaving 18: 2.8.8.",
        "Oxygen has 8 electrons; O²⁻ has gained 2, giving 10: 2.8.",
      ],
      explanation:
        "2.8.8 means 18 electrons in total. Count electrons for each particle: atoms have electrons = atomic number; positive ions have lost electrons, negative ions have gained them. Ca (20) − 2 = 18 → 2.8.8. The argon atom, K⁺, Cl⁻ and S²⁻ also have this configuration.",
      hints: [
        "Add up 2 + 8 + 8: how many electrons is that?",
        "For an ion, adjust the atomic number by the charge: positive ions have LOST electrons.",
      ],
      strategy: "Think about electrons",
    },
    {
      id: "pc-m17",
      topic: "principles",
      section: "principles-periodic",
      difficulty: "core",
      question: "An element has the electronic configuration 2.8.6. In which group and period of the Periodic Table is it?",
      options: ["Group 3, period 6", "Group 6, period 3", "Group 6, period 2", "Group 8, period 3"],
      answerIndex: 1,
      optionFeedback: [
        "You have swapped them: the group comes from the outer electrons (6) and the period from the number of shells (3).",
        "6 electrons in the outer shell → group 6; 3 occupied shells → period 3. The element is sulfur.",
        "There are three numbers in 2.8.6, so three shells are occupied - period 3, not 2.",
        "8 is the number in the middle (full) shell, not the outer shell. Only the outer shell decides the group.",
      ],
      explanation:
        "Group number (groups 1–7) = number of electrons in the outer shell. Period number = number of occupied shells. For 2.8.6: outer shell has 6 electrons → group 6; three shells → period 3. Total electrons = 16, so it is sulfur (Z = 16).",
      hints: [
        "Which number in the configuration is the outer shell?",
        "How many shells are being used?",
      ],
      strategy: "Think about electrons",
    },
    {
      id: "pc-m18",
      topic: "principles",
      section: "principles-periodic",
      difficulty: "core",
      question:
        "Element Y is a dull yellow solid that does not conduct electricity. Its oxide dissolves in water. Which row describes the solution formed and the type of oxide?",
      options: [
        "pH 11, basic oxide",
        "pH 7, neutral oxide",
        "pH 3, acidic oxide",
        "pH 3, basic oxide",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Basic oxides that dissolve give alkaline solutions, but they are the oxides of METALS. Y does not conduct, so it is a non-metal.",
        "A few oxides are neutral, but the typical non-metal oxide that dissolves in water (such as sulfur dioxide) gives an acidic solution.",
        "Y is a non-metal (it does not conduct; it is sulfur), and non-metal oxides are acidic, giving solutions with pH below 7.",
        "pH 3 is acidic, so the oxide cannot be basic. A basic oxide would give pH above 7.",
      ],
      explanation:
        "Non-conductors (except graphite) are non-metals. Non-metal oxides are acidic: for example SO₂(g) + H₂O(l) → H₂SO₃(aq), pH below 7. Metal oxides are basic; soluble ones give alkaline solutions (pH above 7), e.g. Na₂O + H₂O → 2NaOH.",
      hints: [
        "First decide: metal or non-metal? What does 'does not conduct electricity' tell you?",
        "Then recall which type of element forms acidic oxides.",
      ],
      strategy: "Apply it to a new situation",
    },

    // ───────────── CHALLENGE ─────────────
    {
      id: "pc-m19",
      topic: "principles",
      section: "principles-states",
      difficulty: "challenge",
      question:
        "The solubility of ammonium chloride is 66 g per 100 g of water at 80 °C and 37 g per 100 g of water at 20 °C. A saturated solution made with 40 g of water at 80 °C is cooled to 20 °C. What mass of ammonium chloride crystallises?",
      options: ["29.0 g", "26.4 g", "14.8 g", "11.6 g"],
      answerIndex: 3,
      optionFeedback: [
        "This is 66 − 37: the mass that would crystallise from 100 g of water. You forgot to scale to 40 g of water.",
        "This is 66 × 40/100: the mass dissolved at 80 °C, not the mass that comes out on cooling.",
        "This is 37 × 40/100: the mass that is still dissolved at 20 °C.",
        "(66 − 37) × 40/100 = 29 × 0.40 = 11.6 g.",
      ],
      explanation:
        "Per 100 g of water, the mass crystallising = 66 − 37 = 29 g.\nThe solution contains only 40 g of water, so scale: 29 × 40/100 = 11.6 g.\nCheck: at 80 °C, 40 g water holds 26.4 g; at 20 °C it holds 14.8 g; 26.4 − 14.8 = 11.6 g.",
      hints: [
        "Solubility values are per 100 g of water - how much water is actually there?",
        "Find how much stays dissolved at each temperature for 40 g of water.",
        "The crystals are the difference between the two dissolved masses.",
      ],
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-m20",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "challenge",
      question:
        "Three known dyes E, F and G and an unknown mixture X are run on the same chromatogram using the same solvent. X gives spots with Rf values of 0.45 and 0.75, and one spot stays on the baseline. Which conclusion is correct?",
      table: {
        caption: "Rf values of known dyes",
        headers: ["Dye", "E", "F", "G"],
        rows: [["Rf value", "0.20", "0.45", "0.75"]],
      },
      options: [
        "X contains F and G, plus at least one substance insoluble in the solvent",
        "X contains E, F and G, because it gives three spots",
        "X contains F and G only, because the baseline spot is just leftover ink",
        "X is a pure substance, because one of its spots did not move",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Matching Rf values identify F and G. A spot that stays on the baseline is a substance that does not dissolve in this solvent - so X contains at least three substances.",
        "The baseline spot has Rf = 0, not 0.20, so it does not match E. Three spots does not mean three KNOWN dyes.",
        "The baseline spot is a real component of X; it is simply insoluble in this solvent (it might move in a different solvent).",
        "X gives three spots, so it is a mixture. A pure substance gives a single spot.",
      ],
      explanation:
        "Identify substances by matching Rf values measured with the same solvent: 0.45 = F and 0.75 = G. A spot that stays on the baseline belongs to a substance that is insoluble in the solvent - it is part of the mixture but cannot be identified with these data (it could be anything, including more than one substance). A pure substance gives only one spot.",
      hints: [
        "Match each of X's spots against the table.",
        "What is the Rf value of a spot that has not moved?",
        "Why might a substance not move up the paper at all?",
      ],
      strategy: "Read the data carefully",
    },
    {
      id: "pc-m21",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "challenge",
      question:
        "Lithium consists of only two isotopes, ⁶Li and ⁷Li. A sample of lithium has a relative atomic mass of 6.94. What is the percentage abundance of ⁶Li in the sample?",
      options: ["94%", "6.0%", "50%", "10%"],
      answerIndex: 1,
      optionFeedback: [
        "94% is the abundance of ⁷Li, not ⁶Li. Since 6.94 is much nearer 7, ⁶Li must be the minor isotope.",
        "6x + 7(100 − x) = 694 → 700 − x = 694 → x = 6.0%.",
        "A 50 : 50 mixture would give Ar = 6.5, not 6.94.",
        "This comes from rounding Ar to 6.9 before calculating. Never round given data mid-calculation.",
      ],
      explanation:
        "Let the abundance of ⁶Li = x %, so ⁷Li = (100 − x) %.\n6x + 7(100 − x) = 6.94 × 100\n6x + 700 − 7x = 694\n700 − 694 = x, so x = 6.0%\nCheck: (6 × 6 + 7 × 94) ÷ 100 = (36 + 658) ÷ 100 = 6.94 ✔",
      hints: [
        "Call the abundance of ⁶Li x %. What is the abundance of ⁷Li in terms of x?",
        "Write the usual Ar equation with x in it and set it equal to 6.94.",
        "Sense-check: should ⁶Li be the major or minor isotope if Ar is 6.94?",
      ],
      strategy: "Work backwards",
    },
    {
      id: "pc-m22",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "challenge",
      question: "A particle contains 16 protons, 18 neutrons and 18 electrons. Which particle is it?",
      options: ["³⁶Ar", "³⁴S²⁺", "³⁴S²⁻", "³²S²⁻"],
      answerIndex: 2,
      optionFeedback: [
        "Argon has 18 protons. The 18 here is the number of electrons and neutrons; the proton number (16) decides the element.",
        "A 2+ ion has LOST 2 electrons; sulfur with 16 protons and 2+ charge would have 14 electrons.",
        "16 protons = sulfur; mass number = 16 + 18 = 34; 18 electrons is 2 more than protons, so the charge is 2−.",
        "Mass number 32 would mean 32 − 16 = 16 neutrons, not 18.",
      ],
      explanation:
        "Work out three things separately:\n- Element: proton number 16 → sulfur.\n- Mass number: protons + neutrons = 16 + 18 = 34.\n- Charge: protons − electrons = 16 − 18 = −2.\nSo the particle is the ³⁴S²⁻ ion. (It has the same electron configuration as argon, 2.8.8, but it is not argon.)",
      hints: [
        "Which number identifies the element?",
        "Mass number = protons + neutrons.",
        "Charge = protons − electrons. Is that positive or negative here?",
      ],
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-m23",
      topic: "principles",
      section: "principles-periodic",
      difficulty: "challenge",
      question: "Which statement about the element with atomic number 18 is correct?",
      options: [
        "It exists as diatomic molecules, Ar₂, like oxygen and nitrogen",
        "It is in period 4, because its atoms contain 18 electrons",
        "It readily forms Ar⁺ ions because it has a full outer shell",
        "It is in period 3 and is unreactive because its outer shell is full",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Noble gases are monatomic: with a full outer shell, argon atoms have no need to share electrons, so they do not bond to each other.",
        "18 electrons are arranged 2.8.8 - three occupied shells, so period 3. The 4th shell starts at potassium (Z = 19).",
        "A full outer shell is stable, so argon does NOT readily lose (or gain) electrons. It forms no ions in normal chemistry.",
        "Argon is 2.8.8: three shells → period 3; a full outer shell → group 0, unreactive.",
      ],
      explanation:
        "Atomic number 18 is argon, 2.8.8. Three occupied shells put it in period 3; its full outer shell puts it in group 0. Because the outer shell is full (a stable arrangement), argon does not need to lose, gain or share electrons, so it is unreactive and exists as single atoms. That is why it is used to provide an inert atmosphere, e.g. in filament lamps.",
      hints: [
        "Write the electronic configuration for 18 electrons.",
        "How many shells, and is the outer shell full?",
        "What does a full outer shell mean for losing, gaining or sharing electrons?",
      ],
      strategy: "Think about electrons",
    },
    {
      id: "pc-m24",
      topic: "principles",
      section: "principles-states",
      difficulty: "challenge",
      question:
        "The ammonia diffusion experiment is repeated with hydrogen bromide (HBr, Mr 81) in place of hydrogen chloride (HCl, Mr 36.5). A white ring of ammonium bromide forms. Compared with the HCl experiment, where does the ring form?",
      options: [
        "Even closer to the acid end, because HBr particles move more slowly than HCl",
        "Closer to the ammonia end, because heavier HBr particles move faster than HCl",
        "In exactly the same place, because the ammonia end of the tube is unchanged",
        "Closer to the ammonia end, because heavier particles push further along the tube",
      ],
      answerIndex: 0,
      optionFeedback: [
        "HBr (Mr 81) is heavier than HCl (Mr 36.5), so its particles move more slowly; NH₃ covers an even larger fraction of the tube before they meet.",
        "Heavier particles move more slowly at the same temperature, not faster.",
        "The meeting point depends on the speeds of BOTH gases. Changing the acid gas changes its speed.",
        "Particles do not push each other along the tube; each gas spreads by the random movement of its own particles, and heavier ones move more slowly.",
      ],
      explanation:
        "At the same temperature, particles with a higher relative formula mass move more slowly on average. The ring forms where the two gases meet. NH₃ (Mr 17) is now competing with HBr (Mr 81), which diffuses even more slowly than HCl, so the ammonia travels a larger fraction of the tube. The ring forms even closer to the hydrogen bromide end: NH₃(g) + HBr(g) → NH₄Br(s).",
      hints: [
        "Compare the Mr of HBr with HCl. Which moves faster?",
        "The ring forms where the gases meet - which gas now covers more of the tube?",
        "Apply the same rule as for HCl: lower Mr → faster particles.",
      ],
      strategy: "Apply it to a new situation",
    },
  ],
};
