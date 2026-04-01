let tiempo = 3600;

const contador = document.getElementById("contador");

setInterval(() => {
    let h = Math.floor(tiempo / 3600);
    let m = Math.floor((tiempo % 3600) / 60);
    let s = tiempo % 60;

    contador.innerHTML = `${h}:${m}:${s < 10 ? '0' : ''}${s}`;

    if (tiempo > 0) tiempo--;
}, 1000);
