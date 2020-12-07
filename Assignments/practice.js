let first = 'Maurice Thomas'
let second = "Maurice Thomas"
let third = `Maurice Thomas`

console.log(first, second, third)

let firstPlace = `Winning`
let secondPlace = firstPlace
let thirdPlace =firstPlace.replace(/n/g, '$')

console.log(thirdPlace)
console.log(`This new string is `)

function masterpiece (jiggy){
    let holla = []
    for (let i = 0 i < jiggy.length; i++){
        let blanka = jiggy[i]
        if(Array.isArray(blanka))
        holla = holla.concat(masterpiece(blanka))
    }
}

