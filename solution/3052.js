let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const result = input.map(v => {
     return v % 42;
});
const set = new Set(result)
console.log(set.size);
