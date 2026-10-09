import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "practical-apparatus": [
    {
      title: "Pipette vs measuring cylinder = measuring spoon vs a mug",
      text: "When you bake, a mug is a rough guess, a measuring jug is better, and a 1-teaspoon measuring spoon gives one exact amount every time. In the lab the **beaker** is the mug (never use it to measure), the **measuring cylinder** is the jug (fine for 'about 50 cm³'), and the **volumetric pipette** is the measuring spoon — **one fixed volume**, e.g. **25.0 cm³**. The **burette** is like a precise dropper for adding a **variable** volume bit by bit, read to **0.05 cm³**. The decimal places you write show your precision: 25.0 cm³ from a pipette, not 25.",
      breaksDown:
        "Kitchen spoons are rough compared with a pipette's ±0.06 cm³. And the burette's precision comes from its fine scale, not from adding single drops.",
    },
    {
      title: "Accurate vs precise = netball shooting practice",
      text: "Take ten shots at netball practice. If they all land tightly together but just left of the ring, you're **precise** (little spread) but **not accurate** (not at the true target). If they're scattered all around the ring, the average might be on target but they're not precise. Your best is **accurate and precise**: close together AND close to the **true value**. In titrations, using only **concordant** titres (within **0.10 cm³**) is like counting only the shots that grouped tightly, and leaving out the wild one.",
      breaksDown:
        "In netball you can see the ring; in an experiment you usually don't know the true value, which is why accuracy is harder to judge than precision.",
    },
    {
      title: "Reading the meniscus at eye level = selfie angles lie",
      text: "A selfie from a high angle makes your face look different from one at eye level — the angle changes what you see. Reading a scale is the same: look from above or below and the liquid seems to sit at a different mark (**parallax error**). Put your **eye level with the bottom of the meniscus**. Then remember a burette's scale is like a basement car park — **0.00 is at the top** and the numbers **increase as you go down** — so the titre is **end reading − start reading**, recorded to **2 d.p.** ending in 0 or 5.",
      breaksDown:
        "Selfie angles are about perspective of a 3D face; parallax is about lining up a level with a scale. For a meniscus that curves up (like mercury) you'd read the top, but for water-based solutions it's the bottom.",
    },
  ],
  "practical-planning": [
    {
      title: "Fair test = a bubble tea sweetness taste test",
      text: "To find which sweetness level your friends like best, you change **only** the sugar level (0%, 25%, 50%, 75%, 100%) — that's the **independent variable**. Their score out of 10 is what you **measure** — the **dependent variable**. Everything else — same tea, same ice level, same cup size, same toppings — is a **control variable**, kept the same so it's a **fair test**. Ask several friends and take a **mean** (repeats), just as a method needs **at least 5 values**, **repeats** and a mean.",
      breaksDown:
        "Taste scores are opinions; in chemistry the dependent variable is measured with apparatus, e.g. volume of gas with a gas syringe every 10 s.",
    },
    {
      title: "Systematic error = a phone clock that's always 5 minutes fast",
      text: "If your clock is 5 minutes fast, every reading is wrong by the **same amount in the same direction**, and checking it a hundred times and averaging won't help — you have to fix the clock. That's a **systematic error**, like CO₂ **dissolving in water** every run or a balance that isn't zeroed: you must **change the method or apparatus** (e.g. use a **gas syringe**). A **random error** is more like your reaction time on a stopwatch — sometimes early, sometimes late — so **repeating and taking a mean** reduces it.",
      breaksDown:
        "A clock that's exactly 5 minutes fast is perfectly consistent; real systematic errors are only 'similar' each time, e.g. slightly more CO₂ dissolves on a warm day.",
    },
    {
      title: "Rate from a tangent = your pace mid-run vs your average",
      text: "On a 5 km run your app shows your **average pace** (total distance ÷ total time) and your pace **at one moment** — fast at the start, slower near the end. A reaction is the same: the **mean rate** = total change ÷ total time, but the rate **at** a particular time is the **gradient of a tangent** drawn at that point, using a big triangle. Because the reaction slows as the acid is used up, the mean rate over the first 20 s (**1.6 cm³/s**) is higher than the rate **at** 20 s (**1.2 cm³/s**). Always give units, e.g. **cm³/s**.",
      breaksDown:
        "Your running pace can go up again if you sprint; a reaction's rate only falls as reactants are used up (unless something like an oxide coating is first removed).",
    },
  ],
};
