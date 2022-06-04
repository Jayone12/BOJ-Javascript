let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let result =""

for(let i = input; i > 0; i--){
  result += i + "\n"
}

console.log(result)
