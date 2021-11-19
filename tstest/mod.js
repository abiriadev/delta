const util = require('util')

util.asd = 467

util.promisify = function(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, ...result) => {
        if (err) {
          reject(err)
        }
        resolve(...result)
      })
    })
  }
}