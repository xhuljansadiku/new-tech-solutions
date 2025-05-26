// DARK MODE TOGGLE SCRIPT
document.addEventListener("DOMContentLoaded", function() {
    const darkModeBtn = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;

    // Set state if user visited before
    if (localStorage.getItem('dark-mode') === 'on') {
      body.classList.add('dark-mode');
      darkModeIcon.textContent = '☀️';
    }

    darkModeBtn.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      if(body.classList.contains('dark-mode')) {
        darkModeIcon.textContent = '☀️';
        localStorage.setItem('dark-mode', 'on');
      } else {
        darkModeIcon.textContent = '🌙';
        localStorage.setItem('dark-mode', 'off');
      }
    });
  });