// Problem 1- Square(n)Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// The function (squareSum) and parameter (numbers) are given to us for this example
function squareSum(numbers){
// Create a placeholder (winter)  for the final sum of elements
      let winter = 0
// Create a for loop that starts at zero, and loops through each number until it reaches the last number in the array 
      for (let i = 0; i < numbers.length; i++){
// We use math.pow(x) to square each number in the array and add the value to the placeholder every time it loops through
        winter += Math.pow(numbers[i], 2)
      }
// Return the placeholder, which will now have the sum of all of the numbers squared
    return winter
    }


// Problem 2- L1: Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/solutions/javascript

// The function (setAlarm) and parameter (employed and vacation) are given to us for this example
function setAlarm(employed, vacation){
// Create an if statement that states if (employed) is strictly equal to 'true' AND (vacation) is strictly equal to 'false', return 'true'    
    if (employed === true && vacation === false){
      return true
// Otherwise the function will return 'false'      
    } else {
      return false
    }
  }


// Problem 3- Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/javascript

function arrayPlusArray(arr1, arr2) {
    // Create a variable (eggNog) that combines both arrays (arr1 + arr2) using concat method  
      let eggNog = arr1.concat(arr2)
    // Create a placeholder (splitPea) that starts at zero
      let splitPea = 0
    // Create a 'for' loop that starts at zero, and loops through length of the array until it reaches the end 
      for (let i = 0; i <= eggNog.length - 1; i++){
    // Loop will add numbers to placeholder as it is passed through each index   
        splitPea += eggNog[i]
      }
    // Return final total  
      return splitPea
    }


// Problem 4- Returning Strings
// https://www.codewars.com/kata/55a70521798b14d4750000a4/solutions/javascript

// The function (greet) and parameter (name) are given to us for this example
function greet(name){
// Return a string using template literal to pass the parameter through the function    
  return `Hello, ${name} how are you doing today?`
}


// Problem 5- Filling an array (Part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/solutions/javascript

// Function is given to us
const arr = N => {
    // Create a new variable that is assigned to an empty array  
      let monster = []
    // Create a 'for' loop that starts at 0 and ends at 'N'  
      for (let i = 0; i < N; i++){
    // We push the elements into the new array (monster)
        monster.push(i)
      }
    // Return new array (monster)
      return monster  
    }


// Problem 6- N-th Power
// https://www.codewars.com/kata/57d814e4950d8489720008db

// Function and parameter are given to us 
function index(array, n){
    // Create an 'if' statement to define if the element is outside of the array and return -1  
      if (array[n] === undefined){
        return -1
      }
     // If element is in the array, find the Nth power 
      return Math.pow(array[n], n)
    }


// Problem 7- Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript

// Function and parameter is given
function past(h, m, s){
    // Create variable for each form of measurement and convert all three to milliseconds
      let small = s*1000
      let medium = m*60000
      let large = h*3600000
    // Add the total of the three variables
      return small + medium + large
    }