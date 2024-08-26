import header from "./modules/header.js";
header();

import headerMobile from "./modules/header-mobile.js";
headerMobile();

import aboutIsScrolledIntoView from "./modules/aboutIsScrolledIntoView.js";
aboutIsScrolledIntoView();

import whyProgressAnimationDone from "./modules/progress.js";
whyProgressAnimationDone();

import faqAccordion from "./modules/faq-accordion.js";
faqAccordion();

import swiperTestimonials from "./modules/swiper-testimonials.js";
swiperTestimonials();

import swiperTestimonialsV2 from "./modules/swiper-testimonials-v2.js";
swiperTestimonialsV2();

import magnificPopup from "./modules/magnificPopup";
magnificPopup();

import swiperGallery from "./modules/swiper-gallery.js";
swiperGallery();

import swiperBlogs from "./modules/swiper-blogs.js";
swiperBlogs();

import swiperPartners from "./modules/swiper-partners.js";
swiperPartners();

import swiperServicesV2 from "./modules/swiper-services-v2.js";
swiperServicesV2();

document.getElementById("copyright").textContent = new Date().getFullYear();
