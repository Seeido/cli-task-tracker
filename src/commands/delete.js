import { deleteService } from "../services/task-service.js";

export function deleteCmd(args) {
  let id = args[0];
  if (args.length != 1 || !/^\d+$/.test(id)) {
    throw Error(
      `please provide task (ID) to delete.\nSample: clitask delete 2`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  try {
    const deletedTask = deleteService(id);
    return `Task deleted succesfully! (ID: ${deletedTask.id})`;
  } catch (error) {
    throw error;
  }
}
