'use strict';

const prevBtn = document.querySelector('.button--control.prev');
const nextBtn = document.querySelector('.button--control.next');

// Swiper config
const swiper = new Swiper('.swiper', {
  // Slide repeat from the beginning = true
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  grabCursor: true,

  // The second image is centered.
  initialSlide: 2,

  // Gap in px
  spaceBetween: 15,

  // Meadia query for the gap in the tablet version.
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
});

prevBtn.addEventListener('click', () => {
  swiper.slidePrev();
});
nextBtn.addEventListener('click', () => {
  swiper.slideNext();
});
