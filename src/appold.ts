import fs from 'fs';
import { yarg } from './config/plugin/args.plugin';

const {b:base, l:limit, s:showTable} = yarg;

let outputMessage = '';
const headerMessage = `
----------------------
Tabla del ${ base }  
----------------------`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + '\n' + outputMessage;
if (showTable === true){
    console.log(outputMessage)
};

const outputPath = 'outputs';
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);