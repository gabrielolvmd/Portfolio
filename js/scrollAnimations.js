// Scroll animations - animações que acontecem apenas uma vez quando o elemento entra na viewport

export function initScrollAnimations() {
  // Elementos que devem ser animados
  const animatedElements = document.querySelectorAll('.fade-in-up');
  
  // Verifica se há elementos para animar
  if (animatedElements.length === 0) return;
  
  // Configuração do Intersection Observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -100px 0px', // anima quando o elemento está 100px antes de entrar na viewport
    threshold: 0.1 // anima quando 10% do elemento está visível
  };
  
  // Callback do observer
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      // Se o elemento está visível e ainda não foi animado
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        // Adiciona a classe 'animated' para marcar como já animado
        entry.target.classList.add('animated');
        
        // Para elementos com delay (stagger effect)
        const delay = parseInt(entry.target.dataset.delay) || 0;
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        
        // Para de observar este elemento após animar
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Cria o observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Observa todos os elementos
  animatedElements.forEach((element, index) => {
    // Define estado inicial (invisível e abaixo)
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    // Verifica se o elemento já está visível na viewport (para elementos no topo da página)
    const rect = element.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight && rect.top >= 0;
    
    if (isAlreadyVisible) {
      // Se já está visível, anima imediatamente com delay se houver
      const delay = parseInt(element.dataset.delay) || 0;
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.classList.add('animated');
      }, delay);
    } else {
      // Inicia a observação para elementos que ainda não estão visíveis
      observer.observe(element);
    }
  });
}
