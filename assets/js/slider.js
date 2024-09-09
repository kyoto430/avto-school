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
    320: {
      slidesPerView: 1,
    },
    610: {
      slidesPerView: 2,
    },
    744: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
