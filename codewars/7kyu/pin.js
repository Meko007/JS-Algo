/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/
const validatePIN = pin => /^\d{4}(\d{2})?$/.test(pin);

// Test cases
// console.log(validatePIN('12'));
// console.log(validatePIN('a234'));
// console.log(validatePIN(''));
// console.log(validatePIN('123456'));
// console.log(validatePIN('1234'));
// console.log(validatePIN('4212333'));
