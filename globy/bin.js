#!/usr/bin/env node

const globy = require('./globy.js')
const path = require('path')

const getBasenameWithoutExt = filepath =>path.basename(filepath, path.extname(filepath))

const argv = process.argv.slice(2)

if (argv[0] === 'register') {
  const file = argv[1] || ''

  if (file) {
    const filePath = path.join(process.cwd(), file)
    
    
    globy(filePath, getBasenameWithoutExt(file))
    
    console.log('=====hshs=====\n');
    
    console.log(filePath);
  } else {
    console.log('please input the filename');
  }

} else if (!argv[0]) {
  console.log('please input arguments');
} else {
  console.log(`unknow '${argv[0]}' option`);
}