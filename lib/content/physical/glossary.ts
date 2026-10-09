import type { GlossaryCard } from "../../types";

export const glossary: GlossaryCard[] = [
  {
    topic: "physical",
    term: "Exothermic reaction",
    definition: "A reaction that transfers heat energy to the surroundings, so the temperature of the surroundings rises. ΔH is negative.",
    example: "Combustion, neutralisation, displacement of copper by zinc.",
  },
  {
    topic: "physical",
    term: "Endothermic reaction",
    definition: "A reaction that takes in heat energy from the surroundings, so the temperature of the surroundings falls. ΔH is positive.",
    example: "Thermal decomposition of calcium carbonate; dissolving ammonium nitrate.",
  },
  {
    topic: "physical",
    term: "Enthalpy change (ΔH)",
    definition: "The heat energy change of a reaction, usually given per mole in kJ/mol. Negative for exothermic, positive for endothermic.",
    example: "ΔH = −Q ÷ n",
  },
  {
    topic: "physical",
    term: "Q = m × c × ΔT",
    definition: "Heat energy change (J) = mass of water or solution heated (g) × specific heat capacity (4.2 J/g/°C) × temperature change (°C).",
    example: "50 g × 4.2 × 6.0 °C = 1260 J",
  },
  {
    topic: "physical",
    term: "Calorimetry",
    definition: "Measuring the heat energy change of a reaction from the temperature change of a known mass of water or solution, e.g. in a polystyrene cup with a lid.",
    example: "Main error: heat loss to the surroundings, so the measured ΔH is less negative than the true value.",
  },
  {
    topic: "physical",
    term: "Activation energy (Ea)",
    definition: "The minimum energy that particles must have when they collide for a reaction to take place.",
    example: "Shown on a reaction profile as the height from the reactants to the top of the hump.",
  },
  {
    topic: "physical",
    term: "Energy level diagram / reaction profile",
    definition: "A diagram showing the energy of the reactants and products; for an exothermic reaction the products are lower than the reactants. A profile also shows the activation energy hump.",
  },
  {
    topic: "physical",
    term: "Bond energy",
    definition: "The energy needed to break one mole of a particular covalent bond. Breaking bonds is endothermic; making bonds is exothermic.",
    example: "ΔH = Σ(bonds broken) − Σ(bonds made)",
  },
  {
    topic: "physical",
    term: "Rate of reaction",
    definition: "How fast reactants are used up or products are formed: the change in amount (mass, volume, concentration) per unit time. On a graph, rate = gradient.",
    example: "Units such as g/s, cm³/s or g/min.",
  },
  {
    topic: "physical",
    term: "Mean rate",
    definition: "Total change in the amount of product (or reactant) divided by the total time taken.",
    example: "38 cm³ in 20 s → 1.9 cm³/s",
  },
  {
    topic: "physical",
    term: "Tangent",
    definition: "A straight line drawn touching a curve at one point; its gradient gives the rate at that instant.",
  },
  {
    topic: "physical",
    term: "Limiting reactant",
    definition: "The reactant that is completely used up first; it decides the maximum amount of product and when the reaction stops (the curve levels off).",
    example: "Marble chips in excess + HCl: the acid is limiting.",
  },
  {
    topic: "physical",
    term: "Collision theory",
    definition: "Particles react only when they collide with energy equal to or greater than the activation energy. Rate depends on the number of successful collisions per unit time.",
  },
  {
    topic: "physical",
    term: "Successful collision",
    definition: "A collision between reactant particles with energy equal to or greater than the activation energy, which results in a reaction.",
  },
  {
    topic: "physical",
    term: "Surface area",
    definition: "The area of a solid exposed to the other reactant. Smaller pieces (powder) have a larger surface area, giving more frequent collisions and a faster rate.",
  },
  {
    topic: "physical",
    term: "Catalyst",
    definition: "A substance that speeds up a reaction without being used up, by providing an alternative pathway with a lower activation energy.",
    example: "Manganese(IV) oxide for decomposing hydrogen peroxide; iron in the Haber process.",
  },
  {
    topic: "physical",
    term: "Reversible reaction",
    definition: "A reaction in which the products can react to re-form the original reactants, shown by the symbol ⇌.",
    example: "NH₄Cl(s) ⇌ NH₃(g) + HCl(g)",
  },
  {
    topic: "physical",
    term: "Dynamic equilibrium",
    definition: "In a closed system, the state where the forward and backward reactions occur at the same rate, so the concentrations of reactants and products remain constant.",
  },
  {
    topic: "physical",
    term: "Closed system",
    definition: "A system where no substances can enter or leave, needed for a reversible reaction to reach equilibrium.",
  },
  {
    topic: "physical",
    term: "Position of equilibrium",
    definition: "The relative amounts of reactants and products at equilibrium. It shifts to oppose any change in conditions (temperature, pressure, concentration).",
    example: "Increase temperature → shifts in the endothermic direction; increase pressure → shifts to the side with fewer moles of gas.",
  },
  {
    topic: "physical",
    term: "Haber process",
    definition: "The industrial manufacture of ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ/mol, using an iron catalyst, about 450 °C and 200 atm.",
    example: "450 °C is a compromise between a reasonable yield and a fast enough rate.",
  },
  {
    topic: "physical",
    term: "Anhydrous copper(II) sulfate",
    definition: "White powder formed when blue hydrated copper(II) sulfate is heated (endothermic). Adding water turns it blue again and releases heat (exothermic).",
    example: "CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(l)",
  },
];
