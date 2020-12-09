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

// We create a function (minnie), with a parameter named (mickey)
function minnie (mickey){
// We create a placeholder that starts at zero    
    let plizzy = 0
// Once again, we create a 'for' loop that loops through the numArray
    for (let i = 0; i <= mickey.length; i++){
// We create a condition that if the element within  the array has a remainder of 0        
        if (mickey[i] % 2 === 0)
// We push all even elements found in the array to the new array, which is (plizzy)        
        plizzy += 1    
    }
// We return length of the new array, which consists of only even numbers    
    return plizzy 
}
console.log(minnie(numArray))

 
// Problem # 3
// Using the array above, create a function that loops through the array and adds every number that is inside the array. Return the total.

// We create the function (curry) with a parameter of (chicken)
function curry (chicken){
// We start by creating a variable equal to zero within the function
    let sum = 0
// We create a 'for' loop with the conditions that it begins at the first index and loops through the length of the array until it reaches the end.    
    for (let i = 0; i < chicken.length; i++){ 
// Add each number in the loop to the placeholder (sum)                
                sum += chicken[i]
            }
// Return the final total    
    return sum
}
// Console the function with the argument that will be passed
console.log(curry(numArray))


// Part 2

 
// Problem # 4

// Create a function that accepts an array and a searchValue. This function will return true if the searchValue is an element in the array. Otherwise, it will return false. (do not use the built in .includes() method. This function should loop through the array!)
// Examples for problem #4 what the function invocation could look like:
// doesItInclude([40, 7, 8, 23, 43], 23) -> true
// doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false


// We create a function (dimePiece) with a parameter that includes both an array and searchValue.
function dimePiece (nickle, dude){
// We create a 'for' loop that starts at the first index and loops through the length of the array.   
    for (let i = 0; i <= nickle.length; i++){
// We create an 'if' statement that says if the index within the array is equal to the value being searched, return true.       
        if (nickle[i] === dude){
        
            return true
 
        } 
      
    }
// If the value is not found in the array, a false will be returned     
    return false
}
// Console log the function with the argument that will be passed
console.log(dimePiece([40, 7, 8, 23, 43], 23))
console.log(dimePiece(['kale', 'spinach', 'arugula'], 'iceberg'))
 

// Part 3

 // Problem # 5
// Create a function that accepts an array.
// This function will return a new array with the elements in reverse order

// We declare a variable that equals an array.
let moonwalker = [1, 2, 3, 4, 5, 6, 7]
// We create a function (mannequin) with a parameter (challenge)
 function mannequin (challenge){
// We create a new array (holdIt) that will serve as a placeholder for the values once they are looped    
     let holdIt = []
// We create a 'for' loop that starts at the end of the array, and loops backwards until there are no more values     
     for (let i = challenge.length - 1; i >= 0; i-- ){
// As the array is looped through, we push the values into the new array         
         holdIt.push(challenge[i])

     }
// Return the new array     
     return holdIt

 }
// Log function and argument that will be passed through 
console.log(mannequin(moonwalker))


// Part 4

 
// Problem # 6
// Create a function that takes in a array of numbers.
// This function will return a new array with number that are NOT divisible by 3

// We declare a variable that equals an array.
let trinity = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// We create a function (morpheus) with a parameter (neo)   
function morpheus (neo){
// We create a new array (agent) to serve as a placeholder for looped values 
    let agent = []
// We create a 'for' loop that starts at zero and loops through array    
    for (let i = 0; i < neo.length; i++){
// We create an 'if' statement that says if the indice is not strictly divisible by three, push it into (agent)        
        if (neo[i] % 3 !== 0){
            agent.push(neo[i])
        }
    }
// Return the new array    
    return agent
}
// Log function with argument
console.log(morpheus(trinity)) 


// Problem # 7
// Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total

// We create a function (black) with a parameter (eyedPeas) 
function black (eyedPeas){
    // We create a variable (fergie) and set it as a placeholder that will be equal to zero
        let fergie = 0
    // We create a 'for' loop that starts at zero and loops through array    
        for (let i = 0; i < eyedPeas.length; i++){
    // We create an 'if' statement that says as the loop passes through the array, if the indice is not strictly divisible by three add it to the new variable.         
            if (eyedPeas[i] % 3 !== 0){
                 fergie += eyedPeas[i]

            }
        }
    // Return the total    
        return fergie
    }
    // Log function with argument
    console.log(black(trinity)) 