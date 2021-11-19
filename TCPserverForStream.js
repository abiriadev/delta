const net = require('net')


const server = new net.Server()

server.on('close', ()=>{
  console.log('close');
})
server.on('connection', socket=>{
  console.log('connection');
  server.close()
  throw "erAbi"
})
server.on('error', err=>{
  console.log('error occured');
  console.error(err);
})
server.on('listen', ()=>{
  console.log(`server running at ${JSON.stringify(server.address())}`);
})


server.listen(61617)
/*,()=>{
  console.log('is listening at 61617?');
})*/