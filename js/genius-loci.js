const fila = document.querySelector(".carousel-container");
const slide = document.querySelector(".slide");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.querySelector("right-arrow");

/* EventListener for right arrow */

rightArrow.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
});

/* EventListener for Left arrow */

leftArrow.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
});
