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
