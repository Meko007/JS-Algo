/*
Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)
*/
const isPrime = (num: number) => { //function to check for prime numbers
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    // If the number is divisible by any number between 2 and its square root, it's not a prime
    return true;
};

const evenCount = (num: number) => {
    return String(num).split('').filter(digit => parseInt(digit) % 2 === 0).length;
};

//Main function
const f = (n: number) => {
    if(n < 4) return 2; //Handles cases where n is less than 4 (e.g the only prime below 3 is 2 and 2 is 1 even digit)
    let maxPrime = n % 2 === 0 ? n - 1 : n - 2; // Start from the largest even number less than n
    let maxEvenCount = 0;

    //Iterate from the largest even number less than n to 4, skipping multiples of 5
    for(let i = maxPrime; i > 4; i -= 2){
        if(i % 5 === 0) continue; //Skip multiples of 5
        if(isPrime(i)){
            const evenDigitsCount = evenCount(i);
            if(evenDigitsCount > maxEvenCount){
                maxPrime = i;
                maxEvenCount = evenDigitsCount;
            }
        }
    }
    return maxPrime;
};

//Test cases
// console.log(f(1000));
// console.log(f(10000));
// console.log(f(500));
// console.log(f(487));
// console.log(f(100000));