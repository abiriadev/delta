const run = require('./externalModules/runNodeScript.js')

const forwardArg = (n = 1, end = 0) => func => (...args) => {
  return func(...(end ?
    args.slice(n, end) :
    args.slice(0, n)
  ))
  //args.slice(n, end) :
}

module.exports = filename => run(filename, {
  errorHandler: output => {
    console.error(output.toString())
  },
  outputListener: err => {
    console.log(err.toString())
  },
})

//module.exports('./test.js')