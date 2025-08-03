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
* 2. Portfolio One
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".portfolio-list__item");
  const image = document.getElementById("portfolio-image");
  const text = document.getElementById("portfolio-text");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all
      items.forEach((el) =>
        el.classList.remove("portfolio-list__item--active")
      );

      // Add to clicked one
      item.classList.add("portfolio-list__item--active");

      // Update right side image and text
      const newImage = item.getAttribute("data-image");
      const newText = item.getAttribute("data-text");

      image.src = newImage;
      text.textContent = newText;
    });
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

document.addEventListener("DOMContentLoaded", function () {
  const servicesFlip = tns({
    container: ".about__flip-items",
    items: 1,
    autoHeight: true,
    swipeAngle: false,
    speed: 400,
    gutter: 20,
    controls: false,
    nav: false,
  });

  // Get number of slides
  const slideCount = servicesFlip.getInfo().slideCount;

  // Select nav container
  const navContainer = document.querySelector(".about__flip-nav");

  // Generate nav dots dynamically
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("button");
    dot.classList.add("nav-dot");
    if (i === 0) dot.classList.add("active");
    dot.setAttribute("data-slide", i);
    navContainer.appendChild(dot);

    // Add click event
    dot.addEventListener("click", function () {
      servicesFlip.goTo(i);
    });
  }

  // Update active class when slide changes
  servicesFlip.events.on("indexChanged", function (info) {
    const currentIndex = info.displayIndex - 1; // displayIndex is 1-based
    document.querySelectorAll(".nav-dot").forEach(dot => {
      dot.classList.remove("active");
    });
    const activeDot = document.querySelector(`.nav-dot[data-slide="${currentIndex}"]`);
    if (activeDot) activeDot.classList.add("active");
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
      text: "From the first consultation, I knew we were in capable hands. They handled our financial concerns with care and helped reduce unnecessary costs effectively. Their transparent communication, deep expertise, and consistent follow-through made the entire experience seamless, empowering our business with renewed financial confidence.",
      author: "David K.",
      title: "Managing Director",
      imageUrl: "../img/testimonials/testimonials-1.png",
    },
    {
      text: "Elevix transformed our marketing strategy with smart, data-driven insights. Their approach boosted our engagement, conversions, and overall brand performance quickly and efficiently. We saw measurable improvements across campaigns, channels, and long-term brand positioning, along with invaluable support that made implementation faster and results-driven.",
      author: "Sarah L.",
      title: "Marketing Lead",
      imageUrl: "../img/testimonials/testimonials-2.png",
    },
    {
      text: "Elevix delivered a solid, user-friendly software solution on time. Their attention to detail, reliability, and support exceeded our expectations throughout the development process. They provided regular updates, handled challenges with ease, and ensured that the final product aligned perfectly with our goals and vision.",
      author: "Michael B.",
      title: "CTO",
      imageUrl: "../img/testimonials/testimonials-3.png",
    },
  ];

  const testimonialSliderContainer = document.getElementById("testimonialSlider");
  const prevImageElement = document.getElementById("prevImage");
  const activeAvatarElements = document.getElementById("slide__avatar-active");

  // Populate testimonial cards
  testimonials?.forEach((testimonial, index) => {
    const cardHtml = `
      <div class="testimonial-card">
        <div class="testimonial-card__content">
          <p class="testimonial-card__text">${testimonial?.text}</p>
          <div class="testimonials-card-avatar">
            <img class="testimonials-avatar slider__avatar--active" src="${testimonial?.imageUrl}" alt=${testimonial?.author} />
          </div>
          <p class="testimonial-card__author">— ${testimonial?.author}</p>
          <p class="testimonial-card__title">${testimonial?.title}</p>
        </div>
        <div class="testimonial-card__quote quote--three">
          <svg width="49" height="35" viewBox="0 0 49 35" fill="none">
            <path d="M3.90324 34.2857H14.189L21.0461 20.5714V0H0.47467V20.5714H10.7604L3.90324 34.2857ZM31.3318 34.2857H41.6175L48.4747 20.5714V0H27.9032V20.5714H38.189L31.3318 34.2857Z" fill="black" />
          </svg>
        </div>
      </div>
    `;
    testimonialSliderContainer.insertAdjacentHTML("beforeend", cardHtml);
  });

  // Initialize Tiny Slider
  const slider = tns({
    container: "#testimonialSlider",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: false,
    loop: true,
    speed: 400,
  });

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function updatePreviewImages(info) {
    const displayIndex = (info?.displayIndex || 1) - 1;
    const currentIndex = displayIndex >= testimonials?.length ? 0 : displayIndex;
    const totalSlides = testimonials?.length;

    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;

    if (prevImageElement) {
      prevImageElement.src = testimonials[prevIndex].imageUrl;
    }

    if (activeAvatarElements) {
      activeAvatarElements.src = testimonials[currentIndex]?.imageUrl;
    }
  }


  updatePreviewImages({ index: slider.getInfo().index });

  prevButton?.addEventListener("click", () => slider.goTo("prev"));
  nextButton?.addEventListener("click", () => slider.goTo("next"));

  slider.events.on("indexChanged", updatePreviewImages);
});

