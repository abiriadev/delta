const ora = require('ora');
const reduceInterval = require('./reduceInterval.js')

const spinner = ora({
  text: 'Loading unicorns',
  prefixText: "-",
  spinner: {
    interval: 170,
    frames: [
      '&',
      '-',
      '/',
      '|',
    ]
  },
  color: 'green',
  hideCursor: true,
  indent: 0,
  interval: 290,
  isEnable: true,
}).start();

reduceInterval(
  [
    () => {
      spinner.color = 'yellow';
      spinner.text = 'Loading rainbows';
    },
    () => spinner.clear(),
    () => spinner.render(),
    () => spinner.frame(),



    () => console.log('is spispinning:', spinner.isSpinning),
    () => process.stderr.write("error! keke"),
    () => spinner.isSilent = false,
    //() => spinner.stop(),
    () => spinner.succeed('wow!'),
    () => spinner.fail('ㅠㅠ'),
    () => spinner.warn('warning!'),
    () => spinner.info('information'),
    () => spinner.stopAndPersist({
      symbol: '@',
      text: 'text!',
      prefixText: '=',
    }),
  ],
  f => f(),
  700
)