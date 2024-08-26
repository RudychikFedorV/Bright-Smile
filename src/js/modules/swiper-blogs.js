import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperBlogs() {
  const swiper = new Swiper(".swiper-blogs", {
    loop: true,
    parallax: true,
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-blogs .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
}
export default swiperBlogs;
