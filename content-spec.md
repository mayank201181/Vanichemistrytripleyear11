# Content authoring spec (for content agents)

You are writing content for a study web app for a strong **Year 11 student (age 15–16)** at a
British international school in Singapore, taking **Pearson Edexcel International GCSE Chemistry
(9–1) 4CH1, Triple award** (so triple-only "C" content is included). Her teacher has just set an
October-holiday consolidation paper (transcribed in `docs/syllabus.md` §A) and she is revising the
whole course for mocks. Her parent will hand her this app — the content must be **correct, at exam
standard, and genuinely useful**. Write like an excellent IGCSE chemistry teacher who also knows
the Edexcel mark schemes inside out.

## Read these first
1. `lib/types.ts` — the TypeScript contract. Match it exactly.
2. `lib/sections.ts` — topic ids, section ids, id prefixes and set sizes.
3. `docs/syllabus.md` — scope. **Stay inside the 4CH1 specification.** §A (the teacher's paper)
   shows the style of questions she is getting — mirror its style, command words and mark allocation.
4. `lib/grade.ts` — how written answers are auto-marked (read the comments).

## Files you write (for your topic `<t>`, e.g. `principles`)
All in `lib/content/<t>/`. Each file starts with `import type { ... } from "../../types";`
- `guide.ts` → `export const guide: GuideSection[]` — one section per section id of your topic, in
  the order listed in `lib/sections.ts`.
- `mcq.ts` → `export const mcq: QuestionSet<MCQ>` with `id: "mcq-<t>"`, `topic: "<t>"`,
  title like `"Multiple choice · <Topic title>"`, a one-line subtitle, and exactly
  `SET_SIZES[<t>].mcq` questions with ids `<prefix>-m01`, `<prefix>-m02`, … (zero-padded, in order).
- `qa.ts` → `export const qa: QuestionSet<QA>` with `id: "written-<t>"`, `topic: "<t>"`,
  exactly `SET_SIZES[<t>].qa` questions with ids `<prefix>-w01`, … .
- `glossary.ts` → `export const glossary: GlossaryCard[]` — 15–25 key terms for the topic,
  with exam-board-style definitions (the wording that gets the mark).
Placeholder files already exist — overwrite them. **Touch no other file.**

## Hard rules
- Do **not** run `npm run build` / `next build` / `npm run dev`.
- Check your work with `npm run validate -- <t>` (structure + marker self-tests for your topic) and
  `npx tsc --noEmit -p .` (type check; ignore errors in files that aren't yours).
- Mark a sample answer with `node --experimental-strip-types scripts/try-answer.ts <qa-id> "answer"`.
- **British spelling**: sulfur, sulfate, sulfuric, aluminium, caesium, colour, vapour, neutralise,
  litre, analyse, centre, crystallise. Units: cm³, dm³, mol/dm³, g/dm³, kJ/mol, J/g/°C, °C.
- Use proper chemistry notation in displayed text: subscripts (H₂O, CO₂, SO₄²⁻, Cu²⁺), arrows
  (→, ⇌), state symbols (s), (l), (g), (aq), ΔH. Keywords for the marker should be plain lower-case
  text (the marker turns "H₂O" into "h2o", "Cu²⁺" into "cu2", "cm³" into "cm").
- Strings: double quotes; use a backtick template literal for SVG or strings containing double
  quotes. Never put a backtick or the sequence `${` inside a backtick string.
- Plain text in `question` and `options` (no markdown). `explanation`, `modelAnswer`, guide `body`,
  `workedExample` may use **bold**, "- " bullets and pipe tables.
- Relative atomic masses: use the Edexcel periodic table values (H 1, C 12, N 14, O 16, Na 23,
  Mg 24, Al 27, S 32, Cl 35.5, K 39, Ca 40, Fe 56, Cu 63.5, Zn 65, Br 80, Ag 108, I 127, Ba 137,
  Pb 207). Molar gas volume 24 dm³ (24 000 cm³) at rtp. c(water) = 4.2 J/g/°C.
  **Check every calculation twice** — and state the answer to sensible significant figures.

## Accuracy guardrails (Edexcel conventions)
- Indicators: methyl orange red in acid, **yellow** in alkali (orange at end point); phenolphthalein
  colourless in acid, pink in alkali; litmus red in acid, blue in alkali. Universal indicator is not
  used for titrations: gradual colour change, no sharp end point.
- Tests (exact wording in `docs/syllabus.md` §B 2(h)). Precipitate colours: Cu²⁺ blue, Fe²⁺ green,
  Fe³⁺ brown (orange-brown); AgCl white, AgBr cream, AgI yellow; BaSO₄ white. Halide test uses
  dilute **nitric** acid first; sulfate test uses dilute **hydrochloric** acid first.
- Salt preparations: excess insoluble reactant → filter off the excess → heat filtrate to
  **crystallisation point** (not to dryness for hydrated salts / salts that decompose) → leave to
  cool and crystallise → filter → wash with a little cold distilled water → dry between filter
  papers. Titration method for alkali + acid (repeat without indicator). Precipitation for insoluble salts.
- Rates: gradient = rate; curve levels off when the **limiting reactant** is used up; collision
  theory language: "more frequent collisions", "more collisions per unit time/second", "greater
  proportion of particles have energy ≥ activation energy" → "more successful collisions per unit time".
  Never say "more collisions" alone without a time element in a model answer.
- Metallic bonding: "electrostatic attraction between positive metal ions and delocalised electrons".
  Conduction: "delocalised electrons are free to move (through the structure) and carry charge".
  Malleable/ductile: "layers of positive ions can slide over each other".
- Ionic: conduct when molten or in aqueous solution because **ions** are free to move (never
  "electrons move" for ionic compounds). Simple molecular low bp: **weak intermolecular forces**
  need little energy to overcome (the covalent bonds do NOT break).
- Electrolysis: cathode (−) reduction; anode (+) oxidation. Aqueous: at the cathode hydrogen forms
  unless the metal is less reactive than hydrogen; at the anode oxygen forms unless a halide is
  present (then the halogen). PANCake / OILRIG fine as memory tricks.
- Energetics: exothermic ΔH negative. Bond-energy ΔH = Σ(bonds broken) − Σ(bonds made).
- Equilibrium: increasing pressure shifts to the side with fewer moles of gas; increasing
  temperature shifts in the endothermic direction; a catalyst does not change the position.
- Organic: bromine water orange → colourless with alkenes; alkanes react with bromine only in UV
  light (substitution). Fermentation 30–40 °C (yeast, anaerobic); hydration of ethene: steam,
  300 °C, 60–70 atm, phosphoric acid catalyst.
- If a fact is not certain or not in 4CH1, leave it out.

## Multiple-choice questions (MCQ) — house style
- Exactly **4 options**, exactly **one** defensibly correct answer. Edexcel-style stems (e.g.
  "Which of these…", "What is the mass of…", data/graph interpretation, calculations).
- Distractors are **plausible** and built from real misconceptions and real calculation slips
  (forgot the mole ratio, used Ar instead of Mr, didn't convert cm³ → dm³, electrons move in ionic
  solids…). No "all/none of the above", no joke options.
- Keep option lengths similar; the correct option must NOT usually be the longest. Vary
  `answerIndex` across 0–3 roughly evenly.
- `optionFeedback`: 4 strings in option order. Correct option: one sentence why it's right. Each
  wrong option: why it's tempting AND exactly why it's wrong (for calculation slips, name the slip:
  "This is what you get if you forget to divide by 1000 to convert cm³ to dm³."). Do not start with
  "Correct"/"Wrong"/"Yes"/"No"/✓/✗ — the app adds that.
- `explanation`: 2–5 sentences that **teach** the idea (rule + reason + link). For calculations
  show the full working on separate lines.
- `hints`: ladder, gentlest first, never stating the answer. warmup 1, core 2, challenge 3.
- `strategy`: one of: "Recall the definition", "Use the mole ratio", "Check the units",
  "Eliminate wrong options", "Think about particles", "Think about electrons", "Read the data
  carefully", "Read the graph", "Apply it to a new situation", "Compare and contrast",
  "Work backwards", "Consider the extremes", "Balance the equation", "Follow the method step by step".
- Difficulty spread ≈ 25% warmup, 50% core, 25% challenge; order warmup → core → challenge.
  Challenge questions must genuinely stretch a grade 8–9 student (multi-step calculations,
  unfamiliar contexts, subtle discriminations).
- Cover **every section** of your topic, weighted by importance and by the teacher's paper.
- Use `table` for data questions; use `diagram` (inline SVG) only where a picture is essential.

## Written questions (QA) — house style
- Edexcel command words: State, Give, Name, Describe, Explain, Calculate, Suggest, Deduce,
  Evaluate. Include several **calculation** questions (with working marks) where the topic allows,
  several **practical method** questions, and several **"Explain"** questions.
- `marks` 1–6 and **must equal `markScheme.length`**. One mark point = one creditable idea, the way
  an Edexcel mark scheme would split it.
- Each `MarkPoint`:
  - `point`: one crisp creditable idea, e.g. "Heat the solution to evaporate some of the water / to the point of crystallisation".
  - `keywords`: 4–12 **lower-case** phrases a real 15-year-old might write for that idea,
    including synonyms and common phrasings. "+" means all parts must appear somewhere in the
    answer (any order): `"heat+crystallisation point"`, `"filter+excess"`.
    How the marker matches:
    - UK/US spellings and common misspellings are normalised; subscripts/superscripts become plain
      digits ("CO₂" → "co2"); "cm³" → "cm"; "45g" → "45 g"; "%" → "percent".
    - **Numbers match by value**: keyword "21.4" matches "21.40". So for a calculation, the final
      answer mark can use the number, e.g. `"81.7"`, `"81.71"`, `"82"` (list acceptable roundings).
      A working mark can use an intermediate value (e.g. `"0.15"` for moles) or a phrase.
    - A keyword word of **4+ letters** also matches any answer word that starts with it
      (`"crystal"` → crystallise/crystals). Plurals always match.
    - Typo tolerance: 1 letter for keyword words of 6–9 letters, 2 for 10+; none under 6 letters.
    - A multi-word phrase must appear as consecutive words, allowing one small filler word between.
    - Sentence breaks end phrases and stop negation. A match is refused if not/no/never/isn't/
      doesn't/don't/can't/cannot/won't/without/neither/nor is one of the two words before it in the
      same sentence. If the idea itself is negative, put the negation inside the phrase
      (e.g. `"not to dryness"`, `"do not heat to dryness"`).
    Keep phrases short (1–3 words) so they actually match.
  - **Never** use a keyword that already appears in the question text on its own (a student who
    copies the question must score 0 — the validator checks this). Combine with "+" instead.
  - `feedback`: 1–3 sentences that **teach** the missing point.
- `modelAnswer`: a full-mark answer as a top student would write it (show working for
  calculations). It **must** earn every mark point (the validator self-tests this).
- `hints`: 2–3 hints (ladder). `commonError`: the specific mistake students make.
- After writing each QA, try 2–3 realistic student answers with `scripts/try-answer.ts` (a correct
  answer phrased differently; a half-right one; a wrong one with a misconception) and tune keywords
  so the marker is fair.
- Note: the app also has an "AI examiner" button that re-marks the answer with Claude using your
  mark scheme, so write each `point` clearly enough for a human examiner to apply.

## Guide sections — house style
- Address the student as "you"; clear, precise, exam-focused; short paragraphs; **bold** keywords.
  Level: IGCSE grade 7–9 — rigorous, not babyish.
- `lesson`: the spec reference, e.g. `"4CH1 1(e)"` (add "· Triple" if triple-only content dominates).
- `discovery`: an intriguing problem/puzzle *before* the explanation (problem) + the reveal (idea).
- `body`: 300–600 words; markdown-lite (bold, italics, "- " bullets, blank-line paragraphs, pipe
  tables). Cover every spec point for the section. Include equations with state symbols where relevant.
- `workedExample` (strongly encouraged for anything with calculations or a practical method): an
  exam-style problem and a step-by-step solution.
- `diagram`: an inline SVG (backtick string) — clean and correct: `viewBox`,
  `xmlns="http://www.w3.org/2000/svg"`, `role="img"`, `aria-label`, simple shapes and text
  (font-size 11–14, font-family "sans-serif"), max ~80 elements. No external images, fonts,
  scripts, `<style>` blocks, `href` or `${`. Text must not overlap or run outside the viewBox.
  Every section should have one (apparatus set-ups, particle diagrams, dot-and-cross, graphs,
  reaction profiles, flowcharts…).
- `keyPoints` 4–7 (the must-learn facts, exam wording), `whyItWorks` 1–3 sentences,
  `memoryTrick` when a good one exists, `examTip` (the mark-losing mistake — cite how mark schemes
  phrase things), `thinkDeeper` (a stretch question).
