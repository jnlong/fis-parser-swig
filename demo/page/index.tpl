{% extends './layout.tpl' %}
{% block head_res %}
	<link rel="stylesheet" type="text/css" href="../static/a.less">
	<link rel="stylesheet" type="text/css" href="../static/c.less">
    <style type="text/css">
        .head{font-size: 20px;}
    </style>
    <!--STYLE_PLACEHOLDER-->
{% endblock%}
{% block body_content %}
    <div class="head"></div>
    <!-- html -->
{% endblock %}
{% block body_res%}
    <!-- js资源 -->
    {{title}}
    <!--SCRIPT_PLACEHOLDER-->
    <script type="text/javascript">
        console.log('res');
    </script>
{%endblock%}