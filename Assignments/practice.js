/*let first = 'Maurice Thomas'
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
    for (let i = 0; i < jiggy.length; i++){
        let blanka = jiggy[i]
        if(Array.isArray(blanka))
        holla = holla.concat(masterpiece(blanka))
    }
}
*/

function lifePathNumber(dateOfBirth) {
    // Create variable that is an array      
      let ([year, month, day]) = dateOfBirth.split("-")
      
      console.log([year, month, day])
      year = sum(String(year).split("").map(Number))
      month = sum(String(month).split("").map(Number))
      day = sum(String(day).split("").map(Number))
      return sum([year,month,day])
    }