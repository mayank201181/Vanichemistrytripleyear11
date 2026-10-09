# ⚗️ Vani's Chemistry Lab — Edexcel IGCSE Chemistry (4CH1, Triple)

A study guide + question bank + AI tutor for Year 11 (Grade 10) Edexcel International GCSE
Chemistry, Triple award, built around the class's **October-holiday consolidation paper** and the
full 4CH1 specification.

## What's inside
- **Teacher's paper** — the 49-mark "Y11 October Holidays Consolidation" paper, part by part, with
  the original diagrams redrawn (burette readings, distillation, marble chips, rate graph, copper
  lattice), instant marking, model answers and the mark-losing traps.
- **9 topics / 32 guide sections** covering 4CH1: principles, bonding, formulae & moles,
  electrolysis, inorganic, acids/salts/tests, physical (energetics, rates, equilibria), organic,
  and practical skills. Every section opens with a puzzle, has a diagram, worked example, key
  points, "why it works", exam tip and a stretch question.
- **Question bank** — a multiple-choice and a written set per topic (≈196 MCQ + 82 written),
  tagged warm-up / core / challenge, with hint ladders, per-option feedback and point-by-point
  mark schemes.
- **Two kinds of marking for written answers**: an instant keyword marker (in the browser), plus
  an **AI examiner** (Claude) that re-marks the answer against the mark scheme like an Edexcel
  examiner and suggests a full-marks version.
- **Professor Mole, the AI tutor** — a floating chat on every page that knows which guide section
  or question she's looking at; gives hints rather than answers while she's attempting a question.
- Mistakes list (wrong answers queue until fixed), flashcards (mark-scheme definitions), six
  interactive labs (atom builder, titration, rates, moles calculator, electrolysis, Haber
  equilibrium), a printable cram sheet, stars/ranks/streaks and a "send my scores" button.

Progress is stored on the device (localStorage) — no login.

## Setup
```bash
npm install
npm run dev
```
The AI tutor/examiner need `ANTHROPIC_API_KEY` (optional `AI_MODEL`, default `claude-opus-5-5`)
set as environment variables (Vercel project settings). Without a key the rest of the app works
and the AI buttons show a friendly message.

## Content workflow
- `docs/syllabus.md` — the teacher's paper transcription + 4CH1 outline (scope).
- `content-spec.md` — authoring rules; `audit-spec.md` — the fresh-eyes audit every topic went through.
- `lib/content/<topic>/{guide,mcq,qa,glossary}.ts` and `lib/content/paper.ts` — typed content.
- `npm run validate [-- <topic>|paper]` — structural checks + mark-scheme self-tests.
- `node --experimental-strip-types scripts/try-answer.ts <qa-id> "an answer"` — try the marker.
- `npm test` — unit tests for the marker.
