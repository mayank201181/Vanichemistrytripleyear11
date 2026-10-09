import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-practical",
  title: "Written answers · Practical Skills",
  subtitle: "Naming apparatus, reading scales, means, safety, methods, improvements, gradients and evaluating",
  topic: "practical",
  questions: [
    {
      id: "pr-w01",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "warmup",
      question:
        "The diagram shows two pieces of laboratory apparatus, A and B. Name each piece of apparatus and give a unit for the quantity that it measures.",
      diagram: `<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apparatus A: a long glass tube with a tap at the bottom and a scale reading 0 at the top and increasing downwards. Apparatus B: a thin glass rod with a liquid-filled bulb at the bottom and a scale marked up to 100." font-family="sans-serif" font-size="12">
<rect x="0" y="0" width="360" height="260" fill="#ffffff"/>
<text x="62" y="20" font-size="14" font-weight="bold" fill="#1e293b">A</text>
<rect x="60" y="30" width="16" height="180" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
<rect x="61" y="60" width="14" height="150" fill="#dbeafe"/>
<rect x="52" y="210" width="32" height="8" fill="#64748b"/>
<path d="M64 218h8l-2 20h-4z" fill="#f8fafc" stroke="#334155"/>
<path d="M76 40h7M76 60h5M76 80h7M76 100h5M76 120h7M76 140h5M76 160h7M76 180h5M76 200h7" stroke="#334155"/>
<text x="88" y="44" fill="#334155">0</text>
<text x="88" y="124" fill="#334155">20</text>
<text x="88" y="204" fill="#334155">40</text>
<text x="96" y="232" fill="#334155">tap</text>
<text x="232" y="20" font-size="14" font-weight="bold" fill="#1e293b">B</text>
<rect x="230" y="30" width="12" height="190" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
<circle cx="236" cy="226" r="10" fill="#ef4444" stroke="#334155"/>
<rect x="234" y="120" width="4" height="100" fill="#ef4444"/>
<path d="M242 50h7M242 80h5M242 110h7M242 140h5M242 170h7M242 200h5" stroke="#334155"/>
<text x="254" y="54" fill="#334155">100</text>
<text x="254" y="114" fill="#334155">60</text>
<text x="254" y="174" fill="#334155">20</text>
</svg>`,
      marks: 4,
      hints: [
        "A has a tap at the bottom and its scale starts at 0 at the top — it is used in titrations.",
        "B has a bulb of liquid that expands up a narrow tube.",
        "Each unit must match the quantity: a volume of liquid, and a temperature.",
      ],
      modelAnswer:
        "A is a burette; it measures a volume of liquid in cm³.\nB is a thermometer; it measures temperature in °C.",
      markScheme: [
        {
          point: "A: burette",
          keywords: ["burette", "burrette", "beurette", "burett"],
          feedback:
            "A long graduated tube with a tap, reading 0 at the top, is a **burette** (spelling matters: b-u-r-e-t-t-e). It delivers a variable, measured volume of liquid.",
        },
        {
          point: "Unit for A: cm³ (accept ml)",
          keywords: ["cm", "cubic centimetre", "cubic centimeter", "ml", "millilitre", "milliliter"],
          feedback: "A burette measures volume of liquid, so the unit is **cm³** (cubic centimetres).",
        },
        {
          point: "B: thermometer",
          keywords: ["thermometer", "thermomitor", "thermometre"],
          feedback: "A liquid-in-glass tube with a bulb at the bottom is a **thermometer**.",
        },
        {
          point: "Unit for B: °C",
          keywords: ["degree", "celsius", "centigrade", "deg c", "oc"],
          feedback: "A thermometer measures temperature, in **°C** (degrees Celsius).",
        },
      ],
      commonError:
        "Calling A a \"pipette\" (a pipette has a bulb and one mark and no tap), or giving a unit that doesn't match the quantity, e.g. \"g\" for a burette.",
      strategy: "Recall the definition",
    },
    {
      id: "pr-w02",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "warmup",
      question:
        "A student measures the temperature rise when the same volumes of an acid and an alkali are mixed. She repeats the experiment four times. Her results are shown in the table. (a) Which result should she not use when calculating the mean? Give a reason. (b) Calculate the mean temperature rise.",
      table: {
        headers: ["Run", "1", "2", "3", "4"],
        rows: [["Temperature rise / °C", "6.2", "6.6", "8.9", "6.5"]],
      },
      marks: 4,
      hints: [
        "Look for the value that does not agree with the others.",
        "Add up only the values that agree, then divide by how many you added.",
        "Give your answer to the same number of decimal places as the data.",
      ],
      modelAnswer:
        "(a) Run 3 (8.9 °C) is anomalous, so it should be ignored, because it is much higher than the other results, which are all close together.\n(b) Mean = (6.2 + 6.6 + 6.5) ÷ 3 = 19.3 ÷ 3 = 6.4 °C",
      markScheme: [
        {
          point: "Identifies 8.9 °C / run 3 as the anomalous result to leave out",
          keywords: [
            "8.9+anomal", "8.9+ignore", "8.9+exclude", "8.9+outlier", "8.9+leave", "8.9+remove", "8.9+odd",
            "run 3+anomal", "run 3+ignore", "run 3+outlier", "run 3+exclude",
          ],
          feedback:
            "**8.9 °C (run 3)** is the anomaly — say so explicitly and say it is left out (ignored) when calculating the mean.",
        },
        {
          point: "Reason: it is much higher than the others / doesn't fit the pattern of the other results",
          keywords: [
            "much higher", "higher than the other", "too high", "larger than the other", "bigger than the other",
            "does not fit", "doesnt fit", "far from", "much larger", "much bigger", "not close", "differ+other", "greater than the other",
          ],
          feedback:
            "Give a reason: it is **much higher than the other results**, which are all close together (within 0.4 °C).",
        },
        {
          point: "Working: (6.2 + 6.6 + 6.5) ÷ 3 / 19.3 ÷ 3",
          keywords: ["19.3", "19.3/3", "6.43", "6.433", "6.5 3", "6.6 3", "6.2 3", "divided by 3", "divide by 3"],
          feedback: "Show the working: add the three good results (6.2 + 6.6 + 6.5 = 19.3) and divide by 3. (A correct unrounded answer, 6.43, also earns this mark.)",
        },
        {
          point: "Mean = 6.4 °C",
          keywords: ["6.4", "6.43", "6.433"],
          feedback:
            "19.3 ÷ 3 = 6.43…, which is **6.4 °C** to the same number of decimal places as the data. Including 8.9 would give 7.05 °C, which is wrong.",
        },
      ],
      commonError: "Averaging all four results (7.05 °C) without removing the anomaly, or dividing by 4 after removing it.",
      strategy: "Read the data carefully",
    },
    {
      id: "pr-w03",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question:
        "For each experiment, state one safety precaution (other than wearing eye protection) and give a reason for it. (a) Electrolysing concentrated sodium chloride solution, which produces chlorine gas at the anode. (b) Warming ethanol with ethanoic acid and a few drops of concentrated sulfuric acid to make an ester.",
      marks: 4,
      hints: [
        "What is the hazard of chlorine gas, and where do we work with hazardous gases?",
        "Ethanol has a hazard that makes Bunsen burners dangerous. Concentrated sulfuric acid has a different hazard.",
        "A precaution scores only if it is matched with a reason linked to the hazard.",
      ],
      modelAnswer:
        "(a) Carry out the electrolysis in a fume cupboard, because chlorine is a toxic gas and must not be breathed in.\n(b) Heat the mixture in a water bath (no naked flame), because ethanol is flammable and could catch fire.",
      markScheme: [
        {
          point: "(a) Use a fume cupboard / well-ventilated room",
          keywords: ["fume cupboard", "fume hood", "fume", "well ventilated", "ventilat", "open window", "extractor"],
          feedback: "Gases you must not breathe in are handled in a **fume cupboard** (or at least a well-ventilated room).",
        },
        {
          point: "(a) Reason: chlorine is toxic / poisonous",
          keywords: ["toxic", "poison", "harmful", "irritat", "damage+lungs", "dangerous to breathe"],
          feedback: "Chlorine is **toxic** — breathing it damages the lungs. Always link the precaution to the hazard.",
        },
        {
          point: "(b) Use a water bath / electric heater / no naked flame (or wear gloves when handling the concentrated acid)",
          keywords: [
            "water bath", "electric heater", "heating mantle", "hot plate", "hotplate", "no naked flame", "no flame",
            "no bunsen", "away from+flame", "not+bunsen", "gloves",
          ],
          feedback:
            "Ethanol must not be heated with a naked flame — use a **water bath** or **electric heater**. (Gloves are also accepted for handling the concentrated sulfuric acid.)",
        },
        {
          point: "(b) Reason: ethanol is flammable (or concentrated sulfuric acid is corrosive)",
          keywords: ["flammable", "inflammable", "catch fire", "catches fire", "ignite", "fire", "corrosive", "corrode"],
          feedback:
            "Give the matching hazard: ethanol is **flammable** (its vapour can catch fire), or concentrated sulfuric acid is **corrosive**.",
        },
      ],
      commonError:
        "Writing \"be careful\" or \"wear goggles\" (excluded by the question), or giving a precaution without saying what hazard it protects against.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "pr-w04",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question:
        "A student titrates dilute sulfuric acid from a burette into 25.0 cm³ of potassium hydroxide solution. (a) Calculate the titre for titrations 1, 2 and 3. (b) Concordant titres are within 0.10 cm³ of each other. State which titrations are concordant and calculate the mean titre.",
      table: {
        headers: ["", "Rough", "Titration 1", "Titration 2", "Titration 3"],
        rows: [
          ["Final reading / cm³", "25.40", "24.90", "24.75", "25.35"],
          ["Initial reading / cm³", "0.00", "0.50", "0.20", "1.05"],
          ["Titre / cm³", "25.40", "", "", ""],
        ],
      },
      marks: 5,
      hints: [
        "Titre = final reading − initial reading; keep 2 decimal places.",
        "Compare the three accurate titres — which two are no more than 0.10 cm³ apart?",
        "The rough titre is never included in the mean.",
      ],
      modelAnswer:
        "(a) Titration 1: 24.90 − 0.50 = 24.40 cm³. Titration 2: 24.75 − 0.20 = 24.55 cm³. Titration 3: 25.35 − 1.05 = 24.30 cm³.\n(b) Titrations 1 and 3 are concordant (24.40 and 24.30 differ by 0.10 cm³). Mean = (24.40 + 24.30) ÷ 2 = 24.35 cm³.",
      markScheme: [
        {
          point: "Titration 1 titre = 24.40 cm³",
          keywords: ["24.40"],
          feedback: "Titration 1: 24.90 − 0.50 = **24.40 cm³** (always 2 d.p. for burette values).",
        },
        {
          point: "Titration 2 titre = 24.55 cm³",
          keywords: ["24.55"],
          feedback: "Titration 2: 24.75 − 0.20 = **24.55 cm³**.",
        },
        {
          point: "Titration 3 titre = 24.30 cm³",
          keywords: ["24.30"],
          feedback: "Titration 3: 25.35 − 1.05 = **24.30 cm³**.",
        },
        {
          point: "Titrations 1 and 3 are concordant (titration 2 is not)",
          keywords: [
            "1 and 3", "1 & 3", "24.40 and 24.30", "24.30 and 24.40", "one and three", "first and third", "t1 and t3",
            "exclude titration 2", "ignore titration 2", "leave out titration 2", "except titration 2", "without titration 2",
          ],
          feedback:
            "24.40 and 24.30 are within 0.10 cm³, so **titrations 1 and 3** are concordant. 24.55 is 0.15 cm³ above 24.40, so titration 2 is left out.",
        },
        {
          point: "Mean titre = 24.35 cm³",
          keywords: ["24.35"],
          feedback: "Mean = (24.40 + 24.30) ÷ 2 = **24.35 cm³**. Do not include the rough titre or titration 2.",
        },
      ],
      commonError:
        "Including the rough titre or the non-concordant titration in the mean, or writing titres to 1 d.p. (24.4 instead of 24.40).",
      strategy: "Read the data carefully",
    },
    {
      id: "pr-w05",
      topic: "practical",
      section: "practical-planning",
      difficulty: "core",
      question:
        "A student wants to find out how the concentration of hydrochloric acid affects the rate of its reaction with magnesium ribbon. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g). Describe a method she could use. Name the apparatus, say what is recorded and state the variables she should control.",
      marks: 6,
      hints: [
        "Start with how much acid, measured with what, into which container.",
        "Hydrogen gas is given off — how can its volume be collected and read at regular times?",
        "What will she change, what else could affect the rate, and how will she process the results?",
      ],
      modelAnswer:
        "1. Measure 50 cm³ of 0.5 mol/dm³ hydrochloric acid with a measuring cylinder and pour it into a conical flask.\n2. Add a 3 cm length of magnesium ribbon, quickly put in the bung connected to a gas syringe and start the stopwatch.\n3. Record the volume of hydrogen in the gas syringe every 10 seconds until the reaction stops.\n4. Repeat using different concentrations of acid, e.g. 1.0, 1.5, 2.0 and 2.5 mol/dm³.\n5. Keep the same temperature, the same volume of acid and the same length of magnesium ribbon each time.\n6. Repeat each concentration and calculate a mean; plot volume against time and compare the initial gradient (rate) for each concentration.",
      markScheme: [
        {
          point: "Measure a stated volume of acid (e.g. 50 cm³) with a measuring cylinder / pipette into a conical flask",
          keywords: ["measuring cylinder", "pipette", "burette", "cm+acid", "conical flask+acid"],
          feedback:
            "Give a **quantity and apparatus**: e.g. \"measure 50 cm³ of acid using a measuring cylinder into a conical flask\".",
        },
        {
          point: "Collect the hydrogen in a gas syringe (or over water in an upturned measuring cylinder/burette)",
          keywords: ["gas syringe", "syringe", "over water", "upturned+cylinder", "inverted+cylinder", "upside down+cylinder", "upturned+burette"],
          feedback:
            "Say how the gas is collected and measured: a **gas syringe** connected to the flask with a bung and delivery tube.",
        },
        {
          point: "Start a stopwatch and record the volume of gas at regular intervals (e.g. every 10 s) / time to collect a fixed volume",
          keywords: [
            "every 10", "every 5", "every 20", "every 30", "every minute", "regular interval", "each 10", "intervals",
            "stopwatch+volume", "timer+volume", "stop clock+volume", "time+collect", "time+disappear",
          ],
          feedback:
            "State what is recorded and when: **start the stopwatch** and **read the volume of gas every 10 s** (or time how long it takes the magnesium to disappear).",
        },
        {
          point: "Repeat with at least four/five different concentrations of acid",
          keywords: [
            "different concentrations", "range of concentrations", "other concentrations", "five concentrations", "5 concentrations",
            "various concentrations", "1.0 mol", "2.0 mol", "vary+concentration", "dilute+distilled water",
          ],
          feedback:
            "Say how the independent variable is changed: **repeat with different concentrations** (at least five, e.g. 0.5–2.5 mol/dm³).",
        },
        {
          point: "Control variables: same temperature / same volume of acid / same length or mass of magnesium",
          keywords: [
            "same temperature", "same length", "same mass", "same volume", "same size", "same amount", "constant temperature",
            "room temperature", "temperature+constant", "keep+temperature",
          ],
          feedback:
            "Name the control variables: the **same volume of acid**, the **same length (mass) of magnesium ribbon** and the **same temperature**.",
        },
        {
          point: "Repeat each concentration and calculate a mean / plot volume against time and compare gradients (initial rates)",
          keywords: ["mean", "average", "gradient", "initial rate", "plot+graph", "draw+graph", "repeat each", "repeat+each"],
          feedback:
            "Finish by saying how results are made reliable and processed: **repeat and calculate a mean**, or **plot volume against time** and compare the initial gradients.",
        },
      ],
      commonError:
        "Vague steps such as \"measure the gas\" or \"use some acid\" with no apparatus, quantities or timing — and forgetting to say the length of magnesium and temperature are kept the same.",
      strategy: "Follow the method step by step",
    },
    {
      id: "pr-w06",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question:
        "A student measures the temperature rise when 25.0 cm³ of 2.0 mol/dm³ hydrochloric acid neutralises 25.0 cm³ of 2.0 mol/dm³ sodium hydroxide solution. She mixes them in a glass beaker with no lid and uses a thermometer that reads to 1 °C. Her repeat results are close together but all lower than the data-book value. (a) Identify the type of error and explain your answer. (b) Suggest three improvements to her method.",
      marks: 5,
      hints: [
        "Results that are close together but all wrong in the same direction point to one type of error.",
        "Where does the heat energy from the reaction go apart from into the solution?",
        "Think about the container, the top of the container, mixing and the thermometer.",
      ],
      modelAnswer:
        "(a) It is a systematic error, because every result is too low in the same direction: heat is lost to the surroundings each time, so repeating does not fix it.\n(b) Use a polystyrene cup, which is a good insulator, instead of a glass beaker. Put a lid on the cup to reduce heat loss. Stir the mixture and record the highest temperature, using a thermometer that reads to 0.1 °C (or a temperature probe).",
      markScheme: [
        {
          point: "(a) Systematic error",
          keywords: ["systematic", "system error"],
          feedback: "Results that are precise but all shifted the same way show a **systematic error**.",
        },
        {
          point: "(a) Explanation: all results too low in the same direction, because heat is lost to the surroundings every time",
          keywords: [
            "same direction", "always low", "always too low", "always lower", "always less", "consistently",
            "heat lost", "heat loss", "loses heat", "lost+surround", "energy lost", "energy+surround", "heat+surround", "escape",
          ],
          feedback:
            "Explain: **heat is lost to the surroundings** every time, so every reading is too low by a similar amount — repeating cannot remove it.",
        },
        {
          point: "Use a polystyrene cup / insulate the container",
          keywords: ["polystyrene", "insulat", "lagging", "lag the", "cotton wool", "styrofoam", "vacuum flask"],
          feedback: "Use a **polystyrene cup** (a good thermal insulator) instead of a glass beaker, which conducts heat away.",
        },
        {
          point: "Use a lid / cover",
          keywords: ["lid", "cover the", "covered", "cover+cup", "cover+beaker"],
          feedback: "Add a **lid** to reduce heat loss by convection and evaporation from the surface.",
        },
        {
          point: "Stir / record the highest temperature / use a more precise thermometer (0.1 °C) or temperature probe",
          keywords: [
            "stir", "0.1", "data logger", "temperature probe", "digital thermometer", "highest temperature", "maximum temperature",
            "higher resolution", "more precise thermometer", "smaller divisions",
          ],
          feedback:
            "Also credited: **stir** so the temperature is even, record the **highest** temperature, or use a thermometer reading to **0.1 °C** / a temperature probe.",
        },
      ],
      commonError:
        "Saying \"repeat the experiment and take a mean\" — that only reduces random error, and her results are already precise.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "pr-w07",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question:
        "Marble chips (in excess) react with dilute hydrochloric acid and the carbon dioxide is collected in a gas syringe. A graph of volume of gas against time is a curve. A tangent drawn to the curve at 30 s passes through the points (5 s, 22 cm³) and (55 s, 62 cm³). (a) Calculate the rate of reaction at 30 s. Give the unit. (b) Explain why the rate at 30 s is lower than at the start.",
      marks: 5,
      hints: [
        "The rate at one time is the gradient of the tangent at that time.",
        "Gradient = change in volume ÷ change in time, using both points.",
        "For (b): the marble is in excess, so what is being used up — and what does that do to collisions?",
      ],
      modelAnswer:
        "(a) Gradient = (62 − 22) ÷ (55 − 5) = 40 ÷ 50 = 0.80 cm³/s.\n(b) As the reaction goes on, the acid is used up, so the concentration of acid decreases — there are fewer acid particles per unit volume. So there are fewer collisions per unit time (less frequent collisions) between acid particles and the marble surface, so fewer successful collisions per second.",
      markScheme: [
        {
          point: "Working: change in volume ÷ change in time = 40 ÷ 50",
          keywords: ["40/50", "40 ÷ 50", "62-22", "62 − 22", "55-5", "55 − 5"],
          feedback: "Gradient = change in volume ÷ change in time = (62 − 22) ÷ (55 − 5) = **40 ÷ 50**.",
        },
        {
          point: "Rate = 0.80",
          keywords: ["0.8", "0.80"],
          feedback: "40 ÷ 50 = **0.80**.",
        },
        {
          point: "Unit: cm³/s",
          keywords: ["cm/s", "cm per s", "cm per second", "cm s-1", "cubic centimetres per second", "cm per sec"],
          feedback: "Rate from a volume–time graph is in **cm³/s** (cm³ per second).",
        },
        {
          point: "Acid is used up / concentration of acid decreases / fewer acid particles per unit volume",
          keywords: [
            "concentration decreas", "lower concentration", "concentration+lower", "concentration+less", "concentration+fall",
            "concentration+drop", "fewer+particles", "less+particles", "fewer+acid", "used up", "less acid", "acid+used",
          ],
          feedback:
            "The acid is the limiting reactant and is being **used up**, so its **concentration decreases** — fewer acid particles per unit volume.",
        },
        {
          point: "Fewer collisions per unit time / less frequent collisions",
          keywords: [
            "fewer collisions per", "less frequent", "fewer frequent", "collisions per second", "collisions per unit time",
            "frequency of collision", "collision frequency", "fewer successful collisions", "fewer+collisions+time", "less+collisions+time",
          ],
          feedback:
            "Link to collision theory with a time element: **fewer collisions per unit time** (less frequent collisions), so fewer successful collisions per second.",
        },
      ],
      commonError:
        "Dividing the coordinates of a single point (62 ÷ 55) instead of finding the gradient, or saying \"fewer collisions\" without \"per second / per unit time\".",
      strategy: "Read the graph",
    },
    {
      id: "pr-w08",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question:
        "A student times how long it takes a cross to disappear when sodium thiosulfate reacts with hydrochloric acid at three temperatures, doing each experiment once. Her results are in the table. She concludes: \"The rate of reaction is directly proportional to the temperature.\" Evaluate her conclusion.",
      table: {
        headers: ["Temperature / °C", "Time for cross to disappear / s"],
        rows: [
          ["20", "80"],
          ["30", "41"],
          ["40", "19"],
        ],
      },
      marks: 4,
      hints: [
        "Is three values, each measured once, enough to support a firm conclusion?",
        "Rate is proportional to 1/time. Work out how much the rate increases from 20 °C to 40 °C.",
        "What would a graph have to look like to show direct proportion?",
      ],
      modelAnswer:
        "The conclusion is not supported. There are only three temperatures, so there are too few results over a small range. Each experiment was done only once, so she cannot check repeatability or spot anomalies. From 20 °C to 40 °C the temperature doubles, but the time falls from 80 s to 19 s, so the rate increases about 4 times (1/80 = 0.0125 to 1/19 = 0.053), not 2 times. For direct proportion a graph of rate (1/time) against temperature would need to be a straight line through the origin, so she should plot this graph using more temperatures.",
      markScheme: [
        {
          point: "Too few results / only three temperatures / small range — use more temperatures",
          keywords: [
            "only three", "only 3", "too few", "more temperatures", "few results", "more results", "small range", "wider range",
            "more data", "not enough", "larger range", "only+3", "only+three", "3 results", "three results", "3 values", "three values",
          ],
          feedback: "Only **three temperatures** over a small range is too little data to establish a mathematical relationship.",
        },
        {
          point: "No repeats, so repeatability can't be checked / anomalies can't be identified",
          keywords: ["repeat", "only once", "one run", "anomal", "reliab", "repeatab", "didnt repeat", "did not repeat", "not repeated", "no repeats", "never repeated"],
          feedback:
            "Each experiment was done **only once**, so she cannot check repeatability or identify anomalous results — repeat and take a mean.",
        },
        {
          point: "Doubling the temperature (20 → 40 °C) increases the rate about 4 times, not 2 times",
          keywords: [
            "4 times", "four times", "4.2", "quadruple", "more than double", "not double", "0.0125", "0.0526", "0.053",
            "1/80", "1/19", "times 4", "x4", "factor of 4",
          ],
          feedback:
            "Use the data: rate ∝ 1/time. 1/80 = 0.0125 and 1/19 = 0.053, so doubling 20 °C to 40 °C makes the rate about **4 times** faster — not proportional.",
        },
        {
          point: "Direct proportion needs a straight-line graph (of rate or 1/time against temperature) through the origin",
          keywords: ["through the origin", "through origin", "through 0", "straight line+origin", "plot+graph", "draw+graph", "graph+1/time", "graph+rate"],
          feedback:
            "\"Directly proportional\" means a **straight line through the origin** on a graph of rate (1/time) against temperature — she should plot this to test it.",
        },
      ],
      commonError:
        "Just saying \"the conclusion is correct because as temperature goes up the time goes down\" — a correlation is not direct proportion, and the data actually contradicts it.",
      strategy: "Read the data carefully",
    },
  ],
};
