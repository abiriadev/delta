const getElements = classes => classes.map(_class => document.getElementsByClassName(_class))
const getElement = classes => classes.map(_class => document.getElementsByClassName(_class)[0])

//const calcPropertyDifferance = assistantOperator => propertys => standardObject => comparisonObject => propertys.reduce((propertyDifferanceObject, property) => ({ ...propertyDifferanceObject, [property]: assistantOperator(standardObject[property], comparisonObject[property]) }), {});

const _forEach = (obj, call, lastinit = '') => {
  let last = lastinit
  for (const key in obj) {
    last = call.call(obj, obj[key], key, obj, last)
  }
  return last
}

const plusminus = integer => {
  const parseInteger = Math.abs(parseInt(integer))
  return [
    parseInteger,
    -parseInteger
  ]
}

// 나중에 여기 에러처리 부분 좀더 우아하게 다듬자
const range = (start, end, step = 1) => {
  if (
    typeof start !== 'number' ||
    typeof end !== 'number'
  ) throw new Error("'end' argument must be number")

  if (end <= start) console.warn("if 'end' is lower than(or equal) 'start', it will return empty array")

  //console.log(`args: ${start}, ${end}, ${step}`)

  let arr = []
  for (let i = start; i < end; i += step) arr.push(i)

  //console.log('internal: ' +arr.toString())

  return arr
}

const difference = (mainList, suppletoryList, call) => {
  mainList.forEach((mainListItem, i, mainList) => {
    call(
      mainListItem,
      suppletoryList[i],
      i,
      mainList,
      suppletoryList
    )
  })
}

const forEachBoth = (list1, list2, call) => {
  let result = []

  const iterA = list1[Symbol.iterator]()
  const iterB = list2[Symbol.iterator]()

  for (let c = 0;; ++c) {
    const iteratorResultA = iterA.next()
    const iteratorResultB = iterB.next()

    if (iteratorResultA.done || iteratorResultB.done) break

    result.push(call(iteratorResultA.value, iteratorResultB.value, c, list1, list2))
  }

  return result
}

// let은 좀;;
let pipe, pipeline = pipe = (...funcs) => seed => funcs.reduce((l, r) => r(l), seed);

const getScrollDistance = type => new function() {
  this.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
  this.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}
/*const getDocumentPosition = element => {
  let rect = element.getBoundingClientRect()
  return _forEach(getScrollDistance(), (rate, ratetype, obj, last) => {
   [...last, ratetype == 'x' ? rect.left : rect.top]
  }, [])
}*/

/*const styleadd = (ele, styleable) => {
  _forEach(styleable, (value, styleproperty) => {
    ele.style[styleproperty] = value
  })
}*/

const instanceOf = (instance, constructor) => instance instanceof constructor

const instanceOfUnion = (instance, constructors) => constructors.some(constructor => instanceOf(instance, constructor))

const styleadd = (style, styleable) => {
  for (const propname in styleable) {
    style[propname] = styleable[propname]
  }
}

const getDocumentPosition = element => {
  const rect = element instanceof HTMLElement ? element.getBoundingClientRect() : element
  const scroll = getScrollDistance()
  return {
    x: rect.left + scroll.x,
    y: rect.top + scroll.y,
  }
}

const degreeToRadian = deg => deg * Math.PI / 180;
const radianToDegree = rad => rad * 180 / Math.PI

//const { sin, cos } = Math

const sin = pipeline(
  degreeToRadian,
  Math.sin,
  radianToDegree
)

const cos = pipeline(
  degreeToRadian,
  Math.cos,
  radianToDegree
)

const counter = call => {
  let i = -1
  return function(args) {
    i++
    arguments[arguments.length] = i
    arguments.length += 1
    return call.apply(null, arguments)
  }
}

const lefttop = element => function(left, top) {
  if (arguments.length === 1 && typeof arguments[0] === 'object') {
    element.style.left = arguments[0].left
    element.style.top = arguments[0].top
  } else {
    element.style.left = left
    element.style.top = top
  }
  return element
}

const memorizeWraper = func => {
  let cache = {}
  return arg => {
    if (cache[arg] == undefined) cache[arg] = func(arg)
    return cache[arg]
  }
}

const performOnceOrEvery = (oneOrList, call) => {
  if (oneOrList) {
    if (Array.isArray(oneOrList)) {
      oneOrList.forEach(call)
    } else {
      call(oneOrList)
    }
    // or [].concat(oneOrList).forEach
  }
  return oneOrList
}

const elt = (
  elementName = 'div',
  classNameOrArray,
  children,
  attributes
) => {
  const element = document.createElement(elementName)

  performOnceOrEvery(
    classNameOrArray,
    classI => element.classList.add(classI)
  )

  performOnceOrEvery(
    children,
    child => {
      if (typeof child === 'string') element.innerText += child
      else if (
        instanceOfUnion(
          child,
          [
            HTMLElement,
            Text,
            Document,
            Attr,
            Comment,
            DocumentType,
          ]
        )
      ) element.appendChild(child)
    }
  )

  _forEach(attributes, (value, attribute) => {
    element.setAttribute(value, key)
  })

  return element
}

const load = call => window.onload = call

const isIterable = obj => !!obj[Symbol.iterator]

const repeat = (count, call, ...more) => {
  const results = []

  let isPositiveRange = true
  if (more.length == 1) {
    for (
      let i = count; i < call;
      ++i
    ) {
      results[i] = more[0](i)
    }
  }
  else {
    for (
      let i = 0; i < count;
      ++i
    ) {
      results[i] = call(i)
    }
  }
  return results
}

const divergeMethodF = (
  obj,
  positiveFunction,
  negativeFunction,
  ...values
) => condition => {
  return obj[
    condition ?
    positiveFunction :
    negativeFunction
  ](
    ...values
  )
}

const executeAllMethodF = (
  obj,
  functionList
) => value => {
  functionList.forEach(
    (func, i) => obj[func](value)
  )
}

const executeAllF = functionList => valueList => functionList.reduce((resultes, func, i) => (resultes.push(func(valueList[i])), resultes), [])

const executeEach = func => argumentsList => argumentsList.reduce((resultes, args) => (resultes.push(Array.isArray(args) ? func(...args) : func(args)), resultes), [])

const parseFilename = basename => {
  let indexOfDot = basename.lastIndexOf('.')
  //const isExtless = indexOfDot === -1
  indexOfDot === -1 ? indexOfDot = basename.length : void 0
  return {
    filename: basename.slice(0, indexOfDot),
    ext: basename.slice(indexOfDot + 1),
  }
}

//if(0 != undefined) //exports.repeat = repeat

const log = (arg, option) => {
  console.log(`${
    JSON.stringify(
      arg
    )
  }${
    Array.isArray(option) ?
    option.join('') :
    typeof option === 'function' ?
    option(arg) :
    option || ''}`)
  return arg
}

const strfy = (it, str) => {
  console.log((str && str + ' ' || '') + JSON.stringify(it))
  return JSON.stringify(it)
}

//const doc = document
const cls = className => document.getElementsByClassName(className)[0]
const tag = tagName => document.getElementsByTagName(tagName)[0]
const toArray = arraylike => Array.prototype.slice.call(arraylike)