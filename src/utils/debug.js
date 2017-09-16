const debug = function(object) {
  const string = JSON.stringify(object, null, 2)
  console.log('\x1b[33m', string, '\x1b[0m')
}

module.exports = debug
