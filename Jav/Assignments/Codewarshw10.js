// Problem 1- Difference in Age

// Function (differenceInAges) and parameter (ages) are given
function differenceInAges(ages){
// Use .sort method to put ages in ascending order
    ages = ages.sort((a,b) => a - b);
// Create variable to serve as lowest age    
    let low = ages[0];
// Create variable to remove last element of the array and return it    
    let high = ages.pop();    
// Return a new array with the youngest age, oldest age, and difference between the two
    return new Array(low, high, (high - low));
    }


// Problem 2- Initials

// Function (abbrevName) and (name) are given
function abbrevName(name){
// Crete variable that is an array that is split into substrings
    let [first, last] = name.split(' ')
// Create variable that finds the first character of 'first' and converts it to upper case    
    let one = first.charAt(0).toUpperCase()
// Create variable that finds the first character of 'last' and converts it to upper case    
    let two = last.charAt(0).toUpperCase()
// Return the strings together with period in between     
    return one + '.' + two

}


// Problem 3- Needle in the hay stack

// Function (findNeedle) and parameter (haystack) are given
function findNeedle(haystack) {
// Return string plus the index of "needle" in parameter 
    return "found the needle at position " + haystack.indexOf("needle");
  }


// Problem 4- Count of positives sum of negatives

// Function (countPositivesSumNegatives) and parameter (input) are given
function countPositivesSumNegatives(input) {
// Create condition that if length of parameter is strictly equal to null or 0, return an empty array  
    if (input === null || input.length === 0)
          return [];
// Create variable to serve as placeholder for positive numbers          
    let positivePlace = 0;
// Create variable to serve as placeholder for negative numbers    
    let negativePlace = 0;
// Create for loop that loops through the entire array of integers    
    for(let i = 0; i < input.length; i++){
// Create condition that if the index value is greater than zero, add value to positive placeholder, otherwise add value to negative placeholder    
    if(input[i] > 0){positivePlace++;}
      else {negativePlace += input[i];}
    } 
// Create variable that serves as placeholder for new array    
      let placeHolder = [];
// Push all positive values, then all negative values into new array
      placeHolder.push(positivePlace);
      placeHolder.push(negativePlace);
// Return new array      
  return placeHolder;
}


// Problem 5- Remove duplicate

// Function (distinct) and parameter (a) are given
function distinct(a) {
// Create variable to serve as placeholder for new array
  let placeHolder= [];
// Create for loop to loop through length of parameter  
  for(i=0; i < a.length; i++){
// Create condition that if value is not found in new array, push value into new array
    if(placeHolder.indexOf(a[i]) === -1) {    
      placeHolder.push(a[i]);
    }
  }
// Return final array  
  return placeHolder;
}
