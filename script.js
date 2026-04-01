window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    // CAMBIO DE OPACIDAD DEL HERO
    const overlay = document.querySelector('.overlay');
    overlay.style.backdropFilter = `blur(${6 + scroll * 0.02}px)`;

    // ANIMACIONES
    document.querySelectorAll('.reveal').forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });

});
