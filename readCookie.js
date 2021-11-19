const port = 61522

require('http').createServer((req, res)=>{
  
  const cookie = req.headers.cookie
  
  res.writeHead(200, {
    'Content-Type':'text/html',
    'Set-Cookie':[
      'a=b'
    ],
  })
  res.end(JSON.stringify(cookie))
  
  console.log(`cookie: ${cookie}`);
}).listen(port, ()=>console.log(`running at localhost:${port}`))