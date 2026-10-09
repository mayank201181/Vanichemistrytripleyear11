import type { GuideSection } from "../../types";

export const guide: GuideSection[] = [
  {
    id: "physical-energetics",
    topic: "physical",
    lesson: "4CH1 3(a) · bond energies Triple",
    heading: "Energetics — exothermic, endothermic and measuring ΔH",
    discovery: {
      problem:
        "Burning methane gives out a lot of heat, yet a match is needed to start it. If the reaction releases energy overall, why does it need energy put in first?",
      idea:
        "Every reaction must first **break bonds** (which takes energy — the activation energy hump) before new bonds can **form** (which releases energy). If forming the new bonds releases more energy than breaking the old ones took, the reaction is exothermic overall — but it still needs that first push over the hump.",
    },
    body: `An **exothermic** reaction transfers heat energy **to the surroundings**, so the temperature of the surroundings (e.g. the solution) **rises**. ΔH is **negative** because the chemicals lose energy. Examples: combustion, neutralisation, most displacement reactions, respiration.

An **endothermic** reaction takes in heat energy **from the surroundings**, so the temperature **falls**. ΔH is **positive**. Examples: thermal decomposition (e.g. of calcium carbonate), dissolving ammonium nitrate, photosynthesis.

**Energy level diagrams.** Draw reactants and products as horizontal lines. For an exothermic reaction the products are **lower** than the reactants; ΔH is the downward arrow between them. A **reaction profile** adds the hump: the **activation energy** (Ea) is the minimum energy the particles need to react — measured from the **reactants** up to the top of the hump.

**Calorimetry — reactions in solution** (neutralisation, displacement, dissolving). Use a **polystyrene cup** (a good insulator) with a **lid**, standing in a beaker for stability. Measure a known volume of solution, record its starting temperature with a **thermometer**, add the second reagent, stir, and record the **highest** (or lowest) temperature reached.

**Calorimetry — combustion.** Weigh a **spirit burner** of the fuel, heat a known mass of water in a **copper can** (good conductor) clamped above it, stir, then reweigh the burner to find the mass of fuel burned. Use a draught shield and keep the flame close to the can.

**The calculation (two steps)**
- Heat energy change: **Q = m × c × ΔT** (in J). Here *m* is the mass of the **water or solution** being heated (1 cm³ ≈ 1 g) — **not** the mass of the solid or fuel. c = 4.2 J/g/°C.
- Molar enthalpy change: **ΔH = −Q ÷ n**, where *n* is the moles of the reactant that **is not in excess** (or of fuel burned). Divide by 1000 to give **kJ/mol**. Then check the sign against what happened: temperature **rise** → exothermic → ΔH **negative**; temperature **fall** → endothermic → ΔH **positive**. Always write the sign (− or +) in front of your final answer.

**Sources of error.** The big one is **heat loss to the surroundings** (through the cup, the open top, from the copper can to the air), so experimental values are usually **less exothermic** than data-book values. Combustion also suffers from **incomplete combustion** (soot on the can) and evaporation of fuel from the wick. Improvements: lid, insulation, draught shield, measuring the temperature quickly.

**Bond energies (Triple).** **Breaking bonds is endothermic** (energy taken in); **making bonds is exothermic** (energy given out). The bond energy is the energy needed to break one mole of a covalent bond.

**ΔH = Σ(bonds broken) − Σ(bonds made)**

If more energy is released making the new bonds than is used breaking the old ones, ΔH is negative and the reaction is exothermic. Always draw out the displayed formulae and **count every bond** (including the multiples from balancing numbers).`,
    diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reaction profile for an exothermic reaction showing activation energy and negative enthalpy change">
<line x1="50" y1="230" x2="400" y2="230" stroke="#334155" stroke-width="2"/>
<line x1="50" y1="230" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
<text x="20" y="130" font-size="12" font-family="sans-serif" fill="#334155" transform="rotate(-90 20 130)">Energy</text>
<text x="170" y="250" font-size="12" font-family="sans-serif" fill="#334155">Progress of reaction</text>
<path d="M70 120 L130 120 C 170 120, 180 50, 215 50 C 250 50, 265 180, 300 180 L380 180" fill="none" stroke="#ea580c" stroke-width="3"/>
<text x="72" y="112" font-size="12" font-family="sans-serif" fill="#0f172a">reactants</text>
<text x="315" y="198" font-size="12" font-family="sans-serif" fill="#0f172a">products</text>
<line x1="110" y1="120" x2="110" y2="52" stroke="#2563eb" stroke-width="1.5"/>
<polygon points="110,48 106,58 114,58" fill="#2563eb"/>
<line x1="105" y1="50" x2="215" y2="50" stroke="#2563eb" stroke-dasharray="4 3"/>
<text x="62" y="80" font-size="12" font-family="sans-serif" fill="#2563eb">Ea</text>
<line x1="355" y1="120" x2="355" y2="176" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="355,180 351,170 359,170" fill="#16a34a"/>
<line x1="130" y1="120" x2="360" y2="120" stroke="#16a34a" stroke-dasharray="4 3"/>
<text x="362" y="150" font-size="12" font-family="sans-serif" fill="#16a34a">ΔH</text>
<text x="362" y="164" font-size="11" font-family="sans-serif" fill="#16a34a">(−)</text>
</svg>`,
    diagramCaption:
      "Exothermic reaction profile: products lower than reactants (ΔH negative). Ea is measured from the reactants to the peak.",
    keyPoints: [
      "Exothermic: heat given out to the surroundings, temperature rises, ΔH negative.",
      "Endothermic: heat taken in from the surroundings, temperature falls, ΔH positive.",
      "Q = m × c × ΔT, where m is the mass of water/solution heated and c = 4.2 J/g/°C.",
      "ΔH = −Q ÷ n, converted to kJ/mol; n = moles of the limiting reactant or fuel burned.",
      "Main error: heat lost to the surroundings, so measured ΔH is less negative than the true value.",
      "Bond breaking is endothermic; bond making is exothermic; ΔH = bonds broken − bonds made.",
    ],
    whyItWorks:
      "Energy is conserved: any energy the reacting chemicals lose goes into the water around them, so measuring the temperature rise of a known mass of water tells you the energy released. Dividing by moles makes the value independent of how much you used.",
    memoryTrick:
      "EXothermic = heat EXits. ENDOthermic = heat goes IN (ENDO = inside). Bond energies: 'Broken minus Made' — BM, like a bowel movement, in that order.",
    examTip:
      "In Q = mcΔT, m is the mass of the water or solution, never the mass of solid added or fuel burned. And always give the sign of ΔH: a temperature rise means a negative ΔH — leaving off the minus sign loses the final mark.",
    thinkDeeper:
      "Two students measure ΔH of neutralisation. One uses 25 cm³ of each 1.0 mol/dm³ solution, the other 50 cm³ of each. Would their temperature rises be the same? Would their ΔH values? Explain using Q = mcΔT.",
    workedExample: {
      problem:
        "(a) 50.0 cm³ of 1.00 mol/dm³ hydrochloric acid is mixed with 50.0 cm³ of 1.00 mol/dm³ sodium hydroxide in a polystyrene cup. The temperature rises from 21.5 °C to 28.0 °C. Calculate ΔH for the reaction in kJ/mol.\n\n(b) Use bond energies (kJ/mol: C–H 413, O=O 498, C=O 805, O–H 464) to calculate ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O.",
      solution: `**(a)**
- Mass of solution = 50.0 + 50.0 = 100 g; ΔT = 28.0 − 21.5 = 6.5 °C
- Q = 100 × 4.2 × 6.5 = **2730 J**
- n(HCl) = 1.00 × 50.0/1000 = **0.0500 mol** (= moles of water formed)
- ΔH = −2730 ÷ 0.0500 = −54 600 J/mol = **−54.6 kJ/mol** (negative: temperature rose)

**(b)**
- Bonds broken: 4 C–H + 2 O=O = 4(413) + 2(498) = 1652 + 996 = **2648 kJ**
- Bonds made: 2 C=O + 4 O–H = 2(805) + 4(464) = 1610 + 1856 = **3466 kJ**
- ΔH = 2648 − 3466 = **−818 kJ/mol** (exothermic: more energy released making bonds than used breaking them)`,
    },
  },
  {
    id: "physical-rates",
    topic: "physical",
    lesson: "4CH1 3(b)",
    heading: "Rates of reaction — the marble chip experiment, graphs and collision theory",
    discovery: {
      problem:
        "A flask of marble chips and hydrochloric acid sits on a balance. The reading drops quickly at first, then more and more slowly, then stops — even though plenty of marble is left. Why does it stop if there is still marble there?",
      idea:
        "The **acid** is the limiting reactant. As it is used up, there are fewer acid particles to collide with the chips, so the rate falls; when it has all reacted, no more carbon dioxide is made and the mass stops changing.",
    },
    figure: "marble-flask",
    body: `**The mass-loss method.** CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). Put the acid and marble chips in a conical flask on a **top-pan balance** and record the mass every 30 s.
- The mass **decreases** because **carbon dioxide gas escapes** from the flask.
- The **cotton wool plug** lets the CO₂ out but **stops acid spray / droplets escaping** — so the only mass lost is CO₂.
- Alternative: collect the CO₂ in a **gas syringe** and record the volume every 30 s.

**Why not sulfuric acid?** CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. **Calcium sulfate is insoluble** (only slightly soluble), so it forms a **layer on the surface of the chips**. This **stops the acid reaching the calcium carbonate**, so the reaction slows down and stops before the acid is used up. (The same problem applies to calcium carbonate powder — and to calcium, barium or lead(II) carbonate with sulfuric acid, because their sulfates are all insoluble.)

**Reading the graph (mass lost against time)**
- **Steep at the start** — the rate is **fastest** because the **acid concentration is highest**: most acid particles, most **frequent** collisions.
- **Gradient decreases** — acid is being used up, so there are **fewer acid particles** per cm³ and **fewer collisions per second**.
- **Levels off (horizontal)** — the reaction has stopped because the **acid (limiting reactant) is all used up**; the chips were in **excess**.
- **Rate = gradient.** Rate at an instant: draw a **tangent** and find rise ÷ run (units g/min or cm³/s). **Mean rate** = total change ÷ total time.

**Changing conditions — what the new curve looks like** (same volume of acid, chips in excess):

| Change | Initial gradient | Final mass lost |
|---|---|---|
| Half the acid concentration | shallower | **halved** (half the moles of acid) |
| Higher temperature | steeper, levels off sooner | same |
| Powder instead of chips | steeper, levels off sooner | same |
| Add a catalyst | steeper | same |

**Collision theory.** Particles must **collide** with **energy at least equal to the activation energy** for a collision to be **successful**. The rate depends on the number of **successful collisions per unit time**.
- **Concentration**: more particles in the same volume → **more frequent collisions** → more successful collisions per second.
- **Pressure** (reactions between **gases**): increasing the pressure squeezes the same number of gas particles into a **smaller volume**, so there are **more particles per unit volume** — it has exactly the same effect as increasing concentration: more frequent collisions → more successful collisions per unit time → faster rate.
- **Surface area**: smaller pieces expose more particles on the surface → more frequent collisions.
- **Temperature**: particles have **more kinetic energy** and **move faster**, so they collide **more frequently** AND a **greater proportion of collisions have energy ≥ activation energy** → more successful collisions per unit time. (The second effect is the bigger one.)
- **Catalyst**: speeds up a reaction without being used up by providing an **alternative pathway with a lower activation energy**, so a greater proportion of collisions are successful.

**Catalyst core practical.** 2H₂O₂(aq) → 2H₂O(l) + O₂(g). Add a small mass of **manganese(IV) oxide**, MnO₂, to hydrogen peroxide and collect the oxygen in a **gas syringe**, timing it. Compare with no catalyst (or other metal oxides). Filter, dry and reweigh the MnO₂ afterwards: the mass is unchanged, showing it is not used up. Different solids (e.g. MnO₂, copper(II) oxide, zinc oxide) can be compared by keeping the **same mass** of solid, the same volume and concentration of hydrogen peroxide and the same temperature, and timing how long it takes to collect a fixed volume of oxygen.

**Reaction profile diagrams (Triple — 3.14C).** A reaction profile plots **energy** (y-axis) against **progress of reaction** (x-axis).
- Draw the **reactants** level on the left and the **products** level on the right, joined by a **hump**.
- **Exothermic**: products **lower** than reactants; **endothermic**: products **higher**.
- **ΔH** = the vertical arrow from the **reactants level to the products level** (pointing **down** for exothermic, ΔH negative; **up** for endothermic, ΔH positive).
- **Activation energy, Ea** = the vertical arrow from the **reactants level up to the top of the hump** — the minimum energy colliding particles need to react.
- With a **catalyst**: draw a **lower hump** between the same two levels. Ea is smaller; ΔH is **unchanged** because the reactants and products are the same.

Common slip: drawing Ea from the products, or from zero on the axis — it always starts at the **reactants** level.`,
    diagram: `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of mass lost against time for original acid, half-concentration acid and higher temperature">
<line x1="60" y1="230" x2="400" y2="230" stroke="#334155" stroke-width="2"/>
<line x1="60" y1="230" x2="60" y2="20" stroke="#334155" stroke-width="2"/>
<text x="180" y="258" font-size="12" font-family="sans-serif" fill="#334155">Time / min</text>
<text x="14" y="175" font-size="12" font-family="sans-serif" fill="#334155" transform="rotate(-90 14 175)">Mass lost / g</text>
<path d="M60 230 C 100 120, 150 75, 230 62 L390 60" fill="none" stroke="#ea580c" stroke-width="3"/>
<path d="M60 230 C 75 120, 100 72, 150 62 L390 60" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M60 230 C 120 170, 190 150, 300 145 L390 145" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="250" y="52" font-size="11" font-family="sans-serif" fill="#ea580c">original acid</text>
<text x="104" y="48" font-size="11" font-family="sans-serif" fill="#dc2626">hotter</text>
<text x="250" y="137" font-size="11" font-family="sans-serif" fill="#2563eb">half concentration</text>
<line x1="60" y1="60" x2="66" y2="60" stroke="#334155"/>
<line x1="60" y1="145" x2="66" y2="145" stroke="#334155"/>
<text x="30" y="64" font-size="11" font-family="sans-serif" fill="#334155">1.10</text>
<text x="30" y="149" font-size="11" font-family="sans-serif" fill="#334155">0.55</text>
<text x="200" y="200" font-size="11" font-family="sans-serif" fill="#475569">plateau = acid used up</text>
</svg>`,
    diagramCaption:
      "Same volume of acid, chips in excess. Hotter: steeper, same plateau. Half concentration: shallower AND half the final mass loss.",
    keyPoints: [
      "Mass decreases because carbon dioxide gas escapes; cotton wool lets gas out but stops acid spray escaping.",
      "Sulfuric acid is unsuitable: insoluble calcium sulfate coats the chips and stops the acid reaching them.",
      "Rate = gradient; steepest at the start (highest acid concentration); levels off when the limiting reactant is used up.",
      "Half the concentration (same volume): shallower curve AND half the total mass of CO₂.",
      "Temperature: particles move faster → more frequent collisions AND a greater proportion with energy ≥ Ea → more successful collisions per unit time.",
      "A catalyst provides an alternative pathway with a lower activation energy and is not used up (e.g. MnO₂ with H₂O₂).",
      "Higher gas pressure = more particles per unit volume → more frequent collisions → faster (just like higher concentration).",
      "Reaction profile (Triple): Ea is measured from the reactants level up to the peak; ΔH from reactants to products. A catalyst lowers the peak but does not change ΔH.",
    ],
    whyItWorks:
      "Rate depends on how many successful collisions happen each second. Anything that makes particles meet more often (concentration, surface area, pressure) or makes more of their collisions energetic enough (temperature, catalyst) increases the rate.",
    memoryTrick:
      "'Graph story in 3 beats': STEEP (most acid) → SLOWING (acid used up, fewer collisions per second) → FLAT (acid all gone, chips left over).",
    examTip:
      "Mark schemes reject 'more collisions' on its own — you must say 'more frequent collisions' or 'more collisions per second/unit time'. For temperature, the top marks need BOTH faster particles (more frequent collisions) AND more particles with energy ≥ activation energy.",
    thinkDeeper:
      "If you used the same volume of acid at half the concentration but the ACID were in excess and the marble the limiting reactant, would the final mass loss still halve? What would happen to the curve?",
    workedExample: {
      problem:
        "50.0 cm³ of 1.00 mol/dm³ hydrochloric acid reacts with excess marble chips. (a) Calculate the total mass lost. (b) The total mass is lost in 10 minutes; calculate the mean rate. (c) A tangent drawn at t = 0 passes through (0, 0) and (2.0 min, 0.44 g). Find the initial rate.",
      solution: `**(a)**
- n(HCl) = 1.00 × 50.0 ÷ 1000 = 0.0500 mol
- Mole ratio HCl : CO₂ = 2 : 1, so n(CO₂) = 0.0250 mol
- Mass lost = mass of CO₂ = 0.0250 × 44 = **1.10 g**

**(b)** Mean rate = 1.10 ÷ 10 = **0.11 g/min**

**(c)** Initial rate = gradient of tangent = 0.44 ÷ 2.0 = **0.22 g/min** — twice the mean rate, because the reaction is fastest at the start when the acid is most concentrated.

With half-concentration acid (same volume), n(HCl) = 0.0250 mol → only **0.55 g** of CO₂ can form, so the curve levels off at half the height.`,
    },
  },
  {
    id: "physical-equilibria",
    topic: "physical",
    lesson: "4CH1 3(c) · Triple",
    heading: "Reversible reactions and dynamic equilibrium",
    discovery: {
      problem:
        "In a sealed container of nitrogen, hydrogen and ammonia at equilibrium, the amount of ammonia stays exactly constant. Has the reaction stopped?",
      idea:
        "No — ammonia is still being made AND broken down, but at **exactly the same rate**, so the amounts don't change. That is a **dynamic** equilibrium: constant on the outside, busy on the inside.",
    },
    body: `A **reversible reaction** can go in **both directions**: products can react to re-form the reactants. We use the **⇌** symbol.

**Two classic examples**
- **Heating ammonium chloride**: NH₄Cl(s) ⇌ NH₃(g) + HCl(g). Heat the white solid at the bottom of a test tube and it decomposes; the gases recombine on the **cooler** part of the tube, forming white solid again.
- **Hydrated copper(II) sulfate**: CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(l). Heating turns the **blue** crystals **white** (endothermic). Adding water to white anhydrous copper(II) sulfate turns it **blue** and the mixture gets **hot** (exothermic).

If a reaction is endothermic in one direction, it is **exothermic in the reverse direction by exactly the same amount** — only the **sign of ΔH changes**.

**Dynamic equilibrium (Triple).** In a **closed system** (nothing can enter or leave), a reversible reaction reaches **dynamic equilibrium** when:
- the **rate of the forward reaction equals the rate of the backward reaction**, and
- the **concentrations** of reactants and products **remain constant** (they are not necessarily equal!).

**Changing the conditions (Triple).** If you change a condition, the **position of equilibrium shifts to oppose the change**.

| Change | Equilibrium shifts… |
|---|---|
| Increase temperature | in the **endothermic** direction |
| Decrease temperature | in the **exothermic** direction |
| Increase pressure (gases) | to the side with **fewer moles of gas** |
| Decrease pressure | to the side with **more moles of gas** |
| Add a catalyst | **no change** in position — equilibrium is reached **faster** |

A catalyst speeds up the forward and backward reactions **equally**, so it does not change the yield. If both sides have the same number of moles of gas, pressure has no effect on the position.

**The Haber process** — the worked context.
N₂(g) + 3H₂(g) ⇌ 2NH₃(g) ΔH = −92 kJ/mol
- **Pressure**: 4 moles of gas on the left, 2 on the right. **High pressure** shifts equilibrium to the **right** (fewer moles) → **higher yield**; it also increases the rate. But very high pressure needs expensive, strong equipment and is more dangerous — so **about 200 atm** is a compromise.
- **Temperature**: the forward reaction is **exothermic**, so a **low** temperature would give a **higher yield** — but the rate would be **too slow**. **About 450 °C** is a **compromise** between a reasonable yield and a fast enough rate.
- **Iron catalyst**: increases the rate (equilibrium reached faster) but does **not** change the yield.
- Ammonia is removed by cooling it until it **liquefies**; unreacted nitrogen and hydrogen are **recycled**.`,
    diagram: `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph showing forward rate falling and backward rate rising until they become equal at dynamic equilibrium">
<line x1="60" y1="210" x2="400" y2="210" stroke="#334155" stroke-width="2"/>
<line x1="60" y1="210" x2="60" y2="20" stroke="#334155" stroke-width="2"/>
<text x="210" y="238" font-size="12" font-family="sans-serif" fill="#334155">Time</text>
<text x="25" y="140" font-size="12" font-family="sans-serif" fill="#334155" transform="rotate(-90 25 140)">Rate</text>
<path d="M62 35 C 120 90, 170 115, 240 118 L390 118" fill="none" stroke="#ea580c" stroke-width="3"/>
<path d="M62 208 C 120 150, 170 124, 240 120 L390 120" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="110" y="60" font-size="12" font-family="sans-serif" fill="#ea580c">forward rate</text>
<text x="110" y="190" font-size="12" font-family="sans-serif" fill="#2563eb">backward rate</text>
<line x1="240" y1="30" x2="240" y2="210" stroke="#64748b" stroke-dasharray="4 4"/>
<text x="250" y="100" font-size="12" font-family="sans-serif" fill="#0f172a">equilibrium reached:</text>
<text x="250" y="150" font-size="12" font-family="sans-serif" fill="#0f172a">rates equal,</text>
<text x="250" y="166" font-size="12" font-family="sans-serif" fill="#0f172a">concentrations constant</text>
</svg>`,
    diagramCaption:
      "Starting with only reactants: the forward rate falls and the backward rate rises until they are equal — dynamic equilibrium.",
    keyPoints: [
      "⇌ means reversible; the energy change is equal in size but opposite in sign for the reverse reaction.",
      "Blue hydrated copper(II) sulfate → white anhydrous on heating (endothermic); adding water reverses it and releases heat.",
      "Dynamic equilibrium (closed system): forward rate = backward rate; concentrations stay constant.",
      "Raising temperature shifts equilibrium in the endothermic direction.",
      "Raising pressure shifts equilibrium to the side with fewer moles of gas.",
      "A catalyst does not change the position of equilibrium — it only makes equilibrium reached faster.",
      "Haber: N₂ + 3H₂ ⇌ 2NH₃, iron catalyst, ~450 °C, ~200 atm — compromise conditions.",
    ],
    whyItWorks:
      "Le Chatelier's principle: a system at equilibrium responds to a change by shifting so as to oppose (partly undo) that change. Heat added is 'used up' by the endothermic direction; extra pressure is reduced by making fewer gas molecules.",
    memoryTrick:
      "'Hot → endo, squeeze → fewer.' Heat up and it goes the endothermic way; squeeze it (pressure up) and it goes to fewer gas moles.",
    examTip:
      "Never say a catalyst 'increases the yield'. And in compromise questions you need both sides: low temperature gives a higher yield BUT the rate is too slow, so a moderate temperature is used.",
    thinkDeeper:
      "For H₂(g) + I₂(g) ⇌ 2HI(g), what happens to the equilibrium yield of HI when the pressure is doubled? What happens to the rate? Why might an industrial chemist still choose a higher pressure?",
    workedExample: {
      problem:
        "2SO₂(g) + O₂(g) ⇌ 2SO₃(g) ΔH = −196 kJ/mol. Predict and explain the effect on the equilibrium yield of SO₃ of (a) increasing the pressure, (b) increasing the temperature, (c) adding a vanadium(V) oxide catalyst.",
      solution: `**(a)** Left: 2 + 1 = 3 moles of gas; right: 2 moles. Increasing pressure shifts the equilibrium to the side with **fewer moles of gas** → to the **right** → **yield of SO₃ increases**.

**(b)** The forward reaction is exothermic, so the backward reaction is endothermic. Increasing temperature shifts equilibrium in the **endothermic direction** → to the **left** → **yield of SO₃ decreases** (though the rate increases).

**(c)** **No change** to the yield: a catalyst increases the rates of the forward and backward reactions equally, so equilibrium is only reached **faster**.`,
    },
  },
];
