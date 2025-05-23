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
    filterTaps:  true,
    zoomEnabled: false
  });

  // —— Midtstill kartet etter at alt er rendret ——
  requestAnimationFrame(() => {
    const contentRect   = content.getBoundingClientRect();
    const containerRect = galleryContainer.getBoundingClientRect();
    const offsetX = (contentRect.width  - containerRect.width)  / 2;
    const offsetY = (contentRect.height - containerRect.height) / 2;
    panzoom.pan(-offsetX, -offsetY);
  });
  // ——————————————————————————————————————————————————

  // Hjelpefunksjoner for modal
  function openModal(src) {
    modalImg.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Dobbeltklikk for å åpne (skiller drag fra klikk)
  galleryContainer.addEventListener('dblclick', e => {
    if (e.target.matches('.panzoom-item')) {
      openModal(e.target.src);
    }
  });

  // Lukk modal-knapp og bakgrunnsklikk
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // ESC-tast
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};
