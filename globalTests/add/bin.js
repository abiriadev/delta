#!/usr/bin/env node

const add = require('./add.js')

console.log(
  add(
    ...process
    .argv
    .slice(2)
    .map(arg => parseInt(arg))
  )
)