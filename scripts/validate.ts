// Structural + self-consistency checks for all authored content.
// Run: npm run validate            (every topic; empty placeholder topics only warn)
//      npm run validate -- calc    (one topic; it must be complete)
//      npm run validate -- paper   (the teacher's paper)
import { gradeQA, tokens, keywordMatches } from "../lib/grade.ts";
import { SECTIONS, SET_SIZES, TOPICS, TOPIC_ORDER } from "../lib/sections.ts";
import type { MCQ, QA, QuestionSet, GuideSection, GlossaryCard, TopicId } from "../lib/types.ts";

const only = process.argv[2];
const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

const SECTION_IDS = new Set<string>(SECTIONS.map((s) => s.id));
const FIGURES = new Set(["burette-rough", "distillation", "marble-flask", "rate-graph", "copper-lattice", "apparatus-q2"]);
const ORDER = { warmup: 0, core: 1, challenge: 2 } as const;
const seen = new Set<string>();

function checkSvg(where: string, d: string) {
  if (!/viewBox=/.test(d)) err(`${where}: diagram missing viewBox`);
  if (!/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(d)) err(`${where}: diagram missing xmlns`);
  if (!/role="img"/.test(d) || !/aria-label=/.test(d)) warn(`${where}: diagram missing role/aria-label`);
  if (/<script|<style|href=|\$\{|<foreignObject/i.test(d)) err(`${where}: diagram contains forbidden markup`);
  if (!d.trim().startsWith("<svg")) err(`${where}: diagram doesn't start with <svg`);
  if (!d.trim().endsWith("</svg>")) err(`${where}: diagram doesn't end with </svg>`);
}

function checkCommon(q: MCQ | QA, setTopic: string) {
  if (seen.has(q.id)) err(`${q.id}: duplicate id`);
  seen.add(q.id);
  if (!SECTION_IDS.has(q.section)) err(`${q.id}: unknown section ${q.section}`);
  if (!q.section.startsWith(`${q.topic}-`)) err(`${q.id}: topic ${q.topic} doesn't match section ${q.section}`);
  if (setTopic !== "mixed" && q.topic !== setTopic) err(`${q.id}: topic ${q.topic} in a ${setTopic} set`);
  if (!(q.difficulty in ORDER)) err(`${q.id}: bad difficulty`);
  if (q.figure && !FIGURES.has(q.figure)) err(`${q.id}: unknown figure ${q.figure}`);
  if (q.diagram) checkSvg(q.id, q.diagram);
  if (!q.question?.trim()) err(`${q.id}: empty question`);
  if (q.table) {
    const w = q.table.headers.length;
    q.table.rows.forEach((r, i) => r.length !== w && err(`${q.id}: table row ${i} has ${r.length} cells, expected ${w}`));
  }
}

function checkMcqSet(set: QuestionSet<MCQ>, prefix: string, n: number) {
  if (set.questions.length !== n) err(`${set.id}: ${set.questions.length} questions, expected ${n}`);
  const pos = [0, 0, 0, 0];
  let longest = 0;
  let last = 0;
  set.questions.forEach((q, i) => {
    const want = `${prefix}-m${String(i + 1).padStart(2, "0")}`;
    if (q.id !== want) err(`${set.id}[${i}]: id ${q.id}, expected ${want}`);
    checkCommon(q, set.topic);
    if (q.options.length !== 4) err(`${q.id}: ${q.options.length} options`);
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) err(`${q.id}: duplicate options`);
    if (!(q.answerIndex >= 0 && q.answerIndex < q.options.length)) err(`${q.id}: answerIndex ${q.answerIndex} out of range`);
    if (q.optionFeedback?.length !== q.options.length) err(`${q.id}: optionFeedback has ${q.optionFeedback?.length} entries`);
    q.optionFeedback?.forEach((f, j) => (!f || f.trim().length < 12) && err(`${q.id}: optionFeedback[${j}] too short`));
    if (!q.explanation || q.explanation.length < 60) err(`${q.id}: explanation too short`);
    const wantHints = q.difficulty === "warmup" ? 1 : q.difficulty === "core" ? 2 : 3;
    if (!q.hints?.length) err(`${q.id}: no hints`);
    else if (q.hints.length < wantHints) warn(`${q.id}: ${q.hints.length} hints (want ${wantHints} for ${q.difficulty})`);
    pos[q.answerIndex]++;
    const lens = q.options.map((o) => o.length);
    if (lens[q.answerIndex] === Math.max(...lens) && lens.filter((l) => l === Math.max(...lens)).length === 1) longest++;
    if (ORDER[q.difficulty] < last) warn(`${q.id}: difficulty goes down (${q.difficulty} after harder)`);
    last = ORDER[q.difficulty];
    const fb = q.optionFeedback?.[q.answerIndex] ?? "";
    if (/^(wrong|incorrect|no[,.]|not quite)/i.test(fb.trim())) err(`${q.id}: feedback for the CORRECT option reads like a rejection`);
    q.optionFeedback?.forEach((f, j) => {
      if (j !== q.answerIndex && /^(correct|yes|right)\b/i.test(f.trim())) err(`${q.id}: feedback for WRONG option ${j} reads like a confirmation`);
    });
  });
  const diff = { warmup: 0, core: 0, challenge: 0 };
  set.questions.forEach((q) => diff[q.difficulty]++);
  console.log(`${set.id}: answer positions ${pos.join("/")}, correct-is-longest ${longest}/${set.questions.length}, difficulty ${diff.warmup}/${diff.core}/${diff.challenge}`);
  if (longest > set.questions.length * 0.4) warn(`${set.id}: correct option is the longest in ${longest}/${set.questions.length} questions`);
}

