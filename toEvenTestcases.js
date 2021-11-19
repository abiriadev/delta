const unittest = require('./unittest.js')

const toEven = integer => integer >> 1 << 1
//(integer | 1)-1

const testcases = [
  {
    input: [
      156,
    ],
    output: 156,
  },
  {
    input: [
      8261,
    ],
    output: 8260,
  },
  {
    input: [
      259592219,
    ],
    output: 259592218,
  },
  {
    input: [
      0,
    ],
    output: 0,
  },
  {
    input: [
      NaN,
    ],
    output: 0,
  },
  {
    input: [
      9522966,
    ],
    output: 9522966,
  },
  {
    input: [
      77036360,
    ],
    output: 77036360,
  },

]

//unittest.unittest(toEven, testcases)
unittest.performance(i => (i | 1) - 1, testcases, 100000000)
unittest.performance(i => i >> 1 << 1, testcases, 100000000)
unittest.performance(i => Math.floor(i / 2), testcases, 100000000)