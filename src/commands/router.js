import { addCmd } from "./add.js";
import { updateCmd } from "./update.js";
import { deleteCmd } from "./delete.js";
import { markInProgressCmd } from "./mark-in-progress.js";
import { markDoneCmd } from "./mark-done.js";
import { listCmd } from "./list.js";
import { styleText } from "node:util";

const validCommands = [
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

  const argsCalled = args.slice(commandIdx + 1);

  return taskCommands[command](argsCalled);
}

const taskCommands = {
  add: addCmd,
  update: updateCmd,
  delete: deleteCmd,
  "mark-in-progress": markInProgressCmd,
  "mark-done": markDoneCmd,
  list: listCmd,
};
