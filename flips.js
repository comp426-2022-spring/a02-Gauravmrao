// Import statement

// import {coinFlip, coinFlips, countFlips, flipACoin} from '/home/runner/work/a02-Gauravmrao/a02-Gauravmrao/modules/coin.mjs';
import {coinFlip, coinFlips, countFlips, flipACoin} from '/Users/grao2/Documents/UNC Chapel Hill/Sophomore Year Classwork/Spring Semester/comp426/a02-Gauravmrao/modules/coin.mjs';


let flipsInput = process.argv.slice(2);
let numFlips = flipsInput[0];

/*
let flipNumber;

for (var i = 0; i < flipNumberWord.length; i++) {
    if (flipNumberWord.charAt(i).isn)
    alert(str.charAt(i));
  }

let flipNumber = flipNumberWord.slice(9);
*/


console.log(numFlips);

// let numFlips = flipsInput.match(/\d+/);

// --number=10 -> index 9


if (numFlips >= 0) {
    let coins = coinFlips(numFlips);
    console.log(coins);
    console.log(countFlips(coins));
} else {
    let coins = coinFlips(1);
    console.log(coins);
    console.log(countFlips(coins));
}