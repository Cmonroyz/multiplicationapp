
import { yarg } from '../src/config/plugin/args.plugin';


(async() => {
  await main();
  console.log('fin del programa');
})();

async function main() {
  console.log( yarg );
}