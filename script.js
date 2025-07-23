 
// script.js
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const indicatorsContainer = document.getElementById('indicators');

    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    let interval = null;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();
    }

    function createIndicators() {
      images.forEach((_, index) => {
        const dot = document.createElement('button');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
        indicatorsContainer.appendChild(dot);
      });
    }

    function updateIndicators() {
      const dots = indicatorsContainer.querySelectorAll('button');
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    }

    function playCarousel() {
      if (!interval) {
        interval = setInterval(showNext, 3000);
      }
    }

    function pauseCarousel() {
      clearInterval(interval);
      interval = null;
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    playBtn.addEventListener('click', playCarousel);
    pauseBtn.addEventListener('click', pauseCarousel);

    // Swipe support for mobile
    let startX = 0;
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) showNext();
      else if (endX - startX > 50) showPrev();
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    });

    // Initialize
    createIndicators();
    updateCarousel();
 