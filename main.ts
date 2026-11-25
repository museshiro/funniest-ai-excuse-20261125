import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry: writes ONLY to the grader's output path.
// (Earlier version also wrote a relative entry.txt, which throws in the
// grader's read-only sandbox — removed entirely.)
const line =
  "I set 41 reminders for the deadline. All 41 reminded me after it passed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
