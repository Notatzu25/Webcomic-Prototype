// script.js

// Load images
const pages = [];
for (let i = 1; i <= 7; i++) {
  pages.push(`images/page${i}.jpg`);
}

const container = document.getElementById('comic-container');
pages.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  container.appendChild(img);
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ----------------------
// AUTO RESET AT BOTTOM
// ----------------------
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    setTimeout(scrollToTop, 5000);
  }
});

// ----------------------
// INACTIVITY RESET
// ----------------------
let idleTimer;
const idleTime = 30000; // 30 seconds (adjust if you want)

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    scrollToTop();
  }, idleTime);
}

// Detect user activity
['touchstart', 'scroll', 'click'].forEach(event => {
  window.addEventListener(event, resetIdleTimer);
});

// Start timer on load
resetIdleTimer();