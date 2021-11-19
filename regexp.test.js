const unittest = require('./unittest.js')

const testcases = [
  {
    input: [
      "axios/0.21.1",
    ],
    output: true,
  },
  {
    input: [
      "axios/71828.828282.991",
    ],
    output: true,
  },
  {
    input: [
      "sghaaxios/18.82.1910skkj",
    ],
    output: true,
  },
  {
    input: [
      `/io.spck/files/delta $
cd axiosTest/
j2y18ltekx:/sdcard/Android/data/io.spck/files/delta/axiosTest $ node app.js
http:/127.0.0.1:51779{ accept: 'application/json, text/plain, */*',
  'user-agent': 'axios/0.21.1',  host: '127.0.0.1:51779',
  connection: 'close' }::ffff:127.0.
  0.1 - - [09/Jan/2017:02:41:14 +0000] GET / HTTP/1.1 200 1
  7 -\" \"axios/0.21.1`,
    ],
    output: true,
  },
  {
    input: [
      "wiwuhshaxiosgsg",
    ],
    output: false,
  },
  {
    input: [
      "1671.2920.29axios",
    ],
    output: false,
  },
]

unittest(
  (...args)=>(/axios\/(?:\d+\.){2}\d+/).test(...args),
  testcases
)
