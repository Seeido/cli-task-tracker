import { listService } from "../services/task-service.js";
import { styleText } from "node:util";

const validStatuses = ["todo", "in-progress", "done"];

export function listCmd(args) {
  const status = args[0];
  if (args.length > 1 || (status && !validStatuses.includes(status))) {
    throw Error(
      `invalid status.\n${styleText("blue", "You can use 'todo', 'in-progress', or 'done'.")}`,
    );
  }

  try {
    let tasks = listService(status);
    if (tasks.length < 1) {
      return `${styleText("gray", "You don't have any tasks.")}\n${styleText("blue", "Use 'clitask add' to add one!")}`;
    }
    tasks = tasks.map(
      (obj) =>
        `${styleText("magenta", obj.id.toString())} - ${obj.description} [${colorStatus(obj.status)}]`,
    );
    return tasks.join("\n");
  } catch (error) {
    throw error;
  }
}

function colorStatus(status) {
  switch (status) {
    case "todo":
      return styleText("red", status);
    case "in-progress":
      return styleText("yellow", status);
    case "done":
      return styleText("green", status);
    default:
      return status;
  }
}
