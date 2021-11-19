const port = 62892
require('express')().use((req, res) => {
  console.log(req && 'request!')
  res.send('<h1>hello</h1>')
}).listen(port, () => console.log(`running at ${port}`))