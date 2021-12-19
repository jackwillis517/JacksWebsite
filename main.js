const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobileMenu");
const helloWorldContainer = document.querySelector(".helloWorld-subcontainer");
const aboutContainer = document.querySelector(".about-container");
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    mobileMenu.classList.add("display-nav");
    helloWorldContainer.classList.add("hide");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    mobileMenu.classList.remove("display-nav");
    helloWorldContainer.classList.remove("hide");
    menuOpen = false;
  }
});

const tabs = document.querySelectorAll(".navmenu ul li a");
tabs.forEach((item) => {
  item.addEventListener("click", () => {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});


