import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "calc-formulae": [
    {
      title: "Spectator ions = friends who come to the concert but stay in the crowd",
      text: "You and your friends all go to a concert, but only two of you get pulled on stage for the duet; everyone else is in the crowd at the start and still in the crowd at the end. Mixing barium chloride and sodium sulfate solutions, only **Ba²⁺ and SO₄²⁻** come together on stage to form the solid. **Na⁺ and Cl⁻ are spectator ions**: present on both sides, unchanged. The **ionic equation** is the highlight clip: **Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)**, balanced in atoms and in charge.",
      breaksDown:
        "Spectator ions cannot actually leave: a real solution must contain both positive and negative ions to stay neutral. They are only left out of the equation because they do not change.",
    },
    {
      title: "Coefficients v subscripts = ordering two drinks v changing the recipe",
      text: "At a bubble tea shop you can order **2** milk teas, but you cannot change the recipe and still call it milk tea. In balancing, the **big number in front (coefficient)** is how many you order, while the **small subscript** is the recipe: change H₂O to H₂O₂ and you have hydrogen peroxide, a different substance. Atoms are not created or destroyed, so every ingredient going in must come out: **4Al + 3O₂ → 2Al₂O₃**. Brackets work like combo sets: Ca(OH)₂ is two OH⁻ sets, while CaOH₂ would wrongly mean one O and two H.",
      breaksDown:
        "In a shop you can order any amount, but a balanced equation shows the fixed ratio in which particles react, using the smallest whole numbers.",
    },
  ],
  "calc-moles": [
    {
      title: "The mole = buying craft beads by weight, then counting them",
      text: "A craft shop sells beads by weight, but your bracelet pattern counts beads, not grams. If you know the mass of one bead, mass ÷ mass of one bead tells you how many you have. Chemistry is the same: a balanced equation counts **particles**, but a balance measures **grams**, so you convert with **moles = mass ÷ Mr**. One mole is always the **Mr in grams**, and it always contains the same huge number of particles, so 1 mol of zinc and 1 mol of hydrated zinc nitrate have equal numbers of formula units even though their masses differ.",
      breaksDown:
        "You can count beads one by one, but particles are far too small and numerous; the mole is an enormous fixed number. Mr is also a relative mass, not the actual mass of one particle in grams.",
    },
    {
      title: "Limiting reactant = the bubble tea pearls run out",
      text: "Each bubble tea needs 1 cup of tea and 2 scoops of pearls. With 10 cups of tea and 14 scoops of pearls, you can only make 7 drinks: the **pearls are the limiting reactant** and the tea is **in excess**. In chemistry, find the **moles of each reactant**, **divide by its number in the balanced equation**, and the **smaller answer is limiting**. Always calculate the product from the **limiting reactant**, because once it is used up the reaction stops.",
      breaksDown:
        "You compare moles of particles, never grams: 10 g of one reactant and 14 g of another tells you nothing until you divide by each Mr.",
    },
    {
      title: "Percentage yield = baking cookies for the bake sale",
      text: "The recipe promises 24 cookies (the **theoretical yield**), but dough sticks to the bowl and spoon, a couple burn, and you end up selling 20 (the **actual yield**). **% yield = actual ÷ theoretical × 100** = 20 ÷ 24 × 100 = 83%. In the lab, product is **lost when filtering, transferring or washing**, some **stays dissolved** in the solution, there may be **side reactions**, or the reaction may be **reversible or incomplete**.",
      breaksDown:
        "Cookie dough does not turn back into flour, but a reversible reaction really can go backwards. A yield above 100% does not mean bonus product: it means the product is still wet or impure.",
    },
  ],
  "calc-volumes": [
    {
      title: "24 dm³ per mole = spacing out for tag on the school field",
      text: "When 30 people spread out across the field for a game of tag, the space they take up depends on how many there are and how far apart they stay, not on whether they are tiny Primary 1 kids or tall netball players. Gas particles are **tiny compared with the spaces between them**, so the volume depends only on the **number of particles**: at rtp, **one mole of any gas occupies 24 dm³**. That is why 2 g of H₂ and 44 g of CO₂ fill the same balloon, and why **volume ratio = mole ratio** for reacting gases.",
      breaksDown:
        "Players stay still between turns, but gas particles move rapidly and randomly all the time. The 24 dm³ figure is only true at room temperature and pressure; change either and the volume changes.",
    },
    {
      title: "Concentration = how strong you make the cordial",
      text: "Two jugs of cordial can contain the same squirt of syrup but taste very different if one has twice the water. **Concentration (mol/dm³) = moles ÷ volume in dm³**: the syrup is the solute (in moles) and the jug size is the volume. Turn it round and **moles = concentration × volume**, so drinking a bigger glass of the same cordial gets you more syrup. Since 1 dm³ is 1 litre and 1 cm³ is 1 ml, always **divide cm³ by 1000**: 25.0 cm³ = 0.0250 dm³.",
      breaksDown:
        "Taste is not a measurement: concentration is an exact number of moles (or grams) per dm³ of solution. And it is the volume of the final solution that counts, not the volume of water added.",
    },
    {
      title: "Sulfuric acid 1 : 2 = a twin pack of sheet masks",
      text: "A twin pack of sheet masks covers two faces, so for 10 friends you need 5 packs. Each **H₂SO₄ is diprotic**: it releases **two H⁺ ions**, and each NaOH supplies **one OH⁻**, so in **H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O** one acid neutralises two alkali. In a titration, **moles of NaOH = 2 × moles of H₂SO₄**. Use 1 : 1 by mistake and your NaOH concentration comes out half the true value.",
      breaksDown:
        "The H⁺ ions are not packaged: they are released into solution and react with OH⁻ ions. The 1 : 2 ratio must always be read from the balanced equation, not guessed from the name of the acid.",
    },
  ],
};
