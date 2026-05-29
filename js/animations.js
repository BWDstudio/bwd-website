const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const floatingCTA =
    document.querySelector(
      ".floating-cta"
    );

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
      `${index * 0.02}s`;

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

// =========================
// MAGNETIC BUTTONS
// =========================

const magneticButtons =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary"
  );

if (!prefersReducedMotion) {

  magneticButtons.forEach((button) => {

    button.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          button.getBoundingClientRect();

        const x =
          e.clientX - rect.left - rect.width / 2;

        const y =
          e.clientY - rect.top - rect.height / 2;

        button.style.transform =
          `translate(${x * 0.15}px, ${y * 0.25}px)`;

      }
    );

    button.addEventListener(
      "mouseleave",
      () => {

        button.style.transform =
          "translate(0px, 0px)";

      }
    );

  });

}

// =========================
// FLOATING CTA FOLLOW
// =========================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    if (
      !floatingCTA ||
      window.innerWidth > 992
    ) return;

    const baseY =
      window.innerHeight * 0.65;

    let currentY = baseY;
    let targetY = baseY;

    let scrollOffset = 0;
    let lastScrollY = window.scrollY;

    // SCROLL REACTION

    window.addEventListener(
      "scroll",
      () => {

        const currentScroll =
          window.scrollY;

        const delta =
          currentScroll - lastScrollY;

        lastScrollY =
          currentScroll;

        scrollOffset -=
          delta * 10;

      },
      { passive: true }
    );

    // ANIMATION LOOP

    const animate = () => {

      // OFFSET WRACA DO 0

      scrollOffset *= 0.82;

      // TARGET = BASE + OFFSET

      targetY =
        baseY + scrollOffset;

      // SMOOTH FOLLOW

      currentY +=
        (targetY - currentY) * 0.26;

      floatingCTA.style.transform =
        `translateY(${currentY - baseY - 50}px)`;

      requestAnimationFrame(
        animate
      );

    };

    if (!prefersReducedMotion) {
      animate();
    }

  }
);

// =========================
// FLOATING CTA CLOSE
// =========================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const floatingCTA =
      document.querySelector(
        ".floating-cta"
      );

    const floatingClose =
      document.querySelector(
        ".floating-cta-close"
      );

    if (!floatingCTA) return;

    // NIE pokazuj na stronie kontaktu

    if (
      window.location.pathname.includes(
        "kontakt"
      )
    ) {

      floatingCTA.style.display =
        "none";

      return;
    }

    // Jeśli wcześniej zamknięto

    const isClosed =
      localStorage.getItem(
        "floatingCtaClosed"
      );

    if (isClosed === "true") {

      floatingCTA.style.display =
        "none";

      return;
    }

    // Zamknięcie CTA

    if (floatingClose) {

      floatingClose.addEventListener(
        "click",
        (e) => {

          e.preventDefault();

          e.stopPropagation();

          localStorage.setItem(
            "floatingCtaClosed",
            "true"
          );

          floatingCTA.style.display =
            "none";

        }
      );

    }

  }
);