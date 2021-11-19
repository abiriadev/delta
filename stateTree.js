const isChildOf = function isChildOf(child, parent) {
  //console.log(child)
  if (child === null) return false
  return child.__proto__ === parent ? true : isChildOf(child.__proto__, parent)
}

class State {
  constructor(
    name,
    option
  ) {
    this.identifier = Symbol(name)
    Object.assign(this, option)
  }
}

exports.StateTree = class StateTree {
  constructor({
    inherit = [],
  } = {}) {
    this.tree = inherit
  }

  current() { return this.tree.slice(-1)[0] }
  into(state) {
    this.tree.push(state)
    return this
  }
  stepOut(howmany = 1) {
    howmany = parseInt(howmany)
    if (Object.is(howmany, NaN)) return this
    this.tree.splice(-howmany)
    return this
  }
  isInsideOf(state) { return this.tree.some(st => st === state) }

  intoEtcetera(iterable) {
    this.tree.push(...iterable)
    return this
  }
  getAbove(howmany = 1) { return this.tree.slice(-howmany - 1, -howmany)[0] }
  getDeepth() { return this.tree.length }
  getRoot() { return this.tree[0] }

  toString(separater = '>') { return this.tree.join(separater) }
}

/*
const tree = new exports.StateTree()

tree.into('a')
tree.into('b').into('c')
tree.intoEtcetera('def')

console.log(tree.tree);
console.log('current():', tree.current());
console.log('isInsideOf(b):', tree.isInsideOf('b'));
console.log('isInsideOf(x):', tree.isInsideOf('x'));
console.log('isInsideOf():', tree.isInsideOf());
console.log('getRoot():', tree.getRoot());
console.log('getDeepth():', tree.getDeepth());
console.log(tree.toString());
console.log('getAbove():', tree.getAbove());
console.log('getAbove(2):', tree.getAbove(2));
console.log('getAbove(382):', tree.getAbove(382));
console.log('getAbove(true):', tree.getAbove(true));
console.log('stepOut():', tree.stepOut());
console.log('current():', tree.current());
console.log('stepOut(2):', tree.stepOut(2));
console.log(tree.toString());
console.log('stepOut({a: 1}):', tree.stepOut({ a: 1 }));
console.log(tree.toString());
*/
