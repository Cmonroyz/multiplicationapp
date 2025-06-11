import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; 


export const yarg = yargs(hideBin(process.argv))
.option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Multiplication table base',

})
.option('l', {
  alias: 'limit',
  type: 'number',
  default: 10,
  describe: 'Multiplication table limit',
})
.option('s',{
  alias: 'show',
  type: 'boolean',
  default: false,
  describe: 'Show the multiplication table in console',
})
.option('n', {
  alias: 'name',
  type: 'string',
  default: 'multiplication-table',
  describe: 'Name of the output file',
})
.option('d', {
  alias: 'destination',
  type: 'string',
  default: 'outputs',
  describe: 'Destination folder for the output file',
})
.check((argv, options) => {
  if (argv.b < 1) throw 'Base must be a positive number';
  return true;
})
.parseSync()