//adding digits of a number together codewars
function sumDigits(number) {
  if(number<0){
    //ensure negative numbers turn positive
number=number*-1;
//split elements and turn into an array 
var array=number.toString().split('').map(function(item, index){
  return parseInt(item);
});
//loop through using reduce function and sum digits
var sum = array.reduce(function(a,b){
  return a+b;
} );
return sum;
}
  else {
    array=number.toString().split('').map(function(item, index){
  return parseInt(item);
});

sum = array.reduce(function(a,b){
  return a+b;
} );
return sum;
  }
}
//call function
sumDigits(567);