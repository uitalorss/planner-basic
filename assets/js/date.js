(() => {
  let infoRealTime = document.querySelector('.header__info-time');
  let infoHour = document.createElement("h3");
  let infoDate = document.createElement("p");

  const showRealTime = setInterval (() => {
    let currentDateAndHour = new Date();
    const monthsOfTheYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const zeroFill = n => {
      return ('0' + n).slice(-2);
    }

    infoHour.classList.add("info-time--hour");
    infoDate.classList.add("info-time--date");

    infoHour.innerHTML = `${zeroFill(currentDateAndHour.getHours())}:${zeroFill(currentDateAndHour.getMinutes())}`;
    infoDate.innerHTML = `${zeroFill(currentDateAndHour.getDate())} de  ${monthsOfTheYear[currentDateAndHour.getMonth()]} de ${currentDateAndHour.getFullYear()}`

    infoRealTime.appendChild(infoHour);
    infoRealTime.appendChild(infoDate);
  }, 1000)
  showRealTime;
})()