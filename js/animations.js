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
    ".service-card, .process-step, .about-stat"
  );

if (!prefersReducedMotion) {

  staggerItems.forEach((item, index) => {

    item.style.transitionDelay =
      `${index * 0.1}s`;

  });

}

// =========================
// HERO PARALLAX MOUSE
// =========================

const hero =
  document.querySelector(".hero");

const desktopMockup =
  document.querySelector(".desktop-mockup");

if (
  !prefersReducedMotion &&
  hero &&
  desktopMockup
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

const themeIcon = document.getElementById("theme-icon");

function updateThemeIcon() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  console.log("Theme:", currentTheme);

  themeIcon.src =
    currentTheme === "dark"
      ? "./assets/icons/sun.svg"
      : "./assets/icons/moon.svg";

  console.log("Icon:", themeIcon.src);
}

themeToggle?.addEventListener("click", () => {

  const current =
    document.documentElement.getAttribute("data-theme");

  const next =
    current === "dark"
      ? "light"
      : "dark";

  console.log("Current:", current);
  console.log("Next:", next);

  document.documentElement.setAttribute(
    "data-theme",
    next
  );

  localStorage.setItem("theme", next);

  updateThemeIcon();
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
// =========================
// FAQ ACCORDION
// =========================

const faqItems =
  document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question =
    item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});

window.addEventListener("scroll", updateProgress);

updateProgress();

// =========================
// FLOATING STATS
// =========================

const statNumber =
  document.querySelector(".stat-number");

const statLabel =
  document.querySelector(".stat-label");

if (statNumber && statLabel) {

  const stats = [
    {
      number: "20+",
      label: "lat doświadczenia zawodowego"
    },
    {
      number: "10+",
      label: "lat pracy z klientem"
    },
    {
      number: "7+",
      label: "lat pracy w produkcji"
    },
    {
      number: "100+",
      label: "osób w zarządzanych zespołach"
    }
  ];

  let statIndex = 0;

  setInterval(() => {

    statNumber.classList.add("fade-out");
    statLabel.classList.add("fade-out");

    setTimeout(() => {

      statIndex =
        (statIndex + 1) % stats.length;

      statNumber.textContent =
        stats[statIndex].number;

      statLabel.textContent =
        stats[statIndex].label;

      statNumber.classList.remove("fade-out");
      statLabel.classList.remove("fade-out");

    }, 300);

  }, 5000);

}