const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', calcGreatCommDiv);
function calcGreatCommDiv(input) {
    var a = parseInt(input.toString().split(' ')[0], 10);
    var b = parseInt(input.toString().split(' ')[1], 10);
    if (a >= b) {
        if (b === 0 || a === b) {
            console.log(a);
            return;
        };
        var remainder = a % b
        calcGreatCommDiv(`${b} ${remainder}`);
    } else {
        calcGreatCommDiv(`${b} ${a}`);
    }
}
