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