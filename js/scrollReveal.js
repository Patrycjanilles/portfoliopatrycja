document.addEventListener("DOMContentLoaded", () => {
  const targets = Array.from(document.querySelectorAll("main img"));

  if (targets.length === 0) {
    return;
  }

  targets.forEach((el) => el.classList.add("scroll-reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    }
  );

  targets.forEach((el) => observer.observe(el));
});
