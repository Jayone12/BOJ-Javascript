// 시간초과로 진행되지 않는다..
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

if(input.length === 1){
  input = "0"+input
}

let [A, B] = input.split("").map(Number)
let N = ""
let cycle = 0;

while(input !== N){
  let result = A + B;
  N = B.toString() + result.toString().split("").slice(-1) // 68
  A = B // 6
  B = Number(result.toString().split("").slice(-1)) // 8
  result = A + B;
  N = B.toString() + result.toString().split("").slice(-1)
  cycle += 1;
}

console.log(cycle)

// 1의 자리는 숫자%10 하면 나오ㄴ다.
// 10의 자리는 숫자/10을 하면 나온다.
let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let cycle = 0;
let num = input;

while(true){
  let sum = parseInt(num/10 + num%10);
  num = (num%10)*10 + sum%10;
  cycle++;
  if(num === input) break;
}

console.log(cycle)
