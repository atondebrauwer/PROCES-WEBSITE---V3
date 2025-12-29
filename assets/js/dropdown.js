document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".dropdown-toggle");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (toggle) {
    e.preventDefault();
    const parent = toggle.closest(".dropdown");

    dropdowns.forEach(d => {
      if (d !== parent) d.classList.remove("open");
    });

    parent.classList.toggle("open");
    toggle.setAttribute("aria-expanded", parent.classList.contains("open"));
    return;
  }

  dropdowns.forEach(d => d.classList.remove("open"));
});



document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typewriter");
  if (!el) return;

  const fullText = el.getAttribute("data-text") || "";
  const speed = 90;      // ms per letter
  const startDelay = 300;

  el.textContent = "";   // start leeg

  let i = 0;

  setTimeout(() => {
    const tick = () => {
      el.textContent = fullText.slice(0, i + 1);
      i++;

      if (i < fullText.length) {
        setTimeout(tick, speed);
      }
    };

    tick();
  }, startDelay);
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });
});

