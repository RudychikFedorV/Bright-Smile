import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperServicesV2() {
  const swiper = new Swiper(".swiper-services-v2", {
    loop: true,
    parallax: true,
    speed: 1000,
    slidesPerView: 3.2,
    spaceBetween: 30,
    watchSlidesProgress: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-services-v2 .swiper-pagination",
      clickable: true,
    },
  });
}
export default swiperServicesV2;
