import { listService } from "../services/task-service.js";

const validStatuses = ["todo", "in-progress", "done"];

export function listCmd(args) {
  const status = args[0];
  if (args.length > 1 || (status && !validStatuses.includes(status))) {
    throw Error(
      `invalid status. You can use 'todo', 'in-progress', or 'done'.`,
    );
  }

  try {
    let tasks = listService(status);
    if (tasks.length < 1) {
      return `There are no tasks yet. Use 'clitask add' to add one!`;
    }
    tasks = tasks.map(
      (obj) => `${obj.id} - ${obj.description} [${obj.status}]`,
    );
    return tasks.join("\n");
  } catch (error) {
    throw error;
  }
}
