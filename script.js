/* ===== À PERSONNALISER ===== */
const CONFIG = {
  // Numéro WhatsApp au format international, sans + ni espaces (ex. : 33612345678)
  whatsappNumber: "22871497933",
  // Message qui s'affichera déjà écrit dans WhatsApp
  whatsappMessage: "Bonjour, je souhaite demander un devis."
};
/* =========================== */

// Lien WhatsApp
const wa = document.getElementById("wa-link");
if (wa) {
  wa.href = "https://wa.me/" + CONFIG.whatsappNumber +
    "?text=" + encodeURIComponent(CONFIG.whatsappMessage);
}

// Menu mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
function setMenu(open) {
  menu.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
}
btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { setMenu(false); btn.focus(); }
});

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();
