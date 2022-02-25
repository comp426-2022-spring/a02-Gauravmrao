import {coinFlip, coinFlips, countFlips, flipACoin} from '/home/runner/work/a02-Gauravmrao/a02-Gauravmrao/modules/coin.mjs';

let inputData = process.argv;
if (inputData.length < 3) {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails])");
} else {
    let guessInput = process.argv.slice(2);

    let guessCoin = guessInput[0];
    
    if (guessCoin == "heads") {
        console.log(flipACoin(guessCoin));
    } else if (guessCoin == "tails") {
        console.log(flipACoin(guessCoin));
    } else {
        console.log("Error: no input.");
        console.log("Usage: node guess-flip --call=[heads|tails])");
    }
}
