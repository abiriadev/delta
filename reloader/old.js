const fs = require('./externalModules/fs.promises.js')
const node = require('./externalModules/runNodeScript.js')
//const wid = require('./../widenString.js')
const ANSIcode = require('./externalModules/ANSI.js')
const path = require('path')

const runApp = dir => node(dir, {
  outputListener: output => {
    console.log(`app: ${output}`);
  },
  errorHandler: err => {
    console.error(`err: ${err}`)
    console.log(ANSIcode.red(`failed to run ${dir}`))
  },
})

const reloadApp = appDir => {

  appDir = path.normalize(appDir)
  fs.stat(appDir)
    .then(stat => {
      if (stat.isDirectory()) {
        return console.log(`'appDir' argument must be file`)
      }

      let c = 1
      console.log('\n[{=====START=====}]');

      console.log((ANSIcode.yellow(`[${c}] reload!`)));

      let app = runApp(appDir)
      const watcher = fs.watchFile(appDir.toString(), {
        //recursive: true,
      }, (curr, prev) => {
        ++c
        console.log((ANSIcode.yellow(`[${c}] reload!`)));
        //console.log('curr', curr.mtime);
        //console.log('prev', prev.mtime);
        app.kill()
        app = runApp(appDir)
      })
    })
    .catch(err => {
      console.error(`'${appDir}' is not exist`);
    })

}

module.exports = reloadApp

//reloadApp('testDir/app.js')