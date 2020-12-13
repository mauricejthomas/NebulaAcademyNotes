//1. "we are software engineers at nebula academy"
let hwString = "we are software engineers at nebula academy"

console.log(hwString.indexOf('software'))

console.log(hwString.indexOf('s'))

console.log(hwString.indexOf('web'))

console.log(hwString.includes('z'))

console.log(hwString.includes('engineer'))

let hwSplit = hwString.split(' ')
console.log(hwSplit)

console.log(hwString.slice(7,15))

console.log(hwString.slice(-7))
//1. "we are learning new string methods"
let newHwString = "we are learning new string methods"

console.log(newHwString.length)

let lastChar = newHwString.length - 1
console.log(newHwString.charAt(lastChar))
//or
console.log(newHwString[newHwString.lenth - 1])

console.log(newHwString[5])

console.log(newHwString.replace(/a/g,"-"))

console.log(newHwString.toUpperCase())

console.log(newHwString.toLowerCase())
//1.
let iceCream = "chocolate"
console.log(iceCream)
console.log(`My favorite ice cream flavor is ${iceCream}`)
console.log('My favorite ice cream flavor is ' + iceCream)


