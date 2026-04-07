// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add("show");
  }
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));


// 🧸 Cursor blob más dinámico (más llamativo para niños)
const blob = document.getElementById("cursorBlob");
let mouseX = 0, mouseY = 0, bx = 0, by = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateBlob(){
  bx += (mouseX - bx) * 0.08;
  by += (mouseY - by) * 0.08;

  blob.style.left = bx + "px";
  blob.style.top = by + "px";

  requestAnimationFrame(animateBlob);
}
animateBlob();


// 🎯 EFECTO EXTRA EN BOTONES (más conversión)
const buttons = document.querySelectorAll(".btn.primary");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});


// Portfolio filter
const filterBtns = document.querySelectorAll(".fBtn");
const works = document.querySelectorAll(".work");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const f = btn.dataset.filter;

    works.forEach(w => {
      const cat = w.dataset.cat;
      const show = (f === "all" || f === cat);

      w.style.display = show ? "" : "none";

      // ✨ animación suave al aparecer
      if (show) {
        w.style.opacity = "0";
        setTimeout(() => {
          w.style.opacity = "1";
        }, 50);
      }
    });
  });
});


// 📲 Lead form → WhatsApp (más vendedor)
const leadForm = document.getElementById("leadForm");

leadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(leadForm);

  const nombre = (data.get("nombre") || "").toString().trim();
  const servicio = (data.get("servicio") || "").toString().trim();
  const mensaje = (data.get("mensaje") || "").toString().trim();

  // 💥 MENSAJE OPTIMIZADO PARA VENTA
  const text =
    `Hola, soy ${nombre} 👋\n` +
    `Estoy interesado en los ebooks educativos para niños 📚\n` +
    `Necesito: ${servicio}\n` +
    `Detalle: ${mensaje}\n\n` +
    `Quisiera más información por favor 😊`;

  const url = `https://wa.me/593986718265?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});


// 📱 Mobile menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const mLinks = document.querySelectorAll(".mLink");

burger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
});

mLinks.forEach(l => l.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}));


// ⏳ CONTADOR DE URGENCIA (CLAVE PARA VENDER)
let time = 15 * 60; // 15 minutos

const timerEl = document.createElement("div");
timerEl.style.position = "fixed";
timerEl.style.bottom = "80px";
timerEl.style.right = "18px";
timerEl.style.background = "linear-gradient(135deg,#fb7185,#facc15)";
timerEl.style.color = "#111";
timerEl.style.padding = "10px 14px";
timerEl.style.borderRadius = "12px";
timerEl.style.fontWeight = "900";
timerEl.style.zIndex = "999";
timerEl.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
document.body.appendChild(timerEl);

function updateTimer(){
  const min = Math.floor(time / 60);
  const sec = time % 60;

  timerEl.textContent = `⏳ Oferta termina en ${min}:${sec < 10 ? "0" : ""}${sec}`;

  if (time > 0) time--;
}

setInterval(updateTimer, 1000);
updateTimer();


// 🎯 SCROLL AUTOMÁTICO SUAVE A CTA (micro conversión)
setTimeout(() => {
  const cta = document.querySelector(".heroCtas");
  if (cta) {
    cta.style.transform = "scale(1.02)";
    setTimeout(() => {
      cta.style.transform = "";
    }, 800);
  }
}, 2500);
