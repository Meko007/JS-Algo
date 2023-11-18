/*
You have to search all numbers from inclusive 1 to inclusive a given number 'x', that have the given digit 'd' in it.
The value of 'd' will always be 0 - 9.
The value of 'x' will always be greater than 0.

You have to return as an array:

- the count of these numbers,
- their sum
- and their product.
*/
const numbersWithDigitInside = (x, d) => {
    let count = 0, sum = 0, product = 1;
    for(let i = 1; i <= x; i++){
        if(i.toString().includes(d)) count++, sum += i, product *= i;
    }
    if(count === 0) return [0, 0, 0];
    return [count, sum, product];
}; 

//Test cases
// console.log(numbersWithDigitInside(5, 6));
// console.log(numbersWithDigitInside(1, 0));
// console.log(numbersWithDigitInside(7, 6));
// console.log(numbersWithDigitInside(11, 1));
// console.log(numbersWithDigitInside(20, 0));
// console.log(numbersWithDigitInside(44, 4));