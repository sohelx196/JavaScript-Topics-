let progress = 0;
let bar = document.querySelector(".progress-bar");
let progressPercent = document.querySelector("#progressPercent");

let clearInt = setInterval(() => {
  if (progress >= 100) {
    clearInterval(clearInt);
  } else {
    progress++;
    bar.style.width = progress + "%";
  }

  progressPercent.textContent = `Progress : ${progress} %`;

  if (progress >= 100) {
    progressPercent.textContent = "Completed :)";
  }
}, 20);
