import type { QA, QuestionSet } from "../types";

// The teacher's paper: "Y11 October Holidays Consolidation — Triple Content" (JFB, 49 marks),
// reproduced part by part with mark schemes, model answers and teaching feedback.

const Q1_CONTEXT =
  "Q1. This method is used to produce hydrated zinc nitrate crystals: pour 50 cm³ of dilute nitric acid into a beaker; add a spatula of zinc powder to the acid; add more zinc until it is in excess; then the mixture is separated and crystals are obtained.";

const Q3_CONTEXT =
  "Q3. A student uses a conical flask (with a cotton wool plug) standing on a balance to investigate the rate of reaction between marble chips and dilute hydrochloric acid.\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂";

const Q5_CONTEXT =
  "Q5. A student does titrations to find the volume of dilute nitric acid needed to exactly neutralise 25.0 cm³ of sodium hydroxide solution. Method: step 1 add 25.0 cm³ of sodium hydroxide solution to a conical flask; step 2 add three drops of methyl orange; step 3 fill a burette with the acid; step 4 add acid from the burette until the indicator changes colour; step 5 record the volume of acid added.";

const TITRATION_TABLE = {
  caption: "The student's results (cm³)",
  headers: ["", "Rough", "Titration 1", "Titration 2", "Titration 3", "Titration 4"],
  rows: [
    ["Burette reading at end", "?", "21.80", "22.85", "21.75", "24.10"],
    ["Burette reading at start", "?", "0.50", "0.15", "0.25", "0.10"],
    ["Volume added", "?", "21.30", "22.70", "21.50", "24.00"],
  ],
};

