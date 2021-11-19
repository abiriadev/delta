
setTimeout(()=>{
  const b = require('readline').createInterface({
    stdin: process.stdin,
    stdout: process.stdout,
  }).on('keypress', arg => {
    console.log(arg);
  })
}, 5000)

println(b)

const a=process.stdout.on('keypress',arg=>{
  console.log(arg);
})

