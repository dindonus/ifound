const fs = require('fs');
const path = './output.txt';

const save = function(object) {
  const string = JSON.stringify(object, null, 2)
  fs.write(path, string, 'w')
}

module.exports = save
