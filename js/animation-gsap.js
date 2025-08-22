"use strict";

gsap.registerPlugin(ScrollTrigger);

/**
 * A reusable function to animate elements on scroll.
 * This version accepts a single CSS selector or an array of selectors.
 *
 * @param {string|string[]} selectors - A single CSS selector string or an array of selector strings.
 * @param {object} [options={}] - Optional animation settings to override defaults.
 */
function animateOnScroll(selectors, options = {}) {
  // Convert single selector string to an array for consistent handling
  const selectorArray = Array.isArray(selectors) ? selectors : [selectors];

  selectorArray.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    elements.forEach((el, index) => {
      gsap.fromTo(el, {
        y: 50,
        opacity: 0,
        ...options.from
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.1, // Staggers the animation for each item
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          ...options.scrollTrigger
        },
        ...options.to
      });
    });
  });
}

function animateArrowButton(selector) {
  const button = document.querySelector(selector);
  if (!button) return;

  gsap.fromTo(button, {
    y: -5
  }, {
    y: 5,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1, // -1 means it will repeat infinitely
    yoyo: true // Makes the animation go back and forth
  });
}

function animateZoom(selectors, options = {}) {
  const selectorArray = Array.isArray(selectors) ? selectors : [selectors];

  selectorArray.forEach(selector => {
    const images = document.querySelectorAll(selector);
    if (!images.length) return;

    images.forEach(img => {
      gsap.fromTo(img, {
        scale: 1.1,
        ...options.from
      }, {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          toggleActions: "play none none none",
          ...options.scrollTrigger
        },
        ...options.to
      });
    });
  });
}

/**
 * Main function to initialize all animations using the DRY method with arrays.
 */
