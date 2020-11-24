// Number Notes

// Add (+)
console.log(5+5)//

// Subtract (-)
console.log(10-2)//8

// Divide (/)
console.log(100/20)//5

// Multiply (*)
console.log(25*4)

// Compare (<, >, <=, >=)
console.log(9 < 2)// false
console.log(9 > 2)// true
console.log(7 <= 7)// true
console.log(8 >= 9)// false

// Modular (%): operator (%) returns the division remainder
console.log(12 % 5)// 2
console.log(15 % 3)// 0
console.log(10 % 3)// 1

// MATH METHODS

// Math.sqrt(): Return the square root of a number
console.log(Math.sqrt(7))// 2.6457513110645907
console.log(Math.sqrt(81))// 9
console.log(Math.sqrt(49))// 7

// Math.pow(base, exponent)
console.log(Math.pow(3, 4))// 81
console.log(Math.pow(7,11))// 1977326743

// Math.round(): returns the value of a number rounded to the nearest integer
console.log(Math.round(7.827))// 8
console.log(Math.round(98/21))// 5
console.log(Math.round(2.7))// 3

// Math.ceil(): rounding up no matter what
console.log(Math.ceil(1.01))// 2
console.log(Math.ceil(11.001))// 12

// Math.floor(): rounding down no matter what
console.log(Math.floor(7.99))// 7
console.log(Math.floor(19/2))// 9
console.log(Math.floor(12.5))// 12

let numb = Math.floor(29/3)
console.log(29 % 3)//2
let remy = 29 % 3
console.log('29/3 is ' + numb + ' with a remainder of ' + remy  )// 29/3 is 9 with a remainder of 2

// Math.abs(): returns the absolute number. Will return positive numbers only
console.log(Math.abs(29-4))// 25
console.log(4-29)// -25
console.log(Math.abs(4-29))// 25

// Math.min(): returns the minimum number
console.log(Math.min(13, 8, 27, 36, 42, 123, 7, 19))// 7

// Math.max(): returns the maximum number
console.log(Math.max(13, 8, 27, 36, 42, 123, 7, 19))// 123

// Math.random()
console.log(Math.random())// random numbers between 0-1 in decimals
console.log(Math.random() * 100)// random numbers between 0-100 in decimals
console.log(Math.floor(Math.random() * 100))// random whole numbers between 0-100 rounded down to the nearest whole number
console.log(Math.ceil(Math.random() * 100))// random whole numbers between 0-100 rounded up to the nearest whole number

// Increasing and decreasing variables
let i = 21
console.log(i)// 21

i = i + 4
console.log(i)// 25

i += 5
console.log(i)// 30

i++
console.log(i)// 31

i = i - 6
console.log(i)// 25

i -= 5
console.log(i)// 20

i--
console.log(i)//19


