import { updateService } from "../services/task-service.js";
import { styleText } from "node:util";

export function markDoneCmd(args) {
  let id = args[0];
  if (args.length != 1 || !/^\d+$/.test(id)) {
    throw Error(
      `please provide a task (ID) to mark as done.\n${styleText("blue", "Sample: clitask mark-done 1")}`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  const obj = {
    id,
    status: "done",
  };

  try {
    const updatedTask = updateService(obj);
    return `Task is done! (ID: ${styleText("magenta", updatedTask.id.toString())}${styleText("green", ")")}`;
  } catch (error) {
    throw error;
  }
}
