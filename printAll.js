const printAll = obj => {
  for (const prop in obj) {
    console.log(`${prop} : ${obj[prop]}`)
  }
}

module.exports = printAll