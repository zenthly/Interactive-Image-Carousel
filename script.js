
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let currentIndex = 0;

function getImageWidth() {
  return images[0].clientWidth;
}

function updateSlide() {
  track.style.transform = `translateX(-${currentIndex * getImageWidth()}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}, 2000);

window.addEventListener('resize', updateSlide);

updateSlide();
