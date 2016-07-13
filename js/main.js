var likes=0;

function increment() {
  likes = likes + 1;
  console.log(likes);
  $(".like-display").html(likes);
  // Materialize.toast(message, displayLength, className, completeCallback);
 Materialize.toast('Cool! Thank you!', 4000, 'rounded') // 4000 is the duration of the toast

}

$(".like-display").html(likes);
