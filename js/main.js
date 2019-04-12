$(document).ready(function(){
  $(".mobile_nav").click(function(){
    $(this).toggleClass("mobile_nav_active");
    $(".desktop_nav").fadeToggle(500);
  });
});

// инициализация swiper
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  slidesPerColumnFill: 'row',
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {delay: 5000},


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})