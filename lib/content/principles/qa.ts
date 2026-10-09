import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-principles",
  title: "Written answers · Principles of Chemistry",
  subtitle: "Heating curves, diffusion, solubility, distillation, chromatography, isotopes and the Periodic Table",
  topic: "principles",
  questions: [
    {
      id: "pc-w01",
      topic: "principles",
      section: "principles-states",
      difficulty: "core",
      question:
        "A student heats some crushed ice, starting at −10 °C, at a constant rate. The temperature rises to 0 °C, stays at 0 °C for 3 minutes, and then rises again. Explain why the temperature stays at 0 °C for 3 minutes even though heat is still being supplied.",
      marks: 3,
      hints: [
        "What change of state is happening at 0 °C?",
        "Energy is still going in. What is it being used for, if not to make the particles move faster?",
        "Temperature is linked to the kinetic energy of the particles.",
      ],
      modelAnswer:
        "The ice is melting (changing state from solid to liquid water). The energy supplied is used to overcome the forces of attraction between the water particles, rather than to increase the kinetic energy of the particles, so the temperature does not rise until all the ice has melted.",
      markScheme: [
        {
          point: "The ice is melting / changing state from solid to liquid",
          keywords: ["melt", "changing state", "change of state", "changes state", "solid to liquid", "solid into liquid", "solid into a liquid", "becomes a liquid", "turns into water", "turning into water", "turns into liquid", "turns to liquid"],
          feedback: "Name the process: the ice is melting (a change of state from solid to liquid). The plateau on a heating curve always means a change of state.",
        },
        {
          point: "Energy is used to overcome the forces of attraction between particles",
          keywords: ["overcome+forces", "overcome+attraction", "forces of attraction", "attractive forces", "forces between", "intermolecular", "attraction between", "attractions between", "break+forces", "break+attraction", "break+between", "separate the particles"],
          feedback: "Say where the energy goes: it is used to overcome the forces of attraction between the particles. Avoid 'breaking bonds' - covalent bonds inside the water molecules do not break.",
        },
        {
          point: "So the kinetic energy of the particles does not increase (so temperature stays constant)",
          keywords: ["kinetic", "move faster", "moving faster", "speed up", "not+faster", "instead of", "rather than", "not raise", "not increase", "not to increase", "not used to", "not speed", "dont speed", "not move faster", "dont move faster"],
          feedback: "Link to temperature: the energy is NOT increasing the kinetic energy of the particles, so the temperature cannot rise until melting is complete.",
        },
      ],
      commonError:
        "Writing 'the bonds are breaking' or 'the particles stop moving'. Melting overcomes forces BETWEEN particles, and the particles keep moving throughout.",
      strategy: "Think about particles",
    },
    {
      id: "pc-w02",
      topic: "principles",
      section: "principles-states",
      difficulty: "core",
      question:
        "Cotton wool soaked in concentrated ammonia solution is placed at one end of a long glass tube, and cotton wool soaked in concentrated hydrochloric acid at the other end. Both ends are sealed with bungs. After about 5 minutes a white ring forms inside the tube, nearer the hydrochloric acid end. Explain these observations.",
      marks: 4,
      hints: [
        "How do the two gases get along the tube without anything pushing them?",
        "What is the white solid, and how is it formed?",
        "Work out the Mr of NH₃ and HCl. How does Mr affect how fast particles move?",
      ],
      modelAnswer:
        "Ammonia and hydrogen chloride gas particles diffuse along the tube by random movement. Where they meet they react to form ammonium chloride, a white solid: NH₃(g) + HCl(g) → NH₄Cl(s). Ammonia has a lower Mr (17) than hydrogen chloride (36.5), so ammonia particles move faster and travel further in the same time. The gases therefore meet closer to the hydrochloric acid end.",
      markScheme: [
        {
          point: "The gas particles diffuse / move randomly along the tube",
          keywords: ["diffus", "random", "spread out", "spread through", "particles move", "molecules move", "gases move", "particles travel", "molecules travel"],
          feedback: "Name the process: diffusion - the gases spread along the tube because of the random movement of their particles.",
        },
        {
          point: "Ammonia and hydrogen chloride react to form ammonium chloride (the white solid)",
          keywords: ["ammonium chloride", "nh4cl", "react", "reaction"],
          feedback: "Identify the white ring: where the gases meet they react to form solid ammonium chloride, NH₃ + HCl → NH₄Cl.",
        },
        {
          point: "Ammonia has a lower Mr / lighter particles (17 v 36.5)",
          keywords: ["17", "36.5", "lower mr", "smaller mr", "lower relative", "smaller relative", "lighter", "lower mass", "less mass", "smaller mass", "lower molecular", "smaller molecular", "heavier", "less heavy", "higher mr"],
          feedback: "Compare the masses: NH₃ has Mr 17 and HCl has Mr 36.5, so ammonia particles are lighter.",
        },
        {
          point: "So ammonia particles move faster / travel further in the same time",
          keywords: ["faster", "quicker", "more quickly", "further", "greater speed", "higher speed", "more speed", "more slowly", "slower"],
          feedback: "Finish the chain: lighter particles move faster, so ammonia travels further before meeting HCl - that is why the ring is nearer the acid end.",
        },
      ],
      commonError:
        "Saying 'ammonia is lighter' without linking it to speed, or getting the conclusion backwards (thinking the ring forms nearer the faster gas).",
      strategy: "Think about particles",
    },
    {
      id: "pc-w03",
      topic: "principles",
      section: "principles-states",
      difficulty: "challenge",
      question:
        "The table shows the solubility of potassium nitrate at different temperatures. A student makes a saturated solution of potassium nitrate in 25 g of water at 60 °C. The solution is then cooled to 20 °C. Calculate the mass of potassium nitrate crystals that form.",
      table: {
        caption: "Solubility of potassium nitrate",
        headers: ["Temperature (°C)", "20", "40", "60", "80"],
        rows: [["Solubility (g per 100 g water)", "32", "64", "110", "169"]],
      },
      marks: 3,
      hints: [
        "The table gives values for 100 g of water. How much water is there here?",
        "Either find the difference per 100 g and scale it, or find the mass dissolved in 25 g at each temperature.",
        "25 g is a quarter of 100 g.",
      ],
      modelAnswer:
        "Per 100 g of water, mass crystallising = 110 − 32 = 78 g.\nThe solution has 25 g of water, so scale by 25/100:\n78 × 25/100 = 19.5 g of crystals.\n(Check: 27.5 g dissolved at 60 °C, 8 g dissolved at 20 °C; 27.5 − 8 = 19.5 g.)",
      markScheme: [
        {
          point: "Difference in solubility per 100 g: 110 − 32 = 78 g (OR mass dissolved at 60 °C in 25 g water = 27.5 g)",
          keywords: ["78", "27.5", "19.5"],
          feedback: "Read both solubilities from the table (110 g at 60 °C and 32 g at 20 °C) and find the difference: 78 g per 100 g of water.",
        },
        {
          point: "Scaling to 25 g of water: × 25/100 (OR mass dissolved at 20 °C in 25 g water = 8 g)",
          keywords: ["19.5", "25 100", "0.25", "8", "quarter", "divid+4", "78 4", "110 4", "32 4"],
          feedback: "Solubility is per 100 g of water, but there is only 25 g here, so multiply by 25/100 (divide by 4).",
        },
        {
          point: "Mass of crystals = 19.5 g",
          keywords: ["19.5"],
          feedback: "Final answer: 78 × 25/100 = 19.5 g. Always give the unit (g).",
        },
      ],
      commonError:
        "Giving 78 g - the answer for 100 g of water - and forgetting that only 25 g of water was used.",
      strategy: "Read the data carefully",
    },
    {
      id: "pc-w04",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question:
        "A student uses simple distillation to obtain pure water from copper(II) sulfate solution. A Liebig condenser is used.\n(a) Explain why water must flow continuously through the condenser. (2)\n(b) Explain why this water is passed in at the lower end of the condenser and out at the upper end. (2)",
      marks: 4,
      hints: [
        "(a) What happens to the temperature of the condenser water as hot vapour passes through?",
        "(a) What must happen to the vapour for pure water to drip out?",
        "(b) Think about filling a container from the bottom - what is left at the top if you fill it from the top?",
      ],
      modelAnswer:
        "(a) The flowing water carries heat away and keeps the condenser cold (warm water is constantly replaced by cold water), so that the water vapour condenses back into liquid water.\n(b) Water entering at the bottom fills the condenser jacket completely, with no air gaps, which gives more efficient cooling. If it entered at the top it would run straight out under gravity.",
      markScheme: [
        {
          point: "Keeps the condenser cold / removes heat (warmed water replaced by cold water)",
          keywords: ["cold", "cool", "remove heat", "removes heat", "absorb heat", "absorbs heat", "takes heat", "carry heat", "carries heat", "heat away", "warms up", "warmed up", "heats up", "low temperature"],
          feedback: "The flow keeps the condenser cold: water that has been warmed by the vapour is continually replaced by cold water.",
        },
        {
          point: "So that the (water) vapour/steam condenses (to liquid water)",
          keywords: ["vapour condenses", "steam condenses", "gas condenses", "vapour condense", "steam condense", "condenses back", "condensation", "vapour turns", "steam turns", "turns back into", "back into liquid", "back into water", "into a liquid", "vapour into liquid", "steam into water", "vapour to liquid", "steam to water", "gas to liquid", "condense the vapour", "condense the steam", "otherwise+not condense", "or else+not condense"],
          feedback: "Say why cold matters: the vapour must condense to liquid water to be collected; otherwise steam would escape.",
        },
        {
          point: "So that the condenser fills completely with water / no air gaps",
          keywords: ["fill", "full", "no air", "air gap", "air bubble", "air pocket", "air trapped", "trapped air", "completely", "run straight", "straight out", "gravity", "drain"],
          feedback: "Entering at the bottom means the jacket fills completely with water; entering at the top, water would just run out of the bottom and leave air in the condenser.",
        },
        {
          point: "Giving more efficient cooling",
          keywords: ["efficien", "more cooling", "better cooling", "maximum cooling", "cools better", "cools more", "more effective", "effective", "cooling is better", "larger area", "more surface"],
          feedback: "State the benefit: a completely full jacket gives more efficient cooling, so more of the vapour condenses.",
        },
      ],
      commonError:
        "Writing only 'to cool the vapour' (one idea) without saying the condenser must be kept cold so that the vapour condenses, or saying water enters at the bottom 'because it is colder there'.",
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-w05",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question:
        "A student collects a colourless liquid from the distillation of sea water.\n(a) Describe a physical test to show that the liquid is pure water. Give the expected result. (2)\n(b) A friend suggests testing the liquid with anhydrous copper(II) sulfate instead. Explain why this would not show that the liquid is pure. (1)",
      marks: 3,
      hints: [
        "Pure substances have a fixed, sharp value for which physical properties?",
        "Give the actual number you would expect for pure water.",
        "What would happen if you added salty water to anhydrous copper(II) sulfate?",
      ],
      modelAnswer:
        "(a) Heat the liquid and measure its boiling point with a thermometer. Pure water boils at exactly 100 °C (at atmospheric pressure). (Or measure the freezing point: pure water freezes at exactly 0 °C.)\n(b) Anhydrous copper(II) sulfate only shows that water is present - it would turn from white to blue with any solution containing water, such as salt water, so it cannot show the water is pure.",
      markScheme: [
        {
          point: "Measure the boiling point (or freezing/melting point)",
          keywords: ["boil", "bp", "freez", "melting point", "thermometer", "heat it", "heat the liquid"],
          feedback: "The physical test is to find the boiling point (heat it and measure the temperature with a thermometer) or the freezing point.",
        },
        {
          point: "Boils at exactly 100 °C (or freezes at exactly 0 °C)",
          keywords: ["100", "0 degrees", "zero degrees", "freezes at 0", "melts at 0", "at 0"],
          feedback: "You must give the value: pure water boils at exactly 100 °C (or freezes at 0 °C) at 1 atm. Impurities change these values.",
        },
        {
          point: "Copper(II) sulfate only shows that water is present - impure water/salt solution would also turn it blue",
          keywords: ["water is present", "presence of water", "contains water", "containing water", "only shows", "only tests", "only detects", "only test", "only show", "any water", "impure+blue", "salt water+blue", "salty", "solution+blue", "also turn blue", "also turns blue", "still turn blue", "still turns blue", "even if", "salt+blue", "impurit+blue", "blue anyway"],
          feedback: "The copper(II) sulfate test is a test for water, not for purity: any aqueous solution (e.g. salt water) would also turn it from white to blue.",
        },
      ],
      commonError:
        "Giving a chemical test (anhydrous copper(II) sulfate or cobalt chloride) when a PHYSICAL test is asked for, or saying 'boils at 100 °C' without saying this is how you check it.",
      strategy: "Recall the definition",
    },
    {
      id: "pc-w06",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question:
        "A student uses paper chromatography to analyse a green food colouring. The solvent front moves 8.0 cm from the baseline. A blue spot moves 5.2 cm from the baseline.\n(a) Calculate the Rf value of the blue spot. (2)\n(b) Explain why the baseline is drawn in pencil and not in ink. (1)\n(c) Explain why the level of the solvent must start below the baseline. (1)",
      marks: 4,
      hints: [
        "Rf = distance moved by the spot ÷ distance moved by the solvent.",
        "Rf has no units and is always less than 1.",
        "For (b) and (c): what would happen to ink, or to the spots, if they came into contact with the solvent?",
      ],
      modelAnswer:
        "(a) Rf = distance moved by spot ÷ distance moved by solvent = 5.2 ÷ 8.0 = 0.65\n(b) Pencil (graphite) is insoluble in the solvent, so it stays on the line; ink would dissolve and run up the paper, mixing with the food colouring's spots.\n(c) Otherwise the dyes in the spots would dissolve into the solvent in the beaker (be washed off the paper) instead of moving up the paper.",
      markScheme: [
        {
          point: "Rf = 5.2 ÷ 8.0 (distance moved by spot ÷ distance moved by solvent)",
          keywords: ["0.65", "5.2 8", "5.2 divided by 8", "5.2 over 8", "5.2 out of 8", "distance moved by the spot", "distance travelled by the spot"],
          feedback: "Set up the ratio: Rf = distance moved by spot ÷ distance moved by solvent = 5.2 ÷ 8.0.",
        },
        {
          point: "Rf = 0.65",
          keywords: ["0.65", "0.650"],
          feedback: "5.2 ÷ 8.0 = 0.65 (no units; Rf is always less than 1).",
        },
        {
          point: "Pencil does not dissolve in the solvent (ink would dissolve/run and mix with the spots)",
          keywords: ["pencil+not dissolve", "pencil+insoluble", "graphite+insoluble", "pencil+doesnt dissolve", "pencil+wont dissolve", "pencil+dont dissolve", "ink would dissolve", "ink dissolves", "ink+dissolv", "ink+run", "ink+separate", "ink+move up", "ink+travel", "ink+mix"],
          feedback: "Pencil (graphite) is insoluble in the solvent and stays put; ink would dissolve, run up the paper and confuse the results.",
        },
        {
          point: "Otherwise the spots/dyes would dissolve into the solvent (be washed off the paper)",
          keywords: ["dyes+dissolv", "spots+dissolv", "spot would dissolve", "colour+dissolv", "dissolve into", "dissolve in the solvent", "dissolved into", "washed away", "wash away", "washed off", "wash off", "mix with the solvent", "into the solvent"],
          feedback: "If the solvent covered the baseline, the dyes would dissolve into the solvent in the beaker instead of being carried up the paper.",
        },
      ],
      commonError:
        "Dividing the wrong way round (8.0 ÷ 5.2 = 1.54) - an Rf value can never be bigger than 1. In (b), saying 'pencil won't smudge' instead of 'pencil is insoluble in the solvent'.",
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-w07",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "core",
      question:
        "Neon has three isotopes. The table shows their percentage abundances.\n(a) Calculate the relative atomic mass of neon. Give your answer to 1 decimal place. (3)\n(b) Explain why the three isotopes of neon have the same chemical properties. (1)",
      table: {
        caption: "Isotopes of neon",
        headers: ["Isotope", "²⁰Ne", "²¹Ne", "²²Ne"],
        rows: [["Abundance (%)", "90.5", "0.3", "9.2"]],
      },
      marks: 4,
      hints: [
        "Multiply each mass number by its percentage abundance.",
        "Add the three products together, then divide by 100.",
        "For (b): which particles decide how an atom reacts?",
      ],
      modelAnswer:
        "(a) Ar = (20 × 90.5 + 21 × 0.3 + 22 × 9.2) ÷ 100\n= (1810 + 6.3 + 202.4) ÷ 100\n= 2018.7 ÷ 100 = 20.187\n= 20.2 (1 d.p.)\n(b) They have the same number of electrons, so the same electronic configuration (2.8) - chemical reactions depend on the electrons, not the neutrons.",
      markScheme: [
        {
          point: "Multiply each isotopic mass by its abundance: 1810, 6.3 and 202.4",
          keywords: ["1810", "202.4", "6.3", "18.1", "2.024", "0.063", "20.2", "20.19", "20.187"],
          feedback: "Start by multiplying each mass by its abundance: 20 × 90.5 = 1810, 21 × 0.3 = 6.3, 22 × 9.2 = 202.4.",
        },
        {
          point: "Add and divide by 100: 2018.7 ÷ 100 = 20.187",
          keywords: ["2018.7", "20.187", "20.19", "20.2"],
          feedback: "Add the products (2018.7) and divide by 100 (the total abundance) to get 20.187.",
        },
        {
          point: "Ar = 20.2 (to 1 decimal place)",
          keywords: ["20.2", "20.20"],
          feedback: "Round to 1 decimal place as asked: 20.187 → 20.2.",
        },
        {
          point: "Same number of electrons / same electronic configuration",
          keywords: ["same number of electrons", "same electron", "same electronic", "same outer", "same configuration", "same arrangement", "same number of outer", "identical electron", "2.8"],
          feedback: "Chemical properties depend on electrons. Isotopes have the same number of electrons (same electronic configuration), so they react in the same way.",
        },
      ],
      commonError:
        "Forgetting to divide by 100, or taking a simple mean of 20, 21 and 22 (= 21) instead of a weighted mean.",
      strategy: "Follow the method step by step",
    },
    {
      id: "pc-w08",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "challenge",
      question:
        "Boron has two isotopes, boron-10 and boron-11. The relative atomic mass of boron is 10.8. Calculate the percentage abundance of each isotope.",
      marks: 3,
      hints: [
        "Let the abundance of boron-10 be x %. What is the abundance of boron-11?",
        "Write the usual relative atomic mass equation with x in it, equal to 10.8.",
        "Sense-check: 10.8 is nearer 11, so which isotope must be more common?",
      ],
      modelAnswer:
        "Let the abundance of boron-10 = x %, so boron-11 = (100 − x) %.\n10x + 11(100 − x) = 10.8 × 100 = 1080\n10x + 1100 − 11x = 1080\nx = 1100 − 1080 = 20\nBoron-10 is 20% and boron-11 is 80%.\nCheck: (10 × 20 + 11 × 80) ÷ 100 = (200 + 880) ÷ 100 = 10.8 ✔",
      markScheme: [
        {
          point: "Correct equation: 10x + 11(100 − x) = 1080 (or with fractions: 10x + 11(1 − x) = 10.8)",
          keywords: ["20+80", "1080", "10x", "10 x", "100 x", "1 x", "10y", "10a", "1100"],
          feedback: "Set up an equation: call one abundance x and the other (100 − x), then 10x + 11(100 − x) = 10.8 × 100 = 1080.",
        },
        {
          point: "Boron-10 = 20%",
          keywords: ["boron 10 20", "boron 10 is 20", "boron 10 has 20", "boron 10 abundance 20", "20 percent of boron 10", "20 percent is boron 10", "20 percent are boron 10", "x is 20", "x 20", "1100 1080"],
          feedback: "Solve: 1100 − x = 1080, so x = 20% boron-10.",
        },
        {
          point: "Boron-11 = 80%",
          keywords: ["boron 11 80", "boron 11 is 80", "boron 11 has 80", "boron 11 abundance 80", "80 percent of boron 11", "80 percent is boron 11", "80 percent are boron 11", "100 20", "100 minus 20"],
          feedback: "The two abundances add to 100%, so boron-11 = 100 − 20 = 80%. Check: Ar is nearer 11, so boron-11 should be the major isotope.",
        },
      ],
      commonError:
        "Swapping the answers (boron-10 = 80%). Always sense-check: the relative atomic mass lies nearer to the more abundant isotope.",
      strategy: "Work backwards",
    },
    {
      id: "pc-w09",
      topic: "principles",
      section: "principles-atoms",
      difficulty: "core",
      question:
        "An atom of potassium is represented as ³⁹₁₉K.\n(a) State the number of protons, neutrons and electrons in this atom. (2)\n(b) Give the electronic configuration of potassium. (1)\n(c) Explain, using its electronic configuration, why potassium is placed in group 1 and period 4. (2)",
      marks: 5,
      hints: [
        "The bottom number is the atomic number; the top number is the mass number.",
        "Fill shells with 2, then 8, then 8, then the rest.",
        "Group = outer-shell electrons; period = number of occupied shells.",
      ],
      modelAnswer:
        "(a) 19 protons and 19 electrons; 39 − 19 = 20 neutrons.\n(b) 2.8.8.1\n(c) It has one electron in its outer shell, so it is in group 1. Its electrons occupy four shells, so it is in period 4.",
      markScheme: [
        {
          point: "19 protons and 19 electrons",
          keywords: ["19 protons+19 electrons", "19 electrons+19 protons", "19 protons and electrons", "19 protons and 19 electrons", "protons+electrons+19"],
          feedback: "The atomic number (19) is the number of protons; a neutral atom has the same number of electrons, 19.",
        },
        {
          point: "20 neutrons",
          keywords: ["20 neutrons", "neutrons 20", "20"],
          feedback: "Neutrons = mass number − atomic number = 39 − 19 = 20.",
        },
        {
          point: "Electronic configuration 2.8.8.1",
          keywords: ["2.8.8.1", "2 8 8 1"],
          feedback: "19 electrons fill as 2, 8, 8, then 1 in the fourth shell: 2.8.8.1 (not 2.8.9).",
        },
        {
          point: "One electron in the outer shell, so group 1",
          keywords: ["one electron in", "1 electron in", "one outer electron", "1 outer electron", "outer shell has 1", "outer shell has one", "one electron on", "1 electron on", "single electron", "one valence", "1 valence", "1 electron in its outer", "one electron in its outer"],
          feedback: "The group number equals the number of outer-shell electrons: potassium has one, so it is in group 1.",
        },
        {
          point: "Four occupied shells, so period 4",
          keywords: ["four shells", "4 shells", "four energy levels", "4 energy levels", "four occupied", "4 occupied", "fourth shell", "4th shell", "four electron shells", "4 electron shells", "four orbits", "4 orbits"],
          feedback: "The period number equals the number of occupied shells: 2.8.8.1 uses four shells, so period 4.",
        },
      ],
      commonError:
        "Writing the configuration as 2.8.9 - the third shell holds only 8 electrons for the first 20 elements, so the 19th electron starts the fourth shell.",
      strategy: "Think about electrons",
    },
    {
      id: "pc-w10",
      topic: "principles",
      section: "principles-periodic",
      difficulty: "core",
      question:
        "Element E has the electronic configuration 2.8.6. Element G has the electronic configuration 2.8.8.\n(a) Deduce the group and the period of element E, and name element E. (3)\n(b) The oxide of E dissolves in water. Predict the pH of the solution formed and explain your prediction. (2)\n(c) Explain why element G is unreactive. (1)",
      marks: 6,
      hints: [
        "Group = number of outer electrons; period = number of shells. Add up the electrons to find the atomic number.",
        "Is E a metal or a non-metal? Which type of element forms acidic oxides?",
        "Look at G's outer shell.",
      ],
      modelAnswer:
        "(a) E has 6 electrons in its outer shell, so it is in group 6. It has 3 occupied shells, so it is in period 3. It has 16 electrons, so it is sulfur.\n(b) The solution will be acidic, with a pH below 7 (about pH 3), because E is a non-metal and non-metal oxides are acidic.\n(c) G (argon) has a full outer shell of electrons, so it does not need to gain, lose or share electrons.",
      markScheme: [
        {
          point: "Group 6 (six outer electrons)",
          keywords: ["group 6", "group six", "6 outer", "six outer", "6 electrons in", "six electrons in", "6 electrons on", "six electrons on"],
          feedback: "The outer shell holds 6 electrons, so E is in group 6.",
        },
        {
          point: "Period 3 (three occupied shells)",
          keywords: ["period 3", "period three", "3 shells", "three shells", "3 energy levels", "three energy levels", "third period", "3 occupied", "three occupied"],
          feedback: "2.8.6 uses three shells, so E is in period 3.",
        },
        {
          point: "E is sulfur",
          keywords: ["sulfur"],
          feedback: "2 + 8 + 6 = 16 electrons, so the atomic number is 16: sulfur.",
        },
        {
          point: "Solution is acidic / pH below 7",
          keywords: ["acidic", "acid", "below 7", "less than 7", "lower than 7", "under 7", "ph 1", "ph 2", "ph 3", "ph 4", "ph 5", "ph 6"],
          feedback: "Predict an acidic solution, pH below 7 (sulfur dioxide gives sulfurous acid).",
        },
        {
          point: "Because E is a non-metal (non-metal oxides are acidic)",
          keywords: ["non metal", "nonmetal", "non metallic"],
          feedback: "Give the reason: E is a non-metal, and non-metal oxides are acidic (metal oxides are basic).",
        },
        {
          point: "G has a full outer shell (stable arrangement), so does not need to gain, lose or share electrons",
          keywords: ["full outer", "full shell", "outer shell is full", "outer shell full", "complete outer", "shell is full", "shell is complete", "shells are full", "stable", "8 electrons in its outer", "eight electrons in its outer", "8 outer", "eight outer", "full set"],
          feedback: "G (argon) has a full outer shell of electrons - a stable arrangement - so it has no tendency to lose, gain or share electrons.",
        },
      ],
      commonError:
        "Saying G is unreactive 'because it has 8 electrons' without saying the OUTER SHELL is full, or swapping group and period for E.",
      strategy: "Think about electrons",
    },
  ],
};
