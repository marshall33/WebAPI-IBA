// Get the button element
var button = document.getElementById('b1');

// Get the paragraph element where we'll change the text
var textParagraph = document.getElementById('textContent');

// Set up a variable to keep track of whether the text has been changed
var textChanged = false;

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Check if the text has been changed
    if (textChanged === false) {
        // If it hasn't been changed, update the text
        textParagraph.textContent = "Into the Another One";
        // Update our tracking variable
        textChanged = true;
    } else {
        // If it has been changed, change it back to the original
        textParagraph.textContent = "I am First here.";
        // Update our tracking variable
        textChanged = false;
    }
});