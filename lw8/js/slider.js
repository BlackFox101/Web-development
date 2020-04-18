// Инициализация
var slides = document.querySelectorAll('.film'); //Берем все слайды в массив
console.log(slides);
for  (let i = 0; i < slides.length; i++) { //Удаляем слайды с экрана
  slides[i].remove();
}
document.getElementById('slider_left').onclick = slideLeft; // Клик на кнопку влево
document.getElementById('slider_right').onclick = slideRight; // Клик на правую кнопку
var step = 0; // Номер слайда в массиве тоесть 0 это 1 слайд
var slide;
var offsetGlobal = 0; //сдвиг
startSlides();
//-------------------------------------------------------------

function startSlides() {
  for(let i = 0; i < 4; i++) {
    slide = step;
    draw();
    step++;
    offsetGlobal++;
  }
}

function slideRight() {
  let offsetLocal = 0;
  let slidesActive = document.querySelectorAll('.film'); //Берем все активные слайды
  for(let i = 0; i < slidesActive.length; i++) {
    slidesActive[i].style.left = offsetLocal * 305 + 305 + 'px';
    offsetLocal++;
  }
  slidesActive[3].remove(); // Удаляем лишний слайд из DOM
  slidesActive = document.querySelectorAll('.film'); //Берем все активные слайды
  for  (let i = 0; i < slidesActive.length; i++) { //Удаляем слайды с экрана
    slidesActive[i].remove();
  }
  offsetGlobal = 0;
  rightDraw(); // Записываем слайд в начало
  for(let i = 0; i < slidesActive.length; i++) { // Записываем слайды далее
    document.querySelector('#films').appendChild(slidesActive[i]);
  }
}

function rightDraw() {
  if (step == 0) {slide = 5}
  if (step == 1) {slide = 6}
  if (step == 2) {slide = 7}
  if (step == 3) {slide = 8}
  if (step == 4) {slide = 9}
  if (step == 5) {slide = 0}
  if (step == 6) {slide = 1}
  if (step == 7) {slide = 2}
  if (step == 8) {slide = 3}
  if (step == 9) {slide = 4}
  draw();
  step--;
  if (step == -1) {
    step = 9;
  }
}

function slideLeft() {
  let offsetLocal = 0;
  let slidesActive = document.querySelectorAll('.film'); //Берем все активные слайды
  for(let i = 0; i < slidesActive.length; i++) {
    slidesActive[i].style.left = offsetLocal * 305 - 305 + 'px';
    offsetLocal++;
  }
  slidesActive[0].remove();
  offsetGlobal = 3;
  leftDraw();
}

function leftDraw(){
  slide = step;
  draw();
  step++;
  if (step == 10) {
    step = 0;
  }
}

function draw() {
  slides[slide].style.left = offsetGlobal * 305 + 'px';
  document.querySelector('#films').appendChild(slides[slide]);
}