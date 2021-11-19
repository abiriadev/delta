const spread = function (obj) {
  for (const prop in obj) {
    obj[prop]
  }
}

console.log(...[1, 2, 3]);