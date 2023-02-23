// Setup hamburger menu
{
    const menu_toggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".nav-menu");

    menu_toggle.addEventListener("click", () => {
        menu_toggle.classList.toggle("active");
        sidebar.classList.toggle("active");
    });
}