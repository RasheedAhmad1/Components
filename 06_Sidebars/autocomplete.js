// Define suggested keywords
let availableKeyWords = [
    'html',
    'css',
    'javascript',
    'jquery',
    'react'
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
        results = availableKeyWords.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        });
    }

    renderResults(results);

});

function renderResults(results) {
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }

    const content = results.map((item) => {
        return `<li>${item}</li>`;
    }).join('');

    searchWrapper.classList.add('show');
    
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}