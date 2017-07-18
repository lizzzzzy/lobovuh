$(function () {
  $(document).on('mouseover mouseout', "a", function (e) {
    var href = $(this).attr('href');
    if (!href || href == '#') {
      return;
    }
    $("a")
      .filter('[href="' + $(this).attr('href') + '"]')
      .toggleClass("hover", e.type == 'mouseover');
  });

  $('.select select').on('change', function () {
    $('input[name="city"]').val($(this).find('option:selected').val());
  });

  $('#simple-form').submit(function(e) {
    e.preventDefault();
    
    var data = $(this).serialize();
    $.ajax({
      url: "send.php",
      method: "post",
      data: data,
      success: function(result){
        console.log(result);
        $('.modal').addClass('active');
        $('.overlay').addClass('active');
      }
    });
    return false;
  });
});


var slider = document.querySelector('.slider-container');

var slides = document.querySelectorAll('.slider__item');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide, 20000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider__item showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('prev');

next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  previousSlide();
};


$('.button--transparent input').on('change', function () {
  $(this).parent().addClass('button--green');
  $(this).parent().find('label').text('Другое фото');
});

var close = document.querySelector('.close');
var overlay = document.querySelector('.overlay');

close.onclick = function () {
  close.parentElement.classList.remove('active');
  overlay.classList.remove('active');
};
