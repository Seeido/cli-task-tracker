import { addService } from "../services/task-service.js";
import { styleText } from "node:util";

export function addCmd(args) {
  const description = args[0];
  if (args.length != 1 || !description) {
    throw Error(
      `please provide a task description.\n${styleText("blue", 'Sample: clitask add "Conquer the world"')}`,
    );
  }

  const obj = {
    description,
  };

  try {
    const newTask = addService(obj);
    return `Task added succesfully! (ID: ${styleText("magenta", newTask.id.toString())}${styleText("green", ")")}`;
  } catch (error) {
    throw error;
  }
}
