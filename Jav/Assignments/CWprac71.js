// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
    var newArr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        newArr.push(numbers[i]);
      } 
    }
  return newArr;
  }