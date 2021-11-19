const objectExtra = {
  chainMethodList: {},

  mixin() {
    this.chainMethodList = Object.assign(this.objMap(
      this.objFilter(
        this,
        prop => typeof prop === 'function' && [
          'chain',
        ].indexOf(prop) === -1
      ),
      func => {
        return function(...args) {
          this._value = func(
            this._value,
            ...args
          )
          return this
        }
      }
    ), {
      value() {
        return this._value
      },
    })
    return this
  },

  append(
    func,
    methodName = (() => {
      if (!func.name || func.name === 'anonymous') throw new TypeError("'name' property that in 'func' argument must be valid(not anonymous)")
      return func.name
    })()
  ) {
    const name = methodName

    if (this[name]) throw new TypeError(`'${name}' identifier already exist in objectExtra`)
    if([
      'value',
      '_value',
      'chainMethodList',
      'mixin',
      'append',
      '__proto__',
    ].indexOf(name) !== -1) throw new TypeError(`'${name}' identifier is invalid`)

    this[name] = func
    return this.mixin()
  },

  chain(obj) {
    return {
      __proto__: this.chainMethodList,
      _value: obj,
    }
  },

  objFilter(obj, predicate) {
    const newObj = {}
    for (let prop in obj) {
      if (predicate(obj[prop], prop, obj)) {
        newObj[prop] = obj[prop]
      }
    }
    return newObj
  },

  objMap(obj, call) {
    const newObj = {}
    for (let prop in obj) newObj[prop] = call(obj[prop], prop, obj)
    return newObj
  },

  specificObjMap(obj, selector, call) {
    let newObj = obj
    for (let prop in obj) selector(obj[prop], prop, obj) && (newObj[prop] = call(obj[prop], prop, obj))
    return newObj
  },
  
  push(obj, prop, value){
    if(typeof prop === 'object' && !Array.isArray(prop)) {
      return Object.assign({}, obj, prop)
    } else if(value) {
      return Object.assign({}, obj, {
        [prop]: value
      })
      //{...obj, [prop]: value}
    }
    return obj
  },

  map(){
    
  },
  
  append(obj, call){
    let newObj={}
    for (let prop in obj) {
      this.push(obj, call(obj[prop], prop, obj))
    }
    return newObj
  },
}

objectExtra.mixin()

module.exports = objectExtra

