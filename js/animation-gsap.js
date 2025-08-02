
"use strict";


/* =============================
* 6. Process One Area
============================= */

gsap.registerPlugin(ScrollTrigger);

const grid = document.querySelector(".process__grid");

gsap.to(grid, {
  x: () => -(grid.scrollWidth - window.innerWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".process__grid",
    start: "center center",
    end: () => "+=" + (grid.scrollWidth - window.innerWidth),
    pin: true,
    scrub: 1,
    anticipatePin: 1
  }
});

/* =============================
* 6. Portfolio Two Area
============================= */
// const portfolioSlider = document.querySelector("#portfolioSlider1");  
// const portfolioSliderGrid = portfolioSlider.querySelector(".portfolio__grid");  

// gsap.to(portfolioSliderGrid, {
//   x: () => -(portfolioSliderGrid.scrollWidth - window.innerWidth) + "px",
//   ease: "none",
//   scrollTrigger: {
//     trigger: portfolioSlider,
//     start: "center center",
//     end: () => "+=" + (portfolioSliderGrid.scrollWidth - window.innerWidth),
//     scrub: 1,
//     pin: true,
//     anticipatePin: 1
//   }
// });


