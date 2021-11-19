//process.stdin.setEncoding('utf8')


process.stdin.on('readable', ()=>{
  
  process.stdin.read()
  console.log(process.stdin);
})