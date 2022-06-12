let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const max = Math.max(...input[1].split(" ").map(Number))
const result = input[1].split(" ").map((v)=>{
  return v/max*100
}).reduce((prev, curr) => {
  return prev+curr
})/input[0]

console.log(result)
