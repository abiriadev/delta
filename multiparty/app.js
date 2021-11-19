const fs = require('./../fs.promises.js')
const morgan = require('morgan')
const express = require('express')
const multipart = require('connect-multiparty')
const path = require('path')
const statuses = require('statuses')
const alias = require('./../referenceEachOther.js')
const ejs = require('ejs')
const debug = require('debug')('learn-express:server')
const http = require('http')
const createError = require('http-errors')
const ora = require('ora')
const ANSIcode = require('./../ANSI.js')
const botBlocker = require('./../botBlocker.js')


const config = require('./config.json')


const app = express()

const port = 52828
app.set('port', normalizePort(process.env.PORT || port))

const savePath = path.join('/multiparty')


app.use(morgan('dev'))
app.use(botBlocker)
app.use(express.static(path.join('/', '/multiparty')))
app.use(multipart({
  uploadDir: savePath,
}))
app.use(alias())

let spinner

app.get('/', (req, res, next) => {
  fs.readdir(savePath)
    .then(files => {
      if (!files) {
        res.send(
          `<h1>we have no any images! :(<h1>` +
          `<p>please upload your images!<p>`
        )
      }

      const html = files.reduce((html, image) => {
        html + `<li><img src="${
        path.join(savePath, image)
      }" alt="${image}"></li>`
      }, '<ul>') + '</ul>'

      res.send(html)
      
      spinner.succeed()
      
        spinner=ora('listening...').start()

    }).catch(err => {
      console.error(err)
      const code = 500
      
      next(createError(code))

      //res.status(code).send(`<h1>${code}- ${statuses(code)}</h1>`)
    })
})


app.post('/upload', req => {
  console.log('req.body:', req.body)
  console.log('req.files:', req.files)

  fs.readFile('./complete.html')
    .then(file => {
      req.res.send(ejs.render())

    })
})

app.all('*', req => {
  req.res.status(404).send(statuses(404))
})

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.locals.message = err.message

  res.locals.error = req.app.get('env') === 'development' ? err : {}

  const code = (err.status || 500)

  res.status(code).send(`<h1>${code}- ${statuses(code)}</h1>`)

  spinner.fail()
  spinner=ora('listening...').start()
})


const server = http.createServer(app)

server.listen(app.get('port'), () => {
  console.log(`running at http://127.0.0.1:${app.get('port')}`)
  
  spinner = ora('listening...').start()

})
server.on('error', onError)
server.on('listening', listen)



function normalizePort(port) {
  // body...
  const parsedPort = parseInt(port, 10)
  if (Object.is(parsedPort, NaN)) throw new TypeError(`invalid port: ${port}\nport must be type number`)
  if (parsedPort < 0) throw new RangeError(`invalid port: ${parsedPort}\nport must be positive number`)
  return parsedPort
}


function onError(err) {
  if (err.syscall !== 'listen') {
    throw err
  }

  const port = app.get('port')

  const bind = (
    typeof port === 'string' ?
    'Pipe' :
    'Port') + port

  switch (err.code) {
    case 'EACCES':

      console.error(bind + ` requires elevated privileges`)
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(bind + ` is already in use`)
      process.exit(1)
      break;
    default:
      throw err
  }
}

function listen() {
  // body...
  const addr = server.address()

  const bind = (typeof addr === 'string' ?
    'pipe' + addr :
    'port' + addr.port)

  debug(`listening on ${bind}`)
}