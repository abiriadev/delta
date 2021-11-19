const fs = require('./../fs.promises.js')
const path = require('path')
const { Debuglog } = require('./../Debuglog.js')
const ANSIcode = require('./../ANSI.js')

process.env.NODE_DEBUG = 'fsdebug'

const log = new Debuglog('fsdebug', {
  color: ANSIcode.c256(110)

}, process.stdout)

const jsFilter = (dir, target) => new Promise((resolve, reject) => {
  fs
    .readdir(dir)
    .then(files => {
      const onlyFiles = files.filter(file => fs.statSync(path.join(dir, file)).isFile())

      let list = []
      list=list.concat(
        onlyFiles.filter(file => path.extname(file) === '.js')
      )

      log.log(list)

      let onlyDirs = []
      for (let i = 0; i < files.length; i++) {
        if (onlyFiles.indexOf(files[i]) === -1) {
          onlyDirs.push(files[i])
        }
      }

      onlyDirs.forEach(internalDir => {
        if (internalDir === 'node_modules') return
        fs.readdir(path.join(dir, internalDir))
          .then(internalDirFiles => {

            if (internalDirFiles.some(
                internalDirFilesFileName =>
                path.extname(internalDirFilesFileName) === '.js')) {
              list.push(internalDir)
            }
          })
          .catch(reject)
      })

      console.log('list', list);

      const promisedList = list.map(file => fs.rename(
        path.join(dir, file),
        path.join(target, file)
      ))

      Promise.all(promisedList)
        .then(console.log)
        .then(resolve)
        .catch(err => {
          console.log('error in promisedList');

          console.error(err)
        })

    })
    .catch(reject)
})

module.exports = jsFilter