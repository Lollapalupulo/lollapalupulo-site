// Alternar tema claro/escuro
const toggleButton = document.getElementById('toggle-theme');
const htmlElement = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️ Claro';
  } else {
    htmlElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙 Escuro';
  }
}

// Tema ao carregar
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});

// Botão de troca de tema
toggleButton.addEventListener('click', () => {
  const current = htmlElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
