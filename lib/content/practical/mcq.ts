import type { MCQ, QuestionSet } from "../../types";

export const mcq: QuestionSet<MCQ> = {
  id: "mcq-practical",
  title: "Multiple choice · Practical Skills",
  subtitle: "Apparatus, units, reading scales, concordant results, errors, graphs and evaluating",
  topic: "practical",
  questions: [
    {
      id: "pr-m01",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "warmup",
      question:
        "A student wants to measure the volume of oxygen given off every 20 s when hydrogen peroxide decomposes. Which apparatus and unit should she use?",
      options: ["Burette; cm³", "Gas syringe; cm³", "Gas syringe; g", "Top-pan balance; g"],
      answerIndex: 1,
      optionFeedback: [
        "A burette measures volumes of liquid added in a titration, not gas given off by a reaction.",
        "A gas syringe collects the gas and its plunger is pushed out along a scale marked in cm³.",
        "The apparatus is right, but a gas syringe measures volume, so the unit is cm³, not grams.",
        "A balance could follow mass loss, but it measures mass (g), not the volume of oxygen asked for.",
      ],
      explanation:
        "A **gas syringe** measures the **volume of a gas** in **cm³** (typically 0–100 cm³, read to 1 cm³). The gas produced pushes the plunger out and you read the scale at the edge of the plunger. A **top-pan balance** measures **mass in g** — it is used when you follow a reaction by mass loss instead.",
      hints: ["Which piece of apparatus has a plunger that moves out as gas is made?"],
      strategy: "Recall the definition",
    },
    {
      id: "pr-m02",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "warmup",
      question:
        "Which apparatus should be used to transfer exactly 25.0 cm³ of sodium hydroxide solution into a conical flask for a titration?",
      options: ["A 50 cm³ measuring cylinder", "A 100 cm³ beaker", "A volumetric pipette with a filler", "A 25 cm³ conical flask"],
      answerIndex: 2,
      optionFeedback: [
        "A measuring cylinder is only accurate to about ±0.5 cm³, so it cannot give 25.0 cm³ precisely enough for a titration.",
        "Beaker markings are only a rough guide; a beaker is never used to measure a volume accurately.",
        "A volumetric pipette is calibrated to deliver one fixed volume (25.0 cm³) very precisely; a filler is used for safety.",
        "Conical flasks are for holding and swirling the solution; their markings are not accurate enough to measure with.",
      ],
      explanation:
        "In a titration the alkali in the flask is measured with a **volumetric pipette** — it delivers one fixed volume to within about ±0.06 cm³, which is why it is recorded to one decimal place: **25.0 cm³**. Always use a **pipette filler**, never your mouth. The acid is then added from a **burette**.",
      hints: ["You need the most precise glassware that delivers one fixed volume."],
      strategy: "Compare and contrast",
    },
    {
      id: "pr-m03",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "warmup",
      question: "How should a student read the volume of colourless solution in a burette?",
      options: [
        "Eye level with the bottom of the meniscus",
        "Eye level with the top of the meniscus",
        "Looking down on the meniscus from above",
        "From the scale nearest the tap, reading upwards",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Reading the bottom of the curved surface with your eye level with it avoids parallax error.",
        "For colourless solutions the convention is the bottom of the meniscus; the top is only used for very dark solutions where the bottom cannot be seen.",
        "Looking from above (or below) gives a parallax error, so the reading will be wrong.",
        "A burette scale starts at 0.00 at the top and reads downwards — reading upwards from the tap gives a nonsense value.",
      ],
      explanation:
        "Liquids in narrow glass tubes have a curved surface called the **meniscus**. Read the **bottom of the meniscus** with your **eye level** with it to avoid **parallax error**. Remember that a burette scale has **0.00 at the top** and the numbers increase downwards.",
      hints: ["Think about where your eye must be to avoid parallax error, and which part of the curve you read."],
      strategy: "Recall the definition",
    },
    {
      id: "pr-m04",
      topic: "practical",
      section: "practical-planning",
      difficulty: "warmup",
      question:
        "A student investigates how the temperature of sodium thiosulfate solution affects the time taken for a cross under the flask to disappear. What is the dependent variable?",
      options: [
        "The temperature of the solution",
        "The volume of sodium thiosulfate solution",
        "The concentration of the acid added",
        "The time taken for the cross to disappear",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Temperature is the variable the student deliberately changes, so it is the independent variable.",
        "The volume of solution should be kept the same each time — it is a control variable.",
        "The acid concentration must be kept the same for a fair test — it is a control variable.",
        "The time is what the student measures, and it depends on the temperature chosen.",
      ],
      explanation:
        "The **independent variable** is the one you change (temperature). The **dependent variable** is the one you measure (the time for the cross to disappear). Everything else — volumes, concentrations, the same cross — are **control variables**, kept constant to make it a fair test.",
      hints: ["The dependent variable is the one you measure — it depends on what you change."],
      strategy: "Recall the definition",
    },
    {
      id: "pr-m05",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question: "Which of these burette readings is recorded correctly?",
      options: ["12.3 cm³", "12.35 cm³", "12.350 cm³", "12.37 cm³"],
      answerIndex: 1,
      optionFeedback: [
        "One decimal place throws away precision — burette readings are written to 2 d.p., so this would be 12.30 cm³.",
        "Burette readings are recorded to 2 decimal places, to the nearest 0.05 cm³, so the last digit is 0 or 5.",
        "Three decimal places claims a precision the burette cannot give — its resolution is 0.05 cm³.",
        "Two decimal places is right, but a burette is read to the nearest 0.05 cm³, so the last digit can only be 0 or 5.",
      ],
      explanation:
        "A burette is graduated every 0.10 cm³ and you can judge halfway between two lines, so readings are recorded to the **nearest 0.05 cm³** and always to **2 decimal places** (e.g. 0.00, 12.35, 23.80). Mark schemes reject 23.8 or 23.83.",
      hints: [
        "How many decimal places do titration readings always have?",
        "The smallest step you can judge on a burette is 0.05 cm³ — which final digits are possible?",
      ],
      strategy: "Check the units",
    },
    {
      id: "pr-m06",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question:
        "Titration results are shown in the table. Concordant results are within 0.20 cm³ of each other. What is the mean titre?",
      table: {
        headers: ["", "Rough", "Titration 1", "Titration 2", "Titration 3", "Titration 4"],
        rows: [["Titre / cm³", "25.10", "24.40", "24.65", "24.30", "24.35"]],
      },
      options: ["24.43 cm³", "24.38 cm³", "24.35 cm³", "24.56 cm³"],
      answerIndex: 2,
      optionFeedback: [
        "This is the mean of all four accurate titres — but 24.65 is not concordant (it is 0.25 cm³ above 24.40), so it must be left out.",
        "This uses only two of the concordant titres (24.40 and 24.35); 24.30 is also concordant and must be included.",
        "Titrations 1, 3 and 4 (24.40, 24.30, 24.35) are all within 0.10 cm³; their mean is 73.05 ÷ 3 = 24.35 cm³.",
        "This includes the rough titration and the non-concordant titre — the rough titre is never used in the mean.",
      ],
      explanation:
        "Never use the **rough** titre. Find the titres that agree within the stated limit: 24.40, 24.30 and 24.35 (largest difference 0.10 cm³). 24.65 is 0.25 cm³ above 24.40, so it is excluded.\n\nMean = (24.40 + 24.30 + 24.35) ÷ 3\n= 73.05 ÷ 3\n= **24.35 cm³**",
      hints: [
        "Which titre should never be included in the mean?",
        "Check each accurate titre against the others — is any more than 0.20 cm³ away?",
      ],
      strategy: "Read the data carefully",
    },
    {
      id: "pr-m07",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question:
        "Pure ethanol boils at 78 °C. A student measures its boiling point three times and gets 74.5 °C, 74.5 °C and 75.0 °C. Which describes his results?",
      options: ["Accurate and precise", "Accurate but not precise", "Neither accurate nor precise", "Precise but not accurate"],
      answerIndex: 3,
      optionFeedback: [
        "They are precise (close together), but about 3 °C below the true value, so they are not accurate.",
        "This is the wrong way round: the readings agree closely (precise) but are far from 78 °C (not accurate).",
        "The three readings are within 0.5 °C of each other, so they are precise.",
        "The readings agree closely with each other (precise) but are all well below the true value of 78 °C (not accurate).",
      ],
      explanation:
        "**Precise** = repeat readings are close to each other. **Accurate** = close to the true value. These readings are tightly grouped but consistently about 3 °C too low — the sign of a **systematic error** (e.g. a faulty thermometer, or the bulb in the wrong position). Repeating will not fix it.",
      hints: [
        "Compare the readings with each other first, then with the true value.",
        "Precision is about spread; accuracy is about closeness to the true value.",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "pr-m08",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question:
        "Concentrated sodium chloride solution is electrolysed and chlorine gas is given off at the anode. How should this experiment be carried out safely?",
      options: [
        "In a fume cupboard, because chlorine is toxic",
        "Wearing gloves, because chlorine is flammable",
        "Over a water bath, because chlorine is explosive",
        "With the lid on the beaker, as chlorine is corrosive",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Chlorine is a toxic gas, so it must not be breathed in — a fume cupboard removes it.",
        "Chlorine is not flammable, and gloves would not protect you from breathing in a gas.",
        "A water bath is for heating flammable liquids gently; chlorine is not explosive and nothing is being heated here.",
        "Sealing a container in which gas is being produced is dangerous (pressure builds up) and does not deal with the toxic gas.",
      ],
      explanation:
        "Match the precaution to the **hazard**: **toxic** gases (chlorine, bromine vapour, sulfur dioxide) → **fume cupboard**; **flammable** liquids (ethanol) → no naked flames, use a water bath or electric heater; **corrosive** liquids (concentrated acids) → gloves and eye protection. Eye protection is always worn.",
      hints: [
        "What is the main hazard of chlorine gas?",
        "Which piece of equipment removes harmful gases from the laboratory?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "pr-m09",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question: "A student needs to warm ethanol to about 70 °C. What is the safest way to heat it?",
      options: [
        "Directly over a blue Bunsen flame",
        "In a water bath heated by an electric heater",
        "In a crucible on a pipe-clay triangle",
        "In an evaporating basin over a Bunsen burner",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Ethanol is highly flammable; its vapour would catch fire in a naked flame.",
        "No naked flame is used, and a water bath gives gentle, even heating below 100 °C.",
        "A crucible is for very strong heating of solids, and this still uses a flame near a flammable liquid.",
        "An evaporating basin is for evaporating solutions to crystallise them; a naked flame is still dangerous with ethanol.",
      ],
      explanation:
        "**Flammable** liquids such as ethanol must not be heated with a naked flame. Use a **water bath** (or an **electric heater/heating mantle**) — it also heats gently and evenly and cannot exceed 100 °C. Bunsen burners are for strong heating; **crucibles** for heating solids strongly; **evaporating basins** for evaporating solutions.",
      hints: [
        "What hazard symbol would you find on a bottle of ethanol?",
        "Which heating method avoids a naked flame altogether?",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "pr-m10",
      topic: "practical",
      section: "practical-apparatus",
      difficulty: "core",
      question: "In simple distillation, why does cooling water enter the Liebig condenser at the bottom and leave at the top?",
      options: [
        "So the water runs faster, helped by gravity",
        "So it pushes the distillate into the conical flask",
        "So the vapour is heated as it enters the condenser",
        "So the jacket stays completely full of cold water",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Water entering at the bottom flows upwards, against gravity — speed is not the reason.",
        "The cooling water never touches the distillate; it flows in a separate outer jacket.",
        "The condenser's job is to cool the vapour, not heat it.",
        "Filling from the bottom leaves no air gap, so the whole inner tube is cooled and the vapour condenses efficiently.",
      ],
      explanation:
        "If the water went in at the top, it would run out of the bottom and the jacket would only be partly full, leaving part of the inner tube uncooled. Entering at the **bottom** keeps the jacket **full of cold water**. The water must flow **continuously** so that it stays cold and keeps removing heat, so the vapour **condenses** into a liquid.",
      hints: [
        "Picture what happens to the water level in the jacket if water enters at the top and leaves at the bottom.",
        "For good cooling, how much of the inner tube should be surrounded by cold water?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "pr-m11",
      topic: "practical",
      section: "practical-planning",
      difficulty: "core",
      question:
        "A student investigates how the concentration of hydrochloric acid affects the rate of its reaction with marble chips. Which of these must be kept constant to make it a fair test?",
      options: [
        "The volume of gas produced",
        "The concentration of the acid",
        "The size of the marble chips",
        "The time taken for the reaction to stop",
      ],
      answerIndex: 2,
      optionFeedback: [
        "The volume of gas is what is measured — it is the dependent variable.",
        "Concentration is the independent variable; it must be changed, not kept the same.",
        "Chip size changes the surface area and so the rate, so it must be controlled for a fair test.",
        "How long the reaction lasts depends on the acid concentration — it is an outcome you measure, not something you can keep constant.",
      ],
      explanation:
        "Control variables are factors that would **also affect the rate** if they changed: the **size (surface area) and mass of marble chips**, the **volume of acid**, and the **temperature**. Keeping them the same means any change in rate is caused only by the concentration.",
      hints: [
        "Cross out the variable being changed and the ones being measured.",
        "Which remaining factor would change the rate if it was not kept the same?",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "pr-m12",
      topic: "practical",
      section: "practical-planning",
      difficulty: "core",
      question: "In a \"disappearing cross\" rate experiment, which of these is a random error?",
      options: [
        "Judging the exact moment the cross disappears",
        "A thermometer that always reads 2 °C too high",
        "A balance that was not zeroed before weighing",
        "Using the same faint cross for all of the runs",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Human judgement of the end point varies unpredictably from run to run — a random error, reduced by repeating and averaging.",
        "An error of the same size and direction every time is a systematic error.",
        "A zero error shifts every reading by the same amount — that is a systematic error.",
        "Using the same cross every time is a control, so it affects all runs equally rather than scattering them.",
      ],
      explanation:
        "**Random errors** make readings scatter unpredictably above and below the true value (e.g. reaction time with a stopwatch, judging a colour change). They are reduced by **repeating and taking a mean**. **Systematic errors** shift every reading in the **same direction** (zero errors, faulty instruments, heat loss) and need a change of method or apparatus.",
      hints: [
        "Random errors vary unpredictably from one run to the next.",
        "Which option would make a reading sometimes too high and sometimes too low?",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "pr-m13",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question:
        "A student collects carbon dioxide over water in an upturned measuring cylinder. Every run gives a smaller volume than the theoretical volume. Which change would most improve the accuracy?",
      options: [
        "Repeat the experiment three times and calculate a mean",
        "Use a larger measuring cylinder with a wider scale",
        "Use marble powder instead of chips so it finishes faster",
        "Collect the gas in a gas syringe instead of over water",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Repeating reduces random error, but every run is low for the same reason, so the mean is still too low.",
        "A larger cylinder would actually be less precise, and the gas would still dissolve in the water.",
        "Faster reaction means the gas spends a little less time in contact with water, but some still dissolves — and it changes the rate being studied.",
        "Carbon dioxide is slightly soluble in water, so some dissolves; a gas syringe removes this systematic error.",
      ],
      explanation:
        "Every reading is low by a similar amount, so this is a **systematic error**: **carbon dioxide is slightly soluble in water** and some dissolves as it bubbles through. Repeats cannot remove a systematic error — you must change the method. A **gas syringe** collects the gas without passing it through water.",
      hints: [
        "Is the error random (scattered) or systematic (always in one direction)?",
        "What happens to some carbon dioxide when it bubbles through water?",
        "Which option removes contact between the gas and water?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "pr-m14",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question:
        "A student plots the volume of oxygen given off against time when hydrogen peroxide decomposes. She draws a tangent to the curve at 30 s. The tangent passes through the points (10 s, 26 cm³) and (50 s, 54 cm³). What is the rate of reaction at 30 s?",
      options: ["1.08 cm³/s", "0.70 cm³/s", "0.56 cm³/s", "1.43 cm³/s"],
      answerIndex: 1,
      optionFeedback: [
        "This is 54 ÷ 50 — dividing the coordinates of one point instead of finding the gradient (change in volume ÷ change in time).",
        "Gradient = (54 − 26) ÷ (50 − 10) = 28 ÷ 40 = 0.70 cm³/s.",
        "This is 28 ÷ 50 — you subtracted the volumes but forgot to subtract the times (50 − 10 = 40 s).",
        "This is 40 ÷ 28 — the triangle is upside down; rate is change in volume divided by change in time.",
      ],
      explanation:
        "The rate at an instant is the **gradient of the tangent** at that time.\n\nGradient = change in y ÷ change in x\n= (54 − 26) cm³ ÷ (50 − 10) s\n= 28 ÷ 40\n= **0.70 cm³/s**\n\nAlways subtract both coordinates, and keep volume on top so the unit is cm³/s.",
      hints: [
        "The rate at one moment equals the gradient of the tangent at that moment.",
        "Gradient = change in volume ÷ change in time — find both changes from the two points.",
        "Check your unit: it should be cm³ per s.",
      ],
      strategy: "Read the graph",
    },
    {
      id: "pr-m15",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question:
        "A student burns different masses of magnesium in a crucible and weighs the magnesium oxide made. Her points lie on a straight line parallel to the expected line, but every mass of oxide is about 0.20 g higher than expected. What is the most likely explanation?",
      options: [
        "Random error from misreading the balance each time",
        "Some magnesium did not react in every experiment",
        "A systematic error, e.g. the balance was not zeroed",
        "One anomalous result pulled the line of best fit up",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Random misreadings would scatter points both above and below the line, not shift them all up by the same amount.",
        "Unreacted magnesium would make the oxide mass lower, not higher, and the error would grow with mass.",
        "Every value shifted by the same amount in the same direction is the signature of a systematic (zero) error.",
        "One anomaly would sit off the line on its own; here every point is shifted by the same amount.",
      ],
      explanation:
        "When **all** results are wrong by the **same amount in the same direction**, it is a **systematic error**. A balance that reads 0.20 g with nothing on it (not tared/zeroed) adds 0.20 g to every mass, so the line keeps the right gradient but is shifted up. Repeating does not help — zero the balance (or subtract the zero reading).",
      hints: [
        "Are the errors scattered, or all in the same direction?",
        "Would the error described change with the mass of magnesium, or stay the same size?",
        "Which kind of error keeps the gradient the same but moves the whole line?",
      ],
      strategy: "Read the graph",
    },
    {
      id: "pr-m16",
      topic: "practical",
      section: "practical-planning",
      difficulty: "challenge",
      question: "The table shows the time for a cross to disappear at different temperatures. Which statement is correct?",
      table: {
        headers: ["Temperature / °C", "Run 1 / s", "Run 2 / s", "Run 3 / s"],
        rows: [
          ["20", "120", "118", "122"],
          ["30", "62", "60", "61"],
          ["40", "32", "45", "34"],
        ],
      },
      options: [
        "The mean at 40 °C is 33 s, leaving out 45 s",
        "The mean at 40 °C is 37 s, using all three runs",
        "The rate is directly proportional to temperature",
        "The 30 °C results are anomalous as all differ",
      ],
      answerIndex: 0,
      optionFeedback: [
        "45 s is far from 32 s and 34 s, so it is anomalous; mean = (32 + 34) ÷ 2 = 33 s.",
        "This includes the anomalous 45 s run: (32 + 45 + 34) ÷ 3 = 37 s — anomalies must be left out of the mean.",
        "Rate roughly doubles for each 10 °C rise (time halves), but doubling the temperature in °C from 20 to 40 makes the rate about 3.6 times faster (120 s → 33 s), so it is not proportional.",
        "Repeats always differ slightly; 62, 60 and 61 s are very close together, so none is anomalous.",
      ],
      explanation:
        "At 40 °C, **45 s** does not fit the other repeats (32 and 34 s) — it is **anomalous** and left out. Mean = (32 + 34) ÷ 2 = **33 s**.\n\nThe times roughly halve every 10 °C (120 → 61 → 33 s), so the rate roughly doubles every 10 °C. \"Directly proportional\" would need rate ÷ temperature to be constant (a straight line through the origin) — doubling 20 °C to 40 °C would only double the rate, but here it increases about 3.6 times.",
      hints: [
        "Look along each row: is there a repeat that does not agree with the others?",
        "Should an anomalous value be included in a mean?",
        "What would a graph of rate against temperature need to look like for \"directly proportional\"?",
      ],
      strategy: "Read the data carefully",
    },
  ],
};
