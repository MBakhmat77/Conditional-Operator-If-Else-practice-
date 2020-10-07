 function fuelPrice(litres, pricePerLitre) {

   let totalCost;
   let discountPerLitre;
   let totalDiscount;
   if (litres  >= 2 && litres < 4) {
   totalDiscount = 0.05 * litres;
   totalCost = ( pricePerLitre * litres) - totalDiscount;
    return totalCost =+(totalCost.toFixed(2));
   }else if ( litres >= 4 && litres < 6){
   totalDiscount =  0.1 * litres;
    totalCost = ( pricePerLitre * litres) - totalDiscount;
    return totalCost =+(totalCost.toFixed(2));
   }else if ( litres >= 6 && litres < 8){
    totalDiscount = 0.15 * litres;
    totalCost = ( pricePerLitre * litres) - totalDiscount;
    return totalCost =+(totalCost.toFixed(2));
   }else if ( litres >= 8 && litres < 10){
    totalDiscount =  0.20 * litres;
    totalCost = ( pricePerLitre * litres) - totalDiscount;
    return totalCost =+(totalCost.toFixed(2));
    }else if ( litres >= 10) {
    totalDiscount = 0.25 * litres;
    totalCost=  ( pricePerLitre * litres) - totalDiscount;
   return  totalCost =+(totalCost.toFixed(2));
   }
 } 
