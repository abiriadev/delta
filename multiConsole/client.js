const net = require('net')

const PORT = 51829,
  HOST = '127.0.0.1'

const socket = net.createConnection({
    port: PORT,
    onread: {
      // Reuses a 4KiB Buffer for every read from the socket.
      buffer: Buffer.alloc(4 * 1024),
      callback: (nread, buf) => {
        // Received data is available in `buf` from 0 to `nread`.
        console.log(buf.toString('utf8', 0, nread));
      },
    },
  },
  () => {
    console.log('connected!');
    socket.write(`name:${process.argv[2] || 'defaultConsole'}`)
  }
).on('data', data => {
  console.log(`from server: ${data.toString()}`);
}).on('close', () => {
  console.log('disconnected from server');
}).on('error', err => {
  if (err.code === "ECONNREFUSED") {
    console.log(`can't connect to ${PORT}`);
  } else {
    throw err
  }
})