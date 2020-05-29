$(function(){
    $('.slider_inner, .news__slider-inner').slick({
        nextArrow:'<button type="button" class=" slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',

        infinite: false
    });
    // $('select').styler();
   $ ('.our_partners_inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:'<button type="button" class=" slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    

});

});
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  

  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    });
  });
  