let add = document.getElementById('add')
let withdraw = document.getElementById('delete')
let body = document.querySelector('body')

let i = 0

function high (){
   let adding = document.createElement('div');
   adding.setAttribute('id', i)
   adding.innerHTML = 'adding'
   body.appendChild(adding);
   console.log(i)
   i++
}

function low (){
    let scram = document.getElementById(i-1)
    console.log(i)
    scram.parentNode.removeChild(scram);

    i--
}

withdraw.addEventListener('click', low)
add.addEventListener('click', high)