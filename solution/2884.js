let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);

let H = input[0];
let M = input[1];

M -= 45;

if(M < 0){
  H -= 1;
  M += 60;
  if(H < 0) H = 23;
  console.log(H, M)
} else {
  console.log(H, M)
}
