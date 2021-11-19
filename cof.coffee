# comment


###
multi-line comment
a=17
console.log a
###

n = 2

if n > 1 then console.log "#{n} is bigger than 1" else console.log 'too small!'

obj = 
  name: 'abiria'
  #sayHello()
    #console.log 'very good'
  
console.log obj.name

#obj.sayHello()

console.log [0..3]

for i in [3...0]
  console.log "#{i} loop"
  
  for j in [1..4] by 2
    console.log "#{j}"
    
    
person = 
  a: 1
  b: 2

for key, value of person
  console.log "#{key} : #{value}"
  
  
arr = for key, value of person
  "#{key} - #{value}"

console.log arr


arr2 = for item in [0...100] when item % 13 is 0 
  item * 2

console.log arr2

f = (x) -> x

class Cls
  constructor: (
    name,
    age,
  ) -> 
    @name = name
    @age = age
    
  sayHello: ()->
    console.log "#{@name}: hello!"
    return 0



ins = new Cls 'abiria', 17




console.log ins
console.log ins.name
console.log ins.sayHello()

Cls::add = (a, b) -> a + b

console.log (new Cls 0, 0).add 1, 3

class Child extends Cls
  constructor: (
    name,
    length,
  ) -> 
    super name, 1
    @length = length



console.log (new Child 'child', 2020).length