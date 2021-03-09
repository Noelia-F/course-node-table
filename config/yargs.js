const argv = require('yargs')
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'base multiplication table',
              })
              .option('l', {
                alias: 'list',
                type: 'boolean',
                default: false,
                description: 'show multiplication table',
              })
              .option('u', {
                alias: 'until',
                type: 'number',
                default: 10,
                description: 'limit number multiplication table'
              })
              .check((argv, options) => {
                if( isNaN(argv.b)) {
                  throw 'La base tiene que ser un número'
                }
                return true;
              })
              .argv;

module.exports = argv;