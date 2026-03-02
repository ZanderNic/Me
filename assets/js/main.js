// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal-on-scroll
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      obs.unobserve(e.target);
    }
  }
}, { threshold: 0.12 });

els.forEach(el => obs.observe(el));

// Minimal active nav highlight
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const navObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = "#" + entry.target.id;
    navLinks.forEach(a => {
      const on = a.getAttribute("href") === id;
      a.style.color = on ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.68)";
      a.style.background = on ? "rgba(255,255,255,.08)" : "transparent";
    });
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

sections.forEach(s => navObs.observe(s));