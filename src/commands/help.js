import { styleText } from "node:util";

export function helpCmd() {
  return `${styleText("blue", "Usage: clitask <command> [options]")}\n\n${styleText("blue", "Commands:")}\n  ${styleText(
    "green",
    styleText("green", "add ") + styleText("cyan", "<description>"),
  )} - Add a new task\n  ${styleText(
    "green",
    styleText("green", "update ") +
      styleText("magenta", "<id>") +
      styleText("cyan", " <description>"),
  )} - Update an existing task's description\n  ${styleText(
    "green",
    styleText("green", "delete ") + styleText("magenta", "<id>"),
  )} - Delete a task\n  ${styleText(
    "green",
    styleText("green", "mark-in-progress ") + styleText("magenta", "<id>"),
  )} - Mark a task as in-progress\n  ${styleText(
    "green",
    styleText("green", "mark-done ") + styleText("magenta", "<id>"),
  )} - Mark a task as done\n  ${styleText("green", "list ")}${styleText("cyan", "[status]")} - List tasks (optional status filter)\n`;
}
