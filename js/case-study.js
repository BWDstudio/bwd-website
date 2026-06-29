const metrics = document.querySelectorAll(".metric-card");

if (metrics.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const card = entry.target;
      const target = Number(card.dataset.score);

      const ring = card.querySelector(".metric-ring");
      const value = card.querySelector(".metric-ring span");

      let current = 0;

      const interval = setInterval(() => {
        current++;

        ring.style.setProperty(
          "--score-angle",
          `${current * 3.6}deg`
        );

        value.textContent = current;

        if (current >= target) {
          clearInterval(interval);
        }
      }, 15);

      observer.unobserve(card);
    });
  });

  metrics.forEach((metric) => observer.observe(metric));
}