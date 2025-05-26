document.addEventListener('DOMContentLoaded', function () {
    let testimonialCarousel = document.getElementById('testimonialsCarousel');
    if (testimonialCarousel) {
      let carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 6500,
        ride: 'carousel',
        pause: 'hover'
      });
    }
  });