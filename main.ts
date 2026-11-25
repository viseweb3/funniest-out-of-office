import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Out-of-Office — one line, 140 characters or fewer.
// The joke: the auto-reply itself is also out of office, so the line
// you're reading is the under-qualified temp covering for it.
const ENTRY =
  "I'm out of office until Monday, and so is my auto-reply — this message is the temp covering for it, and it's already behind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
