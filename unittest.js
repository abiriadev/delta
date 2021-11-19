const _ = require('lodash')
const Timer = require('./Timer.js')
const ANSIcode = require('./ANSI.js')

const tab = ' '.repeat(1)

const totalResultTemplate = totalResult => `result: ${
    totalResult ?
    ANSIcode.green("success") :
    ANSIcode.red("faild")
  }\n`

const testAndReportF =
  test =>
  (
    testcase,
    i
  ) => {
    
  const result = test(testcase, i)
  console.log(result.report)
  
  return result[0]
}

const specificOrEvery =
(list, func) =>
index => _.every(
  typeof index === 'number'
  ? [list[index]]
  : list,
  func
)

const unittest = function(
  func,
  testcases,
  option = {}
) {

  debugger
  //console.log("start uniittest function");

  // parameter initalize
  Object.assign(
    option,
    {
      index: false,
      logResult: true,
    }
  )

  // make test
  const test = testF(func)
  //const testAndReport = testAndReportF(test)

  // judge the result each all testcase and calc total result
  const totalResult =
    specificOrEvery(
      testcases,
      //testAndReport
      (
        testcase,
        index
      )=>{
        
        debugger // in test
        
        const testResult = [
          ,
          {
            output,
            record,
          }
        ] = test(testcase)

        if(option.logResult){
          console.log(
            report({
              output,
              record,
              index,
              input: testcase.input,
              expecte: testcase.output,
              result: testResult[0],
            })
          )
        }

        return testResult[0] // result
      }
    )(option.index)

  console.log(totalResultTemplate(totalResult));
  return totalResult
}

const testF =
  testFunc =>
  (
    testcase
    //index
  ) => {
    debugger

    let output = null
    const timer = new Timer()

    // execute the testFunc
    try {

      timer.start()
      output = testFunc(...testcase.input)
      timer.end()

    } catch (err) {
      // if error, output is error object
      output = err
    }

    // judge that is successed
    const result = output === testcase.output

    // return the testResult
    return [result, {
      //report,
      output,
      //index,
      record: timer.record
  }]
}

// make string report
const report = information => `\nTEST CASE [${
    information.index
  }] ${
    "=".repeat(15)
  }\ninput:  ${tab}${
    information.input
  }\noutput: ${tab}${
    information.output
  }\nexpecte:${tab}${
    information.expecte
  }\n>> ${
    information.result
    ? ANSIcode.custom(
      '\u001b[42m',
      "success"
    )
    : ANSIcode.custom(
      '\u001b[41m',
      "faild"
    )
  }\n(in ${
    information.record/1000
  }s)\n`

const performance = function(
  func,
  testcases,
  repeatTime, //=100,
  index
) {
  const test = testF(func)
  let totalTime = 0
  let totalResult = true
  try {
    for (
      var i = 0; i < repeatTime;
      ++i
    ) {
      const testResult = test(testcases[i % testcases.length], i)
      if (!testResult[0]) throw new Error(testResult[1].report)

      /*
      if (testResult.output instanceof Error) {
        throw testResult.output
      } else {
        throw "error"
      }
      */

      totalTime += testResult[1].record
    }
  } catch (err) {
    //'test1 has failed'

    if (err.message) {
      console.log("failed during performance test")

      console.log(err.message);

      totalResult = false
    } else {
      console.log('ERROR!!!!!!');
      console.log(err);
      console.trace()
      throw err
    }
  }

  console.log(totalResultTemplate(totalResult));
  console.log(`all ${i} testes in ${totalTime/1000}s`);
}

const positiveTest = ()=>{
  
}

const negativeTest = ()=>{
  
}

const positiveToNormal = positiveTestcases => {
  
}

Object.assign(unittest, {
  unittest,
  performance,
})

module.exports = unittest