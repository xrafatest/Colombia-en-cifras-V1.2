let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 10000); // Cambia de slide cada 10 segundos

function nextSlide() {
    moveSlides(1);
}

function moveSlides(n) {
    clearInterval(slideInterval); // Reinicia el intervalo al cambiar de slide manualmente
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + n + slideCount) % slideCount;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    slideInterval = setInterval(nextSlide, 10000); // Reinicia el ciclo automático
}
