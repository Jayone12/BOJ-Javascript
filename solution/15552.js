let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const T = Number(input[0]);
let result = ""

for(let i = 1; i <= T; i++){
  const [A, B] = input[i].split(" ").map(Number);
  result += A + B +"\n"
}

console.log(result)
