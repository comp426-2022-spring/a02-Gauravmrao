import {coinFlip, coinFlips, countFlips, flipACoin} from '/home/runner/work/a02-Gauravmrao/a02-Gauravmrao/modules/coin.mjs';

let guessInput = process.argv.slice(2);

let guessCoin = guessInput[0];

if (guessCoin != "heads" && guessCoin != "tails") {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails])");
} else {
    console.log(flipACoin(guessCoin));
}



