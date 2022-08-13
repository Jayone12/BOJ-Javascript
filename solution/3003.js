let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
const completeSet = [1, 1, 2, 2, 2, 8]

let result = ""

input.forEach((peace, index) => {
  result += completeSet[index] - peace + " "
})

console.log(result)
