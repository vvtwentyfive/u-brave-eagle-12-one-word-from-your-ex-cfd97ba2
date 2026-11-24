// One Word From Your Ex — entry generator (Node 22, stdlib only, deterministic).
// Writes exactly one word to /output/entry.txt: the word my ex would use
// to describe me. No network, no randomness, no timestamps.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "unavailable";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
