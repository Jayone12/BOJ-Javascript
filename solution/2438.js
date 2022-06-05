let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = "";
for(let i = 0; i < input; i++){
  result += "*"
  console.log(result)
}
