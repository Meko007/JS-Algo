var plusOne = function(digits) {
  let num = BigInt(digits.join(''));
  num += BigInt(1);
  return String(num).split('').map(BigInt);
};
