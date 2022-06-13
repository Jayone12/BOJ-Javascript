let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

for(let i = 1; i <= input[0]; i++){
  let count = 0;
  let sum =  0;
  
  for(let j=0; j < input[i].length; j++){
    input[i][j] === "O" ? count++ : count = 0;
    sum += count;
  }
    console.log(sum)
}
