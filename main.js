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

// const myForm = document.getElementById("my-form");
    
// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//   }).then(response => {
//     status.innerHTML = "Thanks for your submission!";
//     status.classList.add('success')
//     form.reset()
//   }).catch(error => {
//     status.innerHTML = "Oops! There was a problem submitting your form"
//     status.classList.add('error')
//   });
// }
// myForm.addEventListener("submit", handleSubmit)


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


