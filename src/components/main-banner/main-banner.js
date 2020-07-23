import * as $ from 'jquery';
import 'owl.carousel.es6';

$('.main-banner__slider.owl-carousel').owlCarousel({
  dots: true,
  loop: true,
  nav: true,
  navText: ['<', '>'],
  items: 1
});
