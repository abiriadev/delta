//importScripts('./../delta/print.js')

self.onmessage =ev=>{
  const msg =ev.data
  
  //print(`worker: ${msg}`);

  self.postMessage("answer")
}

