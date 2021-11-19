const objEx = require('./objectExtra.js')

const A = {
  asd: 113,
}

const obj = {
  a: n => n + 1,
  b: n => n * 2,
  c: n => Math.pow(n, 2),
}

const debug = func => (...args) => {
  console.log(`[${func.name}] called by ${1}`)
  return func(...args)
}

const callThis = function(func) {
  return function(last, ...args) {
    console.log(`[${func.name}] called`);
    console.log(`this: ${this}`);
    console.log(`last: ${last}`);

    const reg = func(...args)
    console.log('register:', reg);
    const res = last(reg)
    console.log('result:', res);
    return res
  }
}

let called = objEx.objMap(
  obj,
  callThis
)

const assignSelf = (prop, key, obj) => Object.assign(prop, obj)

/*called = objEx.objMap(
  called,
  assignSelf
)*/

//objEx.objMap(called, f=>f.__proto__ = called)

for (let f in called) {
  called[f].__proto__ = called
  //called[f] =
}

//console.log(called.a.b.a.c.b.a.c.b.b.b.a.c.b.a.c.a.b);

let ff = v => v

Object.assign(ff, called)

console.log(ff.a.b(3));
//console.log(typeof ff.a.c);

process.exit(77)

const assign = obj => (prop) => Object.assign(prop, obj)

for (let f in obj) {
  obj[f] = assign(called)
}

A.__proto__ = obj

console.log(
  A
  .a
  .c(3)
)
