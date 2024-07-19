# TypeScript Kata Employee Processor

A Kata project to understand advance TypeScript, 
Includes decorators and Generic Types.

## Project structure
src folder with all the kata content
step-X folders with the content but in the incremental way.


## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:GonzaloCosinTeamCMP/typeScriptKata.git
   ```

## Kata
### Step 0 - Prepare environment
- Create a folder, like `kata` and change the `rootDir` vale from the `tsconfig.json` file
- >TODO - Add installation steps
### Step 1 - Base
- Create a different employers objects into a model: `Manager`, `Developer`, and `Intern`
- All of them most to implement the interface `Worker`, with the properties: `id` as read-only, `name` and `age`
- Every one has to be at least one custom property:
  - Manager: `department`
  - Developer: `programmingLanguages` 
  - Intern: `school`

### Step 2 - [Generics](https://www.youtube.com/watch?v=EcCTIExsqmI)
- Create a different classes to process each Worker, (just add a log 'Processing ${worker} .... ')
- Add a contract to follow to every processor using the generic type `T`.

### Step 3 - [Decorators](https://youtu.be/O6A-u_FoEX8?t=6)
- Create new decorator to add a default name `Pol` to the worker once its created if the name was not provided.
- Create new decorator to validate the age of a workers once its processed.
   
