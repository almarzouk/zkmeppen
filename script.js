const burger = document.getElementById("burger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", () => {
  const isActive = navList.classList.toggle("active");
  burger.classList.toggle("active");

  document.body.classList.toggle("no-scroll", isActive);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    burger.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// Header Animation
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
