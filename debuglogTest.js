process.env.NODE_DEBUG='foo,net,tls'
require('util').debuglog('foo')('hello!')

console.log(process.env);