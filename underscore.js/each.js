_.each = function (list, iteratee) {
  if(Array.isArray(list)){
        console.log(JSON.stringify(this));

    const _this = this
    list.forEach(
      function(...args){
        iteratee.apply(_this, args)

      }
    )
  } else if(typeof list == 'object'){
    
    console.log(this);
    for(const key in list){
      iteratee.call(this, list[key], key, list)
    }
  } else if (typeof list ==='function') {
    
  }
  return list
}