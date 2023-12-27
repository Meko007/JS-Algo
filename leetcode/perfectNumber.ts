/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
*/
const checkPerfectNumber = (num: number) => {
    let sum = 0;
    for(let i = 1; i < num; i++){
        if(num % i === 0) sum += i;
    }
    return sum === num ? true : false;
};

//Test cases
// console.log(checkPerfectNumber(28));
// console.log(checkPerfectNumber(7));
// console.log(checkPerfectNumber(61));