// Problem 1- Recursive Replication

// Function (replicate) and parameters (times, number) are given
function replicate(times, number) {
// Create variable that serves as placeholder     
    let experiment = [];
// Create conditional that if the first parameter is less than 1, return empty array.  
    if (times < 1) {return experiment
// Otherwise push the number to the end of the array         
    } else {  
    experiment.push(number)
// Return the placeholder concatenated with the function and parameters, -1 for the preceding number  
    return experiment.concat(replicate(times - 1, number));    
    }
  }
  

// Problem 2- Factorial Factory

// Function (factiorial) and parameter (n) are given
function factorial (n) {
// Create condition that if n is less than 0, return null because these are values outside of the positive range  
  if (n < 0) return null
// Create condition that if n is strictly equal to 0, return 1  
  if (n === 0) return 1
// Return n multiplied by the integer preceding it  
  return n * factorial(n-1)
}


// Problem 3- Reverser

// Function (reverse) and parameter are given (n)
function reverse(n){
// Create variable to serve as placeholder    
    let groundZero = 0;
    
    while (n) {
// Create variable that will put numbers in reverse order        
        groundZero = groundZero * 10 + n % 10;
// Round variable to nearest zero        
        groundZero = Math.floor(n/10);
    }
// Return final variable    
    return groundZero;
}


// Problem 4- Sum ALL the arrays!

// Function (arraySum) and parameter (arr) are given
function arraySum(arr) {
// Create variable to serve as placeholder    
    let placeHolder = 0;
// Create for loop to loop through the length of array    
    for (let i = 0; i < arr.length; i++) {
// Create condition that if indice in parameter is an array, add values to placeholder        
      if (Array.isArray(arr[i])) {          
        placeHolder += arraySum(arr[i]);
// Otherwise if type of variable is strictly a number, also add it to placeholder        
      } else if (typeof arr[i] === 'number') {
        placeHolder += arr[i];
      }
    }
// Return placeholder    
    return placeHolder;
  }