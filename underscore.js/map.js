_.map = (list, supplementaryFunction) => {
  if(Array.isArray(list)) {
    return list.map(supplementaryFunction)
  }else{
    const newObj ={}
    for(const key in list){
      newObj[key] = supplementaryFunction(list[key], key, list)
    }
    return newObj
  }
}