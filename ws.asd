const fs = require('fs')


const rs= fs.createReadStream('./stream.js', {
  highWaterMark: 4
})
const ws = fs.createWriteStream('./ws.asd')

rs.pipe(ws)

/*
const data=[]

ws.on('finish', ()=>{
  console.log("파일 쓰기 완료");
})

rs.on('data', chunk=>{
  data.push(chunk)
  ws.write(chunk)
  console.log('data:',chunk , `- ${chunk.length}`);
})

rs.on('end', ()=>{
  ws.end()
  console.log(`end: ${Buffer.concat(data)}`);
})

rs.on('error', console.error)
*/

