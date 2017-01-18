// Filtered LS



var fs = require('fs');
var path = require('path');

var pathToFile = process.argv[2];
var pathToPath = process.argv[3];
fs.readdir(pathToFile, function (err, flist) {
    flist.forEach(function (flist) {
        if (flist.match(pathToPath)) {
            console.log(flist);
        }

    })
});