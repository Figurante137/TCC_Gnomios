let currentSlide = 0;
const slideInterval = 3000; // Intervalo em milissegundos (3 segundos)
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

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Exibe o primeiro slide ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  // Configura a função nextSlide para ser chamada automaticamente a cada 3 segundos
  setInterval(() => {
    nextSlide();
  }, slideInterval);
});