const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let loadValue = 0;
let loading = 100;

let int = setInterval(blurrring, 50);

function blurrring() {
  load++;
  loading--;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${loadValue}%`;
  loadText.style.opacity = scale(loading, 0, 100, 0, 1);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  loadValue++;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
