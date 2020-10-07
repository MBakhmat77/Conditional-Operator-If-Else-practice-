        Упорядочены ли цифры в числе?
function ascendingOrDescendingOrder(num){
num = String(num);
if ( num[0] < num[1] && num[1] < num[2] && num[0] < num[2]){
return "ascending order";
} else if ( num[0] > num[1] && num[1] > num[2] && num[0] > num[2] ){
return "descending order";
}else return 'no order';
 if ( arr[0] === arr[1] || arr[1] === arr[2]|| arr[0] === arr[2] ){
return "no order";
}
}
