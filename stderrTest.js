

process.stdin.on('data', data=>{
  console.log(`data: ${data}`);
})

process.stdout.write('asdfg')

process.stdin.pipe(process.stderr)

//process.stdin.end()
