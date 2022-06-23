// Split with Content and Slider
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.25,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
    })
});
// Content with Slider
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.slider-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
});
// Stacked with Navigation and Slider
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.nav-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 2.25,
      },
    },
  })
});
// Slider with Pagination
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.slider-pagination', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
});