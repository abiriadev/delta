const fs = require('./fs.promises.js')
const http = require('http')

const port = 61819

const server1 = http.createServer((req, res) => {
  fs.readFile('./serverIndex.html')
    .then(data => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      })
      res.end(data)

      console.log(`${200} OK -request!`);
    })
}).listen(port, () => console.log(`running at localhost:${port}`))

const server2 = http.createServer((req, res) => {
  fs.readFile('./style.css')
    .then(data => {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      })
      res.end(data)
      console.log(`server2 requested!`);
    })
}).listen(65534)