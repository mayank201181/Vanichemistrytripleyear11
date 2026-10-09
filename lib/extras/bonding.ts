import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "bonding-ionic": [
    {
      title: "Electron transfer = handing over your spare concert ticket",
      text: "Sodium has one lonely outer electron, like holding one spare ticket you cannot use; chlorine is one short of a full set of eight, like a friend missing exactly one ticket. Sodium hands it over: **electrons are transferred** from the metal to the non-metal, and both now have a **full outer shell** (2.8 and 2.8.8). But giving and receiving changes them: sodium becomes a **positive ion, Na⁺**, and chlorine a **negative ion, Cl⁻**, and the **ionic bond** is the strong electrostatic attraction between these oppositely charged ions.",
      breaksDown:
        "Atoms do not choose to swap or feel generous: the ions simply form a lower-energy, more stable arrangement overall. And the bond is not the handover itself but the attraction between the resulting charges.",
    },
    {
      title: "Giant ionic lattice = a chequerboard rangoli locked in place",
      text: "Imagine a huge rangoli tiled in alternating colours, where every tile is pulled tightly towards all its differently coloured neighbours, up, down, sideways and in 3D too. Those tiles are the **alternating positive and negative ions**, and the pull is the **strong electrostatic attraction acting in all directions**. Breaking it up means overcoming **very many strong forces**, so the **melting point is high**, higher still for bigger charges (MgO about 2850 °C, NaCl 801 °C). Locked tiles cannot move, so the **solid does not conduct**; when **molten or dissolved, the ions are free to move** and carry charge.",
      breaksDown:
        "A rangoli is flat and the colours do not attract each other; a real lattice is three-dimensional and held only by attraction between opposite charges. There are no separate molecules in it.",
    },
    {
      title: "Ionic formulae = splitting the hawker centre bill exactly",
      text: "Splitting a bill, the money paid must exactly cover the total. In an ionic compound, the **total positive charge must cancel the total negative charge**. Ca²⁺ brings +2 and each Cl⁻ covers only −1, so you need two: **CaCl₂**. Al³⁺ and O²⁻ need a common total of 6: two Al³⁺ (+6) and three O²⁻ (−6) give **Al₂O₃**. When more than one compound ion is needed, it goes in brackets, like **Ca(OH)₂**.",
      breaksDown:
        "Charges are not money and nobody is paying anyone. The formula of an ionic compound shows the simplest ratio of ions in a giant lattice, not one separate molecule.",
    },
  ],
  "bonding-covalent": [
    {
      title: "Covalent bond = two friends sharing one pair of earphones",
      text: "Two friends each put in one earbud and listen to the same song, and the shared earphones keep them sitting close together. In a **covalent bond** each non-metal atom contributes one electron to make a **shared pair**, and the bond is the **strong electrostatic attraction between the shared pair and the nuclei of both atoms**. Share two pairs and you have a **double bond** (O=O, C=O); three pairs is a **triple bond** (N≡N). Each atom ends up with a full outer shell.",
      breaksDown:
        "Earbuds stay with their owner, but shared electrons belong to both atoms and are attracted to both nuclei at once. What holds the atoms together is electrostatic attraction, not a cable.",
    },
    {
      title: "Low boiling points = best-friend pairs in a crowded canteen",
      text: "In a busy canteen, pairs of best friends grip each other's arms tightly, but different pairs barely notice each other. Each pair is a **molecule**: the grip within the pair is the **strong covalent bond**, and the faint pull between pairs is the **weak intermolecular force**. Boiling only separates pairs from other pairs; **no covalent bonds break**, so little energy is needed and **melting and boiling points are low**. Bigger groups have more contact, so **as Mr increases the intermolecular forces get stronger** and boiling point rises (Cl₂ gas, Br₂ liquid, I₂ solid). C₆₀ is simple molecular too.",
      breaksDown:
        "Molecules do not hold hands or ignore each other by choice. The real point is the huge difference in strength: intermolecular forces are far weaker than covalent bonds.",
    },
    {
      title: "Graphite v diamond = a stack of chapatis v a bolted climbing frame",
      text: "Each chapati in a stack is strong and holds together on its own, but the chapatis slide over each other easily. **Graphite** is the same: each carbon bonds to **three** others in strong **hexagonal layers**, held together only by **weak forces**, so the layers **slide** and graphite is soft and a **lubricant**. **Diamond** is a playground climbing frame bolted at every joint in all directions: each carbon bonds to **four** others in a rigid 3D network, so it is **very hard**. Both have **very high melting points** because strong covalent bonds must be broken.",
      breaksDown:
        "Chapatis do not conduct electricity, but graphite does: its fourth outer electron is delocalised and free to move along the layers, while diamond has no delocalised electrons. Graphite layers are also just one atom thick.",
    },
  ],
  "bonding-metallic": [
    {
      title: "Sea of delocalised electrons = the crowd flowing round hawker tables",
      text: "At a hawker centre, the tables stand in neat fixed rows while the crowd flows freely between all of them, belonging to no particular table. The tables are the **positive metal ions in layers** and the crowd is the **sea of delocalised electrons**. **Metallic bonding** is the **strong electrostatic attraction between the positive ions and the delocalised electrons**. When a voltage pushes the crowd one way, the electrons drift through the structure and **carry charge**, so metals are **good electrical conductors**.",
      breaksDown:
        "People are not attracted to tables, but electrons are attracted to the positive ions; that attraction is the bond. The ions are also vibrating, not perfectly still.",
    },
    {
      title: "Malleable and ductile = a dance line that shifts without breaking",
      text: "In a K-pop formation, a whole row of dancers can glide sideways past the row behind and the routine carries on, because the music fills the whole stage and moves with them. In a metal, the **layers of positive ions slide over each other** when hammered or drawn into wire, and the **delocalised electrons move with them**, so the **metallic bonding is maintained** and the metal bends instead of snapping. That is why copper is **ductile** enough for wires.",
      breaksDown:
        "Dancers move on purpose; ions only move when a force is applied. And music does not hold dancers together, whereas the electrons' attraction to the ions really is the bond.",
    },
    {
      title: "Alloys are harder = suitcases jamming a rush-hour MRT platform",
      text: "At rush hour, lines of commuters of similar size can shuffle past each other fairly easily, but a few big suitcases dotted around jam everything. In an **alloy**, atoms of a **different size** (the suitcases) **disrupt the regular layers**, so the **layers cannot slide over each other as easily** and the alloy is **harder and stronger** than the pure metal. Steel is harder than pure iron; brass is harder than copper.",
      breaksDown:
        "What matters is that the added atoms are a different size, not necessarily bigger: carbon atoms in steel are actually smaller than iron atoms, but they still distort the layers.",
    },
  ],
};
