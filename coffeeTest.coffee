http = require 'http'

server = http.createServer (req, res) ->
    res.writeHead 200,
      'Content-Type': 'text/template'
    res.end 'Hello world', () -> console.log 'requested!'

server.listen 61711, () -> console.log "running at localhost:#{61711}"