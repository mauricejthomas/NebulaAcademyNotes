// Logical Operators
// &&: 'and'
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean('')) // false
console.log(Boolean('hi')) // true

console.log(Boolean(1) && Boolean('hi')) //true
console.log(Boolean(0) && Boolean('')) // false
console.log(Boolean(1) && Boolean(0)) // false
console.log(Boolean('') && Boolean('hi')) // false

console.log()

// ||: 'or'
console.log(Boolean(1) || Boolean('hi')) // true
console.log(Boolean(0) || Boolean('')) // false
console.log(Boolean(1) || Boolean(0)) // true
console.log(Boolean('') || Boolean('hi')) // true


// ARRAY NOTES

// Definition: Arrays are comma separated lists of indexed information,   can contain any data type, and are secretly actually objects

// Elements: values inside an array

// typeof

// Array.isArray()
console.log(Array.isArray([1, 2, 3])) //true
console.log(Array.isArray(7)) //false

let randomArray = [0, false, true, 8, 'hi', '', 700, 'hello']
console.log(randomArray)

let testScores = [100, 80, 56, 75, 68, 99, 90]
// Indexing using bracket notation: array[i]
console.log(testScores[2]) //56
console.log(testScores[0]) //100
console.log(testScores[testScores.length -1]) // 90


console.log(typeof 6) // 'number'
console.log(typeof 'hi') // string

// .length
console.log(testScores.length) // 7

// .indexOf()
console.log(testScores.indexOf(80)) // 1
console.log(testScores.indexOf(90)) // 6

// .pop() definition: removed the last element inside the array
console.log(testScores.pop())
console.log(testScores)
console.log(testScores.pop())
console.log(testScores)
console.log(testScores.pop())
console.log(testScores)

// .push() 

console.log(testScores.push())
console.log(testScores)
console.log(testSscores.push())
console.log(testScores)
console.log(testScores.push())
console.log(testScores)