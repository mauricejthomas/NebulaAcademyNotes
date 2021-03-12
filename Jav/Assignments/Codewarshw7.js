// Problem 1- Find the first non-consecutive number

// Function (firstNonConsecutive) and parameter (arr) are given
function firstNonConsecutive(arr) {
// Create for loop that loops through the array     
    for (let i = 0; i < arr.length - 1; ++i) {
// Create condition that if value plus one is not strictly equal to the next consecutive index, return the value        
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
// Otherwise return null        
      }
    }
    return null
  }


// Problem 2- Can we divide it?

// Function (isDivideBy) and parameters (number, a, b) are given.
function isDivideBy(number, a, b) {
// Create condition that if an integer number is divisible by each out of two arguments, return true.   
    if ((number % a === 0) && (number % b === 0))
    {
      return true
// Otherwise return false      
    }
    else
    {
      return false
    }
  }


// Problem 3- Short Long Short

// Function (solution) and parameters (a, b) are given.
function solution(a, b) {
// Use ternary operator to create condition that if the length of a is less than the length of b, return a+b+a, otherwise retur b+a+b    
    return a.length < b.length ? a + b + a : b + a + b
  }

// Problem 4- Check the exam

// Function (checkExam) and parameters(array1, array2) are given
function checkExam(array1, array2) {
// Create variable that serves as placeholder    
    let placeHolder = 0;
// Create for loop that loops through the length of array 1    
    for (let i = 0; i < array1.length; i++){
// Create condition that if indice of array one is equal to array 2, add 4 to the placeholder        
        if (array1[i] == array2[i]) {
            placeHolder += 4;
        }
// Otherwise if array 2 is equal to "", don't add anything to the placeholder        
        else if (array2[i] === ""){
            placeHolder += 0
        }
// Otherwise return -1        
        else {
            placeHolder -= 1
        }
    }
// Create condition that if placeholder is less than 0, then placeholder equals zero    
    if (placeHolder < 0) {
        placeHolder = 0        
    }
// Return final placeholder value          
    return placeHolder  
}

    
// Problem 5- Reversed Strings

// Function (solution) and parameter (str) are given
function solution(str){
// Return parameter after it has been separated, reversed, and rejoined    
    return str = str.split('').reverse().join('');
      
    }
    

// Problem 6- Convert number to reversed array of digits

// Function (digitize) and parameter (n) are given
function digitize(n) {
// Return n after it has been converted into a string, split into substrings, separated by a coma, and reintroduced as a number in reverse order.    
    return String(n).split('').map(Number).reverse()
  }    