/**
 * Created by Administrator on 2017/4/18.
 */
$(function () {
    // 搜索
    $(".sear input").focus(function(){
        if(!!!$(this).prop("readonly")){
            $(this).prop("placeholder", "")
        }
        $(this).css({'text-align':'left','text-indent':'0.36rem'});
        $('.sear span').css({'left':30,'margin-left':0,});
    });
    $("input").blur(function(){
        $(this).prop("placeholder","Seach");
        var str= $(this).prop("value");
        // 判断是否输入内容
        if (str==false){
            $(this).css({'text-align':'center', 'text-indent':'0.16rem'});
            $('.sear span').css({'left':'50%','margin-left':'-0.4rem',});
        }

    });
})