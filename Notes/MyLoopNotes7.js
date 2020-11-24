// Loops
    // Definition: loops repeat lines of code until a parameter is met.
    // We can use a for loop to iterate over Strings or Arrays
    // We can use a for-in loop to iterate over an Object

// for loop syntax
    // declare a vaiable (i), and set it equal to our starting number
    // create a condition that stipulates when we stop the loop
    // indicate how the variable (i) will change each interation 
    // for (let i = 0; i < 10; i++){
    //     // do something
    // }

    // DIFFERENT TYPES OF LOOPS---------------------------------
    //     // Note: we will usually just use for or for-in loops
    // // while
    //     while(condition /* is true*/){
    //         // do something
    //     }
    // // do-while
    //     do{
    //         // do something 
    //     } while (condition /* is true*/)
    // // for
    //     for(var i = 0; i < arr.length; i++){
    //         // do something
    //     }
    // for-in
        // for(var key in object){
        //     // do something
        // }

// BREAK VS CONTINUE--------------------------------------------

// BREAK STATEMENT definition: The break statement terminates the current loop
function yaDig (waldo){
    for (let i = 0; i <= waldo; i++){
        console.log(i)
        if (i === 7){
            break
        }
    }
    return 'This function breaks out of the loop at 7'
}
console.log(yaDig(12))
//  CONTINUE STATEMENT definition: The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
// log after the continue statement
function keepItGoing (chump){
    for (let i = 0; i <= chump; i++){
        console.log(i)
        if (i === 12){
            continue;
        }
        
    }
    return 'This function will continue the loop without 12'
}
console.log(keepItGoing(15))

// LOOPING THROUGH A STRING
let philly = 'cheesesteak'
console.log(philly.length)

function hula (hoop){
    for(let i = 0; i <= hoop.length - 1; i++){
    console.log(hoop[i])
    }
    return 'Done!'
}
console.log(hula(philly))

function ratchet (mink){
    for(let i = mink.length -1; i >= 0; i--){
        console.log(mink[i])
    }
    return 'finito'
}
console.log(ratchet('Nebula academy saturday class'))

function lameDuck (shuffle){
    for (let i = 0; i <= shuffle.length - 1; i++){
        console.log(shuffle[i])
    }
    return `lets go!`
}
console.log(lameDuck('Macaroni'))

// STACK OVER FLOW: FOR LOOP---------------------------------

    // DO NOT RUN THIS 
    // STACK OVER FLOW
    // ctl -c to get out of it 
    // for (let i = 0; i >= 0; i++){
    //     console.log(i)s
    // }

// LOOPING NUMBERS-------------------------------------------
function zeroTo100 (){
    for (let i = 0; i <= 7; i++){
        console.log(i)
    }
    return 'done!'
}
console.log(zeroTo100(12))

// LOOPING THROUGH AN ARRAY------------------------------------
let washed = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function makeItWork (clean){
    for (let i = 0; i < clean.length; i++){
        console.log(clean[i])
    }
    return 'finished'
}
console.log(makeItWork(washed))

// WHILE LOOPS-----------------------------------------------

 // while
// while(condition /* is true*/){
//     // do something
// }

function mack (children){
    let fishy = 0
    while(fishy <= children){
        console.log(fishy)
        fishy ++
    }
    return 'it works!'
}
console.log(mack(12))

// DO-WHILE LOOP----------------------------------------------

// do{
//     // do something 
// } while (condition /* is true*/)
function drip (nasty){
    let blacka = 0
    do {
        console.log(blacka)
        blacka ++
    }
    while (blacka <= nasty)
    return 'its all good'
}
console.log(drip(17))

// NESTED LOOPS------------------------------------------------
let emptyNest = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9 ,10], 11, 12, [13]]
function fruitLoop (rinsed){
    for (let i = 0; i < rinsed.length; i++){
        let loveLetter = rinsed[i]
        if (Array.isArray(loveLetter)){
            for (let nope = 0; nope < loveLetter[nope]; nope++){
                let candyRain = loveLetter[nope]
                console.log(candyRain)
            }
        }
    }
    return 'does it work?'
}
 console.log(fruitLoop(emptyNest))

 let polygraph = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
 ]

 function who (what){
    for (let i = 0; i < what.length; i++){
        let boat = what[i]
        for (let yerr = 0; yerr < boat.length; yerr++){
            let knock = boat[yerr]
            console.log(knock)
        }
    }
}
console.log(who(polygraph))




