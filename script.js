// ===== MENU MOBILE =====
const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  // Alterna a classe 'ativo' no menu
  navMenu.classList.toggle('ativo');
  
  // Altera o ícone para 'X' quando aberto
  if (navMenu.classList.contains('ativo')) {
    menuBtn.innerHTML = '✕';
  } else {
    menuBtn.innerHTML = '☰';
  }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('ativo');
    menuBtn.innerHTML = '☰';
  });
});
