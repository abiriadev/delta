const fs = require('fs')

const toHex = number => {
  const hex = number.toString(16);
  return hex.length == 1 ? '0' + hex : hex
}

const stretch = str => `\n${str}\n`

const toBinary = number => {
  const bin = number.toString(2);
  return ('0'.repeat(8) + bin)
    .slice(-8)
    .replace(/[01]{4}(?!$)/g, '$& ')
  //.splice(3, 4, ' ')
}

fs.readFile('./fs.js', (err, data) => {
  // console.log(data
  //.toString('hex').toUpperCase()
  //);

  for (const k in data) {
    console.log(k);
  }

  console.log("///////////");
  console.log(data);
  console.log("///////////");

  let trxt = ""
  for (let i = 0; i <= data.length - 1; i++) {
    trxt += toHex(data[i]) + ' '
    //console.log(`${data[i]} : ${toHex(data[i])}`);
  }
  console.log(trxt);

  console.log("///////////");

  console.log(
    JSON.stringify(
      data.slice()
    )
  )

  let trxt2 = ""
  for (let i = 0; i <= data.length - 1; i++) {
    trxt2 += toBinary(data[i]) + ' '
    //console.log(`${data[i]} : ${toHex(data[i])}`);
  }
  console.log(trxt2);

  /*
  for (let i = 0; i < 256; i++) {
    setTimeout(
      ()=>{
        //console.clear()
          console.log(
            `\r${
              i
            } : ${
              toBinary(i)
            }%`
          );
          
      },
      100 * i
    )
  }
  */
  console.log("×<<×~^@*@*<2₩:××,♡@&@");

  /* fs.readdir(
    '.',
    (
      err,
      data
    ) => {
     const filtered= 
     Promise.all(
     data
       .filter(
          fileName =>
          
          fileName
          .match(
            /.[^.]+$/
          )
        )
        .map(
          fileName =>
            
            new Promise(
              (
                resolve,
                reject
                )=>
            fs.stat(
              fileName,
              (
                err, 
                data
                )=>{
                  err&&reject(err)
                  resolve(data)
        
                }
              )
            )
            
          
        ))
        
        .then(
          response =>
          response.forEach(
            console.log
          )
        )
        .catch(
          err => {
            
            stretch("gdigdyodyt9")
            throw err
          
          }
        )
        
        
        
              Promise.all(
filtered
        .map(
          fileName =>
          new Promise(
            (
              resolve,
              reject
            ) => {
              
              resolve(fileName +'\n')
              fs
              .readFile(
                  `./${
                fileName
              }`,
                  (
                    err,
                    data
                  ) => {
                    err && reject(err)
                    resolve(data)
                  }
                )
                
            }
          )
        )
      )
      .then(
        response =>
        {
          console.log(
          Buffer
          .concat(
            response
          )
          response
          .toString(
            'hex'
          )
          )
        }
      )
      .catch(
        err =>
        {
          console.log(
            stretch(
              "ERROR in during read files ===="
            )
          )
          throw err
        }
      )
      
    }
  )

*/

  new Promise(
    (resolve, reject) => {
    fs.readdir('.', (err, data) => {
      err && reject(err)
      resolve(data)
    })
  }).then(fileList => {
    Promise.all(fileList.map(
      fileName => new Promise(
        (resolve, reject) => {
          fs.stat(`./${fileName}`,
            (err, data) => {
              resolve(data.isFile())
            })
        }))).then(isFileBoolArray => {
      Promise.all(
        fileList.filter(
          (fileName, i) =>
          isFileBoolArray[i])
        .map(fileName =>
          new Promise(
            (resolve, reject) => {
             fs.readFile(`./${fileName}`, (err, data)=>{
                err && reject(err)
                resolve(data)
             })}))
      ).then(response => {
        
        console.log(
        
        Buffer
        .concat(response)
        .toString('hex')
        
        )
        
      }).catch(console.error)
    }).catch(console.error)
  }).catch(console.error)




})