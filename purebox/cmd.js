const {
  spawn
} = require('child_process')
const asyncGen = require('./../asyncGen.js')
const jsFilter = require('./jsFilter.js')
const path = require('path')
const moveAll=require('./moveDistToMain.js')

const cmd = (
  command,
  argv,
  option
) => new Promise((resolve, reject) => {
  try {
    const run = spawn(
      command,
      argv,
      option
    )

    run.stdout.on('data', data => {
      console.log(`stdout: ${data}`);
    });
    run.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      //reject(data)
    });
    run.on('close', (code) => {
      console.log(`${command} exited with code ${code}`);
      run.stdin.end()
      resolve()
    });
  } catch (err) {
    console.log('error in cmd promise!');
    resolve(err)
  }
})


//exports.cmd = cmd

const compile = asyncGen.asyncGen(function*(dir) {

  const cmdl = (command, argv, cwd) => new Promise((resolve, reject) => {
    try {
      /* code */
      console.log(`cmd: ${argv}`);
      const res = cmd(command, argv, {
        cwd
      })

      res.then(resolve)
      res.catch(() => {
        console.error('err:', res.error);
        reject()
      })
    } catch (err) {
      console.error(err)
      resolve(err)
    }

  })

  yield cmdl('cp', ['/sdcard/tsconfig.json', 'tsconfig.json', '-v'], dir)
  yield cmdl('mkdir', ['src'], dir)
  yield jsFilter(dir, path.join(dir, 'src'))
  //yield cmdl('mv', ['*.js', 'src'], dir)
  //yield cmdl('grep', ['*.js'], dir)
  yield cmdl('ls', [], dir)
  yield cmdl('tsc', [], dir)
  return yield moveAll(
    path.join(dir, 'dist'),
    dir
  )
})

exports.compile=compile

/*
compile('/sdcard/.sass').then(() => {
  console.log('LAST');
})*/