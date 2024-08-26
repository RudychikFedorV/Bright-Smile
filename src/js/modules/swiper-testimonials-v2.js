import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperTestimonialsV2() {
  const swiper = new Swiper(".swiper-testimonials-v2", {
    loop: true,
    // slidesPerView: 3,
    // spaceBetween: 30,
    parallax: true,
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-testimonials-v2 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      
    },
  });
}
export default swiperTestimonialsV2;
