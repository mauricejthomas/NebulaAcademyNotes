// Invert values

function invert(array) {
    let newAry = [];
    for (let i = 0; i < array.length; i++) {
      if ( array[i] === 0) {
        newAry.push(array[i]);
      } else {
        newAry.push(array[i] * -1)
      }
    }
    return newAry;
  }