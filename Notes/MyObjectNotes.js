

// Dot Notation
console.log(obj4.name)
console.log(ob4.age)
console.log(obj4.height)

// Bracket Notation
console.log(obj4['name'])
console.log(obj4['age'])
console.log(obj4['height'])

// Adding Key-Value Pairs
obj4['email'] = 'sharmaniagreene@gmail.com'
console.log(obj4)

// Deleting Key-Value Pairs
delete obj4.height
delete obj4['height']

console.log(obj4)
console.log(obj4.height)

console.log(new Date())
console.log(new Date(1995, 11, 17))

// Object.keys(): method returns an array of a given object's own enumerator
let car = {
    color: 'black',
    engine: 'v8',
    make: 'Honda',
    model: 'Accord',
    year: '2020',
    vin: '1HGCV943472987',
    color: 'black',
    engine: 'V8'
}
console.log(Object.keys(car))// ['make', 'model', 'year', 'vin', 'color', 'engine' ]

// Object.values()
console.log(Object.values(car))
// ['Honda', 'Accord', '2020', '1HGCV943472987', 'black', 'V8' ]