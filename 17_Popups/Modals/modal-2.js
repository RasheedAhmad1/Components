const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button, () => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget); // with the 'button' we can access all of the data attributes like simple JS objects and it'll cample case them for us 
        // button.dataset.modalTarget = #modal (In HTML)
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal, () => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button, () => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.add('active');
    overlay.calssList.add('active');
}

function closeModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
}