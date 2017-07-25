var fs = require('fs');
var path = require('path');

module.exports = function(path, ext, callback) {
  fs.readdir(path, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      list.forEach(function(file) {
        if (path.extname(file) === '.' + filter) {
          return callback(null, file);
        }
      })
    }
  })
}
