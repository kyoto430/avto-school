console.log('slider running...');

new Swiper('.sale__slider', {
  spaceBetween: 5,
  loop: false,
  navigation: {
    prevEl: '.sale__btn-prev',
    nextEl: '.sale__btn-next',
  },
  pagination: {
    el: '.sale__pagination',
    clickable: true,
  },
  breakpoints: {
    690: {
      slidesPerView: 1,
    },
    744: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.tariffs-items__slider', {
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: '.tariffs-items__pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    610: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    744: {
      slidesPerView: 2.5,
    },
    1140: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
