let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

for(let i = 1; i <= input[0]; i++){
  const [A, B] = input[i].split(" ").map(Number)
  console.log(`Case #${i}: ${A + B}`)
}
