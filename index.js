var swig = require('swig');

module.exports = function(content,file,conf){

	var template = swig.compileFile(file.realpath)
	var output = template({title: 'aaa'});
	return output;
}