function initAllAnimations() {
  /* =============================
  * 1. Hero One Area
  ============================= */
  animateOnScroll(['.hero__tagline-wrapper', '.hero__headline', '.hero__testimonial', '.hero__cta']);
  animateArrowButton('.hero__arrow');

  /* =============================
  * 2. Services One Area
  ============================= */
  animateOnScroll([
    '.services__desc',
    '.services__item'
  ]);

  /* =============================
  * 3. About One Area
  ============================= */
  animateOnScroll(['.about__desc', '.about__stat', '.about__flip', '.about__btn', '.about__action']);
  animateZoom(['.about__background', '.about__flip-img', '.about__image-main']);
  animateArrowButton('.about__image-arrow');

  /* =============================
  * 4. Portfolio One Area
  ============================= */
  animateOnScroll(['.portfolio-list__item', '.portfolio-image__desc']);
  animateZoom(['.portfolio-image__img']);

  /* =============================
  * 5. Testimonials One Area
  ============================= */
  animateOnScroll(['.testimonials__nav']);
  animateZoom(['.slider__preview', '.testimonial-card', '.slider__active-img']);

  /* =============================
  * 6. Faq One Area
  ============================= */
  animateOnScroll(['.faq__item']);
  animateZoom(['.faq__bg-img', '.faq__bg-shape']);

  /* =============================
  * 7. CTA One Area
  ============================= */
  animateZoom(['.cta__content']);
  animateOnScroll(['.cta__social-link']);

  /* =============================
  * 8. Team One Area
  ============================= */
  animateOnScroll(['.team__member']);

  /* =============================
  * 9. Contact One Area
  ============================= */
  animateZoom(['.contact__bg']);
  animateOnScroll(['.contact__form-wrapper', '.contact__info-text']);

  /* =============================
  * 10. Blog One Area
  ============================= */
  animateOnScroll(['.blog-card']);

  /* =============================
   * 11. Hero Two Area
   ============================= */
  animateZoom(['.hero--style-two .hero__img', '.hero--style-two .hero__slider'])
  animateOnScroll(['.stats']);

  /* =============================
  * 12. About Two Area
  ============================= */
  animateZoom(['.about--style-two .about__image']);
  animateArrowButton(['.arrow__btn']);
  animateOnScroll(['.stat__item', '.phone__number']);

  /* =============================
  * 13. Services Two Area
  ============================= */
  animateOnScroll(['.services--style-two .services__item', '.services__item-title-small', '.services__item-link']);
  animateArrowButton(['.portfolio__arrow-btn']);

  /* =============================
  * 14. Process Two Area
  ============================= */
  animateZoom(['.process__img-wrap']);

  /* =============================
  * 15. Team Two Area
  ============================= */
  animateZoom(['.team__main-expert-image', '.team__small-expert-image']);
  animateOnScroll(['.team__header', '.team__main-expert-role', '.team__main-expert-name', '.team__main-expert-social']);

  /* =============================
  * 16. Contact Two Area
  ============================= */
  animateOnScroll(['.contact__info-card']);

  /* =============================
  * 17. Blog Two Area
  ============================= */
  animateOnScroll(['.blog__item']);

  /* =============================
  * 18. CTA Two Area
  ============================= */
  animateOnScroll(['.cta__logo-wrap', '.cta__form']);

  /* =============================
  * 19. Here Three Area
  ============================= */
  animateZoom(['.hero--style-three .swiper-slide', '.hero--style-three .hero__desc', '.hero__rating-wrap']);
  animateOnScroll(['.hero__rating-wrap']);

  /* =============================
  * 20. Features Three Area
  ============================= */
  animateOnScroll(['.features--style-one .features__card']);

  /* =============================
  * 21. Product Benefits Area
  ============================= */
  animateOnScroll(['.product-benefits__item']);
  animateZoom(['.product-benefits__item img']);

  /* =============================
  * 22. Testimonials Three Area
  ============================= */
  animateOnScroll(['.review__avatars', '.testimonials__body', '.testimonials__nav']);

  /* =============================
  * 23. Pricing One Area
  ============================= */
  animateOnScroll(['.pricing__toggle', '.pricing__discount', '.pricing__desc', '.pricing__card']);

  /* =============================
  * 24. Hero Four Area
  ============================= */
  function initHeroFiveAnimation() {
    const heroSection = document.querySelector('.hero--style-four');
    if (!heroSection) return;

    animateOnScroll([
      '.hero--style-four .hero__title',
      '.hero--style-four .hero__desc',
      '.hero--style-four .hero__btn'
    ]);

    const bgSlides = heroSection.querySelectorAll('.hero__bg-slide');
    if (bgSlides.length > 0) {
      gsap.from(bgSlides, {
        xPercent: 100 * (bgSlides.length - 1),
        ease: "none",
        duration: bgSlides.length * 2,
        scrollTrigger: {
          trigger: ".hero-bg-slider__container",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true
        }
      });
    }

    gsap.fromTo('.hero__bg-nav-next, .hero__bg-nav-prev', {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      yoyo: true,
      scrollTrigger: {
        trigger: heroSection,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo('.hero__bg-shape', {
      scale: 1.1,
    }, {
      scale: 1,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: heroSection,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }
  initHeroFiveAnimation();

  /* =============================
  * 25. Services Tag Area
  ============================= */
  animateOnScroll(['.tag__list']);

  /* =============================
  * 26. About Three Area
  ============================= */
  animateOnScroll(['.about--style-three .about__service', '.about--style-three .about__item', '.about__phone']);
  animateZoom(['.about__slider']);

  /* =============================
  * 27. Process Three Area
  ============================= */
  function initProcessThreeAnimation() {
    const processSection = document.querySelector('.process--style-three');
    if (!processSection) return;

    // Animate the main title and subtitle using the global animateOnScroll function
    animateOnScroll([
      '.process--style-three .process__subtitle',
      '.process--style-three .process__title'
    ]);

    // Animate each process step
    const steps = processSection.querySelectorAll('.step');
    steps.forEach((step, index) => {
      // Animate the text content (number, title, description) to fade in and slide up
      gsap.fromTo(step.querySelector('.step__text'), {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2, // Adds a slight delay to the text after the image starts
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });

      // Animate the image to zoom in on scroll
      gsap.fromTo(step.querySelector('.step__img'), {
        scale: 1.1,
      }, {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });

      // Animate the background shape to fade in
      gsap.fromTo(step.querySelector('.step__bg-shape'), {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });
    });
  }
  initProcessThreeAnimation();

  /* =============================
  * 28. Portfolio Three Area
  ============================= */
  function initPortfolioThreeAnimation() {
    const portfolioSection = document.querySelector('.portfolio--style-three');
    if (!portfolioSection) return;

    animateOnScroll([
      '.portfolio__subtitle',
      '.portfolio__title'
    ]);

    const portfolioItems = portfolioSection.querySelectorAll('.portfolio__item');
    portfolioItems.forEach((item) => {
      gsap.fromTo(item.querySelector('.portfolio__img'), {
        scale: 1.1,
      }, {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      gsap.fromTo(item.querySelector('.portfolio__content'), {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    });
  }
  initPortfolioThreeAnimation();

  /* =============================
  * 29. Testimonials Four Area
  ============================= */
  animateOnScroll(['.testimonials--style-four .testimonials__description', '.testimonials--style-four .testimonials__image-col', '.testimonials--style-four .testimonials__card']);

  /* =============================
  * 30. Hero Five Area
  ============================= */
  function initHeroSixAnimation() {
    const heroSection = document.querySelector('.hero--style-five');
    if (!heroSection) return;

    const tl = gsap.timeline();

    tl.fromTo('.hero--style-five .hero__subtitle, .hero--style-five .hero__title, .hero--style-five .hero__desc', {
      y: 50,
      opacity: 0,
      skewY: 5,
    }, {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15,
    });

    tl.fromTo('.hero--style-five .hero__image', {
      x: 100,
      opacity: 0,
      scale: 0.9,
    }, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    }, "<0.5");

    function animateNumber(element, endValue) {
      gsap.from(element, {
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: {
          textContent: 1
        },
        onUpdate: function () {
          // This formats the number with a plus sign for 98+
          if (element.textContent === '98') {
            element.textContent += '+';
          }
        },
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      // Animate the specific SVG path icon
      gsap.fromTo('.hero--style-five .hero__desc-wrap svg', {
        scale: 0.9,
        opacity: 0.5,
        transformOrigin: "center center",
      }, {
        scale: 1.1,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    animateNumber(document.querySelector('.hero--style-five .hero__rating-wrap:first-of-type .hero__rating'), 4.98);

    animateNumber(document.querySelector('.hero--style-five .hero__rating-wrap:last-of-type .hero__rating'), 98);

    gsap.fromTo('.hero--style-five .hero__content-bg', {
      rotation: 0
    }, {
      rotation: 360,
      duration: 100,
      ease: "none",
      repeat: -1,
    });
  }
  initHeroSixAnimation();

  /* =============================
  * 31. Breadcrumb Area
  ============================= */
  animateOnScroll(['.breadcrumb__links']);

  /* =============================
  * 32. Global Animation
  ============================= */
  animateOnScroll([
    '.title-xl',
    '.title-lg',
    '.title-xxl',
    '.subtitle',
    '.btn-secondary',
    '.btn-secondary',
    '.btn-primary',
    '.text-desc',
    '.btn-square-wrap'
  ]);
}
document.addEventListener("DOMContentLoaded", initAllAnimations);


/* =============================
* 33. Process One Area
============================= */
function initProcessGridAnimation() {
  const grid = document.querySelector(".process__grid");

  if (!grid) return;

  gsap.to(grid, {
    x: () => -(grid.scrollWidth - window.innerWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: grid,
      start: "center center",
      end: () => "+=" + (grid.scrollWidth - window.innerWidth),
      pin: true,
      scrub: 1,
      anticipatePin: 1
    }
  });
}
document.addEventListener("DOMContentLoaded", initProcessGridAnimation);

