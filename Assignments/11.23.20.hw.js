let studentObject1 = {
    name: 'Tim',
    id: 1,
    age: 22
    }
    
let studentObject2 = {
    name: 'Lisa',
    id: 2,
    age: 19
    }
    

// Problem 1
// Using the first studentObject1 above, create a function that returns the string, 'Tim is 22 years old'

// We create a function (ying) and a parameter (yang)
function ying (yang){
// Create a variable that will serve as a placeholder for the name of the object     
    let slat = yang.name 
// Create a variable that will serve as a placeholder for the age of the object    
    let yeet = yang.age
// Return a string that inputs the 'place' and 'name' variables using template literal    
    return `${slat} is ${yeet} years old`
}
// Log the function with the original argument
console.log(ying(studentObject1))


// Problem #2
// Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not.
// if they are 21+, return the string, 'welcome, (name)!'
// if not, return the string, 'try again in a couple years'

// We create a function (mashed) with a parameter (potatoes)
function mashed (potatoes){
// Create a variable that accounts for the key value pair of name      
    let who = potatoes.name
// Create a variable that accounts for the key value pair of age    
    let howOld = potatoes.age
// Create condition that if the age is greater or equal to 21    
    if (howOld >= 21){
// Return string 'Welcome, with the name using template literal'        
        return `Welcome, ${who}!`
// Otherwise return string 'try again in a couple years        
    } else {
        return 'try again in a couple years' 
    }
}
// Log function with argument    
console.log(mashed(studentObject1))
console.log(mashed(studentObject2))


// Problem #3
// create a function that returns the keys in an array
// create a funciton that return the values in an array

// We create a function (burnt) with a parameter (toast)
function burnt (toast){
    return Object.keys(toast) //  or return Object.values(toast) for values
}
// Log function with argument
console.log(burnt(studentObject1)) 
console.log(burnt(studentObject2))


// Problem #4
// Create a function that deletes the 'id' key value pairs

// We create a function (ham) with a parameter (sandwich)
function ham (sandwich){
// We use delete method to remove key value pair 'id'    
    delete sandwich.id
// Return final object    
    return sandwich
}
// Log function with original argument
console.log(ham(studentObject1))
console.log(ham(studentObject2))


// Problem #5
// create a function that takes in the student objects above and their birthdates (come up with their birthdates) as parameters.
// This function will add a new birthdate key value pair to the object

// We create a function (newFlame) and use both object and birthdate as a parameter
function newFlame (object, birthdate){
// Create a new key value pair that states the key of 'DOB' will equal the value, or birthdate    
    object['DOB'] = birthdate
// Return the object    
    return object
}
// Log the function with the example object as the first parameter, and the date of birth
console.log(newFlame(studentObject1, '02/26/2020')) 
console.log(newFlame(studentObject2, '12/25/2020')) 
