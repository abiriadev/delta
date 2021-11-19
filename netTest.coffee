net = require 'net'

port = 61616

server=net.createServer (socket) =>
  console.log socket
  
  socket.on 'data', (data) =>
    console.log data.toString 'utf8'
    
    msg = "<h1>hello, world!</h1>"
    
    socket.write 'HTTP/1.1 200 OK\n'
    socket.write 'Server: Abiria server\n'
    socket.write 'Content-Type: text/html\n'
    socket.write "Content-Length: #{msg.length}\n"
    socket.write '\n'

    socket.write "#{msg}\n"

    socket.end()
    
    
    
    
    #socket.write data
    
    
    
    
    
  
server.listen port, () -> console.log "running at localhost:#{port}"

socket = net.connect 61616, '127.0.0.1', () =>
  console.log 'Cilent start!'


socket.on 'data', (data) => console.log data.toString 'utf8'

process.stdin.resume()
process.stdin.on 'data', (chunk) =>
  socket.write "ECHO: #{chunk}"


