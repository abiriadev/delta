const {
  //exec,
  //execFile,
  spawn,
} = require('child_process')
//const widen = require('./../widenString.js')
//const promisify = require('./../promisify.js')


//console.log(widen("====start===="));

//const filename = 'test.js'

const run = (filename, {
  saveStdout = false,
  argv = [],
  errorHandler = () => true,
  outputListener = () => true,
}={}) => {
  //promisify(execFile)
  try {
    const runtime = spawn(process.argv[0] || 'node', [filename, ...argv]);

    let stdout = ''
    let stderr = ''

    const kill = signal => {
      runtime.kill(signal)
      return runtime
    }

    const promise = new Promise((resolve, reject) => {
      try {
        /* code */
        runtime.stdout.on('data', data => {
          if (saveStdout) {
            stdout += data
          }
          outputListener(data, kill)
        })

        runtime.stderr.on('data', data => {
          try {
            /* code */
            errorHandler(data, kill)
          } catch (err) {
            reject(err)
          }
        })

        runtime.on('close', (code, signal) => {
          resolve({
            stdout: stdout || undefined,
            stderr: stderr || undefined,
            code,
            signal,
          })
        })
      } catch (err) {
        reject(err)
      }
    })
    return Object.assign(promise, {
      kill
    })

  } catch (err) {
    throw "error during spawn"
  }
}

module.exports=run
/*
const r = run(filename, {
  errorHandler: (err, kill) => {
    console.error(`stderr: ${err}`)
    
    //kill('SIGHUP')
  },
  outputListener: (output, kill) => {
    console.log(`stdout: ${output}`)
    //r.kill('SIGHUP')

  },

})

/*setTimeout(
  
  ()=>{
    r.close()
  },3000
)*/
/*
r.then(({
    stdout,
    stderr,
    code,
    signal,
  }) => {
    console.log(`child process exited with code ${code} with signal ${signal}`);

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    //console.log(`code: ${code}`);

    console.log(widen("====end===="));
  })
  .catch(err => {
    console.error('err: ' + err)
  })*/