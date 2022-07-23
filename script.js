const daysAll = document.getElementById("days");
const hoursAll = document.getElementById("hours");
const minutesAll = document.getElementById("minutes");
const secondsAll = document.getElementById("seconds");

const christmas = "25 December 2022";

function countdown() {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const everySecond = (christmasDate - currentDate) / 1000;

  const days = Math.floor(everySecond / 3600 / 24);
  const hours = Math.floor(everySecond / 3600) % 24;
  const minutes = Math.floor(everySecond / 60) % 60;
  const seconds = Math.floor(everySecond) % 60;

  daysAll.innerHTML = formatTime(days);
  hoursAll.innerHTML = formatTime(hours);
  minutesAll.innerHTML = formatTime(minutes);
  secondsAll.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

