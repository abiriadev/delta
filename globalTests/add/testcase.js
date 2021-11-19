const add = require('./add.js')
const unittest = require('./../../unittest.js')

const testcases = [
  {
    input: [
      1,
      2,
      3,
    ],
    output: 6,
  },
  {
    input: [
      'a',
      'b',
      'c',
    ],
    output: 'abc',
  },
  {
    input: [
      0,
    ],
    output: 0,
  },
  {
    input: [
      
    ],
    output: 0,
  },
  {
    input: [
      -17,
      18,
    ],
    output: 1,
  },
]

unittest(add, testcases)

/*
const totalResult = testcases.every(
  (testcase, i) => {
    let output
    try {
      output = add(...testcase.input)
    } catch (err) {
      output = err
    }
    const result = output === testcase.output
    console.log(`\nTEST CASE [${i}] =======\ninput: ${testcase.input}\noutput: ${output}\nexpected: ${testcase.output}\n>> ${result}\n`)

    return result
  }
)
*/
