var path = require('path');
var myModule = require('./myModule');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}
myModule(dir, filterExtension, callback);
