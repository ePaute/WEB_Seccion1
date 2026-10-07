/* =========================================
   CONFIGURACIÓN — EDITA AQUÍ
   ========================================= */
const CONFIG = {
  // Número de WhatsApp en formato internacional SIN +, espacios ni guiones
  whatsapp: "593994183558", // ← reemplaza con tu número
  // Ejemplo Ecuador: 593XXXXXXXXX  |  México: 52XXXXXXXXXX  |  España: 34XXXXXXXXX
};

/* =========================================
   BOTONES WHATSAPP (data-wa)
   ========================================= */
document.querySelectorAll("[data-wa]").forEach((el) => {
  const msg = el.getAttribute("data-wa") || "Hola Atlas Software, quiero cotizar.";
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  el.setAttribute("href", url);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

/* =========================================
   MENÚ MÓVIL
   ========================================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("active"));
  });
}

/* =========================================
   AÑO DINÁMICO EN FOOTER
   ========================================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* =========================================
   FADE-IN AL HACER SCROLL
   ========================================= */
const fadeEls = document.querySelectorAll(".card, .stack-card, .contact-card, .section-head, .about-text, .about-visual");
fadeEls.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

if ("IntersectionObserver" in window) {
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach((el) => fadeObserver.observe(el));
}