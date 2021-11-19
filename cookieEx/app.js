const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cookieRouter = require('./route.js')

const app = express()


app.use(morgan('dev'))
app.use(cookieParser())
//app.use('*', cookieRouter)

app.get('/', (req, res) => {
  res.send('<h1>welcome!<h1>')
})

app.get('/register', (req, res) => {

  res.cookie('name', 'value')
  res.cookie('json', {
    name: 'hello',
    property: 'world',
  })

  res.redirect('/select')
})

app.get('/select', (req, res) => {
  res.json(req.cookies)

})

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 sugo</h1>')
})

module.exports = app