function checkQaSet(set: QuestionSet<QA>, prefix: string | null, n: number | null) {
  if (n !== null && set.questions.length !== n) err(`${set.id}: ${set.questions.length} questions, expected ${n}`);
  set.questions.forEach((q, i) => {
    if (prefix) {
      const want = `${prefix}-w${String(i + 1).padStart(2, "0")}`;
      if (q.id !== want) err(`${set.id}[${i}]: id ${q.id}, expected ${want}`);
    }
    checkCommon(q, set.topic);
    if (q.marks !== q.markScheme.length) err(`${q.id}: marks ${q.marks} != ${q.markScheme.length} points`);
    if ((q.hints?.length ?? 0) < 1) err(`${q.id}: no hints`);
    if (!q.commonError) err(`${q.id}: no commonError`);
    q.markScheme.forEach((mp, j) => {
      if (!mp.feedback || mp.feedback.length < 15) err(`${q.id} point ${j + 1}: feedback missing/short`);
      if (!mp.keywords.length) err(`${q.id} point ${j + 1}: no keywords`);
      mp.keywords.forEach((k) => k !== k.toLowerCase() && warn(`${q.id} point ${j + 1}: keyword not lower-case: "${k}"`));
    });
    // self-test 1: the model answer must earn every point
    const model = gradeQA(q, q.modelAnswer);
    model.credited.forEach((c, j) => !c && err(`${q.id}: MODEL ANSWER misses point ${j + 1} ("${q.markScheme[j].point}")`));
    // self-test 2: copying the question must earn nothing
    const stemText = q.question;
    const tableText = q.table ? q.table.headers.join(" ") + " " + q.table.rows.flat().join(" ") : "";
    gradeQA(q, stemText).credited.forEach((c, j) => {
      if (!c) return;
      const hits = q.markScheme[j].keywords.filter((k) => keywordMatches(tokens(stemText), k));
      err(`${q.id}: copying the QUESTION earns point ${j + 1} via ${JSON.stringify(hits)}`);
    });
    if (tableText) {
      gradeQA(q, stemText + " " + tableText).credited.forEach((c, j) => {
        if (!c) return;
        const hits = q.markScheme[j].keywords.filter((k) => keywordMatches(tokens(stemText + " " + tableText), k));
        warn(`${q.id}: copying the question + table earns point ${j + 1} via ${JSON.stringify(hits)}`);
      });
    }
  });
  console.log(`${set.id}: ${set.questions.length} questions, ${set.questions.reduce((s, q) => s + q.marks, 0)} marks`);
}

