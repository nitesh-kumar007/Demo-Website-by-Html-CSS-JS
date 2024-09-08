let slides = document.querySelectorAll(".slide");
let btns = document.querySelectorAll(".btn");

let currentSlide = 1;

//For Normal navigation image Slider

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

//For Auto Navigation
let repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  let repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 4000);
  };
  repeater();
};
repeat();

const toggle = () => {
  document.getElementById("nav").classList.toggle("navactive");
};

//Code For Contact Form Submission
document.getElementById("submit").addEventListener("click", function () {
  // Get all input elements within the form
  const inputs = document.querySelectorAll("#forms .inputs");

  // Loop through each input and clear its value
  inputs.forEach(function (input) {
    input.value = "";
  });
});
