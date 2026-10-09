import type { SectionId, TopicId } from "./types";

export const TOPIC_ORDER: TopicId[] = [
  "principles",
  "bonding",
  "calc",
  "electro",
  "inorganic",
  "acids",
  "physical",
  "organic",
  "practical",
];

export const TOPICS: Record<TopicId, { title: string; short: string; emoji: string; color: string; prefix: string; spec: string }> = {
  principles: { title: "Principles of Chemistry", short: "Principles", emoji: "⚛️", color: "#4f46e5", prefix: "pc", spec: "4CH1 1(a)–(d)" },
  bonding: { title: "Bonding & Structure", short: "Bonding", emoji: "🔗", color: "#0891b2", prefix: "bd", spec: "4CH1 1(f)–(h)" },
  calc: { title: "Formulae, Equations & Moles", short: "Moles", emoji: "🧮", color: "#7c3aed", prefix: "ca", spec: "4CH1 1(e)" },
  electro: { title: "Electrolysis", short: "Electrolysis", emoji: "⚡", color: "#ca8a04", prefix: "el", spec: "4CH1 1(i)" },
  inorganic: { title: "Inorganic Chemistry", short: "Inorganic", emoji: "🪨", color: "#64748b", prefix: "in", spec: "4CH1 2(a)–(e)" },
  acids: { title: "Acids, Salts & Chemical Tests", short: "Acids & Salts", emoji: "🧪", color: "#e11d48", prefix: "ac", spec: "4CH1 2(f)–(h)" },
  physical: { title: "Physical Chemistry", short: "Physical", emoji: "🔥", color: "#ea580c", prefix: "ph", spec: "4CH1 3(a)–(c)" },
  organic: { title: "Organic Chemistry", short: "Organic", emoji: "🛢️", color: "#059669", prefix: "or", spec: "4CH1 4(a)–(h)" },
  practical: { title: "Practical Skills", short: "Practical", emoji: "🔬", color: "#db2777", prefix: "pr", spec: "Practical skills" },
};

export const SECTIONS: { id: SectionId; topic: TopicId; label: string; emoji: string }[] = [
  { id: "principles-states", topic: "principles", label: "States of matter & diffusion", emoji: "🧊" },
  { id: "principles-mixtures", topic: "principles", label: "Mixtures & separation", emoji: "🧫" },
  { id: "principles-atoms", topic: "principles", label: "Atomic structure & isotopes", emoji: "⚛️" },
  { id: "principles-periodic", topic: "principles", label: "The Periodic Table", emoji: "🗂️" },
  { id: "bonding-ionic", topic: "bonding", label: "Ionic bonding", emoji: "➕" },
  { id: "bonding-covalent", topic: "bonding", label: "Covalent bonding", emoji: "🤝" },
  { id: "bonding-metallic", topic: "bonding", label: "Metallic bonding", emoji: "🔩" },
  { id: "calc-formulae", topic: "calc", label: "Formulae & equations", emoji: "✍️" },
  { id: "calc-moles", topic: "calc", label: "Moles, masses & % yield", emoji: "⚖️" },
  { id: "calc-volumes", topic: "calc", label: "Gas volumes & concentrations", emoji: "🎈" },
  { id: "electro-principles", topic: "electro", label: "How electrolysis works", emoji: "🔋" },
  { id: "electro-solutions", topic: "electro", label: "Electrolysis of solutions & half-equations", emoji: "💧" },
  { id: "inorganic-group1", topic: "inorganic", label: "Group 1 — alkali metals", emoji: "💥" },
  { id: "inorganic-group7", topic: "inorganic", label: "Group 7 — halogens", emoji: "🟡" },
  { id: "inorganic-air", topic: "inorganic", label: "Gases in the atmosphere", emoji: "🌍" },
  { id: "inorganic-reactivity", topic: "inorganic", label: "Reactivity series & redox", emoji: "🏆" },
  { id: "inorganic-metals", topic: "inorganic", label: "Extraction & uses of metals", emoji: "🏭" },
  { id: "acids-acids", topic: "acids", label: "Acids, alkalis & neutralisation", emoji: "🌈" },
  { id: "acids-titration", topic: "acids", label: "Titration", emoji: "🧪" },
  { id: "acids-salts", topic: "acids", label: "Making salts", emoji: "🧂" },
  { id: "acids-tests", topic: "acids", label: "Chemical tests", emoji: "🔎" },
  { id: "physical-energetics", topic: "physical", label: "Energetics", emoji: "🌡️" },
  { id: "physical-rates", topic: "physical", label: "Rates of reaction", emoji: "⏱️" },
  { id: "physical-equilibria", topic: "physical", label: "Reversible reactions & equilibria", emoji: "⇌" },
  { id: "organic-intro", topic: "organic", label: "Organic basics & naming", emoji: "🔤" },
  { id: "organic-crude", topic: "organic", label: "Crude oil & fuels", emoji: "🛢️" },
  { id: "organic-hydrocarbons", topic: "organic", label: "Alkanes & alkenes", emoji: "🧬" },
  { id: "organic-alcohols", topic: "organic", label: "Alcohols", emoji: "🍷" },
  { id: "organic-acids-esters", topic: "organic", label: "Carboxylic acids & esters", emoji: "🍏" },
  { id: "organic-polymers", topic: "organic", label: "Synthetic polymers", emoji: "🧵" },
  { id: "practical-apparatus", topic: "practical", label: "Apparatus, measurement & results", emoji: "📏" },
  { id: "practical-planning", topic: "practical", label: "Planning & evaluating experiments", emoji: "📋" },
];

export function sectionMeta(id: string) {
  return SECTIONS.find((s) => s.id === id);
}

export function sectionHref(id: string) {
  const s = sectionMeta(id);
  return s ? `/guide/${s.topic}#${s.id}` : "/guide/principles";
}

export const DIFFICULTY_META = {
  warmup: { label: "Warm-up", className: "bg-sky-100 text-sky-800" },
  core: { label: "Core", className: "bg-violet-100 text-violet-800" },
  challenge: { label: "Challenge", className: "bg-amber-100 text-amber-900" },
} as const;

/** Question counts per topic (MCQ set size, written set size). */
export const SET_SIZES: Record<TopicId, { mcq: number; qa: number }> = {
  principles: { mcq: 24, qa: 10 },
  bonding: { mcq: 20, qa: 8 },
  calc: { mcq: 24, qa: 10 },
  electro: { mcq: 16, qa: 6 },
  inorganic: { mcq: 24, qa: 10 },
  acids: { mcq: 24, qa: 10 },
  physical: { mcq: 24, qa: 10 },
  organic: { mcq: 24, qa: 10 },
  practical: { mcq: 16, qa: 8 },
};
