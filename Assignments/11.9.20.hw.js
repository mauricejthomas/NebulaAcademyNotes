// Create a function that loops through any string passed into the function. 
// Log every character in this string 
// Once all characters are successfully logged, return the string, 'Done!'
function blueberryPie(loveLetter){
    for (let i = 1; i <= loveLetter.length - 1; i++){
        console.log(loveLetter[i])
    }
    return 'Done!'
}

console.log(blueberryPie('Lamborghini'))
// Create a function that takes in a number as a parameter. 
// This function will log from 1- any number passed in this function as an argument
// After all numbers are successfully logged, return the string, 'Done!'
function worldWide (anyNumber){ 
    for (let i = 0; i <= anyNumber; i++){
        console.log(i)
    }
    return 'Done!'
}
console.log(worldWide(17))

// Create a function that takes in an array as a parameter. 
// This function will Loop/iterate through the array and log every element inside the array
// After all elements are logged, return the string, 'Done!'
let macaroniPie = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function stingRay (litty){
    for (let i = 0; i < litty.length; i++){
        console.log(litty[i])
    }
    return 'We done!!'
}

console.log(stingRay(macaroniPie))
// Create a function that takes in a string. 
// This function will loop through the string and log the indices of each character in the string.
// After the indices are logged, return the string, 'Done!'
let snowBall = 'manifest destiny'

function doorKnob(indication){
    for (let i = 0; i <= indication.length; i++){
        console.log(indication[i])
    } return 'Done!'
}
console.log(doorKnob(snowBall))

// Create a function that only logs the even numbers from 1-10
// After the even numbers are logged, return the string, 'Done!'
let emancipationProclamation = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function riceCake (emancipationProclamation){ 
    for (let i = 0; i <= 17; i++2){
        console.log([i])
    }
    return 'Done!'
}
console.log(riceCake(emancipationProclamation))