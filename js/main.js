$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider({
    });
    $('.carousel').carousel({
      dist:-300,
    });

    setInterval(function(){$('.carousel').carousel('next')}, 10000);
})

var likes=0;

function increment() {
  likes = likes + 1;
  console.log(likes);
  $(".like-display").html(likes);
  // Materialize.toast(message, displayLength, className, completeCallback);
 Materialize.toast('Cool. Thank you!', 4000, 'rounded') // 4000 is the duration of the toast

}

function carouselLeft() {
  $('.carousel').carousel('prev');
}

function carouselRight() {
  $('.carousel').carousel('next');
}

$(".like-display").html(likes);
