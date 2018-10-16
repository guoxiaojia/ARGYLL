/**
 * Created by Administrator on 2017/7/4.
 */
// 简单的验证根据需求改,以前两个为例子
//判断是否已经输入正确的信息，登录成功回到某个指定页面
$(function(){
    $('.sponsorid').blur(function () {
        var plaid =$(this).val();
        var reg= /[1-9]{5}/g;
        if(plaid!=""&& reg.test(plaid)){

            $('.bug').html('您输入的Sponsor ID对了！');
            $('.spon').css('color','#000');

        }else {

            $('.bug').html('您输入的Sponsor ID不对！');
            $('.spon').css('color','red');

        }

    })

    $('.placementid').blur(function () {
        var plaid2 =$(this).val();
        var reg2= /[1-9]{5}/g;
        if(plaid2!=""&& reg2.test(plaid2)){

            $('.bug').html('您输入的Placement ID对了！');
            $('.plac').css('color','#000');

        }else {

            $('.bug').html('您输入的Placement ID不对！');
            $('.plac').css('color','red');

        }

    })







})




