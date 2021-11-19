#!/usr/bin/env node

const reloader = require('./reloader.js')
const cliCur= require('cli-cursor')

const argv = {
  argv: process.argv.slice(2),

  has(arg) {
    return this.argv.indexOf(arg) !== -1
  },

  getOptionValue(optionName) {
    const index = this.argv.indexOf(optionName)

    if (index === -1) {
      /*throw Object.assign(new Error(`${0}`),{
        code: 1810
      })*/
      return undefined
    }
    return this.argv[index + 1]
  },
}

/*
if (argv.has('-m')) {

  const mode = argv.getOptionValue('-m')

  if (mode === 'watch') {
    //
    0
  } else if (mode === 'pre') {
    reloader(argv.argv[0])
  } else {
    throw `${mode} mode in invaild`
  }
} else if (!argv.argv) {
  console.log('please input filename');
} else {*/
  //console.log(argv);
  cliCur.hide()
  reloader(argv.argv[0])
//}