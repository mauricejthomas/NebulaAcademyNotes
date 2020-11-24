// Conditional
    // Note: 'if' or 'else if' or 'else' statement
    // Definition: 
        // Executes a statement if a specefied condition is met (true/truthy). 
        // If that condition is false, another statement or lack there of is executed.

// Syntax-----------------------------------------------------
// 'IF' STATEMENT
// let condition1_is_met
// let condition2_is_met
// let condition3_is_met

// if (condition1_is_met){
//     // execute this code if condition1 IS met/true
// }

// // 'IF'/'ELSE' STATEMENT

// if (condition1_is_met){
//     // execute this code if condition1 IS met/true
// } else {
//     // execute this code if condition1 is NOT met/true  
// }

// // 'IF' VS 'ELSE IF' VS 'ELSE' statements

// if (condition1_is_met){
//     // execute this code if condition1 IS met
// } else if (condition2_is_met){
//     // execute this code if condition2 IS met
//     // there can be infinite else if statements 
// } else if (condition3_is_met) {
//     // execute this code if condition3 IS met
// } else {
//     // execute this code if all conditions above are NOT met
// }

// Note: Comparison operators go hand-in-hand with conditionals
    // >
    // <
    // >=
    // <=
    // ==
    // ===
    // !=
    // !==
    // &&
    // ||
    // !

function evenNumberOrNah (digital){
    if (digital % 2 === 0){
        return `the number ${digital} is an even number`    
    } else {
        return `the number ${digital} is an odd number`
    }
}
console.log(evenNumberOrNah(7))// the number 7 is an odd number
console.log(evenNumberOrNah(12))// the number 12 is an even number

let blue = 'democrat'
let red = 'republican'
function politics(chooseASide){
    if (chooseASide.indexOf('l') === -1){
        return 'l does not exist'
    } else {
        return 'l does exist'
    }
}
console.log(politics(blue))// l does not exist
console.log(politics(red))// l does exist

function partyTime(chooseASide){
    if (chooseASide.indexOf('m') >= 0){
        return 'the letter is there'
    } else {
        return 'the letter is not there'
    }
}
console.log(partyTime(red))// the letter is not there
console.log(partyTime(blue))// the letter is there

// SCOPE
// Global variables are those declared outside of a block
// Local variables are those declared inside of a block


// Local variables vs global variables
// Right now, this comment is in the global space (global scope)
// Below is a variable in the global scope:
let globalScopeVariable = 'Hi, I am in the global scope';

function localVariable(globalVariable){
    // This comment is in a local scope
    // Below is a variable that's in a local scope;
    let localScopeVariable = 'Hi, I am in this functions local scope'
    if(globalVariable){
        return globalScopeVariable
    }
    if(localScopeVariable){
        return localScopeVariable
    }
}
console.log(localVariable())