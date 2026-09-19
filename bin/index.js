#!/usr/bin/env node
import { argv } from "node:process";
import { route } from "../src/commands/router.js";
import { styleError } from "../src/utils/text-styling.js";
import { styleText } from "node:util";

const args = argv.slice(2);

if (args.length < 1) {
  console.error(
    styleError(
      `Please provide a command to run.\n${styleText("blue", "Run 'clitask help' for more information")}`,
    ),
  );
  process.exit(1); // No command provided
}

try {
  console.log(styleText("green", route(args)));
} catch (error) {
  console.error(styleError(`${error}`));
  process.exit(1);
}
