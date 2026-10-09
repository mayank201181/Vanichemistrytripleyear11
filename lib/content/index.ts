import type { GlossaryCard, GuideSection, MCQ, QA, QuestionSet, SectionId, TopicId } from "../types";
import { TOPIC_ORDER } from "../sections";
import * as principles from "./principles/all";
import * as bonding from "./bonding/all";
import * as calc from "./calc/all";
import * as electro from "./electro/all";
import * as inorganic from "./inorganic/all";
import * as acids from "./acids/all";
import * as physical from "./physical/all";
import * as organic from "./organic/all";
import * as practical from "./practical/all";
import { paper } from "./paper";

type TopicContent = { guide: GuideSection[]; mcq: QuestionSet<MCQ>; qa: QuestionSet<QA>; glossary: GlossaryCard[] };

export const CONTENT: Record<TopicId, TopicContent> = {
  principles,
  bonding,
  calc,
  electro,
  inorganic,
  acids,
  physical,
  organic,
  practical,
};

/** The teacher's consolidation paper, question by question. */
export const PAPER = paper;

export const MCQ_SETS: QuestionSet<MCQ>[] = TOPIC_ORDER.map((t) => CONTENT[t].mcq).filter((s) => s.questions.length);
export const QA_SETS: QuestionSet<QA>[] = [
  ...(paper.questions.length ? [paper] : []),
  ...TOPIC_ORDER.map((t) => CONTENT[t].qa).filter((s) => s.questions.length),
];

export type AnySet = { kind: "mcq"; set: QuestionSet<MCQ> } | { kind: "qa"; set: QuestionSet<QA> };

export const ALL_SETS: AnySet[] = [
  ...QA_SETS.filter((s) => s.id === paper.id).map((set) => ({ kind: "qa" as const, set })),
  ...TOPIC_ORDER.flatMap((t) => {
    const out: AnySet[] = [];
    if (CONTENT[t].mcq.questions.length) out.push({ kind: "mcq", set: CONTENT[t].mcq });
    if (CONTENT[t].qa.questions.length) out.push({ kind: "qa", set: CONTENT[t].qa });
    return out;
  }),
];

export function getSet(id: string): AnySet | undefined {
  return ALL_SETS.find((s) => s.set.id === id);
}

export const GUIDES: Record<TopicId, GuideSection[]> = Object.fromEntries(
  TOPIC_ORDER.map((t) => [t, CONTENT[t].guide]),
) as Record<TopicId, GuideSection[]>;

export const GLOSSARY: GlossaryCard[] = TOPIC_ORDER.flatMap((t) => CONTENT[t].glossary);

const ALL_GUIDE_SECTIONS = TOPIC_ORDER.flatMap((t) => CONTENT[t].guide);

export function guideSection(id: SectionId | string): GuideSection | undefined {
  return ALL_GUIDE_SECTIONS.find((s) => s.id === id);
}

export interface IndexedQuestion {
  kind: "mcq" | "qa";
  q: MCQ | QA;
  setId: string;
  setTitle: string;
  number: number;
}

function build(): Record<string, IndexedQuestion> {
  const idx: Record<string, IndexedQuestion> = {};
  for (const { kind, set } of ALL_SETS) {
    set.questions.forEach((q, i) => {
      idx[q.id] = { kind, q, setId: set.id, setTitle: set.title, number: i + 1 };
    });
  }
  return idx;
}

export const QUESTION_INDEX: Record<string, IndexedQuestion> = build();

export function lookup(qid: string): IndexedQuestion | undefined {
  return QUESTION_INDEX[qid];
}

/** Every question, for per-section mastery and practice-by-section. */
export const ALL_QUESTIONS: IndexedQuestion[] = Object.values(QUESTION_INDEX);

export function questionsForSection(section: string): IndexedQuestion[] {
  return ALL_QUESTIONS.filter((x) => x.q.section === section);
}
