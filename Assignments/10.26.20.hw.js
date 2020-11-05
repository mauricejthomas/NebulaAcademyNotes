// Problem 1
const name = 'Maurice'
function hey (name){
    return `yo ${name}`
}
console.log(hey('Maurice'))
    
// Problem 2
function adding(num1, num2){
    return num1 + num2
}
console.log(adding(25, 75))

// Problem 3
function random(names){
    return typeof names
}
console.log(random(384))

// Problem 4
let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']
function fourthOfJuly(fruityLove){
    return `the fourth fruit is ${fruityLove}`
}
console.log(fourthOfJuly(fruits[3]))

function lastFruit(pulp){
    return pulp.pop() //use indexing (.length-1)
}
console.log(lastFruit(fruits))

function quad(fourFruits){
    return fourFruits.slice(2,6)
}
console.log(quad(fruits))

function add(juicy){
    juicy.push('mango')
    return juicy
}
console.log(add(fruits))

function medley(fruits){
    return fruits.join(' and ')
}
console.log(medley(fruits))

// Problem 5
let names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy'] 
function students(studentNames){
    return 'Hello ' + studentNames[1] + ' and ' + studentNames[2] + '!'
}
console.log(students(names))
 
function estudio(nameThatStudent){
    return 'Hi ' + nameThatStudent[0] + ' and ' + nameThatStudent[5] + '!'
}
console.log(estudio(names))

function cowboy(eduardo){
    return `Howdy ${eduardo[6]}!`
}
console.log(cowboy(names))

function happyTime(nene){
    return `Happy Monday, ${nene[3]}!`
}
console.log(happyTime(names))

function tussif(seef){
    return `Hey ${seef[4]}!`
}
console.log(tussif(names))












