// JavaScript Code
// {
//     const activePage = window.location.pathname;
//     const navLinks = document.querySelectorAll('ul li').
//     forEach(link => {
//         // apply CSS class
//         if(link.href.includes(`${activePage}`)) {
//             link.classList.add('active');
//         }
//     });
// }

// // jQuery Code
{
    $(document).on('click', 'ul li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
}