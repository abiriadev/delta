const print = (obj, ...args) => {
  let i = args[1] || 0
  const noDeepsearch = args[2]

  let output = ""
  let type = ""

  if (obj == null) {
    output = 'NULL'
    type = 'null'
  } else if (typeof obj == 'string') {
    output = `"${obj}"`
  } else if (obj instanceof HTMLElement) {
    output = `class: "${obj['className']}", tag: &lt;${obj.nodeName.toLowerCase()}&gt;`

    type = 'HTMLElement'
  } else if (typeof obj == 'undefined') {
    output = `※${obj}※`
  } else if (obj instanceof Error) {
    output = obj.toString()
    type = 'error'
  } else if (typeof obj == 'number') {
    output = obj
  } else if (typeof obj == 'boolean') {
    output = obj.toString().toUpperCase()
  } else if (typeof obj == 'symbol') {
    output = obj.toString()
  } else if (typeof obj == 'function') {
    output = `name: "${obj.name}", code: ${obj}`
  } else if (obj instanceof Date) {}
  else if (obj instanceof Object || typeof obj == 'object') {
    if (!obj) {
      output = "281991"
    }

    for (let key in obj) {
      output += `"${key}" : ${JSON.stringify(typeof obj[key] == 'object' ? noDeepsearch && i < 3 && `<###${print(obj[key], ' '.repeat(i * 4), i+1)}###>` : obj[key])},<br>`
    }
    if (!output) {
      output = 'no obj {}'
    }
  } else {
    output = 'other'
  }
  document.body.innerHTML += `${args[0] ? args[0] + ' >> ' : ''}[${type || typeof obj}]: ` + output + '<br><br>'

  return obj
}

export default print