$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider({
    });
    $('.carousel').carousel({
      dist:-300,
    });
    $('.scrollspy').scrollSpy();

    // setInterval(function(){$('.carousel').carousel('next')}, 10000);

    var fixmeTop = $('.fixed-position').offset().top;       // get initial position of the element
    var top;
    var left;
    var css1;
    var css2;
    var scrollFlag = false;

    $(window).scroll(function() {                  // assign scroll event listener

        var currentScroll = $(window).scrollTop(); // get current position

        if (currentScroll >= (fixmeTop-10)) {
          css1 = {position: 'fixed', top: 15, left: left};
            $('.fixed-position').css(css1);
        } else {
          top = $('.fixed-position').offset().top;
          left = $('.fixed-position').offset().left;

          css2 = {position: 'static', top: top, left: left};
            $('.fixed-position').css(css2);
        }


    });


})

var likes=0;

if (localStorage.likes!=null) {
  likes=localStorage.likes;
}

function increment() {
  likes = Number(likes) + 1;
  localStorage.setItem("likes", likes);
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
