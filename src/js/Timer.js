export const addTimer = () => {
  const day = document.querySelector(".day");
  const hrs = document.querySelector(".hrs");
  const min = document.querySelector(".min");
  const sec = document.querySelector(".sec");

  const currentYear = new Date().getFullYear();
  const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);
  const todayDate = Date.now();
  const gap = newYear - todayDate;
  const date = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hours = Math.floor((gap / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((gap / 1000 / 60) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  day.innerHTML = ` ${
    date < 10 ? "0" + date : date
  }<span class="timer__content">days</span>
 `;

  hrs.innerHTML = ` ${
    hours < 10 ? "0" + hours : hours
  } <span class="timer__content ">hours</span>`;
  min.innerHTML = `${
    minutes < 10 ? "0" + minutes : minutes
  } <span class="timer__content ">minutes</span>`;
  sec.innerHTML = ` ${
    seconds < 10 ? "0" + seconds : seconds
  } <span class="timer__content sec">seconds</span>`;
};
