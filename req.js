const port = 52233

require('http').createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': [
      'a=b'
    ],
  })
  res.end(JSON.stringify(req.headers))
  //res.end(JSON.stringify(req.trailers))
  //res.end(JSON.stringify(req.httpVersion))

}).listen(port, () => console.log(`running at localhost:${port}`))