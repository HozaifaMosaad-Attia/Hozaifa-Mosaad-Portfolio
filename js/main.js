// ====== AOS Init ======
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// ====== Navbar Scroll ======
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ====== Hamburger ======
const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ====== Close Menu on Link Click ======
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ====== Active Nav Link on Scroll ======
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav__link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
