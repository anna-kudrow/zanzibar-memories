const slides = document.querySelectorAll(".slider-item");
const controlls = document.querySelectorAll(".controlls");
let slideIndex = 0;

function show(index) {
  slides[slideIndex].classList.remove("active");
  slides[index].classList.add("active");
  slideIndex = index;
}

controlls.forEach((e) => {
  e.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("prev")) {
      let index = slideIndex - 1;

      if (index < 0) {
        index = slides.length - 1;
      }

      show(index);
    } else if (evt.target.classList.contains("next")) {
      let index = slideIndex + 1;
      if (index >= slides.length) {
        index = 0;
      }
      show(index);
    }
  });
});

show(slideIndex);
