const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // find the target - from data attribute
        const target = document.querySelector(tab.dataset.tabTarget);
        // console.log(target);

        // remove the active class from the active tab
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        // remove the active class from the active tab item
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // show the tab by adding the active class
        target.classList.add('active');

         // show the tab item by adding the active class
         tab.classList.add('active');
    });
});
