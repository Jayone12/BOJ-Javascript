let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

if(input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0) ){
  console.log(1);
}else {
  console.log(0);
}


// 삼항 연산자로 변경해서 사용할 수 있다.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0) ? console.log(1) : console.log(0);
