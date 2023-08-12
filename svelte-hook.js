const { exec } = require('node:child_process');

return exec('cd ./kit/packages/create-svelte && npm i && npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    process.exit(6);
    return;
  }
  return import('./kit/packages/create-svelte/bin.js')
}); 


