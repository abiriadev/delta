'use strict'

function Cntc() {}

Cntc.prototype = {
  a: 1,
}

Cntc.prototype.s = () => 89

console.log(Cntc.prototype);


const obj = new Cntc()

obj.a = 188

console.log(obj.__proto__);
console.log(obj.a);
console.log(obj.s());

const objA = {
  name: "Tom",
  __proto__: obj,
  sayName() {
    console.log(`hello ${this.name}`);
  },
}

const objB = {
  name: "Huck",
  __proto__: objA,
  asd: "ASD=|=25156171881",
}

const objC = {}
objC.__proto__ = objB

console.log(objA.a);
objA.sayName()

objB.sayName()

console.log("=========");

objC.sayName()

console.log(objC.a);
console.log(objC.asd);
console.log(objC.s());
console.log(objC.name);

const hrll = {
  sh() {
    return this.name + "this is sh!"
  }
}

function Cls(name) {
  this.name = name
  this.__proto__ = hrll
}

const Oa = new Cls("A")
const Ob = new Cls("B")
const Oc = new Cls("C")

console.log(Oa.sh());
console.log(Ob.sh());
console.log(Oc.sh());

console.log(Object.getPrototypeOf(Oa));
console.log(Object.getPrototypeOf(Ob));
console.log(Object.getPrototypeOf(Oc));

console.log("///////////////");

function Nella(...args) {
  this.a = args[0],
    this.b = args[1]
  this.c = args[2]
}

Nella.prototype = {
  // comment out this code
  constructor: Nella,
  nellaFunc1() {
    console.log(this.a);
  },
  nellaFunc2() {
    console.log(this.b);
  },
}

const newC = function(...args) {
  const newObj = {}

  Object.setPrototypeOf(
    newObj,
    args[0].prototype || Object.prototype
  )

  args[0].apply(newObj, args.slice(1))

  return newObj
}

const na = new Nella("a", "r", "g")
const nb = newC(Nella, "r", "i", "a")

console.log(na);
console.log(nb);

na.nellaFunc1()
nb.nellaFunc2()

console.log("=================");

console.log('na:', na);
console.log('na.__proto__:', na.__proto__);
console.log('na.__proto__.constructor:', na.__proto__.constructor)
console.log('Nella.prototype:', Nella.prototype);
console.log('Nella.prototype.constructor:', Nella.prototype.constructor);
console.log('na.constructor:', na.constructor);
console.log('na.__proto__.__proto__:', na.__proto__.__proto__);
console.log('na.__proto__.__proto__.__proto__:', na.__proto__.__proto__.__proto__);

console.log("################");

console.log(Nella.prototype.isPrototypeOf(na));
console.log(Nella.prototype.isPrototypeOf(nb));

const persen = {
  name: "abiria",
  say() {
    console.log(`${this.name}: hello!`);
  }
}

const persen2 = Object.create(persen)

persen2.name = "tim"
persen2.say()

const blankObject = Object.create(null)

console.log(blankObject);

const object = Object.create(Object.prototype)
const object2 = new Object([1, 2, 3])
const object3 = Object()

console.log(object);
console.log(Array.isArray(object2));
console.log(object3);


console.log("++++++++++++++++++");

const getman = (() => {
  const _hidden = 156

  return {
    get value() {
      return _hidden + 'getted'
    },
  }
})()

console.log(
  Object.getOwnPropertyDescriptor(getman, "_hidden")
)

console.log('getman:', getman);

Object.defineProperty(getman, "_hidden", {
  get: () => {throw "can't get"},
  enumerable: true,
  configurable: true,
})

//getman._hidden = 19
console.log('getman:', getman);

console.log(
  Object.getOwnPropertyDescriptor(getman, "_hidden")
)

// inherit the accesser propertys in class
console.log(")))))))))))))))))");

function ACS(name) {
  this.name = name
  
  Object.defineProperties(this, {
    getname: {
      get: function () {
        return this.name + '-getted'
      },
      enumerable: false,
      configurable: true,
    },
    setname: {
      set: function (name) {
        this.name = name + '-setted'
      },
      enumerable: true,
    },
  })
}

const acs = new ACS("abiria")

console.log(acs.setname='qwerr');
console.log(acs.getname);

console.log("(((((((((((((((((((");

const mixinPlus = (target, source) => {
  for (let prop in source) {
    Object.defineProperty(
      target,
      prop,
      Object.getOwnPropertyDescriptor(
        source,
        prop
      )
    )
  }
  return target
}

console.log(
  mixinPlus({
    a: 146,
    b: 'original',
    get c(){
      
    },
  },{
    b: 'new',
    c: [
      'hello',
      'world',
    ],
    set d(qg){
      
    },
  })
);






























