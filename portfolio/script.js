const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));

const experiencePreview = document.querySelector(".experience-preview");

if (experiencePreview) {
  const screenshot = experiencePreview.querySelector("img");
  const toggleButton = experiencePreview.querySelector(".experience-toggle");

  if (screenshot && toggleButton) {
    toggleButton.addEventListener("click", () => {
      screenshot.hidden = !screenshot.hidden;
      toggleButton.setAttribute("aria-expanded", String(!screenshot.hidden));
      toggleButton.textContent = screenshot.hidden
        ? "View Project Screenshot"
        : "Hide Project Screenshot";
    });
  }
}
