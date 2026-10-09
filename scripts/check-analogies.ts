// Checks lib/extras/<topic>.ts: every guide section of the topic has 2–3 well-formed analogies.
// Run: node --experimental-strip-types scripts/check-analogies.ts [topic]
import { SECTIONS, TOPIC_ORDER } from "../lib/sections.ts";
import type { Analogy, TopicId } from "../lib/types.ts";

const only = process.argv[2] as TopicId | undefined;
const errors: string[] = [];
let total = 0;
for (const t of only ? [only] : TOPIC_ORDER) {
  const { analogies } = (await import(`../lib/extras/${t}.ts`)) as { analogies: Record<string, Analogy[]> };
  const ids = SECTIONS.filter((s) => s.topic === t).map((s) => s.id);
  for (const key of Object.keys(analogies)) if (!ids.includes(key as never)) errors.push(`${t}: unknown section ${key}`);
  for (const id of ids) {
    const list = analogies[id] ?? [];
    if (list.length < 2 || list.length > 3) errors.push(`${id}: ${list.length} analogies (want 2–3)`);
    list.forEach((a, i) => {
      total++;
      if (!a.title?.trim() || a.title.length > 70) errors.push(`${id}[${i}]: title missing or too long`);
      if (!a.text || a.text.split(/\s+/).length < 30) errors.push(`${id}[${i}]: text too short`);
      if (!a.breaksDown || a.breaksDown.length < 30) errors.push(`${id}[${i}]: breaksDown too short`);
    });
  }
}
if (errors.length) {
  console.log(`❌ ${errors.length} problems:\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log(`✅ ${total} analogies OK`);
