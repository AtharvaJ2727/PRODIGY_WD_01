// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  const text = document.querySelector('.animate-text');
  const btn = document.querySelector('.animate-btn');

  if (text) observer.observe(text);
  if (btn) observer.observe(btn);
});
