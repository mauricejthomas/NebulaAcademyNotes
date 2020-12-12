// OBJECT NOTES---------------------------------------

// Definition:  An unordered collection of related data with key-value pairs. 
// Objects have key-value pairs: collection of related data unlike arrays, the key-value pairs inside of an object are not asoociated with indicies 
// Syntax:
let obj1 = {} // an empty object
let obj2 = {key: 'value'} // an object on one line

// // Most common syntax:
let obj3 = {
    key1: 'value', 
    key2: 'value'
}
console.log(obj1) // {}
console.log(obj2) // { key: 'value' }
console.log(obj3) // { key1: 'value', key2: 'value' }

// Notations:-------------------------------------------
   // Dot notation 
       // Great for quickly accessing keys and getting their values
   // Bracket notation
       // Great in all scenarios, just a little more complex 
       // CAN take in variables or strings 
       // MUST be used in a for in loop
// Example
let obj4 = {
    name: 'Sharmania Greene',
    age: 30,
    height: `5'10"`,
    birthdate: new Date(1995, 11, 17)
    }

// ACCESSING VALUES--------------------------------

// Dot Notation
console.log(obj4.name) // Sharmania Greene
console.log(obj4.age) // 30
console.log(obj4.height) //5'10"

// Bracket Notation
console.log(obj4['name']) // Sharmania Greene
console.log(obj4['age']) // 30
console.log(obj4['height']) //5'10"

// ADDING KEY-VALUE PAIRS-----------------------------

 obj4['email'] = 'sharmaniagreene@gmail.com'
console.log(obj4)

// DELETING KEY-VALUE PAIRS--------------------------

delete obj4.height
console.log(obj4)
// or
delete obj4['height']
console.log(obj4)

// If key-value pair does not exist, it'll return undefined
console.log(obj4.height) 

// OBJECT.KEYS() definition: method returns an array of a given object's own enumerable property names

let car = {
    make: 'Honda',
    model: 'Accord',
    year: '2020',
    vin: '1HGCV943472987',
    color: 'black',
    engine: 'V8'
}
console.log(Object.keys(car))// [ 'make', 'model', 'year', 'vin', 'color', 'engine' ]


// OBJECT.VALUES()-------------------------------------

console.log(Object.values(car))// [ 'Honda', 'Accord', '2020', '1HGCV943472987', 'black', 'V8' ]

// FOR IN LOOP--------------------------------------
let car2 = {
    name: 'mercedes benz',
    model: 'E350W',
    year: 2021,
} 

function loopObjKeys (object){
    for (let key in object){
        console.log(key)
    }
}
loopObjKeys(car2)

function loopObjValues (object){
    for (let key in object){
        console.log(object[key])
    }
}
loopObjValues(car2)

// PRACTICE PROBLEMS----------------------------------------

// create your own object with these key-value pairs: name, age, city
// create a funciton that adds 1 to your age 
// create a function that returns the keys in an array
// create a funciton that returns the values in an array format

let customer1 = {
    name: 'Mary',
    id: 1,
    items: ['water bottle', 'camera', 'book', 'hairbands', 'shirt'], 
}

//  create a funciton that counts the amount of items the customer bought. 
// return the string: (name) bought (number) items 


let animals = {
    kangaroo: {
        name: 'Joey',
        age: 10
    },
    camel: {
        name: 'Cathy',
        age: 2
    },
    cow: {
        name: 'Sean',
        age: 15
    },
    turtle: {
        name: 'Victoria',
        age: 100
    }  
}

// // create a funciton that loops through the animals object 
// // and logs the string for each object: (name) the (animal) is (age) years old. 

























