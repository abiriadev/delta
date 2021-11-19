const port=56188

require('http').createServer((req, res)=>{
  res.writeHead(414, {
    'Location': 'http://localhost:56611',
  })
  res.end()
  //res.end("redirect!")
}).listen(port, ()=>console.log(`running at localhost:${port}`))