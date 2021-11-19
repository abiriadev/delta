const restReturn = function(){
  return 1, 2
}

const restReturnArrow = () => (1, 2)

console.log(restReturn());
console.log(restReturnArrow());
