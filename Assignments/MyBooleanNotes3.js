// Boolean Notes
// Definition: The Boolean object represents two values, either "true" or "false"

console.log(Boolean(-0))// false
console.log(Boolean(0))// false
console.log(Boolean(''))// false
console.log(Boolean(null))// false
console.log(Boolean(undefined))// false
console.log(Boolean(NaN))// false
console.log(Boolean(false))// false

console.log(Boolean(7))// true
console.log(Boolean(-7))// true
console.log(Boolean('saturday'))// true
console.log(Boolean([]))// true
console.log(Boolean({}))// true
console.log(Boolean(true))// true

console.log(Boolean(10/'10'))// true
console.log(10+'10')// '1010
console.log(Boolean(10+'10'))// true
console.log(10/'n')// NaN
console.log(Boolean(10/'n'))// false

// Comparison Operators (== vs ===)
// == loosely equal to
console.log(10 == '10')// true
// === strictly equal to
console.log(10 === '10')// false
console.log('10' === '10')// true
console.log(10 === 10)// true

let blackout = 12
console.log(blackout === 12)// true
console.log(blackout == 12)// true
console.log(blackout == '12')// true

// Bang Operator (opposite/not (!= vs !==))
console.log(7 != '7')// false
console.log(7 !== '7')// true
console.log(7 !== 7)// false

console.log(blackout != 12)// false
console.log(blackout !== 12)// false

let mannequin = false
console.log(mannequin !== false)// false
console.log(mannequin !== true)// true

// Logical Operators
// &&: 'and'
console.log(Boolean(1) && Boolean('string'))// true
console.log(Boolean(0) && Boolean(''))// false
console.log(Boolean(1) && Boolean(0))// false
console.log(Boolean('') && Boolean('hi'))// false

console.log(true && true)// true
console.log(true && false)// false
console.log(false && true)// false
console.log(false && false)// false

// ||: 'or'
console.log(Boolean(1) || Boolean('hi')) //true
console.log(Boolean(0) || Boolean('')) // false
console.log(Boolean(1) || Boolean(0)) //true
console.log(Boolean('') || Boolean('hi')) // true

console.log(true || true)// true
console.log(true || false)// true
console.log(false || true)// true
console.log(false || false)// false