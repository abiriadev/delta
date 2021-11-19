const obj=new Reflect()

for(const key in obj){
  console.log(`${key} : ${obj[key]}`);
}

console.log('end');