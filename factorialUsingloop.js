//using  for loop
function factorial(num){
  if(num ==0 || num ==1) return 1;
  for(var i = num-1; i >= 1; i-- ){
    num = num * i;
    //console.log(num);
  }
  console.log(num);
}
factorial(5);