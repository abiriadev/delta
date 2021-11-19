const fs = require('./fs.promises.js')
const pug = require('pug')

fs.readFile('./test.pug')
  .then(data => data.toString())
  .then(data => pug.compile(data)({
    name: "lorem",
    para: "description",
  }))
  .then(console.log)