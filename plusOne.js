const plusOne = function(digits) {
  let num = BigInt(digits.join('')); //converting the array into a BigInt data type
  num += BigInt(1);
  return String(num).split('').map(BigInt); //converts the number back to an array
};
