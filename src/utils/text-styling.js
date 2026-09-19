import { styleText } from "node:util";

export function styleError(error) {
  const newlineIndex = error.indexOf("\n");

  if (newlineIndex === -1) {
    return styleText("red", error);
  }

  return (
    styleText("red", error.slice(0, newlineIndex)) + error.slice(newlineIndex)
  );
}
