const url = require('url')
const fs = require('./fs.promises.js')
const statuses = require('statuses')
const qs=require('querystring')

const port = 52561

const sendFile = (res, filename) => new Promise((resolve, reject) => {
  try {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    fs.readFile(filename)
      .then(data => res.end(data, resolve))
      .catch(reject)
  } catch (err) {
    reject(err)
  }
})


require('http').createServer((req, res) => {
  const {
    pathname: path,
    query,
  } = url.parse(req.url, true)

  let status = 200

  switch (path.toLowerCase()) {
    case '/':
      sendFile(res, './routingIndex.html')
      break;
    case '/hello':
      sendFile(res, './routingHello.html')
      break;
    case '/world':
      sendFile(res, './routingWorld.html')
      break
    case '/query':
      res.writeHead(200, {
        'Content-Type': 'json'
      })
      res.end(JSON.stringify(query))
      break
    case '/form':
      sendFile(res, './routingForm.html')
      break
    case '/route':
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      let data = ''
      if (req.method==='POST') {
        req.on('data', data=>{
          res.end(`POST: ${JSON.stringify(qs.parse(data.toString()))}`)
        })
      }else {
        res.end(`GET: ${JSON.stringify(query)}`)
      }
      break
    default:
      const code = 404
      res.writeHead(code, {
        'Content-Type': 'text/html'
      })
      res.end(statuses[code])
      status = code
      break
  }

  console.log(`${status} ${statuses[status]} ${path} ${JSON.stringify(query)}`);

}).listen(port, () => console.log(`running at localhost:${port}`))