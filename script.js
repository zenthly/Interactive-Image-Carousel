const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const track = document.querySelector('.carousel-track');

let scrollAmount = 0;
const scrollStep = 310;

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});
