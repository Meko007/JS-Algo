/*
Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.
*/
const isThree = n => {
    let count = 0;
    for(let i = 1; i <= n; i++) if(n % i === 0) count++;
    return count === 3 ? true : false;
};

//Test cases
// console.log(isThree(2));
// console.log(isThree(4));
// console.log(isThree(6));
// console.log(isThree(26));