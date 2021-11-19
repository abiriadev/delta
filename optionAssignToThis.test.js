function Obj(optionObj){
  const option = {
    a: 1,
    b: 2,
  }
  
  for (const prop in option) {
    this[prop] = option[prop]
  }
  
  Object.assign(this, {
    asd: 123,
    qwe: 456,
  })
  
  Object.assign(this, optionObj)
}

console.log(JSON.stringify(new Obj({
  qaz: 123456,
  wsx: 654321,
})));