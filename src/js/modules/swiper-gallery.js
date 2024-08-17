import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperGallery() {
  const swiper = new Swiper(".swiper-gallery", {
    // direction: 'vertical',
    loop: true,
    parallax: true,
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-gallery .swiper-scrollbar",
      draggable: true,
      dragSize: 56,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 0
      }
    }
  });
}
export default swiperGallery;
