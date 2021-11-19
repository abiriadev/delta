const fs = require('fs')

const data = fs.readFileSync('./testScript.js')

const globalScope = Symbol('globalScope')

const state = {
  number: Symbol('number'),
  string: Symbol('string'),
  space: Symbol('space'),


}

const nothing = Symbol('nothing')

const isNumber = str => 48 <= str.codePointAt(0) && str.codePointAt(0) <= 57

const among = (inquiredTarget, cases) => cases.some(ele => ele === inquiredTarget)

const NumberObject = function(id, value) {
  this.ID = id
  this.value = value
}

const generateUniqueID = function*() {
  let incrementNumber = 0
  while (true) {
    yield Symbol.for(++incrementNumber)
  }
}

const generateID = generateUniqueID()

const ii = {
  value: "abcdef",
  index: 0,
  getItemByIndex(index){
    return this.value[index]
  },
  getNext(){
    this.index += 1
    return this.getCurrunt()
  },
  getCurrunt(){
    return this.getItemByIndex(this.index)
  },
  getForward(){
    return this.getItemByIndex(this.index + 1)
  },
  getItemsByIndex(index, howmany){
    return this.value.slice(index, index+howmany)
  },
  getNexts(howmany){
    this.index += 1
    return this.getItemsByIndex(this.index, this.index+=howmany)
  },
  getCurrunts(howmany){
    return this.getItemsByIndex(this.index, this.index+howmany)
  },
  getForward(){
    return this.getItemsByIndex(this.index+1, this.index+howmany+1)
  },
}







const parser = function(input) {
  const AST = {
    literals: {

    }
  }

  let curScope = globalScope
  let stateHistory = []

  const iter = input[Symbol.iterator]()
  
  input[Symbol('indexedIterator')] = function () {
    
    const iter = this[Symbol.iterator]()
    iter.getNext=function (arg) {
      this[]
    }
    
    return {
      ...this,
      iter
    }
  }
  
  for (let i = 0;; ++i) {
    const iterResult = iter.next()
    const { value } = iterResult

    let text = ''

    if (iterResult.done) {
      text += 'program end'
      break
    }
    if(input.slice(i, i+5)==='const'){
      text+="const"
      i+=4,

    }
    if (isNumber(value)) {
      console.log('number');
      stateHistory.push(state.number)
      let numCharArr = [value]
      let jj = 0

      // or < input.length
      for (let j = i;; ++j) {
        const subValue = input[j]
        console.log(subValue);
        if (subValue === undefined) break;
        if (isNumber(subValue)) numCharArr.push()
        else if (among(subValue, [' ', ';', '\n'])) {
          jj = j
          break
        }
      }

      for (jc = 0; jc < jj; jc++) {
        iter.next()
      }
      console.log(numCharArr);
      stateHistory.push(state.space)

      const ID = generateID.next()
      const parsedNumber = new NumberObject(ID,
        Number(''.concat(numCharArr)))
      AST.literals[ID] = parsedNumber
    }
    if (among(value, ['+', '-', '*', '/'])) text+='<operator>'
    
    text += value + ' /'
    if (input.slice(i, i + 2) === '=>') {
      text += '[new arrow function]'
    ++i,
    iter.next()
      
    }

    if (among(value, ['\n', ';'])) text += '[change line]'

    console.log(`${('0'.repeat(2)+i).slice(-2)}-'${input[i] === '\n' ? String.fromCodePoint(8629) : input[i]}' ${String.fromCodePoint(8702)} ${text}`);
  }
  AST.stateHistory = stateHistory
  return AST
}

const ast = parser(data.toString())
console.log('======= AST: ');
console.dir(ast);
/*for (let i = 45; i < 65; i++) {
  const char = String.fromCodePoint(i)

  console.log(`${char} : ${isNumber(char)}`);
}*/

//console.log(among(9, [1, 2, 3]));



const asd = { // func literal obj
  ID: Symbol('id'),
  type: 'arrowFunctionLiteral',
  parameters: [
    { // param obj
      ID: Symbol('a'),
      name: 'a',
      defaultValue: nothing,
    },
    {
      ID: Symbol('b'),
      name: 'b',
      defaultValue: nothing,
    },
  ],
  body: {
    [Symbol('id')]: { // code expression fragments splited by semicolon or linechange
      // addition expression obj
      x: { // variable reference obj
        ID: Symbol('ref a'),
        reference: Symbol('a')
      },
      y: {
        ID: Symbol('ref b'),
        reference: Symbol('b'),
      },
      operator: Symbol.for('plus'),
    }
  }
}