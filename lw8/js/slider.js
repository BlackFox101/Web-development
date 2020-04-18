sliderKarusel();
function sliderKarusel() {
  //Инициализация
  document.getElementById('slider_left').onclick = slideLeft; // Клик на кнопку влево
  document.getElementById('slider_right').onclick = slideRight; // Клик на правую кнопку
  let slides = document.querySelectorAll('.film'); //Берем все слайды в массив
  const numberLastSlide = slides.length - 1; // Номер последнего
  for  (let i = 0; i < slides.length; i++) { //Удаляем слайды с экрана
    slides[i].remove();
  }
  let step = 0; // Номер шага
  let slide; // Номер слайда
  let offsetGlobal = 0; // Позиция слайда
  const widthSlide = 305;
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
      slidesActive[i].style.left = offsetLocal * widthSlide + widthSlide + 'px';
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
    if (step < 5) {
      slide = step + 5 + slides.length - 10; //
    } else {
      slide = step - 5;
    }
    draw();
    step--;
    if (step == -1) {
      step = numberLastSlide;
    }
  }

  function slideLeft() {
    let offsetLocal = 0;
    let slidesActive = document.querySelectorAll('.film'); //Берем все активные слайды
    for(let i = 0; i < slidesActive.length; i++) {
      slidesActive[i].style.left = offsetLocal * widthSlide - widthSlide + 'px';
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
    if (step == slides.length) {
      step = 0;
    }
  }

  function draw() {
    slides[slide].style.left = offsetGlobal * widthSlide + 'px';
    document.querySelector('#films').appendChild(slides[slide]);
  }
}
