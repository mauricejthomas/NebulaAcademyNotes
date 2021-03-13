// Problem 1- What is between?

// Function (between) and parameters (a, b) are given
function between(a, b) {
// Create variable that will serve as placeholder for new array    
    placeHolder = []
// Create for loop that starts at a, and loops through array until value is less than or equal to b    
    for(i = a;i <= b; i++){ 
// Push values into new array        
        placeHolder.push(i)
    }
// Return new array    
    return placeHolder
}


// Problem 2- Tip Calculator

// Function (calculateTip) and parameters (amount, rating) are given
function calculateTip(amount, rating) {
    // Use switch method to match rating to tip percentage and use Math.ceil to round amount up.  Default is rating not recognised    
    switch(rating.toUpperCase()){
        case "TERRIBLE":return 0;
        case "POOR":return Math.ceil(amount * 0.05);
        case "GOOD":return Math.ceil(amount * 0.1);
        case "GREAT":return Math.ceil(amount * 0.15);
        case "EXCELLENT":return Math.ceil(amount * 0.2);
        default:return "Rating not recognised";
    }
}


// Problem 3- Draw Stairs

// Function (drawStairs) and parameter (n) is given
function drawStairs(n) {
// Create variable to serve as placeholder for new array    
    let placeHolder = [];
// Create for loop to pass through parameter of n    
    for (let i = 0; i < n; i++) {
// Create variable that allows an index of array to be a string using template literal        
      placeHolder[i] = `${' '.repeat(i)}I`;
    }
// Concatenate all elements, each one on a new line    
    return placeHolder.join('\n');
  }


// Problem 4- Remove String Spaces

// Function (noSpace) and parameter (x) are given
function noSpace(x){
// Create variable to serve as placeholder for new string    
    let placeHolder = ""
// Create for loop that starts at zero and passes through length of parameter     
    for (let i = 0; i < x.length; i++){
// Create condition that if index is not strictly equal to a space, push the value into the new string        
      if(x[i] !== " "){
        placeHolder += x[i];
      }
    }
// Return new string    
    return placeHolder;
}


// Problem 5- TwoSum


// Function (twoSum) and parameters (nums, target) are given
var twoSum = function(nums, target) {
// Create variable to serve as placeholder for function   
    let placeHolder = {}
// Create for loop to pass through array of integers    
    for(let i = 0; i < nums.length; i++){
// Since we are assuming there is only one answer, create condition that if the difference between target number and index of 'nums' is greater than or equal to zero, return index, and difference between target and index         
        if(placeHolder[target-nums[i]] >= 0){
            return [i, placeHolder[target-nums[i]]]             
        } else {
            placeHolder[nums[i]] = i
        }
    }
}