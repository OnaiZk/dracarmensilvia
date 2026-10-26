"use strict";
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navegacao');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
const serviceField = document.getElementById('service');
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  if (serviceField) serviceField.value = link.dataset.service;
  else {
    const destination = new URL(link.href, window.location.href);
    destination.searchParams.set('atendimento', link.dataset.service);
    link.href = destination.href;
  }
}));
if (serviceField) {
  const requested = new URLSearchParams(window.location.search).get('atendimento');
  if ([...serviceField.options].some(o => o.value === requested)) serviceField.value = requested;
}
document.getElementById('booking-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = 'Olá, Dra. Carmen! Vim pelo site da Cuidar e Sorrir.' + (name ? '\nMeu nome é ' + name + '.' : '') + '\nGostaria de solicitar uma consulta para: ' + serviceField.value + '.\nAtendimento: Particular.\nPreferência de período: ' + document.getElementById('period').value + '.\nQuais horários estão disponíveis?';
  window.location.assign('https://wa.me/5511999755757?text=' + encodeURIComponent(message));
});
const dialog = document.getElementById('image-dialog');
if (dialog) {
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    const image = document.getElementById('dialog-image');
    image.src = button.dataset.image; image.alt = button.querySelector('img').alt;
    document.getElementById('image-title').textContent = button.dataset.title;
    dialog.showModal(); document.body.classList.add('modal-open');
  }));
  document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
}
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold: .08});
  document.querySelectorAll('.section-heading, .service, .about-copy, .portrait-wrap, .publication, .steps > div, .home-care-grid > a, .treatment-detail > div, .page-cta, .trust-card, .map-frame').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}
