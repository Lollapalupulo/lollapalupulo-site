// Menu Mobile
const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuBtn.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Fecha menu ao clicar em links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuBtn.innerHTML = '☰';
  });
});

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
