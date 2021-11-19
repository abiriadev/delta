Array.prototype.forEachr = function(...args) {
  this.forEach(...args)
  return this
}

print([1, 2, 3].forEachr(ele => print(ele)));