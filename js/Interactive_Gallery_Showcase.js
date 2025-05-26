// Interactive_Gallery_Showcase.js

window.onload = () => {
  const content          = document.getElementById('panContent');
  const galleryContainer = document.getElementById('galleryContainer');
  const modal            = document.getElementById('modal');
  const modalImg         = document.getElementById('modalImg');
  const closeBtn         = document.getElementById('modalClose');

  // Init Panzoom
  const panzoom = Panzoom(content, {
    contain:     'outside',
    cursor:      'move',
    filterTaps:  true,   // skiller korte “taps” fra drag
    zoomEnabled: false   // ingen zoom
  });

  // —— Midtstill kartet etter alt er rendret ——
  setTimeout(() => {
    const cRect = content.getBoundingClientRect();
    const gRect = galleryContainer.getBoundingClientRect();
    const offsetX = (cRect.width  - gRect.width)  / 2;
    const offsetY = (cRect.height - gRect.height) / 2;
    // moveTo setter absolutt transform
    panzoom.moveTo(-offsetX, -offsetY);
  }, 0);
  // ——————————————————————————————————————————————

  // Åpne modal (deaktiverer bakgrunnsscroll)
  function openModal(src) {
    modalImg.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  // Lukke modal (gjenoppretter scroll)
  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Dobbeltklikk for å åpne bildet (skiller fra drag)
  galleryContainer.addEventListener('dblclick', e => {
    if (e.target.matches('.panzoom-item')) {
      openModal(e.target.src);
    }
  });

  // Lukk modal-knapp og klikk utenfor bilde
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // ESC-tast lukker modal
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};
