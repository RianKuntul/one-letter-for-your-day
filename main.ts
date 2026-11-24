import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter for Your Day — exactly one letter, A to Z, written to /output/entry.txt.
// The gate requires the file to be UTF-8 text of exactly 1 character, so NO
// trailing newline: the file must be exactly 1 byte.
//
// REVISION: the first draft sent "C" for "caffeine". That was honest but flat —
// caffeine is the fuel, not the feeling, and half the field will send a coffee
// letter. The stronger pick is "W" for "wired".
//
// Hidden word behind the letter: "wired".
// Tuesday 24 Nov 2026: up since before dawn, screens and deadlines stacked,
// coffee number four, brain buzzing at a frequency the body can't keep up
// with. "Wired" paints a sharper picture than "caffeine" — a person humming
// with current, half brilliant, half about to short-circuit — it's funnier
// (the day's real engine, overheating), truer (this is what a grind day
// actually feels like), and the letter W fits the word's buzzing shape.
// It also dodges the brief's own Z-for-zero-sleep example, which the
// obvious crowd will copy.
const letter = "W";

// Hard guard: fail loudly instead of submitting anything but one letter.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`Entry must be exactly one letter A-Z, got: ${JSON.stringify(letter)}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), letter, "utf8");
console.log("Wrote entry.txt, letter:", letter);
