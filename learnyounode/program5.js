/*
 Filtered LS

 Create a program that prints a list of files in a given directory,
 filtered by the extension of the files. You will be provided a directory
 name as the first argument to your program (e.g. '/path/to/dir/') and a
 file extension to filter by as the second argument.

 For example, if you get 'txt' as the second argument then you will need to
 filter the list to only files that end with .txt. Note that the second
 argument will not come prefixed with a '.'.

 Keep in mind that the first arguments of your program are not the first
 values of the process.argv array, as the first two values are reserved for
 system info by Node.

 The list of files should be printed to the console, one file per line. You
 must use asynchronous I/O.

 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

 var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function (err, files) {
 if (err) return console.error(err)
 files.forEach(function (file) {
 if (path.extname(file) === ext) {
 console.log(file)
 }
 })
 })
 */




var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (filename) {
        if (path.extname(filename) === '.' + process.argv[3]) {
            console.log(filename);
        }
    });
});