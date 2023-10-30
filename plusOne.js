//Takes an array of numbers and adds one to the number ([2,1,3] becomes [2,1,4])
const plusOne = function(digits) {
  let num = BigInt(digits.join('')); //converting the array into a BigInt data type
  num += BigInt(1);
  return String(num).split('').map(BigInt); //converts the number back to an array
};

//Test results
//console.log(plusOne([4, 2 ,4]));
//console.log(plusOne([2, 1, 5]));
