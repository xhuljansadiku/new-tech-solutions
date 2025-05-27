// === Newsletter Popup Logic ===
function shouldShowNewsletterPopup() {
  return !localStorage.getItem("newsletter_popup_closed") && 
         !localStorage.getItem("newsletter_subscribed");
}

function showNewsletterPopup() {
  document.getElementById('newsletter-popup').classList.remove('d-none');
}

function hideNewsletterPopup() {
  document.getElementById('newsletter-popup').classList.add('d-none');
}

window.addEventListener('DOMContentLoaded', function() {
  if (shouldShowNewsletterPopup()) {
    setTimeout(showNewsletterPopup, 1500); // Show after 1.5s
  } else {
    hideNewsletterPopup();
  }
});

document.getElementById('close-newsletter').addEventListener('click', function() {
  hideNewsletterPopup();
  localStorage.setItem("newsletter_popup_closed", "yes");
});

// === Inline Newsletter Form Handler ===
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var email = document.getElementById('newsletter-email').value.trim();
  if(!email) return;

  // Set the subscribe flag for popup logic
  localStorage.setItem("newsletter_subscribed", "yes");

  // Send to Google Apps Script (adjust as needed)
  var scriptURL = "https://script.google.com/macros/s/AKfycbxl_BGbfhJvNpJhTzMu6khhPa8yrYYzPvp4SNFDP1BwVpBqGpKnCYlCoBgirb4Z8Bzy-g/exec";
  fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "email=" + encodeURIComponent(email)
    })
    .then(function(response){
      document.getElementById('newsletter-success').style.display = 'block';
      document.getElementById('newsletter-form').reset();
    })
    .catch(function(error){
      alert("Error! Try again.");
    });
});

// === Popup Newsletter Form Handler ===
document.getElementById('newsletter-popup-form').addEventListener('submit', function(e){
  e.preventDefault();
  var email = this.email.value.trim();
  if(!email) return;

  // Set the subscribe flag for popup logic
  localStorage.setItem("newsletter_subscribed", "yes");
  hideNewsletterPopup();

  // Send to Google Apps Script (adjust as needed)
  var endpoint = "https://script.google.com/macros/s/AKfycbxl_BGbfhJvNpJhTzMu6khhPa8yrYYzPvp4SNFDP1BwVpBqGpKnCYlCoBgirb4Z8Bzy-g/exec";
  var formData = new FormData();
  formData.append("email", email);

  fetch(endpoint, {
      method: 'POST',
      body: formData
  })
  .finally(function(){
    window.location.href = "thank-you.html";
  });
});
