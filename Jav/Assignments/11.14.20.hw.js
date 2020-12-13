// Part 1


let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
// For each problem, use the nested array above and….


// Problem #1
// Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays.
// Return the string, 'Done!' at the end

// We create the function (drippy) with a parameter (peanut)
function drippy (peanut){
// We create a 'for' loop that begins at zero, and ends at the last number in the first array
    for (let i = 0; i < peanut.length; i++){
// Create variable to account for each looped number in the first array       
        let live = peanut[i]
// Check to see if each number is in the array, which they all are except zero        
        if (Array.isArray(live)){
// Create a for loop that loops through each number in the nested array            
            for (let j = 0; j < live.length; j++){
// Create variable to account for each looped number in the nested array               
                let lingo = live[j]
// Log all numbers in the nested array                
                console.log(lingo)

            }
// Otherwise log all numbers in the first array            
        } else {
            console.log(live)
        }
    }
// Return 'Done!'    
    return 'Done!'    
}
// Log the function with the inital argument (nested)
console.log(drippy(nested))


// Problem #2
// Create a function that adds only the ODD numbers inside the NESTED arrays.
// Return the total

// We create a function (proper) with a paramater (gentlePerson)
function proper (gentlePerson){
// Create a create a variable (work) to use as a placeholder that the numbers passed through the loop will be added to    
    let work = 0
// Create a 'for' loop that will start at index 0 of the first array, and end with the last index of the first array, it will loop through each element   
    for (let i = 0; i < gentlePerson.length; i++){
// Create a variable to account for each number inside of the first array       
        let checker = gentlePerson[i]
// Create a 'for' loop that will start at index 0 of the nested array, and end with the last index of the nested array, it will loop through each element       
        for (let j = 0; j < checker.length; j++){
// Create a variable to account for all numbers inside the nested array            
            let lincoln = checker[j]
// Create 'if' statement that says if any number within the nested array has a remainder of 1, add it to the original placeholder (work)            
            if (lincoln % 2 === 1){
                work += lincoln
            }
        
        }   
    }
// Return the placeholder with the total    
    return work
}
// Log the function with the initial argument
console.log(proper(nested))

// Problem #3
// Create a function that logs only the EVEN numbers in the array and in the nested arrays.
// After logging every even number, return, 'Done!'

// Create a function (suave) with a paramater (lotion)
function suave (lotion){ 
// Create a 'for' loop that begins at 0, and loops through the array until it reaches the last number in the first array   
    for (let i = 0; i < lotion.length; i++ ){
// Create a variable that accounts for all numbers within the first array        
        let engine = lotion[i]
// Create an 'if' statement that checks to see if each number is in the first array, which they all are except zero        
        if (Array.isArray(engine)){
// Create a loop that starts at 0, and loops though the nested array  until it reaches the last number in the nested array            
            for (let j = 0; j < engine.length; j++){
// Create a variable to account for every number in the nested array                
                let staple = engine[j]
// Create condition that if the looped number within the nested array has a remainder of zero, log the number within the nested array              
                if (staple % 2 === 0){
                    console.log(staple) 
                }
            }
// Otherwise if the looped number within the first array has a remainder of zero, log the number within the first array            
        } else if (engine % 2 === 0){
            console.log(engine)
        }

    }
// Return string `Done!`    
    return 'Done!'
}
// Log the function with initial argument (nested)
console.log(suave(nested))


// Part 2

 let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
// For each problem, use the nested array above and….

 
// Problem #4
// Create a function that logs every word in the array and the nested arrays.
// Return 'Done!' at the end

// We create a function (mac) with a parameter (cheese)
function mac (cheese){
// We create a 'for' loop that begins at 0 and loops through each number until it ends at last number within the first array    
    for (let i = 0; i < cheese.length; i++ ){
// We create a variable (bacon) that accounts for every number within the first array
        let bacon = cheese[i]
// We create a condition or 'if' statement that checks to see if each number is in the array, which they all are except zero      
        if (Array.isArray(bacon)){
// We create a 'for' loop that begins at 0 and loops through each strubg within the nested array until it reaches the last stringdffv  in the nested array            
            for (let j = 0; j < bacon.length; j++){
// Create variable to account for all strings within the nested array                
                let chive = bacon[j]
// Log every string in the nested array                
                console.log(chive)

            }
// Otherwise log every string in the first array            
        } else {            
            console.log(bacon)
        }
    }
// Return string 'Done!'    
    return 'Done!'
}
// Log function (mac) with original argument (nestedArr)
console.log(mac(nestedArr))


// Problem #5
// Create a function that adds that word 'nested' to the end of every nested array.
// Return the new array

// We create a function (whiskey) with a parameter (tequila)
function whiskey (tequila){
// Create a 'for' loop that begins at the zero index, and loops through the first array until it reaches the last string of the first index    
    for (let i = 0; i < tequila.length; i++){
// Create a variable that accounts for all strings within the nested array        
        let vodka = tequila[i]
// Create condition that if string is in a nested array, add 'nested' on the end of the nested array        
        if (Array.isArray(vodka)){
            vodka.push('nested')
        }
    }
// Return the final parameter    
    return tequila
}
// Log function with original argument
console.log(whiskey(nestedArr))


// Problem #6
// Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays.
// Return 'Done!' at the end

// We create a function (where) with a parameter(there)
function where (there){
// We create a 'for' loop that begins at the first index of the array, and loops through until it reaches the last string in the array    
    for (let i = 0; i < there.length; i++){
// Create a variable that accounts for all strings in the first array        
        let who = there[i]
// Create condition that checks to see if (who) is an array, which it is      
        if(Array.isArray(who)){
// Create 'for' loop that starts at the first string in the nested array and loops until it reaches the last string in the nested array            
            for (let j = 0; j < who.length; j++){
// Create a variable to account for all strings in the nested array                
                let what = who[j]
// Create condition that if any string in the nested array contains the letter 'a', log the string                
                if (what.includes('a')){
                    console.log(what)
                }   
            }
// Otherwise if any string in the first array contains the letter 'a', log the string in the first array             
        } else if (who.includes('a')){
            console.log(who)
        }
    }
// Return String 'Done'    
    return 'Done!'
}
// Log function with the original argument
console.log(where(nestedArr))


// Problem #7
// Create a function that logs every word that has a length of 4 in the array and in the nested arrays.
// Return 'Done!' at the end

// We create a function (chill) with a paramenter (icy)
function chill (icy){
// We create a 'for' loop that begins at the first string in the first array and loops through each string until it reaches the last string in the nested array    
    for (let i = 0; i < icy.length; i++){
// We create a variable that accounts for all strings within the first array (icy)        
        let breezy = icy[i] 
// Create a condition that checks to see if first array is an array, which it is        
        if (Array.isArray(breezy)){
// Create a 'for' loop that loops through the nested array from the first string to the last            
            for (let j = 0; j < breezy.length; j++){
// Create a variable to account for each string in the nested array                
                let frosty = breezy[j]
// Create condition that if the length of the string in the nested array is equal to 4, log the string                 
                if (frosty.length === 4){
                    console.log(frosty)
                }                            
            }
// Otherwise if the length of the string in the first array is equal to 4, log the string                        
        } else if (breezy.length === 4){
            console.log(breezy)
    }    
}
// Return string 'Done!'
return 'Done!'
}
// Log function (chill) with original argument (nestedArr)
console.log(chill(nestedArr))


