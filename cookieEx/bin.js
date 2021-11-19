const app = require('./app.js')

app.port = app.port || 52929

app.listen(app.port, () => {
  console.log(`running at ${app.port}`);
})