//const printAll = require('./printAll.js')

//const sym = Symbol('asd')
/*
printAll(sym)
printAll(Symbol)
printAll(Symbol.prototype)
*/
//const symbols = Object.getOwnPropertySymbols(sym)
//console.log(symbols);

const symbolToString = symbol => symbol.toString().slice(7, -1)

module.exports=symbolToString
//console.log(symbolToString(sym));