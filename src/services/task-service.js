export function addService(obj) {
  const desc = obj["description"];
  if (!desc) {
    throw Error(`(internal): received invalid object to add`);
  }
  return createTask(desc);
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

// IMPLEMENT: update provided fields for task id passed and leave others unchanged
function updateTask(obj) {
  const taskObj = {};
  return saveData(taskObj);
}

function getNewId() {
  const dataArr = getData();
  const ids = dataArr.map((task) => task["id"]).sort((a, b) => a - b);
  let newId = 1;
  for (const id of ids) {
    if (newId !== id) break;
    newId++;
  }
  return newId;
}

import { getData, saveData } from "../utils/storage-service.js";
