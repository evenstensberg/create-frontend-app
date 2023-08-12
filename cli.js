#!/usr/bin/env node

const Proportional = require('proportional');

const CLI = new Proportional();


CLI.levels(['svelte', 'react', 'angular', 'vue']);

CLI.hook({
  svelte: () => import('./svelte-hook.js'),
  react: () => require('./node_modules/.bin/create-react-app'),
  angular: () => require('./node_modules/.bin/ng'),
  vue: () => require('./vue-hook.js')
});

CLI.defaultLevel('vue');

CLI.run(process.argv.slice(2));