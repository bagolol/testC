const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', calcFib);
function calcFib(n) {
    var numbers = [0,1];
    if(n <= 1) {
        console.log(numbers[n]);
        return;
    }
    for(var i = 2; i <= n; i++) {
        var lastDigit = (numbers[i-2] + numbers[i-1]) % 10;
        numbers.push(lastDigit);
    }
    console.log(numbers[n]);
}
