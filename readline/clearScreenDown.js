const readline = require('readline')
//const fs=require('./../fs.promises.js')
const fs = require('fs')

setTimeout(
  () => {
    readline
      //.clearLine
    .clearScreenDown
    (
      //fs.createWriteStream('./csd.log')
      process.stdout
      //,
      //0
    )

    setTimeout(() => 0, 3000)
  },
  7000
)