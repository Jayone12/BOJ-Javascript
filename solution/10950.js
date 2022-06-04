let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const T = input[0];
const numArr = input.slice(1);

for(let i = 0; i < T; i++){
  const A = Number(numArr[i].substr(0, 1));
  const B = Number(numArr[i].substr(-1));
  console.log(A + B)
}
