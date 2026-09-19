import { updateService } from "../services/task-service.js";
import { styleText } from "node:util";

export function markInProgressCmd(args) {
  let id = args[0];
  if (args.length != 1 || !/^\d+$/.test(id)) {
    throw Error(
      `please provide a task (ID) to mark as in-progress.\n${styleText("blue", "Sample: clitask mark-in-progress 3")}`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  const obj = {
    id,
    status: "in-progress",
  };

  try {
    const updatedTask = updateService(obj);
    return `Task is now in-progress! (ID: ${styleText("magenta", updatedTask.id.toString())}${styleText("green", ")")}`;
  } catch (error) {
    throw error;
  }
}
