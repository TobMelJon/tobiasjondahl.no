window.addEventListener('DOMContentLoaded', () => {
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

  // Hjelpefunksjon for å åpne modal
  function openModal(src) {
    modalImg.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';  // deaktiverer scrolling i bakgrunnen
  }

  // Hjelpefunksjon for å lukke modal
  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';        // gjenoppretter scrolling
  }

  // Delegert click-lytters for bildene
  galleryContainer.addEventListener('click', e => {
    if (e.target.matches('.panzoom-item')) {
      openModal(e.target.src);
    }
  });

  // Lukkeknapp og klikk utenfor bilde
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
});
