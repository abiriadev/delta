_.whileloop = (action) =>{
  let i=0
  let isundone = true
  const breakfunc = ()=>isundone=false
  while(isundone){
    i++
    action(i, breakfunc)
  }
}