/* =============================
* 6. Testimonials One Area
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const testimonialsTwo = tns({
    container: ".testimonials-two-slider",
    items: 3,
    slideBy: 1,
    controls: false,
    nav: false,
    mouseDrag: true,
    speed: 600,
    loop: true,
    gutter: 32,
    edgePadding: 200,
    responsive: {
      0: {
        items: 1,
        gutter: 16,
        edgePadding: 16,
      },
      650: {
        items: 2,
        gutter: 24,
        edgePadding: 24,
      },
      992: {
        items: 2,
        gutter: 20,
        edgePadding: 100,
      },
      1400: {
        items: 3,
        gutter: 20,
        edgePadding: 150,
      },
    }
  });


  function updateCenterSlide() {
    const slides = document.querySelectorAll(".testimonials__item");
    slides.forEach(slide => slide.classList.remove("is-center"));

    const activeSlides = document.querySelectorAll(".tns-slide-active");
    const centerIndex = Math.floor(activeSlides.length / 2);

    if (activeSlides[centerIndex]) {
      activeSlides[centerIndex].classList.add("is-center");
    }
  }


  // Call once after slider starts
  setTimeout(updateCenterSlide, 0);

  // Also update when slide changes
  document.querySelector('.testimonials-two-slider').addEventListener('transitionend', () => {
    updateCenterSlide();
  });
});


/* =============================
* 6. Team Two Area
============================= */
document.addEventListener('DOMContentLoaded', () => {
  const mainExpertImage = document.getElementById('mainExpertImage');
  const mainExpertRole = document.getElementById('mainExpertRole');
  const mainExpertName = document.getElementById('mainExpertName');
  const smallExpertsContainer = document.getElementById('smallExpertsContainer');

  // Team data array of objects
  const teamMembers = [
    {
      id: 'leslie',
      image: '../img/team/team-member-1.png',
      thumbnail: '../img/team/team-member-1.png',
      name: 'Leslie Alexander',
      role: 'Graphics Designer',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        pinterest: '#'
      }
    },
    {
      id: 'john',
      image: '../img/team/team-member-2.png',
      thumbnail: '../img/team/team-member-2.png',
      name: 'John Doe',
      role: 'Web Developer',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        pinterest: '#'
      }
    },
    {
      id: 'jane',
      image: '../img/team/team-member-3.png',
      thumbnail: '../img/team/team-member-3.png',
      name: 'Jane Smith',
      role: 'UX Designer',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        pinterest: '#'
      }
    },
    {
      id: 'peter',
      image: '../img/team/team-member-4.png',
      thumbnail: '../img/team/team-member-4.png',
      name: 'Peter Jones',
      role: 'Project Manager',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        pinterest: '#'
      }
    },
  ];

  // Function to update the main expert's details
  function updateMainExpert(member) {
    mainExpertImage.src = member.image;
    mainExpertImage.alt = member.name;
    mainExpertName.textContent = member.name;
    mainExpertRole.textContent = member.role;
    // You can also update social links here if they vary per member
    // For simplicity, current social links are static in HTML
  }

  // Function to render thumbnails from the teamMembers array
  function renderThumbnails() {
    smallExpertsContainer.innerHTML = ''; // Clear existing thumbnails
    teamMembers.forEach(member => {
      const thumbnailDiv = document.createElement('div');
      thumbnailDiv.classList.add('team__small-expert-item');
      thumbnailDiv.dataset.id = member.id; // Store member ID for easy lookup

      const thumbnailImg = document.createElement('img');
      thumbnailImg.src = member.thumbnail;
      thumbnailImg.alt = member.name + ' Thumbnail';
      thumbnailImg.classList.add('team__small-expert-image');

      thumbnailDiv.appendChild(thumbnailImg);
      smallExpertsContainer.appendChild(thumbnailDiv);

      // Add click event listener to each dynamically created thumbnail
      thumbnailDiv.addEventListener('click', () => {
        updateMainExpert(member);
      });
    });
  }

  // Initial rendering of thumbnails and setting the first expert
  renderThumbnails();
  if (teamMembers.length > 0) {
    updateMainExpert(teamMembers[0]); // Set the first member as default
  }
});






