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