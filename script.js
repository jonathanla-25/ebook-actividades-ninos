window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
});
