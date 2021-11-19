

class Reader() {
  value: value,
  index: 0,
  getItemByIndex(index){
    return this.value[index]
  },
  getNext(){
    this.index += 1
    return this.getCurrunt()
  },
  getCurrunt(){
    return this.getItemByIndex(this.index)
  },
  getForward(){
    return this.getItemByIndex(this.index + 1)
  },
  getItemsByIndex(index, howmany){
    return this.value.slice(index, index+howmany)
  },
  getNexts(howmany){
    this.index += 1
    return this.getItemsByIndex(this.index, this.index+=howmany)
  },
  getCurrunts(howmany){
    return this.getItemsByIndex(this.index, this.index+howmany)
  },
  getForwards(howmany){
    return this.getItemsByIndex(this.index+1, this.index+howmany+1)
  },
}


console.log(ii.getNext());
console.log(ii.getForwards(3));
console.log(ii.getCurrunt());