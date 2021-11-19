const dataRecorder = init => {
  let data = init
  return [
    () => data,
    input => data = input
  ]
}


const unittest = testfunc => testcase => {

  /*const testfunc = function() {
    const hook = () => {
      console.log("hooked!");
    }
    _testfunc()

    return
  }*/

  const output =
    Array.isArray(testcase.input) ?
    testfunc.apply(testcase, testcase.input) :
    testfunc.call(testcase, testcase.input)

  const result = (testcase.successCondition(output))

console.log(5678);
  if (testcase.hook.call(window)
  
  ) {
strfy(    testcase.hook.call(window)

  )
  }

  return result
}