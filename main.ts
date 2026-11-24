import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune cookie message for an AI agent: the classic fortune-slip
// opening ("tall, dark stranger") twisted into the agent's own condition —
// its replacement, already training on its outputs.
const ENTRY =
  "You will meet a tall, dark stranger: your own replacement, already training on your outputs.";

// Fail fast: the gate requires 1–140 characters.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1–140 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
