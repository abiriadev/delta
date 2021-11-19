require('net').connect(51888, '127.0.0.1').on('data', data => {
  console.log(data.toString());
})