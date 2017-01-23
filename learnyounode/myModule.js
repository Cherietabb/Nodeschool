var fs = require('fs');
var path = require('path');

module.exports = function (path, ext, callback) {
  fs.readdir(path, function(err, list) {
    if (err) {
      throw err;
    }
  })
}
