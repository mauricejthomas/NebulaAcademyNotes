// Price of Mangoes

function mango(quantity, price){
    let freeMangos = Math.floor(quantity / 3);
  return (quantity - freeMangos) * price;
  }
