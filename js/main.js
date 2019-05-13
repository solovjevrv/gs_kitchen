$(document).ready(function () {
  $(".mobile_nav").click(function () {
    $(this).toggleClass("mobile_nav_active");
    $(".desktop_nav").fadeToggle(500);
  });

  // инициализация rangeslider
  $('input[type="range"]').rangeslider({
    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onInit: function () {
      $rangeEl = this.$range;
      // add value label to handle
      var $handle = $rangeEl.find('.rangeslider__handle');
      var handleValue = '<div class="rangeslider__handle__value">' + this.value + '</div>';
      $handle.append(handleValue);
    },

    // Callback function
    onSlide: function (position, value) {
      var $handle = this.$range.find('.rangeslider__handle__value');
      $handle.text(this.value);
    }
  });

  // инициализация swiper
  new Swiper('.swiper-container', {
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
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // $('#number-project').animateNumber({
  //   number: 100
  // });
  // $('#number-year').animateNumber({
  //   number: 5
  // });
  // $('#number-ton').animateNumber({
  //   number: 2
  // });


});

// let check = true;
// $(window).scroll(function () {
//   let wScroll = $(this).scrollTop();
//   if (wScroll > $('.features').offset().top - ($(window).height() / 1.2) && check) {
//     $('#number-project').animateNumber({
//       number: 100
//     });
//     $('#number-year').animateNumber({
//       number: 5
//     });
//     $('#number-ton').animateNumber({
//       number: 2
//     });
//     check = false;
//   }
// });

let show = true;
let countbox = ".features";
$(window).on("scroll load resize", function () {
  if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  let w_height = $(window).height(); // Высота окна браузера
  let d_height = $(document).height(); // Высота всего документа
  let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    $('#number-project').animateNumber({
      number: 100,
    }, {
      easing: 'swing',
      duration: 1800
    });

    $('#number-year').animateNumber({
      number: 5,
    }, {
      easing: 'swing',
      duration: 1800
    });

    $('#number-ton').animateNumber({
      number: 2,
    }, {
      easing: 'swing',
      duration: 1800
    });
    show = false;
  }
});