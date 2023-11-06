const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const tabMenu = document.querySelector('.tab-menu');

const iconVisibility = () => {
    let scrollLeftValu = Math.ceil(tabMenu.scrollLeft);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    // console.log('scrollWidth', tabMenu.scrollWidth);
    // console.log('clientWidth', tabMenu.clientWidth);
    // console.log('scrollLeftValue', scrollLeftValu);
    // console.log('scrollableWidth', scrollableWidth);

    btnLeft.style.display = scrollLeftValu > 0 ? 'block' : 'none';
    btnRight.style.display = scrollableWidth > scrollLeftValu ? 'block' : 'none';
}

btnRight.addEventListener('click', () => {
    tabMenu.scrollLeft += 150;
    iconVisibility();
});

btnLeft.addEventListener('click', () => {
    tabMenu.scrollLeft -= 150;
    iconVisibility();
});