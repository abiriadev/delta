
!function* gen(i) {
  console.log(i);
  yield* gen(++i)
}(0).next()

//for (const ite of gen()) console.log(ite);
//console.log(gen().next());