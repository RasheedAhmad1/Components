// We need to generate some CSS

// First Step
// Create all variables
const box = document.querySelector('.box');
const x = document.querySelector('.offset-x');
const y = document.querySelector('.offset-y');
const radius = document.querySelector('.blur-radius');
const spread = document.querySelector('.blur-spread');
const color = document.querySelector('.color');
const cssValue = document.querySelector('.css-value');

// The function will grab the CSS values and will place 
// as the inline CSS of the box
function updateBoxShadow () {
    // Generate "x y blur spred color;"
    const v = `${x.value}px ${y.value}px ${radius.value}px ${spread.value}px ${color.value}`;

    // Add the inline box shadow
    cssValue.value = v;

    // Assign this to the box
    box.style.boxShadow = v; // boxShadow is the style property in JS
}

// Second Step
// Update the shadow whenever the values are beign changed
[x, y, radius, spread, color].forEach(element => {
    element.oninput = updateBoxShadow;
});

// Last Step
// Add the shadow whenever the page is loaded
updateBoxShadow();