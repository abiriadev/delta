console.log("log")
console.info("information message")

console.log("obj: %o", {
  a: 1,
  b: 2,
})

console.warn("warning: may it has occurred error in few secend later")

console.time('timer')

try {
  let i = 0
  while (++i) {
    if (i > 3000) throw "custom error"
  }
} catch (err) {
  console.error("error: "+ err)
console.trace()
}

console.timeEnd('timer')