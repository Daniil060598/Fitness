// Swiper 7.4.1
import './vendor/swiper.js';

const swiper = new Swiper('.trainers__slider', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 768px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.trainers__slider-nav_next',
    prevEl: '.trainers__slider-nav_prev',
  },
});
