import { updateService } from "../services/task-service.js";

export function updateCmd(args) {
  let id = args[0];
  const description = args[1];
  if (args.length != 2 || !/^\d+$/.test(id) || !description) {
    throw Error(
      `please provide task (ID) to update and new description as a string\nSample: clitask update 69 "Conquer my mind"`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  const obj = {
    id,
    description,
  };

  try {
    const updatedTask = updateService(obj);
    return `Task updated succesfully! (ID: ${updatedTask.id})`;
  } catch (error) {
    throw error;
  }
}
