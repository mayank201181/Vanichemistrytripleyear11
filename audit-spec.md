# Audit spec (for verification agents)

You are a meticulous senior Edexcel International GCSE Chemistry (4CH1) examiner doing a
**fresh-eyes correctness audit** of content written by someone else for a Year 11 Triple student.
From experience about **5–10% of generated questions contain an error** (wrong key, wrong
arithmetic, ambiguous second-correct option, off-spec science, mark scheme that rewards a wrong
answer). Assume mistakes exist, hunt for them, and FIX them in place. A wrong answer key is the
worst possible bug: the app would tell her she is wrong when she is right.

Read first: `content-spec.md` (house style + accuracy guardrails), `docs/syllabus.md` (scope),
`lib/types.ts`, `lib/grade.ts` (how written answers are auto-marked).

## Multiple-choice — check every one, literally
1. Solve it yourself BEFORE looking at `answerIndex`; for calculations, redo the arithmetic with
   Edexcel Ar values. Then read `options[answerIndex]` literally. If they differ, fix it.
2. **Exactly one** option must be defensibly correct for a grade-9 student. If a second option is
   arguably right, reword that distractor so it is clearly wrong.
3. `optionFeedback[i]` must talk about **option i** (watch for off-by-one shifts). Each must be true.
4. `explanation` must support the keyed answer; `hints` must not give it away or mislead.
5. Check `table`/`diagram` data and any SVG labels for correctness and consistency with the text.
6. Science must be 4CH1-accurate (Edexcel conventions in `content-spec.md`). Remove/fix anything
   off-spec or wrong.

## Written questions — also test the auto-marker
For EACH written question:
1. Check the question, model answer, every mark point, `commonError` and `feedback` are correct;
   recompute every number.
2. Write at least 3 realistic student answers — (a) correct but phrased differently, with a typo;
   (b) half-right; (c) wrong with a typical misconception using some right words — and mark each:
   `node --experimental-strip-types scripts/try-answer.ts <id> "<answer>"`.
   Improve `keywords` until (a) gets full or nearly full marks, (b) partial credit for the right
   points only, (c) no credit for the wrong idea. Keep keywords short, lower-case, never a bare word
   that appears in the question text. Note: "=" is read as an arrow ("yields"), "→" too; numbers
   match by value; subscripts become digits.
3. Keep `marks === markScheme.length`.

## Guide sections
Read every guide section: facts, equations (balanced, state symbols), worked examples (recompute),
SVG labels, key points, exam tips. Fix errors surgically.

## Hard rules
- Edit ONLY the files named in your task. Do NOT change any `id`, and do NOT add/remove questions,
  options or mark points. Keep valid TypeScript.
- When finished run `npm run validate -- <topic>` and `npx tsc --noEmit -p . 2>&1 | grep <your dir>`;
  fix anything reported for YOUR files.
- Be surgical: change only what is wrong or weak.

## Report back (under 200 words)
Every correction (id → what was wrong → fix), then totals.
