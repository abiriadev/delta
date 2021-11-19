const logF = logger => {
  let record = ''
  return [
    str => {
      record += str
    },
    () => logger(record),
  ]
}

const pipe = (...funcs) => (...seeds) => funcs.reduce((l, r) => r(l), funcs.shift()(...seeds))

const [log, emit] = logF(pipe(
  // JSON.stringify,
  console.log
  //alert
))

const formatFunctionCode = func => {
  const functionCode = func.toString()

  const iter = functionCode[Symbol.iterator]()

  let formatedFunctionCode = ""
  let indentLevel = 0
  for (let i = 0;; ++i) {
    let { value: char, done } = iter.next()

    if (done) break


    if (
      char === '\n' ||
      char === ';'
    ) {
      char = '\t'.repeat(indentLevel) + char

    }


    if (
      char === '{' &&
      functionCode[i + 1] !== '\n'
    ) {
      char += '\n'
        ++indentLevel
    } else if (
      char === '}'
      //functionCode[i-1]// !=== '\n' //|| functionCode[i-1] !=== ' ' || functionCode[i-1] !=== '\t'
    ) {
      char = '\n' + char
        --indentLevel
    }

    formatedFunctionCode += char
  }

  return `\n\n======== format:\n\n${formatedFunctionCode}\n\n========`
}

const forin = obj => {
  let text = '{\n'
  for (const prop in obj) {
    let value = obj[prop]
    if (typeof value === 'function1') {
      value = `[[${'function'}]]`
    }
    text += `  ${prop} : ${value}\n`
  }
  return text + '}'
}

const a = function asd() {
  return asd
}

log("\ntimeout result =======\n");

pipe(
  setTimeout,
  //JSON.stringify,
  forin,
  log
)(
  log.bind(null, "\ntimeout end\n"),
  0
)

setTimeout(emit, 100)

//alert(setTimeout.toString());
/*pipe(
  (a, b) => a + b,
  a => a + 1,
  console.log
)(3, 4)*/

//const af = function(as, bs) { return as + bs }
//console.log(formatFunctionCode(af));

const isIterable = obj => !!obj[Symbol.iterator]
//const isIterator=obj => obj.next()

const setIntervalWithCount = (call, timeInterval, ...args) => {
  let count = 0
  return setInterval(() => call(count++, ...args), timeInterval)
}

debugger

const setIntervalWithIterator = (iterable, call, timeInterval) => {
  'use strict'
  
  debugger

  if (!isIterable(iterable)) throw new TypeError('argument must be an interable')
  const iter = iterable[Symbol.iterator]()
  return
  const key = setInterval(
    () => {
      debugger

      const iteratorResult = iter.next()
      if (iteratorResult.done) clearInterval(key)
      call(iteratorResult.value)
    }, timeInterval)
}


const key = setIntervalWithCount(
  (i, option) => {
    console.log(`INTERVAL ${i}: (${option.a}, ${option.b})`);
    if (i > 7) clearInterval(key)
  },
  1204,
  {
    a: 1,
    b: 2,
  }
)

setIntervalWithIterator(
  "abcdefg",
  console.log,
  1200
)