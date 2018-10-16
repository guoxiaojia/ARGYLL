/**
 * Created by Administrator on 2017/4/25.
 */

$(function () {
    resize(750);
//点击随机生成验证码

    $('#yzm').click(function () {
        console.log('11');
        var a=parseInt(Math.random()*26+65);
        var b=parseInt(Math.random()*26+65);
        var c=parseInt(Math.random()*26+65);
        var d=parseInt(Math.random()*10);
        var str=String.fromCharCode(a)+String.fromCharCode(b)+d+String.fromCharCode(c);
        $(this).html(str);

    })



})
