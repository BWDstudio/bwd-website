window.addEventListener("load", () => {

  const el =
    document.getElementById("rotating-text");

  if (!el) return;

  const phrases = [
    "przyciągają klientów.",
    "budują zaufanie.",
    "zwiększają widoczność.",
    "wspierają rozwój firmy.",
    "pracują dla Ciebie."
  ];

  let current = 0;

  setInterval(() => {

    el.classList.add("fade-out");

    setTimeout(() => {

      el.textContent =
        phrases[current];

      current =
        (current + 1) % phrases.length;

      el.classList.remove("fade-out");

    }, 300);

  }, 4000);

});