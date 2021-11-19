const express = require('express')
const fs = require('./../fs.promises.js')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')
const http = require('http')
const alias = require('./../referenceEachOther.js')
const ejs = require('ejs')
const Debuglog = require('./../de. nuna
const dlog = new Debuglog('fir')

const port = 51727

const app = express()


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(alias())

app.get('/', (req, res) => {

  dlog.log("getted")

  if (req.cookies.login && 0) {
    res.send()
  } else {
    fs.readFile('./view/mainNoLogin.ejs')
      .then(data => ejs.render(data, {
        warnMsg: "you should login to access our service",
        title: 'main',
      }))
      .then(res.send)
      .catch(err => {
        console.error(err)
        res.send(err)
      })
  }
})

app.post('/login', (req, res) => {

})


http
  .createServer(app)
  .listen(port, () => {
    console.log(`running at ${port}`);
  })