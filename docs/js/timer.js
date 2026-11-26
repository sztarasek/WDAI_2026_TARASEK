function updateTime() {
  const now = new Date();
  const someDay = new Date(2030, 9, 5);
  let time = someDay - now;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  time %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(time / (1000 * 60 * 60));
  time %= 1000 * 60 * 60;

  const minutes = Math.floor(time / (1000 * 60));
  time %= 1000 * 60;

  const seconds = Math.floor(time / 1000);

  const timeElement = document.getElementById("timer");

  timeElement.textContent = `${days} dni ${hours} godz. ${minutes} min. ${seconds} sek.`;
}

document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000);
});