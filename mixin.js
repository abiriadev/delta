const mixin = (target, source) => {
  for (const key in source)
    if (source.hasOwnProperty(key)) target[key] = source[key]
  return target
}

const a = {
  a: 1,
  b: 2,
}
const b = {
  a: 38,
  c: 3,
}

const printABC = c => {
  console.log(`c: ${JSON.stringify(c)}`)
  console.log(`a: ${JSON.stringify(a)}`)
  console.log(`b: ${JSON.stringify(b)}`)
}

//const c = mixin(a, b)
const c = Object.assign(a, b)

printABC(c)

const obj = {
  eirem: "hong kil dong",
  get name() {
    return this.eirem + ' nim'
  },
  set name(value) {
    this.eirem = value.trim()
  },
}

Object.assign(a, obj)

printABC(obj)

const extend =(target, source)=>{
  
}

// 깊은 복사인지 , symbol 이나 prototype까지 복사하는지, 접근자 프로퍼티도 보존하는지 여부에 따라 mixin과 {...} (spread), Object.assign과 extend(클래스 상속이 아닌 각체 상속), 합성(compose)를 구분한다 

