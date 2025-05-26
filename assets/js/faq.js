
document.addEventListener("DOMContentLoaded", function () {
  // Toggle + and – icons on accordion open/close
  document.querySelectorAll('.modern-faq .accordion-button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setTimeout(function() {
        document.querySelectorAll('.modern-faq .accordion-button').forEach(function(otherBtn) {
          const icon = otherBtn.querySelector('.faq-icon');
          if (icon) icon.textContent = otherBtn.classList.contains('collapsed') ? '+' : '–';
        });
      }, 200); // slight delay for animation
    });
  });
});

