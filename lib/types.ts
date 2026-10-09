// Core data model for the Year 11 Edexcel IGCSE Chemistry (Triple, 4CH1) study app.
// Content is authored as typed modules so every answer key is type-checked at build time.

export type TopicId =
  | "principles" // states, mixtures & separation, atoms, periodic table
  | "bonding" // ionic, covalent, metallic
  | "calc" // formulae, equations, moles, gas volumes, concentrations
  | "electro" // electrolysis
  | "inorganic" // group 1, group 7, air, reactivity, metals
  | "acids" // acids & alkalis, titration, salts, chemical tests
  | "physical" // energetics, rates, equilibria
  | "organic" // organic chemistry
  | "practical"; // practical skills, apparatus, planning & evaluating

export type Difficulty = "warmup" | "core" | "challenge";

/** Guide section ids. Every question points at one of these (its `section`). Prefix = topic id. */
export type SectionId =
  | "principles-states"
  | "principles-mixtures"
  | "principles-atoms"
  | "principles-periodic"
  | "bonding-ionic"
  | "bonding-covalent"
  | "bonding-metallic"
  | "calc-formulae"
  | "calc-moles"
  | "calc-volumes"
  | "electro-principles"
  | "electro-solutions"
  | "inorganic-group1"
  | "inorganic-group7"
  | "inorganic-air"
  | "inorganic-reactivity"
  | "inorganic-metals"
  | "acids-acids"
  | "acids-titration"
  | "acids-salts"
  | "acids-tests"
  | "physical-energetics"
  | "physical-rates"
  | "physical-equilibria"
  | "organic-intro"
  | "organic-crude"
  | "organic-hydrocarbons"
  | "organic-alcohols"
  | "organic-acids-esters"
  | "organic-polymers"
  | "practical-apparatus"
  | "practical-planning";

/** Optional data table shown with a question (results tables, titration readings...). */
export interface DataTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

/** A figure drawn by the app (see components/Figures.tsx) — used by the teacher's paper. */
export type FigureKey =
  | "burette-rough"
  | "distillation"
  | "marble-flask"
  | "rate-graph"
  | "copper-lattice"
  | "apparatus-q2";

/** Multiple-choice question. */
export interface MCQ {
  /** Globally unique, e.g. "pc-m07". */
  id: string;
  topic: TopicId;
  /** Guide section this question tests (deep-link "Revise this"). */
  section: SectionId;
  difficulty: Difficulty;
  question: string;
  /** Optional data table to read before answering. */
  table?: DataTable;
  /** Optional app-drawn figure. */
  figure?: FigureKey;
  /** Optional inline SVG diagram (backtick string; no backticks or "${" inside). */
  diagram?: string;
  /** Exactly 4 options. */
  options: string[];
  /** Index into options of the single correct answer. */
  answerIndex: number;
  /**
   * One entry per option, same order as `options`.
   * Correct option: why it is right (short). Wrong options: why that option is
   * tempting and exactly why it is wrong — shown when the learner picks it.
   */
  optionFeedback: string[];
  /** The teaching explanation shown after answering (the key idea, in full). */
  explanation: string;
  /** Hint ladder, gentlest first. Never gives the answer away outright. */
  hints: string[];
  /** Named exam strategy, e.g. "Use the mole ratio". */
  strategy?: string;
}

/** One credit-worthy point in a written-answer mark scheme. */
export interface MarkPoint {
  /** What earns the mark, e.g. "Heat the solution to evaporate some of the water". */
  point: string;
  /**
   * Phrases that show the point was made (lower case). The point is credited if
   * ANY phrase matches. Inside a phrase, "+" joins words that must ALL appear
   * somewhere in the answer (any order), e.g. "sodium+nitrate".
   * Matching forgives small spelling slips and UK/US spellings; numbers match by value.
   */
  keywords: string[];
  /** Teaching feedback shown if this point is missing from the answer. */
  feedback: string;
}

/** Written (question-and-answer) question, auto-marked against the mark scheme (and optionally by AI). */
export interface QA {
  /** Globally unique, e.g. "pc-w03". */
  id: string;
  topic: TopicId;
  section: SectionId;
  difficulty: Difficulty;
  question: string;
  table?: DataTable;
  figure?: FigureKey;
  /** Optional inline SVG diagram (backtick string; no backticks or "${" inside). */
  diagram?: string;
  /** Marks available — must equal markScheme.length. */
  marks: number;
  hints: string[];
  /** A full-mark model answer. */
  modelAnswer: string;
  markScheme: MarkPoint[];
  /** The mistake students most often make on this question. */
  commonError: string;
  strategy?: string;
  /** Optional label shown instead of "Q3", e.g. "Q5(b)(ii)" for the teacher's paper. */
  label?: string;
}

export interface QuestionSet<Q> {
  /** e.g. "mcq-principles" or "written-principles". */
  id: string;
  title: string;
  subtitle: string;
  topic: TopicId | "mixed";
  questions: Q[];
}

/** A section of the revision guide. */
export interface GuideSection {
  id: SectionId;
  topic: TopicId;
  /** Spec reference / sub-topic label, e.g. "4CH1 1(e)". */
  lesson: string;
  heading: string;
  /** AoPS-style opener: a puzzle to think about before reading. */
  discovery: { problem: string; idea: string };
  /** Markdown-lite body: **bold**, *italic*, blank-line paragraphs, "- " bullets, pipe tables. */
  body: string;
  /** Optional inline SVG diagram (backtick string, no backticks or "${" inside). */
  diagram?: string;
  diagramCaption?: string;
  /** Optional app-drawn figure instead of / as well as `diagram`. */
  figure?: FigureKey;
  keyPoints: string[];
  /** "Why does this work?" — the reason behind the rule. */
  whyItWorks: string;
  /** A memory trick, if a good one exists. */
  memoryTrick?: string;
  /** The mistake that loses marks in exams. */
  examTip: string;
  /** A reasoning question to stretch thinking. */
  thinkDeeper: string;
  /** Optional fully worked example (calculations especially). Markdown-lite. */
  workedExample?: { problem: string; solution: string };
}

/** A glossary flashcard. */
export interface GlossaryCard {
  topic: TopicId;
  term: string;
  definition: string;
  /** Optional example, equation or memory help. */
  example?: string;
}
