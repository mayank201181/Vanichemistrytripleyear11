import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "electro-principles": [
    {
      title: "Why solids don't conduct = exam hall vs the bell ringing",
      text: "In an exam hall every student is stuck in an assigned seat — nobody can move, so nothing gets passed around. That is a **solid ionic lattice**: the ions are held in **fixed positions** by strong electrostatic forces. When the bell rings, everyone floods out and moves freely — that is **melting or dissolving**. Only now can the ions move and **carry charge**, so the electrolyte conducts. The exam answer is always: **ions are free to move** — never \"electrons move\".",
      breaksDown:
        "Students leave because they choose to; ions in a melt are jostling randomly and only drift towards the electrodes because of attraction to the opposite charge.",
    },
    {
      title: "Cathode gives, anode takes = two token counters at a fun fair",
      text: "Picture a school fun fair with two counters. At the **anode (+)**, negative ions (Br⁻) hand in their spare electrons like tokens — losing electrons is **oxidation**. The tokens travel along the **external wire** (the delivery route) to the **cathode (−)**, where positive ions (Pb²⁺) collect them — gaining electrons is **reduction**. Pb²⁺ needs two tokens, so **Pb²⁺ + 2e⁻ → Pb**, while **2Br⁻ → Br₂ + 2e⁻**. Remember: **An Ox, Red Cat**.",
      breaksDown:
        "The tokens (electrons) only travel through the wires and electrodes; inside the electrolyte the charge is carried by the moving ions themselves, not by loose electrons.",
    },
    {
      title: "Inert electrodes = the hawker stall counter",
      text: "At a hawker stall, food and money change hands across the counter, but the counter itself is never sold. **Inert electrodes** (graphite or platinum) are the counter: they **conduct** and are the place where ions gain or lose electrons, but they **do not take part** in the reaction. The products — lead and bromine here — are the \"orders\" collected at each side.",
      breaksDown:
        "Graphite isn't totally inert in every case: in aluminium extraction the hot carbon anodes react with the oxygen made there, form CO₂ and burn away, so they must be replaced.",
    },
  ],
  "electro-solutions": [
    {
      title: "Cathode competition = H⁺ vs Na⁺ in the ticket queue",
      text: "In a solution two cations queue at the **cathode** for electrons — like two fans queuing for limited concert tickets. Na⁺ is a very half-hearted fan: sodium is **more reactive than hydrogen**, so its ion is \"happy staying an ion\" and lets **H⁺** take the electrons, giving **hydrogen**: 2H⁺ + 2e⁻ → H₂. Cu²⁺ is a superfan: copper is **less reactive than hydrogen**, so Cu²⁺ wins and **copper** is deposited: Cu²⁺ + 2e⁻ → Cu.",
      breaksDown:
        "Ions don't have feelings or choices — 'keen' just means how easily the ion gains electrons, which follows the metal's position in the reactivity series.",
    },
    {
      title: "Anode competition = the halide always grabs the spot first",
      text: "At the **anode**, think of a clothes swap where people hand in items. A **halide ion** (Cl⁻, Br⁻, I⁻) gives up its electrons readily, so if one is there it goes first and the **halogen** forms: 2Cl⁻ → Cl₂ + 2e⁻. OH⁻ only gets its turn when no halide is present, giving **oxygen**: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Sulfate and nitrate ions never hand anything in. Rule: **halide? halogen. No halide? oxygen.**",
      breaksDown:
        "Which ion is discharged depends on how easily it loses electrons (and for 4CH1 you use the simple rule); there is no actual queue order or politeness involved.",
    },
    {
      title: "2 : 1 hydrogen to oxygen = the electron voucher budget",
      text: "Imagine electrons as bubble tea vouchers. Every time the anode makes **one O₂**, it releases **4 vouchers** (4OH⁻ → O₂ + 2H₂O + 4e⁻). At the cathode each **H₂ costs 2 vouchers** (2H⁺ + 2e⁻ → H₂), so those 4 vouchers buy **two H₂**. The same number of electrons flows through both electrodes, so you get **2 mol H₂ : 1 mol O₂** — and equal moles of gas take up equal volumes, so **twice the volume of hydrogen**.",
      breaksDown:
        "Real measured volumes are slightly off the perfect 2 : 1 because oxygen is a little more soluble in water than hydrogen, so some of it dissolves instead of being collected.",
    },
  ],
};
