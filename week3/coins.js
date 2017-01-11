var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', countCoins);

var values = [10, 5, 1];
var coins = 0;

function countCoins (inputValue) {
  values = values.filter(function(value) {
    return inputValue >= value
  });
  // non devo fare il forEach. e' sufficiente prendere il primo elemento e poi fare recursive
  if (inputValue > 0) {
    values.forEach(function(coinValue) {
      var remainder = inputValue % coinValue;
      coins = (inputValue - remainder) / coinValue;
      if (remainder > 0) {
        countCoins(remainder)
      } else {
        console.log(coins, remainder, coinValue, 'HHHHHH');
      }
    })
  } else {
    console.log(coins);
    values = [10, 5, 1];
  }
};
