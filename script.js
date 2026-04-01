// CONTADOR
let tiempo = 3600;
const contador = document.getElementById("contador");

setInterval(() => {
    let m = Math.floor(tiempo / 60);
    let s = tiempo % 60;

    contador.innerHTML = `⏳ Oferta termina en: ${m}:${s < 10 ? '0' : ''}${s}`;
    if (tiempo > 0) tiempo--;
}, 1000);

// SCROLL ANIMATION
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
});
