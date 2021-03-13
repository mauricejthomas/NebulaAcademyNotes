// Problem 1- What is between?
function between(a, b) {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }




// Problem 2- Tip Calculator
function calculateTip(amount, rating) {
    switch(rating.toLowerCase()){
      case "terrible":return 0;
      case "poor":return Math.ceil(amount * 0.05);
      case "good":return Math.ceil(amount * 0.1);
      case "great":return Math.ceil(amount * 0.15);
      case "excellent":return Math.ceil(amount * 0.2);
      default:return "Rating not recognised";
    }
  }




// Problem 3- Draw Stairs
function drawStairs(n) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
      result[i] = `${' '.repeat(i)}I`;
    }
    
    return result.join('\n');
  }



// Problem 4- Remove String Spaces
function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
  }



// Problem 5- TwoSum
