const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 5000);
