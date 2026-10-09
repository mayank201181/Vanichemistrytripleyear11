import type { MCQ, QuestionSet } from "../../types";

export const mcq: QuestionSet<MCQ> = {
  id: "mcq-electro",
  title: "Multiple choice · Electrolysis",
  subtitle: "Electrodes, molten and aqueous electrolytes, half-equations and products",
  topic: "electro",
  questions: [
    {
      id: "el-m01",
      topic: "electro",
      section: "electro-principles",
      difficulty: "warmup",
      question: "Which row correctly describes the cathode in electrolysis?",
      options: [
        "Positive electrode; oxidation happens there",
        "Positive electrode; reduction happens there",
        "Negative electrode; reduction happens there",
        "Negative electrode; oxidation happens there",
      ],
      answerIndex: 2,
      optionFeedback: [
        "This describes the anode, not the cathode: the anode is positive and anions are oxidised there.",
        "The cathode is not positive. Positive ions are attracted to the cathode, which means the cathode must be negative.",
        "The cathode is negative, so it attracts positive ions, which gain electrons there — reduction.",
        "The charge is right but the process is not: ions GAIN electrons at the cathode, and gain of electrons is reduction (OIL RIG).",
      ],
      explanation:
        "The cathode is the negative electrode (PANCake: Positive Anode, Negative is Cathode). Cations are attracted to it and gain electrons from it, so reduction always happens at the cathode. Oxidation (loss of electrons) happens at the positive anode.",
      hints: ["Opposite charges attract: which ions travel to the cathode, and do they gain or lose electrons there?"],
      strategy: "Recall the definition",
    },
    {
      id: "el-m02",
      topic: "electro",
      section: "electro-principles",
      difficulty: "warmup",
      question: "Why does solid sodium chloride NOT conduct electricity?",
      options: [
        "Its ions are held in fixed positions and cannot move",
        "It contains no charged particles at all",
        "Its delocalised electrons are held in fixed positions",
        "Its molecules are held together by strong covalent bonds",
      ],
      answerIndex: 0,
      optionFeedback: [
        "In the solid lattice the ions are held in place by strong electrostatic attraction, so they cannot move to carry charge.",
        "Sodium chloride is made entirely of charged particles (Na⁺ and Cl⁻ ions). The problem is that they cannot move, not that they are absent.",
        "Ionic compounds have no delocalised electrons — that idea belongs to metals and graphite. Charge in ionic substances is carried only by moving ions.",
        "Sodium chloride is ionic, not molecular. There are no molecules or covalent bonds in its giant ionic lattice.",
      ],
      explanation:
        "To conduct, a substance needs charged particles that are free to move. Sodium chloride has ions, but in the solid they are locked in a giant ionic lattice. When it melts or dissolves, the ions become free to move and carry the charge — so molten or aqueous sodium chloride conducts and is decomposed.",
      hints: ["Sodium chloride has charged particles. What must charged particles be able to do to carry a current?"],
      strategy: "Think about particles",
    },
    {
      id: "el-m03",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "warmup",
      question:
        "Concentrated sodium chloride solution is electrolysed using inert electrodes. Which test identifies the gas produced at the anode?",
      options: [
        "It relights a glowing splint",
        "It burns with a squeaky pop",
        "It turns limewater milky",
        "It bleaches damp litmus paper",
      ],
      answerIndex: 3,
      optionFeedback: [
        "This is the test for oxygen. Oxygen forms at the anode only when no halide ion is present; here chloride ions are present.",
        "This is the test for hydrogen, which is produced at the cathode (−) in this electrolysis, not the anode.",
        "This is the test for carbon dioxide, which is not produced in the electrolysis of sodium chloride solution.",
        "Chlorine forms at the anode because chloride ions are present; chlorine bleaches damp litmus paper.",
      ],
      explanation:
        "At the anode, a halide ion is discharged in preference to hydroxide: 2Cl⁻ → Cl₂ + 2e⁻. Chlorine is identified because it bleaches damp litmus paper (blue litmus may turn red first, then white). Hydrogen forms at the cathode, and sodium hydroxide is left in solution.",
      hints: ["Chloride ions are attracted to the anode. Which gas do they form, and what is its test?"],
      strategy: "Recall the definition",
    },
    {
      id: "el-m04",
      topic: "electro",
      section: "electro-principles",
      difficulty: "warmup",
      question: "Which of these is a non-electrolyte?",
      options: [
        "Molten potassium bromide",
        "Glucose solution",
        "Dilute sulfuric acid",
        "Copper(II) chloride solution",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Molten potassium bromide contains K⁺ and Br⁻ ions that are free to move, so it is an electrolyte.",
        "Glucose is a covalent (simple molecular) substance; its solution contains molecules, not ions, so it cannot conduct.",
        "Dilute sulfuric acid contains H⁺ and SO₄²⁻ ions free to move, so it conducts and is decomposed — an electrolyte.",
        "Copper(II) chloride solution contains Cu²⁺ and Cl⁻ ions that can move, so it is an electrolyte.",
      ],
      explanation:
        "An electrolyte is a molten or dissolved ionic compound that conducts electricity and is decomposed by it. A non-electrolyte contains no free ions — typically a covalent compound such as glucose, ethanol or molten sulfur. Dissolving glucose separates molecules from each other but does not produce ions.",
      hints: ["Which substance is made of molecules rather than ions?"],
      strategy: "Compare and contrast",
    },
    {
      id: "el-m05",
      topic: "electro",
      section: "electro-principles",
      difficulty: "core",
      question: "Molten potassium iodide is electrolysed using graphite electrodes. What forms at each electrode?",
      options: [
        "Cathode: hydrogen · Anode: iodine",
        "Cathode: iodine · Anode: potassium",
        "Cathode: potassium · Anode: oxygen",
        "Cathode: potassium · Anode: iodine",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Hydrogen would form from an aqueous solution, but this is molten — there is no water, so no H⁺ ions are present.",
        "The electrodes are swapped. Iodide ions are negative and go to the positive anode; potassium ions go to the negative cathode.",
        "Oxygen comes from OH⁻ ions in water. A molten salt has no water, so iodide ions are discharged at the anode.",
        "A molten binary compound gives the metal at the cathode and the non-metal at the anode.",
      ],
      explanation:
        "A molten salt contains only its own ions — here K⁺ and I⁻. K⁺ ions are attracted to the cathode and reduced: K⁺ + e⁻ → K. I⁻ ions are attracted to the anode and oxidised: 2I⁻ → I₂ + 2e⁻. The water-based rules (hydrogen, oxygen) only apply to aqueous solutions.",
      hints: [
        "It is molten, so which ions are present? Is there any water?",
        "Positive ions go to the negative electrode; negative ions go to the positive electrode.",
      ],
      strategy: "Think about particles",
    },
    {
      id: "el-m06",
      topic: "electro",
      section: "electro-principles",
      difficulty: "core",
      question: "Molten sodium bromide is electrolysed. Which half-equation shows the reaction at the anode?",
      options: [
        "Br⁻ + e⁻ → Br",
        "2Br⁻ + 2e⁻ → Br₂",
        "2Br⁻ → Br₂ + 2e⁻",
        "Br₂ + 2e⁻ → 2Br⁻",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Bromine exists as diatomic Br₂ molecules, and bromide ions lose (not gain) an electron at the anode.",
        "The atoms balance but the charges do not: the left side has a total charge of −4 and the right side is 0. Bromide ions lose electrons.",
        "Two bromide ions each lose one electron and the atoms join as Br₂; charge is −2 on both sides.",
        "This is the reverse reaction — bromine being reduced to bromide. At the anode, oxidation happens, not reduction.",
      ],
      explanation:
        "At the anode, negative ions lose electrons (oxidation). Each Br⁻ gives up one electron to become a Br atom, and two atoms join to form Br₂. So 2Br⁻ → Br₂ + 2e⁻. Always check that atoms AND total charge balance: here −2 on the left, (0) + (−2) on the right.",
      hints: [
        "At the anode, do ions gain or lose electrons?",
        "Bromine is diatomic. Check that the total charge is the same on both sides.",
      ],
      strategy: "Balance the equation",
    },
    {
      id: "el-m07",
      topic: "electro",
      section: "electro-principles",
      difficulty: "core",
      question: "Which statement about the electrolysis of molten lead(II) bromide is correct?",
      options: [
        "Lead ions are reduced because they gain electrons",
        "Lead ions are oxidised because they gain electrons",
        "Bromide ions are reduced because they lose electrons",
        "Electrons flow through the molten lead(II) bromide",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Pb²⁺ + 2e⁻ → Pb: lead ions gain electrons at the cathode, and gain of electrons is reduction.",
        "Gain of electrons is reduction, not oxidation (OIL RIG: Reduction Is Gain).",
        "Bromide ions do lose electrons, but loss of electrons is oxidation, not reduction.",
        "In the electrolyte the current is carried by moving ions. Electrons flow only in the external circuit and electrodes.",
      ],
      explanation:
        "OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain. At the cathode, Pb²⁺ + 2e⁻ → Pb (reduction). At the anode, 2Br⁻ → Br₂ + 2e⁻ (oxidation). Inside the molten compound it is the ions that move; electrons travel through the wires from the anode round to the cathode.",
      hints: [
        "Write the half-equation for lead ions turning into lead atoms. Are electrons on the left or the right?",
        "Remember OIL RIG.",
      ],
      strategy: "Think about electrons",
    },
    {
      id: "el-m08",
      topic: "electro",
      section: "electro-principles",
      difficulty: "core",
      question:
        "Aluminium is extracted by electrolysis of aluminium oxide dissolved in molten cryolite. Which half-equation shows the reaction at the cathode?",
      options: [
        "Al³⁺ → Al + 3e⁻",
        "Al³⁺ + 3e⁻ → Al",
        "2O²⁻ → O₂ + 4e⁻",
        "Al + 3e⁻ → Al³⁺",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Electrons are on the wrong side, and the charges don't balance (+3 on the left, −3 on the right). Aluminium ions gain electrons.",
        "Al³⁺ ions are attracted to the negative cathode and each gains three electrons — reduction.",
        "This is a correct half-equation, but it happens at the anode: oxide ions lose electrons there (oxidation).",
        "This would turn aluminium atoms into ions, and the charges don't balance (−3 on the left, +3 on the right).",
      ],
      explanation:
        "The cathode is negative, so the positive Al³⁺ ions go there and are reduced: Al³⁺ + 3e⁻ → Al. Oxide ions go to the anode and are oxidised: 2O²⁻ → O₂ + 4e⁻. The oxygen then reacts with the hot carbon anodes, producing carbon dioxide, so the anodes burn away.",
      hints: [
        "The cathode is negative: which ion is attracted to it?",
        "Al³⁺ has a 3+ charge. How many electrons must it gain to become a neutral atom?",
      ],
      strategy: "Think about electrons",
    },
    {
      id: "el-m09",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "core",
      question: "Potassium bromide solution is electrolysed using inert electrodes. What forms at each electrode?",
      options: [
        "Cathode: potassium · Anode: bromine",
        "Cathode: hydrogen · Anode: oxygen",
        "Cathode: potassium · Anode: oxygen",
        "Cathode: hydrogen · Anode: bromine",
      ],
      answerIndex: 3,
      optionFeedback: [
        "This is what molten potassium bromide gives. In solution, H⁺ from water competes at the cathode, and potassium is more reactive than hydrogen.",
        "The cathode is right, but a halide (Br⁻) is present, so bromine — not oxygen — forms at the anode.",
        "Both are wrong: potassium is more reactive than hydrogen, so hydrogen forms; and the bromide ion beats hydroxide at the anode.",
        "Potassium is more reactive than hydrogen, so H₂ forms at the cathode; bromide is a halide, so Br₂ forms at the anode.",
      ],
      explanation:
        "In aqueous solution, the cathode gives hydrogen unless the metal is less reactive than hydrogen. Potassium is very reactive, so 2H⁺ + 2e⁻ → H₂. At the anode, a halide is discharged in preference to OH⁻: 2Br⁻ → Br₂ + 2e⁻ (the solution near the anode turns orange-brown). K⁺ and OH⁻ remain, forming potassium hydroxide.",
      hints: [
        "It is a solution, so H⁺ and OH⁻ from water are also present.",
        "Compare potassium with hydrogen in the reactivity series. Is bromide a halide?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "el-m10",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "core",
      question: "Copper(II) sulfate solution is electrolysed using graphite electrodes. What forms at each electrode?",
      options: [
        "Cathode: copper · Anode: oxygen",
        "Cathode: hydrogen · Anode: oxygen",
        "Cathode: copper · Anode: sulfur dioxide",
        "Cathode: hydrogen · Anode: sulfur",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Copper is less reactive than hydrogen, so Cu²⁺ is discharged at the cathode; sulfate is not discharged, so OH⁻ gives oxygen at the anode.",
        "Hydrogen forms only when the metal is more reactive than hydrogen. Copper is less reactive, so copper is deposited instead.",
        "Sulfate ions are not discharged in aqueous electrolysis; the hydroxide ions from water are discharged to give oxygen.",
        "Neither is right: copper beats hydrogen at the cathode, and sulfate ions are never broken down into sulfur at the anode.",
      ],
      explanation:
        "Ions present: Cu²⁺, SO₄²⁻, H⁺, OH⁻. Cathode: copper is below hydrogen in the reactivity series, so Cu²⁺ + 2e⁻ → Cu (pink-brown coating). Anode: no halide, so 4OH⁻ → O₂ + 2H₂O + 4e⁻ (bubbles that relight a glowing splint). H⁺ and SO₄²⁻ are left, so the solution becomes sulfuric acid.",
      hints: [
        "List all four ions present, including those from water.",
        "Is copper more or less reactive than hydrogen? Is there a halide ion?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "el-m11",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "core",
      question:
        "During the electrolysis of copper(II) sulfate solution with inert electrodes, the blue colour of the solution slowly fades. Why?",
      options: [
        "Sulfate ions are discharged at the anode",
        "Water is decomposed, so the solution is diluted",
        "Copper(II) ions are removed as copper metal forms",
        "Copper(II) ions are oxidised at the anode",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Sulfate ions are colourless and are not discharged — they stay in solution. Oxygen comes from hydroxide ions.",
        "Losing water would make the solution MORE concentrated, so the blue would deepen, not fade.",
        "The blue colour comes from Cu²⁺ ions; they are reduced to copper at the cathode, so their concentration falls.",
        "Cu²⁺ ions are positive, so they go to the cathode and are reduced, not oxidised at the anode.",
      ],
      explanation:
        "Copper(II) sulfate solution is blue because of Cu²⁺(aq) ions. At the cathode they gain electrons: Cu²⁺ + 2e⁻ → Cu, plating out as copper. As the concentration of Cu²⁺ ions in solution decreases, the blue colour fades. Exam answers need both ideas: Cu²⁺ ions are discharged/removed AND their concentration decreases.",
      hints: [
        "Which ion makes copper(II) sulfate solution blue?",
        "What happens to that ion at the cathode?",
      ],
      strategy: "Think about particles",
    },
    {
      id: "el-m12",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "core",
      question: "Which half-equation shows how oxygen is formed at the anode during the electrolysis of an aqueous solution?",
      options: [
        "2O²⁻ → O₂ + 4e⁻",
        "4OH⁻ → O₂ + 2H₂O + 4e⁻",
        "4OH⁻ + 4e⁻ → O₂ + 2H₂O",
        "2OH⁻ → O₂ + H₂ + 2e⁻",
      ],
      answerIndex: 1,
      optionFeedback: [
        "This is the anode reaction in molten aluminium oxide. Aqueous solutions contain hydroxide ions from water, not free oxide ions.",
        "Four OH⁻ ions each lose an electron to give O₂ and two water molecules; atoms and charge (−4) balance.",
        "Electrons are on the wrong side: at the anode, ions LOSE electrons. The charges also fail to balance (−8 vs 0).",
        "The atoms and charges balance, but hydrogen gas never forms at the anode — the hydrogen from OH⁻ ends up in water molecules.",
      ],
      explanation:
        "In aqueous solution, when no halide is present the hydroxide ions (from water) are discharged at the anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Check: 4 O and 4 H on each side; charge −4 on the left and −4 (from 4e⁻) on the right. Loss of electrons = oxidation.",
      hints: [
        "In solution, the oxygen comes from hydroxide ions.",
        "Count O, H and total charge on each side of each option.",
      ],
      strategy: "Balance the equation",
    },
    {
      id: "el-m13",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "challenge",
      question:
        "Dilute sulfuric acid is electrolysed using inert electrodes. After some time, 30 cm³ of gas has been collected at the cathode. Assuming no gas dissolves, what volume of gas has been collected at the anode at the same temperature and pressure?",
      options: ["60 cm³", "30 cm³", "15 cm³", "7.5 cm³"],
      answerIndex: 2,
      optionFeedback: [
        "This doubles the wrong way: the cathode gas (hydrogen) is the larger volume, so the anode gas (oxygen) must be smaller.",
        "Equal volumes would need equal numbers of moles, but 4 electrons make two H₂ molecules for every one O₂.",
        "4 electrons make 2H₂ at the cathode but only 1O₂ at the anode, so the oxygen volume is half: 30 ÷ 2 = 15 cm³.",
        "This divides by 4, as if each H₂ needed only 1 electron. Each O₂ releases 4 electrons but each H₂ needs 2, so the volume ratio H₂ : O₂ is 2 : 1, not 4 : 1.",
      ],
      explanation:
        "Cathode: 2H⁺ + 2e⁻ → H₂. Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻.\nThe same number of electrons passes through each electrode. Per 4e⁻: 2 mol H₂ and 1 mol O₂.\nEqual moles of gas occupy equal volumes at the same temperature and pressure, so V(O₂) = 30 ÷ 2 = 15 cm³.",
      hints: [
        "Identify the gas at each electrode first.",
        "Write both half-equations and make the number of electrons the same.",
        "Compare the moles of each gas made per 4 electrons, then use volume ∝ moles.",
      ],
      strategy: "Use the mole ratio",
    },
    {
      id: "el-m14",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "challenge",
      question:
        "Silver nitrate solution is electrolysed using platinum electrodes. Which row shows the products and the solution left at the end?",
      options: [
        "Cathode: hydrogen · Anode: oxygen · Left: silver nitrate solution",
        "Cathode: silver · Anode: nitrogen dioxide · Left: water",
        "Cathode: hydrogen · Anode: oxygen · Left: silver hydroxide",
        "Cathode: silver · Anode: oxygen · Left: nitric acid",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Silver is less reactive than hydrogen, so silver — not hydrogen — is deposited at the cathode.",
        "Nitrate ions, like sulfate ions, are not discharged in aqueous electrolysis; hydroxide ions give oxygen instead.",
        "Hydrogen is wrong for the cathode because silver is below hydrogen in the reactivity series.",
        "Ag⁺ is discharged (Ag below H) and OH⁻ gives O₂ (no halide); H⁺ and NO₃⁻ are left — nitric acid.",
      ],
      explanation:
        "Ions present: Ag⁺, NO₃⁻, H⁺, OH⁻. Cathode: silver is less reactive than hydrogen, so Ag⁺ + e⁻ → Ag. Anode: nitrate is not a halide, so 4OH⁻ → O₂ + 2H₂O + 4e⁻. The ions removed are Ag⁺ and OH⁻; the ions left are H⁺ and NO₃⁻, which make the solution nitric acid. This is exactly parallel to copper(II) sulfate solution, which leaves sulfuric acid.",
      hints: [
        "List the four ions in the solution.",
        "Decide which cation and which anion are discharged, using the reactivity series and the halide rule.",
        "The two ions that are NOT discharged stay behind. What compound do they make?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "el-m15",
      topic: "electro",
      section: "electro-principles",
      difficulty: "challenge",
      question:
        "Molten lead(II) bromide is electrolysed: PbBr₂ → Pb + Br₂. 4.14 g of lead is formed at the cathode. What mass of bromine is formed at the anode? (Ar: Pb = 207, Br = 80)",
      options: ["3.20 g", "1.60 g", "4.14 g", "6.40 g"],
      answerIndex: 0,
      optionFeedback: [
        "Moles Pb = 4.14 ÷ 207 = 0.0200 mol; 1 : 1 ratio gives 0.0200 mol Br₂ × 160 = 3.20 g.",
        "This is what you get if you use the Ar of Br (80) instead of the Mr of Br₂ (160).",
        "Equal moles do not mean equal masses: Pb and Br₂ have different molar masses (207 and 160).",
        "This doubles the moles of bromine — the equation shows 1 mol Br₂ per 1 mol Pb (it is 2 mol of Br ATOMS).",
      ],
      explanation:
        "n(Pb) = 4.14 ÷ 207 = 0.0200 mol\nPbBr₂ → Pb + Br₂, so n(Br₂) = 0.0200 mol\nMr(Br₂) = 2 × 80 = 160\nmass Br₂ = 0.0200 × 160 = 3.20 g\nThe same result comes from the half-equations: Pb²⁺ + 2e⁻ → Pb and 2Br⁻ → Br₂ + 2e⁻ both use 2 electrons, so equal moles of Pb and Br₂ are made.",
      hints: [
        "Convert the mass of lead into moles.",
        "Use the equation to find the moles of Br₂.",
        "Bromine is diatomic: what is the Mr of Br₂?",
      ],
      strategy: "Use the mole ratio",
    },
    {
      id: "el-m16",
      topic: "electro",
      section: "electro-solutions",
      difficulty: "challenge",
      question:
        "Four solutions are electrolysed separately using inert electrodes. Which one produces a gas at BOTH electrodes and becomes more alkaline as electrolysis continues?",
      options: [
        "Copper(II) sulfate solution",
        "Concentrated sodium chloride solution",
        "Dilute sulfuric acid",
        "Copper(II) chloride solution",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Copper forms at the cathode (no gas there), and the solution becomes more acidic as sulfuric acid builds up.",
        "H₂ forms at the cathode and Cl₂ at the anode; H⁺ and Cl⁻ are removed, leaving Na⁺ and OH⁻ — sodium hydroxide.",
        "Gases do form at both electrodes (H₂ and O₂), but water is removed, so the acid becomes more concentrated — more acidic, not alkaline.",
        "Copper is deposited at the cathode, so there is a gas only at the anode (chlorine).",
      ],
      explanation:
        "Concentrated sodium chloride solution: cathode 2H⁺ + 2e⁻ → H₂ (sodium is more reactive than hydrogen); anode 2Cl⁻ → Cl₂ + 2e⁻ (halide present). The ions left behind are Na⁺ and OH⁻, so sodium hydroxide accumulates and the pH rises. With copper salts, copper metal forms at the cathode instead of a gas.",
      hints: [
        "Rule out any solution that deposits a metal at the cathode.",
        "For the rest, work out which ions are left behind in the solution.",
        "Ions left as H⁺ make it more acidic; ions left as OH⁻ make it more alkaline.",
      ],
      strategy: "Eliminate wrong options",
    },
  ],
};
