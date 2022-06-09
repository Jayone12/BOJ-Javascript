let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);

const [A, B, C] = input;
const sum = (A * B * C).toString().split("").map(Number);

for(let i = 0; i < 10; i++){
  let count = 0;
  for(let j = 0; j < sum.length; j++){
    if(i === sum[j]){
      count++
    }
  }
  console.log(count)
}
