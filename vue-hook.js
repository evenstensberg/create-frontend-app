const { exec } = require('node:child_process');

return exec('cd ./create-vue && npm i && npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    process.exit(6);
    return;
  }
   return require('./create-vue/outfile.cjs')
}); 


