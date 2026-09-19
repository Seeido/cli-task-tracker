import { updateService } from "../services/task-service.js";

export function markInProgressCmd(args) {
  let id = args[0];
  if (args.length != 1 || !/^\d+$/.test(id)) {
    throw Error(
      `please provide task (ID) to mark as in-progress.\nSample: clitask mark-in-progress 3`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  const obj = {
    id,
    status: "in-progress",
  };

  try {
    const updatedTask = updateService(obj);
    return `Task is now in-progress! (ID: ${updatedTask.id})`;
  } catch (error) {
    throw error;
  }
}
