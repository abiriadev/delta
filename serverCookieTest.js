const http = require('http')
const fs = require('./fs.promises.js')
const url = require('url')


const port = 56611

let requestCount = 0

http.createServer((req, res) => {
  ++requestCount

  if (url.parse(req.url, true).pathname === '/script/serverCookieTestClient.js') {
    res.writeHead(200, {
      'Content-Type': 'text/javascript',
    })
    fs.readFile('./serverCookieTestClient.js')
      .then(data => res.end(data, () => {
        console.log('send js file!');
      }))

    return
  }

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': [
      "hello=world",
      "name=abiria",
      `count=${requestCount}`,
    ],
  })

  //res.end(`<h1>${req.headers.cookie}</h1>`)
  fs.readFile('./serverCookieTestIndex.html')
    .then(data => {
      res.end(data, () => {
        console.log('request');
      })
    })
}).listen(port, () => console.log(`running at localhost:${port}`))