# create-frontend-app

Combines all create cli tools into one cli.

## Installation

1. Clone this repo
2. `$ git submodule update --remote`
3. `$ nvm i && npm install`
4. `$ npm link`
5. `$ create-frontend <framework> name-of-package`

## Tools

1. Vue
2. Svelte
3. React
4. Angular

## Example

`create-frontend react react-todo`

## How it works

The CLI uses [`proportional`](https://github.com/evenstensberg/proportional) to link binaries or scripts into CLI flags. For repositories that doesnt have binaries, we have git submodules for those and create hooks that builds their modules.
