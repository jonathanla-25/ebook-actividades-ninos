// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Form → WhatsApp
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const nombre = this.querySelector("input").value;

  const mensaje = `Hola, soy ${nombre} y quiero el ebook educativo 📚`;

  const url = `https://wa.me/593986718265?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});
