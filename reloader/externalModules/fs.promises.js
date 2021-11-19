const fs = require('fs')
const _ = require('lodash')
const promisify = require('./promisify.js')
const objEx = require('./objectExtra.js')

const filter = (func, key) => [
    'readFile',
    'writeFile',
    'readdir',
    'mkdir',
    'rename',
    'stat',
  ].indexOf(key) !== -1


module.exports = objEx.specificObjMap(
  fs,
  filter,
  func => promisify(func)
)

//module.exports.readFile('./fs.promises.js').then(console.log)

//console.log(module.exports);