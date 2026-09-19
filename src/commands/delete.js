import { deleteService } from "../services/task-service.js";
import { styleText } from "node:util";

export function deleteCmd(args) {
  let id = args[0];
  if (args.length != 1 || !/^\d+$/.test(id)) {
    throw Error(
      `please provide a task (ID) to delete.\n${styleText("blue", "Sample: clitask delete 2")}`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  try {
    const deletedTask = deleteService(id);
    return `Task deleted succesfully! (ID: ${styleText("magenta", deletedTask.id.toString())}${styleText("green", ")")}`;
  } catch (error) {
    throw error;
  }
}
