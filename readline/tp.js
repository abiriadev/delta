const readline=require('readline')
//const fs=require('./../fs.promises.js')
const fs = require('fs')


const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer(){
    
  },
  prompt: '>> '
  
})


setTimeout(
  ()=>{
    rl.clearScreenDown(
      fs.createWriteStream('./csd.log'))

  },
  5000
)


