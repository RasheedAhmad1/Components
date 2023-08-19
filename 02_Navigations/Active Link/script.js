// Setup active link stuff

{
    // reference to important navigation elements
    const activePage = window.location.pathname;
    console.log(activePage);
    document.querySelectorAll('.nav-links li a').
    forEach(link => {
        // apply CSS class (active)
        if(link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    });
}