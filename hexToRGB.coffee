input = '#4F9AA4'

console.log '\n'

###
normalize = (input) =>
  if 
    typeof input == 'string'
    
    if [
      3,
      6,
    ].indexOf (
      input.charAt 0 == '#' ?
      input.slice 1 :
      input
    ).length != -1
      console.log "it is hex"
  else 
    console.log 
###

input = input.slice 1

console.log "input: #{input}"

hexNumConverter = (hexnum) =>
  #"0123456789abcdef"
  range = ([0..9].map(String).concat(
    ([65..65+5]).map((code)->String.fromCodePoint(code))
    )).join ''
    
  #console.log range
  
  aa =     hexnum.toUpperCase()
  parseInt(range.indexOf(aa))
  
console.log("rgb(#{
  input
  .match(/.{2}/g)
  .map(
    (point)=> (
      #parseInt(point)
      #.toString(10)
      for i, hexNum of point
      
        #console.log(hexNumConverter(hexNum))
        
        Math.pow(16, (point.length - 1 - i)) * hexNumConverter(hexNum)
    )
  )
  .map((v)=>
    #console.log(v)
    v)
  .map (point) => point.reduce((a, b)->a+b)
  .join ','
  })"
)



console.log '\n'