## intro
fis编译阶段的插件；
纯前端项目中，支持模板和layout功能；

## Installation
    npm install fis-parser-swig

## fis-conf.js
支持的参数：
cache: false // 默认
varControls: ['{{', '}}'] // 默认
tagControls: ['{%', '%}'] // 默认
cmtControls: ['{#', '#}'] // 默认

    fis.match('*.tpl', {
        parser: fis.plugin('swig',{tagControls: ['{*', '*}']}),
        rExt: ".html"
    });

## demo
### index.tpl
    {* extends './layout.tpl' *}
    {* set title='indexTitle-sdf'*}
    {* block head_res *}
        <link rel="stylesheet" type="text/css" href="../static/a.less">
        <link rel="stylesheet" type="text/css" href="../static/c.less">
        <style type="text/css">
            .head{font-size: 20px;}
        </style>
        <!--STYLE_PLACEHOLDER-->
    {* endblock *}
    {* block body_content *}
        <div class="head"></div>
    {* endblock*}
    {* block body_res*}
        <!--SCRIPT_PLACEHOLDER-->
        <script src="../static/a.js"></script>
        <script src="../static/b.js"></script>
        <script type="text/javascript">
            console.log('res');
        </script>
    {* endblock *}

### layout.tpl
    <!DOCTYPE html>
    <html>
    <head>
            <meta charset="utf-8">
            <title>{{title || 'layout'}}--otherTitle</title>
            <meta content="telephone=no" name="format-detection">
            <meta name="keywords" content="web网址大全,web上网导航,web网址导航,php,前端开发,nodejs">
            <meta name="description" content="收集web学习资源,php,前端开发,nodejs,学习手册,常用网址收录">
            <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
            <link rel="apple-touch-icon-precomposed" href="client/static/img/logo.png">
            {* block head_res*}
            {* endblock *}
    </head>
    <body>
            {* block body_content *}
            {* endblock *}
            {* block body_res *}
            {* endblock *}
    </body>
    </html>
## example
    https://github.com/jnlong/fis-parser-swig/tree/master/demo

## link
* [fis3-postpackager-loader](https://github.com/fex-team/fis3-postpackager-loader)
