const a = "abiria"
const b = "Im just dog"

const ao = new String(a)
const bo = new String(b)

ao.__proto__ = bo

//console.log(ao instanceof String);


const obj1 = {
  say() {
    console.log(`hello, my name is ${this.name}`);
  }
}

obj2 = {
  name: "abirism"
}

obj2.__proto__ = obj1

obj2.say()

//console.log(obj1 instanceof obj2)

const isChildOf = function isChildOf(child, parent) {
  //console.log(child)
  if (child === null) return false
  return child.__proto__ === parent ? true : isChildOf(child.__proto__, parent)
}

console.log(isChildOf(obj2, obj1))
console.log(isChildOf(ao, bo))

a.__proto__ = b
console.log(isChildOf(a, b))

a.a = 81
console.log(a.a);

const sym1 = Symbol('1')
const sym2 = Symbol('2')

sym1.__proto__ = sym2
console.log(isChildOf(sym1, sym2))
/*
const symO1 = new Symbol('1')
const symO2 = new Symbol('2')

symO1.__proto__ = symO2
console.log(isChildOf(symO1, symO2))
*/

class State extends Symbol {
  
}

//const symEO1 =new State()

Symbol().a=17