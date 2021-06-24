// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol){
    var saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
  }