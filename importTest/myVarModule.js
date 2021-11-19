import print from './../delta/print.js'

// 이 상수는 myVarModule 에서 선언되었습니다.
const myVar = 45;

// myVarModule 모듈 내부입니다.
print('========================= in myVarModule:');

// myVar을 출력해봅니다.
print(`myVar: ${myVar}`);

// 밖에서 사용 가능하게 빼내는 구문입니다.
export { myVar };
