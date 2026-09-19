import { addCmd } from "./add.js";
import { updateCmd } from "./update.js";
import { deleteCmd } from "./delete.js";
import { markInProgressCmd } from "./mark-in-progress.js";
import { markDoneCmd } from "./mark-done.js";
import { listCmd } from "./list.js";
import { styleText } from "node:util";

const validCommands = [
  "help",
  "add",
  "update",
  "delete",
  "mark-in-progress",
  "mark-done",
  "list",
];

const commandIdx = 0; // index.js passes args after trimming execPath and entry point

export function route(args) {
  const command = args[commandIdx];

  if (!validCommands.includes(command)) {
    throw Error(
      `'${command}' is not a valid command.\n${styleText("blue", "Run 'clitask help' for more information")}`,
    );
  }
  if (command === "help") {
    return helpMsg();
  }

  const argsCalled = args.slice(commandIdx + 1);

  return taskCommands[command](argsCalled);
}

function helpMsg() {
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

const taskCommands = {
  add: addCmd,
  update: updateCmd,
  delete: deleteCmd,
  "mark-in-progress": markInProgressCmd,
  "mark-done": markDoneCmd,
  list: listCmd,
};
