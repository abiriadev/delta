const http = require('http');
//const chalk = require('chalk');
const pug = require('pug');
const fs = require('fs');
const mysql = require('mysql');
const express = require('express');

let spinner;
let i = 0;
const complie = false;
const app = express();

const port = 52237

app.set(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.get(
  '/asd', (req, res) => {

    const html = fs.readFileSync('./public/DBtable.html');
    res.end(html)

    console.log("client has reqed!")
  })

app.get('/addpage', (req, res) => {
  const html = fs.readFileSync('./add.html');
  res.send(html.toString())
})

app.all('/add', (req, res) => {
  res.send(
  {
    "a+b": Number(req.body.a) + Number(req.body.b)
  })
})

const arr = [
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
]

const dummy = [
  "qgwhbbe",
  "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  "@^×&&×:whwhjshdb",
  "17739292",
  "black and its own right now I'm just a little bit of time and its own right now I'm just a ",
  "black and its own right now I'm just a a a little bit of time and money to do ",
  "black and its own right now I'm just a little bit of time and its own right now I'm just a little bit of time and money ",
  "white house spokesman for the best of ",
  "white and its own right now I'm just a little bit of time and money 15th "
]

app.all('/next/:i', (req, res) => {
  const html = fs.readFileSync('./ag2.pug');
  const fn = pug.compile(html)

  res.send({
    item: fn({ i: req.params.i })
  })
})

app.all('/next', (req, res) => {
  const html = fs.readFileSync('./next.html');
  res.send(html.toString())
})

app.all('/search', (req, res) => {
  let result = []

  dummy.forEach(item =>{
    const reg = RegExp(req.body.word, 'ig')
    console.log('word: '+req.body.word)
    
    if (item.match(reg)) {
      result.push(item.replace(reg, '<mark>$&</mark>'))
    }
  })
  if(!result){
    res.send({
      msg:"no result"
    })
    return
  }
  
  res.json(JSON.stringify({
    data: result
  }))
})

app.all('/searchpage',(req, res)=>{
    const html = fs.readFileSync('./search.html');
res.send(html.toString())
})
app.listen(port, () => { console.log(`http://localhost:${port}`) })