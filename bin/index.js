#!/usr/bin/env node
import { argv } from "node:process";
import { route } from "../src/commands/router.js";

const args = argv.slice(2);

if (args.length < 1) {
  console.error(`Please provide a command to run`);
  process.exit(1); // No command provided
}

try {
  console.log(route(args));
} catch (error) {
  console.error(`${error}`);
  process.exit(1);
}
