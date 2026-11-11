import {inspect} from './source.mjs';
import {readFixture} from './files.mjs';
const name=process.argv[2]??'devices.jsonld';
console.log(JSON.stringify(inspect(await readFixture(name)),null,2));
