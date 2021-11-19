const net = require('net')
const ANSI = require('./ANSI.js')


let c = 0

console.log('enter port: ');
process.stdin.resume()
process.stdin.on('data', chunk => {
  if (!c) {
    c++
    const socket = net.connect(
      parseInt(chunk),
      '127.0.0.1',
      () => {
        console.log('connected!');
      })

    socket.on('data', data => {
      console.log(`server: ${ANSI.green(data)}`);
    })
    socket.on('error', err => {
      if (err.code === 'ECONNREFUSED') {
        console.log('port is unvaild');
        process.exit(1)
      }
      console.error(err)
    })
    socket.on('connect', () => {
      // console.log('yeah!');
    })
    socket.on('ready', () => {
      console.log('socket is ready!');
    })
    socket.on('lookup', arg => {
      console.log(`lookup: ${arg}`);
    })
    socket.on('end', ()=>{
      console.log('end');
    })
    
    
    process.stdin.on('data', chunk => {

      socket.write(chunk)
    })
  }
})