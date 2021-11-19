const fs = require('fs')
const zlib = require('zlib')

const rs= fs.createReadStream('./stream.js', {
  highWaterMark: 4
})
const ws = fs.createWriteStream('./alp.txt.gz')

const zlibStream= zlib.createGzip()

rs.pipe(zlibStream).pipe(ws)

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

