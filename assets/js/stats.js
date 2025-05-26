document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.stat-number').forEach(function (el) {
      let target = +el.getAttribute('data-count');
      let count = 0, increment = Math.ceil(target/70);
      let interval = setInterval(() => {
        count += increment;
        if(count >= target) { el.textContent = target; clearInterval(interval);}
        else { el.textContent = count; }
      }, 20);
    });
  });