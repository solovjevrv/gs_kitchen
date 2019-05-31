let priceM2 = 16000;

function updateSum() {
  let sum = 0;

  // Расчёт столешницы
  if ($('#typeStol').val() == 'type-1') {
    let long = $('#calc-long').val() / 100;
    let width = $('#calc-width').val() / 100;
    let squarePrice = (long * width * priceM2) + (long * 0.04 * priceM2);
    sum = sum + squarePrice;
  } else if ($('#typeStol').val() == 'type-2') {
    let long = $('#calc-long').val() / 100;
    let width = $('#calc-width').val() / 100;
    let long2 = $('#calc-long-2').val() / 100;
    let width2 = $('#calc-width-2').val() / 100;
    let squarePrice = (long * width * priceM2) + ((long2 - width) * width2 * priceM2) + (((long - width2) + (long2 - width) * 0.04) * priceM2);
    sum = sum + squarePrice;
  } else if ($('#typeStol').val() == 'type-3') {
    let long = $('#calc-long').val() / 100;
    let width = $('#calc-width').val() / 100;
    let long2 = $('#calc-long-2').val() / 100;
    let width2 = $('#calc-width-2').val() / 100;
    let long3 = $('#calc-long-3').val() / 100;
    let width3 = $('#calc-width-3').val() / 100;
    let squarePrice = (long * width * priceM2) + ((long2 - width - width3) * width2 * priceM2) + (long3 * width3 * priceM2) + ((long - width2) + (long2 - width - width3) + (long3 - width2)) * 0.04 * priceM2;
    sum = sum + squarePrice;
  } else if ($('#typeStol').val() == 'type-4') {
    let long = $('#calc-long').val() / 100;
    let width = $('#calc-width').val() / 100;
    let long2 = $('#calc-long-2').val() / 100;
    let width2 = $('#calc-width-2').val() / 100;
    let long3 = $('#calc-long-3').val() / 100;
    let width3 = $('#calc-width-3').val() / 100;
    let squarePrice = 
    sum = sum + squarePrice;
  }

  // Мойка
  if ($('#checkbox-naklad').prop("checked")) sum = sum + 700;
  if ($('#checkbox-vstr').prop("checked")) sum = sum + 12000;
  // Плинтус
  if ($('#checkbox-low').prop("checked")) sum = Math.round(sum + 1300 * $('#height').val());
  if ($('#checkbox-high').prop("checked")) sum = Math.round(sum + 1500 * $('#height').val());
  // Монтаж
  if ($('#switch-montazg').prop("checked")) sum = Math.round(sum * 1.07);
  // Убираем копейки
  sum = Math.round(sum);
  // Добавляем пробел и отображаем на экране
  sum = sum.toString();
  if (sum.length > 3) sum = sum.slice(0, sum.length - 3) + ' ' + sum.slice(-3);
  $('.result_calc').text(sum + ' руб.');
}

$(document).ready(function () {
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
      var $handle = $rangeEl.find('.rangeslider__handle');
      var handleValue = '<div class="rangeslider__handle__value">' + this.value + '</div>';
      $handle.append(handleValue);
    },

    onSlide: function (position, value) {
      var $handle = this.$range.find('.rangeslider__handle__value');
      $handle.text(this.value);
      updateSum();
    }

  });

  $('#calc-long').on('change', function () {
    updateSum();
  })
  $('#calc-width').on('change', function () {
    updateSum();
  })
  $('#calc-height').on('change', function () {
    updateSum();
  })
  $('#calc-long-2').on('change', function () {
    updateSum();
  })
  $('#calc-width-2').on('change', function () {
    updateSum();
  })
  $('#calc-height-2').on('change', function () {
    updateSum();
  })
  $('#calc-long-3').on('change', function () {
    updateSum();
  })
  $('#calc-width-3').on('change', function () {
    updateSum();
  })
  $('#calc-height-3').on('change', function () {
    updateSum();
  })

  $('#typeStol').on('change', function () {
    if ($('#typeStol').val() == 'type-1') {
      $('#calc-2').addClass('no-display');
      $('#calc-3').addClass('no-display');
      updateSum()
    }
    if ($('#typeStol').val() == 'type-2') {
      $('#calc-2').removeClass('no-display');
      $('#calc-3').addClass('no-display');
      updateSum()
    }
    if ($('#typeStol').val() == 'type-3') {
      $('#calc-2').removeClass('no-display');
      $('#calc-3').removeClass('no-display');
      updateSum()
    }
    if ($('#typeStol').val() == 'type-4') {
      $('#calc-2').removeClass('no-display');
      $('#calc-3').removeClass('no-display');
      updateSum()
    }
  })

  $('#checkbox-naklad').prop("disabled", true);
  $('#checkbox-vstr').prop("disabled", true);
  $('#checkbox-low').prop("disabled", true);
  $('#checkbox-high').prop("disabled", true);

  $('#switch-moika').on('change', function () {
    if ($('#switch-moika').prop("checked")) {
      $('#checkbox-naklad').prop("disabled", false);
      $('#checkbox-vstr').prop("disabled", false);
      $('.moika-text').addClass("active-text");
    } else {
      $('#checkbox-naklad').prop("disabled", true).prop("checked", false);
      $('#checkbox-vstr').prop("disabled", true).prop("checked", false);
      $('.moika-text').removeClass("active-text");
    }
  })

  $('#checkbox-naklad').click(() => {
    if ($('#checkbox-vstr').prop("checked")) {
      $('#checkbox-vstr').prop("checked", false);
    }
    updateSum();
  });
  $('#checkbox-vstr').click(() => {
    if ($('#checkbox-naklad').prop("checked")) {
      $('#checkbox-naklad').prop("checked", false);
    }
    updateSum();
  });

  $('#switch-plintus').on('change', function () {
    if ($('#switch-plintus').prop("checked")) {
      $('#checkbox-low').prop("disabled", false);
      $('#checkbox-high').prop("disabled", false);
      $('.plintus-text').addClass("active-text");
    } else {
      $('#checkbox-low').prop("disabled", true).prop("checked", false);
      $('#checkbox-high').prop("disabled", true).prop("checked", false);
      $('.plintus-text').removeClass("active-text");
    }
    updateSum();
  })

  $('#checkbox-high').click(() => {
    if ($('#checkbox-low').prop("checked")) {
      $('#checkbox-low').prop("checked", false);
    }
    updateSum();
  });
  $('#checkbox-low').click(() => {
    if ($('#checkbox-high').prop("checked")) {
      $('#checkbox-high').prop("checked", false);
    }
    updateSum();
  });





  $('#switch-montazg').on('change', function () {
    updateSum();
  })


  updateSum();
})