let a = {
  a: {
    prop: 2
  },
  b: {},
}

//a.__proto__ = a

//Object.setPrototypeOf(a.a,a)

for (let prop in a) {
  a[prop].__proto__ = a
}

console.log(a.a.a.a.a.b);
console.log(a.a.a.a.a.a.a.a);