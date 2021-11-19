module.exports = function(func) {
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