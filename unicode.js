/*for (let i = 0; i < 9999; i++) {
  console.log(`${i}: ${'\u'+i}`);
}*/

/*
console.log("qwe\u{1f4d6}");
console.log('♨️'.codePointAt(0).toString(16));
console.log('\u{2668}');
*/


const myUpperCase = str => {
  let result = ""
  for (let i = 0; i < str.length; ++i) {
    let charCode = str.charCodeAt(i)
    if (97 <= charCode && charCode <= 122) charCode -= 32
    result += String.fromCharCode(charCode)
  }
  return result
}

const asciiList = (end, start = 0) => {
  for (let i = start; i < end; i++) {
    console.log(`${i} : ${String.fromCodePoint(i)}`)
  }
}

const hangul = () => {
  let text = []
  const start = 44032
  let currunt = start
  for (let initalConsonant = 0; initalConsonant <= 18; initalConsonant++) {
    for (let vowel = 0; vowel <= 20; vowel++) {
      for (let finalConsonant = 0; finalConsonant <= 27; finalConsonant++) {
        text.push(String.fromCodePoint(currunt++))
      }
      text.push('\n')
    }
      text.push('\n')
  }

  return text
}

//asciiList(55297, 44024)

console.log(
  ''.concat(...hangul())
);


console.log('ㄱ'.codePointAt(0).toString(16))
console.log('\u3131');


asciiList(12690,12593)

asciiList(60, 48)

asciiList(8700, 8590)