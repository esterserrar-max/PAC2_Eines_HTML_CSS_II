/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import '@fortawesome/fontawesome-free/css/all.min.css';

/**
 * Write any other JavaScript below
 */

/** Event Listener pel menu hamburguesa per dispositius mobils */
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-nav-toggle]');

  if (toggle) {
    // 1. Busca primer dins del mateix contenidor/header, i si no, arreu del document
    const scope = toggle.closest('.c-site-header, header, nav') || document;
    const menu = scope.querySelector('[data-nav-menu]') || document.querySelector('[data-nav-menu]');
    const icon = toggle.querySelector('i');

    if (!menu) return;

    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));

    if (icon) {
      icon.classList.toggle('fa-bars', !isOpen);
      icon.classList.toggle('fa-xmark', isOpen);
    }
    return;
  }

  // Opcional: si es clica un enllaç dins del menú en mòbil, tanca'l
  const clickedLink = event.target.closest('[data-nav-menu] a');
  if (clickedLink) {
    const menu = clickedLink.closest('[data-nav-menu]');
    const scope = menu?.closest('.c-site-header, header') || document;
    const btn = scope.querySelector('[data-nav-toggle]') || document.querySelector('[data-nav-toggle]');
    const icon = btn?.querySelector('i');

    if (menu?.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      btn?.setAttribute('aria-expanded', 'false');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  }
});

// Tanca el menú amb la tecla Escape
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  const openMenu = document.querySelector('[data-nav-menu].is-open');
  if (!openMenu) return;

  const scope = openMenu.closest('.c-site-header, header') || document;
  const btn = scope.querySelector('[data-nav-toggle]') || document.querySelector('[data-nav-toggle]');
  const icon = btn?.querySelector('i');

  openMenu.classList.remove('is-open');
  btn?.setAttribute('aria-expanded', 'false');
  if (icon) {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

