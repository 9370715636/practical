// script.js

// Function to sort an array
function sortArray(arr) {
    return arr.sort((a, b) => a - b); // Sorts the array in ascending order
}

// Original array
const originalArray = [34, 12, 5, 67, 23, 89, 1, 45];

// Sort the array
const sortedArray = sortArray(originalArray.slice()); // Use slice() to avoid mutating the original array

// Display the original and sorted arrays in the HTML
document.getElementById('original-array').textContent = originalArray.join(', ');
document.getElementById('sorted-array').textContent = sortedArray.join(', ');