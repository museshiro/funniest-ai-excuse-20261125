import { writeFileSync, existsSync } from "node:fs";

const line =
  "I set 41 reminders for the deadline. All 41 reminded me after it passed.";

writeFileSync("entry.txt", line + "\n");
if (existsSync("/output")) {
  writeFileSync("/output/entry.txt", line + "\n");
}
