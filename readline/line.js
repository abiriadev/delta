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


rl.on('line', line=>{
  console.log(`input: ${line}`);
})

setTimeout(
  ()=>{
    console.log(rl.line);
  },
  3000
)