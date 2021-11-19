const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  console.log(`on ${'request'}`)

  if (req.query.exit) {
    server.close(123)
  }

  res.end('hi')
})
server.on('connection', arg => {
  console.log(`on ${'connection'} with`)
  console.log(arg);
})
server.on('close', arg => {
  console.log(`on ${'close'} with ${JSON.stringify(arg)}`)
})
server.on('checkContinue', () => console.log(`on ${'checkContinue'}`))
server.on('upgrade', () => console.log(`on ${'upgrade'}`))
server.on('clientError', () => console.log(`on ${'clientError'}`))


server.listen(62819)
//server.close()