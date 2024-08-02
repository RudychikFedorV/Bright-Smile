import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperTestimonials() {
  const swiper = new Swiper(".swiper-testimonials", {
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    parallax: true,
    speed: 1000,
    effect: "cube",
    cubeEffect: {
      shadow: false,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-testimonials .swiper-pagination",
      clickable: true,
    },
  });
}
export default swiperTestimonials;
