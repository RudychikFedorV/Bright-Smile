import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperGallery() {
  const swiper = new Swiper(".swiper-gallery", {
    // direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    parallax: true,
    speed: 1000,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-gallery .swiper-scrollbar",
      draggable: true,
      dragSize:56,
    },
  });
}
export default swiperGallery;
