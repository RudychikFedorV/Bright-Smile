import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperPartners() {
  const swiper = new Swiper(".swiper-partners", {
    loop: true,
    slidesPerView: 6,
    parallax: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
  });
}
export default swiperPartners;
