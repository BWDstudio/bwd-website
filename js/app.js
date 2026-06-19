history.scrollRestoration = "manual";
// =========================
// NAVBAR SCROLL
// =========================

const navbar = document.querySelector(".navbar");

if (navbar) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

    },
    { passive: true }
  );

}

// =========================
// MOBILE MENU
// =========================

const mobileButton = document.querySelector(".mobile-menu-btn");

const navMenu = document.querySelector(".nav-menu");

if (mobileButton && navMenu) {

  mobileButton.addEventListener(
    "click",
    () => {

      navMenu.classList.toggle("active");

      mobileButton.classList.toggle("active");

      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

    }
  );

}

// =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll(".nav-link");

if (navMenu && mobileButton) {

  navLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navMenu.classList.remove("active");

        mobileButton.classList.remove("active");

        document.body.style.overflow = "";

      }
    );

  });

}

// =========================
// ESC CLOSE MOBILE MENU
// =========================

document.addEventListener(
  "keydown",
  (e) => {

    if (
      e.key === "Escape" &&
      navMenu &&
      mobileButton &&
      navMenu.classList.contains("active")
    ) {

      navMenu.classList.remove("active");

      mobileButton.classList.remove("active");

      document.body.style.overflow = "";

    }

  }
);

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "click_phone");
    }
  });
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "click_email");
    }
  });
});

document
  .querySelectorAll('a[href*="linkedin.com"]')
  .forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof gtag !== "undefined") {
        gtag("event", "click_linkedin");
      }
    });
  });

function fixOrphans() {
  document
    .querySelectorAll("h1, h2, h3, h4, h5, h6, p, li")
    .forEach((el) => {
      el.innerHTML = el.innerHTML.replace(
        /(\s)(a|i|o|u|w|z|na|do|od|po|za|we|ze|ku|dla)(\s+)/gi,
        "$1$2&nbsp;"
      );
    });
}

document.addEventListener("DOMContentLoaded", fixOrphans);