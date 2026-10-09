import type { QA, QuestionSet } from "../../types";

export const qa: QuestionSet<QA> = {
  id: "written-organic",
  title: "Written answers · Organic Chemistry",
  subtitle: "Isomers, crude oil, cracking, tests, ethanol, esters and polymers — Edexcel-style mark schemes",
  topic: "organic",
  questions: [
    {
      id: "or-w01",
      topic: "organic",
      section: "organic-intro",
      difficulty: "warmup",
      question:
        "The molecular formula C₄H₈ can represent several alkenes.\n(a) Explain what is meant by the term structural isomers.\n(b) Name two alkenes with the formula C₄H₈ and describe, in words, how their structures differ.",
      marks: 3,
      hints: [
        "Isomers have something the same and something different — which kind of formula is which?",
        "For C₄H₈ think about where the C=C double bond can be along a four-carbon chain.",
      ],
      modelAnswer:
        "(a) Structural isomers are compounds with the same molecular formula but a different structural formula (the atoms are arranged differently).\n(b) But-1-ene and but-2-ene. In but-1-ene the double bond is between carbon 1 and carbon 2 (at the end of the chain), whereas in but-2-ene the double bond is between carbon 2 and carbon 3, in the middle of the chain — the position of the double bond is different.",
      markScheme: [
        {
          point: "Same molecular formula but different structural/displayed formula (different arrangement of atoms)",
          keywords: [
            "same molecular formula+different structural",
            "same molecular formula+different arrangement",
            "same molecular formula+arranged differently",
            "same molecular formula+different displayed",
            "same molecular formula+different structure",
            "same formula+different structural formula",
            "same formula+different arrangement",
            "same formula+arranged differently",
          ],
          feedback:
            "The definition needs BOTH halves: the same molecular formula AND a different structural (or displayed) formula. \"Same formula, different structure\" on its own is often too vague.",
        },
        {
          point: "Two correct names: any two of but-1-ene, but-2-ene, methylpropene",
          keywords: ["but 1 ene+but 2 ene", "but 1 ene+methylpropene", "but 2 ene+methylpropene", "1 butene+2 butene", "but 1 ene+methyl propene", "but 2 ene+methyl propene"],
          feedback:
            "Name them with the position number: but-1-ene (CH₂=CHCH₂CH₃) and but-2-ene (CH₃CH=CHCH₃). Methylpropene is also an alkene isomer of C₄H₈.",
        },
        {
          point: "Difference described: position of the C=C double bond is different (or one has a branched chain)",
          keywords: ["position", "double bond+carbon 1", "double bond+carbon 2", "double bond+end", "double bond+middle", "double bond+different place", "branch", "carbon 1+carbon 2", "first carbon", "second carbon", "carbon 1", "carbon 2", "middle", "end of the chain", "double bond+differ"],
          feedback:
            "Say what is different: the C=C double bond is in a different position — between carbons 1 and 2 in but-1-ene, between carbons 2 and 3 in but-2-ene (methylpropene has a branched chain).",
        },
      ],
      commonError:
        "Writing \"same formula, different structure\" without saying MOLECULAR formula, or naming \"butene\" twice without position numbers.",
      strategy: "Recall the definition",
    },
    {
      id: "or-w02",
      topic: "organic",
      section: "organic-crude",
      difficulty: "warmup",
      question: "Describe how crude oil is separated into fractions in a fractionating column.",
      marks: 4,
      hints: [
        "Start with what happens to the crude oil before it enters the column.",
        "How does the temperature change from the bottom of the column to the top?",
        "Where does each hydrocarbon condense, and how is that linked to its boiling point?",
      ],
      modelAnswer:
        "The crude oil is heated in a furnace so that it evaporates (vaporises) and the vapour is fed into the bottom of the column. There is a temperature gradient: the column is hot at the bottom and cooler at the top. The vapours rise up the column, and each hydrocarbon condenses when it reaches a level where the temperature is below its boiling point. Hydrocarbons with low boiling points (short chains) are collected near the top, and those with high boiling points (long chains) are collected near the bottom, so the different fractions are tapped off at different heights.",
      markScheme: [
        {
          point: "Crude oil is heated/vaporised (evaporated) before entering the column",
          keywords: ["vaporis", "vapour", "evaporat", "heated", "boil", "heat the crude", "furnace", "turns into gas", "turned into a gas"],
          feedback: "First the crude oil is heated in a furnace so that most of it turns into vapour before it goes into the column.",
        },
        {
          point: "Temperature gradient: column hot at the bottom and cooler at the top",
          keywords: ["temperature gradient", "hot+bottom", "hotter+bottom", "cool+top", "cooler+top", "colder+top", "cold+top", "temperature decreases", "temperature falls", "temperature drops"],
          feedback: "State the temperature gradient: the column is hottest at the bottom and coolest at the top.",
        },
        {
          point: "Vapours rise and each hydrocarbon condenses where the temperature is below its boiling point",
          keywords: ["condens+boiling point", "condens+boiling points", "condense", "condensing", "turn back into liquid", "turns back into a liquid", "cool+liquid"],
          feedback: "Explain the separation: the vapours rise and each one condenses (turns back into liquid) at the level where the temperature has dropped below its boiling point.",
        },
        {
          point: "Low boiling point / short-chain fractions collected at the top, high boiling point / long-chain ones at the bottom (tapped off at different heights)",
          keywords: ["low boiling point+top", "lower boiling point+top", "short+top", "smaller+top", "long+bottom", "high boiling point+bottom", "higher boiling point+bottom", "different heights", "different levels", "refinery gases+top", "bitumen+bottom"],
          feedback: "Finish by linking to position: low-boiling, short-chain fractions are collected at the top; high-boiling, long-chain fractions lower down (bitumen at the bottom).",
        },
      ],
      commonError:
        "Saying the column is hot at the top, or that the fractions \"boil off\" at the top — they CONDENSE at the level where the temperature is below their boiling point.",
      strategy: "Follow the method step by step",
    },
    {
      id: "or-w03",
      topic: "organic",
      section: "organic-crude",
      difficulty: "core",
      question:
        "A faulty gas fire burns methane in a room with poor ventilation, and carbon monoxide is produced.\n(a) Write a balanced equation for the reaction that forms carbon monoxide and water from methane.\n(b) Explain why the carbon monoxide is formed and why it is dangerous to people in the room.",
      marks: 4,
      hints: [
        "Count C, H and O carefully: CH₄ + O₂ → CO + H₂O needs doubling to balance oxygen.",
        "Why is there not enough of something for complete combustion?",
        "How does the blood carry oxygen, and what does CO do to that?",
      ],
      modelAnswer:
        "(a) 2CH₄ + 3O₂ → 2CO + 4H₂O\n(b) There is not enough oxygen (a limited supply of air), so incomplete combustion takes place. Carbon monoxide is toxic because it combines with haemoglobin in the red blood cells, so the blood can carry less oxygen around the body.",
      markScheme: [
        {
          point: "Balanced equation: 2CH₄ + 3O₂ → 2CO + 4H₂O (or CH₄ + 1½O₂ → CO + 2H₂O)",
          keywords: ["2ch4+3o2+2co+4h2o", "ch4+1.5o2+co+2h2o", "ch4+1.5 o2+co+2h2o"],
          feedback: "Balance it: 2CH₄ + 3O₂ → 2CO + 4H₂O. Check: C 2 = 2; H 8 = 8; O 6 = 2 + 4.",
        },
        {
          point: "Insufficient oxygen (limited supply of air) so incomplete combustion",
          keywords: ["not enough oxygen", "insufficient oxygen", "limited oxygen", "lack of oxygen", "limited supply", "too little oxygen", "not enough air", "incomplete combustion", "incomplete", "shortage of oxygen", "little oxygen"],
          feedback: "Carbon monoxide forms because there is not enough oxygen for complete combustion — incomplete combustion.",
        },
        {
          point: "Carbon monoxide combines with / binds to haemoglobin (in red blood cells)",
          keywords: ["haemoglobin", "red blood cell", "binds+blood", "attaches+blood"],
          feedback: "The key word is haemoglobin: CO combines with the haemoglobin in red blood cells.",
        },
        {
          point: "So the blood carries less oxygen (reduced oxygen transport to cells)",
          keywords: ["less oxygen", "carry oxygen", "carrying oxygen", "carries oxygen", "oxygen+carried", "oxygen+transport", "cannot carry oxygen", "cant carry oxygen", "cant transport", "cannot transport", "cant carry", "cannot carry", "unable to carry", "unable to transport", "prevents+oxygen", "stops+oxygen", "oxygen+reduced", "reduces+oxygen", "deprived", "starved of oxygen"],
          feedback: "Finish the explanation: because CO is bound to haemoglobin, the blood can carry less oxygen around the body — this can cause unconsciousness and death.",
        },
      ],
      commonError: "Writing only \"carbon monoxide is poisonous\" — the mark needs haemoglobin AND less oxygen carried.",
      strategy: "Balance the equation",
    },
    {
      id: "or-w04",
      topic: "organic",
      section: "organic-crude",
      difficulty: "challenge",
      question:
        "Tetradecane, C₁₄H₃₀, is cracked to form octane, C₈H₁₈, and ethene as the only products.\n(a) Write a balanced equation for this reaction.\n(b) State the conditions used for catalytic cracking.\n(c) Give two reasons why oil companies crack long-chain alkanes.",
      marks: 5,
      hints: [
        "Work out how many C and H atoms are left after octane forms, then share them out as C₂H₄ molecules.",
        "Cracking needs a high temperature and a catalyst made of an oxide.",
        "Think about supply versus demand, and what the alkenes are used to make.",
      ],
      modelAnswer:
        "(a) C₁₄H₃₀ → C₈H₁₈ + 3C₂H₄\n(b) A silica or alumina (aluminium oxide) catalyst at a temperature of about 600–700 °C.\n(c) There is a greater demand for short-chain hydrocarbons such as petrol than crude oil supplies, while long-chain fractions are less useful and are in surplus, so cracking matches supply to demand. Cracking also produces alkenes such as ethene, which are used to make polymers (plastics).",
      markScheme: [
        {
          point: "Balanced equation C₁₄H₃₀ → C₈H₁₈ + 3C₂H₄",
          keywords: ["c8h18+3c2h4", "c8h18+3 c2h4"],
          feedback: "C left = 14 − 8 = 6 and H left = 30 − 18 = 12, i.e. C₆H₁₂ = 3 × C₂H₄. So C₁₄H₃₀ → C₈H₁₈ + 3C₂H₄.",
        },
        {
          point: "Catalyst: silica or alumina (aluminium oxide)",
          keywords: ["silica", "alumina", "aluminium oxide", "al2o3", "sio2", "silicon dioxide", "zeolite"],
          feedback: "The catalyst is silica or alumina (aluminium oxide).",
        },
        {
          point: "Temperature about 600–700 °C",
          keywords: ["600", "650", "700", "550", "750"],
          feedback: "Catalytic cracking runs at about 600–700 °C — state a number with units.",
        },
        {
          point: "Demand for short-chain hydrocarbons (e.g. petrol) is greater than supply / long-chain fractions are less useful (surplus)",
          keywords: ["demand", "more useful", "shortage", "surplus", "less useful", "not much use", "high demand", "more petrol", "more fuel", "in short supply"],
          feedback: "Reason 1 is supply and demand: crude oil contains more long-chain fractions than needed and not enough short-chain ones like petrol.",
        },
        {
          point: "Produces alkenes (e.g. ethene) used to make polymers/plastics (or other chemicals such as ethanol)",
          keywords: ["polymer", "plastic", "poly", "make ethanol", "starting material", "feedstock", "raw material"],
          feedback: "Reason 2: cracking makes alkenes, which are needed as the starting materials for polymers (plastics) and chemicals such as ethanol.",
        },
      ],
      commonError:
        "Giving \"to make shorter molecules\" as a reason — that is what cracking does, not why. Link it to demand for petrol and alkenes for polymers.",
      strategy: "Balance the equation",
    },
    {
      id: "or-w05",
      topic: "organic",
      section: "organic-hydrocarbons",
      difficulty: "core",
      question:
        "A student has two unlabelled colourless liquids. One is hexane and the other is hex-1-ene.\n(a) Describe a chemical test to identify which liquid is hex-1-ene. Give the result for each liquid.\n(b) In bright ultraviolet light, hexane will also slowly react with the reagent used in (a). Name the type of reaction that takes place.",
      marks: 4,
      hints: [
        "Which reagent reacts with a C=C bond in an addition reaction?",
        "Give the colour BEFORE and AFTER for the liquid that reacts.",
        "In UV light an alkane swaps one of its H atoms for a halogen atom.",
      ],
      modelAnswer:
        "(a) Add a few drops of bromine water to each liquid and shake. With hex-1-ene the bromine water turns from orange to colourless. With hexane the bromine water stays orange.\n(b) Substitution (a hydrogen atom is replaced by a bromine atom, forming HBr).",
      markScheme: [
        {
          point: "Add bromine water (and shake)",
          keywords: ["bromine water", "bromine", "br2"],
          feedback: "The test for a C=C double bond is to add bromine water and shake.",
        },
        {
          point: "Hex-1-ene: bromine water changes from orange to colourless (decolourised)",
          keywords: ["orange to colourless", "orange yields colourless", "orange+decolouris", "decolouris", "turns colourless", "becomes colourless", "goes colourless", "orange+colourless"],
          feedback: "The alkene decolourises bromine water: orange to colourless. Give both colours, and say \"colourless\", not \"clear\".",
        },
        {
          point: "Hexane: stays orange (no change)",
          keywords: ["stays orange", "remains orange", "remain orange", "still orange", "stay orange", "no change", "no colour change", "does not change", "doesnt change", "no reaction", "leaves it orange", "left orange", "stays the same", "remains the same", "keeps+orange"],
          feedback: "Give the result for the alkane too: bromine water stays orange because hexane has no C=C to add to.",
        },
        {
          point: "Substitution (free-radical substitution accepted)",
          keywords: ["substitution", "substitut"],
          feedback: "In UV light an alkane reacts by substitution: an H atom is replaced by a Br atom, e.g. C₆H₁₄ + Br₂ → C₆H₁₃Br + HBr.",
        },
      ],
      commonError: "Writing \"goes clear\" instead of colourless, or giving only the alkene's result and forgetting what happens with hexane.",
      strategy: "Compare and contrast",
    },
    {
      id: "or-w06",
      topic: "organic",
      section: "organic-acids-esters",
      difficulty: "core",
      question:
        "Methanol reacts with propanoic acid to form an ester.\n(a) Name the ester formed.\n(b) Write an equation for the reaction, using structural formulae.\n(c) Name the catalyst used.\n(d) Give one use of esters.",
      marks: 4,
      hints: [
        "Alcohol part first (-yl), acid part second (-oate).",
        "Propanoic acid is CH₃CH₂COOH and methanol is CH₃OH; esterification also makes water.",
        "The catalyst is a strong acid used in concentrated form.",
      ],
      modelAnswer:
        "(a) Methyl propanoate.\n(b) CH₃CH₂COOH + CH₃OH ⇌ CH₃CH₂COOCH₃ + H₂O\n(c) Concentrated sulfuric acid.\n(d) Esters are used as food flavourings and in perfumes.",
      markScheme: [
        {
          point: "Methyl propanoate",
          keywords: ["methyl propanoate", "methylpropanoate"],
          feedback: "The alcohol (methanol) gives \"methyl\" and the acid (propanoic acid) gives \"propanoate\": methyl propanoate.",
        },
        {
          point: "CH₃CH₂COOH + CH₃OH → CH₃CH₂COOCH₃ + H₂O",
          keywords: ["ch3ch2cooch3+h2o", "c2h5cooch3+h2o", "ch3ch2co2ch3+h2o", "c2h5co2ch3+h2o"],
          feedback: "Water is lost between –COOH and –OH: CH₃CH₂COOH + CH₃OH ⇌ CH₃CH₂COOCH₃ + H₂O.",
        },
        {
          point: "Concentrated sulfuric acid",
          keywords: ["concentrated sulfuric", "conc sulfuric", "conc. sulfuric", "concentrated h2so4", "conc h2so4", "sulfuric acid", "h2so4"],
          feedback: "The catalyst is (a few drops of) concentrated sulfuric acid.",
        },
        {
          point: "Use: food flavourings or perfumes (or solvents)",
          keywords: ["flavour", "perfume", "fragrance", "scent", "solvent", "food", "cosmetic", "nail varnish"],
          feedback: "Esters have sweet, fruity smells, so they are used as food flavourings and in perfumes.",
        },
      ],
      commonError:
        "Naming the ester \"propyl methanoate\" (the wrong way round) or forgetting the water product in the equation.",
      strategy: "Apply it to a new situation",
    },
    {
      id: "or-w07",
      topic: "organic",
      section: "organic-alcohols",
      difficulty: "challenge",
      question:
        "A country has large areas of farmland where sugar cane grows well, but it has no crude oil. It wants to make ethanol on a large scale.\nEvaluate the two industrial methods — fermentation, and hydration of ethene — and recommend which the country should use.",
      marks: 6,
      hints: [
        "Compare raw materials: where does each one come from, and will it run out?",
        "Compare conditions, rate, batch v continuous, and purity of the product.",
        "Finish with a justified recommendation that uses the information about this country.",
      ],
      modelAnswer:
        "Fermentation uses sugar from crops, which is a renewable resource that can be regrown. It works at a low temperature (about 30 °C) and normal pressure, so it uses less energy. However, it is slow and is a batch process, and it gives impure ethanol (about 15%) that must be separated by fractional distillation. Hydration of ethene is fast and continuous and gives pure ethanol, but it needs 300 °C and 60–70 atm, which uses a lot of energy, and the ethene comes from crude oil, which is non-renewable and would have to be imported by this country. Overall I recommend fermentation, because the country can grow its own sugar cane and has no oil.",
      markScheme: [
        {
          point: "Fermentation uses a renewable raw material (sugar from crops)",
          keywords: ["is renewable", "are renewable", "a renewable", "regrow", "grown again", "regrown", "sustainable", "can be replaced", "replenish", "renewable crop", "renewable resource from"],
          feedback: "Fermentation's big advantage: its raw material (sugar from crops) is renewable — it can be regrown.",
        },
        {
          point: "Fermentation uses a low temperature (about 30 °C) / normal pressure, so lower energy costs",
          keywords: ["30", "low temperature", "lower temperature", "less energy", "low energy", "room temperature", "normal pressure", "atmospheric pressure", "35", "37"],
          feedback: "Fermentation runs at only about 30 °C and atmospheric pressure, so its energy costs are low.",
        },
        {
          point: "Fermentation is slow / batch; hydration is fast / continuous",
          keywords: ["slow", "batch", "continuous", "faster", "quicker", "fast"],
          feedback: "Compare the rate: fermentation is a slow batch process; hydration is fast and continuous.",
        },
        {
          point: "Fermentation gives impure (dilute) ethanol that must be distilled; hydration gives pure ethanol",
          keywords: ["impure", "distil", "purer", "pure ethanol", "higher purity", "15 percent", "dilute", "100 percent", "very pure", "pure product", "purity"],
          feedback: "Compare purity: fermentation gives a dilute, impure solution (about 15%) that needs fractional distillation; hydration gives pure ethanol.",
        },
        {
          point: "Hydration needs high temperature/pressure (300 °C, 60–70 atm) and uses ethene from non-renewable crude oil (would have to be imported)",
          keywords: ["non renewable", "nonrenewable", "finite", "run out", "import", "not renewable", "300", "60 atm", "70 atm", "high pressure", "high temperature"],
          feedback: "Hydration's drawbacks: it needs 300 °C and 60–70 atm (high energy), and its ethene comes from crude oil, which is non-renewable and this country would have to import.",
        },
        {
          point: "Justified conclusion: fermentation, because the country can grow sugar cane and has no oil",
          keywords: ["recommend fermentation", "choose fermentation", "use fermentation", "fermentation better", "fermentation the better", "fermentation would be better", "fermentation best", "fermentation the best", "fermentation more suitable", "fermentation most suitable", "fermentation should", "go with fermentation", "pick fermentation", "fermentation the most suitable", "fermentation method is better", "fermentation is recommended"],
          feedback: "An \"evaluate\" question needs a conclusion: recommend fermentation, using the context — plenty of farmland for sugar cane and no crude oil.",
        },
      ],
      commonError:
        "Listing facts about only one method, or ending without a recommendation linked to the country's situation.",
      strategy: "Compare and contrast",
    },
    {
      id: "or-w08",
      topic: "organic",
      section: "organic-alcohols",
      difficulty: "core",
      question:
        "A student ferments 36 g of glucose using yeast.\nC₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\n(a) Calculate the maximum mass of ethanol that could form. (Mr glucose = 180; Ar C = 12, H = 1, O = 16)\n(b) Calculate the volume of carbon dioxide produced at room temperature and pressure.\n(c) Explain why air must be kept out of the fermentation vessel.",
      marks: 5,
      hints: [
        "Moles of glucose = mass ÷ Mr.",
        "Use the 1 : 2 ratio from the equation for both products; then mass = moles × Mr, volume = moles × 24 dm³.",
        "What would happen to the ethanol if oxygen (and microbes) could get in?",
      ],
      modelAnswer:
        "(a) Moles of glucose = 36 ÷ 180 = 0.20 mol. Moles of ethanol = 2 × 0.20 = 0.40 mol. Mr of C₂H₅OH = 46, so mass = 0.40 × 46 = 18.4 g.\n(b) Moles of CO₂ = 0.40 mol, so volume = 0.40 × 24 = 9.6 dm³.\n(c) If oxygen is present the ethanol would be oxidised to ethanoic acid (vinegar), so the yield of ethanol falls.",
      markScheme: [
        {
          point: "Moles of glucose = 36 ÷ 180 = 0.20 mol",
          keywords: ["0.2", "0.20"],
          feedback: "Start with moles: 36 ÷ 180 = 0.20 mol of glucose.",
        },
        {
          point: "Moles of ethanol = 2 × 0.20 = 0.40 mol (and Mr ethanol = 46)",
          keywords: ["0.4", "0.40", "46"],
          feedback: "Use the ratio 1 : 2 — 0.40 mol of ethanol forms. Mr C₂H₅OH = (2 × 12) + (6 × 1) + 16 = 46.",
        },
        {
          point: "Mass of ethanol = 0.40 × 46 = 18.4 g",
          keywords: ["18.4", "18"],
          feedback: "Mass = moles × Mr = 0.40 × 46 = 18.4 g.",
        },
        {
          point: "Volume of CO₂ = 0.40 × 24 = 9.6 dm³ (9600 cm³)",
          keywords: ["9.6", "9600"],
          feedback: "CO₂ is also 0.40 mol (1 : 2 ratio); volume = 0.40 × 24 = 9.6 dm³.",
        },
        {
          point: "Oxygen would oxidise the ethanol to ethanoic acid (vinegar)",
          keywords: ["ethanoic acid", "vinegar", "oxidis", "acetic acid"],
          feedback: "Air is kept out because oxygen would allow the ethanol to be oxidised to ethanoic acid (vinegar). (Also the yeast would respire aerobically instead of making ethanol.)",
        },
      ],
      commonError: "Forgetting the 1 : 2 ratio (giving 9.2 g of ethanol and 4.8 dm³ of CO₂), or saying air is kept out \"to stop contamination\" without naming ethanoic acid.",
      strategy: "Use the mole ratio",
    },
    {
      id: "or-w09",
      topic: "organic",
      section: "organic-acids-esters",
      difficulty: "core",
      question:
        "Describe how a student could prepare a small sample of the ester propyl ethanoate in the laboratory, and how they could show that an ester has formed.",
      marks: 5,
      hints: [
        "Which alcohol and which carboxylic acid make propyl ethanoate?",
        "Name the catalyst and how the mixture is heated safely.",
        "What is the mixture poured into at the end, and why? How do you detect an ester?",
      ],
      modelAnswer:
        "Mix about 1 cm³ of propan-1-ol (propanol) with 1 cm³ of ethanoic acid in a test tube. Add a few drops of concentrated sulfuric acid as a catalyst. Warm the mixture in a hot water bath for a few minutes (no naked flame, as the chemicals are flammable). Pour the mixture into a beaker of sodium carbonate solution to neutralise the leftover acids; the ester forms a layer on top. Carefully waft the smell towards your nose — a sweet, fruity smell shows that an ester has formed.",
      markScheme: [
        {
          point: "Mix propanol (propan-1-ol) with ethanoic acid",
          keywords: ["propanol+ethanoic", "propan 1 ol+ethanoic", "propan1ol+ethanoic", "propanol+acetic", "propan 1 ol+acetic"],
          feedback: "The reagents are propan-1-ol (propanol) — giving \"propyl\" — and ethanoic acid — giving \"ethanoate\".",
        },
        {
          point: "Add a few drops of concentrated sulfuric acid (catalyst)",
          keywords: ["sulfuric", "h2so4"],
          feedback: "Add a few drops of concentrated sulfuric acid as a catalyst (wear goggles — it is corrosive).",
        },
        {
          point: "Warm/heat the mixture (in a water bath)",
          keywords: ["water bath", "warm", "heat"],
          feedback: "The mixture is warmed, ideally in a hot water bath — no naked flame, as the alcohol and ester are flammable.",
        },
        {
          point: "Pour into sodium carbonate solution to neutralise the remaining acid",
          keywords: ["sodium carbonate", "na2co3", "sodium hydrogencarbonate", "neutralis", "carbonate solution"],
          feedback: "Pour the product into sodium carbonate solution: it neutralises the leftover ethanoic and sulfuric acids, so their smell does not hide the ester.",
        },
        {
          point: "Smell (by wafting): sweet / fruity smell shows an ester",
          keywords: ["fruity", "sweet", "pear", "waft", "pleasant smell", "nice smell", "fruit"],
          feedback: "Detect the ester by carefully wafting the smell: esters have a sweet, fruity smell.",
        },
      ],
      commonError:
        "Using propanoic acid and ethanol (that makes ethyl propanoate), or forgetting to say why the sodium carbonate is used.",
      strategy: "Follow the method step by step",
    },
    {
      id: "or-w10",
      topic: "organic",
      section: "organic-polymers",
      difficulty: "challenge",
      question:
        "Poly(propene) is made by addition polymerisation. A polyester is made by condensation polymerisation.\n(a) Compare how these two types of polymerisation take place, referring to the monomers and the products.\n(b) Explain one advantage of biopolyesters over poly(propene) when the plastics are thrown away.",
      marks: 5,
      hints: [
        "What feature must an addition monomer have? How many products form?",
        "A polyester needs two different monomers — each with how many functional groups? What small molecule is lost?",
        "What happens to poly(propene) in landfill, and what can microorganisms do to biopolyesters?",
      ],
      modelAnswer:
        "(a) In addition polymerisation the monomer (propene) is an alkene with a C=C double bond; the double bonds open up and the monomers join together, so the polymer is the only product. In condensation polymerisation two different monomers are used — a dicarboxylic acid and a diol, each with two functional groups; they join by forming ester links, and a small molecule, water, is eliminated each time a link forms.\n(b) Biopolyesters are biodegradable — they can be broken down by microorganisms (bacteria) — whereas poly(propene) is inert and non-biodegradable, so it stays in landfill for hundreds of years.",
      markScheme: [
        {
          point: "Addition: monomer has a C=C double bond (an alkene / unsaturated), which opens",
          keywords: ["double bond", "alkene", "unsaturated", "double bonds", "c+bond+break", "c+bond+open", "c+bond+propene"],
          feedback: "Addition monomers are alkenes: they contain a C=C double bond, which opens up to link the monomers.",
        },
        {
          point: "Addition: the polymer is the only product (no other product)",
          keywords: ["only product", "one product", "no other product", "no by product", "no byproduct", "polymer only", "only the polymer", "single product", "nothing else", "no other products"],
          feedback: "In addition polymerisation nothing is lost — the polymer is the only product.",
        },
        {
          point: "Condensation: two different monomers — a dicarboxylic acid and a diol (each with two functional groups)",
          keywords: ["dicarboxylic", "diol", "two different monomers", "two functional groups", "two types of monomer", "2 different monomers"],
          feedback: "A polyester is made from two different monomers: a dicarboxylic acid and a diol, each with a functional group at both ends.",
        },
        {
          point: "Condensation: a small molecule (water) is eliminated as each link forms",
          keywords: ["water", "h2o", "small molecule"],
          feedback: "Each time an ester link forms, a small molecule — water — is eliminated. That is what \"condensation\" means here.",
        },
        {
          point: "Biopolyesters are biodegradable (broken down by microorganisms), unlike inert poly(propene) which persists in landfill",
          keywords: ["biodegrad", "microorganism", "microbe", "bacteria", "decompose", "rot", "broken down", "break down", "breaks down"],
          feedback: "Biopolyesters are biodegradable: microorganisms can break their ester links, so they decompose instead of persisting in landfill like inert poly(propene).",
        },
      ],
      commonError:
        "Saying both types \"join monomers together\" without the differences: C=C monomer with a single product versus two bifunctional monomers with water eliminated.",
      strategy: "Compare and contrast",
    },
  ],
};
