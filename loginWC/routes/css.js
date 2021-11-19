const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/:file', req => {
  fs.readFile(path.join(__dirname, '../..', path.normalize(req.params.file)))
    .then(req.res.send)
})