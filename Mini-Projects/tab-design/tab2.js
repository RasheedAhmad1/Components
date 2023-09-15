const tabsContainer = document.querySelector(".tabs-container");

const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

console.log(tabButtons);

tabButtons.forEach((tab, index) => {
    if (index === 0) {
        // something
    } else {
        tabPanels[index].setAttribute("hidden", "");
    }
});

tabsContainer.addEventListener("click", (e) => {
    // print whatever clicked
    // console.log(e.target);

    // grab the link
    const clickedTab = e.target.closest("a");
    // console.log(clickedTab);
    
    // if the link is'nt clicked, do nothing, the browser skips the JS here
    if (!clickedTab) return;
    // console.log(clickedTab);


    e.preventDefault();

    switchTab(clickedTab);
});

// tabsList.setAttribute("role", "tablist");

function switchTab(newTab) {
    // get the href attribute value
    const activePanelId = newTab.getAttribute("href");
    // get the active tab
    const activePanel = tabsContainer.querySelector(activePanelId);

    // loop through the panels
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden");
}