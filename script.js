const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % totalImages;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
