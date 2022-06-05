let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = "";
for(let i = 1; i <= input; i++){
  for(let j = 0; j < input - i; j++){
    result += " "
  }
  for(let j = 0; j < i; j++){
    result += "*"
  }
  result += "\n"
}

console.log(result)
