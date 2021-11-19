const getCount = () => {
  return document
    .cookie
    .split(';')
    .map(cookie => cookie.trim())
    .map(cookie => cookie.toLowerCase())
    .filter(cookie => cookie.match(/(\w+)=/)[1]==='count')
    .map(cookie=>cookie.match(/\w+=(\w+)/)[1])
    [0]
}