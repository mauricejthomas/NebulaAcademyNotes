// Problem 1

function differenceInAges(ages){

    ages = ages.sort((a,b) => a -b);
    
    let youngest = ages[0];
    let oldest = ages.pop();
    
    
    return new Array(youngest, oldest, (oldest-youngest));
    }


// Problem 2
function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial

}

// Problem 3
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

// Problem 4
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0)
          return [];
    let countOfPositives = 0;
    let sumOfNegatives = 0;
    for(let i = 0; i < input.length; i++){
    if(input[i] > 0){countOfPositives++;}
      else {sumOfNegatives += input[i];}
    } 
      let arr = [];
      arr.push(countOfPositives);
      arr.push(sumOfNegatives);
    return arr;
    }

// Problem 5
function distinct(a) {
    var uniquea= [];
                 for(i=0; i < a.length; i++){
     if(uniquea.indexOf(a[i]) === -1) {
         uniquea.push(a[i]);
     }
 }
 return uniquea;
}
