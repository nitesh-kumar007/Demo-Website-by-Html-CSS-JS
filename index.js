// let slides = document.querySelectorAll(".slide");
// let btns = document.querySelectorAll(".btn");

// let currentSlide = 1;

// //For Normal navigation image Slider

// let manualNav = function (manual) {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");

//     btns.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//   });

//   slides[manual].classList.add("active");
//   btns[manual].classList.add("active");
// };

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     manualNav(i);
//     currentSlide = i;
//   });
// });

// //For Auto Navigation
// let repeat = function (activeClass) {
//   let active = document.getElementsByClassName("active");
//   let i = 1;

//   let repeater = () => {
//     setTimeout(function () {
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove("active");
//       });

//       slides[i].classList.add("active");
//       btns[i].classList.add("active");
//       i++;

//       if (slides.length == i) {
//         i = 0;
//       }
//       if (i >= slides.length) {
//         return;
//       }
//       repeater();
//     }, 4000);
//   };
//   repeater();
// };
// repeat();

// const toggle = () => {
//   document.getElementById("nav").classList.toggle("navactive");
// };

// //Code For Contact Form Submission
// document.getElementById("submit").addEventListener("click", function () {
//   // Get all input elements within the form
//   const inputs = document.querySelectorAll("#forms .inputs");

//   // Loop through each input and clear its value
//   inputs.forEach(function (input) {
//     input.value = "";
//   });
// });

// Select all slides and buttons
const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");

let currentSlide = 0; // Initialize current slide

// Function for manual navigation
const manualNav = (index) => {
  slides.forEach((slide) => slide.classList.remove("active"));
  btns.forEach((btn) => btn.classList.remove("active"));

  slides[index].classList.add("active");
  btns[index].classList.add("active");
  currentSlide = index;
};

// Add click event listener to all buttons for manual navigation
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    manualNav(index);
  });
});

// Function for automatic navigation
const autoNav = () => {
  const activeSlide = document.querySelector(".slide.active");
  let index = Array.from(slides).indexOf(activeSlide); // Get the current active slide index

  // Remove active class from current slide and button
  slides[index].classList.remove("active");
  btns[index].classList.remove("active");

  // Update the index for the next slide
  index = (index + 1) % slides.length; // Loop back to first slide if last slide is reached

  // Set the next slide and button as active
  slides[index].classList.add("active");
  btns[index].classList.add("active");
};

// Start auto navigation every 4 seconds
let slideInterval = setInterval(autoNav, 4000);

// Toggle navigation bar for mobile view
const toggle = () => {
  document.getElementById("nav").classList.toggle("navactive");
};

// Code for contact form submission
document.getElementById("submit").addEventListener("click", () => {
  const inputs = document.querySelectorAll("#forms .inputs");

  // Loop through each input field and clear its value
  inputs.forEach((input) => {
    input.value = "";
  });
});

// Optional: Pause the slider when manual navigation is used (optional but improves user experience)
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    clearInterval(slideInterval); // Stop auto navigation when manual navigation is used
    manualNav(index);
    slideInterval = setInterval(autoNav, 4000); // Restart auto navigation after interaction
  });
});
