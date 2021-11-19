const os = require('os')

/*
let c = 0
loop: for (let i = 1, c = 0; i < 4999956; i++) {
  while (++c) {
    c += c
    c *= i
    if (c > 99999) continue loop
  }
}
*/

const systemInfo = {}

const propList = [
  // process
  
  'argv', // execution arguments
  'version', // node version
  'versions', // dependent program version
  'arch', // processer archtecture information
  'platform', // os platform information
  'connected', // 
  'execArgv', // 
  'exitCode', // 
  'mainModule', // 
  'pid', // currunt process indexOf
  'uptime', //f time after start process
  'execPath', // node interpreter path
  'cwd', //f curruntly process executing path like __filename
  'cpuUsage', //f amount of cpu used
  //'env', // environment variables
  'memoryUsage', //f returns the memory usage information object

  // os
  
  'type', //f kind of os
  'hostname', //f cumputer name
  'release', //f os version
  'loadavg', //f returns the array of load average information
  'networkInterfaces', //f return the array of network interfaces information
  'EOL', // a EOL marker of currunt os
  
  //path
  'homedir', //f home directory path
  'tmpdir', //f temporary file save path
  
  //cpu
  //'cpus', //f core information
  
  //memory
  'freemem', //f free memory
  'totalmem', //f total memory
  
  //'constants'

]

for (const prop in process) propList.indexOf(prop) != -1 ? systemInfo[`process.${prop}`] = typeof process[prop] === 'function' ? process[prop]() : process[prop] : 0

const getProps = (obj, objName) => {for (const prop in obj) propList.indexOf(prop) != -1 ? systemInfo[`${objName}.${prop}`] = typeof obj[prop] === 'function' ? obj[prop]() : obj[prop] : 0}

getProps(process, 'process')
getProps(os, 'os')



console.log("\n>>>>>>>>>>>\n");
for (const name in systemInfo) {
  console.log(`${name} : ${JSON.stringify(systemInfo[name])}`);
}

console.log(os.cpus().length);

console.log("\n<<<<<<<<<<<\n")

process.on('uncaughtException', err => {
  console.error(err)
})

process.on('exit', code => {
  console.log(`프로세스가 EXIT-CODE ${code} 로 ${
    code === 0 ?
    '성공적으로 종료되었습니다 ^^' :
    '비정상적으로 종료되었습니다ㅠㅠ'
  }`);
})
