const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const box = document.querySelector(".box");

startButton.addEventListener("click", () => {
  box.style.animationPlayState = "running";
});

stopButton.addEventListener("click", () => {
  box.style.animationPlayState = "paused";
});
