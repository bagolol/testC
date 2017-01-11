const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', lcm);
function lcm (input) {
    var a = parseInt(input.toString().split(' ')[0], 10);
    var b = parseInt(input.toString().split(' ')[1], 10);
    var test = (a/calcGreatCommDiv(a,b)*b)
}
function calcGreatCommDiv(a, b) {
    if (a >= b) {
        if (b === 0 || a === b) {
            return a;
        };
        var remainder = a % b
        return calcGreatCommDiv(b, remainder);
    } else {
        return calcGreatCommDiv(b, a);
    }
}

