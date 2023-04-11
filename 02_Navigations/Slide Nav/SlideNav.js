// Setup navigation bar
{
    // reference to important navigation elements
    const navMenu = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navButton = document.querySelector('.menu-btn');

    // apply CSS classes
    navButton.addEventListener('click', () => {
        navMenu.classList.add('nav-open');
        navOverlay.classList.add('nav-overlay-open');
    });

    // remove CSS classes
    navOverlay.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
        navOverlay.classList.remove('nav-overlay-open');
    });
}