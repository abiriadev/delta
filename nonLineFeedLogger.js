module.exports = function nonLineFeedLogger(...args) {
  console.log('\u001b[s',...args, ('\u001b[u'+'xx').repeat(10), 112233)
    process.moveCursor(-1)

  //console.log('\u001b[H')
}



module.exports("a b c", 18, "ahah")
module.exports("svsh", 17318, "aafh", [17])