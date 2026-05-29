// =========================
// RESPONSIVE POSTER IMAGES
// =========================

const updatePosterImages = () => {

  const posterCards =
    document.querySelectorAll(".project-poster");

  const isMobile =
    window.matchMedia("(max-width: 1100px)").matches;

  posterCards.forEach((card) => {

  if (card.dataset.demo === "true") {
    return;
  }

    const image =
      card.querySelector("img");

    const fullImage =
      card.dataset.full;

    const mobilePoster =
      card.dataset.mobile;

    if (!image) return;

    image.src = isMobile
      ? fullImage
      : mobilePoster;

  });

};

// INITIAL LOAD

document.addEventListener(
  "DOMContentLoaded",
  updatePosterImages
);

// RESIZE

let resizeTimeout;

window.addEventListener(
  "resize",
  () => {

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(
      updatePosterImages,
      120
    );

  },
  { passive: true }
);