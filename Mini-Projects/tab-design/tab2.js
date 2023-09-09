const tabsContainer = document.querySelector(".tabs-container");

const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelector(".tabs__panels > div");

console.log(tabButtons);

tabButtons.forEach((tab, index) => {
    if (index === 0) {

    } else {
        tabPanels[index].setAttribute("hidden", "true");
    }
});

tabsContainer.addEventListener("click", (e) => {
    // grab the link
    const clickedTab = e.target.closest("a");
    // if the link does clicked, do nothing
    if (!clickedTab) return;

    // console.log(clickedTab);

    e.preventDefault();

    switchTab(clickedTab);
});

tabsList.setAttribute("role", "tablist");

function switchTab(newTab) {
    const activePanelId = clickedTab.getAttribute("href");
    const activePanel = tabsContainer.querySelector(activePanelId);

    // loop through the panels
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden", false);
}