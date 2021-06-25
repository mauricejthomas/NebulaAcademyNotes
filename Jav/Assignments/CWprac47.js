// Miles per gallon to kilometers per liter

let LITRES_PER_GALLON = 4.54609188;
let KILOMETERS_PER_MILE = 1.609344;
function converter (mpg) {
  return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}