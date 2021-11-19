


process.stdin.on('keypress', (c, k)=>{
  console.log('pressed');
})

process.stdin.on('data', data=>{
  console.log('data sended');
})