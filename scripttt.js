new Swiper(".image-slider", {
  mousewheel: {
    sensitivity: 1,
  },
  slidesPerView: 10,
  spaceBetween: 2,
  loop: true,
  loopedSlides: 10,
  autoplay: {
    delay: 1500,
    stepOnLastSlide: false,
  },
  speed: 800,
});
