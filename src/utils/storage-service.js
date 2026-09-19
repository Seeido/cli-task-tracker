import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DATA_PATH = path.resolve(
  path.join(import.meta.dirname, "../../storage/data.json"),
);

export function getData() {
  try {
    mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    writeFileSync(DATA_PATH, "[]", { encoding: "utf-8", flag: "wx" });
  } catch (error) {
    // 'EEXIST' means the file already exists, which passes the check
    if (error.code !== "EEXIST") {
      throw Error(`Error validating storage: ${error}`);
    }
  }

  try {
    const data = readFileSync(DATA_PATH, "utf-8");
    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) {
      throw Error(`data form invalid. File likely corrupted`);
    }
    return parsedData;
  } catch (error) {
    throw Error(`can't read data file\n${error}`);
  }
}

// idx is provided if there's an existing task to update. del is passed as true if task should be deleted
export function saveData(taskObj, idx, del) {
  const dataArray = getData();
  let returnObj;
  if (idx != null) {
    if (del) {
      returnObj = dataArray.splice(idx, 1)[0]; // splice returns deleted elements in an array
    } else {
      dataArray[idx] = taskObj;
      returnObj = taskObj;
    }
  } else {
    dataArray.push(taskObj);
    returnObj = dataArray.at(-1);
  }
  writeFileSync(DATA_PATH, JSON.stringify(dataArray), "utf-8");
  return returnObj;
}
