const addMethodInObj = (obj, method, name) => {
  const methodName = name || method.name || (() => { throw new TypeError(`please input the 'name' argument or name property of 'method' that will used method name`) })()
  if (obj.prototype[methodName]) throw new Error(`'${methodName}' method is already bin object`)
  Object.defineProperty(
    obj.prototype,
    methodName,
    {
      value: method,
      enumerable: false,
    }
  )
}

addMethodInObj(String, function read() {
  return new StringReader(this.valueOf())
})

class Marker {
  constructor(
    position,
    state = {}
  ) {
    if (typeof position !== 'number') throw new TypeError(`'position' argument must be type 'number'`)

    this.position = position
    this.state = state
  }

  get pos() {
    return pos
  }
}

class StringReader
{
  constructor(value) {
    if (typeof value !== 'string') throw new TypeError(`'value' argument must type string`)

    this.value = value
    this.length = value.length

    this.markers = {
      'main': new Marker(0, {
        isEnd: false,
        isMain: true,
        isStatic: false,
        moveInterval: 1,
      }),
    }
    //return new String(value)
  }

  //incrementMarkerIndex
  incrMarker(marker, amount = 1) {
    this.markers[marker] += amount
    return this
  }

  addMarker(
    name,
    startIndex = 0,
    state = {

    }
  ) {
    //console.log('=/'.repeat(18));
    //console.log(typeof name);

    if (
      typeof name !== 'string' &&
      typeof name !== 'symbol'
    ) throw new TypeError(`'name' argument must type string`)

    if (this.markers[name]) throw new Error(`'${name}' marker is already been used`)

    this.markers[name] = new Marker(startIndex, state)

    return this.markers[name]
  }

  markerIndex(marker) { return this.markers[marker] }
  absIndex(index) { return this.value[index] }

  next(
    distance = 1,
    marker = 'main'
  ) {
    this.incrMarker(marker, distance)
    return this.cur(marker)
  }

  last(distance = 1, marker = 'main') { return this.next(-distance, marker) }
  cur(marker) { return markerIndex(marker) }
  after(distance = 1, marker = 'main') { return this.absIndex(this.markerIndex(marker) + distance) }
  brfore(distance = 1, marker = 'main') { return after(-distance, marker) }

  nexts() {}
  lasts() {}
  befores() {}
  afters() {}

  until(condition) {
    let
      res = '',
      next;

    do {
      next = this.next(),
        res += next
    }
    while (condition(next))

    return res
  }

  nextLine() {
    this.until(char => char ==='\n')
  }
}

//StringReader.prototype.__proto__ = String.prototype

console.log('\n=============\n');
require('./fs.promises.js').readFile('./rxpLib/regexLib.rxp').then(data => {
  debugger
  
  const regexStr = new StringReader(data.toString())
  const marker = regexStr.addMarker(Symbol('abi'))
  
  const line = regexStr.nextLine()
  
  console.log(line);
})