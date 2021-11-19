const count = Object.assign(
  (main => function count(
    label = main, {
      dontLog = false,
      stdout = process.stdout,
      offset = 0,
    } = {}) {
    const lastCount = count.custom[label] || offset
    stdout.write(`${
      typeof label === 'symbol' ?
      label.toString() :
      label
    }: ${lastCount}`);
    count.custom[count] = lastCount + 1
    return lastCount
  })(Symbol('defaultSymbol')), {
    custom: {},
  }
)


count()
count()