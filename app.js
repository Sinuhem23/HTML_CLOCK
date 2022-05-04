setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRation = currentDate.getSeconds() / 60;
  const minutesRation = (secondsRation + currentDate.getMinutes()) / 60;
  const hoursRation = (minutesRation + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRation);
  setRotation(minuteHand, minutesRation);
  setRotation(hourHand, hoursRation);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}
const checkTimeBtn = (document.getElementById('myBtn').onclick = displayDate);

function displayDate() {
  // Set date mm/dd/yyyy
  const actualDate = (document.getElementById('currentDate').innerHTML =
    new Date().toLocaleDateString());
  setTimeout(clearDate, 3000);

  return actualDate;
}
function clearDate() {
  const clear = (document.getElementById('currentDate').innerHTML = '');
  return clear;
}

// To avoid reseting to 0deg at reload, call once reloading
setClock();
