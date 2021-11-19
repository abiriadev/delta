console.log("=================");



Object.prototype.hello = function(argv) {
  console.log(`${this} says ${argv}`);
}

const arr={
  a: 5,
  b: 2
}

arr.hello('hi')

Object.defineProperty(
  arr,
  'b',
  {
    enumerable: false
  }
)

for(p in arr){
  console.log(p);
}