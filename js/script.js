import './sayHelloBtn.js';
import './mobileMenu.js';
import { initScrollAnimations } from './scrollAnimations.js';

// Inicializa as animações quando o DOM estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  // DOM já está carregado
  initScrollAnimations();
}
