const express = require('express')
const path = require('path')
const pug = require('pug')
const morgan = require('morgan')
const lodash = require('lodash')
const fs = require('fs')
const promisify = require('./../promisify.js')
const statuses = require('statuses')


fs.readdir = promisify(fs.readdir)
fs.readFile = promisify(fs.readFile)


const port = 57893
const app = express()
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(morgan('dev'))

app.get('/', (req, res) => {

  const targetPath =  (()=>decodeURIComponent(req.query.path))() || '.'
  
  console.log(targetPath);
  
  Promise.all([
    fs.readdir(
      path.join(
        '.',
        path.normalize(targetPath)
      )
    ),
    fs.readFile('./view/index.pug'),
  ]).then(responses => {
      const html = pug.compile(responses[1])({
        files: responses[0],
      })
      
      return html
    })
    .then(html => res.send(html))
    .catch(console.error)
})


app.listen(port, () => console.log(`webFinder running at http://127.0.0.1:${port}`))

