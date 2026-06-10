window.addEventListener("load", () => {

  const el =
    document.getElementById("rotating-text");

  if (!el) return;

  const phrases = [
    "wyróżniają firmy.",
    "przyciągają klientów.",
    "budują profesjonalny wizerunek.",
    "zwiększają liczbę zapytań.",
    "działają na każdym urządzeniu.",
    "pracują dla Twojej marki."
  ];

  let current = 0;

  setInterval(() => {

    el.classList.add("fade-out");

    setTimeout(() => {

      current =
        (current + 1) % phrases.length;

      el.textContent =
        phrases[current];

      el.classList.remove("fade-out");

    }, 300);

  }, 4000);

});