#!/usr/bin/env node
const parse=require('./parser.js')
const fs = require('./../fs.promises.js')

fs.readFile('./regexLib.rxp')
.then(parse)
.then(json=>fs.writeFile('./regExpLib.json', JSON.stringify(json)))
.catch(console.error)