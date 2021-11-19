Function.prototype.mybind = function(that) {
  const args = Array.prototype.slice.call(arguments, 1)
  const _this = this
  return function() {
    
    console.log(    args.concat(Array.prototype.slice.call(arguments))
);
    
        console.log('that: '+that);
console.log(typeof args[0]);
console.log(_this.apply(that,args))
   /* _this.apply(that, 
    args.concat(Array.prototype.slice.call(arguments))
    )*/
  }
}



const add = (a, b) => a + b

const baad = add.bind(null, 1)

//console.log(baad(2));

const add3 = (a, b, c) => a + b + c

const badd3 = add3.bind(null, 4)

//console.log(badd3.bind(null, 5).bind(null, 6)());
const addthis = function(a, b, c) {
  
  return Number(this) + Number(a) + Number(b) +Number(c)
  }

//console.log(addthis.bind(1, 2).bind(3, 4)(5));
  

console.log(
addthis
.mybind(1, 2, 9)
(4))