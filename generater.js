function* gen() {
  let i = 1
  while (true) {
    yield ++i
  }
}

const genObj = gen()

console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));
console.log(JSON.stringify(genObj.next()));