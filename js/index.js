/**
 * Created by Administrator on 2017/4/17.
 */
var myScroll;
var swiper;
$(function(){
    resize(750);

    myScroll = new IScroll('#wrapper', { mouseWheel: true });

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

     swiper = new Swiper('.banner', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
     swiper = new Swiper('.Demonstration', {
         initialSlide :1,
         effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
})