export const paper: QuestionSet<QA> = {
  id: "paper-jfb",
  title: "📄 Teacher's paper · Y11 October Consolidation",
  subtitle: "JFB's Triple Content paper — all 5 questions, 49 marks, marked part by part. Show your working!",
  topic: "mixed",
  questions: [
    // ─────────────────────────────── Q1 ───────────────────────────────
    {
      id: "jfb-q1a",
      label: "Q1(a)",
      topic: "acids",
      section: "acids-salts",
      difficulty: "warmup",
      question: `${Q1_CONTEXT}\n\n(a) State why the mixture is filtered.`,
      marks: 1,
      hints: ["The zinc was added 'until it is in excess'. What is left in the beaker besides the solution?"],
      modelAnswer: "To **remove the excess (unreacted) zinc** from the zinc nitrate solution.",
      markScheme: [
        {
          point: "To remove the excess / unreacted zinc",
          keywords: ["remove+zinc", "remove+excess", "unreacted", "zinc left over", "leftover zinc", "left over zinc", "excess zinc", "get rid of+zinc", "take out+zinc", "extra zinc", "zinc that has not reacted", "zinc that hasnt reacted", "zinc which didnt react"],
          feedback: "The zinc was added **in excess** so that all the acid reacts — so some solid zinc is left over. Filtering **removes the excess (unreacted) zinc**, leaving zinc nitrate solution as the filtrate.",
        },
      ],
      commonError: "Saying 'to get the crystals' or 'to remove impurities' — be specific: it removes the **excess zinc**.",
      strategy: "Follow the method step by step",
    },
    {
      id: "jfb-q1b",
      label: "Q1(b)",
      topic: "acids",
      section: "acids-salts",
      difficulty: "core",
      question: `${Q1_CONTEXT}\n\n(b) The mixture has been filtered. Describe how a pure, dry sample of hydrated zinc nitrate crystals could be obtained from the filtrate.`,
      marks: 4,
      hints: [
        "Four steps: concentrate → crystallise → separate → dry.",
        "Why must you NOT evaporate all the water away for a HYDRATED salt?",
        "How do you get the crystals out of the leftover solution, and how do you dry them without heating strongly?",
      ],
      modelAnswer:
        "- **Heat the filtrate gently to evaporate some of the water**, until it reaches the point of crystallisation (crystals form on a cold glass rod dipped in it) — not to dryness, or the water of crystallisation would be lost.\n- **Leave the solution to cool** so that crystals form.\n- **Filter off the crystals** (and rinse them with a little cold distilled water).\n- **Dry the crystals between sheets of filter paper** (or in a warm place / desiccator).",
      markScheme: [
        {
          point: "Heat / warm to evaporate some of the water (to the point of crystallisation)",
          keywords: ["crystallisation point", "point of crystallisation", "evaporate some", "evaporate part", "partially evaporat", "evaporate most", "heat gently", "warm gently", "gently heat", "concentrat", "reduce the volume", "until crystals form", "crystals start to form", "glass rod", "saturated", "heat+some of the water", "boil off some", "evaporate+half"],
          feedback: "First **heat the filtrate gently to evaporate some of the water** until it is saturated (the crystallisation point — crystals form on a glass rod dipped in and taken out). Don't evaporate to dryness: a hydrated salt would lose its water of crystallisation.",
        },
        {
          point: "Leave to cool / crystallise",
          keywords: ["cool", "leave to crystallis", "leave+crystallis", "allow+crystallis", "let+crystallis", "set aside", "leave it", "overnight", "crystallise slowly", "wait for crystals"],
          feedback: "Then **leave the hot, concentrated solution to cool** — the salt is less soluble when cold, so crystals form.",
        },
        {
          point: "Filter off the crystals",
          keywords: ["filter off", "filter the crystals", "filter them", "filter again", "filter it again", "filter+second time", "filter+cool", "pour off", "decant", "collect+filter", "remove+crystals+filter", "filtration+crystals"],
          feedback: "Separate the crystals from the remaining solution by **filtering them off** (you can rinse them with a little cold distilled water).",
        },
        {
          point: "Dry between filter papers / in a warm place / desiccator",
          keywords: ["dry+paper", "between paper", "paper towel", "pat dry", "blot", "desiccator", "warm oven", "low oven", "warm place", "leave to dry", "dry them", "dry the crystals", "air dry", "dry in", "dry on", "dry+oven", "dry+windowsill"],
          feedback: "Finally **dry the crystals** — pat them **between sheets of filter paper** or leave them in a warm place / desiccator. Don't heat them strongly or they lose water of crystallisation.",
        },
      ],
      commonError: "Writing 'evaporate all the water' or 'heat until dry' — that destroys the hydrated crystals. Heat only to the **point of crystallisation**, then cool.",
      strategy: "Follow the method step by step",
    },
    {
      id: "jfb-q1c1",
      label: "Q1(c)(i)",
      topic: "calc",
      section: "calc-moles",
      difficulty: "core",
      question:
        "Q1(c) This equation represents the formation of hydrated zinc nitrate:\nZn(s) + 2HNO₃(aq) + 6H₂O(l) → Zn(NO₃)₂·6H₂O(aq) + H₂(g)\n\n(i) In another experiment, 9.75 g of zinc is completely reacted with nitric acid. Show that the maximum possible mass of hydrated zinc nitrate crystals that could be formed is approximately 45 g.\n[for Zn(NO₃)₂·6H₂O, Mr = 297; Ar of Zn = 65]",
      marks: 2,
      hints: ["Start with moles of zinc = mass ÷ Ar.", "What is the mole ratio Zn : Zn(NO₃)₂·6H₂O in the equation? Then mass = moles × Mr."],
      modelAnswer: "moles of Zn = 9.75 ÷ 65 = **0.15 mol**\n\nratio Zn : Zn(NO₃)₂·6H₂O = 1 : 1, so 0.15 mol of hydrated zinc nitrate\n\nmass = 0.15 × 297 = **44.55 g** (≈ 45 g)",
      markScheme: [
        {
          point: "Moles of zinc = 9.75 ÷ 65 = 0.15 (mol)",
          keywords: ["0.15", "0.150"],
          feedback: "Moles of zinc = mass ÷ Ar = 9.75 ÷ 65 = **0.15 mol**.",
        },
        {
          point: "Mass = 0.15 × 297 = 44.55 g (1 : 1 ratio)",
          keywords: ["44.55", "44.6", "44.5", "44.55g"],
          feedback: "The ratio is 1 : 1, so 0.15 mol of Zn(NO₃)₂·6H₂O forms: mass = 0.15 × 297 = **44.55 g**, which is approximately 45 g. In a 'show that' question you must write the unrounded value.",
        },
      ],
      commonError: "Just writing '45 g' — in a 'show that' question the answer is given, so the marks are for the working and the unrounded value (44.55 g).",
      strategy: "Use the mole ratio",
    },
    {
      id: "jfb-q1c2",
      label: "Q1(c)(ii)",
      topic: "calc",
      section: "calc-moles",
      difficulty: "core",
      question:
        "Q1(c)(ii) The actual yield of hydrated zinc nitrate crystals is 36.4 g. Use your answer to (c)(i) to calculate the percentage yield of hydrated zinc nitrate crystals.\n% yield = (mass obtained ÷ theoretical mass) × 100",
      marks: 2,
      hints: ["The theoretical mass is your answer to (i).", "Divide actual by theoretical, then × 100."],
      modelAnswer: "% yield = (36.4 ÷ 44.55) × 100 = **81.7%**\n\n(Using 45 g instead gives 80.9% — also accepted.)",
      markScheme: [
        {
          point: "Correct substitution: 36.4 ÷ 44.55 (or ÷ 45) × 100",
          keywords: ["44.55", "44.6", "44.5", "45"],
          feedback: "Substitute: % yield = (36.4 ÷ **44.55**) × 100 — actual ÷ theoretical, never the other way round.",
        },
        {
          point: "Answer = 81.7% (80.9% if 45 g used)",
          keywords: ["81.7", "81.71", "81.70", "82", "80.9", "80.89", "81"],
          feedback: "36.4 ÷ 44.55 × 100 = **81.7%** (80.9% if you used 45 g). A yield above 100% would tell you the division is upside down.",
        },
      ],
      commonError: "Dividing the theoretical mass by the actual mass (giving 122%) — a percentage yield can never be above 100%.",
      strategy: "Check the units",
    },
    // ─────────────────────────────── Q2 ───────────────────────────────
    {
      id: "jfb-q2a",
      label: "Q2(a)",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "warmup",
      figure: "apparatus-q2",
      question:
        "Q2. This question is about apparatus used in the laboratory.\n\n(a) Look at apparatus A and B. For each one, give its name and a unit for the quantity it measures.",
      marks: 2,
      hints: ["A has a scale from 0 to 100 and a plunger — it measures the volume of a gas.", "B has a digital display reading 00.0 — what quantity do you 'weigh'?"],
      modelAnswer: "- A: **gas syringe** — measures volume in **cm³**\n- B: **(top-pan) balance** — measures mass in **g** (grams)",
      markScheme: [
        {
          point: "A: gas syringe AND cm³",
          keywords: ["syringe+cm", "syringe+centimetre", "syringe+ml", "syringe+millilitre", "syringe+dm"],
          feedback: "A is a **gas syringe**; it measures volume of gas in **cm³**. You need both the name and the unit for the mark.",
        },
        {
          point: "B: balance AND g",
          keywords: ["balance+g", "balance+gram", "balance+kg", "scale+g", "scales+gram", "balance+mg"],
          feedback: "B is a **(top-pan / electronic) balance**; it measures mass in **g** (grams).",
        },
      ],
      commonError: "Calling A a 'syringe' with unit 'ml' is fine, but calling it a 'measuring cylinder' or giving the balance unit as 'kg/N' (weight) loses the mark — mass is in g.",
      strategy: "Recall the definition",
    },
    {
      id: "jfb-q2b1",
      label: "Q2(b)(i)",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      figure: "distillation",
      question:
        "Q2(b) The diagram shows apparatus used to obtain pure water from sodium chloride solution by simple distillation.\n\n(i) Explain why it is necessary for water to flow continuously in and out of the apparatus.",
      marks: 2,
      hints: ["The flowing water goes through the outer jacket of the sloping tube. What does it do to that tube?", "What has to happen to the steam inside so that liquid water drips into the conical flask?"],
      modelAnswer: "The cold water keeps the **condenser cool** (it carries away the heat released) **so that the steam / water vapour condenses** back into liquid water, which drips into the conical flask. If the water stopped flowing it would warm up and the vapour would not condense.",
      markScheme: [
        {
          point: "To keep the condenser cold / remove heat",
          keywords: ["cool", "cold", "remove heat", "remove the heat", "take away heat", "takes heat away", "absorb heat", "absorbs the heat", "carry away heat", "heat is removed", "low temperature", "lower the temperature"],
          feedback: "The flowing water **keeps the condenser cold** — it carries away the heat given out by the condensing steam. Still water would warm up.",
        },
        {
          point: "So that the (water) vapour / steam condenses (to liquid)",
          keywords: ["vapour+condens", "steam+condens", "gas+condens", "condenses", "condensation", "condense+liquid", "turn+liquid", "turns back into water", "back into water", "into a liquid", "back into liquid", "vapour+liquid", "steam+liquid", "gas+liquid", "steam+water droplets"],
          feedback: "The point of the cold condenser is that the **steam (water vapour) condenses** into liquid water, which then collects in the conical flask.",
        },
      ],
      commonError: "Saying the water 'cools the salt solution' or 'stops it overheating' — the cooling water is in the condenser, and its job is to make the vapour condense.",
      strategy: "Think about particles",
    },
    {
      id: "jfb-q2b2",
      label: "Q2(b)(ii)",
      topic: "acids",
      section: "acids-tests",
      difficulty: "warmup",
      question: "Q2(b)(ii) Describe a chemical test to show that the sodium chloride solution contains chloride ions.",
      marks: 2,
      hints: ["Halide ions are tested with a solution containing silver ions — acidified first.", "What colour is silver chloride, and is it a solid or a solution?"],
      modelAnswer: "Add a few drops of **dilute nitric acid** then a few drops of **silver nitrate solution**. A **white precipitate** (of silver chloride) forms.",
      markScheme: [
        {
          point: "Add (dilute nitric acid and) silver nitrate solution",
          keywords: ["silver nitrate", "agno3", "silver+nitrate"],
          feedback: "Add **dilute nitric acid, then silver nitrate solution**. (The acid removes carbonate ions that would also give a precipitate.)",
        },
        {
          point: "White precipitate forms",
          keywords: ["white precipitate", "white+precipitate", "white solid", "white+solid"],
          feedback: "Chloride ions give a **white precipitate** of silver chloride (bromide = cream, iodide = yellow). Say 'precipitate', not just 'goes white/cloudy'.",
        },
      ],
      commonError: "Using hydrochloric acid to acidify (it adds chloride ions itself!) or describing a 'white solution' — it's a white **precipitate**.",
      strategy: "Recall the definition",
    },
    {
      id: "jfb-q2b3",
      label: "Q2(b)(iii)",
      topic: "principles",
      section: "principles-mixtures",
      difficulty: "core",
      question: "Q2(b)(iii) Describe a physical test to show that the liquid in the conical flask is pure water.",
      marks: 2,
      hints: ["A physical test measures a property — no reagents.", "Pure substances have a sharp, fixed value of which property? What is that value for water?"],
      modelAnswer: "Measure its **boiling point** (heat it and read the temperature with a thermometer). Pure water **boils at exactly 100 °C** (at normal pressure). (Or: freezes/melts at exactly 0 °C.)",
      markScheme: [
        {
          point: "Measure the boiling point (or freezing/melting point)",
          keywords: ["boiling point", "boil", "freezing point", "freez", "melting point", "melt", "thermometer"],
          feedback: "A physical test for purity is to **measure the boiling point** (or freezing point) with a thermometer.",
        },
        {
          point: "Pure water boils at exactly 100 °C (or freezes at 0 °C)",
          keywords: ["100", "0 degrees", "zero degrees", "0c", "0 c", "100c"],
          feedback: "Pure water **boils at exactly 100 °C** (freezes at 0 °C). An impure sample would boil above 100 °C / over a range.",
        },
      ],
      commonError: "Giving a chemical test (anhydrous copper sulfate turns blue) — that only shows water is **present**, not that it is **pure**, and it isn't a physical test.",
      strategy: "Compare and contrast",
    },
    // ─────────────────────────────── Q3 ───────────────────────────────
    {
      id: "jfb-q3a1",
      label: "Q3(a)(i)",
      topic: "physical",
      section: "physical-rates",
      difficulty: "warmup",
      figure: "marble-flask",
      question: `${Q3_CONTEXT}\n\n(a) During the reaction the reading on the balance goes down.\n(i) State why the mass of the contents of the flask decreases.`,
      marks: 1,
      hints: ["Look at the products in the equation. Which one can leave an open flask?"],
      modelAnswer: "Because **carbon dioxide gas is given off and escapes** from the flask.",
      markScheme: [
        {
          point: "Carbon dioxide (gas) escapes / is given off",
          keywords: ["co2+escape", "carbon dioxide+escape", "gas+escape", "gas+given off", "gas+leaves", "gas+released", "co2+leaves", "co2+released", "co2+given off", "carbon dioxide+given off", "carbon dioxide+released", "carbon dioxide+leaves", "gas+lost", "co2+lost", "carbon dioxide+lost", "gas+out of the flask", "co2+out"],
          feedback: "**Carbon dioxide gas is produced and escapes** into the air, so the mass in the flask goes down.",
        },
      ],
      commonError: "Saying 'the marble chips get used up' — the atoms are still in the flask (as CaCl₂ solution) except for the CO₂, which escapes.",
      strategy: "Think about particles",
    },
    {
      id: "jfb-q3a2",
      label: "Q3(a)(ii)",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      figure: "marble-flask",
      question: `${Q3_CONTEXT}\n\n(a)(ii) State the purpose of the cotton wool.`,
      marks: 1,
      hints: ["The reaction fizzes vigorously. What else could leave the flask apart from the gas — and would that affect the mass reading?"],
      modelAnswer: "It **lets the carbon dioxide out but stops acid spray (droplets of liquid) escaping**, so the only mass lost is the gas.",
      markScheme: [
        {
          point: "Stops acid spray / liquid droplets escaping (but lets gas out)",
          keywords: ["spray", "droplet", "splash", "spit", "acid+escap", "liquid+escap", "stop+acid", "prevent+acid", "keep+acid", "stop+liquid", "prevent+liquid", "keep+liquid", "acid+leaving", "liquid+leaving"],
          feedback: "The cotton wool **stops acid spray (droplets) escaping** while letting the gas out — otherwise the balance would show extra mass loss that isn't CO₂.",
        },
      ],
      commonError: "Saying it 'stops the gas escaping' — the gas MUST escape for the mass to drop; the cotton wool keeps the **liquid/acid spray** in.",
      strategy: "Think like a scientist",
    },
    {
      id: "jfb-q3a3",
      label: "Q3(a)(iii)",
      topic: "physical",
      section: "physical-rates",
      difficulty: "challenge",
      question: `${Q3_CONTEXT}\n\n(a)(iii) Explain why sulfuric acid is not a suitable acid to use in this investigation.`,
      marks: 2,
      hints: [
        "Which salt would sulfuric acid make with calcium carbonate?",
        "Check the solubility rules for calcium salts.",
        "If that salt can't dissolve, where does it end up?",
      ],
      modelAnswer: "Sulfuric acid would form **calcium sulfate, which is insoluble** (only slightly soluble). It forms a **layer that coats the marble chips**, stopping the acid reaching the calcium carbonate, so the reaction slows and **stops** before it should.",
      markScheme: [
        {
          point: "Calcium sulfate is (formed and is) insoluble / only slightly soluble",
          keywords: ["insoluble", "slightly soluble", "sparingly soluble", "not soluble", "not very soluble", "not dissolve", "doesnt dissolve", "dont dissolve", "cannot dissolve", "wont dissolve", "precipitate", "caso4+solid", "calcium sulfate+solid"],
          feedback: "With sulfuric acid the salt formed is **calcium sulfate, which is insoluble** (only slightly soluble).",
        },
        {
          point: "Forms a layer / coats the chips so the acid can't reach them and the reaction stops",
          keywords: ["layer", "coat", "covers", "cover the", "barrier", "protective", "stops the reaction", "reaction stops", "stop+react", "prevent+contact", "cannot reach", "cant reach", "unable to reach", "no longer react", "blocks"],
          feedback: "The insoluble calcium sulfate **forms a layer on the marble chips**, so the acid can't reach the carbonate and the reaction **stops** early.",
        },
      ],
      commonError: "Saying 'sulfuric acid is too strong/dangerous' or 'it doesn't react with marble' — it does react at first; the problem is the insoluble calcium sulfate layer.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "jfb-q3b1",
      label: "Q3(b)(i)",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      figure: "rate-graph",
      question: `${Q3_CONTEXT}\n\n(b) The graph shows the student's results.\n(i) In the investigation the marble chips are in excess. Explain the shape of the graph.`,
      marks: 4,
      hints: [
        "Describe the graph in three parts: start, middle, end — then explain each with particles.",
        "Which reactant is used up, given that the chips are in excess? What happens to its concentration?",
        "Link the gradient to how often particles collide.",
      ],
      modelAnswer:
        "- At the start the curve is **steepest — the rate is fastest** because the **concentration of acid is highest**, so there are the most frequent collisions.\n- As the reaction goes on the acid is **used up, so its concentration decreases**…\n- …so there are **fewer collisions per second** and the gradient decreases (the rate slows down).\n- The graph **levels off** (at 0.55 g) when **all the acid has been used up** — the reaction has stopped (the acid is the limiting reactant because the chips are in excess).",
      markScheme: [
        {
          point: "Steep at the start / fastest rate at the start (acid concentration highest)",
          keywords: ["steep", "fastest at the start", "fast at first", "fast at the start", "quick at first", "quickly at first", "rate is high", "rate highest", "highest rate", "fastest+start", "fastest+beginning", "most particles", "highest concentration", "concentration+highest"],
          feedback: "Start with the beginning: the curve is **steepest at the start** because the acid concentration is highest, so the rate is fastest.",
        },
        {
          point: "Acid is used up / concentration of acid decreases",
          keywords: ["used up", "acid+decreas", "concentration+decreas", "concentration+lower", "concentration+falls", "concentration+drops", "less acid", "fewer acid particles", "fewer particles of acid", "acid+less", "acid+react away"],
          feedback: "Explain the curve flattening: as the reaction proceeds the **acid is used up, so its concentration decreases**.",
        },
        {
          point: "Fewer collisions per unit time, so rate / gradient decreases",
          keywords: ["fewer collisions", "less collisions", "fewer+collision", "less frequent", "collisions+less", "collision+decrease", "collide less", "fewer successful", "less often"],
          feedback: "Use collision theory: with fewer acid particles there are **fewer collisions per second**, so the rate (gradient) decreases.",
        },
        {
          point: "Levels off when all the acid has reacted / reaction stops (acid is limiting)",
          keywords: ["levels off", "level off", "flattens", "flat", "horizontal", "plateau", "reaction stops", "stops reacting", "reaction+finish", "reaction+over", "stays the same", "constant", "all+acid+used", "acid+all used", "runs out", "no more acid", "limiting"],
          feedback: "End with the plateau: the graph **levels off when all the acid has been used up** — the acid is the limiting reactant because the chips are in excess.",
        },
      ],
      commonError: "Saying the graph levels off 'because the marble chips run out' — the chips are in EXCESS; it's the **acid** that runs out. Also describing only ('it goes up then flattens') without explaining.",
      strategy: "Read the graph",
    },
    {
      id: "jfb-q3b2",
      label: "Q3(b)(ii)",
      topic: "physical",
      section: "physical-rates",
      difficulty: "challenge",
      figure: "rate-graph",
      question:
        "Q3(b)(ii) The student repeats the experiment using the same volume of hydrochloric acid but of half the concentration of the original acid. All other conditions are kept the same.\nIn the exam you draw the new curve on the grid. Here, describe how the new curve compares with the original one: its gradient at the start, and the value where it levels off.",
      marks: 2,
      hints: [
        "Fewer acid particles per cm³ → collisions are…?",
        "Same volume at half the concentration → how many moles of acid compared with before?",
        "The acid is the limiting reactant — so the total amount of CO₂ is…?",
      ],
      modelAnswer: "The new curve is **less steep (shallower) at the start**, because the reaction is slower. It **levels off at half the height — about 0.275 g (≈0.28 g)** — because half the moles of acid make half as much carbon dioxide.",
      markScheme: [
        {
          point: "Less steep / shallower initial gradient (slower)",
          keywords: ["less steep", "shallower", "slower", "lower gradient", "smaller gradient", "rate+lower", "not as steep", "gentler", "less sharp", "takes longer"],
          feedback: "Half the concentration means fewer collisions per second, so the new curve is **less steep at the start**.",
        },
        {
          point: "Levels off at half the final value (≈0.275 g)",
          keywords: ["0.275", "0.28", "0.27", "0.3", "0.25", "0.26", "0.29", "halfway", "halved", "half as much", "half the height", "half the final", "half the amount", "half the total", "half of 0.55", "half of the original"],
          feedback: "Same volume at half the concentration = **half the moles of acid**, and the acid is limiting, so only half as much CO₂ forms: it levels off at **≈0.275 g**.",
        },
      ],
      commonError: "Drawing a slower curve that still levels off at 0.55 g — that would only be right if the amount of acid were unchanged (e.g. a temperature or surface-area change).",
      strategy: "Consider the extremes",
    },
    {
      id: "jfb-q3c",
      label: "Q3(c)",
      topic: "physical",
      section: "physical-rates",
      difficulty: "core",
      question: "Q3(c) Explain, using particle collision theory, how increasing the temperature affects the rate of a reaction.",
      marks: 4,
      hints: [
        "There are two separate effects of heating — one about how OFTEN particles collide, one about how HARD.",
        "Use the words 'kinetic energy', 'frequency', 'activation energy' and 'successful collisions per second'.",
      ],
      modelAnswer:
        "Increasing the temperature **increases the rate**.\n- The particles gain **kinetic energy and move faster**…\n- …so they **collide more frequently** (more collisions per second).\n- Also a **greater proportion of particles have energy equal to or greater than the activation energy**…\n- …so there are **more successful collisions per unit time**.",
      markScheme: [
        {
          point: "Particles have more (kinetic) energy / move faster",
          keywords: ["more energy", "kinetic energy", "move faster", "moving faster", "faster", "more quickly", "speed up", "more kinetic"],
          feedback: "Start with the particles: at a higher temperature they **gain kinetic energy and move faster**.",
        },
        {
          point: "Collide more frequently / more collisions per second",
          keywords: ["more frequent", "frequently", "frequency", "more often", "collisions per second", "collide more", "more collisions"],
          feedback: "Faster particles **collide more frequently** — say 'more collisions per second', not just 'more collisions'.",
        },
        {
          point: "More particles have energy ≥ activation energy",
          keywords: ["activation energy", "activation", "minimum energy", "enough energy", "sufficient energy", "energy needed", "energy required"],
          feedback: "The bigger effect: a **greater proportion of particles have energy equal to or above the activation energy**.",
        },
        {
          point: "So more successful collisions per unit time",
          keywords: ["successful", "effective collisions", "collisions+result in", "fruitful"],
          feedback: "Finish the chain: so there are **more successful collisions per unit time**, and the rate increases.",
        },
      ],
      commonError: "Writing only 'particles move faster so there are more collisions' — that misses the activation-energy point and the 'per second / successful' wording, capping you at 1–2 marks.",
      strategy: "Think about particles",
    },
    // ─────────────────────────────── Q4 ───────────────────────────────
    {
      id: "jfb-q4",
      label: "Q4",
      topic: "bonding",
      section: "bonding-metallic",
      difficulty: "challenge",
      figure: "copper-lattice",
      question: "Q4. The diagram represents the structure of copper metal.\nExplain three properties of copper that make it a suitable metal to use in electrical wiring.",
      marks: 5,
      hints: [
        "Property 1 is obvious for wiring — explain it with the particles in the diagram.",
        "Property 2: wires are made by pulling metal out thin. What lets the structure change shape without breaking?",
        "Property 3: wires get warm and must last for years — think melting point or reactivity, with a reason.",
      ],
      modelAnswer:
        "- Copper is a **good conductor of electricity** because it has **delocalised electrons that are free to move** through the structure and carry the charge.\n- Copper is **ductile/malleable** (can be drawn into wires and bent) because the **layers of positive ions can slide over each other** without the metallic bonding breaking.\n- Copper has a **high melting point** because there is **strong electrostatic attraction** between the positive ions and the delocalised electrons — so the wire won't melt when it warms up. (Also: it is **unreactive**, so it does not corrode.)",
      markScheme: [
        {
          point: "Good conductor of electricity",
          keywords: ["conduct", "conductor", "conducts electricity", "conductive", "low resistance"],
          feedback: "The key property for wiring: copper is a **good conductor of electricity**.",
        },
        {
          point: "Delocalised electrons are free to move (and carry charge)",
          keywords: ["delocalised", "free electrons", "sea of electrons", "electrons+move", "electrons+free", "electrons+flow", "electrons+carry", "mobile electrons", "electrons+charge"],
          feedback: "Explain conduction: copper has **delocalised electrons that are free to move** through the structure and carry the charge.",
        },
        {
          point: "Ductile / malleable — can be drawn into wires or bent",
          keywords: ["ductile", "malleable", "drawn into wire", "drawn out", "stretched", "pulled into", "bend", "bent", "bendy", "flexible", "shaped"],
          feedback: "Copper is **ductile** (can be drawn into wires) and malleable (bends without snapping).",
        },
        {
          point: "Layers of (positive) ions can slide over each other",
          keywords: ["layers+slide", "slide", "sliding", "rows+slide", "layers+move", "sheets+slide", "ions+slide", "atoms+slide", "layers+past"],
          feedback: "Explain ductility: the **layers of positive ions can slide over each other** while the metallic bonding holds.",
        },
        {
          point: "Third property with reason: high melting point (strong attraction between ions and delocalised electrons) OR unreactive / does not corrode",
          keywords: ["high melting point", "melting point", "strong+attraction", "electrostatic", "strong bonds", "strong metallic", "unreactiv", "low reactivity", "not very reactive", "not corrode", "doesnt corrode", "wont corrode", "resist corrosion", "corrosion resist", "not react", "does not react", "doesnt react", "doesnt rust", "not rust", "lasts a long time"],
          feedback: "A third property: a **high melting point** (strong electrostatic attraction between the positive ions and delocalised electrons) — or copper is **unreactive so it does not corrode**.",
        },
      ],
      commonError: "Listing properties without explaining them with the structure ('it conducts because it's a metal'), or saying 'ions move' / 'protons move' — it is the **delocalised electrons** that move.",
      strategy: "Think about electrons",
    },
    // ─────────────────────────────── Q5 ───────────────────────────────
    {
      id: "jfb-q5a1",
      label: "Q5(a)(i)",
      topic: "acids",
      section: "acids-titration",
      difficulty: "warmup",
      question: `${Q5_CONTEXT}\n\n(a)(i) Give the name of the apparatus that the student should use to measure the volume of sodium hydroxide solution in step 1.`,
      marks: 1,
      hints: ["You need a fixed, very accurate volume of exactly 25.0 cm³ transferred into the flask."],
      modelAnswer: "A (25.0 cm³ volumetric) **pipette** (with a pipette filler).",
      markScheme: [
        {
          point: "Pipette",
          keywords: ["pipette", "volumetric pipette", "pipet"],
          feedback: "Use a **pipette** (volumetric pipette, with a filler) — it delivers exactly 25.0 cm³. A measuring cylinder is not accurate enough.",
        },
      ],
      commonError: "Writing 'measuring cylinder' (not accurate enough to 0.1 cm³) or 'burette' (that holds the acid).",
      strategy: "Recall the definition",
    },
    {
      id: "jfb-q5a2",
      label: "Q5(a)(ii)",
      topic: "acids",
      section: "acids-titration",
      difficulty: "warmup",
      question: `${Q5_CONTEXT}\n\n(a)(ii) Give the colour change seen in step 4.`,
      marks: 1,
      hints: ["The flask starts alkaline. What colour is methyl orange in alkali, and what colour at the end point?"],
      modelAnswer: "**Yellow to orange** (methyl orange is yellow in the alkali and turns orange at the end point; red if too much acid is added).",
      markScheme: [
        {
          point: "Yellow to orange (allow yellow to red)",
          keywords: ["yellow to orange", "yellow to red", "yellow into orange", "yellow yields orange", "yellow yields red", "from yellow", "yellow to pink", "yellow and turns orange", "yellow then orange", "yellow then red"],
          feedback: "Methyl orange is **yellow in alkali** and **red in acid**; at the end point it turns **orange**. Acid is added to alkali, so: **yellow → orange**.",
        },
      ],
      commonError: "Giving the change the wrong way round (orange/red to yellow) — the flask starts alkaline, so it starts **yellow**.",
      strategy: "Recall the definition",
    },
    {
      id: "jfb-q5a3",
      label: "Q5(a)(iii)",
      topic: "acids",
      section: "acids-titration",
      difficulty: "core",
      question: `${Q5_CONTEXT}\n\n(a)(iii) Give a reason why the student does not use universal indicator in this titration.`,
      marks: 1,
      hints: ["A titration needs one exact drop where the colour changes. How does universal indicator change as pH changes?"],
      modelAnswer: "Universal indicator changes colour **gradually** through many colours, so there is **no sharp (sudden) end point** — you can't tell exactly when neutralisation happens.",
      markScheme: [
        {
          point: "Gradual colour change / many colours / no sharp end point",
          keywords: ["gradual", "no sharp", "not sharp", "not sudden", "no sudden", "no clear", "not clear", "unclear", "many colours", "range of colours", "lots of colours", "several colours", "different colours", "too many colours", "hard to see", "difficult to see", "hard to tell", "difficult to tell", "slowly change", "changes slowly", "no distinct"],
          feedback: "Universal indicator gives a **gradual** change through many colours, so there's **no sharp end point**. Titrations need an indicator with one sudden colour change.",
        },
      ],
      commonError: "Saying 'universal indicator is not accurate' or 'it doesn't work with acids' — the real reason is the **gradual colour change / no sharp end point**.",
      strategy: "Compare and contrast",
    },
    {
      id: "jfb-q5b1",
      label: "Q5(b)(i)",
      topic: "acids",
      section: "acids-titration",
      difficulty: "core",
      figure: "burette-rough",
      table: TITRATION_TABLE,
      question:
        "Q5(b) The student completes a rough titration and four accurate titrations. The diagram shows the burette readings from the rough titration.\n\n(i) Complete the table by adding the results from the rough titration: the start reading, the end reading and the volume added. Record the volumes to the nearest 0.05 cm³.",
      marks: 2,
      hints: [
        "Burettes read DOWNWARDS — 0.00 at the top. Read the bottom of the meniscus.",
        "Each small division is 0.1 cm³; to the nearest 0.05 means you can say 'halfway between two marks'.",
        "Volume added = end reading − start reading.",
      ],
      modelAnswer: "Start reading = **2.15 cm³**; end reading = **23.80 cm³**; volume added = 23.80 − 2.15 = **21.65 cm³**.",
      markScheme: [
        {
          point: "Both readings correct: start 2.15 and end 23.80",
          keywords: ["2.15+23.8"],
          feedback: "Read the bottom of the meniscus: the start is halfway between 2.1 and 2.2 → **2.15**; the end is on the 23.8 line → **23.80** (write 2 d.p.).",
        },
        {
          point: "Volume added = 21.65 (allow ecf: end − start)",
          keywords: ["21.65"],
          feedback: "Volume added = end − start = 23.80 − 2.15 = **21.65 cm³**.",
        },
      ],
      commonError: "Reading the burette upwards (e.g. 2.85 instead of 2.15) or writing 23.8 and 2.2 instead of recording to 2 d.p. / the nearest 0.05 cm³.",
      strategy: "Read the data carefully",
    },
    {
      id: "jfb-q5b2",
      label: "Q5(b)(ii)",
      topic: "acids",
      section: "acids-titration",
      difficulty: "core",
      table: TITRATION_TABLE,
      question:
        "Q5(b)(ii) Concordant results are results within 0.20 cm³ of each other. Use the concordant results from the table to calculate the mean volume of acid added. Show your working.",
      marks: 3,
      hints: [
        "Never include the rough titration in the mean.",
        "Which TWO accurate titres are within 0.20 cm³ of each other? Check every pair.",
        "Mean = (sum of concordant titres) ÷ (how many there are). Give the answer to 2 d.p.",
      ],
      modelAnswer: "Concordant titres: **titration 1 (21.30) and titration 3 (21.50)** — they differ by 0.20 cm³. (Titrations 2 and 4 are not concordant; the rough is never used.)\n\nmean = (21.30 + 21.50) ÷ 2 = 42.80 ÷ 2 = **21.40 cm³**",
      markScheme: [
        {
          point: "Selects titrations 1 and 3 only (21.30 and 21.50)",
          keywords: ["1 and 3", "21.3+21.5", "one and three"],
          feedback: "Check each pair: 21.30 and 21.50 differ by exactly 0.20 → **titrations 1 and 3** are concordant. 22.70 and 24.00 are too far off, and the rough is never used.",
        },
        {
          point: "Correct method: (21.30 + 21.50) ÷ 2",
          keywords: ["42.8", "42.80", "21.5 2", "21.50 2", "divide", "divided", "over 2", "average of", "mean of", "halve"],
          feedback: "Add the concordant titres and divide by how many there are: (21.30 + 21.50) ÷ 2 = 42.80 ÷ 2.",
        },
        {
          point: "Mean = 21.40 cm³",
          keywords: ["21.4", "21.40"],
          feedback: "Mean titre = **21.40 cm³** (record to 2 d.p. like the readings).",
        },
      ],
      commonError: "Averaging all four titres (22.38 cm³) or including the rough titration — only concordant titres go into the mean.",
      strategy: "Read the data carefully",
    },
    {
      id: "jfb-q5c",
      label: "Q5(c)",
      topic: "acids",
      section: "acids-salts",
      difficulty: "challenge",
      question:
        "Q5(c) This is the equation for the reaction between dilute nitric acid and sodium hydroxide solution:\nHNO₃(aq) + NaOH(aq) → NaNO₃(aq) + H₂O(l)\nAfter the titration, the student knows the volume of acid needed to neutralise 25.0 cm³ of the sodium hydroxide solution. Sodium nitrate decomposes at high temperatures.\nDescribe how the student could obtain pure, dry crystals of sodium nitrate from dilute nitric acid and sodium hydroxide solution.",
      marks: 5,
      hints: [
        "The solution from the titration contains methyl orange — that would contaminate the crystals. How do you make a pure neutral solution?",
        "Use the exact volumes you found (21.40 cm³ acid + 25.0 cm³ alkali).",
        "Sodium nitrate decomposes when hot — so how far should you heat the solution?",
      ],
      modelAnswer:
        "- **Repeat the titration using the same volumes** — 25.0 cm³ sodium hydroxide and exactly 21.40 cm³ (the mean titre) of nitric acid…\n- …but **without the indicator** (or remove the indicator by adding charcoal and filtering).\n- **Heat the solution gently to evaporate some of the water**, to the point of crystallisation — not to dryness, because sodium nitrate decomposes at high temperatures.\n- **Leave the solution to cool** so crystals form.\n- **Filter off the crystals and dry them** between filter papers (or in a warm, not hot, oven).",
      markScheme: [
        {
          point: "Mix the same volumes again (25.0 cm³ alkali + the mean titre of acid)",
          keywords: ["same volume", "same volumes", "same amount", "same amounts", "21.4", "exact volume", "exact amount", "measured volume", "repeat+titration", "repeat the experiment", "titre volume", "mean titre", "correct volume", "volume found"],
          feedback: "Mix **exactly the same volumes again** — 25.0 cm³ of NaOH with the mean titre (21.40 cm³) of nitric acid — so the solution is exactly neutral.",
        },
        {
          point: "Without the indicator (or remove it with charcoal)",
          keywords: ["without+indicator", "no indicator", "without the indicator", "charcoal", "remove+indicator", "leave out+indicator", "dont add+indicator", "do not add+indicator", "not add+indicator", "omit+indicator", "indicator free"],
          feedback: "Leave out the **indicator** this time (or remove it by adding charcoal and filtering) — otherwise it contaminates the crystals.",
        },
        {
          point: "Heat gently to evaporate some water / to the crystallisation point (not to dryness)",
          keywords: ["crystallisation point", "point of crystallisation", "evaporate some", "evaporate part", "partially evaporat", "heat gently", "warm gently", "gently heat", "gently warm", "concentrat", "reduce the volume", "until crystals form", "crystals start to form", "glass rod", "not to dryness", "not until dry", "saturated", "water bath", "evaporate+half", "heat+some of the water", "leave+evaporate"],
          feedback: "**Heat gently to evaporate some of the water** (to the crystallisation point) — never to dryness, because sodium nitrate decomposes when strongly heated.",
        },
        {
          point: "Leave to cool / crystallise",
          keywords: ["cool", "leave to crystallis", "leave+crystallis", "allow+crystallis", "let+crystallis", "set aside", "overnight", "wait for crystals"],
          feedback: "**Leave the solution to cool** so that crystals form.",
        },
        {
          point: "Filter off the crystals and dry them (filter paper / warm oven / desiccator)",
          keywords: ["filter", "dry+paper", "between paper", "paper towel", "pat dry", "blot", "desiccator", "warm oven", "low oven", "warm place", "leave to dry", "dry the crystals", "dry them"],
          feedback: "**Filter off the crystals and dry them** between filter papers or in a warm (not hot) oven.",
        },
      ],
      commonError: "Evaporating all the water ('heat until dry') — the question warns that sodium nitrate decomposes at high temperatures, so you must only heat to the **crystallisation point**, then cool. Also forgetting to leave out the indicator.",
      strategy: "Follow the method step by step",
    },
  ],
};
