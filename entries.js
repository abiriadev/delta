//Object.entries()

Object.entries = function*(obj) {
  const keys = Object.keys(obj)

  let i = 0
  while (keys[i]) {
    yield [keys[i], obj[keys[i]]]
      ++i
  }
}



/*
const iter = Object.entries({
  a: 1,
  b: 2,
  c: 3,
})
for (const [key, value] of iter) {
  console.log(`${key} : ${value}`);
}
*/