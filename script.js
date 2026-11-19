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
  const otherWrap = document.getElementById('other-wrap');
  const otherInput = document.getElementById('other-service');
  if (otherWrap && otherInput) { const toggleOther = () => { const isOther = serviceField.value === 'Outro'; otherWrap.hidden = !isOther; otherInput.required = isOther; }; serviceField.addEventListener('change', toggleOther); toggleOther(); }
}
document.getElementById('booking-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const otherDetail = document.getElementById('other-service')?.value.trim();
  if (!name || !serviceField.value || !document.getElementById('period').value || (serviceField.value === 'Outro' && !otherDetail)) return;
  const chosenService = serviceField.value === 'Outro' ? 'Outro — ' + otherDetail : serviceField.value;
  const message = 'Olá, Dra. Carmen! Vim pelo site da Cuidar e Sorrir.\nMeu nome é ' + name + '.\nGostaria de solicitar uma consulta para: ' + chosenService + '.\nPreferência de período: ' + document.getElementById('period').value + '.\nQuais horários estão disponíveis?';
  window.location.assign('https://wa.me/5511999755757?text=' + encodeURIComponent(message));
});
const dialog = document.getElementById('image-dialog');
if (dialog) {
  const dialogImg = document.getElementById('dialog-image');
  const dialogVid = document.getElementById('dialog-video');
  const stopMedia = () => { if (dialogVid) { dialogVid.pause(); dialogVid.removeAttribute('src'); dialogVid.load(); } };
  document.querySelectorAll('[data-image], [data-video]').forEach(button => button.addEventListener('click', () => {
    document.getElementById('image-title').textContent = button.dataset.title;
    if (button.dataset.video) {
      if (dialogImg) dialogImg.style.display = 'none';
      if (dialogVid) { dialogVid.src = button.dataset.video; dialogVid.style.display = 'block'; dialogVid.play().catch(() => {}); }
    } else {
      if (dialogVid) { dialogVid.pause(); dialogVid.style.display = 'none'; dialogVid.removeAttribute('src'); }
      if (dialogImg) { dialogImg.src = button.dataset.image; dialogImg.alt = button.querySelector('img')?.alt || ''; dialogImg.style.display = 'block'; }
    }
    dialog.showModal(); document.body.classList.add('modal-open');
  }));
  document.getElementById('close-dialog')?.addEventListener('click', () => { stopMedia(); dialog.close(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) { stopMedia(); dialog.close(); } } });
  dialog.addEventListener('close', () => { stopMedia(); document.body.classList.remove('modal-open'); });
}
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold: .08});
  document.querySelectorAll('.section-heading, .service, .about-copy, .portrait-wrap, .publication, .steps > div, .home-care-grid > a, .treatment-detail > div, .page-cta, .trust-card, .doctor-photo-card, .map-frame').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}
