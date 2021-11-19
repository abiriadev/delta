const net = require('net')
const promisify = require('./promisify.js')
const ANSIcode = require('./ANSI.js')

let port = 51516

sockets = []

const server = new net.Server()
server.on('connection', socket => {

  sockets.push(socket)

  socket.on('end', () => {
    console.log('client disconnected')
  })

  socket.on('data', data => {
    console.log(`client: ${data}`);
  })

  if (sockets.length >= 2) {
    sockets[0].pipe(sockets[1])
    sockets[1].pipe(sockets[0])
  }

  socket.write('welcome!')

  server.getConnections((err, c) => {
    console.log(`${c} connected!`);

  })

})
server.on('close', () => {
  console.log('server closed!');
})
server.on('listening', () => {
  console.log(`server listening on ${JSON.stringify(server.address())}`);
})
server.on('error', err => {

  if (err.code === "EADDRINUSE") {
    console.info(`${port} port is already used`)
  }

  console.log(`error!!`);
  console.error(err)
})

server.listen(port, () => {
  console.log('L');
})