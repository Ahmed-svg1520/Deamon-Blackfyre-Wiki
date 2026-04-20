let expanded = false;

function toggleText() {
  const t1 = document.getElementById("text1");
  const t2 = document.getElementById("text2");
  const btn = document.getElementById("readBtn");

  if (!expanded) {
    // text1 يروح لليمين
    t1.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    t1.style.transform = "translateX(150%)";
    t1.style.opacity = "0";

    setTimeout(() => {
      t1.style.display = "none";

      // text2 يجي من اليسار
      t2.style.display = "block";
      t2.style.transform = "translateX(-150%)";
      t2.style.opacity = "0";
      t2.style.transition = "none";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t2.style.transition = "transform 0.4s ease, opacity 0.4s ease";
          t2.style.transform = "translateX(0)";
          t2.style.opacity = "1";
        });
      });

      btn.innerText = "go back";
      expanded = true;
    }, 400);

  } else {
    // text2 يروح لليمين
    t2.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    t2.style.transform = "translateX(150%)";
    t2.style.opacity = "0";

    setTimeout(() => {
      t2.style.display = "none";

      // text1 يجي من اليسار
      t1.style.display = "block";
      t1.style.transform = "translateX(-150%)";
      t1.style.opacity = "0";
      t1.style.transition = "none";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t1.style.transition = "transform 0.8s ease, opacity 0.8s ease";
          t1.style.transform = "translateX(0)";
          t1.style.opacity = "1";
        });
      });

      btn.innerText = "Read More";
      expanded = false;
    }, 400);
  }
}
let galleryOpen = false;

function toggleGallery() {
    galleryOpen = !galleryOpen;
    const cards = document.querySelectorAll('.g-card');

    if (galleryOpen) {
        cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 150);
        });
    } else {
        cards.forEach(card => card.classList.remove('visible'));
    }
}
tsParticles.load("tsparticles", {
  background: {
    color: "transparent"
  },
  particles: {
    number: {
      value: 120
    },
    color: {
      value: ["#ff4500", "#ff0000", "#ffaa00"] // ألوان النار
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: true
    },
    size: {
      value: { min: 1, max: 3 }
    },
    move: {
      enable: true,
      speed: 3,
      direction: "top", // تطلع لفوك مثل الشرار
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    },
    life: {
      duration: {
        sync: false,
        value: 3
      },
      count: 0
    }
  }
});
