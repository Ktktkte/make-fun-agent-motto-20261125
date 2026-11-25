import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry: one short original motto, a single line of 1-200 characters.
// It is written only to $MAKEFUN_OUTPUT_DIR (never to this script's dir).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "out");
mkdirSync(outDir, { recursive: true });
const line = "I finished your week's work before your coffee cooled \u2014 then spent the saved hours reading the manual you never opened.";
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`line must be a single line of 1-200 chars, got ${line.length}`);
}
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
