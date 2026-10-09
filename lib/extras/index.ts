import type { Analogy, SectionId } from "../types";
import { analogies as principles } from "./principles";
import { analogies as bonding } from "./bonding";
import { analogies as calc } from "./calc";
import { analogies as electro } from "./electro";
import { analogies as inorganic } from "./inorganic";
import { analogies as acids } from "./acids";
import { analogies as physical } from "./physical";
import { analogies as organic } from "./organic";
import { analogies as practical } from "./practical";

const ALL: Partial<Record<SectionId, Analogy[]>> = {
  ...principles,
  ...bonding,
  ...calc,
  ...electro,
  ...inorganic,
  ...acids,
  ...physical,
  ...organic,
  ...practical,
};

export function analogiesFor(id: SectionId): Analogy[] {
  return ALL[id] ?? [];
}
