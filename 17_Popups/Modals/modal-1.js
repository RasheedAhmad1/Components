// Get button
let Btn = document.getElementById('modalBtn');

// Get modal element
let modal = document.getElementById('simpleModal');

// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click on button
Btn.addEventListener('click', openModal);

// Listen for Close button
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
modal.addEventListener('click', ousiteModalClick);

// Function to open Modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close Modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function ousiteModalClick(e) {
    if(e.target == modal) {
        // console.log(e.target);
        // console.log(modal);
        modal.style.display = 'none';
    }
}