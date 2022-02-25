/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  let coinValue;
  let coinNum = Math.random();
  if (coinNum < 0.5 ) {
    coinValue = "heads";
  } else {
    coinValue = "tails";
  }
  return coinValue;
}



/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const flippies = [];
  for (let i = 0; i < flips; i ++) {
    flippies.push(coinFlip())
  }
  return flippies;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  
  let headsCounter = 0;
  let tailsCounter = 0;
  for (let i = 0; i < array.length; i ++) {
    if (array[i] = "heads") {
      headsCounter += 1;
    } else {
      tailsCounter += 1;
    }

  }


  if (headsCounter == 0 && tailsCounter != 0) {
    const tailFlipsOnly = {tails: tailsCounter};
    return tailFlipsOnly;
  } else if (headsCounter != 0 && tailsCounter == 0) {
    const headFlipsOnly = {heads: headsCounter};
    return headFlipsOnly;
  } else if (headsCounter == 0 && tailsCounter == 0) {
    const noFlips = {};
    return noFlips;
  } else {
    const flips = {tails: tailsCounter, heads: headsCounter};
    return flips;
  }

}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let currentCoin = coinFlip();
  let status;

  if (currentCoin = call) {
    status = "win";
  } else {
    status = "lose";
  }
    
  const output = {call: call, flip: currentCoin, result: status};
  return output;
}


/** Export 
 * 
 * Export all of your named functions
*/

export {coinFlip, coinFlips, countFlips, flipACoin};