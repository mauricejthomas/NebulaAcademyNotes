// level 0
//Q0: Declare a string with the value equal to your name
//Q1: Given the string, 'WE ARE SHOUTING!' log 'we are shouting'
// level 1
//Q2: Declare a string and log its length 
//Q3: Given the string 'Hello World!', log the 6th character.
// level 2
//Q4: Given the string 'Welcome World?', replace the question mark with an exclamation
// level 3
//Q5: given any string, log the first and last characters
//level 4
//Q6: given the string 'welcome to my website', what is the character at the 7th index? 



// level 0
//QO
   let myName = "Maurice Thomas"
console.log(myName)
//Q1
let givenString = 'WE ARE SHOUTING'
console.log(givenString.toLowerCase())
// level 1
//Q2
let newString = "string"
console.log(newString.length)
//Q3
let given1String = "Hello World!"
console.log(given1String.charAt(6))
// level 2
//Q4
let given2String = "Hello World?"
console.log(given2String.replace('?','!'))
//Q5
let lastChar = given2String.length - 1
console.log(given2String.charAt(0), given2String.charAt(lastChar))
// level 4
//Q6
let finalString = "welcome to my website"
console.log(finalString.charAt(7))