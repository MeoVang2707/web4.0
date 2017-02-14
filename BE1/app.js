var FileUtils = require('./FileUtils.js');
var yargs = require('yargs');
var argv = yargs.argv._;
FileUtils.readfile(argv[0], function(array) {
  var array_mediate = [];
  var array_output = [];
  var data = "";
  for (var i = 0; i < array.length; i++) {
    array_mediate[i] = array[i].split(" ");
  };
  array_output.push(array_mediate[0]);
  for (var i = 1; i < array_mediate.length; i++) {
    var check = true;
    for (var j = 0; j < i; j++) {
      if ((array_output[j][0] == array_mediate[i][0])) {
        check = false;
        array_output[j][1] = parseInt(array_output[j][1]);
        array_output[j][1] +=  parseInt(array_mediate[i][1])
        break;
      }
      if(array_mediate[i][0] == ""){
        check = false;
        break;
      }
    }
    if (check) {
      array_output.push(array_mediate[i]);
    }
  }
  for (var i = 0; i < array_output.length; i++) {
    data = data + array_output[i][0] + " " + array_output[i][1] + "\n";
  }
  FileUtils.writefile(argv[1], data);
})
