const fs = require('./fs.promises.js')
const readline = require('readline')
const path = require('path')
const ANSIcode = require('./ANSI.js')
const promisify = require('./promisify.js')
const util = require('util')
const Debuglog = require('./Debuglog.js').Debuglog
const asyncGen = require('./asyncGen.js').asyncGen
const { compile } = require('./purebox/cmd.js')

process.env.NODE_DEBUG = 'debugCLI'
//const debugC= util.debuglog('debugcase-C')

//console.log(Debuglog);

const debugCLI = new Debuglog('debugCLI', {
  color: ANSIcode.c256(110)
  //.rgb(79, 154, 164),
}, process.stdout)


/*const highlightFileName = fileName => (
  {
    'README.md':(file => ANSIcode.bold(ANSIcode.black(file)))
    'bin': ANSIcode.orange,
    'package.json': ANSIcode.red,
    'lib': ANSIcode.green,
  }{
    'js': ANSIcode.yellow,
    'index.js':(file => bold(underline(yellow(file))))
  }['.ts', '.d.ts', ].indexOf(path.extName(fileName)) !== -1 || fileName === 'types' ? blue :*/

const eventToPromise = (obj, eventType) => {
  return new Promise((resolve, reject) => {
    obj.once(eventType, (...ev) => {
      resolve(...ev)
    })
  })
}

const input = (message = '') => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "NPM> ",
  })

  console.log(message);

  rl.prompt()

  return eventToPromise(rl, 'line')
    .then(line => {
      rl.close()
      return line
    })
}

const questionF = rl => msg => new Promise((resolve, reject) => {
  try {
    rl.question(msg, resolve)
  } catch (err) {
    reject(err)
  }
})


const completer = (line, call) => {
  fs.readdir(node_modulesPath)
    .then(files => call(null, [
      files
      .filter(fn => fn.match(line))
      .map(fn => fn.replace(line, "\u001b[33m$&\u001b[0m"))
      ,
    line]))
    .catch(console.error)
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '',
  completer,
  //removeHistoryDuplicates: true,
})

const node_modulesPath = './../node_modules'



const asyncExec = gen => function awaiter(data) {
  const iterRes = gen.next(data)
  if (iterRes.done) {
    return data
  }

  return iterRes
    .value
    .then(awaiter)
    .catch(console.error)
}

class CLI {
  constructor(args) {
    //console.log("?");
    Object.assign(this, args)
    this.question = questionF(args.rl)
  }

  start() {
    this.onStart().then(moduleList => {

      this.moduleList = moduleList

      rl.completer1 = line => {
        console.log('completer!');

      }

      const end = () => {
        throw 'err'
      }
      const continueKey = Symbol('cont')
      const cont = resolve => {
        resolve(continueKey)
      }

      let i = 0

      const ay1 = _this => function*(call) {
        const beforeResult = yield _this.onBefore(end, cont)
        const input = yield _this.question(_this.prompt)
        const actionResult = yield _this.action({ beforeResult, input }, end, cont)
        const afterResult = yield _this.onAfter({ beforeResult, input, actionResult }, end, cont)

        debugCLI.log(`\n===== new line [${i}] =====`)
        asyncExec(call(call))(0)
          .then(arg => {
            debugCLI.log(`inside call: ${arg}`)
          }).catch(err => {
            console.error(`inside err: ${err}`)
          })
      }

      let ay = ay1(this)

      asyncExec(ay(ay))(0)
        .then(a => debugCLI.log(`promise loop ended :${a}`))
        .catch(console.error)
    })
  }


}


const npmMerger = new CLI({
  rl,
  onStart() {
    console.log(ANSIcode.yellow("\nplease input the module name that you want to merge"))

    return fs.readdir(node_modulesPath)
  },
  prompt: /*ANSIcode.c256(124)*/ ("NPM> "),
  onBefore(end, cont) {
    return new Promise((resolve, reject) => {
      /*fs.readdir
        .then(files => {*/
      debugCLI.log('\nbefore:', 0)
      resolve(0)
    })
  },
  action({
    beforeResult,
    input,
  }, end, cont) {
    return new Promise((resolve, reject) => {


      debugCLI.log('action data:', beforeResult, input);

      const modPath = path.join(node_modulesPath, path.normalize(input))

      fs.readdir(modPath)
        .then(files => {
          console.log(files);

          this.question(this.prompt).then(
            input => {
              if (input === 'tsc') {

                //console.log("wow! tsc!");
                compile(modPath)
                .then(resolve)
                .catch(reject)
              }
              else {
                resolve(files)
              }
            }
          ).catch(console.error)
        })
        .catch(err => {
          resolve(2)

          console.log("it doesn't exist in directory");
        })

    })
  },
  onAfter({
    beforeResult,
    input,
    actionResult,
  }, exit, cont) {
    return new Promise((resolve, reject) => {
      debugCLI.log('after:', beforeResult, input, actionResult);
      if (input === 'exit') {
        //exit()
        console.log('NPMmerger will terminate! (goodbye! :)');
        rl.close()
        return
      }
      resolve(3)
    })
  }
})

npmMerger.start()
//.then(console.log)