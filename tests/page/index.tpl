{* extends './layout.tpl' *}
    {* set title='indexTitle-'*}
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
{* endblock *}
{* block body_res *}
    <!--SCRIPT_PLACEHOLDER-->
    <script src="../static/a.js"></script>
    <script src="../static/b.js"></script>
    <script type="text/javascript">
        console.log('res');
    </script>
{* endblock *}