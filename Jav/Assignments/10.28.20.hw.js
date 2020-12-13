// Problem 1
function sumNum(num1, num2){
    return num1 + num2
}
console.log(sumNum(32, 33))

// Problem 2
function divisionRemainder(num1, num2){
    let answer = (num1/num2)
    let answer2 = (num1%num2)
    return `${num1} divided by ${num2} is ${answer} with a remainder of ${answer2}`
}
console.log(divisionRemainder(7687, 23))

// Problem 3
function randomNums(){
    return (Math.random() * 1000);
}
console.log(randomNums());

// Problem 4
function theType(dataType){
    return typeof(dataType);
}
console.log(theType(NaN));

// Problem 5
function isItArray(arrayChecker){
    return Array.isArray(arrayChecker)

}
console.log(isItArray(false))

// Problem 6
let stringer = 'Stringer Bell'
function fifthIndex(boujie){
    return boujie[5]
}
console.log(fifthIndex(stringer))

// Problem 7
let first = 'Maurice'
let last = 'Thomas'
function myInitials(firstName, lastName){
    return firstName[0] + lastName[0]
}
console.log(myInitials(first, last))

// Problem 8
let flowerpot = 'carnation'
function upperCase(meanie){
    return meanie.toUpperCase()
}
console.log(upperCase(flowerpot))

// Problem 9
let ugly = 'handsome'
function lastChar(decent){
    return decent[decent.length-1]
}
console.log(lastChar(ugly))

// Problem 10
let countries = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']
function lastElement(comebackKid){
    return `the last element in the array is ${comebackKid}`
}
console.log(lastElement(countries[5])) //use indexing (.length - 1)

function favoriteCountry(poopyHead){
    poopyHead.unshift('United States')
    return `My favorite country is ${poopyHead[0]}`
}
console.log(favoriteCountry(countries))

