const net = require('net')
const fs = require('fs')
const {
  Console
} = require('console')

const server = net.createServer(socket => {

  const soCons = new Console(
    //process.stdout
    //fs.createWriteStream('./crws.hh')
    socket
  )
  
  let i=0

  setInterval(
    () => {
      ++i
      soCons.log(`hello ${i}`)
    },
    2000
  )

}).listen(51888, () => {
  console.log(`listen on 51888`)
})