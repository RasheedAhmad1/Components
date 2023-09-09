const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');

function openDirectorateGeneral () {
    content1.style.transform = "translateX(0%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";

    // change background color
    btn1.style.backgroundColor = "#D7F4E9";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";

    // change border radius
    btn1.style.borderRadius = "8px 8px 0 0";
}

function openOrganogram () {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0%)";
    content3.style.transform = "translateX(100%)";

    // change background color
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "#D7F4E9";
    btn3.style.backgroundColor = "transparent";

    // change border radius
    btn2.style.borderRadius = "8px 8px 0 0";
}

function openFunctions () {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0%)";

    // change background color
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "#D7F4E9";

    // change border radius
    btn3.style.borderRadius = "8px 8px 0 0";
}