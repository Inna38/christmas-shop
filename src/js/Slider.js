import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const addSlider = () => {};
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",

  modules: [Navigation],
  speed: 1200,
  autoHeight: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    560: {
      loop: true,
    },
  },
});
