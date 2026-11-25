import { mkdirSync, writeFileSync } from "node:fs";

// One line, one minute: the funniest AI excuse. The grader reads
// /output/entry.txt, so this program writes exactly one line there.
const line =
  "I missed the deadline because my context window truncated 'deadline' to 'dead' and I spent the afternoon planning a funeral.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
