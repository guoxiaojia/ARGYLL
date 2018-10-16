/**
 * Created by Administrator on 2017/4/19.
 */
$(function () {
    $('.chek').click(function () {
        var color2=$(this).css('color');
        if(color2==='rgb(255, 255, 255)'){
            $(this).css({color:'#0992a5',borderColor:'#c1dfe7'});
        }else {
            $(this).css({color:'white',borderColor:'#0992a5'});
        }
    })
})




