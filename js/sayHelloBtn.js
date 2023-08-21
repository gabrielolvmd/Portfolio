const sayHelloFunction = (function () {
  const helloBtn_media = document.querySelector('.helloBtn_medias');
  const styles_helloBtnMedia = window.getComputedStyle(helloBtn_media);
  const sayHelloBtn = document.querySelector('.helloBtn_link');

  // Adiciona um evento de clique ao botão "Say Hello"
  sayHelloBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique no botão propague para o documento

    // Obtém a altura atual do elemento "helloBtn_media"
    const height = parseInt(styles_helloBtnMedia.height);

    // Altera a altura do elemento com base em sua altura atual
    if (height > 0) {
      helloBtn_media.style.height = '0'; // Fecha o menu (altura = 0)
    } else {
      helloBtn_media.style.height = 'auto'; // Abre o menu (altura = automática)
    }
  });

  // Adiciona um evento de clique no documento para fechar o menu quando clicar fora
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.helloBtn')) {
      helloBtn_media.style.height = '0'; // Fecha o menu ao clicar fora do botão "Say Hello"
    }
  });
})();

export { sayHelloFunction };
