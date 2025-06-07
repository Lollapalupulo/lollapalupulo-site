// Alternar tema claro/escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica tema salvo
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Salva preferência do usuário
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Menu hambúrguer responsivo
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
