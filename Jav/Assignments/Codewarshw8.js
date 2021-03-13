// Problem 1- Multiple of index

// Function (multipleOfIndex) and parameter (arr) are given.
function multipleOfIndex(arr) {
// Create variable to serve as placeholder of new array.    
    let placeHolder = [];
// Create for loop that runs through length of array.    
    for (let i = 1; i < arr.length; i++) {
// Create condition that if value of element divided by its index = 0, push value into new array        
      if (arr[i] % i == 0) {
        placeHolder.push(arr[i]);
      }
    }
// Return new array
    return placeHolder;
  }
  

// Problem 2- Convert number to reversed array of digits

// Function (digitize) and parameter (n) are given
function digitize(n) {
// Return n after it has been converted into a string, split into substrings, separated by a coma, and reintroduced as a number in reverse order.    
        return String(n).split('').map(Number).reverse()
      }    


// Problem 3- Sum Mixed Array

// Function (sumMix) and parameter (x) are given.
function sumMix(x){
// Create variable to serve as placeholder    
    let placeHolder = 0;
// Loop through the array, and use parseInt function to convert each argument into string, then return it as integer    
    for (let i of x) {
// Add value to placeholder        
      placeHolder += parseInt(i);
    }
// Return end value    
    return placeHolder;
}


// Problem 4- Sum of differences in array

// Function (sumOfDifferences) and parameter (arr) are given
function sumOfDifferences(arr) {
// Sort the array in ascending order    
    arr.sort((a, b) => a - b);
// Create variable to sere as placeholder
    let placeHolder = 0;
// Create for loop that loops through the array backwards    
    for(let i = arr.length - 1; i > 0; i--) {
// Find the difference between value and next value and add difference to placeholder        
      placeHolder += arr[a] - arr[a - 1];
    }
// Return placeholder with end value    
    return placeHolder;
  }


// Problem 5- Take the Derivative

// Function (derive) and parameters (coefficient, eponent) are given.
function derive(coefficient,exponent) {
// Return the parameter values multiplied and then turned into a string, followed by exponent string and exponent value - 1 and converted to string,    
    return (coefficient * exponent).toString() + "x^" + (exponent -1).toString()
}


// Problem 6- Total amount of points

// Function (points) and parameter (games) are given
function points(games) {
// Create variable to serve as placeholder    
    let placeHolder = 0;
// Use .forEach method to account for each element in the array    
    games.forEach(n => {
// Create condition that adds 3 to placeholder if x is greater than y        
      if (n[0] > n[2]) placeHolder += 3;
// Create condition that adds 1 to placeholder if x is strictly equal to y      
      if (n[0] === n[2]) placeHolder += 1;
    })
// Return placeholder end value    
    return placeHolder
  }
