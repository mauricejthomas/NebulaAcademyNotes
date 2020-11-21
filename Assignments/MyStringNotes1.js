// Strings
let singleQuote = 'single quotes';
let doubleQuote = 'double quote';
let backTicks = `backticks`;

console.log(singleQuote, doubleQuote, backTicks);//single quotes double quote backticks

// Adding Strings
let zeroString = "Yerr";
let oneString = zeroString;
let twoString = zeroString.replace(/r/g, "$")

console.log(twoString)//Ye$$

// Adding Strings Using `+`
console.log("this new string is " + oneString + " the original string is " + zeroString + " dont forget " + twoString)//this new string is Yerrthe original string is Yerr dont forget Ye$$

// Adding Strings Using Template Literal
console.log(`This new string is ${twoString} and it is whatever you want it to be, but it's not, it's ${oneString}`)//This new string is Ye$$ and it is whatever you want it to be, but it's not, it's Yerr

// Dynamic Solution
let illArray = ['love', "peace", `joy`, 'harmony'];
for (let i=0; i < illArray.length; i++){
    let jumpMan = illArray[i];
    console.log(`${jumpMan} is all we need`);//love is all we need peace is all wee need joy is all we need harmony is all we need
}
    // Test
console.log(illArray)//[ 'love', 'peace', 'joy', 'harmony', ]

// Non-Dynamic Solution
let haterArray = `love`

console.log(haterArray + ' is all we need')//love is all we need

// Special Characters 
let free = 'We run this town.';
let backBite = "\\";
let newWave = "\n";

console.log(free);//We run this town.
console.log(backBite);// \
console.log("\n");//
console.log("new line");// new line

console.log(free, backBite, newWave);//We run this town. \ 

// Accessing Indices Using Bracket Notation: string[i]
let nebs = "Monstrousity"
console.log(nebs)// Monstrousity

console.log(nebs[0])//M
console.log(nebs[5])//r
console.log(nebs[11])//y
console.log(`${nebs[0]}, ${nebs[5]}, ${nebs[11]}.`)//M, r, y.

let letterOne = nebs[0];
let letterTwo = nebs[5];
let letterThree = nebs[11];
console.log(letterOne + letterTwo + letterThree)//Mry

// .length Method: returns the length of a string
let name = `Theodore`
console.log(name.length)//8

let nebs2 = 'nebula academy'
console.log(nebs2.length);//14

// Accessing last character of a string using .length and indexing

let baker345432 = 'Dreams and Nightmares'
console.log(baker345432[baker345432.length - 1]);//s

// .charAt(i): Will return a character based on its index
let anyDay = 'we are champions'
console.log(anyDay.charAt(10))//m
console.log(anyDay.charAt(19))//empty
console.log(anyDay.charAt(6))//'  ' 

// .toUpperCase(i): Will convert any string to all uppercase
// .toLowerCase(i): Will convert any string to all lowercase
let android = `Android is a bummy phone`
console.log(android.toLowerCase())// anodrid is a bummy phone
console.log(android.toUpperCase())// ANDROID IS A BUMMY PHONE

// .replace(regex substring, new substring): replaces the first instance of a character (regex)
let blastOff = 'We are About to turn things up. in a way that you all have never seen before'
console.log(blastOff.replace('are', '$'))// We $ About to turn things up. in a way that you all have never seen before
console.log(blastOff.replace(/a/g, '$'))// We $re About to turn things up. in $ w$y th$t you $ll h$ve never seen before
console.log(blastOff.replace(/a/i, '$'))// We $re About to turn things up. in a way that you all have never seen before
console.log(blastOff.replace(/a/gi, `$`))// We $re $bout to turn things up. in $ w$y th$t you $ll h$ve never seen before

// .indexOf(searchValue): returns the index of the value you pass into the method
let radical = 'welcome to nebula academy'
console.log(radical.indexOf('l'));//2
console.log(radical.indexOf('z'));//-1
console.log(radical.indexOf('j'));//-1
console.log(radical.indexOf('nebula'))//11

//.includes(searchString):determines whether one stirng may be found within another string, returning true or false as appropriate
let biggieSmalls = 'Hello, its time for Instagram!'
console.log(biggieSmalls.includes('l'))//true
console.log(biggieSmalls.includes('z'))//false

//.split(separator): divides a String into an ordered list of substrings
let cars = 'beamer benz bentley aston martin ferrari porsche land rover'
console.log(cars.split())// ['beamer benz bentley aston martin ferrari porsche land rover']
console.log(cars.split(""))// ['b', 'e', 'a', 'm', 'e'...etc]
console.log(cars.split(``, 3))// ['b', 'e', 'a']
console.log(cars.split('e'))// ['b', 'am', 'r b' 'nz b'...etc]
console.log(cars.split(' '))// ['beamer', 'benz', 'bentley',...etc]

let Name = 'Maurice Thomas';
let fullName = Name.split(' ')
console.log(fullName,'SPLIT');// ['Maurice', 'Thomas']
let firstName = fullName[0]
let lastName = fullName[1]
console.log(firstName[0])//M
console.log(lastName[0])//T
console.log(firstName)// Maurice
console.log(lastName)// Thomas

// .slice(startingIndex, endingIndex): extracts a section of a string and returns it as a new string, without modifying the original string.
let python = 'I want to learn to code'
let ruby = python.slice(0,11)
console.log(ruby)// I want to l
console.log(`${ruby} makes me alot of money`)// I want to l makes me alot of money
console.log(python.slice(0, -6))// I want to learn t

// .substr(startingIndex, characterCount): returns a portion of the string, starting at the specified index and extending for a given number of characters afterwords.
let technology = 'figuring out how to code is important'
console.log(technology.substr(0, 7))// figurin
console.log(technology.substr(7, 7))// g out h
console.log(technology.substr(15, 9))// w to code
console.log(typeof technology.substr(25, 5))//  string

//Number(string number):turns string of number into a number
console.log(Number(`10`))//10
console.log(typeof '10')//string
console.log(typeof Number('10'))//number.

