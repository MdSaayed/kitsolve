"use strict";

/* =============================
* 1. Dynamically set BG
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const bgDivs = document.querySelectorAll("[data-bg-img]");
  if (bgDivs.length > 0) {
    bgDivs.forEach((div) => {
      const bgImg = div.getAttribute("data-bg-img");
      if (bgImg) {
        div.style.background = `url(${bgImg})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
        div.style.zIndex = "999";
      }
    });
  }
});

/* =============================
* 2. Hero Slider Home One
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const bgSlider = tns({
    container: ".hero__bg-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayButtonOutput: false,
    controls: false,
    nav: true,
    loop: true,
    mouseDrag: false,
    touch: false,
    speed: 1000,
    slideBy: "page",
  });

  const heroSection = document.querySelector(".hero.hero--one");

  // Set background image based on current slide
  function updateHeroBackground(index) {
    const currentSlide = document.querySelectorAll(".hero__bg-slide")[index];
    const bg = currentSlide.getAttribute("data-bg");
    heroSection.style.backgroundImage = `url(${bg})`;
  }

  updateHeroBackground(bgSlider.getInfo().index);
  bgSlider.events.on("indexChanged", function (info) {
    updateHeroBackground(info.index);
  });
});

/* =============================
* 2. Hero One testimonial Slide
============================= */
document.addEventListener("DOMContentLoaded", function () {
  var testimonialSlider = tns({
    container: ".hero__testimonial-slider",
    autoHeight: true,
    items: 1,
    swipeAngle: false,
    speed: 400,
    nav: false,
    gutter: 20,
    prevButton: document.querySelector(".nav-prev"),
    nextButton: document.querySelector(".nav-next"),
  });
});
