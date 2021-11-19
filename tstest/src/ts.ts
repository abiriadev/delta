const a: number = 146

console.log(a);

(async () => {
  const msg = await Promise.resolve('ts is awesome!')

  console.log(msg);
})()