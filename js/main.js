$(document).ready(function () {
  $(".mobile_nav").click(function () {
    $(this).toggleClass("mobile_nav_active");
    $(".desktop_nav").fadeToggle(500);
  });

  // инициализация swiper
  let mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,

    slidesPerColumnFill: 'row',
    centeredSlides: true,
    slidesPerView: 2,
    autoplay: {
      delay: 50000
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 120,
      depth: 60,
      modifier: 1,
      slideShadows: true,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  })

});