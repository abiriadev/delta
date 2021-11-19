#!/data/data/io.tempage.dorynode/files/bin/node

const express = require('express')
const morgan = require('morgan')
const pug = require('pug')
const fs = require('fs')
const path = require('path')
const botBlocking= require('./../botBlocker.js')

const imagePathTemplate = './public/images/'
const imageList = fs.readdirSync(imagePathTemplate)


const port = 51779

const app = express()



app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
  console.log(`\n\n\n`)
  console.dir(res.req.headers)
  console.log(`\n\n\n`)

  next()
})
app.use(morgan('combined'))
//app.use(botBlocking)

app.get('/', (req, res) => {
  res.send("<h1>welcome!</h1>")
})

app.get('/articles/:id', (req, res) => {
  const data = fs.readFileSync('./view/index.pug')
  const template = pug.compile(data)

  const {
    params: {
      id,
    },
    query: {
      end,
    },
  } = req

  const html = template({
    imgList: imageList
      .slice(id, end)
      .map(imgName => `/images/${imgName}`)
  })

  console.log(`\n\n${html}\n\n`);

  res.send(html)
})

app.get('*', (req, res) => {
  fs.readFile('./view/404.html', (err, data) => {
    if (err) throw err
    res.status(404).send(data.toString())
  })
})

app.listen(port, () => console.log(`http://127.0.0.1:${port}`))