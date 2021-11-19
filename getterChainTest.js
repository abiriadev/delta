const asd = {
  get prop(){
    return 1
  },
}

const cir = {
  _a: v => v + 1,
  _b: v => v * 2,

  get a() {
    console.log('called a');
    return this._a
  },
}


  /*get b() {
    console.log('called b');
    return this._b,
  }*/

for (let prop in cir) {
  cir[prop].__proto__ = cir
}

const ff = Object.assign(
  v => v,
  cir
)

//ff.a.b.a.a.b