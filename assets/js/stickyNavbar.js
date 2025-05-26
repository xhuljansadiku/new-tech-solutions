document.addEventListener("DOMContentLoaded", function () {
  // Show/hide live chat popup
  const bubble = document.getElementById('live-chat-bubble');
  const popup = document.getElementById('live-chat-popup');
  const closeBtn = document.getElementById('close-chat-popup');
  const chatForm = document.getElementById('live-chat-form');
  const chatInput = document.getElementById('live-chat-input');
  const chatBody = popup.querySelector('.live-chat-body');
  // Show popup
  bubble.addEventListener('click', () => {
    popup.classList.remove('d-none');
    setTimeout(()=>chatInput.focus(), 200);
  });
  // Hide popup
  closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none');
  });
  // Demo send msg
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if(!userMsg) return;
    // Show user message
    const msgDiv = document.createElement('div');
    msgDiv.className = 'live-chat-msg user';
    msgDiv.style.cssText = 'background:#f3f6fa;color:#333;padding:0.5rem 0.8rem;border-radius:1rem 1rem 0.3rem 1rem;margin-bottom:0.4rem;max-width:90%;margin-left:auto;text-align:right;';
    msgDiv.textContent = userMsg;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    chatInput.value = '';
    // Fake bot response
    setTimeout(() => {
      const botDiv = document.createElement('div');
      botDiv.className = 'live-chat-msg bot';
      botDiv.textContent = 'Thank you! A team member will reply ASAP.';
      chatBody.appendChild(botDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
  });
});

