const {
  Console
} = require('console')
const util = require('util')

class Debuglog extends Console {
  private readonly color: (string) => string
  private readonly target: string

  constructor(
    public debugTag: string | Array < string > ,
    {
      color = (v => v),
      target = 'NODE_DEBUG',
    } = {},
    ...option: Array < any >
  ) {
    super({ ...option, stdout: process.stdout })

    this.color = color
    this.target = target
  }

  log(...args: Array < string > ): string {
    const formatted: string = util.format(...args)

    if (process.env[this.target] === this.debugTag) {
      super.log(this.color(formatted))
    }
    return formatted
  }
}

export { Debuglog }

// TODO 나중에 멀티콘솔이나 RxJS랑 통합하기