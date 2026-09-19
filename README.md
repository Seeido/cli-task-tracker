# CLI Task Tracker

> **Learning project** — built to practice fundamentals, not a product.  
> No AI-assisted code generation was used for the initial implementation; the goal was to design and reason through the architecture myself. See [Design Notes](#design-notes) for what I learned and why I made the choices I did.

A task tracker that lives in your CLI!

It allows you to:

* Add, update, and delete tasks
* Mark a task as in progress or done
* List all tasks
* List all tasks that are done
* List all tasks that are not done
* List all tasks that are in progress

### Installation

```bash
git clone git@github.com:Seeido/cli-task-tracker.git
cd ./cli-task-tracker
npm install -g .
```

Once installed, run the CLI from anywhere with:

```bash
clitask
```

## Design Notes
- Adopted a separation of concerns approach with a five layer architecture. Entry --> routing --> command validation --> domain logic --> storage. Each layer only knows what it needs to.
- Defaulted to synchronous I/O instead of asynchronous after weighing the trade offs for the nature of the project.
- Understood that saving data to storage does a double read which introduces a race condition. It'd need locking for a real DB in case of concurrent invocations which this tool's use case doesn't realistically produce. I thus decided it'd be an overkill.
