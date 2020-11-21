// Array Notes
// Definition: Arrays are comma seperated lists of indexed information, they are surrounded by square brackets [], can contain any data type, and are secretly actually objects.
// Elements: values inside an array

let shmack = []// empty array
console.log(shmack)

let randizzle = [0, 1, 711, undefined, false, true, '', 'yo']
console.log(randizzle)

// Nested Arrays
let emptyNest = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, [12]]
console.log(emptyNest)

// Array.isArray(parameter): checks to see if whatever passed in the Array.isArray() method is an array or not- results in true/false
console.log(Array.isArray([1, 2, 3]))// true
console.log(Array.isArray('hey'))// false
console.log(Array.isArray(12))// false

// Indexing using bracket notation: array[i]
// Definition: get specific elements from within an array by using bracket notation
let weekDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
console.log(weekDay[0])// sunday
console.log(weekDay[4])// thursday

// .length: returns the length of an array
let storeType = ['target', 'walmart', 'costco', 'bjs', 'wholefoods']
console.log(storeType.length)// 5
// Accessing the last element in the array
console.log(storeType.length - 1)// 4
console.log(storeType[storeType.length - 1])// wholefoods

// .indexOf(): returns the index of the element you pass into the method
let spices = ['cinnamon', 'nutmeg', 'garlic', 'paprika', 'parsley']
console.log(spices.indexOf('nutmeg'))// 1
console.log(spices.indexOf('parsley'))// 4

// .pop(): removes the last element inside the array
let bballPlayerNumbs = [23, 24, 3, 32, 7, 0, 11]
console.log(bballPlayerNumbs.pop())// 11
console.log(bballPlayerNumbs)// [ 23, 24, 3, 32, 7, 0 ]
console.log(bballPlayerNumbs.pop())// 0
console.log(bballPlayerNumbs)// [ 23, 24, 3, 32, 7 ]
console.log(bballPlayerNumbs.pop())// 7
console.log(bballPlayerNumbs)// [ 23, 24, 3, 32 ]

// .push(): method adds one or more elements to the end of an array and returns the new length of the array.
let liTowns = ['huntington', 'baldwin', 'farmingdale', 'elmont', 'roosevelt']
console.log(liTowns)// [ 'huntington', 'baldwin', 'farmingdale', 'elmont', 'roosevelt' ]
liTowns.push('westbury')
console.log(liTowns)// [ 'huntington', 'baldwin', 'farmingdale', 'elmont', 'roosevelt', 'westbury' ]

// .shift(): method removes the first element from an array and returns that removed element. This method changes the length of the array.
let sneakers = ['nike', 'reebok', 'adidas', 'puma', 'sketchers', 'vans']
console.log(sneakers.shift())// nike
console.log(sneakers)// [ 'reebok', 'adidas', 'puma', 'sketchers', 'vans' ]
console.log(sneakers.shift(), sneakers.shift(), sneakers.pop())
console.log(sneakers)// [ 'puma', 'sketchers']

// .unshift(): add new items to the beginning of an array
let candyGirl = ['skittles', 'snickers', 'reeses', 'mars', 'milky way', 'butterfinger']
candyGirl.unshift('payday')
console.log(candyGirl)// [ 'payday', 'skittles', 'snickers', 'reeses', 'mars', 'milky way', 'butterfinger']
candyGirl.unshift('whoppers', 'hershey')
console.log(candyGirl)// [ 'whoppers', 'hershey', 'payday', 'skittles', 'snickers', 'reeses', 'mars', 'milky way', 'butterfinger']

// .join(): Convert the elements of an array into a string
let rappers = ['jay z', 'nas', 'eminem', '2pac', 'biggie']
console.log(rappers.join(' '))// jay z nas eminem 2pac biggie
console.log(rappers.join(', '))// jay z, nas, eminem, 2pac, biggie
console.log(rappers.join('+'))// jay z+nas+eminem+2pac+biggie

// .concat(): merge two or more arrays
let eastCoast = ['cali', 'vegas', 'seattle', 'arizona', 'oakland']
let westCoast = ['nyc', 'miami', 'philly', 'dc', 'boston']
console.log(eastCoast.concat(westCoast))// ['cali', 'vegas','seattle', 'arizona','oakland', 'nyc', 'miami', 'philly', 'dc', 'boston']

// .slice(startingIndex, endingIndex): method returns a shallow copy of a portion of an array into a new array seleccted from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified
let pets = ['kitten', 'puppy', 'hamster', 'bunny', 'lizard']
console.log(pets.slice(1,3))// [ 'puppy', 'hamster' ]
console.log(pets.slice(-3))// [ 'hamster', 'bunny', 'lizard' ]

// .splice(startingIndex, deleteCount): method changes the contents of an array by removing or replacing existing elements
let classmates = ['anitria', 'daja', 'jasmine', 'chelsea', 'eddie', 'tauseef']
console.log(classmates)
// ex. 1
classmates.splice(1,0,'manami')
console.log(classmates)// [ 'anitria', 'manami', 'daja', 'jasmine', 'chelsea', 'eddie', 'tauseef' ]
// ex. 2
classmates.splice(2,0,'manami')
console.log(classmates)// [ 'anitria', 'daja', 'manami',  'jasmine', 'chelsea', 'eddie', 'tauseef' ]
// ex. 3
classmates.splice(-2,0,'manami')
console.log(classmates)// [ 'anitria', 'daja', 'jasmine', 'chelsea', 'manami',  'eddie', 'tauseef' ]
// ex. 4
classmates.splice(-2,2,'manami')
console.log(classmates)// [ 'anitria', 'daja', 'jasmine', 'chelsea', 'manami' ]












