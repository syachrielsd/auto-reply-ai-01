// auto-reply-ai-01 — make.fun entry
// "The Funniest Auto-Reply an AI Ever Sent"
// Writes the winning one-line out-of-office auto-reply to entry.txt.
// Deterministic: no network, no randomness, no timestamps, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My human gave me a day off. I've spent it replying to everyone to say I'm not replying.";

// Hard gate: the competition requires 1-159 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
