/**
 * Created by Administrator on 2017/4/18.
 */
var myScroll;
$(function () {
    resize(750);
    // 搜索
    $(".sear input").focus(function(){
        if(!!!$(this).prop("readonly")){
            $(this).prop("placeholder", "")
        }
        $(this).css({'text-align':'left','text-indent':'0.9rem'});
        $('.sear span').css({'left':22,'margin-left':0});
    });
    $("input").blur(function(){
        $(this).prop("placeholder","Seach");
        var str= $(this).prop("value");
        // 判断是否输入内容
        if (str==false){
            $(this).css({'text-align':'center', 'text-indent':'0.26rem'});
            $('.sear span').css({'left':'45%','margin-left':'-0.4rem'});
        }

    });

   //tab效果
    $(".Campaign-tabs li").each(function(index){

        $(this).click(function(){
            $(".Campaign-tabs li").removeClass('active').eq(index).addClass('active');
            $(".tab-content .tab").hide().eq(index).css("display","block");
            myScroll.refresh()
        })
    })

});
/**
 * Created by Administrator on 2017/4/18.
 */
