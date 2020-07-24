import * as $ from 'jquery';
import 'owl.carousel.es6';

$('.carousel.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<', '>'],
    responsive:{
      0:{
        items:1
      },
      640:{
        items:2
      },
      900: {
        items: 3
      },
      1200:{
        items:4
      }
    }
});

