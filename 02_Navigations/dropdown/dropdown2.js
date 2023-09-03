// Show Menu
const showMenu = (toggleId, navId) => {
    const toggling = document.getElementById('toggleId'),
    nav = document.getElementById('navId');

    toggling.addEventListener('click', () => {
        // Add/Remove show-menu class to nav menu
        nav.classList.toggle('show-menu');
        // Add show-icon class to show and hide menu icon
        toggling.classList.toggle('show-icon');
    });
}

showMenu(toggle-id, nav-id);