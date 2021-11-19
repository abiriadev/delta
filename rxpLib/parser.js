const objEx = require('./../objectExtra.js')

const includes = json => {
  const names = new Set(Object.keys(json))
  return objEx.objMap(json, ({ regexp }, name) => {
    regexp
      .replace(/(?:[^\\]|^)<([\w_\?][\w\d_\?]*)(?!\\)>/g, (match, $1, offset, inputStr) => {
        if (names.has($1)) return json[$1]
        else throw Object.assign(new Error(`'${$1}' name is not defined in this file`), {
          code: 2991,
        })
      })
      .replace(/\\/g, '\\\\')
  })
}

const parse = file => {
  const result = {}

  const lines = file.toString()
    .split('\n')
    .filter(line => !line.match(/^#/))

  lines.forEach(line => {
    const [
      name,
      regexp,
      flags,
    ] = line.match(/([\w\d]+)=\/(.*)\/([igmyu]+)?/)

    result[name] = {
      regexp,
      flags,
    }
  })

  return result//includes(result)
}

module.exports=parse