const referenceEachOther = ({
  requestAlias = 'req',
  responseAlias = 'res',
} = {}) => (request, response, next) => {
  request[responseAlias] = response
  response[requestAlias] = request
  next()
}
module.exports=referenceEachOther