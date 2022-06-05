// 해당 문제의 경우는 문제를 찾지 못하여 질문을 검색해 보아서 해결하였다.
// https://www.acmicpc.net/board/view/59328

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

for(let i = 0; i < input.length-1; i++){
  const [A, B] = input[i].split(" ").map(Number)
  console.log(A + B)
}
