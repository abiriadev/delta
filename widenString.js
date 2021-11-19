module.exports = function(str, width = 1) {
  return '\n'.repeat(width) + str.toString() + '\n'.repeat(width)
}