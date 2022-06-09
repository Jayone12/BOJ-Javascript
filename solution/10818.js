let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const numArr = input[1].split(" ").map(Number);

const min = Math.min(...numArr);
const max = Math.max(...numArr);

console.log(min, max)
