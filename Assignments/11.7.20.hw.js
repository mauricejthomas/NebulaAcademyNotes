// Problem #1
// Create a function that checks the type of the argument as well as if the argument is an array or not
// IF it is a string, return the string passed in as the argument
// IF it is a number, return the number passed in as the argument
// IF it is a boolean, return the boolean passed in as the argument
// IF it is an array, return the array passed in as the argument
function typeOfData (guessWhatItIs){
    if (typeof(guessWhatItIs) === 'string'){
        return guessWhatItIs
    } if (typeof(guessWhatItIs) ==='number'){
        return guessWhatItIs
    } if (typeof(guessWhatItIs) === 'boolean') {
        return guessWhatItIs
    } if (Array.isArray(guessWhatItIs)){
        return guessWhatItIs
    }
}
console.log(typeOfData('yoo'))
console.log(typeOfData(17))
console.log(typeOfData(true))
console.log(typeOfData(['mon', 'tues', 'wed']))

// Problem #2
// Create a function that takes in 2 parameters: num1 and num2
// IF both of the numbers passed into the function as arguments are greater than 50, then return num1*num2
// IF both of the numbers are less then 50, add the two numbers : return num1+num2
// IF one of the numbers is greater than 50 and the other is less than 50, divide the two numbers: return num1/num2
function nickle (num1, num2){
    if (num1 > 50 && num2 > 50) {
        return num1*num2
    } if (num1 < 50 && num2 < 50) {
        return num1 + num2
    } if (num1 > 50 || num2 < 50) {
        return num1 / num2
    }
}
console.log(nickle(51, 52))
console.log(nickle(49, 48))
console.log(nickle(51, 49))


// Problem #3
// Create a function that that takes in 2 parameters that are numbers.
// IF the first number divided by the second number has a remainder, return the string: 'the remainder if (num1) divided by (num2) is (remainder)
// IF there is no remainder, return the string: '(num1) divided by (num2) has no remainders'
function twoParam (num1, num2){
    if ((num1 % num2) > 0) {
        return `the remainder of ${num1} divided by ${num2} is ${num1 % num2}`
    } else {
        return `${num1} divided by ${num2} has no remainders`
    }
}
 console.log(twoParam(28, 6))
 console.log(twoParam(28, 7))

// Problem #4
// Create a function that takes in a string. This function will calculate the length of any string passed into this function.
// IF the length of the string is an odd number, return the string: 'the length of (string) is an odd number'
// IF it is an even number, return the string: 'the length of (string) is an even number'

function stringCheese (string){
    if (string.length % 2 === 1) {
        return `the length of ${string} is an odd number`
    } else {
        return `the length of ${string} is an even number`
    }
}
 console.log (stringCheese('Supercalifragilisticexpialidocious'))
 console.log (stringCheese('Supercalifragilisticexpialidocous'))
// Problem #5
// Create a function that takes in an array. This function calculates the length of the array.
// IF the length of the array is even, remove the last element of the array, add a new element at the beginning of the array and return the new array
// IF the length of the array is od, remove the first element of the array, add a new element to the end of the array and return the new array
function zebra (arrow){
    if (arrow.length % 2 === 0){
        arrow.pop()
        arrow.unshift('Batman')
        return arrow
    } else { 
         arrow.shift()
        arrow.push('Robin')
         return arrow
    }
}

console.log (zebra(['dell', 'mac', 'hp', 'windows', 'microsoft', 'intel', 'chromebook']))
console.log (zebra(['mac', 'hp', 'windows', 'microsoft', 'intel', 'chromebook']))
