

// LOOPING THROUGH AN ARRAY
let numArray = [12, 3, 5, 12, 5, 23, 8, 4] 

function iterateArrays (practiceArray){
    for (let i = 0; i <= practiceArray.length - 1; i++){
         

         console.log(practiceArray[i]) 
     }
     return 'It is done!!'
 }

 console.log(iterateArrays(numArray))

 
 
 
 
 
 
 
 
 
 
 // given a string: let 'software decelopment'
// create a function that iterates through the string and log each chracter 
 let practiceString = 'software development'

// Create a function that takes in a string.
// This function will loop through the string and log the indices of each character in the string.
// After the indices are logged, return the string, 'Done!'
function StringCharacters (param){
    for (let i = 0; i < param.length; i++){
        console.log(param[i]) 
    } return 'Done!'
}
console.log(StringCharacters('another string'))
//a
// n
// o
// t
// h
// e
// r

// s
// t
// r
// i
// n
// g
// Done!

// Create a function that only logs the even numbers from 1-10
// // After the even numbers are logged, return the string, 'Done!'
function EvenNum (){ 
    for (let i = 0; i <= 10; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    } 
    return 'Done!'
}
console.log(EvenNum())
//0
// 2
// 4
// 6
// 8
// 10
// Done!








