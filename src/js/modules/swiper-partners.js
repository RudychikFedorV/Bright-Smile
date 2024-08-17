import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperPartners() {
  const swiper = new Swiper(".swiper-partners", {
    loop: true,
    parallax: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
}
export default swiperPartners;
