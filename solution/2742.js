// 런타임 오류로 인해 readline 모듈 사용
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
  let result =""

  for(let i = input; i > 0; i--){
    result += i + "\n"
  }

  console.log(result)
  process.exit();
});
