let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

const result = arr.filter((num) => num < X).join(" ");

console.log(result)
