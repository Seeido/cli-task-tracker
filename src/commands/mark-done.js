import { updateService } from "../services/task-service.js";

export function markDoneCmd(args) {
  let id = args[0];
  if (args.length != 1 || !/^\d+$/.test(id)) {
    throw Error(
      `please provide task (ID) to mark as done.\nSample: clitask mark-done 1`,
    );
  }

  id = Number(id); // ids must be numbers not strings

  const obj = {
    id,
    status: "done",
  };

  try {
    const updatedTask = updateService(obj);
    return `Task is done! (ID: ${updatedTask.id})`;
  } catch (error) {
    throw error;
  }
}
