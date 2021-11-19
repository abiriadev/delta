const readline = require('readline')
//const fs=require('./../fs.promises.js')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer(line) {
    //menu
    const hits = [
    'asd',
    'fgh',
    'jkl',
  ].filter(item => item.startsWith(line))

    return [
    hits || 'nothing matched',
    line,
  ]

  },
  prompt: '>> ',

})


rl.on('line', line => {
  console.log(`input: ${line}`);
})

setTimeout(
  () => {
    rl.write(null, {
      ctrl: true,
      name: 'a',
    })
    setTimeout(()=>0, 3000)
    /*console.log(`cursor: ${
      JSON.stringify(
        //rl.cursor
        rl.getCursorPos()
      )
    }`);*/
  },
  3000
)