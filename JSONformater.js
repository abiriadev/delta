const objex = require('./objectExtra.js')
const ANSIcode = require('./ANSI.js')
const {
  StateTree
} = require('./stateTree.js')

const states = {
  brace: Symbol('brace'),
  bracket: Symbol('bracket'),
  colon: Symbol('colon'),
  comma: Symbol('comma'),
  quote: Symbol('quote'),
  key: Symbol('key'),
  value: Symbol('value'),
  string: Symbol('string'),
  number: Symbol('number'),
  boolean: Symbol('boolean'),
  null: Symbol('null'),
  array: Symbol('array'),
  object: Symbol('object'),
}

const JSONformater = (jsonStr, highlight) => {
  //highlight = objex.objMap(highlight, (f => (f || v => v)))

  jsonStr = jsonStr.toString()

  if (!jsonStr) {
    console.warn("jsonStr is empty")
  }

  const tree = new StateTree()

  let deepth = 0

  const tab = '  '
  const linefeed = () => '\n\r' + tab.repeat(deepth)
  const indent = curr => (++deepth, curr + linefeed())
  const unindent = curr => (--deepth, linefeed() + curr)

  let i = 0
  let res = ''

  while (i < jsonStr.length) {
    let curr = jsonStr[i]

    if (curr === ':') {
      //state = 'value'
      curr += ' '
    } else if (curr === ',') {
      curr += linefeed()
    } else if ([
      '\t',
      '\n',
      ' ',
    ].indexOf(curr) !== -1 &&
      (tree.current() === 'text')) {
      curr = ''
    } else if (curr === '{') {
      curr = indent(curr)
      console.log(deepth);
    } else if (curr === '}') {
      curr = unindent(curr)
    } else if (curr === '[') {
      curr = indent(curr)
    } else if (curr === ']') {
      curr = unindent(curr)
    }

    res += curr
    i++
  }
  return res
}

const fs = require('fs')

const filepath = './globy/package.json'

const formated = JSONformater(fs.readFileSync(filepath))
//fs.writeFile(filepath, formated)
/*console.log(ANSIcode.c256bg(41)(
  formated
));*/

console.log(formated);