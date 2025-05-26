
document.addEventListener("DOMContentLoaded", function() {
    // Shfaq popup pas 7 sekondash nëse nuk është mbyllur më parë nga përdoruesi
    setTimeout(function() {
      if(!localStorage.getItem('newsletter_popup_closed')) {
        document.getElementById('newsletter-popup').classList.remove('d-none');
      }
    }, 7000);
  
    // Mbyll popup dhe ruaj në localStorage
    document.getElementById('close-newsletter').onclick = function() {
      document.getElementById('newsletter-popup').classList.add('d-none');
      localStorage.setItem('newsletter_popup_closed', 'yes');
    };
  
    // Opsionale: Hide popup on submit
    document.getElementById('newsletter-form').onsubmit = function() {
      document.getElementById('newsletter-popup').classList.add('d-none');
      localStorage.setItem('newsletter_popup_closed', 'yes');
      return true; // ose false nëse do AJAX
    };
  });