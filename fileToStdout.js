  const fs = require('fs')


  console.log("원하시는 파일명을 입력해 주세요");
  process.stdin.once('data', data => {

    try {

      const fileName = data
      const rs = fs.createReadStream(fileName)
      rs.on('error', console.error)
      rs.on('close', ()=>{
        console.log('close');
      })
      rs.on('start', ()=>{
        console.log('start');
      })
      rs.on('ready', ()=>{
        console.log('ready');
      })
      rs.on('end', ()=>{
        console.log('end');
      })
      rs.on('open', ()=>{
        console.log('open');
      })
      rs.on('data', ()=>{
        console.log('data');
      })
      //console.log(rs)
      console.log('hey');
      //require('fs').createReadStream(fileName).pipe(process.stdout)

    } catch (err) {
      if (err.code === 'ENOENT') {
        console.log("EEEEEEEEE");

      }
      console.log("EEEEEEEEE");

      console.error(err)
    }

  })