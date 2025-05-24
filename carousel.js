const track = document.getElementById('card-track');
const cards = track.children;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const cardsPerView = 3;

function updateCarousel() {
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 32; // ancho de tarjeta + gap
  const maxIndex = totalCards - cardsPerView;

  // Clamping infinito
  if (currentIndex > maxIndex) {
    currentIndex = 0; // Reinicia al principio
  } else if (currentIndex < 0) {
    currentIndex = maxIndex; // Va al final
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex += 1;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex -= 1;
  updateCarousel();
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
