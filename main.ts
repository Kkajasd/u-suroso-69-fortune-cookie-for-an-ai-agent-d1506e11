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

// The entry is a fixed literal — no network, no randomness, no input — so
// the sealed scorer always sees the same 92 characters on every run. The
// gate also rejects a blank-only entry and a trailing newline, which would
// count as an extra character in the scorer's byte read.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.endsWith("\n") || ENTRY.endsWith("\r")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
