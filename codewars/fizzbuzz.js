/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

1. If the value is a multiple of 3: use the value "Fizz" instead
2. If the value is a multiple of 5: use the value "Buzz" instead
3. If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.
*/
const fizzbuzz = n => {
    let arr = []
    for(let i = 1; i <= n; i++){
        if (i % 15 === 0) arr.push("FizzBuzz");
        else if (i % 3 === 0) arr.push("Fizz");
        else if (i % 5 === 0) arr.push("Buzz");
        else arr.push(i);
    }
    return arr;
};

//Test cases
// console.log(fizzbuzz(30));
// console.log(fizzbuzz(60));
// console.log(fizzbuzz(90));