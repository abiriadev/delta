const funcChain = (...args) => {
  if (typeof args.slice(-1)[0] === 'function') {
    return funcChain.bind(null, ...args)
  } else {
    console.log(args);
    console.log(
      args.slice(0, -1).reduce(
        (l, r) => {
          console.log(l.toString())
          return r(l)
        },
        args.slice(-1)[0]
      )
    )
    //args.slice(-2, -1)[0][0]
    //(args.slice(-1)[0])
  }
}

const _ = require('lodash')

funcChain
  (a => a + 1)
  (b => b * 2)
  (_.partial(Math.pow, _, 2))
  (29)