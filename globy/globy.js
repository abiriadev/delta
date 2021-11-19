const transparentRun = require('./transparentRun.js')
const fs = require('./externalModules/fs.promises.js')
const path = require('path')
const {
  spawn
}=require('child_process')

const transparent = func => args => {
  func(args)
  return args
}

const editJson = filepath => ({
  set(prop, value) {
    if (!value) var call = prop
    else var call = json => (json[prop] = value, json)

    fs
      .readFile(filepath)
      .then(JSON.parse)
      .then(call)
      .then(JSON.stringify)
      .then(jsonStr => fs.writeFile(filepath, jsonStr))
      .catch(console.error)
  }
})

const packageJson = editJson('./package.json')

const globy = (
  targetFilepath,
  targetBinName
) => {

  const targetFilenameExt = path.basename(targetFilepath)
  const targetFilename = path.basename(targetFilepath, path.extname(targetFilepath))
  const newBinFilepath = path.join(__dirname, 'bins', targetBinName)

  const editPackage = packageJson.set(json => {
    json.bin[targetBinName +'1'] = newBinFilepath
    return json
  })

  Promise.all([
  fs.writeFile(newBinFilepath,`#!/usr/bin/env node
const runBin = require('./../transparentRun.js')
runBin("${targetFilepath}")`)
, editPackage]).then(res => {
 
 
 console.log('\ninstalling...\n');
  spawn('npm', [
    'i',
    '-g',
  ]).stdout.on('data', d=>console.log(d.toString()))
  })

  //transparentRun(binFilepath)
  //.then(({ stdout }) => console.log('stdout:', stdout))
}

module.exports = globy