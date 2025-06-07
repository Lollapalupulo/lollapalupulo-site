// Efeitos simples de rolagem suave e realce de menu

// Rolagem suave ao clicar nos links do menu
const menuLinks = document.querySelectorAll('.nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);

    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Destaque do link do menu ao rolar
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 90;
  menuLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
