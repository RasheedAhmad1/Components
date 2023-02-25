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
        // return `<li>${item}</li>`; 
        return "<li>" + item + "</li>";
      }).join('');
  
    searchWrapper.classList.add('show');
    // resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    resultsWrapper.innerHTML = "<ul>" + content + "</ul>";
  }

// // Define suggested keywords
// let availableKeyWords = [
//     'html',
//     'css',
//     'javascript',
//     'jquery',
//     'react'
// ];

// const resultBox = document.querySelector('.result-box');
// const inputBox = document.getElementById('.input');

// inputBox.onkeyup = function() {
//     let result = [];
//     let input = inputBox.getValue();
// //    let input = Xrm.Page.getControl(".input").getValue();

//     if(input.length) {
//         result = availableKeyWords.filter((keyword) => {
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }

//     display(result);
// }

// function display(result) {
//     const content = result.map((list) => {
//         return "<li>" +  list + "</li>";
//     });

//     resultBox.innerHTML = "<ul>" + content + "</ul>";
// }