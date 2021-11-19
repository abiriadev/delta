console.dir(JSON.stringify(new function(...args){args.forEach(prop=>this[prop]=prop)}(1, 2, 3)));

Function.prototype.counter= function() {
  this.count ? ++this.count : this.count=0
  
  document.body.innerText+=(`${this.name} : ${this.count}`)
  
  return this
}

const calcPropertyDifferance = assistantOperator => propertys => standardObject => comparisonObject => propertys.reduce((propertyDifferanceObject, property)=> ({...propertyDifferanceObject, [property]: assistantOperator(standardObject[property], comparisonObject[property])}), {});

const a = {
  x: 10,
  y: 20,
  gsh: 28289,
}
const b = {
  x: 70,
  sjs: 72828,
  y: 40,
}

const aa=
calcPropertyDifferance((a, b)=>!!(a && b))(
['x',
'y',
'05',
'gsh']
)

document.body.innerText+=JSON.stringify(aa(a)(b))

