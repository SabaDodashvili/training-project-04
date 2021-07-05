const welcomeSlider = new Swiper('.welcome-slider__container', {
  pagination: {
    el: '.welcome-slider__pagination',
    clickable: true,
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,
});

const welcomeCatalogSlider = new Swiper('.catalog-slider__container', {
  navigation: {
    nextEl: '.catalog-slider__button-next',
    prevEl: '.catalog-slider__button-prev',
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,
});

const productMiniSlider = new Swiper('.product-mini-slider__container', {
  slidesPerView: 5,
  direction: 'vertical',
  freeMode: true,
  spaceBetween: 15,
  freeMode: true,
});

const productMainSlider = new Swiper('.product-main-slider__container', {
  direction: 'vertical',
  slidesPerView: 1,

  thumbs: {
    swiper: {
      el: '.product-mini-slider__container',
    },
  },
});

const relatedProductsSlider = new Swiper('.related-products-slider__container', {
  pagination: {
    el: '.related-products-slider__pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    470: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      dynamicBullets: false,
    },
    767: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
