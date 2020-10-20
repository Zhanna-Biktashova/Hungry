$(function(){
    
  $('.slider__inner').slick({
    dots: true,
    arrows: false
  });

  $('.private__inner-gallery').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    
  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  });

});


