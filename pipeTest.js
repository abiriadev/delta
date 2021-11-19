const _ = require('lodash')

console.log(_.flow(
  a=>a*2,
  b=>b+1
)(7));


