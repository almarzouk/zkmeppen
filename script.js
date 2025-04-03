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

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tap");
  const sectionSatzung = document.getElementById("satzung");
  const sectionVorstand = document.getElementById("vorstand");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      if (target === "satzung") {
        sectionSatzung.style.display = "block";
        sectionVorstand.style.display = "none";
      } else if (target === "vorstand") {
        sectionSatzung.style.display = "none";
        sectionVorstand.style.display = "block";
      }
    });
  });

  // الوضع الافتراضي
  sectionSatzung.style.display = "block";
  sectionVorstand.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav__link");
  const currentUrl = window.location.pathname;

  links.forEach((link) => {
    const linkUrl = new URL(link.href);
    const linkPath = linkUrl.pathname;

    if (currentUrl.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });
});
