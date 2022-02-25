import {flipACoin} from './modules/coin.mjs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let guessInput = require('minimist')(process.argv.slice(2));
// console.log(process.argv);
// console.log(guessInput.call);

let guessCoin = guessInput.call;

if (guessCoin == 'heads' || guessCoin == 'tails') {
    console.log(flipACoin(guessCoin));
} else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails])");
}
