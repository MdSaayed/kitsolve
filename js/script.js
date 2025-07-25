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

/* =============================
* 6. Faq One
============================= */
document.querySelectorAll(".faq__toggle").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const item = this.closest(".faq__item");
    const answer = item.querySelector(".faq__answer");
    const isActive = item.classList.contains("faq__item--active");

    // Collapse all items first
    document.querySelectorAll(".faq__item").forEach((i) => {
      const a = i.querySelector(".faq__answer");
      a.style.height = "0px";
      i.classList.remove("faq__item--active");
    });

    if (!isActive) {
      item.classList.add("faq__item--active");
      answer.style.height = answer.scrollHeight + "px";

      answer.addEventListener(
        "transitionend",
        () => {
          if (item.classList.contains("faq__item--active")) {
            answer.style.height = "auto";
          }
        },
        { once: true }
      );
    }
  });
});

/* =============================
* 6. Faq One
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: false,
    speed: 500,
    gutter: 20,
    mouseDrag: true,
  });

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (prevBtn && nextBtn && slider) {
    prevBtn.addEventListener("click", () => {
      slider.goTo("prev");
    });

    nextBtn.addEventListener("click", () => {
      slider.goTo("next");
    });
  } else {
    console.warn("Tiny Slider or buttons not found.");
  }
});

/* =============================
* 6. Testimonials One Area
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "From the first consultation, I knew we were in capable hands. They approached our financial concerns with professionalism and precision, helping us restructure our planning and reduce unnecessary costs. Their team wasn't just knowledgeable—they were patient, thorough.",
      author: "David K.",
      title: "Managing Director",
      imageUrl: "../img/testimonials/testimonials-1.png",
    },
    {
      text: "Elevix transformed our marketing strategy. Their innovative approach and deep understanding of market trends led to a significant increase in our customer engagement and conversion rates. Highly recommend their services!",
      author: "Sarah L.",
      title: "Marketing Lead",
      imageUrl: "../img/testimonials/testimonials-2.png",
    },
    {
      text: "The team at Elevix provided exceptional support in developing our new software. Their technical expertise and commitment to quality were evident throughout the project, delivering a robust and user-friendly solution.",
      author: "Michael B.",
      title: "CTO",
      imageUrl: "../img/testimonials/testimonials-3.png",
    },
  ];

  const testimonialSliderContainer = document.getElementById("testimonialSlider");
  const prevImageElement = document.getElementById("prevImage");
  const nextAvatarElements = document.querySelectorAll(".next-avatar");


  // Dynamically populate slider with testimonial cards
  testimonials.forEach((testimonial) => {
    const cardHtml = `
                  <div class="testimonial-card">
                    <div class="testimonial-card__content">
                      <p class="testimonial-card__text">${testimonial.text}</p>

                      <!-- Avatar -->
                      <div class="testimonials-card-avatar">
                        <img class="testimonials-avatar next-avatar" src=${testimonial.imageUrl} alt="Next Testimonial User" />
                      </div>

                      <p class="testimonial-card__author">— ${testimonial.author}</p>
                      <p class="testimonial-card__title">${testimonial.title}</p>
                    </div>
                    <div class="testimonial-card__quote">
                      <svg width="49" height="35" viewBox="0 0 49 35" fill="none">
                        <path
                          d="M3.90324 34.2857H14.189L21.0461 20.5714V0H0.47467V20.5714H10.7604L3.90324 34.2857ZM31.3318 34.2857H41.6175L48.4747 20.5714V0H27.9032V20.5714H38.189L31.3318 34.2857Z"
                          fill="black" />
                      </svg>
                    </div>
                  </div>
                `;
    testimonialSliderContainer.insertAdjacentHTML("beforeend", cardHtml);
  });

  // Initialize Tiny Slider
  var slider = tns({
    container: "#testimonialSlider",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: false,
    loop: true,
    speed: 400,
  });

  // Get custom navigation buttons
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");

  // Function to update the preview images
  function updatePreviewImages(info) {
    const currentIndex = info.index;
    const totalSlides = testimonials.length;

    const prevIndex = (currentIndex + 1 + totalSlides) % totalSlides;
    const nextIndex = (currentIndex - 1 + totalSlides) % totalSlides;

    prevImageElement.src = testimonials[prevIndex].imageUrl;

    nextAvatarElements.forEach((img) => {
      img.src = testimonials[nextIndex].imageUrl;
    });
  }


  // Initial update of preview images
  updatePreviewImages({ index: slider.getInfo().index });

  prevButton.onclick = function () {
    slider.goTo("prev");
  };

  nextButton.onclick = function () {
    slider.goTo("next");
  };

  slider.events.on("indexChanged", updatePreviewImages);
});
