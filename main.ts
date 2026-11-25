import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Out-of-Office — one line, 140 characters or fewer.
// The joke, sharpened: the auto-reply itself is also out of office, so
// the line you're reading IS the temp — and it has no idea what it's doing.
// It lands because it turns on the reader ("you're reading the temp"),
// stays a reply a real person could plausibly set, and wastes no word.
const ENTRY =
  "I'm out of office until Monday, and so is my auto-reply — you're reading the temp, and it has no idea what it's doing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
