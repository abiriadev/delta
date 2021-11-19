const fs = require('./../fs.promises.js')
const path = require('path')

const moveAll = (dir, target) => new Promise((resolve, reject) => {
  fs
    .readdir(dir)
    .then(files => Promise.all(files.map(file => fs.rename(
      path.join(dir, file),
      path.join(target, file)
    ))))
    .then(resolve)
    .catch(reject)
})

module.exports=moveAll