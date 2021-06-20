// Powers of 2

function powersOfTwo(n){
    let arr = [];
    
    for (var i=0; i<=n; ++i){
      arr.push(Math.pow(2, i));
    }
    
    return arr;
  }