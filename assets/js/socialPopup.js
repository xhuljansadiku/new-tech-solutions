document.addEventListener("DOMContentLoaded", function() {
    // 1. Social Proof Popup - Dinamike, vetëm 1 herë për vizitor
    const names = [
      "Gentjan Mara", "Anja Hoffman", "Sebastian Meier", "John Smith", "Emily Watson",
      "Max Müller", "Sarah Taylor", "Lucas Weber", "David Johnson", "Laura Schmidt"
    ];
    const actions = [
      "Just delivered a website for <b>{name}</b> {time} ago!",
      "Completed an e-commerce project for <b>{name}</b> {time} ago!",
      "Launched a new brand identity for <b>{name}</b> {time} ago!",
      "Deployed a mobile app for <b>{name}</b> {time} ago!",
      "Finished SEO optimization for <b>{name}</b> {time} ago!"
    ];
    const times = [
      "2 hours", "15 minutes", "1 day", "30 minutes", "45 minutes",
      "3 hours", "1 hour", "4 hours", "20 minutes", "50 minutes"
    ];
    function getRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    function randomProofMsg() {
      const name = getRandom(names);
      const action = getRandom(actions);
      const time = getRandom(times);
      return action.replace("{name}", name).replace("{time}", time);
    }
    const proofKey = 'mxtech_social_proof_shown';
    if (!localStorage.getItem(proofKey)) {
      setTimeout(() => {
        let popup = document.getElementById('social-proof-popup');
        let msg = document.getElementById('proof-message');
        if (popup && msg) {
          msg.innerHTML = randomProofMsg();
          popup.style.display = 'flex';
          setTimeout(() => { popup.style.display = 'none'; }, 7000);
          localStorage.setItem(proofKey, 'yes');
        }
      }, 2200);
    }
  
    // 2. AOS (Animate on Scroll) Init
    if (window.AOS) AOS.init();
  
    // 3. Scroll-to-top Button
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (goToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          goToTopBtn.classList.remove('d-none');
        } else {
          goToTopBtn.classList.add('d-none');
        }
      });
      goToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // 4. Rotate Project Images on Click
    document.querySelectorAll('.project-img').forEach(img => {
      img.addEventListener('click', () => {
        img.style.transition = 'transform 0.4s ease-in-out';
        img.style.transform = 'rotate(360deg)';
        setTimeout(() => { img.style.transform = 'rotate(0deg)'; }, 400);
      });
    });
  });