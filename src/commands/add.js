import { addService } from "../services/task-service.js";

export function addCmd(args) {
  const description = args[0];
  if (args.length != 1 || !description) {
    throw Error(
      `please provide a description as a string\nSample: clitask add "Conquer the world"`,
    );
  }

  const obj = {
    description,
  };

  try {
    const newTask = addService(obj);
    return `Task added succesfully! (ID: ${newTask.id})`;
  } catch (error) {
    throw error;
  }
}
