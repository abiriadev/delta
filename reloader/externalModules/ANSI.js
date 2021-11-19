const util = require('util')
const _ = require('lodash')
const objEx = require('./objectExtra.js')

const setProperty = (
  obj,
  propertyName,
  propertyValue = propertyName
) => {
  obj[propertyName] = propertyValue

  return obj
}
const setSelf = (
  obj,
  propertyName
) => setProperty(
  obj,
  propertyName,
  obj.bind(this)
)
const setPropertyBind = function(
  propertyName,
  propertyValue = propertyName
) {
  this[propertyName] = propertyValue.bind(this.getThis())

  return this
}
const propFilter = prop => obj => ({
  [prop]: obj[prop]
});
const register = (obj, asd) => [obj, asd, obj]

const textDecoratorF = function(code) {
  return function(str) {
    return `${this.createCode(code)}${str}${this.initCode}`
  }
}

const ANSIcode = {
  colorCodeLimit: 7,
  colorCodeStart: 30,
  colorCodeMax: 37,
  bgCodeStart: 40,
  bgCodeMax: 47,
  codeTemplate: '\u001b[%dm',
  initCode: '\u001b[0m',
  createCode(code) {
    return util.format(this.codeTemplate, code)
  },
  colorCodeIter() {
    // console.log(this.toString())
    const preservedThis = this
    let code = this.colorCodeStart
    return {
      next() {
        const done = code > preservedThis.colorCodeMax

        //console.log(code);

        return {
          value: done ?
            undefined : preservedThis
            .createCode(code++),
          done,
        }
      },
      [Symbol.iterator]() {
        //console.log(this);
        return this
      }
    }
  },
  * bgCodeIter() {
    for (
      let code = this.bgCodeStart; code <= this.bgCodeMax;
      ++code
    ) yield this.createCode(code)
  },
  textDecoratorF,
  custom(code, str) {
    return `${code}${str}${this.initCode}`
  },
  c256(id){
    return str => this.custom(
      `\u001b[38;5;${id}m`,
      str
    )
  },
  rgb(r, g, b) {
    return str => this.custom(
      `\u001b[48;2;${r};${g};${b}m`,
      str
    )
  },
}

//Object.assign(
//ANSIcode,
const cf = objEx.chain({
    underline: 4,
    bold: 1,
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    pink: 35,
    sky: 36,
    white: 37,
    blackBG: 40,
    redBG: 41,
    greenBG: 42,
    yellowBG: 43,
    blueBG: 44,
    pinkBG: 45,
    skyBG: 46,
    whiteBG: 47,
  })
  .objMap(textDecoratorF)
  //.objMap((func, name, obj) => Object.assign(func, obj))
  .value()
//)

ANSIcode.__proto__ = cf

module.exports = ANSIcode


