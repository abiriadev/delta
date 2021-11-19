const cmd = require('./cmd.js')
const path = require('path')

const compile = dir => {
  console.log(`in ${dir}`);
  
  const cmdl=(...args)=>{
    try {
      /* code */
    console.log(...args);
   const re=  cmd(...args)
    console.log('output:',re.output);
    if(re.error)console.error('err:',re.error);
      } catch (err) {
        console.error(err)
      }
}
  
  cmdl('cp', ['/sdcard/tsconfig.json', 'tsconfig.json'], dir)
  cmdl('mkdir', ['src'], dir)
  cmdl('mv', ['*.js', 'src', '-iv'], dir)
  cmdl('tsc', [], src)
  console.log('complete');
}

compile('/sdcard/.sass')