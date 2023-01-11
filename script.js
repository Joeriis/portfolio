const temaer = document.querySelector("#temaer_container");
const cv = document.querySelector("#cv_container");

temaer.addEventListener("mousedown", klikRotate);
function klikRotate() {
  temaer.classList.add("rotate");
  temaer.addEventListener("animationend", Reset);
}
function Reset() {
  temaer.addEventListener("mousedown", klikRotate);
}

cv.addEventListener("mousedown", klikRotate2);
function klikRotate2() {
  cv.classList.add("rotate");
  cv.addEventListener("animationend", Reset);
}
function Reset() {
  cv.addEventListener("mousedown", klikRotate2);
}
