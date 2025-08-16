document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("header nav");
    const screenWidth = 992;
    let meanContainer = null;
    let menuVisible = false;

    function createMeanMenu() {
        if (window.innerWidth > screenWidth) {
            destroyMeanMenu();
            return;
        }

        if (meanContainer) return;

        // wrapper container
        nav.classList.add("mean-remove");
        meanContainer = document.createElement("div");
        meanContainer.classList.add("mean-bar");
        meanContainer.innerHTML = `
      <a href="#" class="meanmenu-reveal">
        <span></span><span></span><span></span>
      </a>
      <nav class="mean-nav">${nav.innerHTML}</nav>
    `;
        document.body.classList.add("mean-container");
        document.body.prepend(meanContainer);

        const revealBtn = meanContainer.querySelector(".meanmenu-reveal");
        const meanNav = meanContainer.querySelector(".mean-nav ul");
        meanNav.style.display = "none";

        revealBtn.addEventListener("click", function (e) {
            e.preventDefault();
            menuVisible = !menuVisible;
            meanNav.style.display = menuVisible ? "block" : "none";
            revealBtn.classList.toggle("meanclose", menuVisible);
        });

        // add expand (+) for child menus
        meanContainer.querySelectorAll(".mean-nav li ul").forEach(ul => {
            const parent = ul.parentElement;
            const expandBtn = document.createElement("a");
            expandBtn.href = "#";
            expandBtn.className = "mean-expand";
            expandBtn.textContent = "+";
            parent.appendChild(expandBtn);
            ul.style.display = "none";

            expandBtn.addEventListener("click", function (e) {
                e.preventDefault();
                const isOpen = ul.style.display === "block";
                ul.style.display = isOpen ? "none" : "block";
                expandBtn.textContent = isOpen ? "+" : "-";
            });
        });
    }

    function destroyMeanMenu() {
        if (!meanContainer) return;
        document.body.classList.remove("mean-container");
        nav.classList.remove("mean-remove");
        meanContainer.remove();
        meanContainer = null;
        menuVisible = false;
    }

    // init
    function checkWidth() {
        if (window.innerWidth <= screenWidth) {
            createMeanMenu();
        } else {
            destroyMeanMenu();
        }
    }

    window.addEventListener("resize", checkWidth);
    checkWidth();
});
