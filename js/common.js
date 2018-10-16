/**
 * Created by Administrator on 2017/7/4.
 */
//一，加载外部页面
$('.box-header').load('common/header.html',function(){

});
//一，加载尾部页面
$('.box-footer').load('common/footer.html',function(){

});
var myScroll;
$(function(){
    myScroll = new IScroll('#wrapper', { mouseWheel: true });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

})

