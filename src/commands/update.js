import { updateService } from "../services/task-service.js";
import { styleText } from "node:util";

export function updateCmd(args) {
  let id = args[0];
  const description = args[1];
  if (args.length != 2 || !/^\d+$/.test(id) || !description) {
    throw Error(
      `please provide a task (ID) to update and the new description.\n${styleText("blue", 'Sample: clitask update 69 "Conquer my mind"')}`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  const obj = {
    id,
    description,
  };

  try {
    const updatedTask = updateService(obj);
    return `Task updated succesfully! (ID: ${styleText("magenta", updatedTask.id.toString())}${styleText("green", ")")}`;
  } catch (error) {
    throw error;
  }
}
