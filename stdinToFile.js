console.log("원하시는 파일명을 입력해 주세요");
process.stdin.once('data', data => {
  const fileName = data

  console.log("글자를 입력해 주세요");
  process.stdin.pipe(require('fs').createWriteStream(fileName))
})