let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const budda = parseInt(input);

// 주의) 태국의 경우 불기 계산시 543, 한국은 544
console.log(`${budda - 543}`)
