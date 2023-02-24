// Document loaded
// Regular JS Event Listener
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tr[data-href]'); //Attribute Selector

    rows.forEach(row => {
        row.addEventListener('click', () => { //Event listener only on pre-existing row
            window.location.href = row.dataset.href;
            //Window current location = row dataset(attribute with data-) nad pick href
        });
    });
});

// Add a row to DOM
function addRow() {
    document.querySelector('tbody').insertAdjacentHTML('beforeend', `
        <tr data-href="http://www.samsung.com">
            <td>Mohammad Masood</td>
            <td>Abdul Rahim</td>
            <td>Special Secretary</td>
            <td>0321-9865304</td>
            <td>Establishment</td>
            <td>Secretary</td>
            <td>Yes</td>
        </tr>`);
}

// Deligated/Dedicated? jQuery Event Listener
$(document).ready(function () {
    $(body).on('click', 'tr[data-href]', function () { //Listen for Event on 'body'
        window.location.href = this.dataset.href;
    });
});