const mobileMenuFunction = (function () {
  const openMenuBtn = document.querySelector('.open_menuBtn');
  const closeMenuBtn = document.querySelector('.close_menuBtn');
  const mobileMenu = document.querySelector('.mobile_menu');
  const linksMobileMenu = document.querySelectorAll('.menu-link');

  // Abre o menu mobile ao clicar no botão de abertura
  openMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.add('open');
  });

  // Fecha o menu mobile ao clicar no botão de fechamento
  closeMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.remove('open');
  });

  // Fecha o menu mobile e realiza o scroll suave ao clicar em um link do menu
  linksMobileMenu.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Impede o comportamento padrão do link (não seguir o link imediatamente)

      // Encontra o elemento alvo (seção) correspondente ao ID especificado no atributo 'href' do link
      const target = document.querySelector(link.getAttribute('href'));

      if (target) {
        // Calcula a posição do elemento alvo em relação ao topo da página, levando em consideração a altura do cabeçalho
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollTop =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        // Faz a rolagem suave até a posição do elemento alvo
        window.scrollTo({
          top: scrollTop,
        });
      }

      // Fecha o menu mobile após o clique no link
      mobileMenu.classList.remove('open');
    });
  });
})();

export { mobileMenuFunction };
