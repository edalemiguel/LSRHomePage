// Functions for CTA buttons
function exploreFeatured() {
    alert("Redirecting to the Featured Work page...");
  }
  
  function submitArt() {
    alert("Redirecting to the Submit Art page...");
  }
  
  // Rotating Banner Carousel
  let currentImageIndex = 0;
  const images = [
    './images/EarlyBloom.jpg',
    './images/LanternInTheDark.jpg',
    './images/PoolBalls.jpg',
    './images/Envy.jpg'
  ];
  
  function rotateBanner() {
    const carousel = document.querySelector('.carousel-image');
    carousel.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Start the carousel rotation
  setInterval(rotateBanner, 3000); // Change every 3 seconds

  