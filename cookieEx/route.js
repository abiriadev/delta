const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
  res.send('<h1>welcome!<h1>')
})

router.get('/register', (req, res) => {

  res.cookie('name', 'value')
  res.cookie('json', {
    name: 'hello',
    property: 'world',
  })
  
  res.redirect('/select')
})

router.get('/select', (req, res) => {
  res.json(req.cookies)

})

router.all('*', (req, res)=>{
  res.status(404).send('<h1>404 sugo</h1>')
})

module.exports = router