Array.prototype.split = function(item) {
  let newarr = []
  const clone = [...this]
  for (let i = clone.length - 1; 0 <= i; --i) {
    if (clone[i] == item || i==0) newarr.push(clone.splice(i).slice(1))
  }
  return newarr.reverse()
}

//Array.prototype.makearray



const reverse = arr => [...arr].reverse()

const _ = '_'

const arr1 = [1, 2, _, 4, _, 6, 7, _, _]
const arr2 = [3, 5, 8, 9]

let newarr =[]

//console.log(JSON.stringify(arr1.split('_')));
arr2.forEach((a2, i) =>{
  as[i-=1]&&newarr.push(arr1.split(_)[i])
  a2&&newarr.push(a2)
})

console.log(newarr);