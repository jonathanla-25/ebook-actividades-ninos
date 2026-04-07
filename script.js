// CONTADOR
let time = 900;

const countdown = document.getElementById("countdown");

setInterval(() => {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  countdown.textContent =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;

  if(time > 0) time--;
}, 1000);
