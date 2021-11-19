const socketio = require('socket.io')
const http=require('http')
const fs=require('./../fs.promises.js')
const ejs = require('ejs')

const port = 52721

const app = http.createServer((req, res)=>{
  fs.readFile('./view/index.ejs')
  .then(data=>{
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    
    res.end(data)
  })
  
}).listen(port, ()=>console.log(`server running at http://127.0.0.1:${port}`))



