// Codewars Of The Week #1

// Function (elevatorDistance) and parameter (array) are given
function elevatorDistance(array) {
// Create variable to serve as a placeholder
    let placeHolder = 0;
// Create for loop that loops through the length of the array, and returns absolute value of floors traveled and adds value to placeholder    
    for (let i = 0; i < array.length - 1; i++) {
      placeHolder += Math.abs(array[i] - array[i + 1]);
    }
// Return placeholder    
    return placeHolder
