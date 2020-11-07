//Q1:
//Given the variable: let string = 'Nebula Academy'
//Create a function that checks to see if the letter 'a' exists in the string - if it does exist, return the string: 'The letter a exists in the string: (string)'
//If it does not exist, return the string: 'the letter a does not exist'

let stringy = 'Nebula Academy'
function doesAExist(cheesestring){
    if (cheesestring.indexOf('a' >= 0)){
        return 'The letter a exists in the string'
    } else {
        return 'the letter a does not exist'
    }    
}
console.log(doesAExist(stringy))

// Q2:
// Create a function that checks to see if the argument passed into this function is an array or not. If it is an array, return the string: 'it's an array!'
// If it's not an array, return the string: 'It's not an array!'
function IsItArray (cheetah){
    if (Array.isArray(cheetah) === true) {
        return 'It\'s an array!'
    } else {
        return 'It\'s not an array'
    }
}
 console.log(IsItArray(['1', '3', '5', '7', '9']))

// Q3:
// Create a function that checks to see if any number passed into this function is an even number or an odd number.
// If the number is an even number, return the string: '(number) is an even number'
// If the number is an odd number, return the string: '(number) is an odd number'
function evenOrOdd (cookie){
    if (cookie % 2 === 0){
        return `${cookie} is an even number`
    } else {
        return `${cookie} is an odd number`
    }
}
console.log(evenOrOdd(987654321))
 
// Q4:
// Create a function that checks the data type of any argument passed into this function. If the argument is a number, return the string: 'it's a number'
// If the argument is a string, return the string: 'it's a string'
// If the argument is a boolean, return the string: 'it's a boolean'
function checkDataType (curiousGeorge){
    if (typeof (curiousGeorge) === 'number') {
        return 'It\'s a Number'
    } if (typeof (curiousGeorge) === 'string'){
        return 'It\'s a String' 
    } if (typeof (curiousGeorge) === 'boolean') {
        return 'It\'s a Boolean'
    }
}
 console.log(checkDataType('snack')) 
 console.log(checkDataType(9 > 8))

// Q5:
// Create a function that takes in two numbers as parameters: num1 and num2
// If num1 is greater than num2, return the string: '(num1) is greater than (num2)'
// If num1 is less than num2, return the string: (num1) is less than (num2)'
// And if num1 and num2 are equal to each other, return the string, '(num1) and (num2) are equal'
function salad (num1, num2){
    if (num1 > num2){
        return `${num1} is greater than ${num2}`
    } if (num1 < num2) {
        return `${num1} is less than ${num2}`
    } if (num1 = num2){
        return `${num1} and ${num2} are equal`
    }
}
console.log(salad(384, 385))