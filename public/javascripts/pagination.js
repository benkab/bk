$(document).ready(function(){

  $('.left-arrow-action').hover(function(){
    $('.previous').toggleClass('movePreviousSpan');
  });

  $('.right-arrow-action').hover(function(){
    $('.next').toggleClass('moveNextSpan');
  });

});


