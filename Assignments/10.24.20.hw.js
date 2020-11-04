let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

console.log(days.length)

console.log(days[3])

console.log(days.shift())
console.log(days)

days.unshift('Sunday')
console.log(days)

console.log(days.pop())
console.log(days)

days.push('Saturday')
console.log(days)

days.splice(4, 1, 'Friday Junior')
console.log(days)   

let favDay = daysslice(0,1)
console.log(favDay)
console.log('My favorite day of the week is ' + favDay)

let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone.concat(laptop))