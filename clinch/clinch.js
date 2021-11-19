/*const option = [
  {
    name: 'asd',
    description:"hello"
  },
  {
    name: 'fgh',
    description: "world"
  },
]


const text = option.reduce((prev, curr) => {
  return prev + '\n' + `--${curr.name}\t${curr.description}`
}, '')

console.log(text);
*/

const clinch = class {
  constructor(
    //param
  ) {
    this.params = {
      'help': {
        func: this.help,
      }
    }
  }

  help() {

  }

  setParam(
    name,
    func,
    description
  ) {
    this.params[name] = {
      name,
      description,
      func,
    }
  }

  run(argv) {
    for (const param in this.params) {
      const option = this.params[param]

      if (argv.indxOf(option) !== -1) {
        option.func()
      }
    }
  }
}