import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "inorganic-group1": [
    {
      title: "Reactivity increases down Group 1 = Mum calling across a hawker centre",
      text: "Your mum calls you from across a packed hawker centre. If you're sitting next to her, you hear her clearly; if you're far away with crowds in between, her voice barely reaches you and you wander off easily. Mum is the **nucleus**, you are the **outer electron**, the distance is the **extra shells** and the crowd is **shielding** by inner electrons. Going down Group 1: **further, more shielded, weaker attraction, electron lost more easily** — so the metal is more reactive.",
      breaksDown:
        "Mum's voice also gets louder down the group (the nuclear charge increases), but the extra distance and shielding outweigh it; and electrons are not 'wandering off' by choice — they are removed in a reaction.",
    },
    {
      title: "Same products, more drama = siblings with one family recipe",
      text: "Think of Group 1 as siblings who all cook the same family dal recipe, just with rising levels of drama: lithium calmly, sodium in a rush, potassium setting off the smoke alarm. Every alkali metal + water makes the same two products: a **metal hydroxide** (alkaline solution) and **hydrogen**, e.g. 2Na + 2H₂O → 2NaOH + H₂. So for an unknown sibling like **rubidium**, predict the same products (RbOH + H₂) and an even **more violent** reaction.",
      breaksDown:
        "Siblings can break family patterns, but group trends in chemistry are reliable because each metal loses one outer electron in exactly the same way.",
    },
    {
      title: "Stored under oil = keeping a cut apple in cling film",
      text: "A freshly sliced apple looks perfect, then turns brown in the air. A freshly cut alkali metal is shiny but quickly **tarnishes** because it reacts with **oxygen** in the air. Wrapping the apple in cling film keeps the air off; storing the metal **under oil** keeps away **oxygen and water vapour**, so it can't react.",
      breaksDown:
        "Apple browning is caused by enzymes in the fruit, whereas the metal reacts directly with oxygen and water — and far more vigorously.",
    },
  ],
  "inorganic-group7": [
    {
      title: "Reactivity decreases down Group 7 = a wireless charger's reach",
      text: "A wireless charger only works if your phone sits right on the pad; lift it a few centimetres and the pull fades. A halogen reacts by **pulling in one extra electron**. In fluorine the outer shell is close to the nucleus (phone on the pad), so the pull is strong. Down the group the outer shell is **further away** with **more shielding**, so the **attraction for an incoming electron is weaker** — reactivity **decreases**, the reverse of Group 1.",
      breaksDown:
        "A charger transfers energy, not electrons, and has no 'shielding' — the analogy only shows how a pull weakens with distance.",
    },
    {
      title: "Displacement = the stronger netball player wins the ball",
      text: "In netball, a stronger player can intercept the ball from a weaker one, but not the other way round. The ball is the **electron**. **Chlorine** pulls electrons more strongly than bromine, so Cl₂ snatches them from **bromide ions**: **Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂**, turning the solution **orange**. Bromine can't take them back from chloride, so Br₂ + KCl gives **no reaction**. Chlorine gains electrons (**reduced**, the oxidising agent); bromide loses them (**oxidised**).",
      breaksDown:
        "In a match the ball can change hands many times; in displacement the more reactive halogen ends up as the halide ion and that's the end of it.",
    },
    {
      title: "HCl needs water to be acidic = a bath bomb only fizzes in water",
      text: "A bath bomb can sit in a jar for months doing nothing; drop it in water and it fizzes. **Hydrogen chloride** is similar: in **water** it **ionises** to H⁺(aq) and Cl⁻(aq), so it is **acidic** and turns blue litmus red. In **methylbenzene** it stays as **molecules**, releases **no H⁺ ions**, and has no effect on litmus. An acid only acts like an acid when **water** lets it release H⁺.",
      breaksDown:
        "A bath bomb fizzes because an acid and a carbonate react once wet; HCl in water isn't fizzing — it is splitting into ions.",
    },
  ],
  "inorganic-air": [
    {
      title: "Composition of air = a class of 100 students",
      text: "Shrink the air down to a year group of 100 students: **78** are nitrogen, **21** are oxygen and about **1** is argon. Carbon dioxide is just **0.04%** — that's 4 people in a school of 10,000. Tiny, yet it matters a lot for the greenhouse effect.",
      breaksDown:
        "Real air also has variable water vapour and traces of other noble gases, and the percentages are by volume of dry air, not by mass.",
    },
    {
      title: "Finding % oxygen = removing members from a group chat",
      text: "Imagine a group chat of 100 members. The heated copper quietly removes every member who is **oxygen** — they react to form solid **copper(II) oxide** and leave the gas. When nobody else leaves (the volume stops falling), count who's left: 79. So 21 left, and **% oxygen = decrease ÷ original volume × 100** = 21 ÷ 100 × 100 = 21%. Always divide by the **original** number, not the final one.",
      breaksDown:
        "Gas volume also depends on temperature, so unlike counting chat members you must let the apparatus cool to room temperature before reading the syringe.",
    },
    {
      title: "Greenhouse effect = an extra-thick duvet at a sleepover",
      text: "Sunlight warms the Earth's surface, which then gives off **infrared (heat) radiation**. Greenhouse gases like **carbon dioxide** absorb some of that infrared and re-emit it, a bit like a duvet keeping your body heat in. Burning **fossil fuels** adds more CO₂ — like piling on more duvets — so more heat is kept in, causing **global warming and climate change**.",
      breaksDown:
        "A duvet works by stopping warm air moving away; CO₂ doesn't trap air, it absorbs infrared radiation and re-emits it, some back towards the Earth.",
    },
  ],
  "inorganic-reactivity": [
    {
      title: "Displacement = who gets the beanbag in the common room",
      text: "In the common room, being on the comfy beanbag is like being **dissolved as an ion**. When zinc meets copper(II) sulfate, zinc is **more reactive** — it loses electrons more readily — so zinc takes the beanbag as Zn²⁺, and copper is pushed onto the floor as solid metal: **Zn + Cu²⁺ → Zn²⁺ + Cu**. The blue colour fades and a brown solid appears. Put copper in zinc sulfate and copper can't claim the beanbag — **no reaction**.",
      breaksDown:
        "The 'eagerness' is really how easily each metal atom loses electrons; nothing is choosing — the metal higher in the series simply ends up as the ion.",
    },
    {
      title: "Reducing agent = the friend who treats you to bubble tea",
      text: "When your friend buys you a bubble tea, she causes you to **gain** something while she **loses** money. A **reducing agent** is that friend: it gives away electrons, causing the other substance to be **reduced** (gain electrons), while it is itself **oxidised** (loses electrons). In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is the reducing agent; Cu²⁺ takes the electrons, so it is the **oxidising agent** and is itself reduced.",
      breaksDown:
        "Your friend chooses to pay; atoms don't — electrons transfer because of the difference in how strongly each species holds them.",
    },
    {
      title: "Sacrificial protection = the decoy sweet bowl at Diwali",
      text: "At a Diwali party, you put a bowl of cheaper sweets by the door so little cousins raid that instead of the good mithai. A **zinc** or magnesium block on steel is the decoy: it is **more reactive than iron**, so it **loses electrons and is oxidised instead of the iron**. The iron stays rust-free even if scratched, but the decoy gets used up and **must be replaced**. Paint is more like cling film over the tray — a **barrier** that fails once scratched.",
      breaksDown:
        "The zinc is not attracting attention away; it protects because it is connected to the iron and gives up electrons more readily, so it is the metal that gets oxidised.",
    },
  ],
  "inorganic-metals": [
    {
      title: "Carbon vs electrolysis = a sports-day tug-of-war for oxygen",
      text: "Extraction is a **tug-of-war for oxygen**. Carbon can pull the oxygen off metals **below carbon** in the reactivity series (zinc, iron, copper), so they are reduced by carbon — cheap. Against metals **above carbon**, like aluminium, carbon loses the tug-of-war, so you need the big machine: **electrolysis**, which forces electrons onto the metal ions. It costs a lot of electricity, so it's only used when carbon can't win.",
      breaksDown:
        "In the blast furnace the main 'puller' is actually carbon monoxide, not carbon itself, and in electrolysis the metal ions are reduced by gaining electrons rather than by losing a tug of war.",
    },
    {
      title: "Cryolite = dissolving sugar instead of melting it",
      text: "To get sugar runny on its own you have to heat it until it melts into caramel, but stirring it into hot water gets it into solution at a much lower temperature. **Aluminium oxide** melts above **2000 °C**, so it is **dissolved in molten cryolite** at about **950 °C** instead. The ions are then **free to move**, so it conducts — and the lower temperature **saves energy and cost**.",
      breaksDown:
        "Cryolite is itself molten (not water) and is not a catalyst — it simply lowers the operating temperature.",
    },
    {
      title: "Alloys are harder = marbles that can't roll past each other",
      text: "Line up identical marbles in neat rows in a tray and tilt it — the rows roll past each other easily. That's a **pure metal**: the **layers of ions slide**, so it's soft. Drop in a few bigger marbles and the rows jam. In an **alloy**, **different-sized atoms distort the regular layers**, so they **cannot slide** easily — the alloy is **harder and stronger**, like steel compared with pure iron.",
      breaksDown:
        "Marbles are held only by gravity, while metal ions are held together by a sea of delocalised electrons, which is why metals bend rather than fall apart.",
    },
  ],
};
