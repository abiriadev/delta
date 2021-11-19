const fs = require('fs')
const promisify = require('./../promisify.js')

fs.mkdir = promisify(fs.mkdir)

const CREATE_DATABASE = function(databaseName) {

  fs.mkdir('data')
    .then(data => {
      console.log('\nEnD\n');
    })
    .catch(console.error)
}

const f = function (a, b) {
  console.log(a)
  console.log(b)
}

//f(1, 2)