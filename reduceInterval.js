const reduceInterval = (iterable, cb, TIME_INTERVAL, seed) => {
  const iter = iterable[Symbol.iterator]()
  const next = prev => {
    const iterRes = iter.next()
    if (iterRes.done) return void 0
    const res = cb(iterRes.value, prev)
    setTimeout(
      next,
      TIME_INTERVAL,
      res
    )
  }
  setTimeout(
    next,
    TIME_INTERVAL,
    seed
  )
}

module.exports = reduceInterval

/*
reduceInterval(
  [
    1,
    2,
    3,
  ],
  console.log,
  1000,
  'seed'
)
*/