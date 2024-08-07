import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperGallery() {
  const swiper = new Swiper(".swiper-blogs", {
    // direction: 'vertical',
    loop: true,
    slidesPerView: "auto",
    parallax: true,
    speed: 1000,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-blogs .swiper-pagination",
      clickable: true,
    },
    
  });
}
export default swiperGallery;
