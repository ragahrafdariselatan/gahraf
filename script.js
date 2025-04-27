AOS.init();

document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.experience-photo-card');
    card.classList.toggle('expanded');
    button.textContent = card.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});


const typed = new Typed('#typed', {
  strings: [
    "Hi, I'm Rafi Muhammad👋",
    "Welcome to my Website!",
    "Let's Build Something Cool!"
  ],
  typeSpeed: 80,
  backSpeed: 70,
  backDelay: 2000,
  startDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});


