import print from './../delta/print.js'

// myVarModule 에서 myVar을 가져옵니다.
import { myVar } from './myVarModule.js';

print('========================= in myFuncModule:');

// 이 모듈에서 선언하지 않았지만 사용할 수 있습니다.
print(`myVar: ${myVar}`);

// 이 함수는 myFuncModule 에서 선언되었습니다.
const myFunc = param => print(`myFunc was called form ${param}!`);

// 대충 요렇게 사용합니다.
myFunc('myFuncModule');

// 밖에서 사용 가능하게 빼내는 구문입니다.
export { myFunc };
