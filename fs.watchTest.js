const fs = require('./fs.promises.js')

let c = 0

const watcher = fs.watch('./fs.watch.dir', {
  recursive: true,
}, (eventType, filename) => {
  console.log(eventType, filename);
})

watcher.on('change', (eventType, filename) => {
  filename || 'not supported'
  console.log(`[${++c}] eventType: ${eventType}, filename: ${filename}`);
})
watcher.on('error', err => {
  if (err.message === 'EPERM') {
    console.error('directory deleted')
  } else if (err.message === 'ERR_FEATURE_UNAVAILABLE_ON_PLATFORM') {
    console.error('recursive option not supported')
  } else {
    console.log('error!! -abiria')
    console.error(err)
  }
})
//watcher.close() 