import { getData, saveData } from "../utils/storage-service.js";

export function listService(status) {
  let tasks = getData();
  if (status) {
    tasks = tasks.filter((task) => task.status === status);
  }
  return tasks;
}

export function addService(obj) {
  const desc = obj.description;
  if (!desc) {
    throw Error(`(internal): received invalid object to add`);
  }
  return createTask(desc);
}

export function updateService(obj) {
  const id = obj.id;
  const description = obj.description;
  if (!description || !id) {
    throw Error(`(internal): received invalid object to update`);
  }
  return updateTask(obj);
}

export function deleteService(id) {
  let idx;
  try {
    [, idx] = getTask(id); // getTask returns index of passed task/id at the end
  } catch (error) {
    throw Error(`no task with ID ${id} found`);
  }
  return saveData("", idx, true); // last parameter determines to delete or not
}

function createTask(desc) {
  const taskObj = {
    id: getNewId(),
    description: desc,
    status: "todo",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  return saveData(taskObj);
}

function updateTask(newObj) {
  let task;
  let idx;
  try {
    [task, idx] = getTask(newObj.id); // getTask returns task object and its index in data.json
  } catch (error) {
    throw Error(`no task with ID ${newObj.id} found`);
  }
  const newTask = {
    id: task.id,
    description: newObj.description ? newObj.description : task.description,
    status: newObj.status ? newObj.status : task.status,
    createdAt: task.createdAt,
    updatedAt: Date.now(),
  };
  return saveData(newTask, idx);
}

function getNewId() {
  const dataArr = getData();
  const ids = dataArr.map((task) => task.id).sort((a, b) => a - b);
  let newId = 1;
  for (const id of ids) {
    if (newId !== id) break;
    newId++;
  }
  return newId;
}

function getTask(id) {
  const dataArr = getData();
  const validIds = dataArr.map((task) => task.id);
  if (validIds.includes(id)) {
    const taskIdx = dataArr.findIndex((obj) => obj.id === id);
    return [dataArr[taskIdx], taskIdx];
  }
  return false;
}
