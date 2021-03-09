const { createFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');

console.clear();

createFile(argv.b, argv.l, argv.u)
  .then(fileName => console.log(fileName, 'created'))
  .catch(err => console.log(err));