const a = a => console.log(a);

/*a(...{
  a: 1,
  b: 2,
})*/

/*console.log(
  {
    ...{
      a: 1,
      b: 2,
    },
    c: 3,
  }
);*/

const obj = {
  a: 1,
  b: 2,
}

console.log(
  {
    ...obj,
    c: 3,
  }
);