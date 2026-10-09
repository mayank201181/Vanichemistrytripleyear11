import type { QA, QuestionSet } from "../../types";

const questions: QA[] = [
  {
    id: "bd-w01",
    topic: "bonding",
    section: "bonding-ionic",
    difficulty: "core",
    question:
      "Calcium (group 2) reacts with chlorine (group 7) to form the ionic compound calcium chloride. Describe, in terms of electrons, how calcium chloride is formed. Include the charges on the ions and the formula of the compound in your answer.",
    marks: 5,
    hints: [
      "How many electrons are in the outer shell of a calcium atom? Of a chlorine atom?",
      "Which atom loses electrons and which gains them? How many chlorine atoms does one calcium atom need?",
      "Finish with the electronic configuration the ions end up with.",
    ],
    modelAnswer:
      "Electrons are transferred from calcium to chlorine. Each calcium atom loses its 2 outer electrons to form a Ca²⁺ ion. Each chlorine atom gains 1 electron to form a Cl⁻ ion, so one calcium atom gives one electron to each of two chlorine atoms. The ions are Ca²⁺ and Cl⁻ and the formula is CaCl₂. Both ions now have a full outer shell (2,8,8), the electronic configuration of the noble gas argon.",
    markScheme: [
      {
        point: "Each calcium atom loses 2 (outer-shell) electrons",
        keywords: ["loses 2", "lose 2", "loses two", "lose two", "loses its 2", "loses its two", "gives away 2", "gives 2 electrons", "transfers 2", "transfers two", "donates 2", "donates two", "2 electrons are lost", "two electrons are lost", "gives its two", "gives its 2", "two outer electrons", "2 outer electrons", "lost 2", "lost two", "loss of 2", "loss of two"],
        feedback: "Calcium is in group 2, so each atom loses its two outer-shell electrons. Say 'loses 2 electrons' clearly.",
      },
      {
        point: "Each chlorine atom gains 1 electron",
        keywords: ["gains 1", "gain 1", "gains one", "gain one", "gains an electron", "gain an electron", "accepts 1", "accepts one", "accepts an electron", "receives one", "receives 1", "receives an electron", "takes one electron", "1 electron each", "one electron each", "one to each", "1 to each", "one each", "each chlorine+one electron", "each chlorine+1 electron", "gained 1", "gained one"],
        feedback: "Chlorine (group 7) has 7 outer electrons, so each atom gains one electron to reach 8.",
      },
      {
        point: "Ions formed are Ca²⁺ and Cl⁻",
        keywords: ["ca2", "ca 2", "2 ion", "calcium 2", "cl ion", "cl ions", "charge of 2", "2 charge", "ca2 and cl", "ca2+cl"],
        feedback: "State the ions with their charges: Ca²⁺ and Cl⁻. The charge comes from the number of electrons lost or gained.",
      },
      {
        point: "Two chlorine atoms/chloride ions per calcium, so the formula is CaCl₂",
        keywords: ["cacl2", "cacl 2", "two chlorine", "2 chlorine", "two chloride", "2 chloride", "two cl", "2 cl", "2cl"],
        feedback: "One calcium atom loses 2 electrons but each chlorine gains only 1, so two chlorines are needed: CaCl₂.",
      },
      {
        point: "Both ions have full outer shells / noble gas configuration (2,8,8)",
        keywords: ["full outer", "full shell", "complete outer", "full outer shell", "stable electron", "noble gas", "2 8 8", "2,8,8", "argon", "8 electrons in", "eight electrons in", "stable octet", "octet"],
        feedback: "Finish by saying why: both ions now have a full outer shell, the stable electronic configuration of a noble gas (2,8,8 — like argon).",
      },
    ],
    commonError:
      "Writing that calcium and chlorine 'share' electrons (that is covalent bonding), or giving the formula CaCl because the charges were not balanced.",
    strategy: "Think about electrons",
  },
  {
    id: "bd-w02",
    topic: "bonding",
    section: "bonding-ionic",
    difficulty: "core",
    question:
      "Sodium chloride, NaCl, melts at 801 °C. Hydrogen chloride, HCl, melts at −114 °C and is a gas at room temperature. Explain, in terms of structure and bonding, the difference in melting points.",
    marks: 5,
    hints: [
      "Name the type of structure each substance has.",
      "For each one, which forces must be overcome to melt it? Are they strong or weak?",
      "Link the strength of the forces to the amount of energy needed.",
    ],
    modelAnswer:
      "Sodium chloride has a giant ionic lattice. There are strong electrostatic attractions between the oppositely charged Na⁺ and Cl⁻ ions acting in all directions, so a lot of energy is needed to overcome them. Hydrogen chloride is a simple molecular substance made of small HCl molecules. Only weak intermolecular forces act between the molecules, and little energy is needed to overcome them (the covalent H–Cl bonds do not break), so its melting point is much lower.",
    markScheme: [
      {
        point: "NaCl has a giant ionic lattice/structure",
        keywords: ["giant ionic", "ionic lattice", "giant lattice", "ionic structure", "lattice of ions", "giant structure", "ionic compound", "ionic bonding", "ionic bonds", "is ionic"],
        feedback: "Start by naming the structure: sodium chloride has a giant ionic lattice.",
      },
      {
        point: "Strong electrostatic attraction between oppositely charged ions",
        keywords: ["electrostatic", "oppositely charged", "opposite charges", "opposite charged", "positive and negative ions", "na+cl+attract", "ions+strong attraction", "ions+strongly attracted", "strong forces of attraction between ions", "strong attraction between ions", "strong attraction between the ions"],
        feedback: "Describe the ionic bond in exam words: strong electrostatic attraction between oppositely charged ions (in all directions).",
      },
      {
        point: "A lot of energy is needed to overcome the forces in NaCl",
        keywords: ["lot of energy", "lots of energy", "large amount of energy", "much energy", "more energy", "high energy", "great deal of energy", "large amounts of energy", "energy+overcome+strong", "requires+energy+strong"],
        feedback: "Link the forces to energy: a lot of energy is needed to overcome the many strong attractions, so the melting point is high.",
      },
      {
        point: "HCl is simple molecular / made of small molecules",
        keywords: ["simple molecular", "simple molecule", "small molecule", "covalent molecule", "molecular substance", "made of molecules", "discrete molecules", "separate molecules", "simple covalent", "hcl molecules"],
        feedback: "Name the structure of HCl: it is simple molecular (small covalent molecules).",
      },
      {
        point: "Weak intermolecular forces between HCl molecules need little energy to overcome",
        keywords: ["weak intermolecular", "intermolecular forces+weak", "intermolecular forces are weak", "weak forces between molecules", "weak forces between the molecules", "weak forces of attraction between molecules", "weak attraction between molecules", "weak attractions between the molecules", "weak van der waals"],
        feedback: "The key phrase: only weak intermolecular forces between molecules are overcome when HCl melts — the covalent bonds do not break.",
      },
    ],
    commonError:
      "Saying that the covalent bonds in HCl are weak or break when it melts. Covalent bonds are strong; melting only overcomes the weak intermolecular forces between molecules.",
    strategy: "Compare and contrast",
  },
  {
    id: "bd-w03",
    topic: "bonding",
    section: "bonding-ionic",
    difficulty: "core",
    question:
      "Lead(II) bromide is an ionic compound. Explain why solid lead(II) bromide does not conduct electricity, but molten lead(II) bromide does.",
    marks: 3,
    hints: [
      "What charged particles does lead(II) bromide contain?",
      "Can those particles move in the solid? What changes when it melts?",
    ],
    modelAnswer:
      "In the solid the Pb²⁺ and Br⁻ ions are held in fixed positions in the lattice, so they cannot move. When molten, the ions are free to move, so they can carry the charge (they move to the electrodes).",
    markScheme: [
      {
        point: "In the solid, the ions are in fixed positions / cannot move",
        keywords: ["fixed position", "fixed in place", "held in place", "held in position", "cannot move", "can't move", "unable to move", "not free to move", "not able to move", "locked in", "held rigidly", "ions are fixed", "held in a lattice", "vibrate in"],
        feedback: "Say why the solid does not conduct: the ions are held in fixed positions in the lattice and cannot move.",
      },
      {
        point: "When molten, the ions are free to move",
        keywords: ["ions are free", "ions become free", "ions are now free", "ions free to move", "ions can move", "ions move", "ions are mobile", "mobile ions", "ions move freely", "ions are able to move", "ions moving", "free moving ions", "ions can now move"],
        feedback: "When molten the IONS are free to move. Be specific — the particles that move are ions, not electrons.",
      },
      {
        point: "The ions carry the charge / current (to the electrodes)",
        keywords: ["ions carry", "ions can carry", "ions to carry", "ions which carry", "ions that carry", "ions move to", "ions flow", "ions to the electrodes", "ions conduct", "charged ions", "ions are attracted to", "they can carry", "they carry", "ions can move+carry", "ions move+carry", "ions are free+carry", "ions free to move+carry", "mobile ions+carry"],
        feedback: "Finish the explanation: the moving ions carry the charge through the liquid (towards the oppositely charged electrodes).",
      },
    ],
    commonError:
      "Writing that 'electrons are free to move' when the compound is molten. In ionic compounds it is the ions that move; that answer scores zero.",
    strategy: "Think about particles",
  },
  {
    id: "bd-w04",
    topic: "bonding",
    section: "bonding-covalent",
    difficulty: "warmup",
    question:
      "A student is asked to draw a dot-and-cross diagram for a molecule of nitrogen, N₂, showing outer electrons only. Describe what the correct diagram should show about the bonding between the atoms and the other electrons on each atom.",
    marks: 3,
    hints: [
      "Nitrogen is in group 5. How many electrons does each atom need to share to reach 8?",
      "How many outer electrons are left over on each atom after bonding?",
    ],
    modelAnswer:
      "The two atoms share three pairs of electrons, a triple bond (6 shared electrons, 3 dots and 3 crosses in the overlap). Each nitrogen atom also has one lone pair (2 non-bonding electrons). This gives each nitrogen atom 8 electrons in its outer shell, a full outer shell.",
    markScheme: [
      {
        point: "Three shared pairs of electrons / a triple bond between the atoms",
        keywords: ["three pairs", "3 pairs", "three shared", "3 shared", "triple bond", "triple covalent", "six electrons", "6 electrons", "6 shared", "six shared", "three covalent", "3 covalent", "three bonds", "3 bonds"],
        feedback: "Each N (2,5) needs 3 more electrons, so the atoms share three pairs of electrons — a triple bond (N≡N).",
      },
      {
        point: "One lone pair (2 non-bonding electrons) on each nitrogen atom",
        keywords: ["one lone pair", "1 lone pair", "a lone pair", "one non-bonding pair", "1 non-bonding pair", "a non-bonding pair", "two non-bonding", "2 non-bonding", "2 unshared", "two unshared", "one unshared pair", "two electrons left", "2 electrons left", "two electrons not used", "2 electrons not used", "one pair of non-bonding", "one pair of electrons not", "one pair of unbonded"],
        feedback: "Nitrogen has 5 outer electrons and uses 3 in bonding, leaving 2: one lone pair on each atom.",
      },
      {
        point: "Each nitrogen atom has 8 electrons in its outer shell (full outer shell)",
        keywords: ["8 electrons", "eight electrons", "8 outer", "eight outer", "full outer", "full shell", "complete outer", "outer shell is full", "outer shells are full", "octet", "stable outer"],
        feedback: "Check and state the total: 6 shared + 2 non-bonding = 8 electrons around each N, a full outer shell.",
      },
    ],
    commonError:
      "Drawing a single or double bond and then giving each N extra lone pairs to make up the numbers, or forgetting the lone pairs entirely so each N has only 6 electrons.",
    strategy: "Think about electrons",
  },
  {
    id: "bd-w05",
    topic: "bonding",
    section: "bonding-covalent",
    difficulty: "challenge",
    question:
      "Diamond and graphite are both forms of carbon with giant covalent structures. Diamond is very hard and does not conduct electricity. Graphite conducts electricity and is used as a lubricant. Explain these differences in terms of the structure and bonding of diamond and graphite.",
    marks: 6,
    hints: [
      "How many other carbon atoms is each carbon bonded to in diamond? In graphite?",
      "What happens to the carbon outer electrons that are not used in bonding?",
      "How are the layers in graphite held together?",
    ],
    modelAnswer:
      "In diamond each carbon atom is covalently bonded to four other carbon atoms in a rigid 3D network of strong bonds, which makes it very hard. All four outer electrons are used in bonding, so there are no delocalised electrons and diamond does not conduct. In graphite each carbon atom is bonded to three others in hexagonal layers. The fourth outer electron of each atom is delocalised and can move along the layers and carry charge, so graphite conducts. The layers are held together by weak forces, so the layers can slide over each other, which makes graphite slippery and useful as a lubricant.",
    markScheme: [
      {
        point: "Diamond: each carbon atom covalently bonded to four others (rigid 3D network of strong bonds)",
        keywords: ["four other", "4 other", "four carbon", "4 carbon", "four bonds", "4 bonds", "four covalent", "4 covalent", "four strong", "4 strong", "tetrahedral"],
        feedback: "Diamond: each carbon forms four strong covalent bonds to four other carbons in a rigid 3D network — that's why it is so hard.",
      },
      {
        point: "Diamond has no delocalised/free electrons (all outer electrons used in bonding)",
        keywords: ["no delocalised", "no free electrons", "no free", "no mobile", "no electrons free", "no electrons+free to move", "all+electrons+used in bonding", "all+electrons+used in bonds", "all four outer electrons", "all 4 outer electrons", "all outer electrons", "electrons are not free", "electrons are not delocalised", "no electrons can move"],
        feedback: "Diamond doesn't conduct because all four outer electrons are used in covalent bonds — there are no delocalised electrons free to move.",
      },
      {
        point: "Graphite: each carbon atom bonded to three others in (hexagonal) layers",
        keywords: ["three other", "3 other", "three carbon", "3 carbon", "three bonds", "3 bonds", "three covalent", "3 covalent", "three strong", "3 strong", "bonded to three", "bonded to 3"],
        feedback: "Graphite: each carbon bonds to only three others, forming flat hexagonal layers.",
      },
      {
        point: "Graphite: one electron per carbon is delocalised, free to move and carry charge",
        keywords: ["delocalised", "free electrons", "electrons+free to move", "electrons can move", "electrons move", "electrons+carry charge", "electrons+carry the charge", "spare electron", "fourth electron", "one electron per", "1 electron per", "mobile electrons", "sea of electrons"],
        feedback: "Graphite conducts because the fourth outer electron of each carbon is delocalised — free to move along the layers and carry charge.",
      },
      {
        point: "Weak forces between the layers",
        keywords: ["weak forces", "weak intermolecular", "weakly held", "weak attraction", "weak bonds between", "layers are weakly", "weak between", "weak van der waals", "weakly attracted", "weak force"],
        feedback: "The layers in graphite are held together only by weak forces (not covalent bonds).",
      },
      {
        point: "So the layers can slide over each other (soft/slippery — lubricant)",
        keywords: ["layers+slide", "slide over", "slide past", "slip over", "slip past", "layers+slip", "layers can move", "layers+move over"],
        feedback: "Because the forces between layers are weak, the layers can slide over each other — this makes graphite slippery, so it works as a lubricant.",
      },
    ],
    commonError:
      "Saying that graphite's layers are held by weak covalent bonds, or that graphite conducts because 'ions' or 'layers' move. The forces between layers are weak, and conduction is by delocalised electrons.",
    strategy: "Compare and contrast",
  },
  {
    id: "bd-w06",
    topic: "bonding",
    section: "bonding-metallic",
    difficulty: "core",
    question:
      "Aluminium is used, around a steel core, to make overhead power cables. Explain three properties of aluminium that make it suitable for this use. Where possible, refer to the structure and bonding in aluminium.",
    marks: 5,
    hints: [
      "Which property is essential for any cable carrying a current? Explain it with the particles in a metal.",
      "How is a metal turned into long cables? Which particles make that possible?",
      "Overhead cables hang between pylons: why would a light metal help?",
    ],
    modelAnswer:
      "Aluminium is a good conductor of electricity because its delocalised electrons are free to move through the structure and carry charge. It is ductile, so it can be drawn into long wires, because the layers of positive aluminium ions can slide over each other without the metallic bonding breaking. It also has a low density, so the cables are light and need fewer pylons to support them (it also resists corrosion because of its protective oxide layer).",
    markScheme: [
      {
        point: "Good conductor of electricity",
        keywords: ["good conductor", "conducts electricity", "conduct electricity", "electrical conductor", "conducts well", "conductivity", "conducts electric", "conductor of electricity", "conducts current"],
        feedback: "The essential property: aluminium is a good conductor of electricity.",
      },
      {
        point: "Delocalised electrons are free to move and carry charge",
        keywords: ["delocalised electrons+move", "delocalised electrons+carry", "delocalised electrons+flow", "free electrons", "electrons+free to move", "electrons can move", "electrons+carry charge", "electrons+carry the charge", "electrons can flow", "electrons flow", "sea of electrons+move", "mobile electrons"],
        feedback: "Explain the conduction: delocalised electrons are free to move through the structure and carry charge.",
      },
      {
        point: "Ductile / can be drawn into wires (malleable)",
        keywords: ["ductile", "drawn into", "drawn out", "stretched into", "pulled into", "made into wires", "made into long wires", "malleable", "shaped into wires", "bent without breaking"],
        feedback: "Cables are made by drawing metal into wires, so state that aluminium is ductile.",
      },
      {
        point: "Layers of positive ions can slide over each other (bonding maintained)",
        keywords: ["layers+slide", "slide over", "slide past", "slip over", "layers+slip", "layers can move", "ions+slide", "layers+move over"],
        feedback: "Explain ductility with particles: the layers of positive ions can slide over each other while the metallic bonding is kept.",
      },
      {
        point: "Low density / lightweight (or resists corrosion due to oxide layer)",
        keywords: ["low density", "less dense", "lightweight", "light weight", "is light", "are light", "lighter", "light metal", "low mass", "corrosion", "does not corrode", "doesnt corrode", "oxide layer", "not corrode"],
        feedback: "For overhead cables, low density matters: light cables need fewer pylons and sag less. Resistance to corrosion (protective oxide layer) also earns this mark.",
      },
    ],
    commonError:
      "Listing three properties with no explanations (max 2–3 marks), or explaining conduction with 'ions moving'. Each property needs its reason: delocalised electrons carry charge; layers of ions slide.",
    strategy: "Apply it to a new situation",
  },
  {
    id: "bd-w07",
    topic: "bonding",
    section: "bonding-metallic",
    difficulty: "challenge",
    question:
      "(Stretch) Pure iron is soft and bends easily. Steel, an alloy of iron with a small amount of carbon, is much harder. Explain, in terms of the particles present, why pure iron is soft and why steel is harder.",
    marks: 5,
    hints: [
      "Describe how the particles are arranged in a pure metal. Are they all the same size?",
      "What happens to those layers when a force is applied?",
      "What do the carbon atoms do to the regular arrangement?",
    ],
    modelAnswer:
      "In pure iron, the positive iron ions are all the same size and are arranged in regular layers. When a force is applied the layers can slide over each other easily, so iron is soft. In steel, the carbon atoms are a different size (smaller) from the iron ions. They distort and disrupt the regular layers, so the layers cannot slide over each other as easily, which makes steel harder.",
    markScheme: [
      {
        point: "Pure iron: ions/atoms the same size arranged in regular layers",
        keywords: ["regular", "same size", "layers of ions", "layers of iron", "layers of positive", "rows of", "neat layers", "orderly", "uniform", "evenly arranged"],
        feedback: "Start with the pure metal: all the iron ions are the same size, arranged in regular layers.",
      },
      {
        point: "Layers can slide over each other easily (so iron is soft)",
        keywords: ["layers+slide", "slide over", "slide past", "slip over", "slip past", "layers+slip", "layers can move", "layers+move over", "slide easily"],
        feedback: "Explain the softness: in pure iron the layers can slide over each other easily.",
      },
      {
        point: "Carbon atoms are a different size from iron ions",
        keywords: ["different size", "different sized", "different sizes", "smaller", "differently sized", "different-sized", "not the same size", "size+carbon", "atoms are smaller"],
        feedback: "The key idea about alloys: the carbon atoms are a different size from the iron ions.",
      },
      {
        point: "They disrupt/distort the regular layers",
        keywords: ["disrupt", "distort", "irregular", "disturb", "break up the layers", "out of line", "less regular", "mess up", "get in the way", "uneven"],
        feedback: "Say what the different-sized atoms do: they disrupt (distort) the regular layered arrangement.",
      },
      {
        point: "So the layers cannot slide over each other as easily (steel is harder)",
        keywords: ["cannot slide", "can't slide", "harder to slide", "less easily", "difficult to slide", "not slide", "not able to slide", "unable to slide", "prevent+sliding", "prevents+slid", "stops+slid", "stop+slid", "harder for the layers", "difficult for the layers", "less able to slide", "slide less"],
        feedback: "Complete the explanation: because the layers are disrupted they cannot slide over each other as easily, so the alloy is harder.",
      },
    ],
    commonError:
      "Saying carbon 'makes stronger bonds' or 'fills the gaps so it is denser'. The mark-scheme idea is that different-sized atoms disrupt the layers so they cannot slide as easily.",
    strategy: "Compare and contrast",
  },
  {
    id: "bd-w08",
    topic: "bonding",
    section: "bonding-metallic",
    difficulty: "challenge",
    question:
      "Gold is used to coat the electrical connectors inside mobile phones. Explain how the structure and bonding of gold allow it to conduct electricity, and suggest why gold is chosen for connectors rather than a cheaper metal such as iron.",
    marks: 4,
    hints: [
      "Describe the particles in a metal lattice.",
      "Which of those particles can move and carry the current?",
      "What happens to iron in moist air over time? Does this happen to gold?",
    ],
    modelAnswer:
      "Gold has a giant lattice of positive ions surrounded by a sea of delocalised electrons. The delocalised electrons are free to move through the structure and carry charge, so gold conducts electricity. Gold is very unreactive, so it does not corrode or react with oxygen and water; the connection stays good for a long time. Iron would rust, and the layer of rust would stop the connector conducting well.",
    markScheme: [
      {
        point: "Lattice of positive ions with a sea of delocalised electrons",
        keywords: ["positive ions", "positive metal ions", "cations", "sea of delocalised", "sea of electrons", "lattice of ions", "lattice of positive", "delocalised electrons+ions"],
        feedback: "Describe the structure: a giant lattice of positive gold ions surrounded by a sea of delocalised electrons.",
      },
      {
        point: "Delocalised electrons are free to move and carry charge",
        keywords: ["delocalised electrons+move", "delocalised electrons+carry", "delocalised electrons+flow", "free electrons", "electrons+free to move", "electrons can move", "electrons+carry charge", "electrons+carry the charge", "electrons can flow", "electrons flow", "mobile electrons"],
        feedback: "Conduction: the delocalised electrons are free to move through the structure and carry charge.",
      },
      {
        point: "Gold is unreactive / does not corrode (oxidise or tarnish)",
        keywords: ["unreactive", "not reactive", "low reactivity", "does not corrode", "doesnt corrode", "not corrode", "corrosion resistant", "resists corrosion", "does not tarnish", "doesnt tarnish", "does not oxidise", "doesnt oxidise", "inert", "not react with oxygen", "will not corrode", "wont corrode", "does not rust", "doesnt rust", "wont rust", "will not rust"],
        feedback: "The reason for gold: it is very unreactive, so it does not corrode or tarnish.",
      },
      {
        point: "Iron would rust/corrode, which would stop the connector conducting well (poor contact)",
        keywords: ["iron+rust", "iron+corrode", "iron+corrosion", "iron+oxidise", "rust+conduct", "rust+contact", "corrode+contact", "corrosion+contact", "layer of rust", "rust layer", "rusting"],
        feedback: "Compare with iron: iron rusts in moist air, and a layer of rust would stop the connector making a good electrical contact.",
      },
    ],
    commonError:
      "Saying gold conducts because its 'ions move' or 'it has free ions'. In metals the delocalised electrons carry the charge; the ions stay in the lattice.",
    strategy: "Apply it to a new situation",
  },
  {
    id: "bd-w09",
    topic: "bonding",
    section: "bonding-covalent",
    difficulty: "challenge",
    question:
      "Diamond and C₆₀ fullerene are both forms of pure carbon.\n(a) State the term used for different structural forms of the same element. (1)\n(b) Diamond melts above 3500 °C, but C₆₀ turns to a gas at about 600 °C and is soft. Explain this difference in terms of structure and bonding. (3)",
    marks: 4,
    hints: [
      "There is a special word for different forms of one element, like oxygen O₂ and ozone O₃.",
      "Which of the two is a giant structure and which is made of separate molecules?",
      "What has to be overcome when each one melts or turns to gas?",
    ],
    modelAnswer:
      "(a) Allotropes.\n(b) Diamond has a giant covalent structure: every carbon atom is covalently bonded to four others, so melting means breaking very many strong covalent bonds, which needs a lot of energy. C₆₀ is a simple molecular substance made of separate C₆₀ molecules with only weak intermolecular forces between them. Only these weak intermolecular forces are overcome (the covalent bonds inside each molecule do not break), so little energy is needed and the molecules can slide past each other, making it soft.",
    markScheme: [
      {
        point: "Allotropes",
        keywords: ["allotrop"],
        feedback: "Different structural forms of the same element are called allotropes — diamond, graphite and C₆₀ are allotropes of carbon.",
      },
      {
        point: "Diamond: giant covalent structure — many strong covalent bonds must be broken",
        keywords: ["giant covalent", "giant structure", "giant lattice", "macromolecul", "many+covalent bonds", "lots of+covalent bonds", "all+covalent bonds", "bonded to four", "bonded to 4", "4 other", "four other"],
        feedback: "Diamond is giant covalent: every atom is joined by strong covalent bonds, and melting would mean breaking a huge number of them.",
      },
      {
        point: "C₆₀ is simple molecular, with weak intermolecular forces between the molecules",
        keywords: ["intermolecular", "between molecules", "between the molecules", "simple molecul", "forces between"],
        feedback: "C₆₀ is made of separate molecules held together only by weak intermolecular forces.",
      },
      {
        point: "Little energy needed to overcome these forces (covalent bonds in C₆₀ not broken)",
        keywords: ["forces+little energy", "forces+less energy", "forces+not much energy", "forces+small amount of energy", "forces+easily overcome", "forces+easy to overcome", "bonds+not broken", "do not break", "dont break"],
        feedback: "Only the weak forces between molecules are overcome, which needs little energy — the C–C covalent bonds inside each C₆₀ molecule are not broken.",
      },
    ],
    commonError: "Saying C₆₀ has 'weak covalent bonds' or that its covalent bonds break when it turns to gas — it is the weak intermolecular forces between molecules that are overcome.",
    strategy: "Compare and contrast",
  },
];

export const qa: QuestionSet<QA> = {
  id: "written-bonding",
  title: "Written answers · Bonding & Structure",
  subtitle: "Explain properties from structure and bonding — Edexcel-style mark schemes",
  topic: "bonding",
  questions,
};
