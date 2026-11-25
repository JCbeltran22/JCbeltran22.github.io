
// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// ======================================
// AVID FUELS PROJECT SCREENSHOT TOGGLE
// ======================================

document.querySelectorAll(".experience-preview").forEach((preview) => {

    const screenshot = preview.querySelector("#avid-screenshot");
    const toggleButton = preview.querySelector(".experience-toggle");

    if (!screenshot || !toggleButton) return;

    toggleButton.addEventListener("click", function () {

        // Toggle screenshot visibility
        screenshot.hidden = !screenshot.hidden;

        // Update button text
        toggleButton.textContent = screenshot.hidden
            ? "View Project Screenshot"
            : "Hide Project Screenshot";

        // Update accessibility attribute
        toggleButton.setAttribute(
            "aria-expanded",
            String(!screenshot.hidden)
        );

    });

});
