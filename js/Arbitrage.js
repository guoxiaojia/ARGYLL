var myScroll;
$(function(){
    resize(750);
    myScroll = new IScroll('#wrapper', { mouseWheel: true });

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    /*选项卡*/
    $(".tab-2 .time-1").hide();
    $(".tab-1 .type").tap(function(){
        if(!$(this).is(".active")){
            $(this).addClass("active");
            $(".tab-1 .time").removeClass("active");
            $(".tab-1 .all").removeClass("active");
            $(".tab-2 .type-1").show(300);
            $(".tab-2 .time-1").hide();
        }
    })
    $(".tab-1 .time").tap(function(){
        if(!$(this).is(".active")){
            $(this).addClass("active");
            $(".tab-1 .type").removeClass("active");
            $(".tab-1 .all").removeClass("active");
            $(".tab-2 .time-1").show(300);
            $(".tab-2 .type-1").hide()
        }
    })
    $(".tab-1 .all").tap(function(){
        if(!$(this).is(".active")){
            $(this).addClass("active");
            $(".tab-1 .time").removeClass("active");
            $(".tab-1 .type").removeClass("active");
            $(".tab-2 .type-1").show(300);
            $(".tab-2 .time-1").show(300);
        }
    })
});