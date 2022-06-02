// FS모듈 런타임 에러로 인해 readline 모듈 사용
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {

  const X = parseInt(input[0]);
  const Y = parseInt(input[1]);
    
  if(X > 0 && Y > 0){
    console.log(1);
  } else if(X < 0 && Y > 0){
    console.log(2)
  } else if(X < 0 && Y < 0){
    console.log(3)
  } else {
    console.log(4)
  }
  process.exit();
});
