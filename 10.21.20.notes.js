// .shift() definition: method removes the first elment from an array and returns that removed element. This method changes the length of the array.
let vitamins = ['vitamin B', 'vitamin C', 'multivitamin', 'fish oil', 'zinc', 'folic acid', 'vitamin gummies'] 

// console.log(vitamins.shift()) //vitamin B
console.log(vitamins) //['vitamin C, 'multivitamin', 'fish oil', 'zinc', 'folic acid', 'vitamin gummies']
console.log(vitamins)

// .unshift()

console.log(vitamins.unshift('one a day'))
console.log(vitamins)

let shoes = ['nike', 'balenciaga', 'adidas', 'givenchy', 'reebok', 'crocs']

shoes.unshift('toms')
console.log(shoes) 

shoes.unshift('steve madden', 'ferrragamo', 'nine west', 'jordans')
console.log(shoes)

// .join() definition: Convert the elements of an array into a string
let vegetables = ['pizza', 'broccoli', 'brussle sprouts', 'asparagus', 'carrots', 'spinach', 'tomato', 'squash']
console.log(vegetables.join(' '))
console.log(vegetables.join(', '))

// .concat()
let foods = ['pizza', 'pasta', 'tacos', 'rice', 'burgers']
let snacks = ['cheetos', 'gold fish', 'doritos', 'popcorn']

console.log(foods.concat(snacks))

// .slice() definition: method returns a shallow copy of a portion of an array into a new array selected from start to end (end not included) 
let scents = ['peppermint', 'lavender', 'ylang ylang', 'vanilla', 'citrus']

console.log(scents.slice(0,2))
// scents = scents.slice(0,2)
console.log(scents)

console.log(scents.slice(-2))

// .splice() 
let socialMedia = ['facebook', 'twitter', 'instagram', 'linkedin', 'myspace']

console.log(socialMedia.splice(1, 1, 'snapchat'))
console.log(socialMedia)
console.log(socialMedia.splice(1, 0, 'tik tok'))
console.log(socialMedia.splice(-2, 0, 'tik tok'))
console.log(socialMedia)
