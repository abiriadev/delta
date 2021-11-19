const net = require('net')

const
  PORT = 51829,
  HOST = '127.0.0.1'

const consoleList = {
  acon: null,
  bcon: null,
  ccon: null,
}

const savedList = {
  acon: "",
}

const server = net.createServer(socket => {
  console.log(`socket connected!`);
  console.log(`address: ${socket.address().address}`)

  socket.on('data', data => {
    console.log(`from socket: ${data.toString()}`);

    const splited = data.toString().split(':')
    if (splited.length != 2) {
      socket.write('sugo')
      console.log('invalid data');
      return
    }

    const msg = {
      key: splited[0].trim(),
      value: splited[1].trim(),
    }

    if (msg.key === 'name') {
      if (msg.value in consoleList) {
        socket.write('very well!')
        console.log('good job!');

        const savedData = savedList[msg.value]
        consoleList[msg.value] = socket
        socket.write(savedData)

      } else {
        console.log('invaild name');
        socket.write('sugo. you shold change the name and retry')
      }
    } else {
      console.log('default');
    }
  })

  /*server.genConnections((err, count) => {
    if (err) return
    console.log(`total sockets: ${count}`);
  })*/

}).listen(PORT, () => {

  console.log(`listing at ${PORT}, address ${server.address().address}`)

}).on('error', err => {

  if (err.code === 'EADDRINUSE') {
    console.log(`${PORT} Address in use, retrying...`)
    server.close();
    server.listen(++PORT, HOST);
  } else throw err
})



const logger = {
  log(msg) {
    if (consoleList['acon']) {
      consoleList['acon'].write(msg)
    } else {
      savedList['acon'] += msg
    }
  }
}

let i = 0
setInterval(() => {
  ++i
  logger.log(`hello ${i}`)
}, 1000)