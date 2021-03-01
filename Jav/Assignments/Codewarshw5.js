// Problem 1- Larger Product or Sum
// Function (sumOrProduct) and parameters (array, n) are given.
function sumOrProduct(array, n) {
// Create variable for the array length 
  let north = array.length - 1
// Create variable that slices the array at a certain point and then sorts the sliced values from smallest to largest
  let  south = array.slice().sort((a, b) => a - b)
// Create placeholder for sum of n largest numbers
  let   east = 0
// Create placeholder for product of n smallest numbers
  let  west = 1;
// Create "for" loop that starts at zero and loops the length of n one value at a time
  for (let i = 0; i < n; i++) {
// Create addition assignment operator that adds the last n numbers and then adds them to placeholder (east)     
    east += south[north - i];
// Create multiplication assignment operator that multiplies the first n numbers and adds them to placeholder (west)   
    west *= south[i];
  }
// If the sum of the n largest numbers is higher, return "sum"
  if (east > west)
    return 'sum';
// If the product of the n smallest numbers is higher, return "product"
  if (east < west)
    return 'product';
// Otherwise return "same"  
  return 'same';
}
console.log(sumOrProduct)
// Problem 2- Simple directions reversal
// The function (solve) and parameter (arr) are given
function solve(arr){
// Create variable (up) that will serve as a placeholder for first array  
    let up = [];
// Create variable (down) that will serve as a placeholder for second array  
    let down = [];
// Create 'for' loop that starts at first index, and loops through the length of array until we reach the end  
    for (let i = 0; i < arr.length; i++){
// Create variable (forward) that returns the index of element ('on') in array     
      let forward = arr[i].indexOf('on ');
      console.log(forward)
// Push the first two words in the array into first variable ('[i] on')     
      up.push(arr[i].slice(0, forward));
  
      down.push(arr[i].slice(forward+2, arr[i].length))
      }
// Create condition that if the length of the first array (up) is greater than one  
    if (up.length > 1){
// Create a 'for' loop that starts at the beginning of the array, and loops through the length of the new first array (up) 
      for (let i = 0; i < up.length; i++){
// Create condition that if indice of first new array (up) is strictly equal to 'Left'     
        if (up[i] === 'Left ' ){
// Indice of first array equals 'Right'        
        up[i] = 'Right '
          } 
// Otherwise if indice of first new array (up) is strictly equal to 'Right'      
        else if (up[i] === 'Right ') {
// Then the indice in first array = 'Left'        
          up[i] = 'Left '
          }
        }
      }
    up.shift()
    up.push('Begin ')
// Placeholder variable
    let backward = [];
// Create for loop 
    for (let i = 0; i < up.length; i++){
      
      backward.push(up[i] + 'on' + down[i])
     }
// Return the array in reverse order
    return backward.reverse()
  }
// Problem 3
// Function (lifePathNumber) and parameter (dateOfBirth) are given
function lifePathNumber(dateOfBirth) {
// Couldn't figure this one out
// Problem 4
// The function (maxNumber) and parameter (n) are given
function maxNumber(n){
// Take the the string of n, divide it into substrings, turn it into an array, sort the elements of the array from least to greatest, reverse the order of elements and join them back together. Then return result as a number
  return Number(String(n).split("").sort().reverse().join(""));
}

