/**
 * Tellura Reformas — scripts.js
 *
 * This static export has no JavaScript-driven logic of its own (the original
 * page was a server-rendered React app; everything visual — including the
 * .reveal fade-in and the WhatsApp pulse — runs on pure CSS animations).
 *
 * The single exception is the mobile "hamburger" button in the header,
 * which was present in the markup but had no behavior wired to it. This
 * file adds that one piece of functionality: showing/hiding the nav links
 * on small screens.
 */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('button[aria-label="Abrir menú"]');
  var nav = document.querySelector('header nav');

  if (!toggle || !nav) return;

  var open = false;

  function setMobileNavStyles(isOpen) {
    if (isOpen) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#FAF9F6';
      nav.style.padding = '1.5rem';
      nav.style.gap = '1rem';
      nav.style.borderTop = '1px solid #D1D0CB';
      nav.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
    } else {
      nav.removeAttribute('style');
    }
  }

  toggle.addEventListener('click', function () {
    open = !open;
    toggle.setAttribute('aria-expanded', String(open));
    setMobileNavStyles(open);
  });

  // Close the mobile menu if the viewport is resized back to desktop width
  window.addEventListener('resize', function () {
    if (open && window.innerWidth >= 768) {
      open = false;
      toggle.setAttribute('aria-expanded', 'false');
      setMobileNavStyles(false);
    }
  });
});