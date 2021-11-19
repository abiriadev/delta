process.stdin.on('end', arg=>{
  process.stdout.write(`terminal ended: ${arg}`);
})

process.stdin.on('data', function call(data) {
  process.stdout.write(data)
  //process.stdin.removeListener('data',call)
  process.stdin.end()
})

