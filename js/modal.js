// =========================
// MODAL ELEMENTS
// =========================

const modal =
  document.querySelector(".portfolio-modal");

const modalImage =
  document.querySelector(".modal-image");

const modalClose =
  document.querySelector(".modal-close");

const projectCards =
  document.querySelectorAll(".project-card");

  if (
    modal &&
    modalImage &&
    modalClose
  ) {

// =========================
// OPEN MODAL
// =========================

projectCards.forEach((card) => {

  card.addEventListener("click", () => {

    const image =
  card.dataset.full ||
  card.querySelector("img").src;

modalImage.src = image;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});

// =========================
// CLOSE MODAL FUNCTION
// =========================

const closeModal = () => {

  modal.classList.remove("active");

  document.body.style.overflow = "";

};

// =========================
// CLOSE BUTTON
// =========================

modalClose.addEventListener(
  "click",
  closeModal
);

// =========================
// CLICK OUTSIDE
// =========================

modal.addEventListener("click", (e) => {

  if (e.target === modal) {

    closeModal();

  }

});

// =========================
// ESC KEY
// =========================

window.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {

    closeModal();

  }

});}