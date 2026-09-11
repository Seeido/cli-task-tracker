#!/usr/bin/env node
import { argv } from 'node:process';
import { route } from '../src/commands/router.js'

const args = argv.slice(2);

if (args.length < 1) { //
    console.log(`Please provide a command to run`);
    process.exit(1); // No command provided
}

route(args);
