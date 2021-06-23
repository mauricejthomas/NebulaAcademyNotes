// pick a set of first elements

function first(arr, n) {
    if(n == undefined) return arr.slice(0, 1);
    if(n == 0) return [];
    let newArr = [];
    if(n <= arr.length){
      for(let i = 0; i < n; i++){
        newArr.push(arr[i])
      } return newArr
    } return arr
  }