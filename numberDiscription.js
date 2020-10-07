function numberDescription(num){
 if ( num > 0 && num < =9)
  return "one-digit number";
  else if(num >10 && num < 99) 
  return "two-digit number";
  else if ( num > 99 && num <=999)
  return "three-digit number";
}
console.log(numberDescription(345));
