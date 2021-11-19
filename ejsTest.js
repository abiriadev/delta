const fs = require('./fs.promises.js')
const ejs = require('ejs')

fs.readFile('./test.ejs')
  .then(data=>data.toString())
  .then(data=>ejs.render(data, {
    name: "lorem",
    para: "description",
  }))
  .then(console.log)