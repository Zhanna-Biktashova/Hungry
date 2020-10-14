$(function(){

  // $('.slider__inner').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true
  // });
    

  $('.slider__inner').slick({
    dots: true,
    arrows: false
  });

  $('.private__inner-gallery').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });


});


