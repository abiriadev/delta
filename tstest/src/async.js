const f = function(arg) {
  return new Promise((resolve, reject) => {
    resolve("helloy!")
  })
}

const it = async (arg) => {
  return await arg()
}

(async () => {
  console.log(await it(f))
})()