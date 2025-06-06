// Menu Mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Carrossel
document.querySelector('.proximo').addEventListener('click', () => {
  document.querySelector('.carrossel').scrollBy({ 
    left: 300, 
    behavior: 'smooth' 
  });
});

document.querySelector('.anterior').addEventListener('click', () => {
  document.querySelector('.carrossel').scrollBy({ 
    left: -300, 
    behavior: 'smooth' 
  });
});

// Programação - Troca de Abas
document.querySelectorAll('.dia-tabs button').forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove classe ativa dos botões
    document.querySelectorAll('.dia-tabs button').forEach(btn => {
      btn.classList.remove('ativo');
    });
    
    // Adiciona classe ativa ao botão clicado
    botao.classList.add('ativo');
    
    // Esconde todos os conteúdos
    document.querySelectorAll('.dia-conteudo').forEach(conteudo => {
      conteudo.classList.remove('ativo');
    });
    
    // Mostra o conteúdo correspondente
    const diaAlvo = botao.getAttribute('data-dia');
    document.getElementById(diaAlvo).classList.add('ativo');
  });
});

// Favoritos
document.querySelectorAll('.favorito').forEach(botao => {
  botao.addEventListener('click', function() {
    this.classList.toggle('favoritado');
    this.textContent = this.classList.contains('favoritado') ? '❤️✓' : '❤️';
  });
});
