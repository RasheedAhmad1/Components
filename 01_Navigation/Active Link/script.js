// Setup active link stuff

{
    // reference to important navigation elements
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a').
    forEach(link => {
        // apply CSS class
        if(link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    });
}