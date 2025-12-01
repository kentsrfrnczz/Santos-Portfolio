let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  // Update current index
  currentIndex += direction;

  // Loop back to the start or end if we're at the limits
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Move the carousel images
  const carousel = document.querySelector('.carousel-images');
  const offset = -currentIndex * 100;  // Shift the images to show the current one
  carousel.style.transform = `translateX(${offset}%)`;
}
