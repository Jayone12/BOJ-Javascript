let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const firstNum = parseInt(input[0]);
const secondNum = parseInt(input[1]);
const oneDigit = parseInt(input[1].slice(-1));
const twoDigit = parseInt(input[1].slice(1, 2));
const threeDigit = parseInt(input[1].slice(0, 1));

console.log(`${firstNum * oneDigit}
${firstNum * twoDigit}
${firstNum * threeDigit}
${firstNum * secondNum}`)
