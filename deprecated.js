const util = require('util')

function add(a, b) {
  return a + b
}

const pow = a => a * a

const depreAdd = util.deprecate(add, 'don\'t use add!')
const deprePow = util.deprecate(pow, 'don\'t use pow!')
const depreDiv = util.deprecate((a, b) => a / b, 'don\'t use div!')

add(1, 2)
pow(3) // warning발생 안함

depreAdd(4, 5)
deprePow(6)
depreDiv(7, 8)