// Scroll suave
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    alert("Aquí conectas tu link de pago (Gumroad)");
  });
});
