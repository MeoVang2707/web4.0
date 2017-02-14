var fs = require('fs');
// var array;
// var x = fs.readFileSync('./test.txt', 'utf-8');
// var y = x.split("\r\n")
// fs.readFile('test.txt', function (err, data) {
//   if (err) return console.error(err);
//   x = data.toString();
//   y = x.split("\r\n")
//   console.log(typeof(y));
//   console.log(y);
// });

function readfile(file, callback) {
  fs.readFile(file, function (err, data) {
    if (err) return console.error(err);
    var string = data.toString();
    array = string.split("\r\n");
    callback(array);
  });
}

function writefile(file, data, callback) {
  fs.writeFile(file, data, 'utf-8' ,function(err){
    if(err) return console.log(err);
  });
}

module.exports.readfile = readfile;
module.exports.writefile = writefile;
