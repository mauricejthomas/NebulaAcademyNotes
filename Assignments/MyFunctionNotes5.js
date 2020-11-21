// Function Notes------------------------------------------
// Definition: A JavaScript function is a reusable block of code designed to perform a particular task.
// Note: 'invoking' or 'calling' a function makes it execute its code, this is done by having parenthesis after the function name ( example() )
// Note: A function can be called many times, each time with an output based on arguments that are passed in

// Why even use a function?
    // Reduces amount of code that is required
        // This is helpful for a few reasons:
            // Reduces potential for error
            // Simplifies our programs 
            // Gives potential for upgrades & changes 

// Note: functions dont inherently write to the CLI, we still need to console.log the invocation of the function

// SYNTAX---------------------------------------------------

// Multi line syntax:
   // function functionName(parameters){
        // do something 
        // return something
// }
// Syntax for invocation with an argument
// console.log(functionName(arguments))


// Single line syntax (unusual):
   // function functionName(parameters){return x}

// PARAMETERS VS ARGUMENTS----------------------------------

// Parameters:
    // A function can require parameters
    // A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
    // The parameters are the values that are between the parenthesis when declaring the function
    // They dont have their own value, they receieve their value from the arguments when the function was called

// Arguments:
    // If a function has parameters, it needs to take in arguments
    // These arguments are passed in the funtion when the function is called/invoked

// Default Parameters---------------------------------------
function examfunct (pareezy = 1){
    return pareezy
}
console.log(examfunct())// 1

function nombre (firstName, middleName, lastName = ' '){
    return firstName[0] + middleName[0] + lastName[0]
} 
console.log(nombre('Maurice', 'Thomas'))// MT
console.log(nombre('Maurice','Jason','Thomas'))// MJT

// Types of Functions--------------------------------------

// Basic Function
// function functionName (parameters){
//     // tell the function what to do
// }
// functionName(args)

// Anonymous Function
// let anonymousFunction = function(params){
//     //tell the fucntion what to do
// }
// anonymousFunction(args)

// // Arrow Function (ES6)
// let arrowFunction = (params) => {
//     // block of code -> what the function does
// }
// arrowFunction(args)
// --------------------------------------------------------
// Immediately Invoked Function Expression (IIFE)
var iffy = 'This string is dope'
console.log(function(paragraph){
    return paragraph.replace(/i/g, '$')
}(iffy))

// IIFE for ES6
console.log(((peanutButter) => {
    return peanutButter.replace(/ /g,'$')
})(iffy))

// IIFE without parameters, using ES6 and is anonymous
console.log((() => {
    return 'mimosa'
})())

// FUNCTION EXAMPLE 1

// Function Goal: return the sum of two numbers 
// adding -> name of the function
// num1 -> first parameter
// num2 -> second parameter
// return -> JS keyword used inside a funtion to return the evaluation of the function
// adding(5, 10) -> invoking/calling the function
// the numbers 5 and 10 -> are the arguments 
function adding(num1, num2){
    return num1 + num2
}
console.log(adding(5,10))// 15
console.log(adding(7,12))// 19
// FUNCTION EXAMPLE 2

//  Function Goal: return the string: 'hi Tefe'
// welcome -> function name
// name -> parameter
// return -> JS keyword used inside a funtion to return the evaluation of the function
// welcome('Tefe') -> calling/invoking the welcome() function with the string 'Tefe'
// 'Tefe' -> argument 
function welcome(name){
    return `hi ${name}`
}
console.log(welcome('Tefe'))// hi Tefe
console.log(welcome('Eddy'))// hi Eddy
console.log(welcome('Daja'))// hi Daja
// FUNCTION EXAMPLE 3

// let cities = ['New York City', 'Amsterdam', 'Miami', 'Chicago', 'Madrid', 'London']

// favCities -> name of the function
// individualCity -> parameter
// ${individualCity} -> individualCity is pointing to the individual cities inside the cities array
// cities[0], cities[1], cities[2]... -> represent the individual cities in the cities array
// favCities() -> the invovcation/calling of the favCities() function 
let cities = ['NYC', 'Boston', 'Miami', 'Chicago', 'Houston', 'LA']
function favCities(individualCity){
    return `I would like to visit ${individualCity} one day, if I can afford it`
}
console.log(favCities(cities[3]))// I would like to visit Chicago one day, if I can afford it
console.log(favCities(cities[4]))// I would like to visit Houston one day, if I can afford it
console.log(favCities(cities[5]))// I would like to visit LA one day, if I can afford it
console.log(favCities(cities[6]))// I would like to visit undefined one day, if I can afford it

let rumPunch = ['China', 'Russia', 'Spain']
console.log(favCities(rumPunch[0]))// I would like to visit China one day, if I can afford it
console.log(favCities(rumPunch[1]))// I would like to visit Russia one day, if I can afford it
console.log(favCities(rumPunch[2]))// I would like to visit Spain one day, if I can afford it
// FUNCTION EXAMPLE 4

// fourthBity -> name of the function
// bityArray -> parameter of the fourthcity function
// bityArray[3] -> points to the element 'Chicago' in the cities array
// fourthBity(cities) -> invocation/calling of the fourthCity function
// cities -> argument that you are calling the fourthCity function with
function fourthBity(bityArray){
    return 'The fourth city is ' + bityArray[3]
}
console.log(fourthBity(cities))// The fourth city is Chicago
// FUNCTION EXAMPLE 5

// let computers = ['Mac', 'Acer', 'Dell', 'ThinkPad', 'Lenovo', 'HP']
// let weather = ['sunny', 'rainy', 'cloudy', 'snowy']
// // Function Goal: Remove the first element in and array
// // removeIt -> function name 
// // mozzy -> parameter
// // cheese.shift() -> block of code inside the function that is removing the first element of the cities array
// // removeFirstElement(cities) -> invoking/calling the function with the cities array
// // cities -> argument we are calling the removeFirstElement function with
let computers = ['Mac', 'Acer', 'Dell', 'ThinkPad', 'Lenovo', 'HP']
let weather = ['sunny', 'rainy', 'cloudy', 'snowy']
function removeIt(mozzy){
    mozzy.shift()
    return mozzy
}
console.log(removeIt(computers))
console.log(removeIt(weather))

