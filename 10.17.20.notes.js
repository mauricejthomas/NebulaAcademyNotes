// Add
console.log(5+5)

// Subtract
console.log(10-2)

// Divide
console.log(60/3)

// Multiply
console.log(3*7)

// Compare
console.log(4 > 7)
console.log(5 < 15)
console.log(7 >= 7)
console.log(8 <= 9)

// Modular % definition: operator (%) returns the division remainder
console.log(12 % 5)
console.log(15 % 3)
console.log(10 % 3)

// Math methods
// Math.sqrt() definition: Return the square root of a number
console.log(Math.sqrt(8))
console.log(Math.sqrt(16))
console.log(Math.sqrt(25))

// Math.pow(base, exponent)
console.log(Math.pow(2, 3))
console.log(Math.pow(7, 20))

// Math.round()
console.log(Math.round(3.14))
console.log(Math.round(87/15))
console.log(87/15)

// Math.ceil()
console.log(Math.ceil(1.1))
console.log(Math.ceil(1.000000000000001))
console.log(Math.ceil(19.01247502))

// Math.floor()
console.log(Math.floor(3.14))
console.log(Math.floor(15/7))
console.log(Math.floor(3.9))
let num = Math.floor(15/7)

console.log(15 % 7)
let remainder = 15 % 7

console.log('15/7 is ' + num + ' with a remainder of ' + remainder)

// Math.abs()
console.log(Math.abs(15-6))
console.log(6-15)
console.log(Math.abs(6-15))

// Math.min()
console.log(Math.min(7, 20, 4, 1, 25, 7, 3, 3.14, 24, -1, -100, -7))

// Math.max()
console.log(Math.max(7, 20, 4, 1, 25, 7, 3, 3.14, 24, -1, -100, -7))

// Math.random()
console.log(Math.random()) //random numbers between 0-1 in decimals
console.log(Math.random() * 100.90) //random numbrs between 0-100 in decimals
console.log(Math.floor(Math.random() * 100)) //random whole numbers between 1-100

// Increasing and decreasing variables
let i = 7
console.log(i) //7
i = i + 1
console.log(i) //8
i += 1
console.log(i) //9
// i++
i++
console.log(i) //10

// i--
i = i - 1
console.log(i)
i -= 1
console.log(i)
i--
console.log(i)
// i += 1
// i -= 1
// i = i +1
// i = i -1


// BOOLEAN NOTES
// Boolean Definition: The Boolean object represents two values, either "true" or false"
console.log(Boolean(3>1)) //true
console.log(Boolean(3)) //true
console.log(Boolean('saturday')) //true
console.log(Boolean(7)) //true
console.log(Boolean(true)) //true

console.log(Boolean(0)) //false
console.log(Boolean(-0)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean('')) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(false)) //false

console.log(10/'10') //true
console.log(10/'10') //1
console.log(10+'10') //'1010'
console.log(Boolean(10+'10')) //true
console.log(Boolean(10/'n')) //false

console.log(Number('10'))

// COMPARISON OPERATORS
// == vs ===

// == loosely equal to
console.log(10 == '10') //true

// === strictly equal to
console.log(10 === '10') //false
console.log(10 === 10) //true

let numb = 9
console.log(numb === 9) //true

// != vs !==
console.log(10 != '10') //falsse
console.log(10 !== '10') //true
console.log(10 !== 10) //false

console.log(numb !== 9) //false
console.log(numb != 9) //false

let candy = false
console.log(candy !== false) //false
console.log(candy !== true) //true
