// Problem 1- Maximum product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117/solutions/javascript

// The function (adjacentElementsProduct) and parameter (array) are given
function adjacentElementsProduct(array) {
// Create a variable (slingshot) that serves as a placeholder for new array  
      let slingshot = [];
// Create a 'for' loop that starts at the first number and loops through the length of the array until it reaches the last number  
      for (let i = 0; i < array.length -1; i++){
// Create variable that account for each number in the array and multiplies it by next number in the array 
        let water = array[i] * array[i+1]
// Push results of variable (water) into new array (slingshot) 
        slingshot.push(water)
    }
// Return the maximum number in the array (slingshot) using the Math.max() method and account for all numbers using spread syntax (...)
    return Math.max(...slingshot)
}

// Problem 2- Maximum Gap (Array Series #4)
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/solutions/javascript

// The function (maxGap) and parameter (numbers) are given
function maxGap (numbers){
    // Create a variable that will be used to measure the maximum difference within the array
      let shorty = 0
    // Sort the numbers from least to greatest using .sort method
      numbers.sort((a, b) => a-b)
    // Create 'for' loop that starts at the first number and loops through the last number  
      for (let i = 0; i < numbers.length-1; i++){
    // Create condition that if the number in the array minus the previous number in the array is greater than 0 (shorty)...
        if ((numbers[i+1] - numbers[i]) > shorty){      
    // ... then the variable (shorty will be equal to the number in the array minus the previous number in the array)      
          shorty = numbers[i+1] - numbers[i]
        }
      }
    // Return the result
      return shorty
    }


// Problem 3- Nth Smallest Element (Array Series #4)
// https://www.codewars.com/kata/5a512f6a80eba857280000fc/solutions/solutions

// The function (nthSmallest) and parameters (arr, pos) are given
function nthSmallest(arr, pos){
// Create a variable that sorts array in ascending order 
    let tiny = arr.sort((a, b) => a-b)
// return the array with the index number
    return tiny[pos-1]
    }

// Problem 4- String Repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/javascript

// The function (repeatStr) and parameter (n, s) are given
function repeatStr (n, s) {
// return (s), (n) times using .repeat method  
    return s.repeat(n)
}
    
// Problem 5- Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript

// Function (fakeBin) and parameter (str) are given
function fakeBin(str){
    // Create variable (plastic) that will hold the values inputed in the new string
      let plastic = ''
    // Create a 'for' loop that starts at the beginning of the string and loops through the entire string until it reaches the last number  
      for (let i = 0; i < str.length; i++){
    // Create a condition that if the number is greater than or equal to 5...
        if (Number(str[i]) >= 5){
    // Input the value in the new string as 1      
          plastic +='1'
    // Otherwise, input the value in the new string as 0      
        } else {
          plastic +='0'
        }
      }
    // Return the new string  
      return plastic