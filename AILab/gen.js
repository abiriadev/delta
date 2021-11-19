const difference = (a, b, call) => {
  let result = []

  const iterA = a[Symbol.iterator]()
  const iterB = b[Symbol.iterator]()

  for (let c = 0;; ++c) {
    const iteratorResultA = iterA.next()
    const iteratorResultB = iterB.next()

    if (iteratorResultA.done || iteratorResultB.done) break

    result.push(call(iteratorResultA.value, iteratorResultB.value, c))
  }

  return result
}


/*
const password = {
  value: "apple",
  checker(input) {
    return 1
  },
}*/

const fibonacciSequence = function*(seed) {
  let current = seed,
    last = 0
  while (true) {
    yield current;
    [last, current] = [current, last + current]
  }
}

const gen = fibonacciSequence(1)
for (let i = 0; i < 10; i++) {
  console.log(gen.next());
}

console.log(difference(fibonacciSequence(1), "abcdef", (a, b, i) => {
  console.log(`a: ${a}, b: ${b}, i: ${i}`)
  return [a, b]
}))