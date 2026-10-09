import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "acids-acids": [
    {
      title: "Spectator ions = the concert audience",
      text: "At a concert the crowd is there before the show and still there after, but only the performers do anything on stage. In NaOH + HCl, the **Na⁺ and Cl⁻** are the audience — **spectator ions** in solution before and after. The only performers are **H⁺ and OH⁻**, which combine: **H⁺(aq) + OH⁻(aq) → H₂O(l)**. That's why one ionic equation fits every acid–alkali neutralisation.",
      breaksDown:
        "The spectator ions don't just watch from a distance — they are mixed through the solution and become the salt (e.g. NaCl) if you evaporate the water.",
    },
    {
      title: "Lower pH means more H⁺ = race positions",
      text: "In a race, 1st place beats 5th — a **lower number means more**. pH works the same way backwards from what you might expect: the **lower the pH, the higher the concentration of H⁺ ions**. pH 1 is strongly acidic, pH 7 is neutral, and above 7 the OH⁻ concentration takes over. **Universal indicator** shows the whole range like a colour palette: red, orange/yellow, green, blue, purple.",
      breaksDown:
        "Race positions go up in steps of one runner, but each pH unit is a tenfold change in H⁺ concentration.",
    },
    {
      title: "Proton donor and acceptor = passing a hair tie",
      text: "Your friend hands you a spare hair tie: she's the **donor**, you're the **acceptor**. In HCl + NH₃ → NH₄Cl, **HCl donates a proton** (H⁺) so it is the **acid**, and **ammonia accepts** it so it is the **base** — even though no hydroxide ions are involved. A hydrogen ion H⁺ *is* a proton: a hydrogen atom that has lost its only electron.",
      breaksDown:
        "A hair tie is swapped by choice and is the same object afterwards; the proton becomes bonded into the new ion (NH₄⁺), changing both particles.",
    },
  ],
  "acids-titration": [
    {
      title: "Adding acid dropwise = sweetening chai you can't un-sweeten",
      text: "When you sweeten chai, you add the first spoonful quickly, then a pinch at a time as you get close — because once it's too sweet, you can't take it back. Titration is the same: a **rough** titration tells you roughly where the **end point** is; then you add acid from the burette **drop by drop** near the end, **swirling**, so you don't **overshoot**. Overshooting gives a **titre that is too high**.",
      breaksDown:
        "Sweetness is a matter of taste, while the end point is a definite point where the moles of acid exactly neutralise the alkali, shown by the indicator changing colour.",
    },
    {
      title: "Concordant results = timing your 50 m freestyle",
      text: "A swim coach times you five times. She ignores the warm-up lap and the one where you slipped on the turn, then averages the times that agree. In titration the **rough** titre is the warm-up and an **anomalous** titre is the slip. Average only **concordant results** — titres within **0.20 cm³** of each other, e.g. (21.30 + 21.50) ÷ 2 = **21.40 cm³**.",
      breaksDown:
        "A swimmer genuinely improves with practice, but titres should all be the same in theory — differences come from random errors, which is why you keep only those that agree.",
    },
    {
      title: "Why not universal indicator = a gradient sunset vs a light switch",
      text: "Universal indicator is like a sunset: the colour drifts gradually from red through orange and yellow to green, so you can't say exactly when it changed. **Methyl orange** or **phenolphthalein** behave like a light switch — one drop at the end point and the colour flips (methyl orange **yellow to orange**). A titration needs that **sharp end point**, so universal indicator is never used.",
      breaksDown:
        "Methyl orange does change over a small pH range too; it looks sudden because the pH jumps very steeply with one drop at the end point.",
    },
  ],
  "acids-salts": [
    {
      title: "Excess insoluble base = straining the masala chai",
      text: "When you make masala chai, you add plenty of tea leaves and spices, and afterwards the strainer catches what didn't dissolve. In the **excess method**, you add **insoluble** copper(II) oxide until no more dissolves, so **all the acid has reacted**; then you **filter** off the leftover solid. Sugar is different — once dissolved you can't strain it out. That's why a **soluble** alkali like NaOH needs the **titration method** with exactly the right amounts.",
      breaksDown:
        "Tea leaves only release flavour, whereas copper(II) oxide actually reacts with the acid to form a new substance, copper(II) sulfate, and water.",
    },
    {
      title: "Crystallisation point = making mishri, not burnt sugar",
      text: "Mishri (rock sugar) is made by boiling a sugar syrup until it's concentrated, then leaving it to **cool slowly** so crystals grow. Keep heating until it's dry and you burn it. Salts are the same: heat the filtrate only to the **crystallisation point** (crystals form on a glass rod), then **cool**, **filter**, **wash** with a little cold distilled water and **dry**. Heating to dryness makes hydrated salts like CuSO₄·5H₂O **lose their water of crystallisation** and some salts decompose.",
      breaksDown:
        "Sugar burning is a different chemical change from a hydrated salt losing water of crystallisation; the shared idea is just that heating to dryness damages the product.",
    },
    {
      title: "Precipitation = making paneer from milk",
      text: "Making paneer, you add lemon juice to hot milk and solid curds suddenly appear; you strain them through muslin, rinse, and press them dry. Making an **insoluble salt** is similar: **mix two solutions** (e.g. lead(II) nitrate and sodium sulfate) and a solid **precipitate** forms — Pb²⁺ + SO₄²⁻ → PbSO₄. Then **filter**, **wash with distilled water** to remove the soluble spectator ions, and **dry**.",
      breaksDown:
        "Paneer forms because milk proteins clump together; a precipitate forms when oppositely charged ions meet and make an insoluble ionic solid.",
    },
  ],
  "acids-tests": [
    {
      title: "Acid first = emptying your pockets at concert security",
      text: "At concert security you empty your pockets of coins first, so if the scanner beeps it can only be what they're looking for. In the halide test you add **dilute nitric acid first** to **remove carbonate ions**, which would otherwise also give a white precipitate with silver nitrate — a false positive. Security wouldn't hand you a bunch of keys to hold during the scan, and you don't use **hydrochloric acid** for a halide test, because it would **add Cl⁻** itself.",
      breaksDown:
        "The acid doesn't just set carbonate aside — it reacts with it (2H⁺ + CO₃²⁻ → H₂O + CO₂) so the carbonate is destroyed.",
    },
    {
      title: "Flame tests = the colours in Diwali fireworks",
      text: "The reds, yellows and blue-greens in Diwali fireworks come from metal compounds — they are giant flame tests. Heat a metal ion and its **electrons** gain energy, then **drop back to lower energy levels**, giving out light of a **characteristic colour**. Learn them: **Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ blue-green**.",
      breaksDown:
        "Fireworks often mix several metal compounds and use other metals too (like strontium), so a firework colour alone doesn't identify a single ion the way a clean-wire flame test does.",
    },
    {
      title: "Identifying a salt = two-factor login",
      text: "Logging in with two-factor needs **both** your password and the code — one alone isn't enough. A salt has two halves, so you need **one cation test and one anion test**. A **lilac flame** gives K⁺; a **cream precipitate** with dilute nitric acid and silver nitrate gives Br⁻. Together: **potassium bromide**.",
      breaksDown:
        "Some unknowns are mixtures with more than one cation or anion, so in real analysis you may need several tests rather than exactly two.",
    },
  ],
};
