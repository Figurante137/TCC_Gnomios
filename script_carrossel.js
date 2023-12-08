let currentSlide = 0;
const slideInterval = 4000; // Intervalo em milissegundos (3 segundos)
let slideTimer;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  
  // Verifica se o índice está dentro dos limites
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // Oculta todos os slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Exibe o slide atual
  slides[currentSlide].style.display = 'block';
}

function startSlideTimer() {
  // Inicia o timer para avançar para o próximo slide automaticamente
  slideTimer = setInterval(() => {
    nextSlide();
  }, slideInterval);
}

function resetSlideTimer() {
  // Limpa o timer atual e reinicia
  clearInterval(slideTimer);
  startSlideTimer();
}

function nextSlide() {
  showSlide(currentSlide + 1);
  resetSlideTimer();
}

function prevSlide() {
  showSlide(currentSlide - 1);
  resetSlideTimer();
}

// Exibe o primeiro slide ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startSlideTimer();

  // Adiciona o manipulador de eventos mouseenter e mouseleave para resetar o timer
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    resetSlideTimer();
  });
});