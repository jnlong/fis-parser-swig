/* @file: fis-parser-swig
 * @auther: jnlong
 * des: 为了达到实时更新，不使用swig缓存
 */

var swig = require('swig');
var fs = require('fs');
var path = require('path');
var confDef = { cache: false, varControls: ['{{', '}}'], tagControls: ['{%', '%}'], cmtControls: ['{#', '#}'] };

module.exports = function (content, file, conf) {
    var isOut = conf.isOut;
    Object.assign(confDef, conf);
    conf = conf || {};
    swig.setDefaults(confDef);
    var html = swig.renderFile(file.toString());
    if (isOut != undefined) {
        fs.writeFileSync(file.realpathNoExt + '.html', html);
        return content;
    } else {
        return html;
    }
}
