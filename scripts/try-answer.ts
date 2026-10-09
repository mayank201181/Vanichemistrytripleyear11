// Mark a sample student answer against a written question's mark scheme.
// Usage: node --experimental-strip-types scripts/try-answer.ts ca-w03 "my answer text"
import { gradeQA, keywordMatches, tokens } from "../lib/grade.ts";
import { TOPIC_ORDER } from "../lib/sections.ts";
import type { QA } from "../lib/types.ts";

const [id, ...rest] = process.argv.slice(2);
const answer = rest.join(" ");
const pool: QA[] = [];
for (const t of TOPIC_ORDER) pool.push(...(await import(`../lib/content/${t}/qa.ts`)).qa.questions);
pool.push(...(await import("../lib/content/paper.ts")).paper.questions);
const qa = pool.find((q) => q.id === id);
if (!qa || !answer) {
  console.log('Usage: node --experimental-strip-types scripts/try-answer.ts <qa-id> "answer"');
  process.exit(1);
}
const r = gradeQA(qa, answer);
const toks = tokens(answer);
console.log(`${qa.id}: ${r.hit}/${r.total} (${r.verdict})`);
qa.markScheme.forEach((mp, i) => {
  const matched = mp.keywords.filter((k) => keywordMatches(toks, k));
  console.log(`  ${r.credited[i] ? "✅" : "❌"} ${mp.point}${matched.length ? `   [matched: ${matched.join(" | ")}]` : ""}`);
});
