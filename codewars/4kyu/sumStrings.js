/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/
const sumStrings = (a, b) => { return (BigInt(a) + BigInt(b)).toString(); };

// OR

// const sumStrings = (a, b) => {
//     let num1 = BigInt(a);
//     let num2 = BigInt(b);
//     return (num1 + num2).toString();
// }

//Test cases
// console.log(sumStrings('123', '456'));
// console.log(sumStrings('134223', '2321212'));
// console.log(sumStrings('123112', '2232323'));