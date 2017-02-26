$(document).ready(function(){
        $("#top-tab li").click(function(){
            var i = ($(this).index());//获得点击的li的索引
            $('#top-tab>li').removeAttr("class");
            $(this).addClass("high-light");
            $(".content-list").hide();
            $(".content-list:eq("+i+")").show();/*jquery只接受字符串*/
          //console.log($(".tab-content .tab-list:nth-child("+i+")"));这样怎么不行
        });
});