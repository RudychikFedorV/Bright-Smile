const startTimers = () => {
  function startTimer(duration, display) {
    let timer = duration,
      hours,
      minutes,
      seconds;
    setInterval(function () {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
        timer = 0;
      }
    }, 1000);
  }
  window.onload = function () {
    const duration = 5 * 3600 + 4 * 60 + 2;
    const display = document.querySelector("#countdown");
    if (display !== null) {
      startTimer(duration, display);
    }
  };
};

export default startTimers;
