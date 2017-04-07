/* @file: fis-parser-swig
 * @auther: jnlong
 * des: 为了达到实时更新，不使用swig缓存
 */

var swig = require('swig');
var confDef = {cache: false, varControls: ['{{', '}}'], tagControls: ['{%', '%}'], cmtControls: ['{#', '#}']};

module.exports = function(content,file,conf){
	Object.assign(confDef, conf);
	var template = swig.compileFile(file.realpath, confDef);
	var output = template({});
	return output;
}
