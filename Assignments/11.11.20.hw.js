// Part 1

 

let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

 

// Problem # 1

// Using the array above, create a function that loops through the array and return a new array with only the odd numbers
// We are creating a function (problemArray), with a parameter named (arrayProblem)
function problemArray(arrayProblem){ 
// From there, we create a variable (placeHolder), that is an empty array.
    let placeHolder = []
// We create a 'for' loop, that loops through the numArray.    
    for (let i = 0; i <= arrayProblem.length - 1; i++){
// We create a condition that if the element within the array has a remainder of 1 after being divided by 2, it is considered an odd number.        
       if (arrayProblem[i] % 2 === 1){
// We 'push' all odd elements found in the array to the new array, which is (placeHolder).           
           placeHolder.push(arrayProblem[i])
       }
   }
// We return the new array with only the odd numbers.   
   return placeHolder
}
// Invoke the function (problemArray), with the original array (numArray).
console.log(problemArray(numArray))    

 

// Problem # 2

// Using the array above, loop through the array and COUNT the amount of even numbers that are in the array

 

// Problem # 3

// Using the array above, create a function that loops through the array and adds every number that is inside the array. Return the total.

 

// Part 2

 

// Problem # 4

// Create a function that accepts an array and a searchValue. This function will return true if the searchValue is an element in the array. Otherwise, it will return false. (do not use the built in .includes() method. This function should loop through the array!)

 

// Examples for problem #4 what the function invocation could look like:

 

// doesItInclude([40, 7, 8, 23, 43], 23) -> true

// doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false

 

// Part 3

 

// Problem # 5

// Create a function that accepts an array.

// This function will return a new array with the elements in reverse order

 

// Part 4

 

// Problem # 6

// Create a function that takes in a array of numbers.

// This function will return a new array with number that are NOT divisible by 3

 

// Problem # 7

// Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total