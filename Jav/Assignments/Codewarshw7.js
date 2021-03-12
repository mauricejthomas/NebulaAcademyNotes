// Problem 1- Find the first non-consecutive number
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

// Problem 2- Can we divide it?
let isDivideBy = (number, a, b) => {
    if (number % a === 0 && number % b === 0) {
      return true
    } else {
      return false
    }
  }
  
// Problem 3- Short Long Short
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }

// Problem 4- Check the exam
function checkExam(array1, array2) {
    var score = 0;
      
      for (var i = 0; i < array1.length; i++){
      
        if (array1[i] == array2[i]) {
        
        score += 4;
        
        }
        
        else if (array2[i] === ""){
    
          score += 0
      
        }
        
         
        else {
        
        score -= 1
        
        }
    
      
      }
      
      if (score < 0) {
      
        score = 0
        
      }  
     
     return score
     
    }

    
// Problem 5- Reversed Strings
function solution(str){
    return str = str.split('').reverse().join('');
      
    }
    
// Problem 6- Convert number to reversed array of digits
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }    