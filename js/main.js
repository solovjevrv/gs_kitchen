$(document).ready(function () {
  // Вспомогательная функция для смены позиций элементов в DOM
  jQuery.fn.swap = function (b) {
    b = jQuery(b)[0];
    var a = this[0],
      a2 = a.cloneNode(true),
      b2 = b.cloneNode(true),
      stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack(stack);
  };


  // Мобильная адаптация
  let smallDisplay = false;
  let changeDisplay = false;

  if ($(window).width() <= 768) {
    $('.news_one_block_picture').each((index, element) => {
      $(element).swap($('.news_one_block_text')[index]);
    });
    smallDisplay = true;
  }

  $(window).resize(function () {

    let oldSmallDisplay = smallDisplay;
    if ($(window).width() <= 768) {
      smallDisplay = true;
    } else {
      smallDisplay = false;
    }

    if (oldSmallDisplay !== smallDisplay) {
      changeDisplay = true;
    }

    if (changeDisplay) {
      if (smallDisplay) {
        $('.news_one_block_picture').each((index, element) => {
          $(element).swap($('.news_one_block_text')[index]);
        });
      } else {
        $('.news_one_block_text').each((index, element) => {
          $(element).swap($('.news_one_block_picture')[index]);
        });
      }
      changeDisplay = false;
    };
  });



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

  // инициализация swiper на сертификаты
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

  // инициализация swiper на текст
  let slideText = new Swiper('.swiper-container-for-text', {
    spaceBetween: 300,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // pagination: {
    //   el: '.text-slider__pagination',
    //   clickable: true,
    // }
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.arrow_down',
      prevEl: '.arrow_up',
    },
  });








  // инициализация swiper на новости
  new Swiper('.swiper-news', {
    // effect: 'coverflow',
    direction: 'horizontal',
    // loop: true,
    spaceBetween: 60,

    // slidesPerColumnFill: 'row',
    // centeredSlides: true,
     slidesPerView: 1,
    // autoplay: {
    //   delay: 50000
    // },
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 120,
    //   depth: 60,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });








  slideText.on('slideChange', function () {
    $('.slider_number').text('0' + (this.realIndex + 1));

  });


  // включаем счётчик цифр по прокрутке.
  jQuery.fn.featuresNumber = function () {
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
  }

  if ($(".features").length > 0) {
    $(".features").featuresNumber();
  }

});