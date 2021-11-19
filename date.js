const now = new Date(2034, 11, 12)

console.log(now.toLocaleDateString());

const start = new Date()
let a = 2,b=3, c=1
while(++c<29999999){
  b*=b*c
  a+=c*c*c*c
}
const end = new Date()
  
  console.log(end-start);