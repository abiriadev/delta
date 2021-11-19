const crypto = require('crypto')
const stretch = require('./stretch')
const ANSIcode = require('./ANSI')

// functions

const hash = (input, encode = 'base64', algorithm = 'sha256') => crypto.createHash(algorithm).update(input).digest(encode)

const pbkdf2 = (input, repeatingTime = 100000, encode = 'base64') => new Promise((resolve, reject) => {
  crypto.randomBytes(64, (err, buf) => {
    err && reject(err)
    const salt = buf.toString(encode)
    crypto.pbkdf2(input, salt, repeatingTime, 64, 'sha512', (err, key) => {
      err && reject(err)
      resolve(key.toString(encode))
    })
  })
})

const cipher = (input, key, encode='base64', algorithm='aes192') => {
  const cipher = crypto.createCipher(algorithm, key)
  
  return cipher.update(input, 'utf8', encode) + cipher.final(encode)
}

const decipher = (input, key, encode='base64', algorithm='aes192') => {
  const decipher = crypto.createDecipher(algorithm, key)
  return decipher.update(outputC, encode, 'utf8') + decipher.final('utf8')
}

//

console.log(stretch("\\/".repeat(15)))

const password = "paha한극ㄹㅎㄱ리디@😀😄🤗🌏히\u2681\uc828\u9f62\u{011ff}앃~!~@+☆*÷●◇$[♤》@,'♤"
console.log(`${password} => 
hex: ${ANSIcode.green(hash(password, 'hex'))}
base64: ${ANSIcode.yellow(hash(password, 'base64'))}
latin1: ${ANSIcode.sky(hash(password, 'latin1'))}`)

console.log(stretch("\\/".repeat(15)))

const key = "비밀키"
const inputC = "hello everyone!"
const outputC = cipher(inputC, key)
const restoreC = decipher(outputC, key)

console.log('input: ', inputC)
console.log('output: ', outputC)
console.log('restore: ',restoreC)

console.log(stretch("\\/".repeat(15)))

const outputC2 = cipher(inputC, key, 'base64')
const restoreC2 = decipher(outputC2, key, 'base64')

console.log('input: ', inputC)
console.log('output: ', outputC2)
console.log('restore: ',restoreC2)





pbkdf2(password, 300000).then(output => console.log("\n\n=========\nPBKDF2 hash: " + ANSIcode.sky(output))).catch(console.error)

//console.log(crypto.getHashes());
//console.log(crypto.getCiphers());















