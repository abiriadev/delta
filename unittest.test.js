const unittest= require('./unittest.js')

const testcases = [
  /*{
    input: [
      1,
      2,
    ],
    output: 3,
  },*/
  
  
  {
    input: [
      (a, b) => a + b,
      [
        {
          input: [
            1,
            2,
          ],
          output: 3,
        },
      ],
    ],
    output: true,
  },
  {
    input: [
      (a, b, c) => a * b * c,
      [
        {
          input: [
            2,
            3,
            5,
          ],
          output: 30,
        },
      ],
    ],
    output: true,
  },
]

/*
unittest.unittest(
  unittest.unittest,
  //(a, b) => a + b,
  testcases
)
*/

unittest.unittest(
  (a, b) => a + b,
  [
    {
      input: [
        16,
        -3
      ],
      output: 13
    },
    {
      input: [
        103,
        10
      ],
      output: 113
    },
    {
      input: [
        0,
        -0
      ],
      output: 0,
    }
  ]
)



