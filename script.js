// body element
const body = document.body;
// all slides as node list
const slides = document.querySelectorAll(".slide");
// left arrow button
const leftBtn = document.getElementById("left");
// right arrow button
const rightBtn = document.getElementById("right");

let activeSlide = 0;

// listen for click on right arrow
rightBtn.addEventListener("click", () => {
  // increase activeSlide value by 1
  activeSlide++;
  // if activeSlide is greater than length of slides (-1). (If it is on the last slide...)
  if (activeSlide > slides.length - 1) {
    // set activeSlide back to 0
    activeSlide = 0;
  }
  // call functions to change body and slider images
  setBgToBody();
  setActiveSlide();
});

// listen for click on left arrow
leftBtn.addEventListener("click", () => {
    // decrease activeSlide value by 1
    activeSlide--;
    // if activeSlide is less than 0. (If it is on first slide...)
    if (activeSlide < 0) {
      // set activeSlide to last slide
      activeSlide = slides.length - 1;
    }
    // call functions to change body and slider images
    setBgToBody();
    setActiveSlide();
  });

// call funtion on page load
setBgToBody();

// set background image to body
function setBgToBody() {
  // add background-image style to body
  // get activeSlide value of slides and use the background image style as value
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// set activeSlide
function setActiveSlide() {
  // iterate through slides
  slides.forEach(slide => {
    // remove active class from all slides
    slide.classList.remove("active");
  });
  // add active class to activeSlide
  slides[activeSlide].classList.add("active");
}
