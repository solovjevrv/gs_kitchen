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
    slidesPerGroup: 1,
    slidesPerColumnFill: 'row',
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
      delay: 5000
    },
    coverflowEffect: {
      rotate: 0,
      stretch: -10,
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