const log = (...args) => (console.log(args), args)

const add = arg => new Promise((res, rej) => res(arg + 1))
const mul = arg => new Promise((res, rej) => rej(arg * 2))
const pow = arg => new Promise((res, rej) => res(Math.pow(arg, 2)))

function* getCof(arg) {
  //throw "aggs"

  const addRes = yield add(arg)
  const mulRes = yield mul(addRes)
  return yield pow(mulRes)

}

const aasd = asyncIter => function awaiter(data) {
  let iterResult
  try {
    iterResult = asyncIter.next(data)
  } catch (err) {
    console.log("+++++");
    console.error(err)
  }

  if (iterResult.done) {
    return data
  }

  const promise = iterResult.value
  return promise
    .then(awaiter)
    .catch(err=>console.error('!!!!',err))

}

aasd(getCof(5))
(0).then(console.log)