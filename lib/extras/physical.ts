import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "physical-energetics": [
    {
      title: "Activation energy = climbing the stairs before the waterslide",
      text: "At a water park you have to climb the stairs to the top of the slide before you can whoosh down, and the pool at the bottom is lower than where you started. The climb is the **activation energy** (measured from the **reactants** up to the top of the hump), the slide down is the energy given out, and finishing lower than you started is an **exothermic** reaction with **ΔH negative**. The match that lights methane is the push that gets particles up those stairs; after that, the energy released keeps the reaction going.",
      breaksDown:
        "Particles don't decide to climb — they only get over the hump if they collide with at least the activation energy. And the 'height' here is the chemical energy stored in bonds, not a physical height.",
    },
    {
      title: "Bonds broken − bonds made = a pasar malam game stall",
      text: "At a pasar malam game stall you pay to play, then win prizes back. Paying to play is **breaking bonds** — energy has to go IN, so it is **endothermic**. Winning prizes is **making bonds** — energy comes OUT, so it is **exothermic**. If the prizes are worth more than you paid, the surroundings end up with extra energy and the reaction is exothermic: **ΔH = Σ(bonds broken) − Σ(bonds made)** comes out **negative**. Count every 'ticket' — 2O₂ means two O=O bonds to pay for.",
      breaksDown:
        "Breaking bonds never releases energy, however it feels — it always costs energy. Bond energies are averages, so ΔH from bond energies differs slightly from a measured value.",
    },
    {
      title: "Q = mcΔT uses the water's mass = heating a pan of chai",
      text: "When you heat a pan of chai, how much heat went in depends on **how much liquid is in the pan** (m), **how much it warmed up** (ΔT) and how much energy each gram needs per degree (c = 4.2 J/g/°C) — not on how much gas the stove burned. In calorimetry the pan of chai is the **water or solution**, so **m is its mass**, never the mass of solid or fuel. Then divide by the **moles** of fuel burned or limiting reactant to get ΔH in kJ/mol, and add the sign: temperature rose, so **ΔH is negative**. Just like a stove, lots of heat escapes to the room, which is why measured values are **less exothermic** than data-book values.",
      breaksDown:
        "Chai with milk and sugar doesn't really have c = 4.2 J/g/°C exactly; in the experiment we assume the solution behaves like pure water (c = 4.2, 1 cm³ = 1 g).",
    },
  ],
  "physical-rates": [
    {
      title: "Why the reaction slows down = an MRT carriage emptying out",
      text: "In a packed MRT carriage at rush hour you bump into people every few seconds; as people get off at each stop you bump into someone less and less often. The passengers are the **acid particles** and the carriage is the volume of solution: at the start the **concentration is highest**, so collisions are **most frequent** and the graph is **steepest**. As acid is used up there are **fewer acid particles per cm³**, so **fewer collisions per second** and the gradient decreases. When the last passenger leaves, the bumps stop — the **acid (limiting reactant) is used up**, the graph goes flat, and the seats (the **excess marble chips**) are still there.",
      breaksDown:
        "Passengers leave by choice; acid particles are used up because they react with the calcium carbonate. Bumping into someone also isn't automatically a reaction — a collision must have energy at least equal to the activation energy.",
    },
    {
      title: "Higher temperature = the dance floor when the beat drops",
      text: "When the music speeds up, everyone on the dance floor moves faster: you bump into people **more often**, AND the bumps are **harder**. Imagine only bumps hard enough to make someone spill their drink 'count' — that's a collision with energy **≥ activation energy**. Heating the reaction does both: particles have **more kinetic energy**, so they collide **more frequently** AND a **greater proportion of collisions are successful**, giving **more successful collisions per unit time**. The second effect is the bigger one — and the exam needs both.",
      breaksDown:
        "Dancers can choose to be gentle; particles just have a spread of energies set by the temperature. Heating doesn't change the activation energy itself — it changes how many particles have enough energy.",
    },
    {
      title: "Catalyst = an easier trail over a lower hill",
      text: "Two hiking trails at Bukit Timah start and end at the same places, but one goes over a much lower hill, so far more people make it across each hour. A **catalyst** provides that **alternative pathway with a lower activation energy**, so a **greater proportion of collisions are successful** and the rate increases. Start and finish are unchanged, so the reactant and product energy levels — and **ΔH** — **stay the same**. And the trail isn't worn away by walkers: like MnO₂, which can be filtered, dried and reweighed with **unchanged mass**, the catalyst **isn't used up**.",
      breaksDown:
        "A catalyst does take part in the reaction (it isn't just a passive path); it is simply regenerated at the end. It also doesn't change how much product you get, only how fast you get it.",
    },
  ],
  "physical-equilibria": [
    {
      title: "Dynamic equilibrium = friends moving between rooms at a sleepover",
      text: "At a sleepover with the front door locked (a **closed system**), friends keep wandering between the living room and the bedroom. If people go from the living room to the bedroom at **exactly the same rate** as they come back, the headcount in each room stays **constant** — even though everyone is still moving. That's **dynamic equilibrium**: the **forward rate equals the backward rate**, so the **concentrations stay constant**. Notice the rooms don't need equal numbers — eight in the living room and three in the bedroom can still be steady, just as reactant and product concentrations are constant but **not necessarily equal**.",
      breaksDown:
        "Friends move because they want to; molecules react because of random collisions. And if the door were open (an open system) gas could escape and equilibrium would never be reached.",
    },
    {
      title: "Pressure up → fewer gas moles = squeezing into a crowded lift",
      text: "When a lift gets packed, four friends standing separately take up more room than the same friends huddled into two pairs, so people squash together to make space. In N₂ + 3H₂ ⇌ 2NH₃ there are **4 moles of gas on the left and 2 on the right**. **Increasing the pressure** shifts the **position of equilibrium to the side with fewer moles of gas** (the right), which **opposes the change** by lowering the pressure, so the **yield of ammonia increases**. If both sides had the same number of gas moles, squeezing would make no difference to the position.",
      breaksDown:
        "Pairs of friends are still the same people, but ammonia molecules are genuinely new substances made from the atoms of nitrogen and hydrogen. Pressure only affects equilibria involving gases.",
    },
    {
      title: "The Haber compromise = baking cookies at 180 °C",
      text: "Bake cookies at a low oven temperature and almost every one comes out perfect — but it takes hours. Crank it up and they're done fast, but more come out burnt. So you pick a **compromise** temperature. In the Haber process the forward reaction is **exothermic**, so a **low temperature** gives a **higher yield** (more perfect cookies) but the **rate is too slow**; a high temperature shifts equilibrium in the **endothermic direction**, lowering the yield. **About 450 °C** balances a reasonable yield with a fast enough rate. The **iron catalyst** is like a better oven that gets you there faster without changing how many come out perfect — it **doesn't change the yield**.",
      breaksDown:
        "Burnt cookies are ruined forever, but at equilibrium the ammonia that breaks down can re-form — both reactions keep happening. And in a real factory, cost and safety also limit the pressure (about 200 atm).",
    },
  ],
};
