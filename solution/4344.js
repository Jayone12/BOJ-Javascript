let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const C = input[0];

for(let i = 1; i <= C; i++){
  let count = 0;
  // 아래에서 shift로 맨 앞자리를 제외시킨 배열임
  const score = input[i].split(" ").map(Number);
  // array.shift()로 맨 앞자리만 추출
  const N = score.shift();
  const average = score.reduce((prev, cur) => prev + cur)/N;

  for(let j = 0; j < N; j++){
    if(score[j] > average){
      count++;
    }
  }
  console.log((count/N * 100).toFixed(3) + "%")
}
