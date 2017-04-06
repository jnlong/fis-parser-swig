{% extends './layout.tpl' %}
{{title='ccc'}}
{% block head_res %}
    <style type="text/css">
        .head{font-size: 20px;}
    </style>
{% endblock%}
{% block body_content %}
    <div class="head"></div>
    <!-- html -->
{% endblock %}
{% block body_res%}
    <!-- js资源 -->
    {{title}}
    <script type="text/javascript">
        console.log('res');
    </script>
{%endblock%}