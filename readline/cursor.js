const readline = require('readline')
//const fs=require('./../fs.promises.js')
const fs = require('fs')



setTimeout(
  () => {
    readline.cursorTo(
      process.stdout,
      //fs.createWriteStream('./csd.log'),
      5
    )
    setTimeout(() => 0, 3000)

  },
  7000
)