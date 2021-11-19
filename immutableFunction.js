try {


  const original = function(arg) {
    return arg + 1
  }

  const copy = { ...original }

  copy.a = 220
  //alert(copy(7));
  alert(copy.a)
  alert(original.a);


  /*
  const copy = Object.assign(original, {
    a: 1
  })
  */


} catch (e) {
  alert(e)
}