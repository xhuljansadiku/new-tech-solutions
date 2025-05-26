document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    // Bootstrap tooltip for the button
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (goToTopBtn) {
      var tooltip = new bootstrap.Tooltip(goToTopBtn);
    }

    // Scroll to top button
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        goToTopBtn.classList.remove('d-none');
        goToTopBtn.classList.add('show');
      } else {
        goToTopBtn.classList.remove('show');
        goToTopBtn.classList.add('d-none');
      }
    });

    goToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Rotate project images on click
    document.querySelectorAll('.project-img').forEach(img => {
      img.addEventListener('click', () => {
        img.style.transition = 'transform 0.4s cubic-bezier(.4,2,.4,1)';
        img.style.transform = 'rotate(360deg)';
        setTimeout(() => { img.style.transform = 'rotate(0deg)'; }, 400);
      });
    });
  });