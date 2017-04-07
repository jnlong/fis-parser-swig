fis.set('project.ignore',[
	'node_modules/**','page/layout.tpl','output/**'
]);

fis.match('*.tpl', {
	parser: fis.plugin('swig2',{tagControls: ['{*', '*}']}),
	rExt: ".html"
});
fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true,
    obtainStyle: true,
    obtainScript: true
  })
});