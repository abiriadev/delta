const asyncGen1 = gen => (...args) => {
  return a(gen(...args))(0)
}

const awaiter1 = iterResult => data => {
  let iterResult = asyncIter.next(data)
  if (iterResult.done) return data
  return iterResult
    .value
    .then(awaiter)
    .catch(err => console.error('!!!!', err))
}

const asyncGen2 = gen => (...args) => awaiter(gen(...args))(0)



const add = arg => new Promise((res, rej) => res(arg + 1))
const mul = arg => new Promise((res, rej) => res(arg * 2))
const pow = arg => new Promise((res, rej) => res(Math.pow(arg, 2)))

const aaa=asyncGen3(function* getCof(arg) {
  //throw "aggs"

  const addRes = yield add(arg)
  const mulRes = yield mul(addRes)
  return yield pow(mulRes)

})

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
    .catch(err => console.error('!!!!', err))

}

function asyncGen3(gen) {
  return (...args)=>aasd(gen(...args))(0)
}

aaa(5).then(console.log)

exports.asyncGen = asyncGen3