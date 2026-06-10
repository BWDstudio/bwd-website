const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

// =========================
// REVEAL ELEMENTS
// =========================

const revealElements = document.querySelectorAll(".reveal");

// =========================
// REVEAL FUNCTION
// =========================

const revealOnScroll = () => {

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("active");

    }

  });

};

// =========================
// INITIAL CHECK
// =========================

if (!prefersReducedMotion) {
  revealOnScroll();
}

// =========================
// SCROLL EVENT
// =========================

if (!prefersReducedMotion) {

  window.addEventListener(
    "scroll",
    revealOnScroll,
    { passive: true }
  );

}

// =========================
// STAGGER REVEAL
// =========================

const staggerItems =
  document.querySelectorAll(
    ".service-card, .project-card, .process-step"
  );

if (!prefersReducedMotion) {

  staggerItems.forEach((item, index) => {

    item.style.transitionDelay =
      `${index * 0.15}s`;

  });

}

// =========================
// HERO PARALLAX MOUSE
// =========================

const hero =
  document.querySelector(".hero");

const desktopMockup =
  document.querySelector(".desktop-mockup");

const mobileMockup =
  document.querySelector(".mobile-mockup");

if (
  !prefersReducedMotion &&
  hero &&
  desktopMockup &&
  mobileMockup
) {

  hero.addEventListener("mousemove", (e) => {

    const x =
      (window.innerWidth / 2 - e.clientX) / 40;

    const y =
      (window.innerHeight / 2 - e.clientY) / 40;

    desktopMockup.style.transform = `
      perspective(1400px)
      rotateY(${-8 - x}deg)
      rotateX(${2 + y}deg)
      translateY(-10px)
    `;

    mobileMockup.style.transform = `
      translateY(-10px)
      translateX(${-x}px)
    `;

  });

}

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute(
    "data-theme",
    savedTheme
  );
}

themeToggle?.addEventListener("click", () => {

  const current =
    document.documentElement.getAttribute("data-theme");

  const next =
    current === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute(
    "data-theme",
    next
  );

  localStorage.setItem("theme", next);

});

const progressBar = document.querySelector(".scroll-progress");

function updateProgress() {
  const scrollTop = window.scrollY;

  progressBar.style.opacity =
    scrollTop > 100 ? "1" : "0";

  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  if (docHeight <= 0) return;

  const progress =
    (scrollTop / docHeight) * 100;

  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgress);

updateProgress();