const eachtestcase = [
  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
     function(ele, index, list) {
        
        console.log("1234");
        this.hook(ele, index, list)
      },
    ],
    successCondition(result) {
      return result === this.input[0]
    },
    hook: (()=>{
      let memory = {}
      let _this = this
   return function hook(...args) {
      //console.log('hook: '+this.toString());
   // log(_this)
    
    if(this.toString()=='[object Window]'){
      return memory
    }else{
      memory[args[0]] = args
      //strfy(this)
    }
      // console.log(args.slice(-1));
    }}).call(this),
  },
  {
    input: [

    ],
    successCondition: () => {},
  },
  /*{
    
  },
  {
    
  },
  {
    
  },*/
]
console.log(
  unittest(_.each)(eachtestcase[0])
);
