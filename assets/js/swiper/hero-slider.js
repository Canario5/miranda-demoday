// assets/js/swiper/hero-slider.js
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

//? Thank god that you don't use Slick anymore...
const initHeroSlider = () => {
  const heroSwiperElement = document.querySelector(".hero-swiper");

  if (!heroSwiperElement) {
    return;
  }

  const swiper = new Swiper(heroSwiperElement, {
    direction: "horizontal", // 'vertical' or 'horizontal'
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true, // Pause autoplay on mouse hover
    },
    effect: "slide", // Slide transition effect ('slide', 'fade', 'cube', 'coverflow', 'flip')
    fadeEffect: {
      crossFade: true, // Enable cross-fade for fade effect
    },
    speed: 600, // Transition speed (in ms)

    pagination: {
      el: ".swiper-pagination", // Selector for pagination container
      clickable: true, // Allow clicking on pagination bullets to navigate
    },

    // Navigation arrows (Uncomment if you added buttons in HTML)
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // Scrollbar (Uncomment if you added scrollbar in HTML)
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // Accessibility features
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      paginationBulletMessage: "Go to slide {{index}}",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Mousewheel control (optional)
    // mousewheel: true,

    grabCursor: true, // Show grab cursor when hovering over Swiper
  });

  // Optional: Log Swiper instance for debugging
  // console.log('Hero Swiper initialized:', swiper);
};

export default initHeroSlider;
