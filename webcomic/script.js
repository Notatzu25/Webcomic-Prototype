// script.js

// List of your 20 pages
const pages = [];
for (let i = 1; i <= 7; i++) {
  pages.push(`images/page${i}.jpg`);
}

// Insert images into the container
const container = document.getElementById('comic-container');
pages.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  container.appendChild(img);
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-reset at bottom after 3 seconds
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    setTimeout(scrollToTop, 5000);
  }
});