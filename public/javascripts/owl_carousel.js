$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    stagePadding: 0,
    margin:0,
  	mouseDrag: false,
  	touchDrag: false,
  	smartSpeed: 700,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    slideSpeed : 300,
    paginationSpeed : 400,
    pagination: false,
    rewindSpeed: 500,
    responsive:{
      0:{
          items:1
      },
      615:{
          items:2
      },
      1000:{
          items:3
      }
    }
  });

  getWindowHeight();
  $(window).on('resize', function(){
  	getWindowHeight();
  });
  
  verifyClass();

  $('.owl-next').click(function(){
    $('.owl-carousel').trigger('next.owl.carousel');
    verifyClass();
  });
  
  $('.owl-prev').click(function(){
    $('.owl-carousel').trigger('prev.owl.carousel');
    verifyClass();
  });

  $(window).on('mousewheel', function(event) {
    $('.owl-carousel').owlCarousel({
      smartSpeed: 0,
      paginationSpeed : -100
    });
    if(event.originalEvent.wheelDelta > 0) {
      $('.owl-carousel').trigger('next.owl.carousel');
      verifyClass();
     }else {
        $('.owl-carousel').trigger('prev.owl.carousel');
        verifyClass();
     }
  });

});

function verifyClass() {
  if($('.item-one').parent().hasClass('active')){
    $('.left-arrow').addClass('displayIcon');
  } else {
    $('.left-arrow').removeClass('displayIcon');
  }
  if($('.contact').parent().hasClass('active')){
    $('.right-arrow').addClass('displayIcon');
  } else {
    $('.right-arrow').removeClass('displayIcon');
  }
}

function getWindowHeight() {
	var height = $(window).height();
  var width = $(window).width();

  $('.owl-carousel').css({
    'height': height
  });

  $('.owl-carousel-item').css({
    'height': height + 220
  });

}
