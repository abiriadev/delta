const worker =new Worker("worker.js")
worker.onmessage =ev=>{
  const msg=ev.data
  
  document.write(`main: ${msg}`);

  worker.terminate()
}
worker.postMessage("test message")

setTimeout(()=>{
  document.write("4790954")
}, 100)
