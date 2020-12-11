
// Problem 1- Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c/solutions/javascript

// The function (litres) with parameter (time) is given
function litres(time) {
// return the parameter divided by 2 and then round down using the Math.floor() method   
    return Math.floor(time/2)
  }


// Problem 2- Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions/javascript

// The function (getAverage) and the parameter (marks) are given
function getAverage(marks){
// Create a variable (guitar) to serve as a placeholder that will contain the total sum of averages    
    let guitar = 0
// Create a 'for' loop that passes through each number starting from the first number to the last    
    for (let i = 0; i < marks.length; i++){
// As the parameter(marks) loops through the array it adds the element it passes through to the placeholder (guitar)        
      guitar += marks[i]
    }
// Create a variable that divides the total number of averages by the amount of numbers it passes through, or the length of the array     
      let solo = guitar /marks.length
// Return the final variable (solo) and use the Math.floor() method to round it down to the nearest integer  
      return Math.floor(solo)
  }


// Problem 3- Gravity Flip (didn't understand)
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/solutions/javascript

const flip=(redPill, bluePill)=>{
    if ( redPill === 'R'){
      return bluePill.sort((a , b) => a - b)      
      }
    return bluePill.sort((a, b) => b - a)
  }


// Problem 4- Reversed Words
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// function (reverseWords) and parameter (str) are given
function reverseWords(str){
// Create variable (kings) to serve as a placeholder for the new string 
    let kings = ''
// Create a variable that divides the string into substrings    
    let nuggets = str.split(' ')
// Creat a 'for' loop that starts at the end of the string and passes through backwards    
    for (let i = nuggets.length-1; i >= 0; i--){
// Add each substring index to the new variable (kings) plus quotes
        kings += ' ' + nuggets[i]
    }

    return kings.slice(1)    
}

// Problem 5- Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// The function ( areYouPlayingBanjo) and the parameter (name) are given
function areYouPlayingBanjo(name) {
// Create a condition that if the first letter of the parameter begins with a capital 'R' or lower case 'r',    
    if (name[0] == 'R' || name[0] == 'r'){ 
// Return a true statement string that inputs the name using template literal        
      return `${name} plays banjo`
    } else {
// Otherwise return a false statement string that inputs the name using template literal        
      return `${name} does not play banjo`
    }
  }

// Problem 6-
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript

// The function (summation) and parameter (num) are given
var summation = function (num) {
// Create a variable (scramble) that serves as a placeholder of 0    
    let scramble = 0
// Create a for loop that starts at zero and loops through each number until it reaches (num)
    for (let i = 0; i <= num; i++){
// As the parameter loops through the function, it adds the number to the placeholder (scramble)        
      scramble += i
    }
// Return placeholder with total    
    return scramble
  }

// Problem 7-
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript

// Function (invert) and parameter (array) are given
function invert(array) {
// Create a variable (ketchup) to serve as a placeholder for the new array    
    let ketchup = []
// Create a 'for' loop that starts at the beginning of the array and passes through each number until it reaches the last index of the array   
  for (let i = 0; i < array.length; i++){
// Create a variable (mustard) that takes each element in the array and multiplies it by -1, giving it its additive inverse      
      let mustard = array[i] * -1
// Push the new numbers to the placeholder variable (ketchup)      
      ketchup.push(mustard)
  }
// Return the new array  
   return ketchup    
  }
