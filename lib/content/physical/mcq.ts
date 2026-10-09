import type { MCQ, QuestionSet } from "../../types";

export const mcq: QuestionSet<MCQ> = {
  id: "mcq-physical",
  title: "Multiple choice · Physical Chemistry",
  subtitle: "Energetics, rates of reaction and equilibria — calculations, graphs and collision theory",
  topic: "physical",
  questions: [
    {
      id: "ph-m01",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "warmup",
      question: "Which observation shows that a reaction in a polystyrene cup is exothermic?",
      options: [
        "The temperature of the surroundings falls",
        "The temperature of the solution rises",
        "The value of ΔH is positive",
        "Heat energy is taken in from the surroundings",
      ],
      answerIndex: 1,
      optionFeedback: [
        "A falling temperature means heat is being taken in from the surroundings — that is endothermic.",
        "An exothermic reaction gives out heat to the surroundings (the solution and cup), so the thermometer reading rises.",
        "A positive ΔH means the chemicals gained energy — that is the sign for an endothermic reaction.",
        "Taking heat in from the surroundings is the definition of endothermic, not exothermic.",
      ],
      explanation:
        "In an exothermic reaction the chemicals lose energy, which is transferred to the surroundings as heat. In calorimetry the 'surroundings' are the water or solution, so its temperature rises. Because the chemicals lose energy, ΔH is negative.",
      hints: ["Think about where the heat goes in an EXothermic reaction — it EXits the chemicals."],
      strategy: "Recall the definition",
    },
    {
      id: "ph-m02",
      topic: "physical",
      section: "physical-rates",
      difficulty: "warmup",
      question:
        "Marble chips react with dilute hydrochloric acid in a conical flask on a balance. Why does the reading on the balance decrease?",
      options: [
        "The marble chips dissolve in the acid",
        "Water evaporates as the mixture warms up",
        "Carbon dioxide gas escapes from the flask",
        "Calcium chloride escapes through the cotton wool",
      ],
      answerIndex: 2,
      optionFeedback: [
        "The chips do get smaller, but the dissolved calcium chloride stays in the flask, so this alone would not change the mass on the balance.",
        "Any evaporation is tiny; the measured loss is the gas product, which is why the method works.",
        "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂: the CO₂ is a gas that leaves the open flask, so the mass of the contents falls.",
        "Calcium chloride is dissolved in the solution — it cannot pass out of the flask as a gas.",
      ],
      explanation:
        "Mass is conserved in a reaction, so the balance reading only falls if something leaves the flask. The only gas made is carbon dioxide, and it escapes through the cotton wool. The mass lost at any time equals the mass of CO₂ produced so far.",
      hints: ["Write the word equation — which product is a gas?"],
      strategy: "Think about particles",
    },
    {
      id: "ph-m03",
      topic: "physical",
      section: "physical-rates",
      difficulty: "warmup",
      question: "In the same experiment, what is the purpose of the cotton wool plug in the neck of the flask?",
      options: [
        "To let gas out but stop acid spray escaping",
        "To stop carbon dioxide gas leaving the flask",
        "To absorb the carbon dioxide gas as it forms",
        "To insulate the flask and keep it at constant temperature",
      ],
      answerIndex: 0,
      optionFeedback: [
        "The plug lets CO₂ escape (so mass is lost) but traps acid droplets/spray, so the only mass lost is carbon dioxide.",
        "If the CO₂ could not leave, the mass would not change and the method would not work at all.",
        "Cotton wool does not absorb CO₂ — and if it did, the mass on the balance would not fall.",
        "A plug in the neck gives almost no insulation; that is not why it is there.",
      ],
      explanation:
        "The method relies on measuring the mass of CO₂ lost. Fizzing throws out tiny droplets of acid; if these escaped they would add to the mass lost and make the results too high. Cotton wool is porous to gas but catches the spray.",
      hints: ["The balance must measure the loss of ONE substance only — what else might fizz out of the flask?"],
      strategy: "Follow the method step by step",
    },
    {
      id: "ph-m04",
      topic: "physical",
      section: "physical-rates",
      difficulty: "warmup",
      question: "Which change would NOT increase the rate of reaction between marble and hydrochloric acid?",
      options: [
        "Using powdered marble instead of chips",
        "Warming the acid before adding the marble",
        "Using more concentrated hydrochloric acid",
        "Using larger marble chips of the same mass",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Powder has a much larger surface area, so collisions are more frequent — this does increase the rate.",
        "A higher temperature increases the rate — particles move faster and more collisions exceed the activation energy.",
        "More acid particles in the same volume means more frequent collisions, so this increases the rate.",
        "Larger chips of the same mass have a SMALLER surface area, so fewer acid particles can collide with the marble per second — the rate decreases.",
      ],
      explanation:
        "Rate increases with surface area, concentration, temperature and catalysts. Bigger lumps of the same mass have less surface exposed to the acid, so there are fewer collisions per second and the rate goes down.",
      hints: ["Think about what happens to the surface area when the pieces get bigger."],
      strategy: "Eliminate wrong options",
    },
    {
      id: "ph-m05",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "warmup",
      question: "Blue hydrated copper(II) sulfate crystals are heated strongly. Which statement is correct?",
      options: [
        "They turn from white to blue and the change is endothermic",
        "They turn from blue to white and the change is exothermic",
        "They turn from blue to white and the change is endothermic",
        "They turn from white to blue and the change is exothermic",
      ],
      answerIndex: 2,
      optionFeedback: [
        "White to blue is what happens when water is ADDED to anhydrous copper(II) sulfate — the reverse reaction.",
        "The colour change is right, but you have to keep heating — heat is taken in, so it is endothermic.",
        "Heating drives off the water of crystallisation: CuSO₄·5H₂O → CuSO₄ + 5H₂O; it needs heat taken in, so it is endothermic.",
        "This is the reverse reaction (adding water to white anhydrous copper(II) sulfate), which does give out heat — but it is not what happens on heating.",
      ],
      explanation:
        "CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(l). Heating removes the water of crystallisation, turning blue crystals into white powder; this direction is endothermic. Adding water reverses it — the powder turns blue and gets hot, because the reverse reaction is exothermic by the same amount.",
      hints: ["Which form is blue — the one with water or the one without? Does heating put energy in or take it out?"],
      strategy: "Recall the definition",
    },
    {
      id: "ph-m06",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "warmup",
      question: "Why is a polystyrene cup with a lid used to measure the temperature change of a neutralisation reaction?",
      options: [
        "Polystyrene does not react with acids",
        "Polystyrene conducts heat to the thermometer",
        "It is cheap and can be thrown away afterwards",
        "It is a good insulator, so less heat is lost",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Glass doesn't react with acids either — so that can't be the reason polystyrene is chosen.",
        "Polystyrene is a poor conductor of heat; that is exactly why it is used.",
        "Cost is not the scientific reason — a mark scheme wants the effect on the measurement.",
        "Polystyrene (and the lid) reduce heat loss to the surroundings, so the measured temperature change is closer to the true value.",
      ],
      explanation:
        "The biggest error in calorimetry is heat loss to the surroundings. Polystyrene is a good thermal insulator and the lid stops heat escaping from the surface, so more of the energy released stays in the solution and the temperature rise is more accurate.",
      hints: ["What is the main source of error in any calorimetry experiment?"],
      strategy: "Follow the method step by step",
    },
    {
      id: "ph-m07",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "core",
      question:
        "Excess zinc powder is added to 25.0 cm³ of copper(II) sulfate solution. The temperature rises from 20.0 °C to 31.5 °C. What is the heat energy change, Q? (c = 4.2 J/g/°C)",
      options: ["1210 J", "3310 J", "2100 J", "48.3 J"],
      answerIndex: 0,
      optionFeedback: [
        "Q = m × c × ΔT = 25.0 × 4.2 × 11.5 = 1207.5 J ≈ 1210 J.",
        "This uses the final temperature (31.5 °C) instead of the temperature CHANGE.",
        "This uses the starting temperature (20.0 °C) instead of the temperature change.",
        "This leaves out the mass of solution — you have multiplied only 4.2 × 11.5.",
      ],
      explanation:
        "Q = m × c × ΔT, where m is the mass of the solution (25.0 cm³ ≈ 25.0 g) — not the mass of zinc.\n- ΔT = 31.5 − 20.0 = 11.5 °C\n- Q = 25.0 × 4.2 × 11.5 = 1207.5 J ≈ 1210 J (1.21 kJ)",
      hints: ["ΔT is a change — subtract.", "m is the mass of the liquid being heated; 1 cm³ of solution has a mass of about 1 g."],
      strategy: "Check the units",
    },
    {
      id: "ph-m08",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "core",
      question:
        "Burning 0.30 g of methanol (Mr = 32) in a spirit burner raises the temperature of 150 g of water by 10.0 °C. What is the molar enthalpy change of combustion of methanol calculated from these results?",
      options: ["+672 kJ/mol", "−672 kJ/mol", "−21.0 kJ/mol", "−672 000 kJ/mol"],
      answerIndex: 1,
      optionFeedback: [
        "The number is right but the sign is wrong: the water got hotter, so the reaction is exothermic and ΔH is negative.",
        "Q = 150 × 4.2 × 10.0 = 6300 J = 6.30 kJ; n = 0.30 ÷ 32 = 0.009375 mol; ΔH = −6.30 ÷ 0.009375 = −672 kJ/mol.",
        "This divides the energy by the MASS of methanol (6.30 ÷ 0.30) instead of the number of moles.",
        "This forgot to convert joules to kilojoules — 672 000 is in J/mol, which is 672 kJ/mol.",
      ],
      explanation:
        "Two steps: find Q in joules, then divide by moles of fuel.\n- Q = 150 × 4.2 × 10.0 = 6300 J = 6.30 kJ\n- n(CH₃OH) = 0.30 ÷ 32 = 0.009375 mol\n- ΔH = −Q ÷ n = −6.30 ÷ 0.009375 = −672 kJ/mol\nThe data-book value is more negative (about −726 kJ/mol) because heat is lost to the surroundings.",
      hints: ["First use Q = mcΔT with the mass of WATER.", "Then divide Q (in kJ) by the moles of methanol burned — and decide on the sign."],
      strategy: "Check the units",
    },
    {
      id: "ph-m09",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "core",
      question: "Which statement about the energy changes when bonds break and form is correct?",
      options: [
        "Bond breaking is exothermic; bond making is endothermic",
        "Both bond breaking and bond making are exothermic",
        "Bond breaking is endothermic; bond making is exothermic",
        "Both bond breaking and bond making are endothermic",
      ],
      answerIndex: 2,
      optionFeedback: [
        "This is the most common mix-up: it feels like 'breaking releases energy', but you must put energy IN to pull atoms apart.",
        "If both released energy, every reaction would be exothermic and no reaction would need activation energy.",
        "Energy is needed to overcome the attraction holding atoms together (endothermic); the same energy is released when that bond forms (exothermic).",
        "Making a bond lets atoms fall into a lower-energy, more stable arrangement, so energy is released, not taken in.",
      ],
      explanation:
        "A covalent bond is an attraction between nuclei and a shared pair of electrons. Pulling the atoms apart needs energy, so breaking bonds is endothermic. Forming a bond releases exactly the same amount of energy, so making bonds is exothermic. The overall ΔH = energy taken in breaking bonds − energy released making bonds.",
      hints: ["Think of two magnets stuck together — do you need to put energy in to pull them apart?", "Whatever is true for breaking, the opposite is true for making."],
      strategy: "Think about particles",
    },
    {
      id: "ph-m10",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "A graph of mass lost against time for marble chips (in excess) and hydrochloric acid starts steep and then the gradient gradually decreases. Why does the gradient decrease?",
      options: [
        "The marble chips are used up, so the reaction stops",
        "The activation energy rises as the reaction proceeds",
        "The particles lose kinetic energy as the mixture cools",
        "The acid is used up, so there are fewer collisions per second",
      ],
      answerIndex: 3,
      optionFeedback: [
        "The chips are in excess, so they are not used up — and 'stops' describes the flat part of the graph, not the decreasing gradient.",
        "Activation energy is fixed for a reaction at a given temperature; it does not change as reactants are used.",
        "This reaction is slightly exothermic — the mixture does not cool down, so this is not the reason.",
        "As acid reacts its concentration falls, so there are fewer acid particles per cm³ and fewer collisions per second — the rate (gradient) falls.",
      ],
      explanation:
        "Gradient = rate. The rate is highest at the start because the acid concentration is highest. As acid particles are used up, collisions with the chips become less frequent, so the gradient decreases. When the acid (the limiting reactant) is all used up the line becomes horizontal.",
      hints: ["Which reactant is NOT in excess?", "Link concentration to the frequency of collisions."],
      strategy: "Read the graph",
    },
    {
      id: "ph-m11",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "Why is dilute sulfuric acid NOT suitable for investigating the rate of reaction with calcium carbonate powder?",
      options: [
        "Insoluble calcium sulfate coats the solid and stops the reaction",
        "Sulfuric acid produces sulfur dioxide gas instead of carbon dioxide",
        "Sulfuric acid does not react with calcium carbonate at all",
        "Sulfuric acid is too strong, so the reaction is too fast to time",
      ],
      answerIndex: 0,
      optionFeedback: [
        "CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂: calcium sulfate is insoluble, so it forms a layer on the solid that stops the acid reaching the carbonate.",
        "Acids react with carbonates to give carbon dioxide whichever acid you use — no sulfur dioxide is formed.",
        "It does start to react (you see fizzing) — the problem is that the reaction stops early.",
        "Dilute sulfuric acid is no 'stronger' than dilute hydrochloric acid in a way that matters here; the problem is the insoluble product.",
      ],
      explanation:
        "Common sulfates are soluble except those of barium, calcium and lead. Calcium sulfate forms an insoluble layer on the surface of the calcium carbonate, so the acid can no longer reach it and the reaction slows and stops before the acid is used up. Using powder doesn't help — each tiny grain gets coated.",
      hints: ["Write the equation and name the salt formed.", "Use the solubility rules — is that salt soluble?"],
      strategy: "Apply it to a new situation",
    },
    {
      id: "ph-m12",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "The marble chip experiment is repeated with the same volume of hydrochloric acid at half the concentration. The chips are still in excess. How does the new curve of mass lost against time compare with the original?",
      options: [
        "Shallower at the start; levels off at the same mass loss",
        "Shallower at the start; levels off at half the mass loss",
        "Same gradient at the start; levels off at half the mass loss",
        "Steeper at the start; levels off at half the mass loss",
      ],
      answerIndex: 1,
      optionFeedback: [
        "The slower start is right, but with half the moles of acid (the limiting reactant) only half as much CO₂ can form — the plateau must be lower.",
        "Lower concentration → less frequent collisions → shallower start; half the moles of the limiting acid → half the CO₂ → plateau at half the height.",
        "The initial rate depends on concentration, so halving it makes the start less steep.",
        "A lower concentration means fewer acid particles per cm³ and fewer collisions per second — the start is shallower, not steeper.",
      ],
      explanation:
        "Two separate effects: the gradient depends on concentration (fewer particles per cm³ → fewer collisions per second → shallower), and the final height depends on the number of moles of the limiting reactant. Same volume at half the concentration means half the moles of HCl, so half the moles (and mass) of CO₂.",
      hints: ["The initial gradient and the final plateau are controlled by different things.", "Which reactant decides how much CO₂ can form in total?"],
      strategy: "Read the graph",
    },
    {
      id: "ph-m13",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question: "Which statement best explains why increasing the temperature increases the rate of a reaction?",
      options: [
        "The activation energy of the reaction is lowered",
        "There are more particles in the same volume",
        "Particles move faster and more collisions have energy ≥ Ea",
        "Particles have enough energy that Ea is no longer needed",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Lowering the activation energy is what a CATALYST does; temperature does not change Ea.",
        "That is the effect of increasing concentration or pressure — heating does not add particles.",
        "Faster particles collide more frequently, and a greater proportion of collisions have energy equal to or greater than the activation energy, so there are more successful collisions per unit time.",
        "Ea still has to be reached; heating just means a greater proportion of particles reach it.",
      ],
      explanation:
        "At a higher temperature particles have more kinetic energy. They move faster, so they collide more frequently, and a greater proportion of collisions have at least the activation energy. Both effects give more successful collisions per unit time — the second effect is the larger one.",
      hints: ["Temperature affects how fast particles move — and something else about their energy.", "One option describes what a catalyst does — rule it out."],
      strategy: "Think about particles",
    },
    {
      id: "ph-m14",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question: "How does manganese(IV) oxide increase the rate of decomposition of hydrogen peroxide?",
      options: [
        "It gives the particles more kinetic energy",
        "It increases the concentration of hydrogen peroxide",
        "It shifts the reaction so more oxygen is made",
        "It gives an alternative pathway with lower Ea",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Only heating increases kinetic energy; a catalyst does not change the temperature.",
        "Adding a solid catalyst does not change the concentration of the solution.",
        "A catalyst does not change how much product forms — the same volume of oxygen is made, just faster.",
        "MnO₂ is a catalyst: it provides an alternative reaction pathway with a lower activation energy, so a greater proportion of collisions are successful. It is not used up.",
      ],
      explanation:
        "2H₂O₂(aq) → 2H₂O(l) + O₂(g). The catalyst offers a different route with a lower activation energy, so more of the collisions have enough energy to react. The MnO₂ can be filtered, dried and reweighed afterwards — its mass is unchanged. The final volume of oxygen is the same; it is just collected faster.",
      hints: ["What does a catalyst do to the 'hump' on a reaction profile?", "Is a catalyst used up? Does it change the amount of product?"],
      strategy: "Recall the definition",
    },
    {
      id: "ph-m15",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question:
        "Oxygen from the decomposition of hydrogen peroxide is collected in a gas syringe. What is the mean rate of reaction during the first 20 s?",
      table: {
        caption: "Volume of oxygen collected",
        headers: ["Time / s", "0", "10", "20", "30", "40"],
        rows: [["Volume / cm³", "0", "22", "38", "48", "52"]],
      },
      options: ["1.9 cm³/s", "1.3 cm³/s", "0.53 cm³/s", "1.6 cm³/s"],
      answerIndex: 0,
      optionFeedback: [
        "Mean rate = volume ÷ time = 38 ÷ 20 = 1.9 cm³/s.",
        "This is the mean rate over the whole 40 s (52 ÷ 40), not the first 20 s.",
        "This is time ÷ volume (20 ÷ 38) — upside down. Rate is the amount of product per unit time.",
        "This is the rate between 10 s and 20 s only ((38 − 22) ÷ 10), not from the start.",
      ],
      explanation:
        "Mean rate = change in volume ÷ time taken. In the first 20 s, 38 cm³ was collected: 38 ÷ 20 = 1.9 cm³/s. Notice the volume collected in each 10 s interval falls (22, 16, 10, 4 cm³) — the rate decreases as the hydrogen peroxide is used up.",
      hints: ["Read the volume at 20 s.", "Rate = amount of product ÷ time — check which way up."],
      strategy: "Read the data carefully",
    },
    {
      id: "ph-m16",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "core",
      question: "Which statement describes a reversible reaction at dynamic equilibrium in a closed system?",
      options: [
        "The reaction has stopped and the concentrations are equal",
        "The forward and backward rates are equal; concentrations are constant",
        "The forward and backward rates are equal; concentrations are equal",
        "The forward reaction is faster, so products keep building up",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Two errors: the reactions have not stopped (it is DYNAMIC), and the concentrations need not be equal.",
        "Both reactions continue at the same rate, so the amount of each substance stays constant.",
        "The rates are equal, but the concentrations of reactants and products are usually NOT equal — they are just constant.",
        "If products were still building up, the system would not yet be at equilibrium.",
      ],
      explanation:
        "'Dynamic' means both reactions are still happening. At equilibrium, the forward rate equals the backward rate, so each substance is made as fast as it is used up and its concentration stays constant. A closed system is needed so nothing escapes.",
      hints: ["What does the word 'dynamic' tell you?", "Constant and equal are not the same thing."],
      strategy: "Recall the definition",
    },
    {
      id: "ph-m17",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "core",
      question:
        "N₂O₄(g) ⇌ 2NO₂(g) ΔH = +58 kJ/mol. N₂O₄ is colourless and NO₂ is brown. A sealed syringe of the equilibrium mixture is placed in hot water. What is seen and why?",
      options: [
        "It becomes paler because equilibrium shifts to the left",
        "No change, because the syringe is a closed system",
        "It becomes darker because equilibrium shifts to the right",
        "It becomes paler because heat favours the exothermic way",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Moving left would happen on COOLING, which favours the exothermic (backward) direction.",
        "A closed system can still shift its equilibrium position when the temperature changes.",
        "The forward reaction is endothermic (ΔH positive), so increasing the temperature shifts equilibrium to the right, making more brown NO₂.",
        "Heating favours the ENDOTHERMIC direction, which uses up the extra heat — here, the forward reaction.",
      ],
      explanation:
        "When temperature is increased, the equilibrium shifts in the endothermic direction to oppose the change. Here ΔH is positive, so the forward reaction is endothermic: more NO₂ forms and the colour darkens. Cooling would shift it left and the gas would go paler.",
      hints: ["Is the forward reaction exothermic or endothermic?", "Raising the temperature favours which direction?"],
      strategy: "Apply it to a new situation",
    },
    {
      id: "ph-m18",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "core",
      question: "Which statement about the iron catalyst in the Haber process is correct?",
      options: [
        "It shifts the equilibrium right to give more ammonia",
        "It speeds up only the forward reaction",
        "It is used up and must be replaced each cycle",
        "It makes equilibrium reached faster; yield unchanged",
      ],
      answerIndex: 3,
      optionFeedback: [
        "A catalyst never changes the position of equilibrium, so it does not change the yield.",
        "A catalyst lowers the activation energy for both directions, so both rates increase equally.",
        "Catalysts are not used up in the reaction.",
        "The catalyst increases the rates of the forward and backward reactions equally, so equilibrium is reached faster but the position (yield) is the same.",
      ],
      explanation:
        "N₂ + 3H₂ ⇌ 2NH₃. The iron catalyst gives an alternative pathway of lower activation energy for both the forward and backward reactions. Both speed up equally, so the equilibrium position does not move — but it is reached much faster, which saves time and money.",
      hints: ["Does a catalyst affect forward and backward reactions differently?", "'Yield' is about the position of equilibrium; 'rate' is about how fast you get there."],
      strategy: "Eliminate wrong options",
    },
    {
      id: "ph-m19",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "challenge",
      question:
        "Use the bond energies to calculate ΔH for: 2H₂(g) + O₂(g) → 2H₂O(g). Bond energies in kJ/mol: H–H 436, O=O 498, O–H 464.",
      options: ["−486 kJ/mol", "+486 kJ/mol", "+442 kJ/mol", "−922 kJ/mol"],
      answerIndex: 0,
      optionFeedback: [
        "Broken: 2(436) + 498 = 1370 kJ; made: 4(464) = 1856 kJ; ΔH = 1370 − 1856 = −486 kJ/mol.",
        "This is bonds made − bonds broken — the subtraction is the wrong way round.",
        "This counts only one O–H bond per water molecule (2 × 464 = 928). Each H₂O has TWO O–H bonds, so 4 are made.",
        "This forgot the '2' in front of H₂ — two H–H bonds are broken, not one.",
      ],
      explanation:
        "Draw it out: 2 H–H and 1 O=O are broken; each H–O–H has two O–H bonds, so 4 O–H bonds are made.\n- Broken = 2(436) + 1(498) = 872 + 498 = 1370 kJ\n- Made = 4(464) = 1856 kJ\n- ΔH = broken − made = 1370 − 1856 = −486 kJ/mol\nMore energy is released forming bonds than is taken in breaking them, so the reaction is exothermic.",
      hints: [
        "Draw displayed formulae and count every bond, including the balancing numbers.",
        "How many O–H bonds are in ONE water molecule? How many water molecules are there?",
        "ΔH = (bonds broken) − (bonds made).",
      ],
      strategy: "Follow the method step by step",
    },
    {
      id: "ph-m20",
      topic: "physical",
      section: "physical-energetics",
      difficulty: "challenge",
      question:
        "A student burns ethanol in a spirit burner to heat water in a copper can and calculates ΔH of combustion. Which error would make the calculated value MORE negative than the true value?",
      options: [
        "Heat was lost from the copper can to the surrounding air",
        "The mass of fuel burned was recorded as smaller than it really was",
        "Some of the ethanol underwent incomplete combustion",
        "The highest temperature was missed because the water was not stirred",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Heat loss makes ΔT too small, so Q is too small and ΔH is LESS negative — the usual error, but the opposite direction.",
        "ΔH = −Q ÷ n. If the recorded mass is too small, n is too small, so dividing by it gives a value that is too large in size — more negative.",
        "Incomplete combustion releases less energy, so ΔT and Q are smaller and ΔH is less negative.",
        "Missing the highest temperature makes ΔT too small, so ΔH comes out less negative.",
      ],
      explanation:
        "Look at ΔH = −Q ÷ n and ask which part each error changes. Heat loss, incomplete combustion and a missed maximum all make Q too SMALL → ΔH less negative. Under-recording the mass of fuel makes n too SMALL → Q ÷ n too BIG → ΔH more negative than the true value.",
      hints: [
        "Write ΔH = −Q ÷ n and think about which quantity each error affects.",
        "Most errors make Q too small — what does that do to ΔH?",
        "What happens to a fraction when its bottom number is too small?",
      ],
      strategy: "Consider the extremes",
    },
    {
      id: "ph-m21",
      topic: "physical",
      section: "physical-rates",
      difficulty: "challenge",
      question:
        "40.0 cm³ of 2.00 mol/dm³ hydrochloric acid reacts with excess marble chips. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. What is the total mass lost from the flask when the reaction finishes? (Mr of CO₂ = 44)",
      options: ["3.52 g", "4.00 g", "1.76 g", "0.88 g"],
      answerIndex: 2,
      optionFeedback: [
        "This forgot the 2 : 1 mole ratio — 0.0800 mol HCl gives only 0.0400 mol CO₂.",
        "This is 0.0400 mol × 100 — the mass of CaCO₃ that reacted, not the mass of gas lost.",
        "n(HCl) = 2.00 × 40.0/1000 = 0.0800 mol; n(CO₂) = 0.0400 mol; mass = 0.0400 × 44 = 1.76 g.",
        "This halved the moles twice — the 2 : 1 ratio should be applied only once.",
      ],
      explanation:
        "The acid is the limiting reactant, so it fixes how much CO₂ forms, and the mass lost equals the mass of CO₂.\n- n(HCl) = 2.00 × 40.0 ÷ 1000 = 0.0800 mol\n- n(CO₂) = 0.0800 ÷ 2 = 0.0400 mol\n- mass = 0.0400 × 44 = 1.76 g\nThis is where the curve would level off.",
      hints: [
        "Which reactant is limiting?",
        "Moles = concentration × volume in dm³.",
        "Use the 2 : 1 ratio of HCl to CO₂, then mass = moles × Mr.",
      ],
      strategy: "Use the mole ratio",
    },
    {
      id: "ph-m22",
      topic: "physical",
      section: "physical-rates",
      difficulty: "challenge",
      question:
        "Marble (in excess) reacts with 50 cm³ of 1.0 mol/dm³ hydrochloric acid. Which change gives a curve of mass lost against time that is steeper at the start but levels off at the SAME final mass loss?",
      options: [
        "Using the same volume of acid at double the concentration",
        "Using double the volume of the same acid",
        "Using half the mass of the same-sized chips (still in excess)",
        "Using the same mass of marble as powder instead of chips",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Steeper start, yes — but double the moles of the limiting acid gives double the CO₂, so the plateau is higher.",
        "The concentration is unchanged so the start is about the same — and double the moles of acid doubles the final mass loss.",
        "Fewer chips means less surface area, so the start is SHALLOWER; the plateau is the same because the acid is still limiting.",
        "Powder has a larger surface area → more frequent collisions → steeper start; the moles of acid (limiting) are unchanged, so the plateau is the same.",
      ],
      explanation:
        "Separate the two features of the curve. The initial gradient depends on rate factors (surface area, concentration, temperature, catalyst). The final plateau depends only on the moles of the limiting reactant — here the acid. Only the powder changes the first without changing the second.",
      hints: [
        "What decides the final height of the curve?",
        "Which options change the number of moles of acid?",
        "Of the remaining options, which one increases the rate?",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "ph-m23",
      topic: "physical",
      section: "physical-rates",
      difficulty: "challenge",
      question:
        "For a reaction, the activation energy is 180 kJ/mol and ΔH = −60 kJ/mol. A catalyst lowers the activation energy of the forward reaction to 110 kJ/mol. What is the activation energy of the BACKWARD reaction when the catalyst is used?",
      options: ["170 kJ/mol", "240 kJ/mol", "50 kJ/mol", "110 kJ/mol"],
      answerIndex: 0,
      optionFeedback: [
        "The products are 60 kJ/mol below the reactants, so from the products to the catalysed peak is 110 + 60 = 170 kJ/mol.",
        "This is the backward activation energy WITHOUT the catalyst (180 + 60). The catalyst lowers the peak for both directions.",
        "This subtracts ΔH the wrong way: the products are LOWER than the reactants, so the climb back up to the peak is longer, not shorter.",
        "The backward reaction starts from the products, which are at a different energy from the reactants, so its activation energy differs.",
      ],
      explanation:
        "Sketch the profile: reactants at 0, catalysed peak at +110, products at −60. The backward reaction climbs from the products (−60) to the same peak (+110), a height of 170 kJ/mol. A catalyst lowers the peak, so it lowers the activation energy of both directions by the same amount (here by 70 kJ/mol: 240 → 170) and leaves ΔH unchanged.",
      hints: [
        "Sketch the reaction profile and label the energy of the reactants as 0.",
        "Where are the products, and where is the top of the catalysed hump?",
        "The backward reaction starts at the products and must climb to the same peak.",
      ],
      strategy: "Work backwards",
    },
    {
      id: "ph-m24",
      topic: "physical",
      section: "physical-equilibria",
      difficulty: "challenge",
      question:
        "The table shows the equilibrium yield of product for a gas-phase reversible reaction. What can you deduce about the forward reaction?",
      table: {
        caption: "Equilibrium yield of product (%)",
        headers: ["Temperature", "100 atm", "200 atm"],
        rows: [
          ["300 °C", "40", "55"],
          ["500 °C", "20", "32"],
        ],
      },
      options: [
        "Endothermic; fewer moles of gas on the right",
        "Exothermic; fewer moles of gas on the right",
        "Exothermic; more moles of gas on the right",
        "Endothermic; more moles of gas on the right",
      ],
      answerIndex: 1,
      optionFeedback: [
        "If the forward reaction were endothermic, raising the temperature would INCREASE the yield — but it falls from 40% to 20%.",
        "Yield falls as temperature rises → forward reaction exothermic; yield rises with pressure → product side has fewer moles of gas.",
        "The temperature deduction is right, but if the right side had more gas moles, raising the pressure would DECREASE the yield.",
        "Both deductions are reversed: the yield falls with temperature and rises with pressure.",
      ],
      explanation:
        "Work backwards from Le Chatelier. Higher temperature favours the endothermic direction; since the yield of product falls, the backward reaction is endothermic and the forward reaction is exothermic. Higher pressure favours the side with fewer moles of gas; since the yield rises, the product side has fewer moles of gas (like the Haber process).",
      hints: [
        "Read along a row (pressure changes) and down a column (temperature changes) separately.",
        "Increasing temperature favours which direction?",
        "Increasing pressure favours the side with fewer or more moles of gas?",
      ],
      strategy: "Work backwards",
    },
    {
      id: "ph-m25",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question: "Two gases react together in a sealed container. The pressure is increased at constant temperature. Why does the rate of reaction increase?",
      options: [
        "The particles gain more kinetic energy, so more collisions have enough energy",
        "The activation energy of the reaction is lowered",
        "There are more particles per unit volume, so collisions are more frequent",
        "The particles become larger, so they are easier to hit",
      ],
      answerIndex: 2,
      optionFeedback: [
        "That is the effect of raising the TEMPERATURE. At constant temperature the particles have the same energy as before.",
        "Only a catalyst lowers the activation energy (by giving an alternative pathway). Pressure does not change it.",
        "Higher pressure squeezes the same particles into a smaller volume — like a higher concentration — so there are more frequent collisions and more successful collisions per unit time.",
        "Particles do not change size when the pressure changes; they are just closer together.",
      ],
      explanation:
        "Increasing the pressure of a gas puts more particles into each unit of volume. The particles therefore collide more frequently, so there are more successful collisions per unit time and the rate increases. The proportion of collisions with energy ≥ activation energy is unchanged — that would need a higher temperature or a catalyst.",
      hints: ["Pressure for gases behaves like which other factor for solutions?", "What happens to the number of particles in each cm³?"],
      strategy: "Think about particles",
    },
    {
      id: "ph-m26",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question: "The reaction profile shows an exothermic reaction. Which arrows show the activation energy and the enthalpy change, ΔH?",
      diagram: `<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reaction profile: reactants level, a hump, and a lower products level, with arrows A from reactants up to the peak, B from reactants down to products, and C from products up to the peak">
<line x1="40" y1="200" x2="340" y2="200" stroke="#334155" stroke-width="2"/>
<line x1="40" y1="200" x2="40" y2="20" stroke="#334155" stroke-width="2"/>
<text x="140" y="222" font-size="12" font-family="sans-serif" fill="#334155">Progress of reaction</text>
<text x="14" y="140" font-size="12" font-family="sans-serif" fill="#334155" transform="rotate(-90 14 140)">Energy</text>
<path d="M50 110 L110 110 C 150 110, 160 40, 190 40 C 220 40, 230 160, 270 160 L330 160" fill="none" stroke="#ea580c" stroke-width="3"/>
<text x="52" y="102" font-size="11" font-family="sans-serif" fill="#334155">reactants</text>
<text x="282" y="178" font-size="11" font-family="sans-serif" fill="#334155">products</text>
<line x1="125" y1="110" x2="125" y2="44" stroke="#2563eb" stroke-width="2"/>
<polygon points="125,40 120,50 130,50" fill="#2563eb"/>
<text x="110" y="78" font-size="13" font-family="sans-serif" font-weight="bold" fill="#2563eb">A</text>
<line x1="85" y1="112" x2="85" y2="156" stroke="#16a34a" stroke-width="2"/>
<polygon points="85,160 80,150 90,150" fill="#16a34a"/>
<line x1="85" y1="160" x2="270" y2="160" stroke="#94a3b8" stroke-dasharray="4 3"/>
<text x="70" y="142" font-size="13" font-family="sans-serif" font-weight="bold" fill="#16a34a">B</text>
<line x1="300" y1="158" x2="300" y2="44" stroke="#9333ea" stroke-width="2"/>
<polygon points="300,40 295,50 305,50" fill="#9333ea"/>
<line x1="125" y1="40" x2="300" y2="40" stroke="#94a3b8" stroke-dasharray="4 3"/>
<text x="308" y="100" font-size="13" font-family="sans-serif" font-weight="bold" fill="#9333ea">C</text>
</svg>`,
      options: [
        "Activation energy = C; ΔH = B",
        "Activation energy = A; ΔH = C",
        "Activation energy = A; ΔH = B",
        "Activation energy = B; ΔH = A",
      ],
      answerIndex: 2,
      optionFeedback: [
        "C is measured from the PRODUCTS to the peak (the activation energy of the reverse reaction). Ea of the forward reaction starts at the reactants.",
        "A is the activation energy, but C is not ΔH — ΔH is the difference between the reactants and products levels.",
        "A runs from the reactants up to the peak (Ea); B runs from the reactants down to the products (ΔH, negative because it is exothermic).",
        "These are swapped: B is the energy difference between reactants and products (ΔH), and A goes up to the top of the hump (Ea).",
      ],
      explanation:
        "On a reaction profile: activation energy = the energy from the reactants level up to the top of the hump (the minimum energy colliding particles need). ΔH = the energy difference from reactants to products; here the products are lower, so energy is given out and ΔH is negative (exothermic). A catalyst would lower the hump (smaller A) but leave B unchanged.",
      hints: ["Both quantities are measured starting from the same level — which one?", "Ea goes to the top of the hump; ΔH goes to the other energy level."],
      strategy: "Read the graph",
    },
    {
      id: "ph-m27",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question: "A student compares copper(II) oxide, manganese(IV) oxide and zinc oxide as catalysts for the decomposition of hydrogen peroxide by timing how long it takes to collect 50 cm³ of oxygen. Which set of variables must she keep the same?",
      options: [
        "The mass of solid only",
        "The mass of solid, and the volume, concentration and temperature of the hydrogen peroxide",
        "The volume of hydrogen peroxide and the type of solid",
        "The time taken and the volume of oxygen collected",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Mass matters, but the volume, concentration and temperature of the hydrogen peroxide also affect the rate, so they must be controlled too.",
        "These are the control variables: with all of them fixed, the only thing that changes is which solid is used.",
        "The type of solid is the INDEPENDENT variable — it is the thing she deliberately changes.",
        "The time taken is the DEPENDENT variable she measures; the 50 cm³ is fixed, but the time cannot be kept the same.",
      ],
      explanation:
        "Independent variable: the type of solid. Dependent variable: time to collect 50 cm³ of O₂ (shorter time = faster rate = better catalyst). Control variables: mass (and particle size) of solid, volume and concentration of H₂O₂, temperature. 2H₂O₂(aq) → 2H₂O(l) + O₂(g). Afterwards the catalyst can be filtered off, dried and weighed to show it is not used up.",
      hints: ["Which variable is she changing on purpose?", "What else could affect how fast oxygen is produced?"],
      strategy: "Eliminate wrong options",
    },
  ],
};
