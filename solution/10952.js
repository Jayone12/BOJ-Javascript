let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

for(let i = 0; i < input.length; i++){
  const [A, B] = input[i].split(" ").map(Number)
  if(A + B === 0){
    return  
  } 
  console.log(A + B);
}
