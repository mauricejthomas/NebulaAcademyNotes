// Problem 1- Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript

// Function (areaOrPerimeter) and parameter (l, w) are given
const areaOrPerimeter = function(l , w) {
// Create condition that if length is strictly equal to width (making it a square)    
    if ( l === w){
// Return the area (l * w)        
      return l * w
// Otherwise, return the perimeter       
    } else {
      return l + l + w + w
    }
};

// Problem 2- Generate Range of Integers
//

// The function (generateRange) and the parameter (min, max, step) are given
function generateRange(min, max, step){
// Create a variable (stick) that will serve as a placeholder for the new array    
    let stick = [];
// Create 'for' loop that sets (min) as the number, (max) as the number that the loop will end, and step as the number that will be added to each loop
    for (let i = min; i <= max; i += step){
// Push results into new array        
        stick.push(i)
        }
// Return final array        
        return stick
      }

// Problem 3- Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/solutions/javascript

// The function (hello) and the parameter (name) are given
function hello(name) {
    // Create condition that if the string is empty or undefined...   
         if (name === '' || name === undefined){
    // Return string 'Hello, World!'       
           return 'Hello, World!'
    // Otherwise create a variable to convert all letters in string to lowercase       
         } else {       
           name = name.toLowerCase()
    // Return string, 'Hello, the name with the first letter capital using .charAt and .toUpperCase method and the rest lowercase using .slice method'        
           return 'Hello, ' + name.charAt(0).toUpperCase() + name.slice(1) + '!'
         }
       }

// Problem #4- Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/solutions/javascript

// Function (isDivisible) and parameter (n, x, y) is given
function isDivisible(n, x, y) {
    // Create condition that if n is divisible by x AND is divisible by y 
         if (n % x === 0 && n % y === 0){
    // Return true       
           return true
    // Otherwise return false       
         } else {
           return false 
         }
    }

// Problem #5- Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript

// Function (positiveSum) and parameter (arr) are given
function positiveSum(arr) {
    // Create a variable (kangaroo) that will be the zero placeholder that we will add the numbers from the array to
      let kangaroo = 0; 
    // Create a 'for' loop that starts at zero, loops through the entire array from the first number in the array to the last number in the array 
      for (let i = 0; i < arr.length; i++){
    // Create a condition that if the number being passed through is positive (greater than zero), add it to the placeholder (kangaroo)    
        if(arr[i] > 0){      
        kangaroo += arr[i];
        } 
      }
    // Return the variable with the total
      return kangaroo;