// <!-- BACKDROP WITH MODAL WINDOW -->
(() => {
  const modalBtns = document.querySelectorAll('[open-order-modal-form]');
  const closeModalBtns = document.querySelectorAll('[close-order-modal-form]');
  const modals = document.querySelectorAll('[order-modal-form]');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('open-order-modal-form');
      const modal = document.querySelector(`[order-modal-form="${modalId}"]`);
      modal.classList.add('is-open');
      document.body.classList.add('modal-open');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('[order-modal-form]');
      modal.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('is-open')) {
          modal.classList.remove('is-open');
          document.body.classList.remove('modal-open');
        }
      });
    }
  });

  modals.forEach(modal => {
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
      }
    });
  });
})();

// <!-- MOBILE MENU -->
(() => {
  const modalBtns = document.querySelectorAll('[open-mobile-menu-form]');
  const closeModalBtns = document.querySelectorAll('[close-mobile-menu-form]');
  const modals = document.querySelectorAll('[mobile-menu-form]');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('open-mobile-menu-form');
      const modal = document.querySelector(`[mobile-menu-form="${modalId}"]`);
      modal.classList.add('is-open');
      document.body.classList.add('modal-open');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('[mobile-menu-form]');
      modal.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('is-open')) {
          modal.classList.remove('is-open');
          document.body.classList.remove('modal-open');
        }
      });
    }
  });

  modals.forEach(modal => {
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
      }
    });
  });
})();