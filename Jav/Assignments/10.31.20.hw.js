// Problem 1
// Create a function called initials that has two parameters: firstName and lastName. 
// This function will return the initials of the first and last names passed into the function
let first = 'Maurice'
let last = 'Thomas'

function initials(firstName, lastName){
    return firstName[0] + lastName[0]
}
console.log(initials(first, last))

// Problem 2
// Create a function called bool that returns the Boolean of any argument passed into it

function bool(soup){
    return Boolean(soup)
}
console.log(bool(7 > 2))

// Problem 3
// Create a function called replaceA that takes in a string as a parameter. 
// This function will replace all a's in the string with a '-'
let mac = 'macaroni'
function replaceA(mac){
    return mac.replace(/a/g, "-")
}
console.log(replaceA(mac))

// Problem 4
// Create a function called characterAt that takes in a string as an argument
// This function will return the character at the 5th index of any string passed into the function

let corn = 'establishment'
function characterAt(home){
    return home.charAt(5)
}
console.log(characterAt(corn))

// Problem 5
// Create a function called squareRoot that takes in a number as a parameter. 
// This function will return the square roof of any number that is passed in as an argument

function squareRoot(aNumber){
    return Math.sqrt(aNumber)
}
console.log(squareRoot(81))

// Problem 6
// Create a function called theLength that takes in a string as a parameter. 
// This function will return the length of any string passed into this function

let popcorn = 'football'

function theLength(novice){
    return novice.length
}
console.log(theLength(popcorn))

// Problem 7
// Create a function called lastChar that takes in a string as a parameter.
// This function will return the last character of any string passed in as an argument
let money = 'mozzarella'

function lastChar(orange){
    return (orange[orange.length - 1])
}
console.log(lastChar(money))

// Problem 8
// Create a function called itConcats that takes in 2 parameter that are arrays.
// This function will combine the two arrays passed into this function and return the new combined array

function itConcats(array1, array2){
    return array1.concat(array2)
}
console.log(itConcats([1,3,5,7,9, ],[2,4,6,8]))

// Problem 9
// Create a function called lastTwoEle that takes in an array as a parameter. 
// This function will return the last two elements of any array passed into this function as an argument. 

function lastTwoEle(arrayLove){
    return `${arrayLove[arrayLove.length - 1]} , ${arrayLove[arrayLove.length - 2]}`
}
console.log(lastTwoEle(['knicks', 'nets', 'giants', 'jets', 'yankees', 'mets']))

// Problem 10
// Create a function called removeFirst that takes in an array as a parameter. 
// This function removes the first elements from any array that is passed into this function as an argument. 

function removeFirst(lastArray){
    lastArray.shift()
    return lastArray
}
console.log(removeFirst(['baseball', 'football', 'basketball', 'volleyball', 'puck']))