function checkGuide(g: GuideSection[], topic: TopicId) {
  const want = SECTIONS.filter((s) => s.topic === topic).map((s) => s.id);
  const got = g.map((s) => s.id);
  if (JSON.stringify(want) !== JSON.stringify(got)) err(`guide-${topic}: section ids ${got.join(",")} != ${want.join(",")}`);
  g.forEach((s) => {
    if (s.topic !== topic) err(`${s.id}: topic ${s.topic}`);
    for (const f of ["heading", "lesson", "body", "whyItWorks", "examTip", "thinkDeeper"] as const) if (!s[f]?.trim()) err(`${s.id}: missing ${f}`);
    if (!s.discovery?.problem || !s.discovery?.idea) err(`${s.id}: missing discovery`);
    if ((s.keyPoints?.length ?? 0) < 3) err(`${s.id}: ${s.keyPoints?.length ?? 0} keyPoints`);
    if (s.figure && !FIGURES.has(s.figure)) err(`${s.id}: unknown figure ${s.figure}`);
    if (!s.diagram && !s.figure) warn(`${s.id}: no diagram or figure`);
    if (s.diagram) checkSvg(s.id, s.diagram);
    const words = s.body.split(/\s+/).length;
    if (words < 200) warn(`${s.id}: body only ${words} words`);
  });
  console.log(`guide-${topic}: ${g.length} sections`);
}

function checkGlossary(cards: GlossaryCard[], topic: TopicId) {
  if (cards.length < 12) err(`glossary-${topic}: only ${cards.length} cards`);
  const terms = new Set<string>();
  cards.forEach((c) => {
    if (c.topic !== topic) err(`glossary ${c.term}: topic ${c.topic}`);
    if (terms.has(c.term.toLowerCase())) err(`glossary-${topic}: duplicate term ${c.term}`);
    terms.add(c.term.toLowerCase());
    if (!c.definition || c.definition.length < 15) err(`glossary ${c.term}: definition too short`);
  });
}

const all: (MCQ | QA)[] = [];
const topics = only && only !== "paper" ? [only as TopicId] : only === "paper" ? [] : TOPIC_ORDER;
if (only && only !== "paper" && !TOPIC_ORDER.includes(only as TopicId)) {
  console.log(`Unknown topic "${only}". Use one of: ${TOPIC_ORDER.join(", ")}, paper`);
  process.exit(1);
}

for (const t of topics) {
  const { guide } = await import(`../lib/content/${t}/guide.ts`);
  const { mcq } = await import(`../lib/content/${t}/mcq.ts`);
  const { qa } = await import(`../lib/content/${t}/qa.ts`);
  const { glossary } = await import(`../lib/content/${t}/glossary.ts`);
  const empty = !guide.length && !mcq.questions.length && !qa.questions.length;
  if (empty && !only) {
    warn(`${t}: no content yet`);
    continue;
  }
  if (mcq.id !== `mcq-${t}` || mcq.topic !== t) err(`${t}: mcq set id/topic wrong (${mcq.id}/${mcq.topic})`);
  if (qa.id !== `written-${t}` || qa.topic !== t) err(`${t}: qa set id/topic wrong (${qa.id}/${qa.topic})`);
  checkMcqSet(mcq, TOPICS[t].prefix, SET_SIZES[t].mcq);
  checkQaSet(qa, TOPICS[t].prefix, SET_SIZES[t].qa);
  checkGuide(guide, t);
  checkGlossary(glossary, t);
  all.push(...mcq.questions, ...qa.questions);
}

if (!only || only === "paper") {
  const { paper } = await import("../lib/content/paper.ts");
  if (paper.questions.length) {
    checkQaSet(paper, null, null);
    all.push(...paper.questions);
  } else warn("paper: no content yet");
}

const perSection = new Map<string, number>();
all.forEach((q) => perSection.set(q.section, (perSection.get(q.section) ?? 0) + 1));
console.log("questions per section:", Object.fromEntries([...perSection.entries()].sort()));

if (warnings.length) console.log(`\n⚠️  ${warnings.length} warnings:\n- ` + warnings.join("\n- "));
if (errors.length) {
  console.log(`\n❌ ${errors.length} errors:\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log(`\n✅ All content checks passed (${all.length} questions).`);
