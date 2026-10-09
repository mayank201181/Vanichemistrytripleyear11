import type { GuideSection } from "../../types";

export const guide: GuideSection[] = [
  {
    id: "practical-apparatus",
    topic: "practical",
    lesson: "4CH1 Practical skills · apparatus & measurement",
    heading: "Apparatus, measurement and recording results",
    discovery: {
      problem:
        "Two students each need 25 cm³ of sodium hydroxide solution for a titration. One uses a 50 cm³ measuring cylinder, the other a volumetric pipette. Both say they measured \"25 cm³\". Why does the examiner only give the mark for the pipette, and why does the pipette user write 25.0 cm³ rather than 25 cm³?",
      idea:
        "Apparatus differs in **resolution** and **uncertainty**. A volumetric pipette delivers one fixed volume to within about ±0.06 cm³, so it is recorded to one decimal place (25.0 cm³). A measuring cylinder is only good to about ±0.5 cm³. In chemistry, the number of decimal places you write tells the examiner how precisely you measured.",
    },
    body: `**Naming apparatus, what it measures and the unit** is a guaranteed 1–2 marks on almost every paper. Learn this table:

| Apparatus | Measures | Unit | Typical resolution |
|---|---|---|---|
| **Gas syringe** | volume of gas | cm³ | 1 cm³ (0–100 cm³) |
| **Top-pan balance** | mass | g | 0.01 g |
| **Measuring cylinder** | volume of liquid (approximate) | cm³ | 0.5–1 cm³ |
| **Burette** | volume of liquid added (variable) | cm³ | read to 0.05 cm³ |
| **(Volumetric) pipette** | one fixed volume, e.g. 25.0 cm³ | cm³ | about ±0.06 cm³ |
| **Thermometer** | temperature | °C | read to 0.5 °C |
| **Stopwatch/stop clock** | time | s | 0.01 s (but reaction time ≈ 0.2 s) |

**Choosing the most precise apparatus.** To measure an exact volume of solution into a flask, use a **pipette** (fixed volume) or a **burette** (variable volume). A measuring cylinder is fine when the volume only needs to be approximate (e.g. "about 50 cm³ of acid" in a salt preparation). A beaker's markings are only a rough guide — never use a beaker to measure.

**Reading scales.** Read a liquid level at the **bottom of the meniscus** with your **eye level** with it (avoids parallax error). A burette has **0.00 at the top**, so the numbers increase as you go **down**. Record a **start (initial) reading** and an **end (final) reading** and subtract: titre = end − start. Burette readings are always written to **2 decimal places ending in 0 or 5**, e.g. 23.45 cm³ (never 23.4 or 23.47).

**Results tables.** Put the independent variable in the first column, with **units in the headers** (e.g. "Time / s", "Volume of gas / cm³"), not after every number. Record every value to the same number of decimal places, matching the resolution of the apparatus.

**Accuracy, precision, repeatability.**
- **Accurate**: close to the true value.
- **Precise**: repeat readings are close to each other (little spread).
- **Repeatable**: the same person using the same method gets similar results again; **reproducible**: someone else (or different apparatus) gets similar results.
- A **mean** is calculated from repeats **after leaving out anomalous results**. In titrations you use **concordant** results only — titres within 0.10 cm³ (or 0.20 cm³ if the question says so) of each other.

**Heating.** A **Bunsen burner** for strong heating. A **water bath** or **electric heater** for **flammable** liquids such as ethanol (no naked flame) and for gentle, even heating up to 100 °C. An **evaporating basin** is used to evaporate a solution to the crystallisation point; a **crucible** (with lid) is for very strong heating of solids, e.g. heating to **constant mass**.

**Liebig condenser.** Used in distillation. Cold water enters at the **bottom** and leaves at the **top**, so the outer jacket stays completely full of cold water; the water must flow **continuously** so the jacket stays cold and the vapour keeps **condensing**. The thermometer bulb sits level with the side arm to measure the temperature of the vapour that is distilling over.

**Safety.** Always wear **eye protection**. Use a **fume cupboard** for **toxic** gases (chlorine, bromine vapour, sulfur dioxide). Wear gloves with **corrosive** substances (e.g. concentrated sulfuric acid). Learn the hazard symbols: flammable (flame), toxic (skull and crossbones), corrosive (liquid eating a hand and surface), harmful/irritant (exclamation mark), oxidising (flame over a circle).`,
    diagram: `<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five key pieces of apparatus: a gas syringe, a top-pan balance, a burette, a volumetric pipette and a simple distillation set-up with a Liebig condenser" font-family="sans-serif" font-size="12">
<rect x="0" y="0" width="640" height="420" fill="#ffffff"/>
<text x="20" y="22" font-size="13" font-weight="bold" fill="#1e293b">Gas syringe: volume of gas (cm³)</text>
<rect x="18" y="62" width="24" height="12" fill="#e2e8f0" stroke="#334155"/>
<rect x="42" y="50" width="200" height="36" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
<rect x="43" y="51" width="109" height="34" fill="#bae6fd"/>
<rect x="152" y="50" width="8" height="36" fill="#64748b"/>
<rect x="160" y="62" width="122" height="12" fill="#94a3b8" stroke="#334155"/>
<rect x="282" y="52" width="8" height="32" fill="#64748b"/>
<path d="M52 86v-8M72 86v-5M92 86v-8M112 86v-5M132 86v-8M152 86v-5M172 86v-8M192 86v-5M212 86v-8M232 86v-8" stroke="#334155"/>
<text x="48" y="102" fill="#334155">0</text>
<text x="124" y="102" fill="#334155">40</text>
<text x="224" y="102" fill="#334155">90</text>
<text x="44" y="122" fill="#0369a1">gas pushes plunger out → read at its edge</text>
<text x="360" y="22" font-size="13" font-weight="bold" fill="#1e293b">Top-pan balance: mass (g)</text>
<path d="M455 40h50l6 30h-62z" fill="#e0f2fe" stroke="#334155"/>
<rect x="410" y="70" width="140" height="8" rx="3" fill="#94a3b8" stroke="#334155"/>
<rect x="475" y="78" width="10" height="10" fill="#64748b"/>
<rect x="380" y="88" width="200" height="44" rx="6" fill="#e2e8f0" stroke="#334155"/>
<rect x="430" y="98" width="90" height="24" rx="3" fill="#0f172a"/>
<text x="440" y="115" font-size="14" fill="#4ade80">152.36 g</text>
<circle cx="548" cy="110" r="7" fill="#f87171" stroke="#334155"/>
<text x="538" y="150" fill="#334155">tare (zero)</text>
<text x="380" y="150" fill="#334155">reads to 0.01 g</text>
<line x1="0" y1="172" x2="640" y2="172" stroke="#cbd5e1"/>
<text x="16" y="194" font-size="13" font-weight="bold" fill="#1e293b">Burette (cm³)</text>
<rect x="40" y="204" width="16" height="160" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
<rect x="41" y="224" width="14" height="140" fill="#fecaca"/>
<rect x="32" y="364" width="32" height="8" fill="#64748b"/>
<path d="M44 372h8l-2 18h-4z" fill="#f8fafc" stroke="#334155"/>
<path d="M56 214h6M56 234h6M56 254h6M56 274h6M56 294h6M56 314h6M56 334h6M56 354h6" stroke="#334155"/>
<text x="66" y="218" fill="#334155">0</text>
<text x="66" y="358" fill="#334155">50</text>
<text x="66" y="248" fill="#b91c1c">scale reads</text>
<text x="66" y="262" fill="#b91c1c">downwards</text>
<text x="66" y="290" fill="#334155">read to 0.05 cm³</text>
<text x="70" y="384" fill="#334155">tap</text>
<text x="160" y="194" font-size="13" font-weight="bold" fill="#1e293b">Volumetric pipette</text>
<circle cx="208" cy="214" r="9" fill="#fcd34d" stroke="#334155"/>
<rect x="204" y="223" width="8" height="60" fill="#f8fafc" stroke="#334155"/>
<ellipse cx="208" cy="310" rx="16" ry="28" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
<path d="M204 338v36l3 12h2l3-12v-36" fill="#dbeafe" stroke="#334155"/>
<line x1="198" y1="250" x2="218" y2="250" stroke="#b91c1c" stroke-width="2"/>
<text x="222" y="218" fill="#334155">filler</text>
<text x="222" y="254" fill="#b91c1c">one mark</text>
<text x="230" y="314" fill="#334155">fixed volume,</text>
<text x="230" y="328" fill="#334155">e.g. 25.0 cm³</text>
<text x="340" y="194" font-size="13" font-weight="bold" fill="#1e293b">Simple distillation (Liebig condenser)</text>
<circle cx="380" cy="320" r="30" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
<path d="M352 330a30 30 0 0 0 56 0z" fill="#bae6fd"/>
<rect x="372" y="250" width="16" height="44" fill="#f8fafc" stroke="#334155"/>
<line x1="380" y1="220" x2="380" y2="268" stroke="#b91c1c" stroke-width="2"/>
<line x1="388" y1="262" x2="560" y2="330" stroke="#334155" stroke-width="5"/>
<line x1="420" y1="275" x2="530" y2="318" stroke="#7dd3fc" stroke-width="22" stroke-opacity="0.7"/>
<line x1="388" y1="262" x2="560" y2="330" stroke="#ffffff" stroke-width="2.5"/>
<line x1="500" y1="312" x2="500" y2="336" stroke="#0284c7" stroke-width="5"/>
<line x1="430" y1="268" x2="430" y2="246" stroke="#0284c7" stroke-width="5"/>
<text x="428" y="350" fill="#0369a1">water in (bottom)</text>
<text x="440" y="240" fill="#0369a1">water out (top)</text>
<path d="M548 350h24l12 40h-48z" fill="#f8fafc" stroke="#334155"/>
<path d="M541 378h38l5 12h-48z" fill="#bae6fd"/>
<rect x="370" y="364" width="20" height="30" fill="#94a3b8" stroke="#334155"/>
<path d="M374 362q6-14 12 0z" fill="#3b82f6"/>
<text x="396" y="388" fill="#334155">heat</text>
<text x="392" y="216" fill="#b91c1c">thermometer bulb level with side arm</text>
<text x="560" y="410" fill="#334155">distillate</text>
</svg>`,
    diagramCaption:
      "Gas syringe (cm³), top-pan balance (g), burette (reads downwards, to 0.05 cm³), volumetric pipette (one fixed volume) and a Liebig condenser with water in at the bottom and out at the top.",
    keyPoints: [
      "Gas syringe → volume of gas in cm³; top-pan balance → mass in g; thermometer → °C; stopwatch → s.",
      "Pipette = one fixed volume (e.g. 25.0 cm³); burette = variable volume, read to the nearest 0.05 cm³ and recorded to 2 decimal places.",
      "Read at the bottom of the meniscus with your eye level with it; a burette's scale reads downwards (0.00 at the top).",
      "Accurate = close to the true value; precise = repeat readings close together.",
      "Calculate a mean from repeats after leaving out anomalies; in titrations use concordant titres only.",
      "Units go in the column headings of a results table (e.g. Time / s), never after each number.",
      "Flammable liquids: water bath or electric heater, no naked flame; toxic gases (e.g. chlorine): fume cupboard.",
    ],
    whyItWorks:
      "Every instrument has a smallest division. Recording to that resolution shows the true precision of the measurement; writing more decimal places claims precision you do not have, and writing fewer throws information away. Fixed-volume glassware (pipettes) is more precise than a measuring cylinder because it is calibrated to a single mark on a narrow neck, where a small error in the level is a tiny volume.",
    memoryTrick:
      "\"Pipette = Put one exact volume; Burette = Bit by bit.\" And for the condenser: \"in at the bottom, out at the top, so the jacket's full and the cooling won't stop.\"",
    examTip:
      "Mark schemes reject \"syringe\" alone for a gas syringe and \"scales\" for a balance — give the full name. Units: cm³ (accept cm3, not ml unless the scale shows ml). For burette readings, \"21.6\" loses the mark where \"21.60\" or \"21.65\" is required: always 2 d.p.",
    thinkDeeper:
      "A burette has an uncertainty of ±0.05 cm³ for each reading. Why does a titre (end − start) have an uncertainty of about ±0.10 cm³, and why does that make a titre of 25 cm³ more reliable (smaller percentage uncertainty) than a titre of 5 cm³?",
    workedExample: {
      problem:
        "A student does a rough titration (26.20 cm³) and then three accurate titrations. Start readings: 0.30, 0.10, 1.20 cm³. End readings: 25.75, 25.25, 26.45 cm³. Concordant results are within 0.10 cm³ of each other. Calculate the mean titre.",
      solution: `**Step 1 — titres (end − start), to 2 d.p.:**
- Titration 1: 25.75 − 0.30 = **25.45 cm³**
- Titration 2: 25.25 − 0.10 = **25.15 cm³**
- Titration 3: 26.45 − 1.20 = **25.25 cm³**

**Step 2 — choose concordant titres.** 25.15 and 25.25 differ by 0.10 cm³ ✓. 25.45 differs from 25.25 by 0.20 cm³ ✗. The rough titre is never used.

**Step 3 — mean of concordant titres:** (25.15 + 25.25) ÷ 2 = **25.20 cm³**

Write it to 2 d.p. with the unit. Including 25.45 (mean 25.28 cm³) or the rough titre would lose the mark.`,
    },
  },
  {
    id: "practical-planning",
    topic: "practical",
    lesson: "4CH1 Practical skills · planning & evaluating",
    heading: "Planning, errors, graphs and evaluating",
    discovery: {
      problem:
        "A student collects carbon dioxide from marble chips and acid by bubbling it into an upturned measuring cylinder full of water. Every run, the volume is a little lower than the volume calculated from the equation. Repeating the experiment ten times and taking a mean does not fix it. Why not?",
      idea:
        "This is a **systematic error**: some carbon dioxide dissolves in the water every time, so every reading is too low by a similar amount. Repeats and means only reduce **random** errors. To remove a systematic error you must change the method, e.g. collect the gas in a **gas syringe** instead.",
    },
    body: `**Variables.**
- **Independent variable** — the one you deliberately change (e.g. concentration of acid).
- **Dependent variable** — the one you measure (e.g. volume of gas every 10 s, or time for the cross to disappear).
- **Control variables** — everything else that could affect the result, kept the same (temperature, volume of acid, mass and size of marble chips…). Keeping them constant makes it a **fair test**.

**Describing a method** (the 4–6 mark question). Write numbered steps that an examiner could follow. Every good method:
- names the **apparatus** and gives **quantities** (e.g. "measure 25 cm³ of 1.0 mol/dm³ hydrochloric acid with a measuring cylinder into a conical flask");
- says **what** is measured, **how** and **when** (e.g. "start the stopwatch, read the gas syringe every 10 s until no more gas is given off");
- says how the independent variable is **changed** (at least 5 different values);
- states the **control variables**;
- says **repeat** each run and calculate a **mean**.

**Errors.**
| Type | What it does | Example | Fix |
|---|---|---|---|
| **Random** | readings scatter unpredictably either side of the true value | judging when a cross disappears; misreading a scale | repeat and take a mean |
| **Systematic** | every reading wrong by a similar amount in the **same direction** | balance not zeroed; heat lost from an unlagged beaker; gas dissolving in water | improve the method or apparatus |

**Common improvements** examiners credit: use a **polystyrene cup with a lid** to reduce heat loss in energy-change experiments; use a **gas syringe** instead of collecting over water for soluble gases (CO₂, NH₃); use a **burette/pipette** instead of a measuring cylinder; use a **data logger/temperature probe** or a **light sensor** to remove reaction-time error; **stir** so the temperature is even; use **powder** vs **chips** only when surface area is the independent variable (otherwise keep particle size the same).

**Anomalous results** do not fit the pattern. Identify them, suggest a reason (e.g. misread scale, bung not inserted quickly), leave them out of the mean, and repeat that reading.

**Graphs.**
- Independent variable on the **x-axis**, dependent on the **y-axis**; both axes labelled **with units** (time / s).
- Choose scales so the points fill **more than half** the grid; plot as small crosses.
- Draw a single **line or smooth curve of best fit** — do not join dot-to-dot; ignore anomalies.
- **Rate = gradient.** For a straight line, gradient = change in y ÷ change in x. For a curve, draw a **tangent** at that time and find its gradient with a big triangle. Units: cm³/s or g/s. Mean rate over a time interval = total change ÷ time taken.

**Evaluating a conclusion.** Ask: is it supported by **enough** data (range and number of values)? Were there **repeats** so anomalies could be spotted? Does the graph really show the claimed pattern? "Directly proportional" needs a **straight line through the origin** — a line that merely goes up only shows a positive correlation.`,
    diagram: `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of volume of gas against time: points plotted as crosses, a smooth curve of best fit that levels off at 50 cubic centimetres, an anomalous point at 30 seconds circled, and a tangent drawn at 20 seconds with a gradient triangle" font-family="sans-serif" font-size="12">
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<path d="M60 30v240h430" fill="none" stroke="#1e293b" stroke-width="1.5"/>
<path d="M130 270v5M200 270v5M270 270v5M340 270v5M410 270v5M480 270v5M55 230h5M55 190h5M55 150h5M55 110h5M55 70h5" stroke="#1e293b"/>
<text x="56" y="290" fill="#334155">0</text>
<text x="193" y="290" fill="#334155">20</text>
<text x="333" y="290" fill="#334155">40</text>
<text x="473" y="290" fill="#334155">60</text>
<text x="34" y="234" fill="#334155">10</text>
<text x="34" y="194" fill="#334155">20</text>
<text x="34" y="154" fill="#334155">30</text>
<text x="34" y="114" fill="#334155">40</text>
<text x="34" y="74" fill="#334155">50</text>
<text x="230" y="316" font-size="13" fill="#1e293b">time / s</text>
<text x="16" y="22" font-size="13" fill="#1e293b">volume of gas / cm³</text>
<path d="M60 270 C72 258 107 219 130 198 C153 177 177 158 200 142 C223 126 247 113 270 102 C293 91 317 83 340 78 C363 73 387 71 410 70 C433 69 468 70 480 70" fill="none" stroke="#2563eb" stroke-width="2"/>
<line x1="60" y1="238" x2="368" y2="27" stroke="#db2777" stroke-width="1.5" stroke-dasharray="6 4"/>
<path d="M60 238h280v-192" fill="none" stroke="#db2777" stroke-width="1"/>
<text x="170" y="254" fill="#be185d">change in time = 40 s</text>
<text x="346" y="150" fill="#be185d">change in volume</text>
<text x="346" y="164" fill="#be185d">= 56 − 8 = 48 cm³</text>
<path d="M56 266l8 8M64 266l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<path d="M126 194l8 8M134 194l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<path d="M196 138l8 8M204 138l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<path d="M266 130l8 8M274 130l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<path d="M336 74l8 8M344 74l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<path d="M406 66l8 8M414 66l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<path d="M476 66l8 8M484 66l-8 8" stroke="#1e293b" stroke-width="1.5"/>
<circle cx="270" cy="134" r="10" fill="none" stroke="#dc2626" stroke-width="1.5"/>
<text x="226" y="168" fill="#dc2626">anomaly: ignore it</text>
<text x="386" y="62" fill="#2563eb">levels off</text>
<text x="96" y="62" fill="#be185d">tangent at 20 s:</text>
<text x="96" y="77" fill="#be185d">gradient = 48 ÷ 40 = 1.2 cm³/s</text>
</svg>`,
    diagramCaption:
      "A curve of best fit ignores the anomaly. The rate at 20 s is the gradient of the tangent at 20 s: 48 cm³ ÷ 40 s = 1.2 cm³/s.",
    keyPoints: [
      "Independent = changed; dependent = measured; control = kept the same, making it a fair test.",
      "A method needs apparatus, quantities, what is measured and when, the control variables, and repeats with a mean.",
      "Random errors scatter results and are reduced by repeating and averaging; systematic errors shift every result the same way and need a better method.",
      "Anomalies are identified, left out of the mean and the reading repeated.",
      "Graphs: labelled axes with units, points filling the grid, a line or smooth curve of best fit (not dot-to-dot).",
      "Rate = gradient; for a curve draw a tangent and use a large triangle; units cm³/s or g/s.",
      "\"Directly proportional\" requires a straight line through the origin.",
    ],
    whyItWorks:
      "Random errors are equally likely to push a reading up or down, so they partly cancel when you average several readings. A systematic error pushes every reading the same way, so averaging keeps the bias — only changing the apparatus or method removes it.",
    memoryTrick:
      "\"I change it, D detects it, C controls it.\" And for graphs: \"DRY MIX\" — Dependent/Responding on the Y-axis, Manipulated/Independent on the X-axis.",
    examTip:
      "\"Repeat it\" alone rarely scores in an improvement question — say what the improvement fixes (e.g. \"use a gas syringe because carbon dioxide dissolves in water\"). In a method, \"measure the gas\" is not enough: name the gas syringe and say how often you read it.",
    thinkDeeper:
      "When magnesium ribbon reacts with hydrochloric acid, the rate measured over the first 10 s is lower than over the next 10 s, even though the acid is most concentrated at the start. Suggest a chemical reason. (Hint: what coats the surface of magnesium?)",
    workedExample: {
      problem:
        "Volume of hydrogen (cm³) at 10 s intervals from 0 to 60 s: 0, 18, 32, 34, 48, 50, 50. (a) Identify the anomalous result. (b) A tangent drawn at 20 s passes through (0 s, 8 cm³) and (40 s, 56 cm³). Calculate the rate at 20 s. (c) Calculate the mean rate over the first 20 s.",
      solution: `**(a)** The reading at **30 s (34 cm³)** does not fit the smooth curve — the volume should be about 42 cm³ (between 32 and 48, with the increase slowing). Ignore it when drawing the curve.

**(b)** Gradient of tangent = change in volume ÷ change in time
= (56 − 8) ÷ (40 − 0) = 48 ÷ 40 = **1.2 cm³/s**

**(c)** Mean rate = total volume ÷ total time = 32 ÷ 20 = **1.6 cm³/s**

The mean rate over the first 20 s (1.6 cm³/s) is higher than the rate *at* 20 s (1.2 cm³/s) because the reaction is fastest at the start and slows as the acid is used up. Don't forget the units (cm³/s).`,
    },
  },
];
