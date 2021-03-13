// Problem 1- Quarter of the year

const quarterOf = (month) => {
// Create condition that if it is the 3rd month or lower, return 1   
    if (month <= 3) {
      return 1
// Otherwise if it is the 6th month or less, return 2      
    } else if (month <= 6) {
      return 2
// Otherwise if it is the 9th month or less, return 3      
    } else if (month <= 9) {
      return 3
// Otherwise if it is the 12th month or less, return 4      
    } else if (month <= 12) {
      return 4
    }
}


// Problem 2- Multiplication table for number

// Function (multiTable) and parameter (number) is given
function multiTable(number) {
// Create variable to serve as placeholder    
    let placeHolder = '';
// Create for loop that loops through the     
    for(let i = 1; i <= 10; i++){
// Using template literal, write out the formula for one line and use newline character to go to the next line        
      placeHolder += `${i} * ${number} = ${i*number}\n`
    }
// Return sliced placeholder to tailor formula     
    return placeHolder.slice(0, -1)
}
    
// Problem 3- Will there be enough space?

// Function (enough) and parameters (cap, on, wait) are given
function enough(cap, on, wait) {
// Create condition that if the sum of the number of people on the bus and the people waiting is less than capacity, return 0 
    if (on + wait < cap){
    return 0;
// Otherwise return the sum of the number of people on the bus and the people waiting minus capacity  
    } else {
    return (on + wait) - cap;
    }
  }
  

// Problem 4- Reversed sequence

const reverseSeq = n => {
// Create variable to serve as placeholder    
    let placeHolder = [];
// Create for loop that loops through the array backwards    
      for (let i=n; i>0; i--) {
// Use push method to keep pushing values to end of array          
        placeHolder.push(i);
// Return new array        
        } return placeHolder;
    };

    
// Problem 5- Switch it Up!

// Use switch statement to return each number in words
function switchItUp(number) {
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    }
  }    


// Problem 6- A wolf in sheep's clothing

// Function (warnTheSheep) and parameter (queue) are given
function warnTheSheep(queue) {
// Create condition that if the index to the left of element is strictly equal to 'wolf', return first string    
    if (queue[queue.length -1] === "wolf") {
      return "Pls go away and stop eating my sheep";
// Otherwise, create variable that reverses the elements of the array and finds the index of wolf and return second string with template literal for sheep number
    } else {
      let placeInLine = queue.reverse().indexOf("wolf");
      return `Oi! Sheep number ${placeInLine}! You are about to be eaten by a wolf!`
    }
  }
