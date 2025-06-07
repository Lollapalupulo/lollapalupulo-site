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

// Detectar tema salvo
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
});

// Botão de troca de tema
toggleButton.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Animação de rolagem suave nos links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
