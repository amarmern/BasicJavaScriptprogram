//using while loop
function factorialize(num) {
var result = num;
while(num > 1){
  num--;
  console.log(num);
  result = result * num;
}  
console.log(result);
}
factorialize(5);



